<template>
    <div>
        <div class="q-mb-lg">
            <div class="round-card-grid">
                <q-input outlined v-model="year" style="width: 75px;"/>
                <div
                    v-for="(data, index) in months"
                    :key="`data-${data.id}`"
                    class="round-card-anim-wrapper"
                    :style="{ animationDelay: `${index * 120}ms` }"
                >
                    <q-card 
                        class="card card-hover-animate flex flex-center q-pa-md no-shadow cursor-pointer radius-sm" 
                        tag="label"
                        :class="{ 'card--active': month === data.value }"
                        @click="value = data.value"
                    >
                        <q-card-section class="text-center q-pa-none">
                            <div class="text-caption text-uppercase">{{ data?.label }}</div>
                        </q-card-section>
                        <div class="checkmark-overlay">
                            <q-radio
                                v-model="month"
                                :val="data.value"
                                checked-icon="task_alt"
                                unchecked-icon="panorama_fish_eye"
                                size="md"
                                class="hidden-radio"
                                @update:model-value="LoadTimeCard"
                            />
                        </div>
                    </q-card>
                </div>
            </div>
        </div>
        <div class="q-mb-md">
            <span class="text-subtitle1 text-uppercase text-bold q-mr-md">daily time record</span>
            <q-btn icon="print" round size="sm" outline unelevated color="primary" @click="PrintDTR"/>
        </div>
        <div class="row q-col-gutter-xs">
            <div class="col-1">
                <div class="q-mb-xs">
                    <span class="text-caption text-uppercase text-grey q-mr-sm">date</span>
                </div>
            </div>
            <div class="col-1">
                <div class="q-mb-xs">
                    <span class="text-caption text-uppercase text-grey q-mr-sm">day</span>
                </div>
            </div>
            <div class="col-1">
                <div class="q-mb-xs">
                    <span class="text-caption text-uppercase text-grey q-mr-sm">records</span>
                </div>
            </div>
        </div>
        <div style="height: 500px; overflow-y: auto;">
            <div class="row q-col-gutter-xs q-mb-xs" v-for="(data, index) in timecards">
                <div class="col-1">
                    <q-input outlined dense :model-value="formatDate(data.date)" />
                </div>
                <div class="col-1">
                    <q-input outlined dense :model-value="formatDay(data.date)" />
                </div>
                <div class="col-10">
                    <div class="row items-center q-gutter-xs">
                        <q-input v-for="(time, index) in data.times" outlined dense v-model="data.times[index]" type="time" mask="##:## AA" fill-mask style="width: 100px;"/>
                        <q-badge v-if="data.leaveType" rounded color="primary" :label="data.leaveType" />
                        <q-badge v-if="data.holiday" rounded color="primary" :label="data.holiday" />
                        <q-badge v-if="data.overtimes" rounded color="primary" :label="data.overtimes" />
                    </div>
                </div>
            </div>
        </div>
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
    </div>
</template>

<script setup>
import { 
    reactive,
    computed,
    onMounted,
    ref, 
    watch,
    onBeforeMount
} from 'vue';

import { api } from 'src/boot/axios';

import { Toast } from 'src/boot/sweetalert'; 

import moment from 'moment';

import { useAuthStore } from 'src/stores/auth-store';

import { useEmployeeStore } from 'src/stores/employee-store';

const EmployeeStore = useEmployeeStore();

const AuthStore = useAuthStore();

const today = new Date();
const month = ref(String(today.getMonth() + 1).padStart(2, '0'));
const year = ref(String(today.getFullYear()));

const trainings = ref([
    {
        title: '',
        startDate: '',
        endDate: '',
        hour: '',
        typeId: '',
        conductedBy: ''
    }
]);

const Errors = reactive({
    trainings: [],
    trainingMessages: {}
});

