<template>
    <q-card-section class="col q-pa-lg scroll">
        <div class="q-mb-md">
            <span class="text-subtitle1 text-uppercase text-bold q-mr-md">educational information</span>
        </div>
        <div class="row q-col-gutter-xs q-mb-xs">
            <div class="col-2">
                <div class="q-mb-xs">
                    <span class="text-caption text-uppercase text-grey q-mr-sm">select school level</span>
                </div>
            </div>
            <div class="col-2">
                <div class="q-mb-xs">
                    <span class="text-caption text-uppercase text-grey q-mr-sm">select school</span>
                </div>
            </div>
            <div class="col-2">
                <div class="q-mb-xs">
                    <span class="text-caption text-uppercase text-grey q-mr-sm">select degree</span>
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
                    <span class="text-caption text-uppercase text-grey q-mr-sm">graduated</span>
                </div>
            </div>
            <div class="col-1">
                <div class="q-mb-xs">
                    <span class="text-caption text-uppercase text-grey q-mr-sm">rating</span>
                </div>
            </div>
        </div>
        <div class="row q-col-gutter-xs q-mb-xs" v-for="(value, index) in educations" :key="index">
            <div class="col-2">
                <q-select
                    outlined
                    v-model="value.levelId"
                    option-value="value"
                    option-label="label"
                    virtual-scroll
                    emit-value
                    map-options
                    use-input
                    input-debounce="300"
                    :options="filteredLevels"
                    @filter="filterLevelFn"
                    :error="Errors.educations[index]?.level?.type"
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
                            v-if="Errors.educations[index]?.level?.type"
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
                                <div v-if="Errors.educations[index]?.level?.messages?.length">
                                    <div
                                        v-for="(msg, i) in Errors.educations[index]?.level?.messages"
                                        :key="i"
                                        class="text-capitalize"
                                    >
                                        <q-icon name="error" color="white" size="xs" />&nbsp;{{ msg }}
                                    </div>
                                </div>
                            </q-tooltip>
                        </q-icon>
                    </template>
                </q-select>
            </div>
            <div class="col-2">
                <q-select
                    outlined
                    v-model="value.schoolId"
                    option-value="value"
                    option-label="label"
                    virtual-scroll
                    emit-value
                    map-options
                    use-input
                    input-debounce="300"
                    :options="filteredSchools"
                    @filter="filterSchoolFn"
                    :error="Errors.educations[index]?.school.type"
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
                            v-if="Errors.educations[index]?.school?.type"
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
                                    v-for="(msg, i) in Errors.educations[index]?.school?.messages"
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
                <q-select
                    outlined
                    v-model="value.courseId"
                    option-value="value"
                    option-label="label"
                    virtual-scroll
                    emit-value
                    map-options
                    use-input
                    input-debounce="300"
                    :options="filteredCourses"
                    @filter="filterCoursesFn"
                    :error="Errors.educations[index]?.course.type"
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
                            v-if="Errors.educations[index]?.course?.type"
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
                                    v-for="(msg, i) in Errors.educations[index]?.course?.messages"
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
            <div class="col-1">
                <q-input 
                    v-model="value.startDate" 
                    outlined 
                    :error="Errors.educations[index]?.start.type"
                    :no-error-icon="true"
                    type="date"
                >
                    <template v-slot:append>
                        <q-icon
                            v-if="Errors.educations[index]?.start?.type"
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
                                    v-for="(msg, i) in Errors.educations[index]?.start?.messages"
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
                    :error="Errors.educations[index]?.end.type"
                    :no-error-icon="true"
                    type="date"
                >
                    <template v-slot:append>
                        <q-icon
                            v-if="Errors.educations[index]?.end?.type"
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
                                    v-for="(msg, i) in Errors.educations[index]?.end?.messages"
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
                    v-model="value.graduated" 
                    outlined 
                    :error="Errors.educations[index]?.graduated.type"
                    :no-error-icon="true"
                    type="date"
                >
                    <template v-slot:append>
                        <q-icon
                            v-if="Errors.educations[index]?.graduated?.type"
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
                                    v-for="(msg, i) in Errors.educations[index]?.graduated?.messages"
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
                    v-model="value.rating" 
                    outlined 
                    :error="Errors.educations[index]?.rating.type"
                    :no-error-icon="true"
                >
                    <template v-slot:append>
                        <q-icon
                            v-if="Errors.educations[index]?.rating?.type"
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
                                    v-for="(msg, i) in Errors.educations[index]?.rating?.messages"
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
                    v-if="educations.length > 1" 
                    round 
                    icon="delete" 
                    flat 
                    unelevated 
                    color="grey" 
                    @click="removeEducation(index)" 
                    size="sm"
                    class="q-mt-md"
                />
            </div>
        </div>
    </q-card-section>
    <q-card-actions class="q-pa-lg">
        <div class="q-gutter-sm">
            <q-btn unelevated size="md" color="primary" class="btn text-capitalize" label="save" @click="Save()"/>
            <q-btn unelevated size="md" color="primary" class="btn text-capitalize" label="add" outline @click="addEducation"/>
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

