<template>
    <div class="camera-wrap">

    <SimpleVueCamera ref="camera" class="camera-view mirror" />

    <!-- Overlay -->
    <div class="overlay">
      <!-- dark mask -->
      <div class="mask"></div>

      <!-- face guide -->
      <div class="face-guide">
        <div class="crosshair"></div>
        <div class="hint">Align your face inside the frame</div>
      </div>
    </div>
<q-page-sticky position="bottom" :offset="[0, 75]" >
    <q-btn
        unelevated
        size="xl"
        color="primary"
        class="btn-xl text-uppercase"
        label="START SCAN"
        :loading="SubmitLoading"
        @click="ScanFace()"
    >
        <template v-slot:loading>
            <q-spinner-puff />
        </template>
    </q-btn>
</q-page-sticky>
  </div>
    <!-- <div class="camera-wrap">
        <SimpleVueCamera ref="camera" class="camera-view mirror"/>
    <div class="overlay">
      <div class="mask"></div>
      <div class="face-guide">
        <div class="hint">Align your face inside the frame</div>
        <div class="crosshair"></div>

      </div>
    </div>
        <q-page-sticky position="top" :offset="[0, 0]" class="full-width full-height flex flex-center">
    <q-btn
        unelevated
        size="xl"
        color="primary"
        class="btn-xl text-uppercase"
        label="START SCAN"
        :loading="SubmitLoading"
        @click="ScanFace()"
    >
        <template v-slot:loading>
            <q-spinner-puff />
        </template>
    </q-btn>
</q-page-sticky>

        <q-page-sticky position="top-right" :offset="[18, 18]">
           <q-card class="no-shadow radius-md" style="width: 250px;">
                <q-card-section>
                    <div class="text-body1 text-bold">Face Recognition</div>
                    <div class="text-caption">Please position your face within the camera frame and smile clearly.</div>
                </q-card-section>
            </q-card>
        </q-page-sticky>
    </div> -->
</template>
<script setup>
import { ref, onMounted, onBeforeUnmount, onBeforeMount, watch, reactive, computed } from 'vue';
import { api } from 'src/boot/axios';
import moment from 'moment';
import Swal from 'sweetalert2';
import { Toast } from 'src/boot/sweetalert'; 
import { useEmployeeStore } from 'src/stores/employee-store'
const EmployeeStore = useEmployeeStore();

const SubmitLoading = ref(false);

import * as faceapi from 'face-api.js';
import SimpleVueCamera from 'simple-vue-camera';

const camera = ref(null);

async function loadModels() {
    const MODEL_URL = '/models'; // put face-api models here
    await faceapi.nets.ssdMobilenetv1.loadFromUri(MODEL_URL);
    await faceapi.nets.faceLandmark68Net.loadFromUri(MODEL_URL);
    await faceapi.nets.faceRecognitionNet.loadFromUri(MODEL_URL);

    await faceapi.nets.faceExpressionNet.loadFromUri(MODEL_URL)
}

async function captureFrame() {
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
function createImageFromBlob(blob) {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve(img);
        img.onerror = reject;
        img.src = URL.createObjectURL(blob);
    });
}

