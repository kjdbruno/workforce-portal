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
            <div class="card-anim-wrapper" :style="{ animationDelay: `120ms` }">
                <q-card key="data-add" class="card card-hover-animate flex flex-center q-pa-md no-shadow cursor-pointer radius-sm" v-ripple @click="() => { Dialog = true; LoadEmployees(); LoadLeaveTypes(); ResetForm(); isEdit = false; }" >
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
            <div v-for="(data, index) in rows" :key="`data-${data.id}`" class="card-anim-wrapper" :style="{ animationDelay: `${index * 120}ms` }" v-else>
                <q-card @click="() => { GetLeave(data.id); LeaveDialog = true; }" class="card card-hover-animate flex flex-center q-pa-md no-shadow cursor-pointer radius-sm">
                    <q-card-section class="text-center full-width">
                        <div class="text-subtitle2 text-uppercase">{{ FormatName(data?.employee) }}</div>
                        <div class="text-caption text-capitalized">{{ data?.status }}</div>
                    </q-card-section>
                    <q-card-section class="text-center full-width q-pa-sm">
                        <div class="text-caption text-capitalized">{{ data?.leaveType?.name }}</div>
                        <div class="text-caption">{{ FormatDateRange(data) }}</div>
                        <div class="text-caption text-grey">{{ FormatDay(data) }}</div>
                    </q-card-section>
                </q-card>
            </div>
        </div>
        <q-dialog v-model="Dialog" full-height position="right" persistent square class="dialog">
            <q-card class="dialog-card column full-height">
                <q-card-section class="q-pa-lg">
                    <div class="text-h6 text-uppercase">{{ isEdit ? 'modify leave application' : 'create new leave application' }}</div>
                </q-card-section>
                <q-separator inset />
                <q-card-section class="col q-pa-lg scroll">
                    <div class="row q-col-gutter-xs q-mb-md">
                        <div class="col-3">
                            <div class="text-caption text-uppercase q-mb-xs" :class="Errors.employeeid.type ? 'text-negative' : 'text-grey'">{{ Errors.employeeid.type ? Errors.employeeid.message : 'employee' }}</div>
                            <q-select 
                                outlined 
                                v-model="employeeid" 
                                emit-value 
                                map-options 
                                use-input 
                                input-debounce="300" 
                                :options="filteredEmployees" 
                                @filter="filterEmployeeFn" 
                                :error="Errors.employeeid.type"
                                dropdown-icon="keyboard_arrow_down"
                                :no-error-icon="true"
                                label="Choose Employee"
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
                        <div class="col-3">
                            <div class="text-caption text-uppercase q-mb-xs" :class="Errors.typeid.type ? 'text-negative' : 'text-grey'">{{ Errors.typeid.type ? Errors.typeid.message : 'leave type' }}</div>
                            <q-select 
                                outlined 
                                v-model="typeid" 
                                emit-value 
                                map-options 
                                use-input 
                                input-debounce="300" 
                                :options="filteredLeaveTypes" 
                                @filter="filterLeaveTypeFn" 
                                :error="Errors.typeid.type"
                                dropdown-icon="keyboard_arrow_down"
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
                        <div class="col-6">
                            <div class="text-caption text-uppercase q-mb-xs" :class="Errors.reason.type ? 'text-negative' : 'text-grey'">{{ Errors.reason.type ? Errors.reason.message : 'reason' }}</div>
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
                    <div class="row q-col-gutter-xs q-mb-md">
                        <div class="col-2">
                            <div class="text-caption text-uppercase q-mb-xs" :class="Errors.datestart.type ? 'text-negative' : 'text-grey'">{{ Errors.datestart.type ? Errors.datestart.message : 'date start' }}</div>
                            <q-input 
                                v-model="datestart" 
                                label="Enter Date"
                                outlined 
                                :error="Errors.datestart.type"
                                :no-error-icon="true"
                                @update:model-value="val => FormatStartDate(val)"
                            />
                        </div>
                        <div class="col-2">
                            <div class="text-caption text-uppercase q-mb-xs" :class="Errors.dateend.type ? 'text-negative' : 'text-grey'">{{ Errors.dateend.type ? Errors.dateend.message : 'date end' }}</div>
                            <q-input 
                                v-model="dateend" 
                                label="Enter Date"
                                outlined 
                                :error="Errors.dateend.type"
                                :no-error-icon="true"
                                @update:model-value="val => FormatEndDate(val)"
                            />
                        </div>
                        <div class="col-1">
                            <div class="text-caption text-uppercase text-grey q-mb-xs">day/s</div>
                            <q-input 
                                v-model="days" 
                                outlined 
                                :no-error-icon="true"
                                :readonly="true"
                            />
                        </div>
                    </div>
                    
                </q-card-section>
                
                <q-card-actions class="q-pa-lg bg">
                    <div class="q-gutter-sm">
                        <q-btn v-if="!isEdit || isActive" unelevated size="md" color="primary" class="btn text-capitalize" label="save" @click="Save" />
                        <q-btn v-if="isEdit" unelevated size="md" color="primary" class="btn text-capitalize" :label="isActive ? 'disable' : 'enable'" @click="Toggle"/>
                        <q-btn unelevated size="md" color="primary" class="btn text-capitalize" label="discard" @click="() => { Dialog = false; }" outline/>
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
        <q-dialog v-model="LeaveDialog" full-height position="right" persistent square class="dialog">
            <q-card class="dialog-card column full-height">
                <q-card-section class="q-pa-lg">
                    <div class="text-h6 text-uppercase">leave application</div>
                </q-card-section>
                <q-separator inset />
                <q-card-section class="col q-pa-lg scroll">
                    <div class="q-mb-md">
                        <div class="text-caption text-uppercase text-grey">employee</div>
                        <div class="text-body1 text-uppercase">{{ FormatName(info?.employee) }}</div>
                    </div>
                    <div class="q-mb-md">
                        <div class="text-caption text-uppercase text-grey">leave type</div>
                        <div class="text-body1 text-uppercase">{{ info?.leaveType?.name }}</div>
                    </div>
                    <div class="q-mb-md">
                        <div class="text-caption text-uppercase text-grey">leave duration</div>
                        <div class="text-body1 text-uppercase">{{ FormatDateRange(info ?? '') }}</div>
                    </div>
                    <div class="q-mb-md">
                        <div class="text-body1 text-uppercase">{{ FormatDay(info ?? '') }}</div>
                    </div>
                    <div class="q-mb-md">
                        <div class="text-caption text-uppercase text-grey">status</div>
                        <div class="text-body1 text-uppercase">{{ info?.status }}</div>
                    </div>
                    <div class="row q-col-gutter-xl q-mb-md q-mt-xl">
                        <div v-for="(dt, index) in info?.approvals">
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
                                        <q-btn unelevated size="md" color="primary" class="full-width text-capitalize" label="proceed" @click="Approve(info?.id)"/>
                                    </q-card-actions>
                                </q-card>
                            </q-menu>
                        </q-btn>
                        <q-btn unelevated size="md" color="primary" class="btn text-capitalize" label="print" @click="Print(info?.id)" />
                        <q-btn unelevated size="md" color="primary" class="btn text-capitalize" label="cancel">
                            <q-menu @before-show="() => {  }" transition-show="jump-up" transition-hide="jump-down" :offset="[0, 15]" class="radius-sm" style="box-shadow: rgba(0, 0, 0, 0.09) 0px 3px 12px;">
                                <q-card class="no-shadow  radius-sm q-pa-lg" style="width: 300px;">
                                    <q-card-section>
                                        <div class="text-h6 text-center text-uppercase">
                                            proceed to approve
                                        </div>
                                    </q-card-section>
                                    <q-card-actions>
                                        <q-btn unelevated size="md" color="primary" class="full-width text-capitalize" label="proceed" @click="Cancel(info?.id)"/>
                                    </q-card-actions>
                                </q-card>
                            </q-menu>
                        </q-btn>
                        <q-btn unelevated size="md" color="primary" class="btn text-capitalize" label="discard" @click="() => { LeaveDialog = false; }" outline/>
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
    </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, onBeforeMount, computed, reactive, watch } from 'vue';
