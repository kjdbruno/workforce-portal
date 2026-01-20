<template>
    <q-card-section class="col q-pa-lg scroll">
        <div class="q-mb-md">
            <span class="text-subtitle1 text-uppercase text-bold q-mr-md">service record</span>
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
    </q-card-section>
    <q-card-section class="q-pl-lg q-pr-lg" v-if="vacancies.length">
        <div class="q-mb-sm">
            <div class="q-mb-sm">
                <span class="text-caption text-uppercase text-grey q-mr-sm">vacant positions</span>
            </div>
            <div class="card-grid">
                <div
                    v-for="(data, index) in vacancies"
                    :key="`data-${data.id}`"
                    class="inner-card-anim-wrapper"
                    :style="{ animationDelay: `${index * 120}ms` }"
                >
                    <q-card 
                        class="card card-hover-animate flex flex-center q-pa-md no-shadow cursor-pointer radius-sm" 
                        tag="label"
                        :class="[{ 'card--active': vacancyId === data.id },{ 'card--error': Errors.vacancyId.type }, { 'bg-red-1': Errors.vacancyId.type }]"
                        @click="vacancyId = data.id"
                    >
                        <q-card-section class="text-center full-width q-pa-none">
                            <div class="text-subtitle1 text-uppercase">{{ data?.salary?.positions?.name }}</div>
                            <div class="text-caption text-uppercase">{{ new Intl.NumberFormat('en-PH', { style: 'currency', currency: 'PHP' }).format(data?.salary?.rates[0]?.monthlyCompensation) }}</div>
                        </q-card-section>
                        <q-card-section class="q-pa-none">
                            <div class="text-caption">{{ data?.company?.name }}</div>
                            <div class="text-caption text-grey">{{ data?.department?.name }}</div>
                        </q-card-section>
                        <div class="checkmark-overlay">
                            <q-radio
                                v-model="vacancyId"
                                :val="data.id"
                                checked-icon="task_alt"
                                unchecked-icon="panorama_fish_eye"
                                size="md"
                            />
                        </div>
                        <div class="error-overlay" v-if="Errors.vacancyId.type">
                            <q-icon
                                name="error"
                                color="negative"
                                class="cursor-pointer"
                                size="xs"
                            >
                                <q-tooltip
                                    anchor="top middle"
                                    self="center middle"
                                    class="bg-negative"
                                >
                                    <div
                                        v-for="(msg, i) in Errors.vacancyId.messages"
                                        :key="i"
                                        class="text-capitalize"
                                    >
                                        <q-icon name="error" color="white" size="xs" />&nbsp;{{ msg }}
                                    </div>
                                </q-tooltip>
                            </q-icon>
                        </div>
                    </q-card>
                </div>
            </div>
        </div>
        <div class="row q-col-gutter-xs">
            <div class="col-2">
                <div class="q-mb-xs">
                    <span class="text-caption text-uppercase text-grey q-mr-sm">select employment status</span>
                </div>
                <q-select
                    outlined
                    v-model="employmentId"
                    emit-value
                    map-options
                    use-input
                    input-debounce="300"
                    :options="filteredEmploymentStatuses"
                    @filter="filterEmploymentStatusFn"
                    :error="Errors.employmentId.type"
                    dropdown-icon="keyboard_arrow_down"
                    :no-error-icon="true"
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
                    <template v-slot:append>
                        <q-icon
                            v-if="Errors.employmentId.type"
                            name="error"
                            color="negative"
                            class="cursor-pointer"
                            size="xs"
                        >
                            <q-tooltip
                                anchor="top middle"
                                self="center middle"
                                class="bg-negative"
                            >
                                <div
                                    v-for="(msg, i) in Errors.employmentId.messages"
                                    :key="i"
                                    class="text-capitalize"
                                >
                                    <q-icon name="error" color="white" size="xs" />&nbsp;{{ msg }}
                                </div>
                            </q-tooltip>
                        </q-icon>
                    </template>
                </q-select>
            </div>
            <div class="col-2">
                <div class="q-mb-xs">
                    <span class="text-caption text-uppercase text-grey q-mr-sm">select appointment status</span>
                </div>
                <q-select
                    outlined
                    v-model="appointmentId"
                    emit-value
                    map-options
                    use-input
                    input-debounce="300"
                    :options="filteredAppointmentStatuses"
                    @filter="filterAppointmentStatusFn"
                    :error="Errors.appointmentId.type"
                    dropdown-icon="keyboard_arrow_down"
                    :no-error-icon="true"
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
                    <template v-slot:append>
                        <q-icon
                            v-if="Errors.appointmentId.type"
                            name="error"
                            color="negative"
                            class="cursor-pointer"
                            size="xs"
                        >
                            <q-tooltip
                                anchor="top middle"
                                self="center middle"
                                class="bg-negative"
                            >
                                <div
                                    v-for="(msg, i) in Errors.appointmentId.messages"
                                    :key="i"
                                    class="text-capitalize"
                                >
                                    <q-icon name="error" color="white" size="xs" />&nbsp;{{ msg }}
                                </div>
                            </q-tooltip>
                        </q-icon>
                    </template>
                </q-select>
            </div>
            <div class="col-2">
                <div class="q-mb-xs">
                    <span class="text-caption text-uppercase text-grey q-mr-sm">date hired</span>
                </div>
                <q-input 
                    v-model="dateHired" 
                    outlined 
                    :error="Errors.dateHired.type"
                    :no-error-icon="true"
                    type="date"
                >
                    <template v-slot:append>
                        <q-icon
                            v-if="Errors.dateHired.type"
                            name="error"
                            color="negative"
                            class="cursor-pointer"
                            size="xs"
                        >
                            <q-tooltip
                                anchor="top middle"
                                self="center middle"
                                class="bg-negative"
                            >
                                <div
                                    v-for="(msg, i) in Errors.dateHired.messages"
                                    :key="i"
                                    class="text-capitalize"
                                >
                                    <q-icon name="error" color="white" size="xs" />&nbsp;{{ msg }}
                                </div>
                            </q-tooltip>
                        </q-icon>
                    </template>
                </q-input>
            </div>
        </div>
    </q-card-section>
    <q-card-actions class="q-pa-lg">
        <div class="q-gutter-sm">
            <q-btn v-if="vacancies.length" unelevated size="md" color="primary" class="btn text-capitalize" label="save" @click="Save()"/>
            <q-btn unelevated size="md" color="primary" class="btn text-capitalize" label="print" outline @click="PrintServiceRecord()"/>
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
import { date } from 'quasar';

