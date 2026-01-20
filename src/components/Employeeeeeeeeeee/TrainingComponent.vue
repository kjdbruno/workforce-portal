<template>
    <q-card-section class="col q-pa-lg scroll">
        <div class="q-mb-md">
            <span class="text-subtitle1 text-uppercase text-bold q-mr-md">training information</span>
        </div>
        <div class="row q-col-gutter-xs q-mb-xs">
            <div class="col-3">
                <div class="q-mb-xs">
                    <span class="text-caption text-uppercase text-grey q-mr-sm">training title</span>
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
            <div class="col-1">
                <div class="q-mb-xs">
                    <span class="text-caption text-uppercase text-grey q-mr-sm">hour/s</span>
                </div>
            </div>
            <div class="col-2">
                <div class="q-mb-xs">
                    <span class="text-caption text-uppercase text-grey q-mr-sm">training type</span>
                </div>
            </div>
            <div class="col-2">
                <div class="q-mb-xs">
                    <span class="text-caption text-uppercase text-grey q-mr-sm">conducted by</span>
                </div>
            </div>
        </div>
        <div class="row q-col-gutter-xs q-mb-xs" v-for="(value, index) in trainings" :key="index">
            <div class="col-3">
                <q-input 
                    v-model="value.title" 
                    outlined 
                    :error="Errors.trainings[index]?.title.type"
                    :no-error-icon="true"
                    input-class="text-capitalize"
                >
                    <template v-slot:append>
                        <q-icon
                            v-if="Errors.trainings[index]?.title?.type"
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
                                    v-for="(msg, i) in Errors.trainings[index]?.title?.messages"
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
                    :error="Errors.trainings[index]?.start.type"
                    :no-error-icon="true"
                >
                    <template v-slot:append>
                        <q-icon
                            v-if="Errors.trainings[index]?.start?.type"
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
                                    v-for="(msg, i) in Errors.trainings[index]?.start?.messages"
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
                    :error="Errors.trainings[index]?.end.type"
                    :no-error-icon="true"
                >
                    <template v-slot:append>
                        <q-icon
                            v-if="Errors.trainings[index]?.end?.type"
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
                                    v-for="(msg, i) in Errors.trainings[index]?.end?.messages"
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
                    v-model="value.hour" 
                    outlined 
                    :error="Errors.trainings[index]?.hour.type"
                    :no-error-icon="true"
                >
                    <template v-slot:append>
                        <q-icon
                            v-if="Errors.trainings[index]?.hour?.type"
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
                                    v-for="(msg, i) in Errors.trainings[index]?.hour?.messages"
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
            <div class="col-2">
                <q-select
                    outlined
                    v-model="value.typeId"
                    option-value="value"
                    option-label="label"
                    virtual-scroll
                    emit-value
                    map-options
                    use-input
                    input-debounce="300"
                    :options="filteredTrainingTypes"
                    @filter="filterTrainingTypeFn"
                    :error="Errors.trainings[index]?.typeId.type"
                    hide-dropdown-icon
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
                            v-if="Errors.trainings[index]?.typeId?.type"
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
                                    v-for="(msg, i) in Errors.trainings[index]?.typeId?.messages"
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
                <q-input 
                    v-model="value.conductedBy" 
                    outlined 
                    :error="Errors.trainings[index]?.conductedBy.type"
                    :no-error-icon="true"
                    input-class="text-capitalize"
                >
                    <template v-slot:append>
                        <q-icon
                            v-if="Errors.trainings[index]?.conductedBy?.type"
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
                                    v-for="(msg, i) in Errors.trainings[index]?.conductedBy?.messages"
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
                    v-if="trainings.length > 1" 
                    round 
                    icon="delete" 
                    flat 
                    unelevated 
                    color="grey" 
                    @click="removeTraining(index)" 
                    size="sm"
                    class="q-mt-md"
                />
            </div>
        </div> 
    </q-card-section>
    <q-card-actions class="q-pa-lg">
        <div class="q-gutter-sm">
            <q-btn unelevated size="md" color="primary" class="btn text-capitalize" label="save" @click="Save()"/>
            <q-btn unelevated size="md" color="primary" class="btn text-capitalize" label="add" outline @click="addTraining"/>
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
    trainings: []
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
    trainings.value.forEach((e, index) => {
        if (!e.title) {
            Errors.trainings[index].title.type = true;
            Errors.trainings[index].title.messages.push('training title is required');
            isError = true;
        }
        if (!e.startDate) {
            Errors.trainings[index].start.type = true;
            Errors.trainings[index].start.messages.push('start date is required');
            isError = true;
        }
        if (!e.endDate) {
            Errors.trainings[index].end.type = true;
            Errors.trainings[index].end.messages.push('end date is required');
            isError = true;
        }
        if (!e.hour) {
            Errors.trainings[index].hour.type = true;
            Errors.trainings[index].hour.messages.push('hour/s is required');
            isError = true;
        }
        if (!e.typeId) {
            Errors.trainings[index].typeId.type = true;
            Errors.trainings[index].typeId.messages.push('training type is required');
            isError = true;
        }
        if (!e.conductedBy) {
            Errors.trainings[index].conductedBy.type = true;
            Errors.trainings[index].conductedBy.messages.push('conducted by is required');
            isError = true;
        }
    });

    if (isError) {
        Toast.fire({
            icon: "error",
            html: `
                <div class="text-h6 text-bold text-uppercase">Request Failed</div>
                <div class="text-caption">Please fill in required training fields.</div>
            `
        });
    }

    return !isError
}

const trainingTypes = ref([]);

const filteredTrainingTypes = ref([]);

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
}))

const filterTrainingTypeFn = createFilterFn(trainingTypes, filteredTrainingTypes);

const LoadTrainingTypes = async () => {
    try {
        const { data } = await api.get(`/option/trainingtypes`);
        trainingTypes.value = normalizeOptions(data)
        filteredTrainingTypes.value = [...trainingTypes.value]
    } catch (error) {
        console.error("Error fetching options:", error);
    }
};

const addTraining = () => {
    const t = trainings.value;
    t.unshift({
        title: "",
        startDate: "",
        endDate: "",
        hour: "",
        type: "",
        conductedBy: ""
    });
}

const removeTraining = (index) => {
    const t = trainings.value;
    t.splice(index, 1);
    Errors.trainings.splice(index, 1);
}

const LoadTraining = async () => {
    EmployeeStore.loading = true;
    try {
        const { data } = await api.get(`/employee/training/${EmployeeStore.profileId}`);

        const trainingsData = Array.isArray(data.data) ? data.data : [data.data]
        if (!trainingsData.length || !trainingsData[0]) {
            return;
        }
        trainings.value = trainingsData.map(e => ({
            title: e.title || '',
            startDate: e.startDate?.slice(0, 10) || '',
            endDate: e.endDate?.slice(0, 10) || '',
            hour: e.hour || '',
            typeId: Number(e.typeId),
            conductedBy: e.conductedBy || ''
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
        if (EmployeeStore.subComponent === 'EmployeeTrainingsComponent') {
            Save();
        }
  }
);

const Save = async () => {
    if (!Validations()) return;
    EmployeeStore.loading = true;
    try {
        const response = await api.post(`/employee/training/${EmployeeStore.profileId}`, {
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

onMounted(() => {
    LoadTraining();
});

onBeforeMount(() => {
    LoadTrainingTypes();
})
</script>