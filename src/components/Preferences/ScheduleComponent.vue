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
            <div v-for="(data, index) in rows" :key="`data-${data.id}`" class="card-anim-wrapper" :style="{ animationDelay: `${index * 120}ms` }">
                <q-card @click="ModifyDialog(data)" class="card card-hover-animate flex flex-center q-pa-md no-shadow cursor-pointer radius-sm" v-ripple>
                    <q-card-section class="text-center full-width">
                        <div class="text-subtitle2 text-uppercase">{{ data.name }}</div>
                    </q-card-section>
                    <q-card-section class="full-width">
                        <div class="text-caption text-grey">{{ formatTime(data) }}</div>
                    </q-card-section>
                    <div class="absolute-top-left q-ma-sm" style="width: 7px; height: 7px; border-radius: 50%;" :class="data.is_active ? 'bg-positive' : 'bg-negative'"></div>
                </q-card>
            </div>
        </div>
        <q-dialog v-model="dialog" full-height position="right" persistent square class="dialog">
            <q-card class="dialog-card column full-height">
                <q-card-section class="q-pa-lg">
                    <div class="text-h6 text-uppercase">{{ isEdit ? 'modify schedule shift' : 'create new schedule shift' }}</div>
                </q-card-section>
                <q-separator inset />
                <q-card-section class="col q-pa-lg scroll">
                    <div class="row q-col-gutter-xs q-mb-md">
                        <div class="col-3">
                            <div class="q-mb-xs">
                                <span class="text-caption text-uppercase" :class="Errors.name.msg ? 'text-negative' : 'text-grey'">{{ Errors.name.msg ? Errors.name.msg : 'schedule name' }}</span>
                            </div>
                            <q-input 
                                v-model="name" 
                                label="Enter Schedule Name"
                                outlined 
                                :error="Errors.name.type"
                                :no-error-icon="true"
                                class="text-capitalize"
                            />
                        </div>
                        <div class="col-2">
                            <div class="q-mb-xs">
                                <span class="text-caption text-uppercase" :class="Errors.timeStart.msg ? 'text-negative' : 'text-grey'">{{ Errors.timeStart.msg ? Errors.timeStart.msg : 'time start' }}</span>
                            </div>
                            <q-input 
                                v-model="timeStart" 
                                label="HH:MM"
                                outlined
                                :error="Errors.timeStart.type"
                                :no-error-icon="true"
                                @update:model-value="formatTimeStart"
                            />
                        </div>
                        <div class="col-2">
                            <div class="q-mb-xs">
                                <span class="text-caption text-uppercase" :class="Errors.timeEnd.msg ? 'text-negative' : 'text-grey'">{{ Errors.timeEnd.msg ? Errors.timeEnd.msg : 'time end' }}</span>
                            </div>
                            <q-input 
                                v-model="timeEnd" 
                                label="HH:MM"
                                outlined 
                                :error="Errors.timeEnd.type"
                                :no-error-icon="true"
                                @update:model-value="formatTimeEnd"
                            />
                        </div>
                    </div>
                </q-card-section>
                
                <q-card-actions class="q-pa-lg bg">
                    <div class="q-gutter-sm">
                        <q-btn v-if="!isEdit || isActive" unelevated size="md" color="primary" class="btn text-capitalize" label="save" @click="Save" />
                        <q-btn v-if="isEdit" unelevated size="md" color="primary" class="btn text-capitalize" :label="isActive ? 'disable' : 'enable'" @click="Toggle"/>
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
    onBeforeMount
} from 'vue';

import { api } from 'src/boot/axios';

import { Toast } from 'src/boot/sweetalert'; 

import moment from 'moment'

const PreferenceStore = usePreferenceStore();

const dialog = ref(false);
const isEdit = ref(false);
const submitLoading = ref(false);

const id = ref('');
const name = ref('');
const timeStart = ref('');
const timeEnd = ref('');
const isActive = ref(false);

const Errors = reactive({
    name: { 
        type: null, msg: ''
    },
    timeStart: { 
        type: null, msg: ''
    },
    timeEnd: { 
        type: null, msg: ''
    },
});

