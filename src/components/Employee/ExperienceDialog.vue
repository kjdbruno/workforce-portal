<template>
    <q-dialog v-model="isOpen" full-height position="right" persistent square class="dialog" @before-show="PopulateData()">
        <q-card class="dialog-card column full-height">
            <q-card-section class="q-pa-lg">
                <div class="text-h6 text-uppercase">experience information</div>
            </q-card-section>
            <q-separator inset />
            <q-card-section class="col q-pa-lg scroll">
                <div v-for="(value, index) in experiences" :key="index" class="q-mb-md">
                    <div>
                        <span class="text-uppercase text-body1 text-bold">experience {{ index+1 }}</span>
                        <q-btn 
                            v-if="experiences.length > 1" 
                            round 
                            icon="delete" 
                            flat 
                            unelevated 
                            color="grey" 
                            @click="RemoveExperience(index)" 
                            size="sm"
                            class="q-ml-sm"
                        />
                    </div>
                    <div class="row q-col-gutter-xs q-mb-sm">
                        <div class="col-3">
                            <div class="text-caption text-uppercase q-mb-xs" :class="Errors.experiences.position.msg ? 'text-negative' : 'text-grey'">{{ Errors.experiences.position.msg ? Errors.experiences.position.msg : 'position' }}</div>
                            <q-input 
                                v-model="value.position" 
                                label="Enter Position"
                                outlined 
                                :error="Errors.experiences.position.type[index]"
                                :no-error-icon="true"
                                input-class="text-capitalize"
                            />
                        </div>
                        <div class="col-3">
                            <div class="text-caption text-uppercase q-mb-xs" :class="Errors.experiences.description.msg ? 'text-negative' : 'text-grey'">{{ Errors.experiences.description.msg ? Errors.experiences.description.msg : 'job description' }}</div>
                            <q-input 
                                v-model="value.description" 
                                label="EnterJob Description"
                                outlined 
                                :error="Errors.experiences.description.type[index]"
                                :no-error-icon="true"
                            />
                        </div>
                    </div>
                    <div class="row q-col-gutter-xs q-mb-sm">
                        <div class="col-2">
                            <div class="text-caption text-uppercase q-mb-xs" :class="Errors.experiences.startDate.msg ? 'text-negative' : 'text-grey'">{{ Errors.experiences.startDate.msg ? Errors.experiences.startDate.msg : 'start date (YYYY-MM-DD)' }}</div>
                            <q-input outlined v-model="value.startDate" label="Enter Date">
                                <q-popup-proxy cover transition-show="scale" transition-hide="scale" class="no-shadow custom-border radius-sm" :ref="el => expStartPopups[index] = el">
                                    <q-date v-model="value.startDate" mask="YYYY-MM-DD" @update:model-value="() => hideExpStartPopup(index)"/>
                                </q-popup-proxy>
                            </q-input>
                        </div>
                        <div class="col-2">
                            <div class="text-caption text-uppercase q-mb-xs" :class="Errors.experiences.endDate.msg ? 'text-negative' : 'text-grey'">{{ Errors.experiences.endDate.msg ? Errors.experiences.endDate.msg : 'end date (YYYY-MM-DD)' }}</div>
                            <q-input outlined v-model="value.endDate" label="Enter Date">
                                <q-popup-proxy cover transition-show="scale" transition-hide="scale" class="no-shadow custom-border radius-sm" :ref="el => expEndPopups[index] = el">
                                    <q-date v-model="value.endDate" mask="YYYY-MM-DD" @update:model-value="() => hideExpEndPopup(index)"/>
                                </q-popup-proxy>
                            </q-input>
                        </div>
                    </div>
                </div>
            </q-card-section>
            
            <q-card-actions class="q-pa-lg bg">
                <div class="q-gutter-sm">
                    <q-btn unelevated size="md" color="primary" class="btn text-capitalize" label="save" @click="Save()" />
                    <q-btn unelevated size="md" color="primary" class="btn text-capitalize" label="add" @click="AddExperience" outline/>
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

