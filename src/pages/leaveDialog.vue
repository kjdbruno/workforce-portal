<template>
    <q-dialog v-model="isOpen" persistent class="dialog" @before-show="PopulateData()">
        <q-card class="dialog-card column full-height">
            <q-card-section class="q-pa-lg">
                <div class="text-h6 text-uppercase">file a leave</div>
            </q-card-section>
            <q-separator inset />
            <q-card-section class="col q-pa-lg scroll">
                <SimpleVueCamera ref="camera" v-if="!isMatch"/>
                <div class="text-center" v-else>
                    <img :src="FormatAvatar(employee?.photo?.avatar)" alt="Profile" class="profile-img" />
                    <div class="q-mt-md q-mb-lg">
                        <div class="text-h5 text-uppercase">{{ FormatName(employee) }}</div>
                        <div class="text-body1 text-uppercase">{{ employee?.employment?.position?.name }}</div>
                    </div>
                    <div class="flex flex-center q-gutter-xs q-mb-md">
                        <div>
                            <div class="text-caption text-uppercase q-mb-xs" :class="Errors.typeid.type ? 'text-negative' : 'text-grey'">{{ Errors.typeid.type ? Errors.typeid.message : 'leave type' }}</div>
                            <q-select 
                                outlined 
                                v-model="typeid" 
                                emit-value 
                                map-options 
                                use-input 
                                input-debounce="300" 
                                :options="filteredLeaveTypes" 
                                @filter="filterLeaveTypeFn" 
                                :error="Errors.typeid.type"
                                dropdown-icon="keyboard_arrow_down"
                                :no-error-icon="true"
                                label="Choose Leave Type"
                            >
                                <template v-slot:no-option>
                                    <q-item>
                                        <q-item-section class="text-italic text-grey">
                                            No options
                                        </q-item-section>
                                    </q-item>
                                </template>
                                <template v-slot:option="scope">
                                    <q-item v-bind="scope.itemProps">
                                        <q-item-section>
                                            <q-item-label>{{ $CapitalizeWords(scope.opt.label) }}</q-item-label>
                                        </q-item-section>
                                    </q-item>
                                </template>
                            </q-select>
                        </div>
                        <div>
                            <div class="text-caption text-uppercase q-mb-xs" :class="Errors.datestart.type ? 'text-negative' : 'text-grey'">{{ Errors.datestart.type ? Errors.datestart.message : 'date start' }}</div>
                            <q-input outlined v-model="datestart" label="Enter Date" :error="Errors.datestart.type" no-error-icon>
                                <q-popup-proxy cover transition-show="scale" transition-hide="scale" ref="popup" class="no-shadow custom-border radius-sm">
                                    <q-date v-model="datestart" mask="YYYY-MM-DD" @update:model-value="() => { popup.hide() }" />
                                </q-popup-proxy>
                            </q-input>
                        </div>
                        <div>
                            <div class="text-caption text-uppercase q-mb-xs" :class="Errors.dateend.type ? 'text-negative' : 'text-grey'">{{ Errors.dateend.type ? Errors.dateend.message : 'date end' }}</div>
                            <q-input outlined v-model="dateend" label="Enter Date" :error="Errors.dateend.type" no-error-icon>
                                <q-popup-proxy cover transition-show="scale" transition-hide="scale" ref="popup" class="no-shadow custom-border radius-sm">
                                    <q-date v-model="dateend" mask="YYYY-MM-DD" @update:model-value="() => { popup.hide() }" />
                                </q-popup-proxy>
                            </q-input>
                        </div>
                        <div>
                            <div class="text-caption text-uppercase q-mb-xs" :class="Errors.reason.type ? 'text-negative' : 'text-grey'">{{ Errors.reason.type ? Errors.reason.message : 'reason' }}</div>
                            <q-input outlined v-model="reason" :error="Errors.reason.type" no-error-icon label="Enter Reason"></q-input>
                        </div>
                    </div>
                </div>
            </q-card-section>
            
            <q-card-actions class="q-pa-lg bg" align="center">
                <div class="q-gutter-sm">
                    <q-btn unelevated size="md" color="primary" class="btn text-capitalize" label="scan" @click="ScanFace()" v-if="!isMatch"/>
                    <q-btn unelevated size="md" color="primary" class="btn text-capitalize" label="save" @click="Save()" v-else/>
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
const datestart = ref('');
const dateend = ref('');
const reason = ref('');

const Errors = reactive({
    typeid: { 
        type: null, message: ''
    },
    datestart: { 
        type: null, message: ''
    },
    dateend: { 
        type: null, message: ''
    },
    reason: { 
        type: null, message: ''
    }
});

const Validations = () => {

    let isError = false;

    if (!typeid.value) {
        Errors.typeid.type = true;
        Errors.typeid.message = ('leave type is required!')
        isError = true
    } else {
        Errors.typeid.type = null
    }
    if (!datestart.value) {
        Errors.datestart.type = true;
        Errors.datestart.message = ('date start is required!')
        isError = true
    } else {
        Errors.datestart.type = null
    }
    if (!dateend.value) {
        Errors.dateend.type = true;
        Errors.dateend.message = ('date end is required!')
        isError = true
    } else {
        Errors.dateend.type = null
    }
    if (!reason.value) {
        Errors.reason.type = true;
        Errors.reason.message = ('reason is required!')
        isError = true
    } else {
        Errors.reason.type = null
    }

    if (isError) {
        Toast.fire({
            icon: "error",
            html: `
                <div class="text-h6 text-bold text-uppercase">Request Failed</div>
                <div class="text-caption">Something went wrong.</div>
            `
        })
    }

    return !isError
}

const Save = async () => {
    if (!Validations()) return;
    SubmitLoading.value = true;
    try {
        const emp = employee.value;
        const response = await api.post('/portal/leave', {
            employeeid: emp.id,
            typeid: typeid.value,
            datestart: datestart.value,
            dateend: dateend.value,
            reason: reason.value
        });
        Swal.fire({
            icon: 'success',
            title: 'LEAVE APPLICATION RECORDED',
            text: 'Successfully Saved'
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
        leavetypes.value = data.map(d => ({
            label: d?.name,
            value: Number(d?.id)
        }))
        filteredLeaveTypes.value = [...leavetypes.value]
    } catch (error) {
        console.error("Error fetching options:", error);
    }
};

const PopulateData = async (app) => {
    await loadModels();
    employee.value = [];
    isMatch.value = false;
    LoadLeaveTypes()
}

const popup = ref(null)
</script>

<style lang="css" scoped>
    .profile-img {
        width: 200px;
        height: 200px;
        border-radius: 50%;
        object-fit: cover;
        border: 5px solid #ffffff;
        background: #ffffff;
        box-shadow: 0 12px 28px rgba(0, 0, 0, 0.35);
    }
</style>