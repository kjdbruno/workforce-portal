<template>
    <q-card-section class="col q-pa-lg scroll">
        <div class="filter-inline q-mb-lg">
            <q-input
                outlined
                v-model="year"
                style="width: 80px"
                dense
            />
            <div class="month-wrapper">
                <label
                    v-for="m in months"
                    :key="m.value"
                    class="month-circle"
                    :class="{ active: month === m.value }"
                >
                    <input
                        type="radio"
                        name="month"
                        :value="m.value"
                        v-model="month"
                        hidden
                        @update:model-value="() => { LoadLeaveApplication(); LoadLeaveCredit();}"
                    />
                    <span class="month-label">{{ m.label }}</span>
                </label>
            </div>
        </div>
        <div class="q-mb-md">
            <span class="text-subtitle1 text-uppercase text-bold q-mr-md">leave credit</span>
        </div>
        <div class="q-mb-lg">
            <div class="card-grid">
                <div
                    v-if="credits.length === 0"
                    class="inner-card-anim-wrapper"
                    :style="{ animationDelay: `${index * 120}ms` }"
                >
                    <q-card 
                        class="card card-hover-animate flex flex-center q-pa-md no-shadow cursor-pointer radius-sm" 
                        tag="label"
                    >
                        <q-card-section class="text-center full-width q-pa-sm">
                            <div class="text-caption text-uppercase">no data found</div>
                        </q-card-section>
                    </q-card>
                </div>
                <div
                    v-if="credits.length !== 0"
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
            <div class="card-grid">
                <div
                    v-if="applications.length === 0"
                    class="inner-card-anim-wrapper"
                    :style="{ animationDelay: `${index * 120}ms` }"
                >
                    <q-card 
                        class="card card-hover-animate flex flex-center q-pa-md no-shadow cursor-pointer radius-sm" 
                        tag="label"
                    >
                        <q-card-section class="text-center full-width q-pa-sm">
                            <div class="text-caption text-uppercase">no data found</div>
                        </q-card-section>
                    </q-card>
                </div>
                <div
                    v-if="applications.length !== 0"
                    v-for="(data, index) in applications"
                    :key="`data-${data.id}`"
                    class="inner-card-anim-wrapper"
                    :style="{ animationDelay: `${index * 120}ms` }"
                >
                    <q-card 
                        class="card card-hover-animate flex flex-center q-pa-md no-shadow cursor-pointer radius-sm" 
                        tag="label"
                        @click="() => {PrintLeaveForm(data.id)}"
                    >
                        <q-card-section class="text-center full-width q-pa-sm">
                            <div class="text-caption text-uppercase text-bold">{{ data?.leaveType }}</div>
                            <div class="text-caption text-capitalized">{{ data?.status }}</div>
                        </q-card-section>
                        <q-card-section class="text-center full-width q-pa-sm">
                            <div class="text-caption text-grey">{{ data?.days }} day/s</div>
                            <div class="text-caption">{{ formatDate(data?.startDate) }} to {{ formatDate(data?.endDate) }}</div>
                        </q-card-section>
                        <q-inner-loading :showing="data.id == leaveId ? EmployeeStore.loading : null">
                            <q-spinner-puff />
                        </q-inner-loading>
                    </q-card>
                </div>
            </div>
        </div>
    </q-card-section>
    <q-card-actions class="q-pa-lg">
        <div class="q-gutter-sm">
            <q-btn v-if="!credits.length" unelevated size="md" color="primary" class="btn-3 text-capitalize" label="create leave credit" @click="Save()"/>
            <q-btn unelevated size="md" color="primary" class="btn text-capitalize" label="discard" v-close-popup outline/>
        </div>
    </q-card-actions>
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
import EmployeeComponent from './EmployeeComponent.vue';

const EmployeeStore = useEmployeeStore();

const AuthStore = useAuthStore();

const today = new Date();
const month = ref(String(today.getMonth() + 1).padStart(2, '0'));
const year = ref(String(today.getFullYear()));

const credits = ref([]);
const LoadLeaveCredit = async () => {
    EmployeeStore.loading = true;
    try {
        const { data } = await api.get(`/employee/leave/credit/${EmployeeStore.profileId}`);
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
        const { data } = await api.get(`/employee/leave/application/${EmployeeStore.profileId}?month=${month.value}&year=${year.value}`);
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

const Save = async () => {
    EmployeeStore.loading = true;
    try {
        const response = await api.post(`/employee/leave/credit/${EmployeeStore.profileId}`);
        LoadLeaveCredit();
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

const printDialog = ref(false);
const pdf = ref(null);
const leaveId = ref('');

const PrintLeaveForm = async (id) => {
    leaveId.value = id;
    EmployeeStore.loading = true;
    try {
        const res = await api.get(`/employee/leave/application/${id}/pdf`, {
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