<template>
    <div>
        <div class="q-my-md">
            <div class="filter-inline q-mb-md">
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
                        @click="() => { month = m.value; GetAllAttendance(DTRStore.employee?.id); }"
                        size="md"
                        :label="m.label"
                    />
                </div>
            </div>
        </div>
        <div class="card-grid">
            <div class="inner-card-anim-wrapper" :style="{ animationDelay: `120ms` }" v-if="!DTRStore.SubmitLoading && rows.length === 0">
                <q-card key="data-add" class="card card-menu card-hover-animate flex column justify-center items-center no-shadow cursor-pointer radius-sm no-shadow" >
                    <q-card-section class="text-center">
                        <div class="text-caption text-uppercase text-grey">no data found</div>
                    </q-card-section>
                </q-card>
            </div>
            <div v-for="(app, index) in rows" :key="`data-${app.id}`" class="inner-card-anim-wrapper" :style="{ animationDelay: `${index * 120}ms` }" >
                <q-card @click="() => { DTRStore.data = app; DTRDialog = true; GetAttendance(app.id) }" class="card card-menu card-hover-animate flex column justify-center items-center no-shadow cursor-pointer radius-sm" v-ripple>
                    <q-card-section>
                        <div class="text-subtitle2 text-uppercase">{{ (app?.control_no) }}</div>
                        <div class="text-caption text-capitalized">{{ app?.status }}</div>
                    </q-card-section>
                    <q-card-section>
                        <div class="text-caption">{{ FormatDateRange(app) }}</div>
                        <div class="text-caption text-grey">{{ FormatDay(app) }}</div>
                    </q-card-section>
                </q-card>
            </div>
        </div>
        <q-dialog v-model="DTRDialog" class="radius-lg dialog" position="right" full-height>
            <q-card class="dialog-card column full-height" square>
                <q-card-section class="q-pa-lg">
                    <div class="text-h6 text-uppercase">daily time records</div>
                </q-card-section>
                <q-separator inset />
                <q-card-section class="col q-pa-lg scroll">
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
                                <span class="text-caption text-uppercase text-grey q-mr-sm">time in</span>
                            </div>
                        </div>
                        <div class="col-1">
                            <div class="q-mb-xs">
                                <span class="text-caption text-uppercase text-grey q-mr-sm">time out</span>
                            </div>
                        </div>
                        <div class="col-1">
                            <div class="q-mb-xs">
                                <span class="text-caption text-uppercase text-grey q-mr-sm">late</span>
                            </div>
                        </div>
                        <div class="col-1">
                            <div class="q-mb-xs">
                                <span class="text-caption text-uppercase text-grey q-mr-sm">undertime</span>
                            </div>
                        </div>
                        <div class="col-1">
                            <div class="q-mb-xs">
                                <span class="text-caption text-uppercase text-grey q-mr-sm">overtime</span>
                            </div>
                        </div>
                    </div>
                    <div class="q-mb-xl">
                        <div class="row q-col-gutter-xs q-mb-xs" v-for="(data, index) in dtr">
                            <div class="col-1">
                                <q-input outlined dense :model-value="FormatLogDate(data.date)" />
                            </div>
                            <div class="col-1">
                                <q-input outlined dense :model-value="FormatLogDay(data.date)" />
                            </div>
                            <div class="col-1">
                                <q-input outlined dense v-model="data.time_in">
                                    <q-popup-proxy cover transition-show="scale" transition-hide="scale" mask="##:##" fill-mask ref="popup" class="no-shadow custom-border radius-sm">
                                        <q-time v-model="data.time_in" mask="HH:mm" >
                                            <div class="row items-center justify-end">
                                                <q-btn v-close-popup label="Okay" color="primary" flat />
                                            </div>
                                        </q-time>
                                    </q-popup-proxy>
                                </q-input>
                            </div>
                            <div class="col-1">
                                <q-input outlined dense v-model="data.time_out" >
                                    <q-popup-proxy cover transition-show="scale" transition-hide="scale" mask="##:##" fill-mask ref="popup" class="no-shadow custom-border radius-sm">
                                        <q-time v-model="data.time_out" mask="HH:mm" >
                                            <div class="row items-center justify-end">
                                                <q-btn v-close-popup label="Okay" color="primary" flat />
                                            </div>
                                        </q-time>
                                    </q-popup-proxy>
                                </q-input>
                            </div>
                            <div class="col-1">
                                <q-input outlined dense :model-value="FormatMinutes(data.late)" :readonly="true"/>
                            </div>
                            <div class="col-1">
                                <q-input outlined dense :model-value="FormatMinutes(data.undertime)" :readonly="true"/>
                            </div>
                            <div class="col-1">
                                <q-input outlined dense :model-value="FormatMinutes(data.overtime)" :readonly="true"/>
                            </div>
                            <div class="col">
                                <div class="q-gutter-xs q-mt-sm">
                                    <q-badge v-if="data.notes" v-for="value in data.notes" rounded color="primary" :label="value.type" class="text-uppercase cursor-pointer">
                                        <q-tooltip anchor="top middle" self="center middle" class="text-uppercase">
                                            <div>{{ value.name }}</div>
                                        </q-tooltip>
                                    </q-badge>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row q-col-gutter-xl q-mb-md q-mt-xl">
                        <div v-for="(dt, index) in signatories">
                            <div class="text-caption text-uppercase text-grey">{{ dt?.status == 'Pending' ? 'unsigned' : (dt?.description) }}</div>
                            <div v-if="dt?.status == 'Pending'">
                                <div class="text-h6 text-uppercase">{{ dt?.original_approver_name }}</div>
                                <div class="text-body1 text-uppercase text-italic">{{ dt?.original_approver_position }}</div>
                            </div>
                            <div v-if="dt?.status == 'Approved'">
                                <div v-if="dt?.is_overide">
                                    <div class="text-grey q-mb-lg">
                                        <div class="text-h6 text-uppercase">{{ dt?.original_approver_name }}</div>
                                        <div class="text-body1 text-uppercase text-italic">{{ dt?.original_approver_position }}</div>
                                    </div>
                                    <div class="text-caption text-uppercase text-italic text-bold q-mb-lg">overiden by</div>
                                    <img :src="(dt?.override_signature)" width="150"/>
                                    <div class="text-h6 text-uppercase">{{ dt?.override_name }}</div>
                                    <div class="text-body1 text-uppercase text-italic">{{ dt?.override_position }}</div>
                                    <div class="text-caption text-uppercase text-italic">{{ FormatSigned(dt?.signed_at) }}</div>
                                </div>
                                <div v-if="!dt?.is_overide">
                                    <img :src="(dt?.original_signature)" width="150"/>
                                    <div class="text-h6 text-uppercase">{{ dt?.original_approver_name }}</div>
                                    <div class="text-body1 text-uppercase text-italic">{{ dt?.original_approver_position }}</div>
                                    <div class="text-caption text-uppercase text-italic">{{ FormatSigned(dt?.signed_at) }}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </q-card-section>
                <q-card-actions align="left" class="q-pa-lg">
                    <q-btn v-if="canApprove" unelevated size="md" color="primary" class="btn text-capitalize" label="approve">
                        <q-menu @before-show="() => {  }" transition-show="jump-up" transition-hide="jump-down" :offset="[0, 15]" class="radius-sm" style="box-shadow: rgba(0, 0, 0, 0.09) 0px 3px 12px;">
                            <q-card class="no-shadow  radius-sm q-pa-lg" style="width: 300px;">
                                <q-card-section>
                                    <div class="text-h6 text-center text-uppercase">
                                        proceed to approve
                                    </div>
                                </q-card-section>
                                <q-card-actions>
                                    <q-btn unelevated size="md" color="primary" class="full-width text-capitalize" label="proceed"  @click="() => {  Approve(DTRStore?.data?.id);}"/>
                                </q-card-actions>
                            </q-card>
                        </q-menu>
                    </q-btn>
                    <q-btn unelevated size="md" color="primary" class="btn-md text-capitalize q-mt-md" label="print" @click="Print(DTRStore?.data?.id)" />
                    <q-btn unelevated size="md" color="primary" class="btn-md text-capitalize q-mt-md" outline label="close" @click="() => { DTRDialog = false }" />
                </q-card-actions>
                <q-inner-loading :showing="SubmitLoading">
                    <q-card class="no-shadow radius-md q-pa-md">
                        <q-card-section class="text-center">
                            <div>
                                <q-spinner-ios color="dark"/>
                            </div>
                            <div class="text-dark text-uppercase text-caption">we're working on it!</div>
                        </q-card-section>
                    </q-card>
                </q-inner-loading>
            </q-card>
        </q-dialog>
        <q-dialog v-model="printDialog" full-height full-width class="pdf">
            <q-card class="bg-white q-pa-none" style="height: 100vh; overflow: hidden;">
                <q-btn
                    icon="bi-x"
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
import { ref, onMounted, onBeforeUnmount, onBeforeMount, watch, reactive, computed } from 'vue';
import { api } from 'src/boot/axios';
import moment from 'moment';
import { Toast } from 'src/boot/sweetalert'; 
import { useDTRStore } from 'src/stores/dtr-store';
const DTRStore = useDTRStore();

