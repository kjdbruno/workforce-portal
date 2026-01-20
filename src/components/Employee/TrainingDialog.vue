<template>
    <q-dialog v-model="isOpen" full-height position="right" persistent square class="dialog" @before-show="PopulateData()">
        <q-card class="dialog-card column full-height">
            <q-card-section class="q-pa-lg">
                <div class="text-h6 text-uppercase">training information</div>
            </q-card-section>
            <q-separator inset />
            <q-card-section class="col q-pa-lg scroll">
                <div v-for="(value, index) in trainings" :key="index" class="q-mb-md">
                    <div>
                        <span class="text-uppercase text-body1 text-bold">training {{ index+1 }}</span>
                        <q-btn 
                            v-if="trainings.length > 1" 
                            round 
                            icon="delete" 
                            flat 
                            unelevated 
                            color="grey" 
                            @click="RemoveTraining(index)" 
                            size="sm"
                            class="q-ml-sm"
                        />
                    </div>
                    <div class="row q-col-gutter-xs q-mb-sm">
                        <div class="col-2">
                            <div class="text-caption text-uppercase q-mb-xs" :class="Errors.trainings.trainingtype.msg ? 'text-negative' : 'text-grey'">{{ Errors.trainings.trainingtype.msg ? Errors.trainings.trainingtype.msg : 'training type' }}</div>
                            <q-select
                                outlined
                                v-model="value.trainingtype"
                                label="Choose Training Type"
                                input-debounce="300"
                                :options="trainingtypes"
                                :error="Errors.trainings.trainingtype.type[index]"
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
                                            <q-item-label>{{ $CapitalizeWords(scope.opt) }}</q-item-label>
                                        </q-item-section>
                                    </q-item>
                                </template>
                            </q-select>
                        </div>
                        <div class="col-4">
                            <div class="text-caption text-uppercase q-mb-xs" :class="Errors.trainings.title.msg ? 'text-negative' : 'text-grey'">{{ Errors.trainings.title.msg ? Errors.trainings.title.msg : 'title' }}</div>
                            <q-input 
                                v-model="value.title" 
                                label="Enter Title"
                                outlined 
                                :error="Errors.trainings.title.type[index]"
                                :no-error-icon="true"
                                input-class="text-capitalize"
                            />
                        </div>
                    </div>
                    <div class="row q-col-gutter-xs q-mb-sm">
                        <div class="col-2">
                            <div class="text-caption text-uppercase q-mb-xs" :class="Errors.trainings.startDate.msg ? 'text-negative' : 'text-grey'">{{ Errors.trainings.startDate.msg ? Errors.trainings.startDate.msg : 'start date (YYYY-MM-DD)' }}</div>
                            <q-input outlined v-model="value.startDate" label="Enter Date">
                                <q-popup-proxy cover transition-show="scale" transition-hide="scale" class="no-shadow custom-border radius-sm" :ref="el => trainingStartPopups[index] = el">
                                    <q-date v-model="value.startDate" mask="YYYY-MM-DD" @update:model-value="() => hideTrainingStartPopup(index)"/>
                                </q-popup-proxy>
                            </q-input>
                        </div>
                        <div class="col-2">
                            <div class="text-caption text-uppercase q-mb-xs" :class="Errors.trainings.endDate.msg ? 'text-negative' : 'text-grey'">{{ Errors.trainings.endDate.msg ? Errors.trainings.endDate.msg : 'end date (YYYY-MM-DD)' }}</div>
                            <q-input outlined v-model="value.endDate" label="Enter Date">
                                <q-popup-proxy cover transition-show="scale" transition-hide="scale" class="no-shadow custom-border radius-sm" :ref="el => trainingEndPopups[index] = el">
                                    <q-date v-model="value.endDate" mask="YYYY-MM-DD" @update:model-value="() => hideTrainingEndPopup(index)"/>
                                </q-popup-proxy>
                            </q-input>
                        </div>
                        <div class="col-1">
                            <div class="text-caption text-uppercase q-mb-xs" :class="Errors.trainings.hour.msg ? 'text-negative' : 'text-grey'">{{ Errors.trainings.hour.msg ? Errors.trainings.hour.msg : 'hour/s' }}</div>
                            <q-input 
                                v-model="value.hour" 
                                label="Enter Hour/s"
                                outlined 
                                :error="Errors.trainings.hour.type[index]"
                                :no-error-icon="true"
                            />
                        </div>
                    </div>
                </div>
            </q-card-section>
            
            <q-card-actions class="q-pa-lg bg">
                <div class="q-gutter-sm">
                    <q-btn unelevated size="md" color="primary" class="btn text-capitalize" label="save" @click="Save()" />
                    <q-btn unelevated size="md" color="primary" class="btn text-capitalize" label="add" @click="AddTraining" outline/>
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
import { ref, onMounted, onBeforeUnmount, onBeforeMount, watch, reactive, computed, nextTick } from 'vue';
import { api } from 'src/boot/axios';
import moment from 'moment';
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

const trainings = ref([
    {
        id: "",
        title: '',
        startDate: '',
        endDate: '',
        hour: '',
        trainingtype: '',
    }
]);
const EmptyTraining = () => ({
    id: "",
    trainingtype: "",
    title: "",
    startDate: "",
    endDate: "",
    hour: ""
})

