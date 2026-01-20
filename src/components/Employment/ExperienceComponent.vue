<template>
    <div>
        <div class="q-mb-md">
            <span class="text-subtitle1 text-uppercase text-bold q-mr-md">experience information</span>
            <q-btn icon="add" round size="sm" outline unelevated color="primary" @click="addExperience"/>
        </div>
        <div class="row q-col-gutter-xs q-mb-xs">
            <div class="col-3">
                <div class="q-mb-xs">
                    <span class="text-caption text-uppercase text-grey q-mr-sm">position</span>
                    <q-icon
                        :name="Errors.experinceMessages?.position?.length ? 'error' : 'info'"
                        :color="Errors.experinceMessages?.position?.length ? 'negative' : 'grey'"
                        class="cursor-pointer"
                        size="xs"
                    >
                        <q-tooltip
                            anchor="top middle"
                            self="center middle"
                            :class="Errors.experinceMessages?.position?.length ? 'bg-negative' : 'bg-grey'"
                        >
                            <template v-if="Errors.experinceMessages?.position?.length">
                                <div
                                    v-for="(msg, i) in Errors.experinceMessages.position"
                                    :key="i"
                                    class="text-capitalize"
                                >
                                    <q-icon name="error" color="white" size="xs" />&nbsp;{{ msg }}
                                </div>
                            </template>
                            <template v-else>
                                <div class="text-capitalize">
                                    <q-icon name="info" color="white" size="xs" />&nbsp;Required
                                </div>
                            </template>
                        </q-tooltip>
                    </q-icon>
                </div>
            </div>
            <div class="col-1">
                <div class="q-mb-xs">
                    <span class="text-caption text-uppercase text-grey q-mr-sm">start date</span>
                    <q-icon
                        :name="Errors.experinceMessages?.start?.length ? 'error' : 'info'"
                        :color="Errors.experinceMessages?.start?.length ? 'negative' : 'grey'"
                        class="cursor-pointer"
                        size="xs"
                    >
                        <q-tooltip
                            anchor="top middle"
                            self="center middle"
                            :class="Errors.experinceMessages?.start?.length ? 'bg-negative' : 'bg-grey'"
                        >
                            <template v-if="Errors.experinceMessages?.start?.length">
                                <div
                                    v-for="(msg, i) in Errors.experinceMessages.start"
                                    :key="i"
                                    class="text-capitalize"
                                >
                                    <q-icon name="error" color="white" size="xs" />&nbsp;{{ msg }}
                                </div>
                            </template>
                            <template v-else>
                                <div class="text-capitalize">
                                    <q-icon name="info" color="white" size="xs" />&nbsp;Required
                                </div>
                            </template>
                        </q-tooltip>
                    </q-icon>
                </div>
            </div>
            <div class="col-1">
                <div class="q-mb-xs">
                    <span class="text-caption text-uppercase text-grey q-mr-sm">end date</span>
                    <q-icon
                        :name="Errors.experinceMessages?.end?.length ? 'error' : 'info'"
                        :color="Errors.experinceMessages?.end?.length ? 'negative' : 'grey'"
                        class="cursor-pointer"
                        size="xs"
                    >
                        <q-tooltip
                            anchor="top middle"
                            self="center middle"
                            :class="Errors.experinceMessages?.end?.length ? 'bg-negative' : 'bg-grey'"
                        >
                            <template v-if="Errors.experinceMessages?.end?.length">
                                <div
                                    v-for="(msg, i) in Errors.experinceMessages.end"
                                    :key="i"
                                    class="text-capitalize"
                                >
                                    <q-icon name="error" color="white" size="xs" />&nbsp;{{ msg }}
                                </div>
                            </template>
                            <template v-else>
                                <div class="text-capitalize">
                                    <q-icon name="info" color="white" size="xs" />&nbsp;Required
                                </div>
                            </template>
                        </q-tooltip>
                    </q-icon>
                </div>
            </div>
            <div class="col-5">
                <div class="q-mb-xs">
                    <span class="text-caption text-uppercase text-grey q-mr-sm">job description</span>
                    <q-icon
                        :name="Errors.experinceMessages?.description?.length ? 'error' : 'info'"
                        :color="Errors.experinceMessages?.description?.length ? 'negative' : 'grey'"
                        class="cursor-pointer"
                        size="xs"
                    >
                        <q-tooltip
                            anchor="top middle"
                            self="center middle"
                            :class="Errors.experinceMessages?.description?.length ? 'bg-negative' : 'bg-grey'"
                        >
                            <template v-if="Errors.experinceMessages?.description?.length">
                                <div
                                    v-for="(msg, i) in Errors.experinceMessages.description"
                                    :key="i"
                                    class="text-capitalize"
                                >
                                    <q-icon name="error" color="white" size="xs" />&nbsp;{{ msg }}
                                </div>
                            </template>
                            <template v-else>
                                <div class="text-capitalize">
                                    <q-icon name="info" color="white" size="xs" />&nbsp;Required
                                </div>
                            </template>
                        </q-tooltip>
                    </q-icon>
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
                />
            </div>
            <div class="col-1">
                <q-input 
                    v-model="value.startDate" 
                    outlined 
                    type="date"
                    :error="Errors.experiences[index]?.start.type"
                    :no-error-icon="true"
                />
            </div>
            <div class="col-1">
                <q-input 
                    v-model="value.endDate" 
                    outlined 
                    type="date"
                    :error="Errors.experiences[index]?.end.type"
                    :no-error-icon="true"
                />
            </div>
            <div class="col-5">
                <q-input 
                    v-model="value.description" 
                    outlined 
                    :error="Errors.experiences[index]?.description.type"
                    :no-error-icon="true"
                />
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

const experiences = ref([
    {
        position: '',
        startDate: '',
        endDate: '',
        description: ''
    }
]);

const Errors = reactive({
    experiences: [],
    experinceMessages: {}
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
    if (!Errors.experinceMessages) {
        Errors.experinceMessages = {
            position: [],
            start: [],
            end: [],
            description: []
        };
    } else {
        Object.keys(Errors.experinceMessages).forEach((key) => {
            Errors.experinceMessages[key] = [];
        });
    }
    experiences.value.forEach((e, index) => {
        if (!e.position) {
            Errors.experiences[index].position.type = true;
            Errors.experiences[index].position.messages.push('position is required');
            Errors.experinceMessages.position.push('position is required');
            isError = true;
        }
        if (!e.startDate) {
            Errors.experiences[index].start.type = true;
            Errors.experiences[index].start.messages.push('start date is required');
            Errors.experinceMessages.start.push('start date is required');
            isError = true;
        }
        if (!e.endDate) {
            Errors.experiences[index].end.type = true;
            Errors.experiences[index].end.messages.push('end date is required');
            Errors.experinceMessages.end.push('end date is required');
            isError = true;
        }
        if (!e.description) {
            Errors.experiences[index].description.type = true;
            Errors.experiences[index].description.messages.push('job description is required');
            Errors.experinceMessages.description.push('job description is required');
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
    ResetExperienceErrors()
}

const LoadExperience = async () => {
    EmployeeStore.loading = true;
    try {
        const { data } = await api.get(`/employee/experience/${EmployeeStore.employment.profileId}`);

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
        const response = await api.post(`/employee/experience/${EmployeeStore.employment.profileId}`, {
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