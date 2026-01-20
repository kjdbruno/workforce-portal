<template>
    <q-dialog v-model="isOpen" full-height position="right" persistent square class="dialog" @before-show="PopulateData()">
        <q-card class="dialog-card column full-height">
            <q-card-section class="q-pa-lg">
                <div class="text-h6 text-uppercase">service records</div>
            </q-card-section>
            <q-separator inset />
            <q-card-section class="col q-pa-lg scroll">
                <div class="card-grid">
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
                    <div v-for="(app, index) in rows" :key="`data-${app.id}`" class="card-anim-wrapper" :style="{ animationDelay: `${index * 120}ms` }" >
                        <q-card class="card card-hover-animate flex flex-center q-pa-md no-shadow cursor-pointer radius-sm" >
                            <q-card-section class="text-center full-width">
                                <div class="text-subtitle2 text-uppercase">{{ formatCurrency(app?.amount) }}</div>
                                <div class="text-caption text-uppercase">{{ app?.salarytype }}</div>
                            </q-card-section>
                            <q-card-section class="full-width">
                                <div class="text-caption text-uppercase">{{ app?.salarygroup }}</div>
                                <div class="text-caption text-grey">{{ formatDateRange(app) }}</div>
                            </q-card-section>
                            <div class="absolute-top-left q-ma-sm" style="width: 7px; height: 7px; border-radius: 50%;" :class="app.is_active ? 'bg-positive' : 'bg-negative'"></div>
                        </q-card>
                    </div>
                </div>
            </q-card-section>
            
            <q-card-actions class="q-pa-lg bg">
                <div class="q-gutter-sm">
                    <q-btn unelevated size="md" color="primary" class="btn text-capitalize" label="print" @click="Print(EmployeeStore.data?.id)" />
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
</template>
<script setup>
import { ref, onMounted, onBeforeUnmount, onBeforeMount, watch, reactive, computed } from 'vue';
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
const rows = ref([
    {
        id: "",
        amount: "",
        salarytype: "",
        salarygroup: "",
        effectiveDate: "",
        endDate: "",
        notes: ""
    }
]);

const GetServiceRecord = async (id) => {
    SubmitLoading.value = true;
    try {
        const response = await api.get(`/employee/service`, {
            params: { 
                id: id
            }
        });
        MapSalarySchedules(response.data.record)
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

const MapSalarySchedules = (data = []) => {
    rows.value = data.map(item => ({
        id: item.id ?? '',
        amount: item.amount ?? '',
        salarytype: item.salary_type ?? '',
        salarygroup: item.salary_group ?? '',
        effectiveDate: item.effective_date ?? '',
        endDate: item.end_date ?? '',
        notes: item.notes ?? '',
        is_active: item.is_active ?? ''
    }))
}

const PopulateData = () => {
    GetServiceRecord(EmployeeStore.data?.id)
}

const Errors = reactive({
    amount: { type: null, msg: '' },
    salarytype: { type: null, msg: '' },
    salarygroup: { type: null, msg: '' },
    effectivedate: { type: null, msg: '' },
    enddate: { type: null, msg: '' },
    notes: { type: null, msg: '' }
});

function formatCurrency(salaryRange, currency = 'PHP') {
    if (!salaryRange) return '';

    return salaryRange
        .split('-')
        .map(p => {
            const num = parseFloat(p.replace(/,/g, ''));
            return num.toLocaleString('en-PH', {
                style: 'currency',
                currency,
                minimumFractionDigits: 2
            });
        })
        .join(' - ');
}

const formatDateRange = (app) => {
    if (!app?.effectiveDate) return ''

    const formatDate = (date) =>
        new Date(date).toLocaleDateString('en-PH', {
            year: 'numeric',
            month: 'short',
            day: '2-digit'
        })

    const start = formatDate(app.effectiveDate)
    const end = app.endDate ? formatDate(app.endDate) : 'Present'

    return `${start} – ${end}`
}

const printDialog = ref(false);
const pdf = ref(null);

const Print = async (id) => {
    SubmitLoading.value = true;
    try {
        const res = await api.get(`/salary/service/${id}/pdf`, {
            responseType: 'arraybuffer',
        })
        const blob = new Blob([res.data], { type: 'application/pdf' });
        const pdfurl = window.URL.createObjectURL(blob) + "#view=FitW";
        pdf.value = pdfurl
        printDialog.value = true;
        SubmitLoading.value = false;
    } catch (error) {
        SubmitLoading.value = false;
        console.error("Error generating PDF:", error);
    }
}

</script>

<style scoped lang="css">
    .card
    {
        box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px !important;
    }
</style>