<template>
    <q-card-section class="col q-pa-lg scroll">
        <div class="q-mb-md">
            <span class="text-subtitle1 text-uppercase text-bold q-mr-md">experience information</span>
        </div>
        <div class="row q-col-gutter-xs q-mb-xs">
            <div class="col-3">
                <div class="q-mb-xs">
                    <span class="text-caption text-uppercase text-grey q-mr-sm">position</span>
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
            <div class="col-5">
                <div class="q-mb-xs">
                    <span class="text-caption text-uppercase text-grey q-mr-sm">job description</span>
                </div>
            </div>
        </div>
        <div class="row q-col-gutter-xs q-mb-xs" v-for="(value, index) in experiences" :key="index">
            <div class="col-3">
                <q-input 
                    v-model="value.position" 
                    outlined 
                    :error="Errors.experiences[index]?.position.type"
                    :no-error-icon="true"
                    input-class="text-capitalize"
                >
                    <template v-slot:append>
                        <q-icon
                            v-if="Errors.experiences[index]?.position?.type"
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
                                    v-for="(msg, i) in Errors.experiences[index]?.position?.messages"
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
            <div class="col-1">
                <q-input 
                    v-model="value.startDate" 
                    outlined 
                    type="date"
                    :error="Errors.experiences[index]?.start.type"
                    :no-error-icon="true"
                >
                    <template v-slot:append>
                        <q-icon
                            v-if="Errors.experiences[index]?.start?.type"
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
                                    v-for="(msg, i) in Errors.experiences[index]?.start?.messages"
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
            <div class="col-1">
                <q-input 
                    v-model="value.endDate" 
                    outlined 
                    type="date"
                    :error="Errors.experiences[index]?.end.type"
                    :no-error-icon="true"
                >
                    <template v-slot:append>
                        <q-icon
                            v-if="Errors.experiences[index]?.end?.type"
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
                                    v-for="(msg, i) in Errors.experiences[index]?.end?.messages"
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
            <div class="col-5">
                <q-input 
                    v-model="value.description" 
                    outlined 
                    :error="Errors.experiences[index]?.description.type"
                    :no-error-icon="true"
                >
                    <template v-slot:append>
                        <q-icon
                            v-if="Errors.experiences[index]?.description?.type"
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
                                    v-for="(msg, i) in Errors.experiences[index]?.description?.messages"
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
            <div class="col-1">
                <q-btn 
                    v-if="experiences.length > 1" 
                    round 
                    icon="delete" 
                    flat 
                    unelevated 
                    color="grey" 
                    @click="removeExperience(index)" 
                    size="sm"
                    class="q-mt-md"
                />
            </div>
        </div>
    </q-card-section>
    <q-card-actions class="q-pa-lg">
        <div class="q-gutter-sm">
            <q-btn unelevated size="md" color="primary" class="btn text-capitalize" label="save" @click="Save()"/>
            <q-btn unelevated size="md" color="primary" class="btn text-capitalize" label="add" outline @click="addExperience"/>
            <q-btn unelevated size="md" color="primary" class="btn text-capitalize" label="discard" v-close-popup outline/>
        </div>
    </q-card-actions>
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

const experiences = ref([
    {
        position: '',
        startDate: '',
        endDate: '',
        description: ''
    }
]);

const Errors = reactive({
    experiences: []
});

const Validations = () => {

    let isError = false;

    Object.keys(Errors).forEach(key => {
        Errors[key].type = null;
        Errors[key].messages = [];
    });

    Errors.experiences = experiences.value.map(() => ({
        position: { type: null, messages: [] },
        start: { type: null, messages: [] },
        end: { type: null, messages: [] },
        description: { type: null, messages: [] }
    }))
    experiences.value.forEach((e, index) => {
        if (!e.position) {
            Errors.experiences[index].position.type = true;
            Errors.experiences[index].position.messages.push('position is required');
            isError = true;
        }
        if (!e.startDate) {
            Errors.experiences[index].start.type = true;
            Errors.experiences[index].start.messages.push('start date is required');
            isError = true;
        }
        if (!e.endDate) {
            Errors.experiences[index].end.type = true;
            Errors.experiences[index].end.messages.push('end date is required');
            isError = true;
        }
        if (!e.description) {
            Errors.experiences[index].description.type = true;
            Errors.experiences[index].description.messages.push('job description is required');
            isError = true;
        }
    });

    if (isError) {
        Toast.fire({
            icon: "error",
            html: `
                <div class="text-h6 text-bold text-uppercase">Request Failed</div>
                <div class="text-caption">Please fill in required experience fields.</div>
            `
        });
    }

    return !isError
}

const addExperience = () => {
    const e = experiences.value;
    e.unshift({
        position: "",
        startDate: "",
        endDate: "",
        description: ""
    });
}

const removeExperience = (index) => {
    const e = experiences.value;
    e.splice(index, 1);
    Errors.experiences.splice(index, 1);
}

const LoadExperience = async () => {
    EmployeeStore.loading = true;
    try {
        const { data } = await api.get(`/employee/experience/${EmployeeStore.profileId}`);

        const experiencesData = Array.isArray(data.data) ? data.data : [data.data]
        if (!experiencesData.length || !experiencesData[0]) {
            return;
        }
        experiences.value = experiencesData.map(e => ({
            position: e.position || '',
            startDate: e.startDate?.slice(0, 10) || '',
            endDate: e.endDate?.slice(0, 10) || '',
            description: e.jobDescription || ''
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

watch(
    () => EmployeeStore.saveEventCounter,
    () => {
        if (EmployeeStore.subComponent === 'EmployeeExperiencesComponent') {
            Save();
        }
    }
);

const Save = async () => {
    if (!Validations()) return;
    EmployeeStore.loading = true;
    try {
        const response = await api.post(`/employee/experience/${EmployeeStore.profileId}`, {
            experiences: experiences.value
        });
        LoadExperience();
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
    LoadExperience();
});

onBeforeMount(() => {
    
});
</script>