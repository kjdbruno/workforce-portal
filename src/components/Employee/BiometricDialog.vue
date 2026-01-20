<template>
    <q-dialog v-model="isOpen" full-height position="right" persistent square class="dialog" @before-show="PopulateData()">
        <q-card class="dialog-card column full-height">
            <q-card-section class="q-pa-lg">
                <div class="text-h6 text-uppercase">face recognition</div>
            </q-card-section>
            <q-separator inset />
            <q-card-section class="col q-pa-lg scroll">
                <SimpleVueCamera ref="camera" />
                    <!-- <div style="margin-top:10px;">
                    <input v-model="name" placeholder="Name (for register)" />
                    <button @click="registerFace">Register Face</button>
                    <button @click="scanFace">Scan (log)</button>
                    </div>
                    <div v-if="lastResult" style="margin-top:10px;">
                    <pre>{{ lastResult }}</pre>
                    </div> -->
            </q-card-section>
            
            <q-card-actions class="q-pa-lg bg">
                <div class="q-gutter-sm">
                    <q-btn unelevated size="md" color="primary" class="btn text-capitalize" label="save" @click="RegisterFace()" />
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

const RegisterFace = async () => {
    SubmitLoading.value = true;
    const result = await detectDescriptor();

    const canvas = document.createElement("canvas");
    canvas.width = result.img.width;
    canvas.height = result.img.height;
    const ctx = canvas.getContext("2d");
    ctx.drawImage(result.img, 0, 0);

    try {
        const response = await api.post(`/employee/${EmployeeStore.data?.id}/biometric`, {
            descriptor: Array.from(result.descriptor),
            imageBase64: canvas.toDataURL("image/png"),
        });
        emit('update:modelValue', null);
        Toast.fire({
            icon: "success",
            html: `
                <div class="text-h6 text-bold text-uppercase">granted!</div>
                <div class="text-caption text-capitalize;">${response.data.message}<div>
            `
        });
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

// async function registerFace() {
//     lastResult.value = "Registering...";
//     const result = await detectDescriptor();
//     if (!result) return (lastResult.value = "No face detected");

//     const canvas = document.createElement("canvas");
//     canvas.width = result.img.width;
//     canvas.height = result.img.height;
//     const ctx = canvas.getContext("2d");
//     ctx.drawImage(result.img, 0, 0);

//     const payload = {
//         name: name.value || "unknown",
//         descriptor: Array.from(result.descriptor),
//         imageBase64: canvas.toDataURL("image/png"),
//     };

//     try {
//         const res = await fetch("http://localhost:3000/api/face/register", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(payload),
//         });
//         lastResult.value = JSON.stringify(await res.json(), null, 2);
//     } catch (err) {
//         lastResult.value = "Error: " + err.message;
//     }
// }


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

const PopulateData = async (app) => {
    await loadModels();
}
</script>