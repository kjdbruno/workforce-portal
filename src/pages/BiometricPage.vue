<template>
    <q-page class="flex flex-center no-scroll">
        <div class="camera-card q-pa-none">
            <div class="camera-container relative-position">
                <div class="camera-view">
                    <SimpleVueCamera
                        ref="camera"
                        :constraints="cameraConstraints"
                        @loading="LoadingCamera"
                        @started="StartedCamera"
                    />
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
                                @click="ScanFace"
                                :loading="SubmitLoading"
                            />
                        </q-card-section>
                        <div class="absolute-right q-pa-sm">
                            <q-btn
                                unelevated
                                size="md"
                                icon="bi-arrow-repeat"
                                round
                                @click="ToggleCamera"
                            />
                        </div>
                    </q-card>
                </div>
            </div>
            <q-inner-loading :showing="SubmitLoading || CameraLoading">
                <q-card class="no-shadow radius-md q-pa-md">
                    <q-card-section class="text-center">
                        <div>
                            <q-spinner-ios color="dark"/>
                        </div>
                        <div class="text-dark text-uppercase text-caption">we're working on it!</div>
                    </q-card-section>
                </q-card>
            </q-inner-loading>
            <q-card v-if="debugLog.length" class="q-pa-sm" style="max-height:200px; overflow-y:auto; font-size:10px;">
    <div v-for="(line, i) in debugLog" :key="i">{{ line }}</div>
</q-card>
        </div>
    </q-page>
</template>
<script setup>
import { ref, onMounted, onBeforeUnmount, onBeforeMount, watch, reactive, computed } from 'vue';
import { api } from 'src/boot/axios';
import moment from 'moment';
import Swal from 'sweetalert2';
import { Toast } from 'src/boot/sweetalert'; 
import { useEmployeeStore } from 'src/stores/employee-store'
const EmployeeStore = useEmployeeStore();

const CameraLoading = ref(false);
const SubmitLoading = ref(false);

import * as faceapi from 'face-api.js';
import SimpleVueCamera from 'simple-vue-camera';

const camera = ref(null);

const cameraConstraints = ref({
    video: {
        facingMode: 'user',
        width: { ideal: 1280 },
        height: { ideal: 720 }
    }
})
const ToggleCamera = async () => {
    const mode = cameraConstraints.value.video.facingMode
    const newMode = mode === 'user' ? 'environment' : 'user'

    cameraConstraints.value = {
        video: {
            facingMode: newMode,
            width: { ideal: 1280 },
            height: { ideal: 720 }
        }
    }

    if (camera.value) {
        await camera.value.stop()
        await camera.value.start()
    }
}

const loadModels = async () => {
    const MODEL_URL = window.location.origin + '/models';
    await Promise.all([
        faceapi.nets.ssdMobilenetv1.loadFromUri(MODEL_URL),
        faceapi.nets.faceLandmark68Net.loadFromUri(MODEL_URL),
        faceapi.nets.faceRecognitionNet.loadFromUri(MODEL_URL),
        faceapi.nets.faceExpressionNet.loadFromUri(MODEL_URL),
    ])
    console.log('✅ Models loaded')
}

const captureFrame = async () => {
    if (!camera.value) return null;
    try {
        const blob = await camera.value.snapshot(); // returns Blob
        // Convert Blob to Image (HTMLImageElement) for face-api.js
        const img = await createImageFromBlob(blob);
        return img;
    } catch (err) {
        console.error("Error capturing snapshot:", err);
        return null;
    }
}

// helper function
const createImageFromBlob = (blob) => {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve(img);
        img.onerror = reject;
        img.src = URL.createObjectURL(blob);
    });
}

// usage in registerFace or scanFace
const detectDescriptor = async () => {
    const img = await captureFrame();
    if (!img) return null;
    const detection = await faceapi
        .detectSingleFace(img)
        .withFaceLandmarks()
        .withFaceDescriptor();
    if (!detection) return null;
    return { descriptor: detection.descriptor, img };
}

