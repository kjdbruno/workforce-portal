<template>
    <q-page class="flex flex-center no-scroll">
        <div class="camera-card q-pa-none" v-if="!isMatch">
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
                            <div class="text-h6 text-uppercase">scan to file a leave</div>
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
        </div>
    </q-page>
    <!-- <q-page class="flex flex-center">
        <q-card class="radius-md no-shadow q-pa-lg" style="width: 65%; box-shadow: rgba(0, 0, 0, 0.09) 0px 3px 12px;">
            <q-card-section class="text-center">
                <div class="text-h6 text-uppercase">track my leave</div>
            </q-card-section>
            <q-card-section v-if="info.length === 0">
                <div class="row justify-center q-gutter-sm q-mb-md">
                    <q-input
                        v-for="(char, index) in codeArray"
                        :key="index"
                        :model-value="codeArray[index]"
                        maxlength="1"
                        outlined
                        dense
                        class="code-box"
                        input-class="text-center text-h6 text-bold"
                        @update:model-value="val => handleInput(val, index)"
                        @keydown="e => handleKeydown(e, index)"
                        @paste="handlePaste"
                        :ref="el => inputs[index] = el"
                        />
                </div>
            </q-card-section>
            <q-card-section v-else class="text-center">
                <div class="q-mb-md">
                    <div class="text-caption text-uppercase text-grey">control no.</div>
                    <div class="text-h5 text-uppercase">{{ info?.control_no }}</div>
                </div>
                <div class="q-mb-md">
                    <div class="text-caption text-uppercase text-grey">employee</div>
                    <div class="text-h5 text-uppercase">{{ FormatName(info?.employee) }}</div>
                </div>
                <div class="row q-col-gutter-md">
                    <div class="col">
                        <div class="text-caption text-uppercase text-grey">leave type</div>
                        <div class="text-body1 text-uppercase">{{ info?.leaveType?.name }}</div>
                    </div>
                    <div class="col">
                        <div class="text-caption text-uppercase text-grey">status</div>
                        <div class="text-body1 text-uppercase">{{ info?.status }}</div>
                    </div>
                    <div class="col">
                        <div class="text-caption text-uppercase text-grey">leave duration</div>
                        <div class="text-body1 text-uppercase">{{ FormatLeaveDate(info?.date_from, info?.date_to) }}</div>
                    </div>
                    <div class="col">
                        <div class="text-caption text-uppercase text-grey">no of day</div>
                        <div class="text-body1 text-uppercase">{{ ComputeLeaveDays(info?.date_from, info?.date_to) }}</div>
                    </div>
                </div>
                <div class="row q-col-gutter-xl q-mt-lg">
                    <div class="col" v-for="(dt, index) in info?.approvals">
                        <div class="text-caption text-uppercase text-grey">{{ dt?.status == 'Pending' ? 'unsigned' : (dt?.setting?.description) }}</div>
                        <div v-if="dt?.status == 'Pending'">
                            <div class="text-h6 text-uppercase">{{ dt?.original_approver_name }}</div>
                            <div class="text-body1 text-uppercase text-italic">{{ dt?.original_approver_position }}</div>
                            <q-btn v-if="dt?.order === 1" unelevated size="sm" color="primary" class="btn-md text-capitalize q-my-sm" label="approve" @click="Approve(dt)" />
                        </div>
                        <div v-if="dt?.status == 'Approved'">
                            <div v-if="dt?.is_overide">
                                <div class="text-grey q-mb-lg">
                                    <div class="text-h6 text-uppercase">{{ dt?.original_approver_name }}</div>
                                    <div class="text-body1 text-uppercase text-italic">{{ dt?.original_approver_position }}</div>
                                </div>
                                <div class="text-caption text-uppercase text-italic text-bold q-mb-lg">overiden by</div>
                                <img :src="(dt?.override_signature)" width="100"/>
                                <div class="text-h6 text-uppercase">{{ dt?.override_name }}</div>
                                <div class="text-body1 text-uppercase text-italic">{{ dt?.override_position }}</div>
                                <div class="text-caption text-uppercase text-italic">{{ FormatSigned(dt?.signed_at) }}</div>
                            </div>
                            <div v-if="!dt?.is_overide">
                                <img :src="(dt?.original_signature)" width="100"/>
                                <div class="text-h6 text-uppercase">{{ dt?.original_approver_name }}</div>
                                <div class="text-body1 text-uppercase text-italic">{{ dt?.original_approver_position }}</div>
                                <div class="text-caption text-uppercase text-italic">{{ FormatSigned(dt?.signed_at) }}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </q-card-section>
            <q-card-actions align="center" v-if="info.length !== 0">
                <q-btn unelevated size="md" color="primary" class="btn-md text-capitalize q-mt-md" label="print" @click="Print(info?.id)" />
                <q-btn unelevated size="md" color="primary" class="btn-md text-capitalize q-mt-md" outline label="clear" @click="Reset()" />
            </q-card-actions>
            <q-inner-loading :showing="SubmitLoading">
                <div class="text-center">
                    <q-spinner-puff size="xl" color="primary"/>
                    <div class="text-h6 text-dark text-uppercase q-mt-xs">we're working on it!</div>
                </div>
            </q-inner-loading>
        </q-card>
        <q-dialog v-model="printDialog" full-height full-width class="pdf">
        <q-card class="bg-white q-pa-none" style="height: 100vh; overflow: hidden;">
            <q-btn
                icon="close"
                class="fixed bg-white text-primary shadow-2"
                round
                dense
                v-close-popup
                style="top: 15px; right: 15px; z-index: 999;"
            />
            <q-card-section class="q-pa-none" style="height: 100%; overflow: hidden;">
                <div class="iframe-container">
                    <iframe v-if="pdf" :src="pdf" frameborder="0"></iframe>
                </div>
            </q-card-section>
        </q-card>
    </q-dialog>
    </q-page> -->
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
        const { match, record: emp, distance } = response.data;
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
    // LoadLeaveTypes();
    // ResetForm();
})