const EmployeeStore = useEmployeeStore();

const AuthStore = useAuthStore();

const vacancyId = ref('');
const employmentId = ref('');
const appointmentId = ref('');
const dateHired = ref('');

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
    vacancyId: { 
        type: null, messages: []
    },
     employmentId: { 
        type: null, messages: []
    },
    appointmentId: { 
        type: null, messages: []
    },
    dateHired: { 
        type: null, messages: []
    },
});

const Validations = () => {

    let isError = false;

    Object.keys(Errors).forEach(key => {
        Errors[key].type = null;
        Errors[key].messages = [];
    });

    if (!vacancyId.value) {
        Errors.vacancyId.type = true;
        Errors.vacancyId.messages.push('vacancy is required');
        isError = true;
    } else {
        Errors.vacancyId.type = null;
    }

    if (!employmentId.value) {
        Errors.employmentId.type = true;
        Errors.employmentId.messages.push('employment status is required');
        isError = true;
    } else {
        Errors.employmentId.type = null;
    }

    if (!appointmentId.value) {
        Errors.appointmentId.type = true;
        Errors.appointmentId.messages.push('appointment status is required');
        isError = true;
    } else {
        Errors.appointmentId.type = null;
    }

    if (!dateHired.value) {
        Errors.dateHired.type = true;
        Errors.dateHired.messages.push('date hired is required');
        isError = true;
    } else {
        Errors.dateHired.type = null;
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

const LoadService = async () => {
    EmployeeStore.loading = true;
    try {
        const { data } = await api.get(`/employee/service/${EmployeeStore.profileId}`);
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
        const response = await api.post(`/employee/service/${EmployeeStore.profileId}`, {
            vacancyId: vacancyId.value,
            employmentId: employmentId.value,
            appointmentId: appointmentId.value,
            dateHired: dateHired.value
        });
        LoadService();
        LoadVacancies();
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

const vacancies = ref([]);
const appointmentstatuses = ref([]);
const employmentstatuses = ref([]);

const filteredEmploymentStatuses = ref([]);
const filteredAppointmentStatuses = ref([]);

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

const normalizeOptions = data => data.map(d => ({
    label: d.label ?? d.name ?? String(d.text ?? d.value),
    value: Number(d.value ?? d.id)
}));

const filterEmploymentStatusFn = createFilterFn(employmentstatuses, filteredEmploymentStatuses);
const filterAppointmentStatusFn = createFilterFn(appointmentstatuses, filteredAppointmentStatuses);

const LoadVacancies = async () => {
    try {
        const response = await api.get(`/option/vacancies`);
        vacancies.value = response.data;
    } catch (error) {
        console.error("Error fetching options:", error);
    }
};

const LoadEmploymentStatuses = async () => {
    try {
        const { data } = await api.get(`/option/employmentstatuses`);
        employmentstatuses.value = normalizeOptions(data)
        filteredEmploymentStatuses.value = [...employmentstatuses.value]
    } catch (error) {
        console.error("Error fetching options:", error);
    }
};

const LoadAppointmentStatuses = async () => {
    try {
        const { data } = await api.get(`/option/appointmentstatuses`);
        appointmentstatuses.value = normalizeOptions(data)
        filteredAppointmentStatuses.value = [...appointmentstatuses.value]
    } catch (error) {
        console.error("Error fetching options:", error);
    }
};

onBeforeMount(() => {
    LoadVacancies();
    LoadEmploymentStatuses();
    LoadAppointmentStatuses();
});

onMounted(() => {
    LoadService();
});

const printDialog = ref(false);
const pdf = ref(null);

const PrintServiceRecord = async () => {
    EmployeeStore.loading = true;
    try {
        const res = await api.get(`/employee/service/${EmployeeStore.employment.profileId}/pdf`, {
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

<style lang="css" scoped>
.card--error {
    border: 1px solid var(--q-negative);
}
</style>