// usage in registerFace or scanFace
async function detectDescriptor() {
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
async function sha256Hex(input) {
    const data = input instanceof ArrayBuffer
        ? input
        : (input instanceof Blob)
        ? await input.arrayBuffer()
        : new TextEncoder().encode(String(input)).buffer

    const hashBuffer = await crypto.subtle.digest('SHA-256', data)
    return [...new Uint8Array(hashBuffer)].map(b => b.toString(16).padStart(2, '0')).join('')
}

// Stable device id (stored once)
function getDeviceId() {
    const key = 'device_id'
    let id = localStorage.getItem(key)
    if (!id) {
        id = crypto.randomUUID()
        localStorage.setItem(key, id)
    }
    return id
}

// Try to get active camera label (camera_id)
async function getCameraId() {
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

const ScanFace = async () => {
    SubmitLoading.value = true;

    try {

        const { passed, happy } = await detectSmile(6000, 0.7)

        if (!passed) {
            Swal.fire({
                icon: 'error',
                title: 'Liveness Failed',
                text: 'Please smile clearly to continue.',
                confirmButtonColor: "#d33",
            })
            return
        }

        const result = await detectDescriptor();

        const blob = await camera.value.snapshot() // Blob
        const imageHash = await sha256Hex(blob)

        const deviceId = getDeviceId()
        const cameraId = await getCameraId()

        const lat = geo_lat.value
        const lng = geo_lng.value

        const descriptorArr = Array.from(result.descriptor)
        const payloadForHash = {
            employee_id: EmployeeStore?.employee?.id || null, // optional if you have it
            descriptor: descriptorArr,                        // or you can omit if too large
            geo_lat: lat,
            geo_lng: lng,
            camera_id: cameraId,
            device_id: deviceId,
            image_hash: imageHash,
            captured_at: new Date().toISOString(),
            source: 'Web',
        }
        const payloadHash = await sha256Hex(JSON.stringify(payloadForHash))

        // Send as multipart/form-data
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

        const response = await api.post(`/portal/biometric`, form, {
            headers: { 'Content-Type': 'multipart/form-data' }
        })

        const { match, employee, log, distance, liveness_passed } = response.data

        // score example (0..1); adjust to your face distance scale
        const recognitionScore = Math.max(0, Math.min(1, 1 - Number(distance || 0)))

        if (!match) {
            Swal.fire({ icon: "error", title: "Face Not Recognized", text: "No matching employee found." })
        } else {
            const fullName = `${employee.first_name} ${employee.middle_name ?? ''} ${employee.last_name}`.toUpperCase()
            const rawDateTime = new Date(`${log.captured_at}`)
            const formattedDate = rawDateTime.toLocaleDateString('en-PH', { year: 'numeric', month: 'long', day: 'numeric' })
            const formattedTime = rawDateTime.toLocaleTimeString('en-PH', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true })

            Swal.fire({
                icon: 'success',
                title: 'LOG RECORDED',
                confirmButtonColor: "#900201",
                html: `
                    <div style="font-size:1.25em;font-weight:bold;">${fullName}</div>
                    <div style="font-size:1em; margin-top:5px;">${formattedDate} @ ${formattedTime}</div>
                    <div style="font-size:.9em; margin-top:5px;">Score: ${recognitionScore.toFixed(4)} | Liveness: ${liveness_passed ? 'Passed' : 'Failed'}</div>
                `
            })
        }
        emit('update:modelValue', null);
    } catch (e) {
        if (e.response && e.response.data) {
            applyBackendErrors(e.response.data);
            Toast.fire({
                icon: "error",
                html: `
                    <div class="text-h6 text-bold text-uppercase">Request Failed</div>
                    <div class="text-caption">Something went wrong.</div>
                `
            })
        }
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

onMounted(() => {
    PopulateData()
})

const PopulateData = async (app) => {
    await loadModels();
    employee.value = [];
    isMatch.value = false;
    getLocation();
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


</script>

<style scoped>
.camera-wrap{
    position: relative;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    background: #000;
}

.camera-view{
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* overlay container */
.overlay{
  position: absolute;
  inset: 0;
  pointer-events: none; /* don't block camera clicks */
}

/* optional dark overlay (subtle) */
.mask{
  position: absolute;
  inset: 0;
  background: rgba(0,0,0,.25);
}

/* face guide (oval) */
.face-guide{
  position: absolute;
  top: 50%;
  left: 50%;
  width: min(72vw, 350px);
  height: min(92vw, 450px);
  transform: translate(-50%, -50%);
  border: 4px solid rgba(255,255,255,.9);
  border-radius: 50% / 55%;
  box-shadow: 0 0 0 9999px rgba(0,0,0,.35); /* creates a cutout effect */
}

/* hint text */
.hint{
  position: absolute;
  bottom: -44px;
  left: 50%;
  transform: translateX(-50%);
  color: #fff;
  font-weight: 600;
  font-size: 14px;
  text-align: center;
  width: 260px;
  opacity: .95;
}

.crosshair{
  position: absolute;
  inset: 0;
}
.crosshair::before,
.crosshair::after{
  content: "";
  position: absolute;
  background: rgba(255,255,255,.8);
}
.crosshair::before{
  width: 40%;
  height: 2px;
  top: 50%;
  left: 30%;
}
.crosshair::after{
  width: 2px;
  height: 40%;
  left: 50%;
  top: 30%;
}

.mirror {
  transform: scaleX(-1) !important;
}


</style>