<template>
    <q-dialog v-model="isOpen" persistent class="dialog" @before-show="PopulateData()">
        <q-card class="dialog-card column full-height">
            <q-card-section class="q-pa-lg">
                <div class="text-h6 text-uppercase">file a leave</div>
            </q-card-section>
            <q-card-section class="col q-pa-none" v-if="!isMatch">
                <SimpleVueCamera ref="camera" />
            </q-card-section>
            <q-card-section class="col q-pa-lg" v-else>
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
                            <div class="q-mb-md">
                                <div class="text-caption text-uppercase" :class="Errors.date.type ? 'text-negative text-italic' : 'text-grey'">{{ Errors.date.type ? Errors.date.msg : 'date range' }}</div>
                                <q-date v-model="date" range @update:model-value="() => { popup.hide(); } " class="no-shadow custom-border full-width"/>
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
            
            <q-card-actions class="q-pa-lg bg">
                <div class="q-gutter-sm">
                    <q-btn v-if="!isMatch" unelevated size="md" color="primary" class="btn text-capitalize" label="scan" @click="ScanFace()" />
                    <q-btn v-if="isMatch && step > 0" unelevated size="md" color="primary" class="btn text-capitalize" label="previous" @click="() => { PreviousStep() }" />
                    <q-btn v-if="isMatch && step < totalSteps - 1" unelevated size="md" color="primary" class="btn text-capitalize" label="next" @click="() => { NextStep() }" />
                    <q-btn v-if="isMatch && step === totalSteps - 1" unelevated size="md" color="primary" class="btn text-capitalize" label="save" @click="Save" />
                    <q-btn unelevated size="md" color="primary" class="btn text-capitalize" label="discard" @click="() => { emit('update:modelValue', null); }" outline/>
                </div>
            </q-card-actions>
            <q-inner-loading :showing="SubmitLoading" dark>
                <div class="text-center">
                    <q-spinner-puff size="xl" color="white"/>
                    <div class="text-h6 text-white text-uppercase q-mt-xs">we're working on it!</div>
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

const employee = ref([]);
const isMatch = ref(false);

const ScanFace = async () => {
    SubmitLoading.value = true;
    const result = await detectDescriptor();

    try {
        const response = await api.post(`/portal/face`, {
            descriptor: Array.from(result.descriptor)
        });
        const { match, employee: emp, distance } = response.data;
        if (!match) {
            Swal.fire({
                icon: "error",
                title: "Face Not Recognized",
                text: "No matching employee found in the system."
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
const date = ref('');
const reason = ref('');

const Errors = reactive({
    typeid: { 
        type: null, message: ''
    },
    date: { 
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

    isError ||= req('date', date.value)
    isError ||= req('reason', reason.value)

    if (isError) failToast()
    return !isError
}

const Save = async () => {
    if (!ValidateDate()) return;
    SubmitLoading.value = true;
    const datestart = date.value.from;
    const dateend = date.value.to;
    try {
        const emp = employee.value;
        const response = await api.post('/portal/leave', {
            employeeid: emp.id,
            typeid: typeid.value,
            datestart: datestart,
            dateend: dateend,
            reason: reason.value
        });
        Swal.fire({
            icon: 'success',
            title: 'Leave Filed'
        });
        emit('update:modelValue', null);
        employee.value = [];
        isMatch.value = false;
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

const PopulateData = async () => {
    step.value = 0;
    await loadModels();
    employee.value = [];
    isMatch.value = false;
    LoadLeaveTypes();
}

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
</style>