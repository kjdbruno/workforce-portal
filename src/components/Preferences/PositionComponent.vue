<template>
    <div>
        <div class="card-grid">
            <div class="card-anim-wrapper">
                <q-card key="data-add" class="card card-hover-animate flex flex-center q-pa-md no-shadow cursor-pointer radius-sm" v-ripple @click="NewDialog()">
                    <q-card-section class="text-center">
                        <q-avatar size="75px" font-size="52px" color="grey" text-color="white" icon="add" />
                    </q-card-section>
                </q-card>
            </div>
            <div class="card-anim-wrapper" :style="{ animationDelay: `120ms` }" v-if="loading">
                <q-card key="data-add" class="card card-hover-animate flex flex-center q-pa-md no-shadow cursor-pointer radius-sm" >
                    <q-card-section class="text-center">
                        <q-spinner-puff size="md"/>
                        <div class="text-caption text-grey text-uppercase q-mt-xs">we're working on it!</div>
                    </q-card-section>
                </q-card>
            </div>
            <div class="card-anim-wrapper" :style="{ animationDelay: `120ms` }" v-else-if="!loading && rows.length === 0">
                <q-card key="data-add" class="card card-hover-animate flex flex-center q-pa-md no-shadow cursor-pointer radius-sm" >
                    <q-card-section class="text-center">
                        <div class="text-caption text-uppercase text-grey">no data found</div>
                    </q-card-section>
                </q-card>
            </div>
            <div v-for="(data, index) in rows" :key="`data-${data.id}`" class="card-anim-wrapper" :style="{ animationDelay: `${index * 120}ms` }"  >
                <q-card @click="ModifyDialog(data)" class="card card-hover-animate flex flex-center q-pa-md no-shadow cursor-pointer radius-sm" v-ripple>
                    <q-card-section class="text-center full-width">
                        <div class="text-subtitle2 text-uppercase">{{ data.name }}</div>
                        <div class="text-caption text-uppercase">{{ formatSalary(data) }}</div>
                    </q-card-section>
                    <q-card-section class="text-center full-width">
                        <div class="text-caption text-grey text-uppercase">{{ data?.status }}</div>
                    </q-card-section>
                    <div class="absolute-top-left q-ma-sm"  style="width: 7px; height: 7px; border-radius: 50%;" :class="data.is_active ? 'bg-positive' : 'bg-negative'" ></div>
                </q-card>
            </div>
        </div>
        <q-dialog v-model="dialog" full-height position="right" persistent square class="dialog">
            <q-card class="dialog-card column full-height">
                <q-card-section class="q-pa-lg">
                    <div class="text-h6 text-uppercase">{{ isEdit ? 'modify position' : 'create new position' }}</div>
                </q-card-section>
                <q-separator inset />
                <q-card-section class="col q-pa-lg scroll">
                    <div class="row q-col-gutter-xs q-mb-md">
                        <div class="col-4">
                            <div class="q-mb-xs">
                                <span class="text-caption text-uppercase" :class="Errors.name.msg ? 'text-negative' : 'text-grey'">{{ Errors.name.msg ? Errors.name.msg : 'position' }}</span>
                            </div>
                            <q-input 
                                v-model="name" 
                                label="Enter Position"
                                outlined 
                                :error="Errors.name.type"
                                :no-error-icon="true"
                                input-class="text-capitalize"
                            />
                        </div>
                    </div>
                    <div class="row q-col-gutter-xs q-mb-md">
                        <div class="col-4">
                            <div class="q-mb-xs">
                                <span class="text-caption text-uppercase" :class="Errors.description.msg ? 'text-negative' : 'text-grey'">{{ Errors.description.msg ? Errors.description.msg : 'job description' }}</span>
                            </div>
                            <q-input 
                                v-model="description" 
                                label="Enter Job Description"
                                outlined 
                                :error="Errors.description.type" 
                                type="textarea"
                                :no-error-icon="true"
                            />
                        </div>
                    </div>
                    <div class="row q-col-gutter-xs q-mb-md">
                        <div class="col-4">
                            <div class="q-mb-xs">
                                <div class="text-caption text-uppercase" :class="Errors.qualifications.name.msg ? 'text-negative' : 'text-grey'">{{ Errors.qualifications.name.msg ? Errors.qualifications.name.msg : 'job qualification' }}</div>
                            </div>
                            <div v-for="(value, index) in qualifications" :key="index" class="q-mb-xs">
                                <q-input
                                    v-model="qualifications[index]"
                                    label="Enter Qualification"
                                    outlined
                                    :error="Errors.qualifications.name.type[index]"
                                    :no-error-icon="true"
                                >
                                    <template v-slot:append>
                                        <q-btn
                                            v-if="qualifications.length > 1"
                                            flat unelevated round icon="block" size="sm"
                                            @click="remove(index)"
                                        />
                                    </template>
                                </q-input>
                            </div>
                        </div>
                    </div>
                    <div class="q-mb-md">
                        <div class="q-mb-xs">
                            <span class="text-caption text-uppercase" :class="Errors.salarytype.msg ? 'text-negative' : 'text-grey'">{{ Errors.salarytype.msg ? Errors.salarytype.msg : 'salary type' }}</span>
                        </div>
                        <div class="q-gutter-sm">
                            <q-radio v-for="value in salarytypes" v-model="salarytype" checked-icon="task_alt" unchecked-icon="panorama_fish_eye" :val="value" :label="value" />
                        </div>
                    </div>
                    <div class="row q-col-gutter-xs q-mb-md">
                        <div class="col-2">
                            <div class="q-mb-xs">
                                <span class="text-caption text-uppercase" :class="Errors.monthly.msg ? 'text-negative' : 'text-grey'">{{ Errors.monthly.msg ? Errors.monthly.msg : 'monthly salary' }}</span>
                            </div>
                            <q-input 
                                v-model="monthly" 
                                label="Enter Amount"
                                outlined 
                                :error="Errors.monthly.type"
                                :no-error-icon="true"
                                input-class="text-capitalize"
                            />
                        </div>
                        <div class="col-2">
                            <div class="q-mb-xs">
                                <span class="text-caption text-uppercase" :class="Errors.daily.msg ? 'text-negative' : 'text-grey'">{{ Errors.daily.msg ? Errors.daily.msg : 'daily salary' }}</span>
                            </div>
                            <q-input 
                                v-model="daily" 
                                label="Enter Amount"
                                outlined 
                                :error="Errors.daily.type"
                                :no-error-icon="true"
                                input-class="text-capitalize"
                            />
                        </div>
                        <div class="col-2">
                            <div class="q-mb-xs">
                                <span class="text-caption text-uppercase" :class="Errors.hourly.msg ? 'text-negative' : 'text-grey'">{{ Errors.hourly.msg ? Errors.hourly.msg : 'hourly salary' }}</span>
                            </div>
                            <q-input 
                                v-model="hourly" 
                                label="Enter Amount"
                                outlined 
                                :error="Errors.hourly.type"
                                :no-error-icon="true"
                                input-class="text-capitalize"
                            />
                        </div>
                    </div>
                </q-card-section>
                
                <q-card-actions class="q-pa-lg bg">
                    <div class="q-gutter-sm">
                        <q-btn v-if="!isEdit || isActive" unelevated size="md" color="primary" class="btn text-capitalize" label="save" @click="Save" />
                        <q-btn v-if="isEdit" unelevated size="md" color="primary" class="btn text-capitalize" :label="isActive ? 'disable' : 'enable'" @click="Toggle"/>
                        <q-btn v-if="!isEdit || isActive" unelevated size="md" color="primary" class="btn text-capitalize" label="add" @click="Add" outline/>
                        <q-btn unelevated size="md" color="primary" class="btn text-capitalize" label="discard" @click="() => { dialog = false; }" outline/>
                    </div>
                </q-card-actions>
                <q-inner-loading :showing="submitLoading">
                    <div class="text-center">
                        <q-spinner-puff size="md"/>
                        <div class="text-caption text-grey text-uppercase q-mt-xs">we're working on it!</div>
                    </div>
                </q-inner-loading>
            </q-card>
        </q-dialog>
        <q-footer class="bg-white no-shadow q-mx-lg q-mb-md q-py-sm radius-xs text-grey">
            <q-toolbar>
                <q-toolbar-title class="text-caption text-uppercase">
                    <div>© 2025 WORKFORCE. All Rights Reserved.</div>
                </q-toolbar-title>
                <q-input outlined dense debounce="1000" v-model="filter" placeholder="Search...">
                    <template v-slot:before>
                        <div class="text-caption text-uppercase">{{ `page ${meta.CurrentPage} of ${meta.TotalPages}` }}</div>
                    </template>
                    <template v-slot:after>
                        <q-btn unelevated size="xs" round color="primary" icon="first_page" :disable="page <= 1" @click="FirstPage">
                            <q-tooltip anchor="top middle" self="top middle" transition-show="scale" transition-hide="scale" class="text-capitalize">First Page</q-tooltip>
                        </q-btn>
                        <q-btn unelevated size="xs" round color="primary" icon="arrow_back" :disable="page <= 1" @click="PreviousPage">
                            <q-tooltip anchor="top middle" self="top middle" transition-show="scale" transition-hide="scale" class="text-capitalize">Previous</q-tooltip>
                        </q-btn>
                        <q-btn unelevated size="xs" round color="primary" icon="arrow_forward" :disable="page >= meta.TotalPages" @click="NextPage">
                            <q-tooltip anchor="top middle" self="top middle" transition-show="scale" transition-hide="scale" class="text-capitalize">Next</q-tooltip>
                        </q-btn>
                        <q-btn unelevated size="xs" round color="primary" icon="last_page" :disable="page >= meta.TotalPages" @click="LastPage">
                            <q-tooltip anchor="top middle" self="top middle" transition-show="scale" transition-hide="scale" class="text-capitalize">Last Page</q-tooltip>
                        </q-btn>
                    </template>
                    <template v-slot:prepend>
                        <q-icon name="search" style="font-size: 1rem;" />
                    </template>
                </q-input>
                <q-inner-loading :showing="loading">
                    <q-spinner-puff size="md" />
                </q-inner-loading>
            </q-toolbar>
        </q-footer>
    </div>