const GetTraining = async (id) => {
    SubmitLoading.value = true;
    try {
        const response = await api.get(`/employee/training`, {
            params: { 
                id: id
            }
        });
        !response.data.record.length
            ? [EmptyTraining()]
            : MapTrainings(response.data.record)

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
        SubmitLoading.value = false;
    }
}

const MapTrainings = (data = []) => {
    trainings.value = data.map(item => ({
        id: item.id ?? '',
        trainingtype: item.type ?? '',
        title: item.title ?? '',
        startDate: item.start_date ?? '',
        endDate: item.end_date ?? '',
        hour: item.hour ?? '',
    }))
}

const PopulateData = () => {
    GetTraining(EmployeeStore.data?.id)
}

const Errors = reactive({
    trainings: {
        trainingtype: {
            type: [], msg: ''
        },
        title: {
            type: [], msg: ''
        },
        startDate: {
            type: [], msg: ''
        },
        endDate: {
            type: [], msg: ''
        },
        hour: {
            type: [], msg: ''
        }
    }
});

const initErrors = () => {

    Errors.trainings.trainingtype.type = trainings.value.map(() => null);
    Errors.trainings.title.type = trainings.value.map(() => null);
    Errors.trainings.startDate.type = trainings.value.map(() => null);
    Errors.trainings.endDate.type = trainings.value.map(() => null);
    Errors.trainings.hour.type = trainings.value.map(() => null);
}

const Validations = () => {

    let isError = false;

    Errors.trainings.trainingtype = { type: null, msg: ''}
    Errors.trainings.title = { type: null, msg: ''}
    Errors.trainings.startDate = { type: null, msg: ''}
    Errors.trainings.endDate = { type: null, msg: ''}
    Errors.trainings.hour = { type: null, msg: ''}

    initErrors()

    trainings.value.forEach((e, index) => {
        if (!e.trainingtype) {
            Errors.trainings.trainingtype.type[index] = true;
            Errors.trainings.trainingtype.msg = 'training type is required';
            isError = true;
        }
        if (!e.title) {
            Errors.trainings.title.type[index] = true;
            Errors.trainings.title.msg = 'title is required';
            isError = true;
        }
        if (!e.startDate) {
            Errors.trainings.startDate.type[index] = true;
            Errors.trainings.startDate.msg = 'start date is required';
            isError = true;
        } else if (isNaN(new Date(e.startDate).getTime())) {
            Errors.trainings.startDate.type[index] = true;
            Errors.trainings.startDate.msg = 'start date must be a valid date';
            isError = true;
        }
        if (!e.endDate) {
            Errors.trainings.endDate.type[index] = true;
            Errors.trainings.endDate.msg = 'end date is required';
            isError = true;
        } else if (isNaN(new Date(e.endDate).getTime())) {
            Errors.trainings.endDate.type[index] = true;
            Errors.trainings.endDate.msg = 'end date must be a valid date';
            isError = true;
        }
        if (!e.hour) {
            Errors.trainings.hour.type[index] = true;
            Errors.trainings.hour.msg = 'hour/s is required';
            isError = true;
        } else if (isNaN(e.hour) || e.hour < 1 || e.hour > 23) {
            Errors.trainings.hour.type[index] = true;
            Errors.trainings.hour.msg = 'hour/s must be a valid number between 1 to 23';
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

const trainingtypes = ref(["Managerial", "Supervisory", "Technical", "Orientation", "Compliance", "Seminar", "Workshop", "Conference", "Other"]);

const FormatStartDate = (val, index) => {
    trainings.value[index].startDate = FormatToYMD(val)    
}
const FormatEndDate = (val, index) => {
    trainings.value[index].endDate = FormatToYMD(val)
}
const FormatToYMD = (val) => {
    if (!val) return ''

    // keep digits only
    const digits = val.replace(/\D/g, '').slice(0, 8)

    let formatted = digits

    if (digits.length > 4 && digits.length <= 6) {
        formatted = `${digits.slice(0, 4)}-${digits.slice(4)}`
    } else if (digits.length > 6) {
        formatted = `${digits.slice(0, 4)}-${digits.slice(4, 6)}-${digits.slice(6)}`
    }

    return formatted
}

const AddTraining = () => {
    const t = trainings.value;
    t.push({
        id: "",
        trainingtype: "",
        title: "",
        startDate: "",
        endDate: "",
        hour: ""
    });
}

const RemoveTraining = (index) => {
    const t = trainings.value;
    t.splice(index, 1);
}

const Save = async () => {
    if (!Validations()) return;
    SubmitLoading.value = true;
    try {
        const response = await api.post(`/employee/${EmployeeStore.data?.id}/training`, {
            trainings: trainings.value
        });
        emit('update:modelValue', null);
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
        SubmitLoading.value = false;
    }
};

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

const trainingStartPopups = ref([]);
const trainingEndPopups = ref([]);
function hideTrainingStartPopup(index) {
  nextTick(() => {
    if (trainingStartPopups.value[index]) trainingStartPopups.value[index].hide();
  });
}
function hideTrainingEndPopup(index) {
  nextTick(() => {
    if (trainingEndPopups.value[index]) trainingEndPopups.value[index].hide();
  });
}
</script>