const Validations = () => {

    let isError = false;

    Object.keys(Errors).forEach(key => {
        Errors[key].type = null;
        Errors[key].messages = [];
    });

    Errors.trainings = trainings.value.map(() => ({
        title: { type: null, messages: [] },
        start: { type: null, messages: [] },
        end: { type: null, messages: [] },
        hour: { type: null, messages: [] },
        typeId: { type: null, messages: [] },
        conductedBy: { type: null, messages: [] }
    }))
    if (!Errors.trainingMessages) {
        Errors.trainingMessages = {
            title: [],
            start: [],
            end: [],
            hour: [],
            typeId: [],
            conductedBy: []
        };
    } else {
        Object.keys(Errors.trainingMessages).forEach((key) => {
            Errors.trainingMessages[key] = [];
        });
    }
    trainings.value.forEach((e, index) => {
        if (!e.title) {
            Errors.trainings[index].title.type = true;
            Errors.trainings[index].title.messages.push('training title is required');
            Errors.trainingMessages.title.push('training title is required');
            isError = true;
        }
        if (!e.startDate) {
            Errors.trainings[index].start.type = true;
            Errors.trainings[index].start.messages.push('start date is required');
            Errors.trainingMessages.start.push('start date is required');
            isError = true;
        }
        if (!e.endDate) {
            Errors.trainings[index].end.type = true;
            Errors.trainings[index].end.messages.push('end date is required');
            Errors.trainingMessages.end.push('end date is required');
            isError = true;
        }
        if (!e.hour) {
            Errors.trainings[index].hour.type = true;
            Errors.trainings[index].hour.messages.push('hour/s is required');
            Errors.trainingMessages.hour.push('hour/s is required');
            isError = true;
        }
        if (!e.typeId) {
            Errors.trainings[index].typeId.type = true;
            Errors.trainings[index].typeId.messages.push('training type is required');
            Errors.trainingMessages.typeId.push('training type is required');
            isError = true;
        }
        if (!e.conductedBy) {
            Errors.trainings[index].conductedBy.type = true;
            Errors.trainings[index].conductedBy.messages.push('conducted by is required');
            Errors.trainingMessages.conductedBy.push('conducted by is required');
            isError = true;
        }
    });

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

const timecards = ref([]);
const LoadTimeCard = async () => {
    EmployeeStore.loading = true;
    try {
        const { data } = await api.get(`/employee/dtr/${EmployeeStore.employment.profileId}?month=${month.value}&year=${year.value}`);
        timecards.value = data.data;

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
        EmployeeStore.loading = false;
    }
}

watch(
    () => EmployeeStore.saveEventCounter,
    () => {
        if (EmployeeStore.subComponent === 'EmployeeTrainingsComponent') {
            Save();
        }
  }
);

const Save = async () => {
    if (!Validations()) return;
    EmployeeStore.loading = true;
    try {
        const response = await api.post(`/employee/training/${EmployeeStore.employment.profileId}`, {
            trainings: trainings.value
        });
        LoadTraining();
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
        EmployeeStore.loading = false;
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

const formatDate = (date) => {
    if (!date) return ''
    return moment(date).format('DD')
}

const formatDay = (date) => {
    if (!date) return ''
    return moment(date).format('dddd')
}

const months = Array.from({ length: 12 }, (_, i) => {
    const monthName = new Date(0, i).toLocaleString("en-US", { month: "short" });
    const monthValue = String(i + 1).padStart(2, "0");
    return { label: monthName, value: monthValue };
})

onMounted(() => {
    LoadTimeCard();
});

onBeforeMount(() => {
    // LoadTrainingTypes();
})

const printDialog = ref(false);
const pdf = ref(null);

const PrintDTR = async () => {
    EmployeeStore.loading = true;
    try {
        const res = await api.get(`/employee/dtr/${EmployeeStore.employment.profileId}/${month.value}/${year.value}/pdf`, {
            responseType: 'arraybuffer',
        })
        const blob = new Blob([res.data], { type: 'application/pdf' });
        const pdfurl = window.URL.createObjectURL(blob) + "#view=FitW";
        pdf.value = pdfurl
        printDialog.value = true;
        EmployeeStore.loading = false;
    } catch (error) {
        EmployeeStore.loading = false;
        console.error("Error generating PDF:", error);
    }
}
</script>