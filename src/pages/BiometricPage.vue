<template>
    <q-page class="flex flex-center no-scroll">
        <div class="camera-card q-pa-none">
            <div class="camera-container relative-position">
                <div class="camera-view">
                    <video
                        ref="video"
                        autoplay
                        playsinline
                        muted
                        class="camera-video"
                        :class="{ 'is-mirrored': facingMode === 'user' }"
                    ></video>
                </div>
                <div class="absolute-full flex flex-center camera-overlay" v-show="!SubmitLoading && !CameraLoading">
                    <q-card class="no-shadow radius-md q-pa-lg">
                        <q-card-section class="text-center">
                            <div class="text-h6 text-uppercase">scan to time in/time out</div>
                            <div class="text-caption">
                                Please position your face within the camera frame and smile clearly.
                            </div>
                        </q-card-section>
                        <q-card-section class="text-center">
                            <q-btn
                                label="Scan"
                                color="primary"
                                unelevated
                                size="lg"
                                icon="bi-camera2"
                                class="text-capitalize btn-lg"
                                :loading="SubmitLoading"
                                @click="ScanFace"
                            />
                        </q-card-section>
                        <div class="absolute-right q-pa-sm">
                            <q-btn unelevated size="md" icon="bi-arrow-repeat" round @click="ToggleCamera" />
                        </div>
                    </q-card>
                </div>
            </div>

            <q-inner-loading :showing="SubmitLoading || CameraLoading">
                <q-card class="no-shadow radius-md q-pa-md">
                    <q-card-section class="text-center">
                        <q-spinner-ios color="dark" />
                        <div class="text-dark text-uppercase text-caption">we're working on it!</div>
                    </q-card-section>
                </q-card>
            </q-inner-loading>

            <!-- <q-card v-if="debugLog.length" class="q-pa-sm" style="max-height:200px; overflow-y:auto; font-size:10px;">
                <div v-for="(line, i) in debugLog" :key="i">{{ line }}</div>
            </q-card> -->
        </div>
    </q-page>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import * as faceapi from 'face-api.js'
import { api } from 'src/boot/axios'
import { Toast } from 'src/boot/sweetalert'

const CameraLoading = ref(false)
const SubmitLoading = ref(false)

// ---------- Camera (native getUserMedia, no third-party wrapper) ----------
const video = ref(null)
let stream = null
const facingMode = ref('user')

function buildConstraints(mode) {
    return { video: { facingMode: mode, width: { ideal: 1280 }, height: { ideal: 720 } } }
}

async function startCamera() {
    CameraLoading.value = true
    try {
        stream = await navigator.mediaDevices.getUserMedia(buildConstraints(facingMode.value))
        video.value.srcObject = stream
        await video.value.play()
    } catch (err) {
        console.error(err)
        Toast.fire({ icon: 'error', title: 'Camera unavailable', text: 'Could not access the camera.' })
    } finally {
        CameraLoading.value = false
    }
}

function stopCamera() {
    stream?.getTracks().forEach(track => track.stop())
    stream = null
}

async function ToggleCamera() {
    facingMode.value = facingMode.value === 'user' ? 'environment' : 'user'
    stopCamera()
    await startCamera()
}

// ---------- Face-api models (loaded once, cached) ----------
let modelsLoaded = false

async function loadModels() {
    if (modelsLoaded) return

    const MODEL_URL = `${window.location.origin}/models`
    await Promise.all([
        faceapi.nets.ssdMobilenetv1.loadFromUri(MODEL_URL),
        faceapi.nets.faceLandmark68Net.loadFromUri(MODEL_URL),
        faceapi.nets.faceRecognitionNet.loadFromUri(MODEL_URL),
        faceapi.nets.faceExpressionNet.loadFromUri(MODEL_URL)
    ])
    modelsLoaded = true
}

// ---------- Live detection straight off the video feed ----------
// No per-frame blob/Image conversion needed — face-api can read the <video> element directly.
async function detectSmileLive(timeoutMs = 6000, threshold = 0.7) {
    const start = Date.now()

    while (Date.now() - start < timeoutMs) {
        const detection = await faceapi
            .detectSingleFace(video.value)
            .withFaceLandmarks()
            .withFaceExpressions()

        if (detection) {
            const happy = detection.expressions?.happy || 0
            if (happy >= threshold) return { passed: true, happy }
        }

        await new Promise(r => setTimeout(r, 200))
    }

    return { passed: false, happy: 0 }
}

