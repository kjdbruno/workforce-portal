<template>
    <q-dialog v-model="isOpen" full-height position="right" persistent square class="dialog" @before-show="PopulateData()">
        <q-card class="dialog-card column full-height">
            <q-card-section class="q-pa-lg">
                <div class="text-h6 text-uppercase">leave information</div>
            </q-card-section>
            <q-separator inset />
            <q-card-section class="col q-pa-lg scroll">
                <div class="q-mb-lg">
                    <div class="text-uppercase text-body1 text-bold q-mb-sm">leave credit</div>
                    <div v-if="balances.length === 0">
                        <div class="row q-col-gutter-xs q-mb-xs">
                            <div class="col-2">
                                <div class="text-caption text-uppercase text-grey q-mb-xs">leave</div>
                            </div>
                            <div class="col-1">
                                <div class="text-caption text-uppercase q-mb-xs" :class="Errors.leaves.credit.msg ? 'text-negative' : 'text-grey'">{{ Errors.leaves.credit.msg ? Errors.leaves.credit.msg : 'credit' }}</div>
                            </div>
                            <div class="col-1">
                                <div class="text-caption text-uppercase q-mb-xs" :class="Errors.leaves.earned.msg ? 'text-negative' : 'text-grey'">{{ Errors.leaves.earned.msg ? Errors.leaves.earned.msg : 'earned' }}</div>
                            </div>
                            <div class="col-1">
                                <div class="text-caption text-uppercase q-mb-xs" :class="Errors.leaves.used.msg ? 'text-negative' : 'text-grey'">{{ Errors.leaves.used.msg ? Errors.leaves.used.msg : 'used' }}</div>
                            </div>
                            <div class="col-1">
                                <div class="text-caption text-uppercase q-mb-xs" :class="Errors.leaves.balance.msg ? 'text-negative' : 'text-grey'">{{ Errors.leaves.balance.msg ? Errors.leaves.balance.msg : 'balance' }}</div>
                            </div>
                        </div>
                        <div class="row q-col-gutter-xs q-mb-xs" v-for="(app, index) in leaves" :key="index">
                            <div class="col-2">
                                <q-input 
                                    v-model="app.leavetype" 
                                    outlined 
                                    :no-error-icon="true"
                                    :readonly="true"
                                />
                            </div>
                            <div class="col-1">
                                <q-input 
                                    v-model="app.credit" 
                                    outlined 
                                    :error="Errors.leaves.credit.type[index]"
                                    :no-error-icon="true"
                                />
                            </div>
                            <div class="col-1">
                                <q-input 
                                    v-model="app.earned" 
                                    :error="Errors.leaves.earned.type[index]"
                                    outlined 
                                />
                            </div>
                            <div class="col-1">
                                <q-input 
                                    v-model="app.used" 
                                    :error="Errors.leaves.used.type[index]"
                                    outlined 
                                />
                            </div>
                            <div class="col-1">
                                <q-input 
                                    v-model="app.balance" 
                                    :error="Errors.leaves.balance.type[index]"
                                    outlined 
                                />
                            </div>
                        </div>
                    </div>
                    <div v-else>
                        <div class="card-grid">
                            <div v-for="(app, index) in balances" :key="`data-${app.id}`" class="card-anim-wrapper" :style="{ animationDelay: `${index * 120}ms` }">
                                <q-card class="card card-hover-animate flex flex-center q-pa-md no-shadow cursor-pointer radius-sm" >
                                    <q-card-section class="text-center full-width">
                                        <div class="text-subtitle2 text-uppercase">{{ app?.leaveType?.name }}</div>
                                    </q-card-section>
                                    <q-card-section class="full-width">
                                        <div class="text-caption">{{ app.balance }}</div>
                                        <div class="text-caption text-uppercase text-grey">balance</div>
                                    </q-card-section>
                                </q-card>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="q-mb-lg">
                    <div class="text-uppercase text-body1 text-bold q-mb-sm">leave application</div>
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
                                @click="() => { month = m.value; GetLeaveApplication(EmployeeStore.data?.id); }"
                                size="md"
                                :label="m.label"
                            />
                        </div>
                    </div>
                    <div class="card-grid">
                        <div class="card-anim-wrapper" :style="{ animationDelay: `120ms` }" v-if="!SubmitLoading && applications.length === 0">
                            <q-card key="data-add" class="card card-hover-animate flex flex-center q-pa-md no-shadow cursor-pointer radius-sm" >
                                <q-card-section class="text-center">
                                    <div class="text-caption text-uppercase text-grey">no data found</div>
                                </q-card-section>
                            </q-card>
                        </div>
                        <div v-for="(app, index) in applications" :key="`data-${app.id}`" class="card-anim-wrapper" :style="{ animationDelay: `${index * 120}ms` }"  v-else>
                            <q-card @click="() => { Print(app.id) }" class="card card-hover-animate flex flex-center q-pa-md no-shadow cursor-pointer radius-sm" v-ripple >
                                <q-card-section class="text-center full-width">
                                    <div class="text-subtitle2 text-uppercase">{{ app.name }}</div>
                                    <div class="text-caption text-uppercase text-grey">{{ app?.status }}</div>
                                </q-card-section>
                                <q-card-section class="full-width">
                                    <div class="text-caption">{{ FormatDateRange(app) }}</div>
                                    <div class="text-caption text-uppercase text-grey">{{ FormatDay(app) }}</div>
                                </q-card-section>
                            </q-card>
                        </div>
                    </div>
                </div>
            </q-card-section>
            
            <q-card-actions class="q-pa-lg bg">
                <div class="q-gutter-sm">
                    <q-btn unelevated size="md" color="primary" class="btn text-capitalize" label="save" @click="SaveProfile()" />
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