const educations = ref([
    {
        levelId: "",
        schoolId: "",
        courseId: "",
        startDate: "",
        endDate: "",
        graduated: "",
        rating: ""
    }
]);

const Errors = reactive({
    educations: [],
});

const Validations = () => {
    let isError = false;

    // Reset all errors
    Errors.educations = educations.value.map(() => ({
        level:     { type: null, messages: [] },
        school:    { type: null, messages: [] },
        course:    { type: null, messages: [] },
        start:     { type: null, messages: [] },
        end:       { type: null, messages: [] },
        graduated: { type: null, messages: [] },
        rating:    { type: null, messages: [] }
    }));

    // Validate each row
    educations.value.forEach((e, index) => {

        if (!e.levelId) {
            Errors.educations[index].level.type = true;
            Errors.educations[index].level.messages.push('school level is required');
            isError = true;
        }
        if (!e.schoolId) {
            Errors.educations[index].school.type = true;
            Errors.educations[index].school.messages.push('school is required');
            isError = true;
        }
        if (!e.courseId) {
            Errors.educations[index].course.type = true;
            Errors.educations[index].course.messages.push('degree is required');
            isError = true;
        }
        if (!e.startDate) {
            Errors.educations[index].start.type = true;
            Errors.educations[index].start.messages.push('start date is required');
            isError = true;
        }
        if (!e.endDate) {
            Errors.educations[index].end.type = true;
            Errors.educations[index].end.messages.push('end date is required');
            isError = true;
        }
        if (!e.graduated) {
            Errors.educations[index].graduated.type = true;
            Errors.educations[index].graduated.messages.push('year graduated is required');
            isError = true;
        }
        if (!e.rating) {
            Errors.educations[index].rating.type = true;
            Errors.educations[index].rating.messages.push('final rating is required');
            isError = true;
        }
    });

    if (isError) {
        Toast.fire({
            icon: "error",
            html: `
                <div class="text-h6 text-bold text-uppercase">Request Failed</div>
                <div class="text-caption">Please fill in required education fields.</div>
            `
        });
    }

    return !isError;
};


const levels = ref([]);
const schools = ref([]);
const courses = ref([]);

const filteredLevels = ref([]);
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


const filterLevelFn = createFilterFn(levels, filteredLevels);
const filterSchoolFn = createFilterFn(schools, filteredSchools);
const filterCoursesFn = createFilterFn(courses, filteredCourses);

const normalizeOptions = data => data.map(d => ({
    label: d.label ?? d.name ?? d.description ?? String(d.text ?? d.value),
    value: Number(d.value ?? d.id)
}))

const LoadSchoolLevels = async () => {
    try {
        const { data } = await api.get(`/option/schoollevels`);
        levels.value = normalizeOptions(data)
        filteredLevels.value = [...levels.value]
    } catch (error) {
        console.error("Error fetching options:", error);
    }
};

const LoadSchools = async () => {
    try {
        const { data } = await api.get(`/option/schools`);
        schools.value = normalizeOptions(data)
        filteredSchools.value = [...schools.value]
    } catch (error) {
        console.error("Error fetching options:", error);
    }
};

const LoadCourses = async () => {
    try {
        const { data } = await api.get(`/option/courses`);
        courses.value = normalizeOptions(data)
        filteredCourses.value = [...courses.value]
    } catch (error) {
        console.error("Error fetching options:", error);
    }
};

const addEducation = () => {
    const e = educations.value;
    e.unshift({
        levelId: "",
        schoolId: "",
        courseId: "",
        startDate: "",
        endDate: "",
        graduated: "",
        rating: ""
    });
}

const removeEducation = (index) => {
    educations.value.splice(index, 1);
    Errors.educations.splice(index, 1);
}

const LoadEducation = async () => {
    EmployeeStore.loading = true;
    try {
        const { data } = await api.get(`/employee/education/${EmployeeStore.profileId}`);

        const educationsData = Array.isArray(data.data) ? data.data : [data.data]
        if (!educationsData.length || !educationsData[0]) {
            return;
        }
        educations.value = educationsData.map(e => ({
            levelId: Number(e.levelId) || null,
            schoolId: Number(e.schoolId) || null,
            courseId: Number(e.courseId) || null,
            startDate: e.startDate?.slice(0, 10) || '',
            endDate: e.endDate?.slice(0, 10) || '',
            graduated: e.graduated || '',
            rating: e.rating || ''
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
        const response = await api.post(`/employee/education/${EmployeeStore.profileId}`, {
            educations: educations.value
        });
        LoadEducation();
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
    LoadEducation();
});

onBeforeMount(() => {
    LoadCourses();
    LoadSchools();
    LoadSchoolLevels();
});
</script>