const experiences = ref([
    {
        id: "",
        position: '',
        startDate: '',
        endDate: '',
        description: ''
    }
]);

const EmptyExperience = () => ({
    id: '',
    position: '',
    startDate: '',
    endDate: '',
    description: ''
})

const GetExperience = async (id) => {
    SubmitLoading.value = true;
    try {
        const response = await api.get(`/employee/experience`, {
            params: { 
                id: id
            }
        });
        !response.data.record.length
            ? [EmptyExperience()]
            : MapExperiences(response.data.record)
        
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

const MapExperiences = (data = []) => {
    experiences.value = data.map(item => ({
        id: item.id ?? '',
        position: item.position ?? '',
        description: item.description ?? '',
        startDate: item.start_date ?? '',
        endDate: item.end_date ?? ''
    }))
}

const PopulateData = () => {
    GetExperience(EmployeeStore.data?.id)
}

const Errors = reactive({
    experiences: {
        position: {
            type: [], msg: ''
        },
        startDate: {
            type: [], msg: ''
        },
        endDate: {
            type: [], msg: ''
        },
        description: {
            type: [], msg: ''
        }
    }
});

const initErrors = () => {
    Errors.experiences.position.type = experiences.value.map(() => null);
    Errors.experiences.startDate.type = experiences.value.map(() => null);
    Errors.experiences.endDate.type = experiences.value.map(() => null);
    Errors.experiences.description.type = experiences.value.map(() => null);
}

const Validations = () => {

    let isError = false;

    Errors.experiences.position = { type: null, msg: '' }
    Errors.experiences.startDate = { type: null, msg: '' }
    Errors.experiences.endDate = { type: null, msg: '' }
    Errors.experiences.description = { type: null, msg: '' }

    initErrors()
    
    experiences.value.forEach((e, index) => {
        if (!e.position) {
            Errors.experiences.position.type[index] = true;
            Errors.experiences.position.msg = 'position is required';
            isError = true;
        }
        if (!e.startDate) {
            Errors.experiences.startDate.type[index] = true;
            Errors.experiences.startDate.msg = 'start date is required';
            isError = true;
        } else if (isNaN(new Date(e.startDate).getTime())) {
            Errors.experiences.startDate.type[index] = true;
            Errors.experiences.startDate.msg = 'start date must be a valid date';
            isError = true;
        }
        if (!e.endDate) {
            Errors.experiences.endDate.type[index] = true;
            Errors.experiences.endDate.msg = 'end date is required';
            isError = true;
        } else if (isNaN(new Date(e.endDate).getTime())) {
            Errors.experiences.endDate.type[index] = true;
            Errors.experiences.endDate.msg = 'end date must a valid date';
            isError = true;
        }
        if (!e.description) {
            Errors.experiences.description.type[index] = true;
            Errors.experiences.description.msg = 'job description is required';
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

const FormatStartDate = (val, index) => {
    experiences.value[index].startDate = FormatToYMD(val)
}
const FormatEndDate = (val, index) => {
    experiences.value[index].endDate = FormatToYMD(val)
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

const AddExperience = () => {
    const e = experiences.value;
    e.unshift({
        position: "",
        description: "",
        startDate: "",
        endDate: ""
    });
}

const RemoveExperience = (index) => {
    const e = experiences.value;
    e.splice(index, 1);
}

const Save = async () => {
    if (!Validations()) return;
    SubmitLoading.value = true;
    try {
        const response = await api.post(`/employee/${EmployeeStore.data?.id}/experience`, {
            experiences: experiences.value
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

const expStartPopups = ref([]);
const expEndPopups = ref([]);
function hideExpStartPopup(index) {
  nextTick(() => {
    if (expStartPopups.value[index]) expStartPopups.value[index].hide();
  });
}
function hideExpEndPopup(index) {
  nextTick(() => {
    if (expEndPopups.value[index]) expEndPopups.value[index].hide();
  });
}
</script>