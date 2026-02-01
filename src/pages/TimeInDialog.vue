<template>
    <q-dialog v-model="isOpen" persistent class="dialog" @before-show="PopulateData(); ">
        <q-card class="dialog-card column full-height">
            <q-card-section class="q-pa-lg">
                <div class="text-h6 text-uppercase">time in</div>
            </q-card-section>
            <q-separator inset />
            <q-card-section class="col q-pa-lg scroll">
                <SimpleVueCamera ref="camera"/>
            </q-card-section>
            
            <q-card-actions class="q-pa-lg bg" align="center">
                <div class="q-gutter-sm">
                    <q-btn unelevated size="md" color="primary" class="btn text-capitalize" label="scan" @click="ScanFace()" />
                    <q-btn unelevated size="md" color="primary" class="btn text-capitalize" label="discard" @click="() => { emit('update:modelValue', null); }" outline/>
                </div>
            </q-card-actions>
            <q-inner-loading :showing="SubmitLoading">
                <div class="text-center">
                    <q-spinner-puff size="md"/>
                    <div class="text-caption text-grey text-uppercase q-mt-xs">we're working on it!</div>
                </div>
            </q-inner-loading>
        </q-card>
    </q-dialog>
</template>
<script setup>
import { ref, onMounted, onBeforeUnmount, onBeforeMount, watch, reactive, computed } from 'vue';
import { api } from 'src/boot/axios';
import moment from 'moment';
import Swal from 'sweetalert2';
import { Toast } from 'src/boot/sweetalert'; 
import { useEmployeeStore } from 'src/stores/employee-store'
const EmployeeStore = useEmployeeStore();

const props = defineProps({
    modelValue: String,
    dialogName: String
})

const emit = defineEmits(['update:modelValue'])

const isOpen = computed({
    get: () => props.modelValue === props.dialogName,
    set: (val) => {
        if (!val) emit('update:modelValue', null)
    }
})

const SubmitLoading = ref(false);

import * as faceapi from 'face-api.js';
import SimpleVueCamera from 'simple-vue-camera';

const camera = ref(null);
const name = ref('');
const lastResult = ref(null);
const faceDialog = ref(false);

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

async function scanFace() {
  lastResult.value = 'Scanning...';
  const result = await detectDescriptor();
  if (!result) return (lastResult.value = 'No face detected');

  const payload = { descriptor: Array.from(result.descriptor) };
  try {
    const res = await fetch('http://localhost:3000/api/faces/scan', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    lastResult.value = JSON.stringify(await res.json(), null, 2);
  } catch (err) {
    lastResult.value = 'Error: ' + err.message;
  }
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

        Swal.fire({
  title: 'Liveness Check',
  text: 'Please SMILE 😊',
  allowOutsideClick: false,
  didOpen: () => Swal.showLoading()
})

const { passed, happy } = await detectSmile(6000, 0.7)

Swal.close()

if (!passed) {
  Swal.fire({
    icon: 'error',
    title: 'Liveness Failed',
    text: 'Please smile clearly to continue.'
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

        const response = await api.post(`/portal/timein`, form, {
            headers: { 'Content-Type': 'multipart/form-data' }
        })

        const { match, employee, dtr, distance, liveness_passed } = response.data

        // score example (0..1); adjust to your face distance scale
        const recognitionScore = Math.max(0, Math.min(1, 1 - Number(distance || 0)))

        if (!match) {
        Swal.fire({ icon: "error", title: "Face Not Recognized", text: "No matching employee found." })
        } else {
        const fullName = `${employee.first_name} ${employee.middle_name ?? ''} ${employee.last_name}`.toUpperCase()
        const rawDateTime = new Date(`${dtr.date}T${dtr.time}`)
        const formattedDate = rawDateTime.toLocaleDateString('en-PH', { year: 'numeric', month: 'long', day: 'numeric' })
        const formattedTime = rawDateTime.toLocaleTimeString('en-PH', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true })

        Swal.fire({
            icon: 'success',
            title: 'LOG RECORDED',
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

  return { passed: false, happy: 0 }
}


const PopulateData = async (app) => {
    await loadModels();
    employee.value = [];
    isMatch.value = false;
    getLocation();
}

const geo_lat = ref(null)
const geo_lng = ref(null)
const geoError = ref(null)

const getLocation = () => {
    if (!navigator.geolocation) {
        geoError.value = 'Geolocation not supported'
        return
    }

    navigator.geolocation.getCurrentPosition(
        (position) => {
            geo_lat.value = position.coords.latitude
            geo_lng.value = position.coords.longitude
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

</script>