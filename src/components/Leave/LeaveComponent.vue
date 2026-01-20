<template>
    <div>
        <q-card class="no-shadow radius-xs q-mb-md">
            <q-card-section>
                <div class="filter-inline">
                    <q-input
                        outlined
                        v-model="year"
                        style="width: 80px"
                        dense
                    />
                    <div class="month-wrapper">
                        <label
                            v-for="m in months"
                            :key="m.value"
                            class="month-circle"
                            :class="{ active: month === m.value }"
                        >
                            <input
                                type="radio"
                                name="month"
                                :value="m.value"
                                v-model="month"
                                hidden
                                @update:model-value="LoadAll()"
                            />
                            <span class="month-label">{{ m.label }}</span>
                        </label>
                    </div>
                </div>
            </q-card-section>
        </q-card>
        <div class="card-grid">
            <div class="card-anim-wrapper">
                <q-card
                    key="data-add"
                    class="card card-hover-animate flex flex-center q-pa-md no-shadow cursor-pointer radius-sm"
                    v-ripple
                    @click="NewDialog()"
                >
                    <q-card-section class="text-center">
                        <q-avatar size="75px" font-size="52px" color="grey" text-color="white" icon="add" />
                    </q-card-section>
                </q-card>
            </div>
            <div
                v-if="rows.length === 0"
                class="card-anim-wrapper"
                :style="{ animationDelay: `120ms` }"
            >
                <q-card 
                    class="card card-hover-animate flex flex-center q-pa-md no-shadow cursor-pointer radius-sm" 
                    tag="label"
                >
                    <q-card-section class="text-center full-width q-pa-sm">
                        <div class="text-caption text-uppercase">no data found</div>
                    </q-card-section>
                </q-card>
            </div>
            <div
                v-for="(data, index) in rows"
                :key="`data-${data.id}`"
                class="card-anim-wrapper"
                :style="{ animationDelay: `${index * 120}ms` }"
            >
                <q-card
                    @click="DetailDialog(data)"
                    class="card card-hover-animate flex flex-center q-pa-md no-shadow cursor-pointer radius-sm"
                    v-ripple
                    >
                    <q-card-section class="text-center full-width">
                        <div class="text-subtitle2 text-uppercase">{{ formatName(data?.profileLeave?.profile) }}</div>
                        <div class="text-caption text-capitalized">{{ data?.status }}</div>
                    </q-card-section>
                    <q-card-section class="text-center full-width q-pa-sm">
                        <div class="text-caption text-capitalized">{{ data?.profileLeave?.leaveType?.name }}</div>
                        <div class="text-caption">{{ formatDate(data?.dateStart) }} to {{ formatDate(data?.dateEnd) }}</div>
                        <div class="text-caption text-grey">{{ formatDateRange(data?.dateStart, data?.dateEnd) }}</div>
                    </q-card-section>
                    <div
                        class="absolute-top-left q-ma-sm"
                        style="width: 7px; height: 7px; border-radius: 50%;"
                        :class="data.isActive ? 'bg-positive' : 'bg-negative'"
                    ></div>
                </q-card>
            </div>
        </div>
        <q-dialog v-model="dialog" full-height position="right" persistent square class="dialog">
            <q-card class="dialog-card column full-height">
                <q-card-section class="q-pa-lg">
                    <div class="text-h6 text-uppercase">{{ isEdit ? 'modify leave application' : 'create new leave application' }}</div>
                </q-card-section>
                <q-separator inset />
                <q-card-section class="col q-pa-lg scroll">
                    <div class="row q-col-gutter-xs q-mb-md">
                        <div class="col-3">
                            <div class="q-mb-xs">
                                <span class="text-caption text-uppercase" :class="Errors.profileId.type ? 'text-negative' : 'text-grey'">{{ Errors.profileId.type ? Errors.profileId.message : 'employee' }}</span>
                            </div>
                            <q-select 
                                outlined 
                                v-model="profileId" 
                                emit-value 
                                map-options 
                                use-input 
                                input-debounce="300" 
                                :options="filteredEmployees" 
                                @filter="filterEmployeeFn" 
                                :error="Errors.profileId.type"
                                hide-dropdown-icon
                                :no-error-icon="true"
                                label="Choose Employee"
                                @update:model-value="() => { LoadProfileLeaves(); }"
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
                                            <q-item-label caption>ID No.: {{ scope.opt.idNo }}</q-item-label>
                                            <q-item-label>{{ $CapitalizeWords(scope.opt.label) }}</q-item-label>
                                        </q-item-section>
                                    </q-item>
                                </template>
                            </q-select>
                        </div>
                    </div>
                    <div class="row q-col-gutter-xs q-mb-md">
                        <div class="col-3">
                            <div class="q-mb-xs">
                                <span class="text-caption text-uppercase" :class="Errors.typeId.type ? 'text-negative' : 'text-grey'">{{ Errors.typeId.type ? Errors.typeId.message : 'leave type' }}</span>
                            </div>
                            <q-select 
                                outlined 
                                v-model="typeId" 
                                emit-value 
                                map-options 
                                use-input 
                                input-debounce="300" 
                                :options="filteredLeaveTypes" 
                                @filter="filterLeaveTypeFn" 
                                :error="Errors.typeId.type"
                                hide-dropdown-icon
                                :no-error-icon="true"
                                label="Choose Leave Type"
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
                    <div class="row q-col-gutter-xs q-mb-md">
                        <div class="col-2">
                            <div class="q-mb-xs">
                                <span class="text-caption text-uppercase" :class="Errors.dateStart.type ? 'text-negative' : 'text-grey'">{{ Errors.dateStart.type ? Errors.dateStart.message : 'date start' }}</span>
                            </div>
                            <q-input 
                                v-model="dateEnd" 
                                outlined 
                                :error="Errors.dateEnd.type"
                                :no-error-icon="true"
                                type="date"
                            />
                        </div>
                        <div class="col-2">
                            <div class="q-mb-xs">
                                <span class="text-caption text-uppercase" :class="Errors.dateEnd.type ? 'text-negative' : 'text-grey'">{{ Errors.dateEnd.type ? Errors.dateEnd.message : 'date end' }}</span>
                            </div>
                            <q-input 
                                v-model="dateStart" 
                                outlined 
                                :error="Errors.dateStart.type"
                                :no-error-icon="true"
                                type="date"
                            />
                        </div>
                        <div class="col-1">
                            <div class="q-mb-xs">
                                <span class="text-caption text-uppercase text-grey q-mr-sm">day/s</span>
                            </div>
                            <q-input 
                                v-model="days" 
                                outlined 
                                :no-error-icon="true"
                                :readonly="true"
                            />
                        </div>
                    </div>
                    <div class="row q-col-gutter-xs q-mb-md">
                        <div class="col-6">
                            <div class="q-mb-xs">
                                <span class="text-caption text-uppercase" :class="Errors.reason.type ? 'text-negative' : 'text-grey'">{{ Errors.reason.type ? Errors.reason.message : 'reason' }}</span>
                            </div>
                            <q-input 
                                v-model="reason" 
                                outlined 
                                type="textarea" 
                                :error="Errors.reason.type"
                                :no-error-icon="true"
                                label="Enter Reason"
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
        <q-dialog v-model="leaveDialog" full-height position="right" persistent square class="dialog">
            <q-card class="dialog-card column full-height">
                <q-card-section class="q-pa-lg">
                    <div class="text-h6 text-uppercase">leave application</div>
                </q-card-section>
                <q-separator inset />
                <q-card-section class="col q-pa-lg scroll">
                    <div class="q-mb-md">
                        <div class="text-caption text-uppercase text-grey">employee</div>
                        <div class="text-body1 text-uppercase">{{ formatName(info?.profileLeave?.profile) }}</div>
                    </div>
                    <div class="q-mb-md">
                        <div class="text-caption text-uppercase text-grey">leave type</div>
                        <div class="text-body1 text-uppercase">{{ info?.profileLeave?.leaveType?.name }}</div>
                    </div>
                    <div class="q-mb-md">
                        <div class="text-caption text-uppercase text-grey">leave duration</div>
                        <div class="text-body1 text-uppercase">{{ formatDate(info?.dateStart) }} to {{ formatDate(info?.dateEnd) }}</div>
                    </div>
                    <div class="q-mb-md">
                        <div class="text-caption text-uppercase text-grey">day/s</div>
                        <div class="text-body1 text-uppercase">{{ formatDateRange(info?.dateStart, info?.dateEnd) }}</div>
                    </div>
                    <div class="q-mb-md">
                        <div class="text-caption text-uppercase text-grey">status</div>
                        <div class="text-body1 text-uppercase">{{ info?.status }}</div>
                    </div>
                    <div class="row q-col-gutter-xl q-mb-md q-mt-xl">
                        <div v-for="(dt, index) in info?.requests">
                            <div class="text-caption text-uppercase text-grey">{{ dt?.status == 'Pending' ? 'unsigned' : 'signed' }}</div>
                            <div v-if="dt?.status == 'Approved'">
                                <img :src="formatSignature(dt?.signatory)" width="150"/>
                            </div>
                            <div class="text-h6 text-uppercase">{{ formatName(dt?.signatory?.user?.profile) }}</div>
                        </div>
                    </div>
                </q-card-section>
                
                <q-card-actions class="q-pa-lg bg">
                    <div class="q-gutter-sm">
                        <q-btn v-if="info.isActive && canApprove" unelevated size="md" color="primary" class="btn text-capitalize" label="approve" @click="Approve(info.id)" />
                        <q-btn v-if="info.isActive && info.status === 'Approved'" unelevated size="md" color="primary" class="btn text-capitalize" label="print" @click="Print(info.id)" />
                        <q-btn v-if="info.isActive" unelevated size="md" color="primary" class="btn text-capitalize" label="cancel" @click="Cancel(info.id)"/>
                        <q-btn unelevated size="md" color="primary" class="btn text-capitalize" label="discard" @click="() => { leaveDialog = false; }" outline/>
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

