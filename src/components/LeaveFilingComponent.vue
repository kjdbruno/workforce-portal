<template>
    <div>
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
                    <q-card @click="() => { typeid = data.id }" class="card-menu card card-hover-animate flex column justify-center items-center no-shadow cursor-pointer radius-sm" :class="{ 'card--active': typeid === data.id }">
                        <q-card-section class="text-center">
                            <div class="text-caption text-dark text-uppercase">{{ data.name }}</div>
                        </q-card-section>
                        <q-card-section>
                            <div class="text-caption">{{ data.balances[0]?.balance }}</div>
                            <div class="text-caption text-uppercase text-grey">balance</div>
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
                <div class="col-5">
                    <div class="text-caption text-uppercase" :class="Errors.datefrom.type ? 'text-negative text-italic' : 'text-grey'">{{ Errors.datefrom.type ? Errors.datefrom.msg : 'date from' }}</div>
                    <q-input outlined v-model="datefrom" label="Enter Date" :error="Errors.datefrom.type" no-error-icon>
                        <q-popup-proxy cover transition-show="scale" transition-hide="scale" class="no-shadow custom-border radius-sm" ref="popup">
                            <q-date v-model="datefrom" mask="YYYY-MM-DD" @update:model-value="() => { popup.hide(); } " class="full-width"/>
                        </q-popup-proxy>
                    </q-input>
                </div>
                <div class="col-5">
                    <div class="text-caption text-uppercase" :class="Errors.dateto.type ? 'text-negative text-italic' : 'text-grey'">{{ Errors.dateto.type ? Errors.dateto.msg : 'date to' }}</div>
                    <q-input outlined v-model="dateto" label="Enter Date" :error="Errors.dateto.type" no-error-icon>
                        <q-popup-proxy cover transition-show="scale" transition-hide="scale" class="no-shadow custom-border radius-sm" ref="popup">
                            <q-date v-model="dateto" mask="YYYY-MM-DD" @update:model-value="() => { popup.hide(); } " class="full-width"/>
                        </q-popup-proxy>
                    </q-input>
                </div>
                <div class="col-2">
                    <div class="text-caption text-uppercase text-grey">days</div>
                    <q-input outlined v-model="noOfDays" label="No of Days" :readonly="true" />
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
        <q-card-actions align="left" class="q-mt-lg">
            <q-btn v-if="step > 0" unelevated size="md" color="primary" class="btn text-capitalize" label="previous" @click="() => { PreviousStep() }" />
            <q-btn v-if="step < totalSteps - 1" unelevated size="md" color="primary" class="btn text-capitalize" label="next" @click="() => { NextStep() }" />
            <q-btn v-if="step === totalSteps - 1" unelevated size="md" color="primary" class="btn text-capitalize" label="save" @click="Save" />
            <q-btn unelevated size="md" color="primary" class="btn text-capitalize" outline label="clear" @click="ResetForm()" />
        </q-card-actions>
    </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, onBeforeMount, watch, reactive, computed } from 'vue';
import { api } from 'src/boot/axios';
import moment from 'moment';
import Swal from 'sweetalert2';
import { Toast } from 'src/boot/sweetalert'; 
import { useLeaveStore } from 'src/stores/leave-store';
const LeaveStore = useLeaveStore();

const SubmitLoading = ref(false);

const ResetForm = () => {
    step.value = 0;
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

const typeid = ref('');
const datefrom = ref('');
const dateto = ref('');
const noOfDays = computed(() => {
    if (!datefrom.value || !dateto.value) return ''
    const start = moment(datefrom.value, 'YYYY-MM-DD')
    const end = moment(dateto.value, 'YYYY-MM-DD')
    // Calculate difference in days
    const diff = end.diff(start, 'days') + 1 // +1 to include both start and end dates
    return diff > 0 ? diff : 0
});
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
    LeaveStore.SubmitLoading = true;
    try {
        const emp = LeaveStore.employee;
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
        ResetForm()
    } catch (e) {

        applyBackendErrors(e.response.data);

        let message = "Something went wrong.";

        if (e.response.data.errors && e.response.data.errors.length > 0) {
            message = e.response.data.errors[0].msg;
        } else if (e.response.data.error) {
            message = e.response.data.error;
        }

        Toast.fire({
            icon: "error",
            html: `
                <div class="text-h6 text-bold text-uppercase">Request Failed</div>
                <div class="text-caption">${message}</div>
            `
        });

    } finally {
        LeaveStore.SubmitLoading = false;
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

const leavetypes = ref([]);

const LoadLeaveTypes = async () => {
    try {
        const { data } = await api.get(`/portal/option/leavetype`, {
            params: {
                employeeid: LeaveStore.employee?.id
            }
        });
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

onMounted(() => {
    LoadLeaveTypes();
})

</script>

<style lang="css" scoped>
.card-menu
{
    width: 150px;
    height: 175px;
}

</style>