</template>

<script setup>
import { 
    usePreferenceStore 
} from 'src/stores/preference-store';

import { 
    reactive,
    computed,
    onMounted,
    ref, 
    watch,
    nextTick, 
    onBeforeMount
} from 'vue';

import { api } from 'src/boot/axios';

import { Toast } from 'src/boot/sweetalert'; 

const PreferenceStore = usePreferenceStore();

const dialog = ref(false);
const isEdit = ref(false);
const submitLoading = ref(false);

const id = ref('');
const name = ref('');
const monthly = ref('');
const daily = ref('');
const hourly = ref('');
const salarytype = ref('');
const description = ref('');
const qualifications = ref([""]);
const isActive = ref(false);

const Errors = reactive({
    name: { 
        type: null, msg: ''
    },
    monthly: { 
        type: null, msg: ''
    },
    daily: { 
        type: null, msg: ''
    },
    hourly: { 
        type: null, msg: ''
    },
    salarytype: { 
        type: null, msg: ''
    },
    description: {
        type: null, msg: ''
    },
    qualifications: {
        name: {
            type: [], msg: ''
        }
    },
});

const initErrors = () => {
    Errors.qualifications.name.type = qualifications.value.map(() => null);
}

const Validations = () => {
    
    let isError = false;

    Errors.qualifications.name = { type: null, msg: '' }
    
    if (!name.value) {
        Errors.name.type = true
        Errors.name.msg = 'position is required!'
        isError = true
    } else {
        Errors.name.type = null
    }

    if (!monthly.value) {
        Errors.monthly.type = true
        Errors.monthly.msg = 'monthly salary is required!'
        isError = true
    } else {
        Errors.monthly.type = null
    }

    if (!daily.value) {
        Errors.daily.type = true
        Errors.daily.msg = 'daily salary is required!'
        isError = true
    } else {
        Errors.daily.type = null
    }

    if (!hourly.value) {
        Errors.hourly.type = true
        Errors.hourly.msg = 'hourly salary is required!'
        isError = true
    } else {
        Errors.hourly.type = null
    }

    if (!salarytype.value) {
        Errors.salarytype.type = true
        Errors.salarytype.msg = 'salary type is required!'
        isError = true
    } else {
        Errors.salarytype.type = null
    }

    if (!description.value) {
        Errors.description.type = true
        Errors.description.msg = 'job decription is required'
        isError = true
    } else {
        Errors.description.type = null
    }

   initErrors()
    
    qualifications.value.forEach((e, index) => {
        if (!e) {
            Errors.qualifications.name.type[index] = true;
            Errors.qualifications.name.msg = 'qualification is required';
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


const rows = ref([]);

const meta = ref({});
const page = ref(1);
const limit = ref(10);
const loading = ref(false);

const filter = ref('');

const LoadAll = async () => {
    loading.value = true;
    try {
        const { data } = await api.get(`/position`, {
            params: { 
                Page: page.value, 
                Limit: limit.value,
                Filter: filter.value || ''
            }
        });
        rows.value = data.data;
        meta.value = data.meta;
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
        loading.value = false;
    }
}

watch(filter, () => {
    page.value = 1;
    LoadAll();
})

const NextPage = () => {
    if (page.value < meta.value.TotalPages) {
        page.value++
        LoadAll()
    }
}

const PreviousPage = () => {
    if (page.value > 1) {
        page.value--
        LoadAll()
    }
}

const FirstPage = () => {
    if (page.value > 1) {
        page.value = 1
        LoadAll()
    }
}

const LastPage = () => {
    if (page.value < meta.value.TotalPages) {
        page.value = meta.value.TotalPages
        LoadAll()
    }
}

const NewDialog = () => {
    ResetForm();
    dialog.value = true;
    isEdit.value = false;
}

const ModifyDialog = async (data) => {
    ResetForm();
    dialog.value = true;
    isEdit.value = true;
    id.value = data.id;
    name.value = data.name;
    monthly.value = data.monthly_salary;
    daily.value = data.daily_salary;
    hourly.value = data.hourly_salary;
    salarytype.value = data.salary_type;
    description.value = data.description;
    qualifications.value = data.qualification;
    isActive.value = (data.is_active ? true : false);
}

const ResetForm = () => {
    id.value = '';
    name.value = '';
    monthly.value = '';
    daily.value = '';
    hourly.value = '';
    salarytype.value = '';
    description.value = '';
    qualifications.value = [""];
    Errors.name.type = null;
    Errors.monthly.type = null;
    Errors.daily.type = null;
    Errors.hourly.type = null;
    Errors.salarytype.type = null;
    Errors.description.type = null;
}

const Save = async () => {
    if (!Validations()) return;
    submitLoading.value = true;
    try {
        const response = id.value && isEdit
            ? await api.post(`/position/${id.value}/update`, {
                name: name.value,
                monthly: monthly.value,
                daily: daily.value,
                hourly: hourly.value,
                salarytype: salarytype.value,
                description: description.value,
                qualifications: qualifications.value
            })
            : await api.post('/position', {
                name: name.value,
                monthly: monthly.value,
                daily: daily.value,
                hourly: hourly.value,
                salarytype: salarytype.value,
                description: description.value,
                qualifications: qualifications.value
            });
        dialog.value = false;
        if (id.value && isEdit) {
            UpdateList(response.data.data);
        } else {
            LoadAll();
        }
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
        submitLoading.value = false;
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

const UpdateList = (data) => {
    const index = rows.value.findIndex(item => item.id === data.id)
    if (index !== -1) {
        rows.value[index] = data
    }
}

const Toggle = async () => {
    submitLoading.value = true;
    try {
        const response = isActive.value
            ? await api.post(`/position/${id.value}/disable`)
            : await api.post(`/position/${id.value}/enable`)
        dialog.value = false;
        UpdateList(response.data.position)
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
        submitLoading.value = false;
    }
}

const salarytypes = ref(["Monthly", "Daily", "Hourly"]);

const formatSalary = (data, currency = 'PHP') => {
    if (!data) return '';

    let amount = 0;

    switch (data.salary_type) {
        case 'Monthly':
            amount = data.monthly_salary;
            break;
        case 'Daily':
            amount = data.daily_salary;
            break;
        case 'Hourly':
            amount = data.hourly_salary;
            break;
        default:
            return '';
    }

    const salary = new Intl.NumberFormat('en-PH', {
        style: 'currency',
        currency,
        minimumFractionDigits: 2
    }).format(Number(amount));

    return `${salary} | ${data.salary_type}`;
};


const qualificationInputs = ref([]);

const Add = async () => {
    qualifications.value.unshift("");
    await nextTick();
    if (qualificationInputs.value[0]) {
        qualificationInputs.value[0].focus();
    }
}

const remove = (index) => {
    qualifications.value.splice(index, 1);
}

onMounted(() => {
    LoadAll();
})

</script>

<style scoped>

</style>