async function detectDescriptorLive() {
    const detection = await faceapi
        .detectSingleFace(video.value)
        .withFaceLandmarks()
        .withFaceDescriptor()

    return detection ? { descriptor: detection.descriptor } : null
}

// Capture a still frame as a canvas, downscaled from the live video resolution.
// Detection still runs against the full-res <video> element for accuracy — only
// the final saved image is shrunk, to keep stored payloads small.
function captureCanvas(maxWidth = 480) {
    if (!video.value) return null

    const vw = video.value.videoWidth
    const vh = video.value.videoHeight
    const scale = Math.min(1, maxWidth / vw)

    const canvas = document.createElement('canvas')
    canvas.width = Math.round(vw * scale)
    canvas.height = Math.round(vh * scale)
    canvas.getContext('2d').drawImage(video.value, 0, 0, canvas.width, canvas.height)

    return canvas
}

function canvasToBase64(canvas, type = 'image/jpeg', quality = 0.7) {
    // Full data URL, e.g. "data:image/jpeg;base64,/9j/4AAQ..."
    return canvas.toDataURL(type, quality)
}

// ---------- Device metadata helpers ----------
function getDeviceId() {
    const key = 'device_id'
    let id = localStorage.getItem(key)
    if (!id) {
        id = crypto.randomUUID()
        localStorage.setItem(key, id)
    }
    return id
}

async function getCameraId() {
    try {
        const devices = await navigator.mediaDevices.enumerateDevices()
        const cams = devices.filter(d => d.kind === 'videoinput')
        return cams[0]?.label || cams[0]?.deviceId || 'unknown-camera'
    } catch {
        return 'unknown-camera'
    }
}

// ---------- Geolocation (properly awaitable — previously resolved before a position was ever read) ----------
const geo_lat = ref(null)
const geo_lng = ref(null)
const geoError = ref(null)