const today = new Date();
const month = ref(String(today.getMonth() + 1).padStart(2, '0'));
const year = ref(String(today.getFullYear()));

const months = Array.from({ length: 12 }, (_, i) => {
    const monthName = new Date(0, i).toLocaleString("en-US", { month: "short" });
    const monthValue = String(i + 1).padStart(2, "0");
    return { label: monthName, value: monthValue };
});

const rows = ref([]);

const GetAllAttendance = async (id) => {
    DTRStore.SubmitLoading = true;
    try {
        const response = await api.get(`/portal/dtr/attendance`, {
            params: {
                id: id,
                month: month.value,
                year: year.value
            }
        });
        rows.value = response.data.result;

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
        DTRStore.SubmitLoading = false;
    }
}

onMounted(() => {
    GetAllAttendance(DTRStore.employee?.id);
});

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

const DTRDialog = ref(false);
const dtr = ref([]);
const signatories = ref([]);
const SubmitLoading = ref(false);

const GetAttendance = async (id) => {
    SubmitLoading.value = true;
    try {
        const response = await api.get(`/portal/dtr/attendance/${id}`);
        dtr.value = response.data.logs;
        signatories.value = response.data.approvals;
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

const FormatLogDate = (date) => {
    if (!date) return ''
    return moment(date).format('DD')
}

const FormatSigned = (date) => {
    if (!date) return ''
    return moment(date).format('MMMM Do, YYYY hh:mm A')
}

const FormatLogDay = (date) => {
    if (!date) return ''
    return moment(date).format('dddd')
}

const FormatMinutes = (value) => {
    const total = Number(value) || 0;
    if (total <= 0) return '0 min';

    const minutesInDay = 24 * 60;

    const days = Math.floor(total / minutesInDay);
    const hours = Math.floor((total % minutesInDay) / 60);
    const minutes = total % 60;

    const parts = [];

    if (days) parts.push(`${days} ${days === 1 ? 'day' : 'days'}`);
    if (hours) parts.push(`${hours} ${hours === 1 ? 'hr' : 'hrs'}`);
    if (minutes) parts.push(`${minutes} ${minutes === 1 ? 'min' : 'mins'}`);

    return parts.join(' ');
};

const Approve = async (id) => {
    SubmitLoading.value = true;
    const userId = Number(DTRStore.employee?.user[0]?.user_id);
    const s = signatories.value;
    const myRequest = s.find(approval =>
    Number(
            approval?.approver_id
        ) === Number(userId)
    );
    const approvalId = myRequest?.id ?? null;

    try {
        const response = await api.post(`/portal/dtr/attendance/approve`, {
            attendanceId: id,
            approvalId
        });
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
}

const canApprove = computed(() => {
    const list = signatories.value || [];
    if (!list.length) return false;

    // Sort by order
    const sorted = [...list].sort((a, b) => Number(a.order) - Number(b.order));

    // First pending
    const nextPending = sorted.find(a => a.status === 'Pending');
    if (!nextPending) return false;

    // Current user can approve only if they are the approver_id of the next pending
    return Number(nextPending.approver_id) === Number(DTRStore.employee?.user[0]?.user_id);
});

const printDialog = ref(false);
const pdf = ref(null);

const Print = async (id) => {
    SubmitLoading.value = true;
    try {
        const res = await api.get(`/portal/dtr/attendance/${id}/pdf`, {
            responseType: 'arraybuffer',
        })
        const blob = new Blob([res.data], { type: 'application/pdf' });
        const pdfurl = window.URL.createObjectURL(blob) + "#view=FitW";
        pdf.value = pdfurl
        printDialog.value = true;
    } catch (error) {
        console.error("Error generating PDF:", error);
    } finally {
        SubmitLoading.value = false;
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

</script>

<style lang="css" scoped>
.card-menu
{
    width: 150px;
    height: 175px;
}

</style>