const Validations = () => {
    
    let isError = false;

    if (!name.value) {
        Errors.name.type = true
        Errors.name.msg = 'schedule name is required'
        isError = true
    } else {
        Errors.name.type = null
    }

    const timeRegex = /^([01]\d|2[0-3]):([0-5]\d)$/;
    if (!timeStart.value) {
        Errors.timeStart.type = true
        Errors.timeStart.msg = 'time start is required'
        isError = true
    } else {
        Errors.timeStart.type = null
    }

    if (!timeEnd.value) {
        Errors.timeEnd.type = true
        Errors.timeEnd.msg = ('time end is required')
        isError = true
    } else {
        Errors.timeEnd.type = null
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


const rows = ref([]);

const meta = ref({});
const page = ref(1);
const limit = ref(10);
const loading = ref(false);

const filter = ref('');

const LoadAll = async () => {
    loading.value = true;
    try {
        const { data } = await api.get(`/schedule`, {
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

const ModifyDialog = (data) => {
    ResetForm();
    dialog.value = true;
    isEdit.value = true;
    id.value = data.id;
    name.value = data.name;
    timeStart.value = data.time_start;
    timeEnd.value =  data.time_end;
    isActive.value = (data.is_active ? true : false);
}

const ResetForm = () => {
    id.value = '';
    name.value = '';
    timeStart.value = '';
    timeEnd.value = '';
    isActive.value = false;
    Errors.name.type = null;
    Errors.timeStart.type = null;
    Errors.timeEnd.type = null;
}

const Save = async () => {
    if (!Validations()) return;
    submitLoading.value = true;
    try {
        const response = id.value && isEdit
            ? await api.post(`/schedule/${id.value}/update`, {
                name: name.value,
                timeStart: timeStart.value,
                timeEnd: timeEnd.value
            })
            : await api.post('/schedule', {
                name: name.value,
                timeStart: timeStart.value,
                timeEnd: timeEnd.value
            });
        dialog.value = false;
        if (id.value && isEdit) {
            UpdateList(response.data.schedule);
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
            ? await api.post(`/schedule/${id.value}/disable`)
            : await api.post(`/schedule/${id.value}/enable`)
        dialog.value = false;
        UpdateList(response.data.schedule)
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

const formatTime = (app) => {
    if (!app?.time_start || !app?.time_end) return ""
    const format = (time24) => {
        const [hours, minutes] = time24.split(":").map(Number)
        const ampm = hours >= 12 ? "PM" : "AM"
        const hours12 = hours % 12 || 12
        return `${hours12}:${minutes.toString().padStart(2, "0")} ${ampm}`
    }
    return `${format(app?.time_start)} to ${format(app?.time_end)}`
}

const formatTimeStart = (value) => {
    if (!value) {
        timeStart.value = ''
        return
    }

    // Must be exactly 4 digits (HHMM)
    if (!/^\d{4}$/.test(value)) return

    const hour = Number(value.slice(0, 2))
    const minute = Number(value.slice(2, 4))

    // 24-hour validation
    if (hour < 0 || hour > 23 || minute < 0 || minute > 59) {
        timeStart.value = ''
        return
    }

    // Convert to 12-hour format
    const suffix = hour >= 12 ? 'PM' : 'AM'
    const hour12 = hour % 12 || 12

    timeStart.value = `${hour12}:${String(minute).padStart(2, '0')} ${suffix}`
}

const formatTimeEnd = (value) => {
    if (!value) {
        timeEnd.value = ''
        return
    }

    // Must be exactly 4 digits (HHMM)
    if (!/^\d{4}$/.test(value)) return

    const hour = Number(value.slice(0, 2))
    const minute = Number(value.slice(2, 4))

    // 24-hour validation
    if (hour < 0 || hour > 23 || minute < 0 || minute > 59) {
        timeEnd.value = ''
        return
    }

    // Convert to 12-hour format
    const suffix = hour >= 12 ? 'PM' : 'AM'
    const hour12 = hour % 12 || 12

    timeEnd.value = `${hour12}:${String(minute).padStart(2, '0')} ${suffix}`
}



onMounted(() => {
    LoadAll();
})

</script>