const today = new Date();
const month = ref(String(today.getMonth() + 1).padStart(2, '0'));
const year = ref(String(today.getFullYear()));

const months = Array.from({ length: 12 }, (_, i) => {
    const monthName = new Date(0, i).toLocaleString("en-US", { month: "short" });
    const monthValue = String(i + 1).padStart(2, "0");
    return { label: monthName, value: monthValue };
});

const balances = ref([]);
const applications = ref([]);

const GetLeaveBalance = async (id) => {
    SubmitLoading.value = true;
    try {
        const response = await api.get(`/employee/leave/balance`, {
            params: { 
                id: id
            }
        });
        balances.value = response.data.record

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

const GetLeaveApplication = async (id) => {
    SubmitLoading.value = true;
    try {
        const response = await api.get(`/employee/leave/application`, {
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
        SubmitLoading.value = false;
    }
}

const leaves = ref([]);

const LoadLeaveType = async () => {
    try {
        const { data } = await api.get(`/employee/option/leavetype`);
        MapLeaves(data)
    } catch (error) {
        console.error("Error fetching options:", error);
    }
};

const MapLeaves = (data = []) => {
    leaves.value = data.map(item => ({
        leavetypeid: item.id ?? '',
        leavetype: item.name ?? '',
        credit: item.credit ?? '',
        earned: '',
        used: '',
        balance: ''
    }))
}

const PopulateData = () => {
    GetLeaveBalance(EmployeeStore.data?.id)
    GetLeaveApplication(EmployeeStore.data?.id)
    LoadLeaveType()
}

const Errors = reactive({
    leaves: {
        credit: {
            type: [], msg: ''
        },
        earned: {
            type: [], msg: ''
        },
        used: {
            type: [], msg: ''
        },
        balance: {
            type: [], msg: ''
        }
    }
});

const initErrors = () => {
    Errors.leaves.credit.type = leaves.value.map(() => null);
    Errors.leaves.earned.type = leaves.value.map(() => null);
    Errors.leaves.used.type = leaves.value.map(() => null);
    Errors.leaves.balance.type = leaves.value.map(() => null);
}

const Validations = () => {

    let isError = false;
    
    Errors.leaves.credit = { type: null, msg: '' }
    Errors.leaves.earned = { type: null, msg: '' }
    Errors.leaves.used = { type: null, msg: '' }
    Errors.leaves.balance = { type: null, msg: '' }

    initErrors()
    
    leaves.value.forEach((e, index) => {
        if (!e.credit) {
            Errors.leaves.credit.type[index] = true;
            Errors.leaves.credit.msg = 'credit is required';
            isError = true;
        }
        if (!e.earned) {
            Errors.leaves.earned.type[index] = true;
            Errors.leaves.earned.msg = 'earned is required';
            isError = true;
        }
        if (!e.used) {
            Errors.leaves.used.type[index] = true;
            Errors.leaves.used.msg = 'used is required';
            isError = true;
        }
        if (!e.balance) {
            Errors.leaves.balance.type[index] = true;
            Errors.leaves.balance.msg = 'balance is required';
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

const printDialog = ref(false);
const pdf = ref(null);

const Print = async (id) => {
    SubmitLoading.value = true;
    try {
        const res = await api.get(`/leave/${id}/pdf`, {
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