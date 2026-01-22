<template>
    <q-dialog v-model="isOpen" persistent class="dialog" @before-show="PopulateData(); ">
        <q-card class="dialog-card column full-height">
            <q-card-section class="q-pa-lg">
                <div class="text-h6 text-uppercase">biometric</div>
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

const employee = ref([]);
const isMatch = ref(false);

const ScanFace = async () => {
    SubmitLoading.value = true;
    const result = await detectDescriptor();

    try {
        const response = await api.post(`/portal/biometric`, {
            descriptor: Array.from(result.descriptor)
        });
        const { match, employee, dtr, distance } = response.data;
        if (!match) {
            Swal.fire({
                icon: "error",
                title: "Face Not Recognized",
                text: "No matching employee found in the system."
            });
        } else {
            const fullName = `${employee.first_name} ${employee.middle_name ?? ''} ${employee.last_name}`.toUpperCase();
            const position = employee.employment?.position?.name || 'N/A';

            // 🕒 Format Date & Time
            const rawDateTime = new Date(`${dtr.date}T${dtr.time}`);

            const formattedDate = rawDateTime.toLocaleDateString('en-PH', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            });

            const formattedTime = rawDateTime.toLocaleTimeString('en-PH', {
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
                hour12: true
            });

            Swal.fire({
                icon: 'success',
                title: 'LOG RECORDED',
                html: `
                    <div style="font-size:1.25em;font-weight:bold;">
                        ${fullName}
                    </div>
                    <div style="font-size:1em; margin-top:5px;">
                        ${formattedDate} @ ${formattedTime}
                    </div>
                `
            });
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

const PopulateData = async (app) => {
    await loadModels();
    employee.value = [];
    isMatch.value = false;
}
</script>