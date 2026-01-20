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
                                @update:model-value="LoadLeaveApplication"
                            />
                        </div>
                    </q-card>
                </div>
            </div>
        </div>
        <div class="q-mb-md">
            <span class="text-subtitle1 text-uppercase text-bold q-mr-md">leave credit</span>
            <q-btn v-if="!credits.length" icon="add" round size="sm" outline unelevated color="primary">
                <q-menu transition-show="jump-down" transition-hide="jump-up" :offset="[0, 10]"  class="radius-sm" style="box-shadow: rgba(0, 0, 0, 0.09) 0px 3px 12px;">
                    <q-card class="no-shadow  radius-sm q-pa-lg" style="width: 300px;">
                        <q-card-section>
                            <div class="text-h6 text-center text-uppercase">
                                proceed to create leave credits?
                            </div>
                        </q-card-section>
                        <q-card-actions>
                            <q-btn unelevated size="md" color="primary" class="full-width text-capitalize" label="proceed" @click="CreateLeaveCredit()"/>
                        </q-card-actions>
                    </q-card>
                </q-menu>
            </q-btn>
        </div>
        <div class="q-mb-lg">
            <div class="card-grid" v-if="credits.length">
                <div
                    v-for="(data, index) in credits"
                    :key="`data-${data.id}`"
                    class="inner-card-anim-wrapper"
                    :style="{ animationDelay: `${index * 120}ms` }"
                >
                    <q-card 
                        class="card card-hover-animate flex flex-center q-pa-md no-shadow cursor-pointer radius-sm" 
                        tag="label"
                    >
                        <q-card-section class="text-center full-width q-pa-sm">
                            <div class="text-caption text-uppercase">{{ data?.leaveType }}</div>
                            <div class="text-body text-bold">{{ data?.balance }}</div>
                        </q-card-section>
                        <q-card-section class="text-center full-width q-pa-sm">
                            <div class="text-caption text-grey text-capitalize">leave credit</div>
                        </q-card-section>
                    </q-card>
                </div>
            </div>
        </div>
        <div class="q-mb-md">
            <span class="text-subtitle1 text-uppercase text-bold q-mr-md">leave applications</span>
        </div>
        <div class="q-mb-lg">
            <div class="card-grid" v-if="applications.length">
                <div
                    v-for="(data, index) in applications"
                    :key="`data-${data.id}`"
                    class="inner-card-anim-wrapper"
                    :style="{ animationDelay: `${index * 120}ms` }"
                >
                    <q-card 
                        class="card card-hover-animate flex flex-center q-pa-md no-shadow cursor-pointer radius-sm" 
                        tag="label"
                    >
                        <q-card-section class="text-center full-width q-pa-sm">
                            <div class="text-caption text-uppercase text-bold">{{ data?.leaveType }}</div>
                            <div class="text-caption text-capitalized">{{ data?.status }}</div>
                        </q-card-section>
                        <q-card-section class="text-center full-width q-pa-sm">
                            <div class="text-caption text-grey">{{ data?.days }} day/s</div>
                            <div class="text-caption">{{ formatDate(data?.startDate) }} to {{ formatDate(data?.endDate) }}</div>
                        </q-card-section>
                    </q-card>
                </div>
            </div>
        </div>
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

const credits = ref([]);
const LoadLeaveCredit = async () => {
    EmployeeStore.loading = true;
    try {
        const { data } = await api.get(`/employee/leave/credit/${EmployeeStore.employment.profileId}`);
        credits.value = data.data;

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

const applications = ref([]);
const LoadLeaveApplication = async () => {
    EmployeeStore.loading = true;
    try {
        const { data } = await api.get(`/employee/leave/application/${EmployeeStore.employment.profileId}?month=${month.value}&year=${year.value}`);
        applications.value = data.data;

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
    return moment(date).format('MM-DD-YY')
}

const months = Array.from({ length: 12 }, (_, i) => {
    const monthName = new Date(0, i).toLocaleString("en-US", { month: "short" });
    const monthValue = String(i + 1).padStart(2, "0");
    return { label: monthName, value: monthValue };
})

onMounted(() => {
    LoadLeaveCredit();
    LoadLeaveApplication();
});

onBeforeMount(() => {
    // LoadTrainingTypes();
})
</script>