import moment from 'moment';

import { 
    useAuthStore 
} from 'src/stores/auth-store';

const authStore = useAuthStore();

const PreferenceStore = usePreferenceStore();

const dialog = ref(false);
const isEdit = ref(false);
const submitLoading = ref(false);

const today = new Date();
const month = ref(String(today.getMonth() + 1).padStart(2, '0'));
const year = ref(String(today.getFullYear()));

const id = ref('');
const profileId = ref('');
const typeId = ref('');
const dateStart = ref('');
const dateEnd = ref('');
const days = computed(() => {
    if (!dateStart.value || !dateEnd.value) return '';
    const start = moment(dateStart.value, "YYYY-MM-DD");
    const end = moment(dateEnd.value, "YYYY-MM-DD");
    const diff = start.diff(end, 'days') + 1;
    return diff > 0 ? diff : 0;
});
const reason = ref('');

const isActive = ref(false);

const Errors = reactive({
    profileId: { 
        type: null, message: ''
    },
    typeId: { 
        type: null, message: ''
    },
    dateStart: { 
        type: null, message: ''
    },
    dateEnd: { 
        type: null, message: ''
    },
    reason: { 
        type: null, message: ''
    }
});

const Validations = () => {

    let isError = false;

    if (!profileId.value) {
        Errors.profileId.type = true;
        Errors.profileId.message = ('employee is required!')
        isError = true
    } else {
        Errors.profileId.type = null
    }
    if (!typeId.value) {
        Errors.typeId.type = true;
        Errors.typeId.message = ('leave type is required!')
        isError = true
    } else {
        Errors.typeId.type = null
    }
    if (!dateStart.value) {
        Errors.dateStart.type = true;
        Errors.dateStart.message = ('date start is required!')
        isError = true
    } else {
        Errors.dateStart.type = null
    }
    if (!dateEnd.value) {
        Errors.dateEnd.type = true;
        Errors.dateEnd.message = ('date end is required!')
        isError = true
    } else {
        Errors.dateEnd.type = null
    }
    if (!reason.value) {
        Errors.reason.type = true;
        Errors.reason.message = ('reason is required!')
        isError = true
    } else {
        Errors.reason.type = null
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
        const { data } = await api.get(`/leave`, {
            params: { 
                Page: page.value, 
                Limit: limit.value,
                Filter: filter.value || '',
                month: month.value,
                year: year.value
            }
        });
        rows.value = data.data;
        meta.value = data.meta;

        if (!rows.value.length) {
            Toast.fire({
                icon: "info",
                html: `
                <div class="text-h6 text-bold text-uppercase">Notice</div>
                <div class="text-caption text-capitalize;">No records found!</div>
                `
            });
        }
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

const ResetForm = () => {
    id.value = '';
    profileId.value = '';
    typeId.value = '';
    dateStart.value = '';
    dateEnd.value = '';
    reason.value = '';
    isActive.value = false;
    Errors.profileId.type = false;
    Errors.typeId.type = false;
    Errors.dateStart.type = false;
    Errors.dateEnd.type = false;
    Errors.reason.type = false;
}

const Save = async () => {
    if (!Validations()) return;
    submitLoading.value = true;
    try {
        const response = await api.post('/leave', {
                profileId: profileId.value,
                typeId: typeId.value,
                dateStart: dateStart.value,
                dateEnd: dateEnd.value,
                reason: reason.value
            });
        LoadAll();
        dialog.value = false;
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

const leaveDialog = ref(false);
const DetailSubmitting = ref(false);
const info = ref({});

const DetailDialog = (data) => {
    leaveDialog.value = true;
    info.value = data;
    LoadDetails(data.id);
}

const LoadDetails = async (id) => {
    DetailSubmitting.value = true;
    try {
        const response  = await api.get(`/leave/${id}/details`);
        info.value = response.data.data
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
        DetailSubmitting.value = false;
    }
}

const canApprove = computed(() => {
    if (!info.value?.requests || info.value.requests.length === 0) return false;

    // Sort signatories by order
    const sorted = [...info.value.requests].sort(
        (a, b) => a.signatory.order - b.signatory.order
    );

    // Find the first pending request
    const nextPending = sorted.find(req => req.status === 'Pending');
    if (!nextPending) return false;

    // Check if the current user matches the next pending signatory
    return nextPending.signatory.userId === authStore.user?.id;
});

const Approve = async (id) => {
    submitLoading.value = true;
    // Get the current user ID from authStore
    const userId = Number(authStore.user.id);
    const leave = info.value;
    // Safely find the matching request
    const myRequest = leave.requests.find(
        req => Number(req.signatory?.userId) === userId
        );

    // Get the signatoryId if the request exists
    const signatoryId = myRequest?.signatoryId ?? null;

    try {
        const response = await api.post(`/leave/${id}/${signatoryId}/approve`);
        UpdateList(response.data.leave);
        leaveDialog.value = false;
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

const printDialog = ref(false);
const pdf = ref(null);

const Print = async (id) => {
    submitLoading.value = true;
    try {
        const res = await api.get(`/employee/leave/application/${id}/pdf`, {
            responseType: 'arraybuffer',
        })
        const blob = new Blob([res.data], { type: 'application/pdf' });
        const pdfurl = window.URL.createObjectURL(blob) + "#view=FitW";
        pdf.value = pdfurl
        printDialog.value = true;
        submitLoading.value = false;
    } catch (error) {
        submitLoading.value = false;
        console.error("Error generating PDF:", error);
    }
}

const Cancel = async (id) => {

    submitLoading.value = true;

    try {

        const response = await api.post(`/leave/${id}/cancel`)
        UpdateList(response.data.leave)
        leaveDialog.value = false;
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

const months = Array.from({ length: 12 }, (_, i) => {
    const monthName = new Date(0, i).toLocaleString("en-US", { month: "short" });
    const monthValue = String(i + 1).padStart(2, "0");
    return { label: monthName, value: monthValue };
})

const formatName = (profile) => {
    if (!profile) return '';
    const firstname = profile.firstname || '';
    const middlename = profile.middlename
        ? profile.middlename.charAt(0).toUpperCase() + '.'
        : '';
    const lastname = profile.lastname || '';
    const suffix = profile.suffix ? ` ${profile.suffix}` : '';
    return `${firstname} ${middlename} ${lastname}${suffix}`.trim();
}

const formatDate = (date) => {
    if (!date) return ''
    return moment(date).format('MM-DD-YY')
}

const formatDateRange = (dateFrom, dateTo) => {
    if (!dateFrom && !dateTo) return ''
    const days = moment(dateTo).diff(moment(dateFrom), "days") + 1;
    return days === 1 ? `${days} day` : `${days} days`;
};

const formatSignature = (sign) => {
    return `${process.env.VUE_APP_BACKEND_URL}${sign.signature}`
}

const employees = ref([]);
const leavetypes = ref([]);

const filteredEmployees = ref([]);
const filteredLeaveTypes = ref([]);

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

// const normalizeOptions = data => data.map(d => ({
//     label: [ d?.firstname, d?.middlename, d?.lastname, d?.suffix ].filter(Boolean).join(" "),
//     value: Number(d?.id),
//     idNo: d?.employment?.employeeNo
// }))

const filterEmployeeFn = createFilterFn(employees, filteredEmployees);
const filterLeaveTypeFn = createFilterFn(leavetypes, filteredLeaveTypes);

const LoadEmployees = async () => {
    try {
        const { data } = await api.get(`/leave/option/employee`);
        employees.value = data.map(d => ({
            label: [ d?.firstname, d?.middlename, d?.lastname, d?.suffix ].filter(Boolean).join(" "),
            value: Number(d?.id),
            idNo: d?.employment?.employeeNo
        }))
        filteredEmployees.value = [...employees.value]
    } catch (error) {
        console.error("Error fetching options:", error);
    }
};

const LoadProfileLeaves = async () => {
    try {
        const { data } = await api.get(`/leave/option/leavetype`, {
            params: {
                profileId: profileId.value || null
            }
        });
        leavetypes.value = data.map(d => ({
            label: d?.name,
            value: Number(d?.id)
        }))
        filteredLeaveTypes.value = [...leavetypes.value]
    } catch (error) {
        console.error("Error fetching options:", error);
    }
};

onBeforeMount(() => {
    LoadEmployees();
})

onMounted(() => {
    LoadAll();
})

</script>

<style scoped>

</style>