const applyBackendErrors = (backendErrors) => {
    const errorsArray = Array.isArray(backendErrors)
        ? backendErrors
        : backendErrors?.errors || []
    Object.keys(Errors).forEach(key => {
        Errors[key].type = null
        Errors[key].messages = []
    })
    errorsArray.forEach(err => {
        if (Errors[err.path] !== undefined) {
            Errors[err.path].type = true
            Errors[err.path].messages.push(err.msg)
        }
    })
}

// SHA-256 hex using WebCrypto (browser)
const sha256Hex = async (input) => {
    const data = input instanceof ArrayBuffer
        ? input
        : (input instanceof Blob)
        ? await input.arrayBuffer()
        : new TextEncoder().encode(String(input)).buffer

    const hashBuffer = await crypto.subtle.digest('SHA-256', data)
    return [...new Uint8Array(hashBuffer)].map(b => b.toString(16).padStart(2, '0')).join('')
}

// Stable device id (stored once)
const getDeviceId = () => {
    const key = 'device_id'
    let id = localStorage.getItem(key)
    if (!id) {
        id = crypto.randomUUID()
        localStorage.setItem(key, id)
    }
    return id
}

// Try to get active camera label (camera_id)
const getCameraId = async () => {
    try {
        const devices = await navigator.mediaDevices.enumerateDevices()
        const cams = devices.filter(d => d.kind === 'videoinput')
        // If permission granted, labels usually available
        return cams[0]?.label || cams[0]?.deviceId || 'unknown-camera'
    } catch {
        return 'unknown-camera'
    }
}

const employee = ref([]);
const isMatch = ref(false);

const debugLog = ref([]) // add this near your other refs (CameraLoading, SubmitLoading, etc.)

const logDebug = (label, data) => {
    const entry = `${new Date().toLocaleTimeString()} — ${label}: ${JSON.stringify(data)}`
    debugLog.value.unshift(entry)
    console.log(label, data)
}

const ScanFace = async () => {
    SubmitLoading.value = true;
    logDebug('Scan started', {})

    try {
        const { passed, happy } = await detectSmile(6000, 0.7)
        logDebug('Smile check result', { passed, happy })

        if (!passed) {
            Toast.fire({
                icon: "error",
                html: `
                    <div class="text-subtitle1 text-bold text-uppercase">Liveness check failed!</div>
                    <div class="text-caption text-capitalize;">Please smile clearly to continue<div>
                `
            });
            return
        }

        const result = await detectDescriptor();
        logDebug('Descriptor detection', { detected: !!result })

        if (!result) {
            Toast.fire({
                icon: "error",
                html: `
                    <div class="text-subtitle1 text-bold text-uppercase">no face detected!</div>
                    <div class="text-caption text-capitalize;">Please align your face and try again<div>
                `
            });
            return
        }

        const blob = await camera.value.snapshot()
        const imageHash = await sha256Hex(blob)
        logDebug('Snapshot captured', { blobSize: blob.size, imageHash })

        const deviceId = getDeviceId()
        const cameraId = await getCameraId()
        logDebug('Device info', { deviceId, cameraId })

        const lat = geo_lat.value
        const lng = geo_lng.value
        logDebug('Geolocation', { lat, lng })

        const descriptorArr = Array.from(result.descriptor)
        const payloadForHash = {
            descriptor: descriptorArr,
            geo_lat: lat,
            geo_lng: lng,
            camera_id: cameraId,
            device_id: deviceId,
            image_hash: imageHash,
            captured_at: new Date().toISOString(),
            source: 'Web',
        }
        const payloadHash = await sha256Hex(JSON.stringify(payloadForHash))

        const form = new FormData()
        form.append('descriptor', JSON.stringify(descriptorArr))
        form.append('geo_lat', lat ?? '')
        form.append('geo_lng', lng ?? '')
        form.append('camera_id', cameraId)
        form.append('device_id', deviceId)
        form.append('image_hash', imageHash)
        form.append('payload_hash', payloadHash)
        form.append('source', 'Web')
        form.append('captured_at', new Date().toISOString())
        form.append('file', blob, `capture-${Date.now()}.jpg`)

        logDebug('Sending request', { url: '/portal/biometric' })

        const response = await api.post(`/portal/biometric`, form, {
            headers: { 'Content-Type': 'multipart/form-data' }
        })

        logDebug('Backend response received', response.data)

        const { match, employee, log, distance, liveness_passed } = response.data

        const recognitionScore = Math.max(0, Math.min(1, 1 - Number(distance || 0)))

        if (!match) {
            logDebug('No match', { distance })
            Toast.fire({
                icon: "error",
                html: `
                    <div class="text-subtitle1 text-bold text-uppercase">not recognized!</div>
                    <div class="text-caption text-capitalize;">no matching employee found<div>
                    <div class="text-caption text-capitalize;">Distance: ${Number(distance ?? -1).toFixed(4)}<div>
                `
            });
        } else {
            const fullName = `${employee.first_name} ${employee.middle_name ?? ''} ${employee.last_name}`.toUpperCase()
            const rawDateTime = new Date(`${log.captured_at}`)
            const formattedDate = rawDateTime.toLocaleDateString('en-PH', { year: 'numeric', month: 'long', day: 'numeric' })
            const formattedTime = rawDateTime.toLocaleTimeString('en-PH', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true })

            logDebug('Match found', { fullName, distance, liveness_passed })

            Toast.fire({
                icon: "success",
                html: `
                    <div class="text-subtitle1 text-bold text-uppercase">log recorded!</div>
                    <div class="text-body1 text-capitalize;">${fullName}<div>
                    <div class="text-caption text-capitalize;">${formattedDate} @ ${formattedTime}<div>
                    <div class="text-caption text-capitalize;">Score: ${recognitionScore.toFixed(4)} | Liveness: ${liveness_passed ? 'Passed' : 'Failed'}<div>
                `
            });
        }
        emit('update:modelValue', null);
    } catch (e) {
        // Always log something — this used to fail silently on mobile when e.response was undefined
        logDebug('CAUGHT ERROR', {
            message: e.message,
            code: e.code,
            hasResponse: !!e.response,
            status: e.response?.status,
            responseData: e.response?.data,
        })

        if (e.response && e.response.data) {
            applyBackendErrors(e.response.data);
        }

        Toast.fire({
            icon: "error",
            html: `
                <div class="text-h6 text-bold text-uppercase">Request Failed</div>
                <div class="text-caption">${e.message || 'Something went wrong.'}</div>
            `
        })
    } finally {
        SubmitLoading.value = false;
    }
}

