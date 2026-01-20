<template>
    <div class="dtr-wrapper">
        <q-card class="no-shadow radius-xs q-mb-md">
            <q-card-section>
                <div class="filter-inline">
                    <q-input
                        outlined
                        v-model="year"
                        style="width: 80px"
                        dense
                    />
                    <div class="q-gutter-xs">
                        <q-btn
                            v-for="(m, index) in months"
                            round
                            unelevated
                            :class="month === m.value ? 'active' : 'inactive'"
                            @click="() => { month = m.value; LoadAll(); }"
                            size="md"
                            :label="m.label"
                        />
                    </div>
                </div>
            </q-card-section>
        </q-card>
        <div class="card-grid">
            <div class="card-anim-wrapper">
                <q-card key="data-add" class="card card-hover-animate flex flex-center q-pa-md no-shadow cursor-pointer radius-sm" v-ripple @click="NewDialog()" >
                    <q-card-section class="text-center">
                        <q-avatar size="75px" font-size="52px" color="grey" text-color="white" icon="add" />
                    </q-card-section>
                </q-card>
            </div>
            <div v-if="rows.length === 0" class="card-anim-wrapper" :style="{ animationDelay: `120ms` }">
                <q-card class="card card-hover-animate flex flex-center q-pa-md no-shadow cursor-pointer radius-sm" tag="label">
                    <q-card-section class="text-center full-width q-pa-sm">
                        <div class="text-caption text-uppercase">no data found</div>
                    </q-card-section>
                </q-card>
            </div>
            <div v-for="(data, index) in rows" :key="`data-${data.id}`" class="card-anim-wrapper" :style="{ animationDelay: `${index * 120}ms` }">
                <q-card @click="() => { employee = data; AttendanceDialog = true; GetAttendance(data.id) }" class="card card-hover-animate flex flex-center q-pa-md no-shadow cursor-pointer radius-sm" v-ripple>
                    <q-card-section class="text-center full-width">
                        <div class="text-subtitle2 text-uppercase">{{ FormatName(data?.employee) }}</div>
                        <div class="text-caption text-capitalized">{{ data?.status }}</div>
                    </q-card-section>
                    <q-card-section class="text-center full-width q-pa-sm">
                        <div class="text-caption">{{ FormatDateRange(data) }}</div>
                        <div class="text-caption text-grey">{{ FormatDay(data) }}</div>
                    </q-card-section>
                </q-card>
            </div>
        </div>
        <q-dialog v-model="dialog" full-height position="right" persistent square class="dialog">
            <q-card class="dialog-card column full-height">
                <q-card-section class="q-pa-lg">
                    <div class="text-h6 text-uppercase">generate attendance</div>
                </q-card-section>
                <q-separator inset />
                <q-card-section class="col q-pa-lg scroll">
                    <div class="row q-col-gutter-xs q-mb-md">
                        <div class="col-2">
                            <div class="text-caption text-uppercase" :class="Errors.dateStart.type ? 'text-negative' : 'text-grey'">{{ Errors.dateStart.type ? Errors.dateStart.message : 'date start (YYYY-MM-DD)' }}</div>
                            <q-input 
                                v-model="dateStart" 
                                label="Enter Date"
                                outlined 
                                :error="Errors.dateStart.type"
                                :no-error-icon="true"
                                @update:model-value="val => FormatStartDate(val)"
                            />
                        </div>
                        <div class="col-2">
                            <div class="text-caption text-uppercase" :class="Errors.dateEnd.type ? 'text-negative' : 'text-grey'">{{ Errors.dateEnd.type ? Errors.dateEnd.message : 'date end (YYYY-MM-DD)' }}</div>
                            <q-input 
                                v-model="dateEnd" 
                                label="Enter Date"
                                outlined 
                                :error="Errors.dateEnd.type"
                                :no-error-icon="true"
                                @update:model-value="val => FormatEndDate(val)"
                            />
                        </div>
                    </div>
                </q-card-section>
                
                <q-card-actions class="q-pa-lg bg">
                    <div class="q-gutter-sm">
                        <q-btn v-if="!isEdit || isActive" unelevated size="md" color="primary" class="btn text-capitalize" label="save" @click="Save" />
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
        <q-dialog v-model="AttendanceDialog" full-height position="right" persistent square class="dialog">
            <q-card class="dialog-card column full-height">
                <q-card-section class="q-pa-lg">
                    <div class="text-h6 text-uppercase">daily time records</div>
                </q-card-section>
                <q-separator inset />
                <q-card-section class="col q-pa-lg scroll">
                    <div class="q-mb-md">
                        <div class="text-caption text-uppercase text-grey">employee</div>
                        <div class="text-body1 text-uppercase">{{ FormatName(employee?.employee) }}</div>
                    </div>
                    <div class="q-mb-sm">
                        <span class="text-subtitle1 text-uppercase text-bold q-mr-md">daily time record</span>
                    </div>
                    <div class="row q-col-gutter-xs">
                        <div class="col-1">
                            <div class="q-mb-xs">
                                <span class="text-caption text-uppercase text-grey q-mr-sm">date</span>
                            </div>
                        </div>
                        <div class="col-1">
                            <div class="q-mb-xs">
                                <span class="text-caption text-uppercase text-grey q-mr-sm">day</span>
                            </div>
                        </div>
                        <div class="col-1">
                            <div class="q-mb-xs">
                                <span class="text-caption text-uppercase text-grey q-mr-sm">records</span>
                            </div>
                        </div>
                    </div>
                    <div class="q-mb-xl">
                        <div class="row q-col-gutter-xs q-mb-xs" v-for="(data, index) in attendances.results">
                            <div class="col-1">
                                <q-input outlined dense :model-value="FormatAttendanceDate(data.date)" />
                            </div>
                            <div class="col-1">
                                <q-input outlined dense :model-value="FormatAttendanceDay(data.date)" />
                            </div>
                            <div class="col-10">
                                <div class="row items-center q-gutter-xs">
                                    <q-input v-for="(time, index) in data.times" outlined dense v-model="data.times[index]" style="width: 100px;"/>
                                    <q-badge v-if="data.leaveType" rounded color="primary" :label="data.leaveType" />
                                    <q-badge v-if="data.holiday" rounded color="primary" :label="data.holiday" />
                                    <q-badge v-if="data.overtimes" rounded color="primary" :label="data.overtimes" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row q-col-gutter-xl q-mb-md q-mt-xl">
                        <div v-for="(dt, index) in attendances.approvals">
                            <div class="text-caption text-uppercase text-grey">{{ dt?.status == 'Pending' ? 'unsigned' : 'signed' }}</div>
                            <div v-if="dt?.status == 'Approved'">
                                <img :src="FormatSignature(dt?.setting)" width="150"/>
                            </div>
                            <div class="text-h6 text-uppercase">{{ FormatName(dt?.setting?.approver?.employeeAccount?.employee) }}</div>
                        </div>
                    </div>
                </q-card-section>
                
                <q-card-actions class="q-pa-lg bg">
                    <div class="q-gutter-sm">
                        <q-btn v-if="canApprove" unelevated size="md" color="primary" class="btn text-capitalize" label="approve">
                            <q-menu @before-show="() => {  }" transition-show="jump-up" transition-hide="jump-down" :offset="[0, 15]" class="radius-sm" style="box-shadow: rgba(0, 0, 0, 0.09) 0px 3px 12px;">
                                <q-card class="no-shadow  radius-sm q-pa-lg" style="width: 300px;">
                                    <q-card-section>
                                        <div class="text-h6 text-center text-uppercase">
                                            proceed to approve
                                        </div>
                                    </q-card-section>
                                    <q-card-actions>
                                        <q-btn unelevated size="md" color="primary" class="full-width text-capitalize" label="proceed" @click="Approve(attendances?.id)"/>
                                    </q-card-actions>
                                </q-card>
                            </q-menu>
                        </q-btn>
                        <q-btn unelevated size="md" color="primary" class="btn text-capitalize" label="print" @click="Print(attendances?.id)" />
                        <!-- <q-btn v-if="info.isActive" unelevated size="md" color="primary" class="btn text-capitalize" label="cancel" @click="Cancel(info.id)"/> -->
                        <q-btn unelevated size="md" color="primary" class="btn text-capitalize" label="discard" @click="() => { AttendanceDialog = false; }" outline/>
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