import { api } from 'src/boot/axios';
import { Toast } from 'src/boot/sweetalert'; 
import moment from 'moment';

import { useLeaveStore } from 'src/stores/leave-store';
const LeaveStore = useLeaveStore();

import { useAuthStore } from 'src/stores/auth-store';
const AuthStore = useAuthStore();

const today = new Date();
const month = ref(String(today.getMonth() + 1).padStart(2, '0'));
const year = ref(String(today.getFullYear()));

const months = Array.from({ length: 12 }, (_, i) => {
    const monthName = new Date(0, i).toLocaleString("en-US", { month: "short" });
    const monthValue = String(i + 1).padStart(2, "0");
    return { label: monthName, value: monthValue };
})

const loading = ref(false);

const rows = ref([]);
const meta = ref({});
const page = ref(1);
const limit = ref(10);
const filter = ref('');

const id = ref('');
const employeeid = ref('');
const typeid = ref('');
const datestart = ref('');
const dateend = ref('');
const days = computed(() => {
    if (!datestart.value || !dateend.value) return '';
    const start = moment(datestart.value, "YYYY-MM-DD");
    const end = moment(dateend.value, "YYYY-MM-DD");
    const diff = start.diff(end, 'days') + 1;
    return diff > 0 ? diff : 0;
});
const reason = ref('');
const isactive = ref(false);

