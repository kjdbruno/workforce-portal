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
                        @click="() => { month = m.value; GetLeaveApplication(LeaveStore.employee?.id); }"
                        size="md"
                        :label="m.label"
                    />
                </div>
            </div>
        </div>
        <div class="card-grid">
            <div class="inner-card-anim-wrapper" :style="{ animationDelay: `120ms` }" v-if="!LeaveStore.SubmitLoading && applications.length === 0">
                <q-card key="data-add" class="card card-menu card-hover-animate flex column justify-center items-center no-shadow cursor-pointer radius-sm no-shadow" >
                    <q-card-section class="text-center">
                        <div class="text-caption text-uppercase text-grey">no data found</div>
                    </q-card-section>
                </q-card>
            </div>
            <div v-for="(app, index) in applications" :key="`data-${app.id}`" class="inner-card-anim-wrapper" :style="{ animationDelay: `${index * 120}ms` }" >
                <q-card @click="() => { GetLeave(app.id) }" class="card card-menu card-hover-animate flex column justify-center items-center no-shadow cursor-pointer radius-sm no-shadow">
                    <q-card-section>
                        <div class="text-caption text-bold text-uppercase">{{ app.leaveType?.name }}</div>
                        <div class="text-caption text-uppercase text-grey">{{ app?.status }}</div>
                    </q-card-section>
                    <q-card-section>
                        <div class="text-caption">{{ FormatLeaveDate(app?.date_from, app?.date_to) }}</div>
                        <div class="text-caption text-uppercase text-grey">{{ ComputeLeaveDays(app?.date_from, app?.date_to) }} day/s</div>
                    </q-card-section>
                </q-card>
            </div>
        </div>
        <q-dialog v-model="LeaveDialog" class="dialog" position="right" full-height>
            <q-card class="dialog-card column full-height" square>
                <q-card-section class="q-pa-lg">
                    <div class="text-h6 text-uppercase">daily time records</div>
                </q-card-section>
                <q-separator inset />
                <q-card-section class="col q-pa-lg scroll">
                    <div class="q-mb-md">
                        <div class="text-caption text-uppercase text-grey">control no.</div>
                        <div class="text-h5 text-uppercase">{{ info?.control_no }}</div>
                    </div>
                    <div class="q-mb-md">
                        <div class="text-caption text-uppercase text-grey">employee</div>
                        <div class="text-h5 text-uppercase">{{ FormatName(info?.employee) }}</div>
                    </div>
                    <div class="row q-col-gutter-md">
                        <div class="col">
                            <div class="text-caption text-uppercase text-grey">leave type</div>
                            <div class="text-body1 text-uppercase">{{ info?.leaveType?.name }}</div>
                        </div>
                        <div class="col">
                            <div class="text-caption text-uppercase text-grey">status</div>
                            <div class="text-body1 text-uppercase">{{ info?.status }}</div>
                        </div>
                        <div class="col">
                            <div class="text-caption text-uppercase text-grey">leave duration</div>
                            <div class="text-body1 text-uppercase">{{ FormatLeaveDate(info?.date_from, info?.date_to) }}</div>
                        </div>
                        <div class="col">
                            <div class="text-caption text-uppercase text-grey">no of day</div>
                            <div class="text-body1 text-uppercase">{{ ComputeLeaveDays(info?.date_from, info?.date_to) }}</div>
                        </div>
                    </div>
                    <div class="row q-col-gutter-xl q-mt-lg">
                        <div class="col" v-for="(dt, index) in info?.approvals">
                            <div class="text-caption text-uppercase text-grey">{{ dt?.status == 'Pending' ? 'unsigned' : (dt?.setting?.description) }}</div>
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
                                    <img :src="(dt?.override_signature)" width="100"/>
                                    <div class="text-h6 text-uppercase">{{ dt?.override_name }}</div>
                                    <div class="text-body1 text-uppercase text-italic">{{ dt?.override_position }}</div>
                                    <div class="text-caption text-uppercase text-italic">{{ FormatSigned(dt?.signed_at) }}</div>
                                </div>
                                <div v-if="!dt?.is_overide">
                                    <img :src="(dt?.original_signature)" width="100"/>
                                    <div class="text-h6 text-uppercase">{{ dt?.original_approver_name }}</div>
                                    <div class="text-body1 text-uppercase text-italic">{{ dt?.original_approver_position }}</div>
                                    <div class="text-caption text-uppercase text-italic">{{ FormatSigned(dt?.signed_at) }}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </q-card-section>
                <q-card-actions align="left" class="q-pa-lg">
                    <q-btn unelevated size="md" color="primary" class="btn-md text-capitalize q-mt-md" label="print" @click="Print(info?.id)" />
                    <q-btn unelevated size="md" color="primary" class="btn-md text-capitalize q-mt-md" outline label="close" @click="() => { LeaveDialog = false }" />
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
import { useLeaveStore } from 'src/stores/leave-store';
const LeaveStore = useLeaveStore();

