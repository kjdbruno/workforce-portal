<template>
    <q-page class="flex flex-center">
        <q-card class="radius-md no-shadow q-pa-lg" style="width: 65%; box-shadow: rgba(0, 0, 0, 0.09) 0px 3px 12px;">
            <q-card-section class="text-center">
                <div class="text-h6 text-uppercase">scan to file a leave</div>
                <div class="text-caption">Please position your face within the camera frame and smile clearly.</div>
            </q-card-section>
            <q-card-section v-if="!isMatch">
                <SimpleVueCamera ref="camera" @loading="LoadingCamera()" @started="StartedCamera()" class="full-width" />
                <div class="absolute-full flex flex-center camera-overlay" v-show="!SubmitLoading && !CameraLoading">
                    <q-btn label="Scan Face" color="primary" unelevated size="lg" icon="bi-camera2" class="text-capitalize btn-xl" @click="ScanFace" :loading="SubmitLoading"/>
                </div>
            </q-card-section>
            <q-card-section v-else>
                <div class="row q-col-gutter-lg">
                    <div class="col-4">
                        <q-card key="data-add" class="card card-profile no-shadow radius-sm q-mb-sm q-pb-lg">
                            <div class="cover-photo">
                                <img :src="randomCover" alt="Cover"/>
                            </div>
                            <q-card-section class="text-center profile-section">
                                <img :src="FormatAvatar(employee?.photo?.avatar)" alt="Profile" class="profile-img" />
                            </q-card-section>
                            <q-card-section class="text-center q-pt-sm">
                                <div class="text-caption text-uppercase text-white">{{ employee?.employment?.employee_no }}</div>
                                <div class="text-h5 text-uppercase text-bold text-white">{{ FormatName(employee) }}</div>
                                <div class="text-body1 text-uppercase text-white">{{ employee?.employment?.position?.name }}</div>
                                <div class="text-caption text-uppercase text-white">{{ employee?.employment?.employment_status }}</div>
                            </q-card-section>
                        </q-card>
                    </div>
                    <div class="col">
                        <div v-if="step === 0">
                            <div class="text-caption text-uppercase q-mb-sm" :class="Errors.typeid.type ? 'text-negative text-italic' : 'text-grey'">{{ Errors.typeid.type ? Errors.typeid.msg : 'leave type' }}</div>
                            <div class="card-grid">
                                <div class="inner-card-anim-wrapper" :style="{ animationDelay: `100ms` }">
                                    <q-card class="card card-menu card-hover-animate q-pa-md no-shadow cursor-pointer radius-sm q-mr-xs q-mb-xs" v-if="!leavetypes.length">
                                        <q-card-section class="text-center">
                                            <div class="text-caption text-dark text-uppercase">no record found</div>
                                        </q-card-section>
                                    </q-card>
                                </div>
                                <div v-for="(data, index) in leavetypes" :key="`data-${data.id}`" class="inner-card-anim-wrapper" :style="{ animationDelay: `${index * 100}ms` }" v-if="leavetypes.length">
                                    <q-card @click="() => { typeid = data.id }" class="card card-menu card-hover-animate q-pa-md no-shadow cursor-pointer radius-sm q-mr-xs q-mb-xs" :class="{ 'card--active': typeid === data.id }">
                                        <q-card-section class="text-center">
                                            <div class="text-caption text-dark text-uppercase">{{ data.name }}</div>
                                        </q-card-section>
                                        <div class="absolute-left">
                                            <q-radio v-model="typeid" :val="data.id" checked-icon="task_alt" unchecked-icon="panorama_fish_eye" size="xs" />
                                        </div>
                                    </q-card>
                                </div>
                            </div>
                        </div>
                        <div v-if="step === 1">
                            <div class="row q-col-gutter-xs q-mb-md">
                                <div class="col">
                                    <div class="text-caption text-uppercase" :class="Errors.datefrom.type ? 'text-negative text-italic' : 'text-grey'">{{ Errors.datefrom.type ? Errors.datefrom.msg : 'date from' }}</div>
                                    <q-input outlined v-model="datefrom" label="Enter Date" :error="Errors.datefrom.type" no-error-icon>
                                        <q-popup-proxy cover transition-show="scale" transition-hide="scale" class="no-shadow custom-border radius-sm" ref="popup">
                                            <q-date v-model="datefrom" mask="YYYY-MM-DD" @update:model-value="() => { popup.hide(); } " class="full-width"/>
                                        </q-popup-proxy>
                                    </q-input>
                                </div>
                                <div class="col">
                                    <div class="text-caption text-uppercase" :class="Errors.dateto.type ? 'text-negative text-italic' : 'text-grey'">{{ Errors.dateto.type ? Errors.dateto.msg : 'date to' }}</div>
                                    <q-input outlined v-model="dateto" label="Enter Date" :error="Errors.dateto.type" no-error-icon>
                                        <q-popup-proxy cover transition-show="scale" transition-hide="scale" class="no-shadow custom-border radius-sm" ref="popup">
                                            <q-date v-model="dateto" mask="YYYY-MM-DD" @update:model-value="() => { popup.hide(); } " class="full-width"/>
                                        </q-popup-proxy>
                                    </q-input>
                                </div>
                            </div>
                            <div>
                                <div class="text-caption text-uppercase" :class="Errors.reason.type ? 'text-negative text-italic' : 'text-grey'">{{ Errors.reason.type ? Errors.reason.msg : 'reason' }}</div>
                                <q-input 
                                    v-model="reason" 
                                    outlined 
                                    type="textarea" 
                                    :error="Errors.reason.type"
                                    :no-error-icon="true"
                                    label="Enter Reason"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </q-card-section>
            <q-card-actions align="center" class="q-pb-lg">
                <q-btn v-if="isMatch && step > 0" unelevated size="md" color="primary" class="btn text-capitalize" label="previous" @click="() => { PreviousStep() }" />
                <q-btn v-if="isMatch && step < totalSteps - 1" unelevated size="md" color="primary" class="btn text-capitalize" label="next" @click="() => { NextStep() }" />
                <q-btn v-if="isMatch && step === totalSteps - 1" unelevated size="md" color="primary" class="btn text-capitalize" label="save" @click="Save" />
                <q-btn v-if="isMatch" unelevated size="md" color="primary" class="btn text-capitalize" outline label="clear" @click="ResetForm()" />
            </q-card-actions>
            <q-inner-loading :showing="SubmitLoading || CameraLoading">
                <div class="text-center" v-if="CameraLoading">
                    <q-spinner-puff size="xl" color="primary"/>
                    <div class="text-h6 text-dark text-uppercase q-mt-xs">initializing camera!</div>
                </div>
                <div class="text-center" v-else>
                    <q-spinner-puff size="xl" color="primary"/>
                    <div class="text-h6 text-dark text-uppercase q-mt-xs">we're working on it!</div>
                </div>
            </q-inner-loading>
        </q-card>
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
    const result = await detectDescriptor();
    const { passed, happy } = await detectSmile(6000, 0.7)

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

    try {
        const response = await api.post(`/portal/face`, {
            descriptor: Array.from(result.descriptor)
        });
        const { match, employee: emp, distance } = response.data;
        if (!match) {
            Toast.fire({
                icon: "error",
                html: `
                    <div class="text-subtitle1 text-bold text-uppercase">not recognized!</div>
                    <div class="text-caption text-capitalize;">no matching employee found<div>
                `
            });
        } else {
            employee.value = emp
            isMatch.value = true
        }
    } catch (e) {
        if (e.response && e.response.data) {
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
    LoadLeaveTypes();
    ResetForm();
})

