<template>
    <q-dialog v-model="isOpen" full-height position="right" persistent square class="dialog" @before-show="PopulateData()">
        <q-card class="dialog-card column full-height">
            <q-card-section class="q-pa-lg">
                <div class="text-h6 text-uppercase">education information</div>
            </q-card-section>
            <q-separator inset />
            <q-card-section class="col q-pa-lg scroll">
                <div v-for="(value, index) in educations" :key="index" class="q-mb-md">
                    <div>
                        <span class="text-uppercase text-body1 text-bold">education {{ index+1 }}</span>
                        <q-btn 
                            v-if="educations.length > 1" 
                            round 
                            icon="delete" 
                            flat 
                            unelevated 
                            color="grey" 
                            @click="RemoveEducation(index)" 
                            size="sm"
                            class="q-ml-sm"
                        />
                    </div>
                    <div class="row q-col-gutter-xs q-mb-sm">
                        <div class="col-2">
                            <div class="text-caption text-uppercase q-mb-xs" :class="Errors.educations.schoollevel.msg ? 'text-negative' : 'text-grey'">{{ Errors.educations.schoollevel.msg ? Errors.educations.schoollevel.msg : 'school level' }}</div>
                            <q-select
                                outlined
                                v-model="value.schoollevel"
                                label="Choose School Level"
                                input-debounce="300"
                                :options="schoollevels"
                                :error="Errors.educations.schoollevel.type[index]"
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
                            <div class="text-caption text-uppercase q-mb-xs" :class="Errors.educations.schoolId.msg ? 'text-negative' : 'text-grey'">{{ Errors.educations.schoolId.msg ? Errors.educations.schoolId.msg : 'school' }}</div>
                            <q-select
                                outlined
                                v-model="value.schoolId"
                                label="Choose School"
                                emit-value
                                map-options
                                use-input
                                input-debounce="300"
                                :options="filteredSchools"
                                @filter="filterSchoolFn"
                                :error="Errors.educations.schoolId.type[index]"
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
                            </q-select>
                        </div>
                        <div class="col-4">
                            <div class="text-caption text-uppercase q-mb-xs" :class="Errors.educations.courseId.msg ? 'text-negative' : 'text-grey'">{{ Errors.educations.courseId.msg ? Errors.educations.courseId.msg : 'degree' }}</div>
                            <q-select
                                outlined
                                v-model="value.courseId"
                                label="Choose Degree"
                                emit-value
                                map-options
                                use-input
                                input-debounce="300"
                                :options="filteredCourses"
                                @filter="filterCoursesFn"
                                :error="Errors.educations.courseId.type[index]"
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
                            </q-select>
                        </div>
                    </div>
                    <div class="row q-col-gutter-xs q-mb-sm">
                        <div class="col-2">
                            <div class="text-caption text-uppercase q-mb-xs" :class="Errors.educations.startDate.msg ? 'text-negative' : 'text-grey'">{{ Errors.educations.startDate.msg ? Errors.educations.startDate.msg : 'start date (YYYY-MM-DD)' }}</div>
                            <q-input outlined v-model="value.startDate" label="Enter Date">
                                <q-popup-proxy cover transition-show="scale" transition-hide="scale" class="no-shadow custom-border radius-sm" :ref="el => eduStartPopups[index] = el">
                                    <q-date v-model="value.startDate" mask="YYYY-MM-DD" @update:model-value="() => hideEduStartPopup(index)"/>
                                </q-popup-proxy>
                            </q-input>
                        </div>
                        <div class="col-2">
                            <div class="text-caption text-uppercase q-mb-xs" :class="Errors.educations.endDate.msg ? 'text-negative' : 'text-grey'">{{ Errors.educations.endDate.msg ? Errors.educations.endDate.msg : 'end date (YYYY-MM-DD)' }}</div>
                            <q-input outlined v-model="value.endDate" label="Enter Date">
                                <q-popup-proxy cover transition-show="scale" transition-hide="scale" class="no-shadow custom-border radius-sm" :ref="el => eduEndPopups[index] = el">
                                    <q-date v-model="value.endDate" mask="YYYY-MM-DD" @update:model-value="() => hideEduEndPopup(index)"/>
                                </q-popup-proxy>
                            </q-input>
                        </div>
                    </div>
                </div>
            </q-card-section>
            
            <q-card-actions class="q-pa-lg bg">
                <div class="q-gutter-sm">
                    <q-btn unelevated size="md" color="primary" class="btn text-capitalize" label="save" @click="Save()" />
                    <q-btn unelevated size="md" color="primary" class="btn text-capitalize" label="add" @click="AddEducation" outline/>
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

const educations = ref([
    {
        id: '',
        schoollevel: "",
        schoolId: "",
        courseId: "",
        startDate: "",
        endDate: ""
    }
]);

const EmptyEducation = () => ({
    id: '',
    schoollevel: "",
    schoolId: "",
    courseId: "",
    startDate: "",
    endDate: ""
})