function getLocation() {
    return new Promise(resolve => {
        if (!navigator.geolocation) {
            geoError.value = 'Geolocation not supported'
            resolve(false)
            return
        }

        navigator.geolocation.getCurrentPosition(
            (position) => {
                geo_lat.value = position.coords.latitude
                geo_lng.value = position.coords.longitude
                resolve(true)
            },
            (error) => {
                geoError.value = error.message
                resolve(false)
            },
            { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
        )
    })
}

// ---------- Debug log (kiosk troubleshooting panel) ----------
const debugLog = ref([])

function logDebug(label, data) {
    const entry = `${new Date().toLocaleTimeString()} — ${label}: ${JSON.stringify(data)}`
    debugLog.value.unshift(entry)
    if (debugLog.value.length > 50) debugLog.value.length = 50
    console.log(label, data)
}

function logBackendErrors(backendErrors) {
    const errorsArray = Array.isArray(backendErrors) ? backendErrors : backendErrors?.errors || []
    errorsArray.forEach(err => console.warn(`Field error [${err.path}]:`, err.msg))
}

// ---------- Scan flow ----------
async function ScanFace() {
    SubmitLoading.value = true
    logDebug('Scan started', {})

    try {
        const { passed, happy } = await detectSmileLive(6000, 0.7)
        logDebug('Smile check result', { passed, happy })

        if (!passed) {
            Toast.fire({
                icon: 'error',
                html: `
                    <div class="text-subtitle1 text-bold text-uppercase">Liveness check failed!</div>
                    <div class="text-caption text-capitalize">Please smile clearly to continue</div>
                `
            })
            return
        }

        const result = await detectDescriptorLive()
        logDebug('Descriptor detection', { detected: !!result })

        if (!result) {
            Toast.fire({
                icon: 'error',
                html: `
                    <div class="text-subtitle1 text-bold text-uppercase">no face detected!</div>
                    <div class="text-caption text-capitalize">Please align your face and try again</div>
                `
            })
            return
        }

        const canvas = captureCanvas()
        const imageBase64 = canvas && canvasToBase64(canvas)

        if (!imageBase64) {
            Toast.fire({ icon: 'error', title: 'Capture failed', text: 'Could not capture an image, please try again.' })
            return
        }

        logDebug('Snapshot captured', { base64Length: imageBase64.length })

        const deviceId = getDeviceId()
        const cameraId = await getCameraId()
        logDebug('Device info', { deviceId, cameraId })

        // Refresh location right before sending so it isn't stale from page load
        await getLocation()
        const lat = geo_lat.value
        const lng = geo_lng.value
        logDebug('Geolocation', { lat, lng })

        const descriptorArr = Array.from(result.descriptor)

        const payload = {
            descriptor: descriptorArr,
            geo_lat: lat,
            geo_lng: lng,
            camera_id: cameraId,
            device_id: deviceId,
            image_path: imageBase64, // base64 image itself, stored under image_path
            source: 'Web'
        }

        logDebug('Sending request', { url: '/portal/biometric' })

        // Plain JSON now (no file upload) — make sure your API's body size limit
        // is raised to accommodate base64 images (see backend note).
        const response = await api.post('/portal/biometric', payload)

        logDebug('Backend response received', response.data)

        const { match, employee: matchedEmployee, log, distance, liveness_passed } = response.data
        const recognitionScore = Math.max(0, Math.min(1, 1 - Number(distance || 0)))

        if (!match) {
            logDebug('No match', { distance })
            Toast.fire({
                icon: 'error',
                html: `
                    <div class="text-subtitle1 text-bold text-uppercase">not recognized!</div>
                    <div class="text-caption text-capitalize">no matching employee found</div>
                    <div class="text-caption text-capitalize">Distance: ${Number(distance ?? -1).toFixed(4)}</div>
                `
            })
        } else {
            const fullName = `${matchedEmployee.first_name} ${matchedEmployee.middle_name ?? ''} ${matchedEmployee.last_name}`
                .replace(/\s+/g, ' ')
                .trim()
                .toUpperCase()

            const rawDateTime = new Date(log.captured_at)
            const formattedDate = rawDateTime.toLocaleDateString('en-PH', { year: 'numeric', month: 'long', day: 'numeric' })
            const formattedTime = rawDateTime.toLocaleTimeString('en-PH', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true })

            logDebug('Match found', { fullName, distance, liveness_passed })

            Toast.fire({
                icon: 'success',
                html: `
                    <div class="text-subtitle1 text-bold text-uppercase">log recorded!</div>
                    <div class="text-body1 text-capitalize">${fullName}</div>
                    <div class="text-caption text-capitalize">${formattedDate} @ ${formattedTime}</div>
                    <div class="text-caption text-capitalize">Score: ${recognitionScore.toFixed(4)} | Liveness: ${liveness_passed ? 'Passed' : 'Failed'}</div>
                `
            })
        }
    } catch (e) {
        logDebug('CAUGHT ERROR', {
            message: e.message,
            code: e.code,
            hasResponse: !!e.response,
            status: e.response?.status,
            responseData: e.response?.data
        })

        if (e.response?.data) logBackendErrors(e.response.data)

        Toast.fire({
            icon: 'error',
            html: `
                <div class="text-h6 text-bold text-uppercase">Request Failed</div>
                <div class="text-caption">${e.message || 'Something went wrong.'}</div>
            `
        })
    } finally {
        SubmitLoading.value = false
    }
}

onMounted(async () => {
    await loadModels()
    await startCamera()
    await getLocation()
})

onBeforeUnmount(stopCamera)
</script>

<style scoped>
/* Keeps the camera frame at a consistent, sensible size across phones, tablets,
   and desktop — width-driven with a fixed aspect-ratio, rather than stretching
   to fill whatever container height happens to be available. */
.camera-card {
    width: 100%;
    max-width: 480px;
    margin: 0 auto;
    padding: 16px;
    box-sizing: border-box;
}

.camera-container {
    width: 100%;
    aspect-ratio: 3 / 4;
    overflow: hidden;
    border-radius: 16px;
    background: #000;
}

.camera-view {
    position: absolute;
    inset: 0;
}

.camera-video {
    width: 100%;
    height: 100%;
    /* Fills the frame without letterboxing, but crops rather than stretches —
       this is what keeps the framing/zoom level consistent across devices
       whose native camera aspect ratio doesn't exactly match the container. */
    object-fit: cover;
    object-position: center;
    display: block;
}

/* Only mirror the front-facing camera — mirroring the rear camera would be
   disorienting since it doesn't match what the user sees in real life. */
.camera-video.is-mirrored {
    transform: scaleX(-1);
}

/* On short/narrow phone screens, relax the aspect ratio slightly so the
   camera card plus overlay card both fit without scrolling. */
@media (max-width: 400px), (max-height: 700px) {
    .camera-card {
        padding: 8px;
    }

    .camera-container {
        aspect-ratio: 3 / 4.4;
        border-radius: 12px;
    }
}

@media (min-width: 900px) {
    .camera-card {
        max-width: 560px;
    }

    .camera-container {
        aspect-ratio: 4 / 3;
    }
}
</style>