const detectSmile = async (timeoutMs = 5000, threshold = 0.7) => {
    const start = Date.now()

    while (Date.now() - start < timeoutMs) {
        const img = await captureFrame()
        if (!img) continue

        const detection = await faceapi
        .detectSingleFace(img)
        .withFaceLandmarks()
        .withFaceExpressions()

        if (!detection) continue

        const happy = detection.expressions?.happy || 0
        if (happy >= threshold) return { passed: true, happy }

        await new Promise(r => setTimeout(r, 200))
    }

    return { 
        passed: false, 
        happy: 0 
    }
}

onMounted(async () => {
    await loadModels();
    await PopulateData()
})

const PopulateData = async (app) => {
    employee.value = [];
    isMatch.value = false;
    await getLocation();
}

const geo_lat = ref(null)
const geo_lng = ref(null)
const geo_place = ref(null)
const geoError = ref(null)

const getLocation = async () => {
    if (!navigator.geolocation) {
        geoError.value = 'Geolocation not supported'
        return
    }

    navigator.geolocation.getCurrentPosition(
        async (position) => {
            geo_lat.value = position.coords.latitude
            geo_lng.value = position.coords.longitude
            await getPlaceName(
                position.coords.latitude,
                position.coords.longitude
            )
        },
        (error) => {
            geoError.value = error.message
        },
        {
            enableHighAccuracy: true,
            timeout: 10000,
            maximumAge: 0
        }
    )
    
}

const getPlaceName = async (lat, lng) => {
    try {
        const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lng}`)
        const data = await response.json()
        geo_place.value = data.display_name || 'Unknown location'
    } catch {
        geo_place.value = 'Unable to fetch location name'
    }
}

const LoadingCamera = () => {
    CameraLoading.value = true;
}

const StartedCamera = () => {
    CameraLoading.value = false;
}


</script>