const PopulateData = async (app) => {
    await loadModels();
}

const info = ref([])

const TrackLeave = async (app) => {
    SubmitLoading.value = true;
    try {
        const response  = await api.get(`/portal/leave/${app}`);
        info.value = response.data.result;
    } catch (error) {
        console.error("Error fetching all data:", error);
        Toast.fire({
            icon: "error",
            html: `
                <div class="text-h6 text-bold text-uppercase">Error</div>
                <div class="text-caption text-capitalize;">Unable to fetch records</div>
            `
        });
    } finally {
        SubmitLoading.value = false;
    }
}

const length = 7
const codeArray = ref(Array(length).fill(''))
const inputs = ref([])

const formattedCode = computed(() => {
    const raw = codeArray.value.join('')
    if (raw.length >= 4) {
        return raw.slice(0, 4) + '-' + raw.slice(4)
    }
    return raw
})

onMounted(() => {
    inputs.value[0]?.focus()
})

const handleInput = (val, index) => {
    if (!/^[0-9]$/.test(val)) {
        codeArray.value[index] = ''
        return
    }

    codeArray.value[index] = val
    
    if (index < codeArray.value.length - 1) {
        nextTick(() => {
            inputs.value[index + 1]?.focus()
        })
    }
}

const handleKeydown = (e, index) => {
    if (e.key === 'Backspace') {
        if (!codeArray.value[index] && index > 0) {
            nextTick(() => inputs.value[index - 1]?.focus())
        }
    }

    if (e.key === 'ArrowLeft' && index > 0) {
        nextTick(() => inputs.value[index - 1]?.focus())
    }

    if (e.key === 'ArrowRight' && index < length - 1) {
        nextTick(() => inputs.value[index + 1]?.focus())
    }
}

const handlePaste = (e) => {
    e.preventDefault()

    let paste = e.clipboardData.getData('text')
    paste = paste.replace(/[^0-9]/g, '')

    if (paste.length === 7) {
        paste.split('').forEach((char, i) => {
        codeArray.value[i] = char
        })
    }
}

watch(formattedCode, (val) => {
    if (val.length === 8 && /^\d{4}-\d{3}$/.test(val)) {
        TrackLeave(val)
    }
})

const FormatSigned = (date) => {
    if (!date) return ''
    return moment(date).format('MMMM Do, YYYY hh:mm A')
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

const FormatLeaveDate = (dateFrom, dateTo, locale = 'en-US') => {
    if (!dateFrom) return ''

    const from = new Date(dateFrom)
    const to = new Date(dateTo || dateFrom)

    const sameDay =
        from.getFullYear() === to.getFullYear() &&
        from.getMonth() === to.getMonth() &&
        from.getDate() === to.getDate()

    const monthName = (d) => d.toLocaleString(locale, { month: 'long' })
    const dayNum = (d) => d.getDate()
    const yearNum = (d) => d.getFullYear()

    if (sameDay) {
        // February 1, 2026
        return `${monthName(from)} ${dayNum(from)}, ${yearNum(from)}`
    }

    // Same month & year: February 1-3, 2026
    if (from.getMonth() === to.getMonth() && from.getFullYear() === to.getFullYear()) {
        return `${monthName(from)} ${dayNum(from)}-${dayNum(to)}, ${yearNum(from)}`
    }

    // Different month/year: February 28 - March 2, 2026
    return `${monthName(from)} ${dayNum(from)}, ${yearNum(from)} - ${monthName(to)} ${dayNum(to)}, ${yearNum(to)}`
}

const ComputeLeaveDays = (dateFrom, dateTo) => {
    if (!dateFrom) return 0

    const from = new Date(dateFrom)
    const to = new Date(dateTo || dateFrom)

    // normalize to midnight to avoid timezone issues
    from.setHours(0, 0, 0, 0)
    to.setHours(0, 0, 0, 0)

    const diff = Math.round((to - from) / (1000 * 60 * 60 * 24))
    return diff >= 0 ? diff + 1 : 0 // +1 for inclusive
}

const Approve = async (app) => {
    SubmitLoading.value = true;
    const approverId = app?.id;
    const id = info.value?.id;
    try {
        const response = await api.post(`/portal/leave/${id}/${approverId}/approve`);
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
        Reset()
        SubmitLoading.value = false;
    }
}

const Reset = () => {
    info.value = [];
    codeArray.value = Array(length).fill('');
}

const printDialog = ref(false);
const pdf = ref(null);

const Print = async (id) => {
    SubmitLoading.value = true;
    try {
        const res = await api.get(`/portal/leave/${id}/pdf`, {
            responseType: 'arraybuffer',
        })
        const blob = new Blob([res.data], { type: 'application/pdf' });
        const pdfurl = window.URL.createObjectURL(blob) + "#view=FitW";
        pdf.value = pdfurl
        printDialog.value = true;
    } catch (error) {
        console.error("Error generating PDF:", error);
    } finally {
        SubmitLoading.value = false;
    }
}
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
    .char-input {
        width: 75px;
    }
.code-box {
  width: 75px;
}

/* Better spacing for mobile */
@media (max-width: 500px) {
  .code-box {
    width: 38px;
  }
}

.q-field__control
{
  height: 90px !important;
}
</style>