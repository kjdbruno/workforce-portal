<template>
    <q-dialog v-model="isOpen" full-height position="right" persistent square class="dialog" @before-show="PopulateData()">
        <q-card class="dialog-card column full-height">
            <q-card-section class="q-pa-lg">
                <div class="text-h6 text-uppercase">daily time record</div>
            </q-card-section>
            <q-separator inset />
            <q-card-section class="col q-pa-lg scroll">
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
                            @click="() => { month = m.value; GetAttendance(EmployeeStore.data?.id); }"
                            size="md"
                            :label="m.label"
                        />
                    </div>
                </div>
                <div class="q-mt-md">
                    <div class="card-grid">
                        <div class="card-anim-wrapper" :style="{ animationDelay: `120ms` }" v-if="!SubmitLoading && attendances.length === 0">
                            <q-card key="data-add" class="card card-hover-animate flex flex-center q-pa-md no-shadow cursor-pointer radius-sm" >
                                <q-card-section class="text-center">
                                    <div class="text-caption text-uppercase text-grey">no data found</div>
                                </q-card-section>
                            </q-card>
                        </div>
                        <div v-for="(app, index) in attendances" :key="`data-${app.id}`" class="card-anim-wrapper" :style="{ animationDelay: `${index * 120}ms` }" v-else>
                            <q-card @click="() => { Print(app.id) }" class="card card-hover-animate flex flex-center q-pa-md no-shadow cursor-pointer radius-sm" >
                                <q-card-section class="text-center full-width">
                                    <div class="text-subtitle2 text-uppercase">{{ FormatDateRange(app) }}</div>
                                    <div class="text-caption text-uppercase text-grey">{{ FormatDay(app) }}</div>
                                </q-card-section>
                                <q-card-section class="full-width">
                                    <div class="text-caption text-grey">{{ app.status }}</div>
                                </q-card-section>
                            </q-card>
                        </div>
                    </div>
                </div>
            </q-card-section>
            
            <q-card-actions class="q-pa-lg bg">
                <div class="q-gutter-sm">
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

const status = ref('');
const today = new Date();
const month = ref(String(today.getMonth() + 1).padStart(2, '0'));
const year = ref(String(today.getFullYear()));

const months = Array.from({ length: 12 }, (_, i) => {
    const monthName = new Date(0, i).toLocaleString("en-US", { month: "short" });
    const monthValue = String(i + 1).padStart(2, "0");
    return { label: monthName, value: monthValue };
});

const attendances = ref([])

const GetAttendance = async (id) => {
    SubmitLoading.value = true;
    try {
        const response = await api.get(`/employee/attendance`, {
            params: { 
                id: id,
                year: year.value,
                month: month.value
            }
        });
        attendances.value = (response.data.record)
        
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

const PopulateData = () => {
    GetAttendance(EmployeeStore.data?.id)
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

const printDialog = ref(false);
const pdf = ref(null);

const Print = async (id) => {
    SubmitLoading.value = true;
    try {
        const res = await api.get(`/attendance/${id}/pdf`, {
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