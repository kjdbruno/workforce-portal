<template>
    <div>
        <div class="q-mb-md">
            <span class="text-subtitle1 text-uppercase text-bold q-mr-md">service record</span>
            <q-btn icon="print" round size="sm" outline unelevated color="primary">
                <q-menu transition-show="jump-down" transition-hide="jump-up" :offset="[0, 15]" class="radius-sm" style="box-shadow: rgba(0, 0, 0, 0.09) 0px 3px 12px;">
                    <q-card class="no-shadow  radius-sm q-pa-lg" style="width: 500px;">
                        <q-card-section>
                            <div class="row q-col-gutter-xs">
                                <div class="col-6">
                                    
                                </div>
                                <div class="col-6">

                                </div>
                            </div>
                        </q-card-section>
                        <q-card-actions>
                            <q-btn unelevated size="md" color="primary" class="full-width text-capitalize" label="proceed" />
                        </q-card-actions>
                    </q-card>
                </q-menu>
            </q-btn>
        </div>
        <div class="row q-col-gutter-xs q-mb-xs">
            <div class="col-2">
                <div class="q-mb-xs">
                    <span class="text-caption text-uppercase text-grey q-mr-sm">salary/position</span>
                </div>
            </div>
            <div class="col-2">
                <div class="q-mb-xs">
                    <span class="text-caption text-uppercase text-grey q-mr-sm">salary/rate</span>
                </div>
            </div>
            <div class="col-2">
                <div class="q-mb-xs">
                    <span class="text-caption text-uppercase text-grey q-mr-sm">employment status</span>
                </div>
            </div>
            <div class="col-2">
                <div class="q-mb-xs">
                    <span class="text-caption text-uppercase text-grey q-mr-sm">appointment status</span>
                </div>
            </div>
            <div class="col-1">
                <div class="q-mb-xs">
                    <span class="text-caption text-uppercase text-grey q-mr-sm">start date</span>
                </div>
            </div>
            <div class="col-1">
                <div class="q-mb-xs">
                    <span class="text-caption text-uppercase text-grey q-mr-sm">end date</span>
                </div>
            </div>
        </div>
        <div class="row q-col-gutter-xs q-mb-xs" v-for="(value, index) in services" :key="index">
            <div class="col-2">
                <q-input 
                    v-model="value.position" 
                    outlined 
                    :no-error-icon="true"
                    input-class="text-capitalize"
                />
            </div>
            <div class="col-2">
                <q-input 
                    v-model="value.rate" 
                    outlined 
                    :no-error-icon="true"
                />
            </div>
            <div class="col-2">
                <q-input 
                    v-model="value.employment" 
                    outlined 
                    :no-error-icon="true"
                    input-class="text-capitalize"
                />
            </div>
            <div class="col-2">
                <q-input 
                    v-model="value.appointment" 
                    outlined 
                    :no-error-icon="true"
                    input-class="text-capitalize"
                />
            </div>
            <div class="col-1">
                <q-input 
                    v-model="value.startDate" 
                    outlined 
                    type="date"
                    :no-error-icon="true"
                />
            </div>
            <div class="col-1">
                <q-input 
                    v-model="value.endDate" 
                    outlined 
                    type="date"
                    :no-error-icon="true"
                />
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

const services = ref([
    {
        position: '',
        rate: '',
        employment: '',
        appointment: '',
        startDate: '',
        endDate: ''
    }
]);

const Errors = reactive({
    services: [],
    serviceMessages: {}
});

const Validations = () => {

    let isError = false;

    Object.keys(Errors).forEach(key => {
        Errors[key].type = null;
        Errors[key].messages = [];
    });

    Errors.services = services.value.map(() => ({
        title: { type: null, messages: [] },
        start: { type: null, messages: [] },
        end: { type: null, messages: [] },
        hour: { type: null, messages: [] },
        typeId: { type: null, messages: [] },
        conductedBy: { type: null, messages: [] }
    }))
    if (!Errors.serviceMessages) {
        Errors.serviceMessages = {
            title: [],
            start: [],
            end: [],
            hour: [],
            typeId: [],
            conductedBy: []
        };
    } else {
        Object.keys(Errors.serviceMessages).forEach((key) => {
            Errors.serviceMessages[key] = [];
        });
    }
    services.value.forEach((e, index) => {
        if (!e.title) {
            Errors.services[index].title.type = true;
            Errors.services[index].title.messages.push('service title is required');
            Errors.serviceMessages.title.push('service title is required');
            isError = true;
        }
        if (!e.startDate) {
            Errors.services[index].start.type = true;
            Errors.services[index].start.messages.push('start date is required');
            Errors.serviceMessages.start.push('start date is required');
            isError = true;
        }
        if (!e.endDate) {
            Errors.services[index].end.type = true;
            Errors.services[index].end.messages.push('end date is required');
            Errors.serviceMessages.end.push('end date is required');
            isError = true;
        }
        if (!e.hour) {
            Errors.services[index].hour.type = true;
            Errors.services[index].hour.messages.push('hour/s is required');
            Errors.serviceMessages.hour.push('hour/s is required');
            isError = true;
        }
        if (!e.typeId) {
            Errors.services[index].typeId.type = true;
            Errors.services[index].typeId.messages.push('service type is required');
            Errors.serviceMessages.typeId.push('service type is required');
            isError = true;
        }
        if (!e.conductedBy) {
            Errors.services[index].conductedBy.type = true;
            Errors.services[index].conductedBy.messages.push('conducted by is required');
            Errors.serviceMessages.conductedBy.push('conducted by is required');
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

const LoadService = async () => {
    EmployeeStore.loading = true;
    try {
        const { data } = await api.get(`/employee/service/${EmployeeStore.employment.profileId}`);
        const servicesData = Array.isArray(data.data) ? data.data : [data.data]
        if (!servicesData.length || !servicesData[0]) {
            return;
        }
        services.value = servicesData.map(e => ({
            position: e.salary?.positions?.name || '',
            rate: e.rate?.monthlyCompensation || '',
            employment: e.employmentStatus?.name || '',
            appointment: e.appointmentStatus?.name || '',
            startDate: e.dateStart?.slice(0, 10) || '',
            endDate: e.dateEnd?.slice(0, 10) || ''
        }))

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
    if (!Validations()) return;
    EmployeeStore.loading = true;
    try {
        const response = await api.post(`/employee/service/${EmployeeStore.employment.profileId}`, {
            services: services.value
        });
        LoadService();
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

onMounted(() => {
    LoadService();
});

onBeforeMount(() => {
    
})
</script>