const PopulateData = async (app) => {
    await loadModels();
    getLocation();
}

const ResetForm = () => {
    step.value = 0;
    employee.value = [];
    isMatch.value = false;
    typeid.value = '';
    datefrom.value = new Date().toISOString().split('T')[0];
    dateto.value = new Date().toISOString().split('T')[0];
    reason.value = '';
    ResetAllErrors()
}

const ResetAllErrors = () => {
    Object.keys(Errors).forEach(key => {
        Errors[key].type = null;
        Errors[key].msg = '';
    });
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

const FormatAvatar = (photo) => {
    const baseUrl = process.env.VUE_APP_BACKEND_URL
    const defaultAvatar = '/photos/Default.png'

    if (!photo) {
        return `${baseUrl}${defaultAvatar}`
    }

    return `${baseUrl}${photo}`
}

const FormatName = (profile) => {
    if (!profile) return '';
    const firstname = profile.first_name || '';
    const middlename = profile.middle_name
        ? profile.middle_name.charAt(0).toUpperCase() + '.'
        : '';
    const lastname = profile.last_name || '';
    const suffix = profile.suffix ? ` ${profile.suffix}` : '';
    return `${firstname} ${middlename} ${lastname}${suffix}`.trim();
}

const typeid = ref('');
const datefrom = ref('');
const dateto = ref('');
const reason = ref('');

const Errors = reactive({
    typeid: { 
        type: null, message: ''
    },
    datefrom: { 
        type: null, message: ''
    },
    dateto: { 
        type: null, message: ''
    },
    reason: { 
        type: null, message: ''
    }
});

const failToast = () =>
    Toast.fire({
        icon: "error",
        html: `
        <div class="text-h6 text-bold text-uppercase">Request Failed</div>
        <div class="text-caption">Something went wrong.</div>
        `
    })

const setErr = (key, msg = 'required') => (Errors[key].type = true, Errors[key].msg = msg, true)
const clearErr = (key) => (Errors[key].type = null, Errors[key].msg = '', false)

const req = (key, val) => (!val ? setErr(key, 'required') : clearErr(key))

const ValidateLeaveType = () => {

    let isError = false

    isError ||= req('typeid', typeid.value)

    if (isError) failToast()
    return !isError
}

const ValidateDate = () => {

    let isError = false

    isError ||= req('datefrom', datefrom.value)
    isError ||= req('dateto', dateto.value)
    if (datefrom.value && dateto.value && dateto.value < datefrom.value) {
        isError ||= setErr('dateto', 'invalid')
    }
    isError ||= req('reason', reason.value)

    if (isError) failToast()
    return !isError
}

const Save = async () => {
    if (!ValidateDate()) return;
    SubmitLoading.value = true;
    try {
        const emp = employee.value;
        const response = await api.post('/portal/leave', {
            employeeid: emp.id,
            typeid: typeid.value,
            datestart: datefrom.value,
            dateend: dateto.value,
            reason: reason.value
        });
        const app = response.data
        Toast.fire({
            icon: "success",
            html: `
                <div class="text-subtitle1 text-bold text-uppercase">granted!</div>
                <div class="text-caption">Leave Application Submitted.</div>
                <div class="text-caption">Control No.</div>
                <div class="text-body1 text-capitalize;">${app?.leave?.control_no}<div>
            `
        });
        employee.value = [];
        isMatch.value = false;
        ResetForm()
    } catch (e) {

        if (e.response && e.response.data) {
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

const leavetypes = ref([]);
const filteredLeaveTypes = ref([]);

const createFilterFn = (sourceRef, targetRef) => {
    return (val, update) => {
        if (val === '') {
        update(() => { targetRef.value = sourceRef.value; });
            return;
        }
        update(() => {
            const needle = val.toLowerCase();
            targetRef.value = sourceRef.value.filter(v => v.label.toLowerCase().includes(needle));
        });
    };
};

const filterLeaveTypeFn = createFilterFn(leavetypes, filteredLeaveTypes);

const LoadLeaveTypes = async () => {
    try {
        const { data } = await api.get(`/portal/option/leavetype`);
        leavetypes.value = data
    } catch (error) {
        console.error("Error fetching options:", error);
    }
};

const step = ref(0)
const totalSteps = 2;

const validators = [
    ValidateLeaveType
]

const NextStep = () => {
    const validate = validators[step.value];
    if (validate && !validate()) return;
    step.value++;
};

const PreviousStep = () => {
    if (step.value > 0) step.value--;
};

const popup = ref(null)

const TOTAL_COVERS = 25;

const randomCover = ref('');

onBeforeMount(() => {
    const randomNumber = Math.floor(Math.random() * TOTAL_COVERS) + 1;

    randomCover.value = new URL(
        `../assets/cover/${randomNumber}.jpg`,
        import.meta.url
    ).href;
})
</script>

<style lang="css" scoped>

.card-menu
{
    width: 150px;
    height: 175px;
}

.card-profile {
        overflow: hidden;
        background: linear-gradient(
  135deg,
  #c94a4a 0%,
  #a91f1f 65%,
  #900201 100%
);
    }

    /* COVER PHOTO */
    .cover-photo {
        height: 175px;
        width: 100%;
        position: relative;
    }

    .cover-photo img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    }

    /* Optional dark overlay for readability */
    .cover-photo::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0.15),
        rgba(0, 0, 0, 0.55)
    );
    }

    /* PROFILE IMAGE SECTION */
    .profile-section {
    margin-top: -80px; /* pulls image over cover */
    }

    /* PROFILE IMAGE */
    .profile-img {
        width: 150px;
        height: 150px;
        border-radius: 50%;
        object-fit: cover;
        border: 5px solid #ffffff;
        background: #ffffff;
        box-shadow: 0 12px 28px rgba(0, 0, 0, 0.35);
    }
    .camera-overlay {
    /* background: rgba(0, 0, 0, 0.15); */
    backdrop-filter: blur(3px);
    border-radius: 12px;
    transition: opacity 0.3s ease;
}

.scan-btn {
    /* padding: 12px 28px; */
    /* font-size: 16px; */
    /* border-radius: 10px; */
    backdrop-filter: blur(8px);
}
</style>