const AuthStore = useAuthStore();

const PreferenceStore = usePreferenceStore();

const dialog = ref(false);
const isEdit = ref(false);
const submitLoading = ref(false);

const today = new Date();
const month = ref(String(today.getMonth() + 1).padStart(2, '0'));
const year = ref(String(today.getFullYear()));

const id = ref('');
const dateStart = ref('');
const dateEnd = ref('');
const description = ref('');

const isActive = ref(false);

const Errors = reactive({
    dateStart: { 
        type: null, message: ''
    },
    dateEnd: { 
        type: null, message: ''
    },
    description: { 
        type: null, message: ''
    }
});

const Validations = () => {

    let isError = false;
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
        const { data } = await api.get(`/attendance`, {
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
    dateStart.value = '';
    dateEnd.value = '';
    isActive.value = false;
    Errors.dateStart.type = false;
    Errors.dateEnd.type = false;
}

const Save = async () => {
    if (!Validations()) return;
    submitLoading.value = true;
    try {
        const response = await api.post('/attendance', {
                dateStart: dateStart.value,
                dateEnd: dateEnd.value,
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
    if (!attendances.value.approvals || attendances.value.approvals.length === 0) return false;

    // Sort approvals by setting order
    const sorted = [...attendances.value.approvals].sort(
        (a, b) => a.setting.order - b.setting.order
    );

    // Find the first pending approval
    const nextPending = sorted.find(req => req.status === 'Pending');
    if (!nextPending) return false;

    // Check if the current user is the approver of the next pending approval
    return nextPending.setting?.approver?.id === AuthStore.user?.id;
});

const Approve = async (id) => {
    submitLoading.value = true;
    const userId = Number(AuthStore.user.id);
    const attendance = attendances.value;
    const myRequest = attendance.approvals.find(a =>
        Number(
                a.setting?.approver?.employeeAccount?.user_id
            ) === Number(userId)
        );
    const approvalid = myRequest?.id ?? null;

    try {
        const response = await api.post(`/attendance/${id}/approve`, {
            approvalid
        });
        LoadAll()
        AttendanceDialog.value = false;
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
        const res = await api.get(`/attendance/${id}/pdf`, {
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

const FormatStartDate = (val) => {
    dateStart.value = FormatToYMD(val)
}
const FormatEndDate = (val) => {
    dateEnd.value = FormatToYMD(val)
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

const FormatDateRange = (app) => {
    const from = new Date(app.date_start);
    const to = new Date(app.date_end);

    const options = { month: 'short', day: 'numeric' };
    const year = from.getFullYear();

    const fromText = from.toLocaleDateString('en-US', options);
    const toText = to.toLocaleDateString('en-US', options);

    // Same month
    if (from.getMonth() === to.getMonth()) {
        return `${fromText}–${to.getDate()}, ${year}`;
    }

    return `${fromText} – ${toText}, ${year}`;
};

const FormatDay = (app) => {
    let count = 0;

    const start = new Date(app.date_start);
    const end = new Date(app.date_end);

    start.setHours(0, 0, 0, 0);
    end.setHours(0, 0, 0, 0);

    for (let d = new Date(start); d <= end; d.setDate(d.getDate() + 1)) {
        const day = d.getDay(); // 0 = Sunday, 6 = Saturday

        if (day !== 0 && day !== 6) {
        count++;
        }
    }

    // 👇 format label
    return `${count} ${count === 1 ? 'day' : 'days'}`;
};

const FormatName = (profile) => {
    if (!profile) return '';
    const firstname = profile.first_name || '';
    const middlename = profile.middle_name
        ? profile.middle_name.charAt(0).toUpperCase() + '.'
        : '';
    const lastname = profile.last_name || '';
    const suffix = profile.suffix ? ` ${profile.suffix}` : '';
    return `${firstname} ${middlename} ${lastname}${suffix}`.trim();
}

const FormatAttendanceDate = (date) => {
    if (!date) return ''
    return moment(date).format('DD')
}

const FormatAttendanceDay = (date) => {
    if (!date) return ''
    return moment(date).format('dddd')
}

const FormatSignature = (sign) => {
    return `${process.env.VUE_APP_BACKEND_URL}${sign.signature}`
}

const AttendanceDialog = ref(false);
const employee = ref(null);
const attendances = ref([]);

const GetAttendance = async (id) => {
    submitLoading.value = true;
    try {
        const response = await api.get(`/attendance/${id}`);
        attendances.value = (response.data)
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
        submitLoading.value = false;
    }
}

onMounted(() => {
    LoadAll();
})

</script>

<style scoped>
    
</style>