const today = new Date();
const month = ref(String(today.getMonth() + 1).padStart(2, '0'));
const year = ref(String(today.getFullYear()));

const months = Array.from({ length: 12 }, (_, i) => {
    const monthName = new Date(0, i).toLocaleString("en-US", { month: "short" });
    const monthValue = String(i + 1).padStart(2, "0");
    return { label: monthName, value: monthValue };
});

const applications = ref([]);

const GetLeaveApplication = async (id) => {
    LeaveStore.SubmitLoading = true;
    try {
        const response = await api.get(`/portal/leave/application`, {
            params: { 
                id: id,
                month: month.value,
                year: year.value
            }
        });
        applications.value = response.data.record

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
        LeaveStore.SubmitLoading = false;
    }
}

onMounted(() => {
    GetLeaveApplication(LeaveStore.employee?.id);
});

const FormatLeaveDate = (dateFrom, dateTo, locale = 'en-US') => {
    if (!dateFrom) return ''

    const from = new Date(dateFrom)
    const to = new Date(dateTo || dateFrom)

    const sameDay =
        from.getFullYear() === to.getFullYear() &&
        from.getMonth() === to.getMonth() &&
        from.getDate() === to.getDate()

    const monthName = (d) => d.toLocaleString(locale, { month: 'long' })
    const dayNum = (d) => d.getDate()
    const yearNum = (d) => d.getFullYear()

    if (sameDay) {
        // February 1, 2026
        return `${monthName(from)} ${dayNum(from)}, ${yearNum(from)}`
    }

    // Same month & year: February 1-3, 2026
    if (from.getMonth() === to.getMonth() && from.getFullYear() === to.getFullYear()) {
        return `${monthName(from)} ${dayNum(from)}-${dayNum(to)}, ${yearNum(from)}`
    }

    // Different month/year: February 28 - March 2, 2026
    return `${monthName(from)} ${dayNum(from)}, ${yearNum(from)} - ${monthName(to)} ${dayNum(to)}, ${yearNum(to)}`
}

const ComputeLeaveDays = (dateFrom, dateTo) => {
    if (!dateFrom) return 0

    const from = new Date(dateFrom)
    const to = new Date(dateTo || dateFrom)

    // normalize to midnight to avoid timezone issues
    from.setHours(0, 0, 0, 0)
    to.setHours(0, 0, 0, 0)

    const diff = Math.round((to - from) / (1000 * 60 * 60 * 24))
    return diff >= 0 ? diff + 1 : 0 // +1 for inclusive
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

const LeaveDialog = ref(false);
const info = ref([]);

const GetLeave = async (id) => {
    SubmitLoading.value = true;
    try {
        const response = await api.get(`/portal/leave/application/${id}`);
        info.value = response.data.result;
        LeaveDialog.value = true;
    } catch (error) {
        console.error("Error fetching data:", error);
        Toast.fire({
            icon: "error",
            html: `
                <div class="text-h6 text-bold text-uppercase">Error</div>
                <div class="text-caption text-capitalize;">Unable to fetch record</div>
            `
        });
    } finally {
        SubmitLoading.value = false;
    }
}

const printDialog = ref(false);
const pdf = ref(null);
const SubmitLoading = ref(false);

const Print = async (id) => {
    SubmitLoading.value = true;
    try {
        const res = await api.get(`/portal/leave/${id}/pdf`, {
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

</script>

<style lang="css" scoped>
.card-menu
{
    width: 150px;
    height: 175px;
}

</style>