const GetEducation = async (id) => {
    SubmitLoading.value = true;
    try {
        const response = await api.get(`/employee/education`, {
            params: { 
                id: id
            }
        });
        !response.data.record.length
            ? [EmptyEducation()]
            : MapEducations(response.data.record)
        
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

const MapEducations = (data = []) => {
    educations.value = data.map(item => ({
        id: item.id ?? '',
        schoollevel: item.school_level ?? '',
        schoolId: Number(item.school_id) ?? '',
        courseId: Number(item.course_id) ?? '',
        startDate: item.start_date ?? '',
        endDate: item.end_date ?? ''
    }))
}

const PopulateData = () => {
    LoadCourses();
    LoadSchools();
    GetEducation(EmployeeStore.data?.id)
}

const Errors = reactive({
    educations: {
        schoollevel: {
            type: [], msg: ''
        },
        schoolId: {
            type: [], msg: ''
        },
        courseId: {
            type: [], msg: ''
        },
        startDate: {
            type: [], msg: ''
        },
        endDate: {
            type: [], msg: ''
        }
    }
});

const initErrors = () => {
    Errors.educations.schoollevel.type = educations.value.map(() => null);
    Errors.educations.schoolId.type = educations.value.map(() => null);
    Errors.educations.courseId.type = educations.value.map(() => null);
    Errors.educations.startDate.type = educations.value.map(() => null);
    Errors.educations.endDate.type = educations.value.map(() => null);
}

const Validations = () => {

    let isError = false;
    
    Errors.educations.schoollevel = { type: null, msg: '' }
    Errors.educations.schoolId = { type: null, msg: '' }
    Errors.educations.courseId = { type: null, msg: '' }
    Errors.educations.startDate = { type: null, msg: '' }
    Errors.educations.endDate = { type: null, msg: '' }

    initErrors()
    
    educations.value.forEach((e, index) => {
        if (!e.schoollevel) {
            Errors.educations.schoollevel.type[index] = true;
            Errors.educations.schoollevel.msg = 'school level is required';
            isError = true;
        }
        if (!e.schoolId) {
            Errors.educations.schoolId.type[index] = true;
            Errors.educations.schoolId.msg = 'school is required';
            isError = true;
        }
        if (!e.courseId) {
            Errors.educations.courseId.type[index] = true;
            Errors.educations.courseId.msg = 'degree is required';
            isError = true;
        }
        if (!e.startDate) {
            Errors.educations.startDate.type[index] = true;
            Errors.educations.startDate.msg = 'start date is required';
            isError = true;
        } else if (isNaN(new Date(e.startDate).getTime())) {
            Errors.educations.startDate.type[index] = true;
            Errors.educations.startDate.msg = 'start date must be a valid date';
            isError = true;
        }
        if (!e.endDate) {
            Errors.educations.endDate.type[index] = true;
            Errors.educations.endDate.msg = 'end date is required';
            isError = true;
        } else if (isNaN(new Date(e.endDate).getTime())) {
            Errors.educations.endDate.type[index] = true;
            Errors.educations.endDate.msg = 'end date must be a valid date';
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

const schoollevels = ref(["High School", "Vocational", "College", "Graduate Studies"]);
const schools = ref([]);
const courses = ref([]);
const filteredSchools = ref([]);
const filteredCourses = ref([]);

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

const normalizeOptions = (data = []) => data.map(d => {
    const baseLabel = d.label ?? d.name ?? String(d.text ?? d.value ?? '')
    // Default
    return {
        label: baseLabel,
        value: Number(d.value ?? d.id)
    }
})

const filterSchoolFn = createFilterFn(schools, filteredSchools);
const filterCoursesFn = createFilterFn(courses, filteredCourses);

const LoadSchools = async () => {
    try {
        const { data } = await api.get(`/employee/option/school`);
        schools.value = normalizeOptions(data)
        filteredSchools.value = [...schools.value]
    } catch (error) {
        console.error("Error fetching options:", error);
    }
};

const LoadCourses = async () => {
    try {
        const { data } = await api.get(`/employee/option/course`);
        courses.value = normalizeOptions(data)
        filteredCourses.value = [...courses.value]
    } catch (error) {
        console.error("Error fetching options:", error);
    }
};

const FormatStartDate = (val, index) => {
    educations.value[index].startDate = FormatToYMD(val)
}
const FormatEndDate = (val, index) => {
      educations.value[index].endDate = FormatToYMD(val)
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

const AddEducation = () => {
    const e = educations.value;
    e.push({
        id: "",
        schoollevel: "",
        schoolId: "",
        courseId: "",
        startDate: "",
        endDate: ""
    });
}

const RemoveEducation = (index) => {
    educations.value.splice(index, 1);
}

const Save = async () => {
    if (!Validations()) return;
    SubmitLoading.value = true;
    try {
        const response = await api.post(`/employee/${EmployeeStore.data?.id}/education`, {
            educations: educations.value
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

const eduStartPopups = ref([]);
const eduEndPopups = ref([]);
function hideEduStartPopup(index) {
  nextTick(() => {
    if (eduStartPopups.value[index]) eduStartPopups.value[index].hide();
  });
}
function hideEduEndPopup(index) {
  nextTick(() => {
    if (eduEndPopups.value[index]) eduEndPopups.value[index].hide();
  });
}
</script>