const Errors = reactive({
    employeeid: { 
        type: null, message: ''
    },
    typeid: { 
        type: null, message: ''
    },
    datestart: { 
        type: null, message: ''
    },
    dateend: { 
        type: null, message: ''
    },
    reason: { 
        type: null, message: ''
    }
});

const Validations = () => {

    let isError = false;

    if (!employeeid.value) {
        Errors.employeeid.type = true;
        Errors.employeeid.message = ('employee is required!')
        isError = true
    } else {
        Errors.employeeid.type = null
    }
    if (!typeid.value) {
        Errors.typeid.type = true;
        Errors.typeid.message = ('leave type is required!')
        isError = true
    } else {
        Errors.typeid.type = null
    }
    if (!datestart.value) {
        Errors.datestart.type = true;
        Errors.datestart.message = ('date start is required!')
        isError = true
    } else {
        Errors.datestart.type = null
    }
    if (!dateend.value) {
        Errors.dateend.type = true;
        Errors.dateend.message = ('date end is required!')
        isError = true
    } else {
        Errors.dateend.type = null
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

const FormatDateRange = (app) => {
    const from = new Date(app.date_from);
    const to = new Date(app.date_to);

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

    const start = new Date(app.date_from);
    const end = new Date(app.date_to);

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

const FormatSignature = (sign) => {
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

const filterEmployeeFn = createFilterFn(employees, filteredEmployees);
const filterLeaveTypeFn = createFilterFn(leavetypes, filteredLeaveTypes);

const LoadEmployees = async () => {
    try {
        const { data } = await api.get(`/leave/option/employee`);
        employees.value = data.map(d => ({
            label: [ d?.first_name, d?.middle_name, d?.last_name, d?.suffix ].filter(Boolean).join(" "),
            value: Number(d?.id)
        }))
        filteredEmployees.value = [...employees.value]
    } catch (error) {
        console.error("Error fetching options:", error);
    }
};

const LoadLeaveTypes = async () => {
    try {
        const { data } = await api.get(`/leave/option/leavetype`);
        leavetypes.value = data.map(d => ({
            label: d?.name,
            value: Number(d?.id)
        }))
        filteredLeaveTypes.value = [...leavetypes.value]
    } catch (error) {
        console.error("Error fetching options:", error);
    }
};

const FormatStartDate = (val) => {
    datestart.value = FormatToYMD(val)
}
const FormatEndDate = (val) => {
    dateend.value = FormatToYMD(val)
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

const ResetForm = () => {
    id.value = '';
    employeeid.value = '';
    typeid.value = '';
    datestart.value = '';
    dateend.value = '';
    reason.value = '';
    isactive.value = false;
    Errors.employeeid.type = false;
    Errors.typeid.type = false;
    Errors.datestart.type = false;
    Errors.dateend.type = false;
    Errors.reason.type = false;
}

const Dialog = ref(false);
const isEdit = ref(false);
const submitLoading = ref(false);

const Save = async () => {
    if (!Validations()) return;
    submitLoading.value = true;
    try {
        const response = id.value && isEdit
            ? await api.post(`/leave/${id.value}/update`, {
                employeeid: employeeid.value,
                typeid: typeid.value,
                datestart: datestart.value,
                dateend: dateend.value,
                reason: reason.value
            })
            : await api.post('/leave', {
                employeeid: employeeid.value,
                typeid: typeid.value,
                datestart: datestart.value,
                dateend: dateend.value,
                reason: reason.value
            });
        LoadAll();
        Dialog.value = false;
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

const info = ref(null);
const DetailSubmitting = ref(false);
const LeaveDialog = ref(false);

const GetLeave = async (id) => {
    DetailSubmitting.value = true;
    try {
        const response  = await api.get(`/leave/${id}`);
        info.value = response.data.result;
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
    if (!info.value?.approvals || info.value.approvals.length === 0) return false;

    // Sort approvals by setting order
    const sorted = [...info.value.approvals].sort(
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
    const leave = info.value;
    const myRequest = leave.approvals.find(approval =>
    Number(
            approval?.setting?.approver?.employeeAccount?.user_id
        ) === Number(userId)
    );
    const approvalid = myRequest?.id ?? null;

    try {
        const response = await api.post(`/leave/${id}/approve`, {
            approvalid
        });
        LoadAll()
        LeaveDialog.value = false;
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

const Cancel = async (id) => {

    submitLoading.value = true;

    try {

        const response = await api.post(`/leave/${id}/cancel`)
        LoadAll()
        LeaveDialog.value = false;
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
        const res = await api.get(`/leave/${id}/pdf`, {
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

onMounted(() => {
    LoadAll()
})

</script>

<style scoped>

</style>