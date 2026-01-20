<template>
    <q-dialog v-model="isOpen" full-height position="right" persistent square class="dialog" @before-show="() => { PopulateData(); ResetForm(); ResetAllErrors(); }">
        <q-card class="dialog-card column full-height">
            <q-card-section class="q-pa-lg">
                <div class="text-h6 text-uppercase">salary schedule</div>
            </q-card-section>
            <q-separator inset />
            <q-card-section class="col q-pa-lg scroll">
                <div class="row q-col-gutter-xs q-mb-xl">
                    <div class="col-3">
                        <div class="text-caption text-uppercase q-mb-xs" :class="Errors.position.type ? 'text-negative' : 'text-grey'">{{ Errors.position.type ? Errors.position.msg : 'position' }}</div>
                        <q-select
                            outlined
                            v-model="position"
                            label="Choose Position"
                            use-input
                            input-debounce="300"
                            :options="filteredPositions"
                            @filter="filterPositionFn"
                            :error="Errors.position.type"
                            dropdown-icon="keyboard_arrow_down"
                            :no-error-icon="true"
                            class="text-capitalize"
                            @update:model-value="() => { amount = position.amount; salarytype = position.salarytype }"
                        >
                            <template v-slot:no-option>
                                <q-item>
                                    <q-item-section class="text-italic text-grey">
                                    No options
                                    </q-item-section>
                                </q-item>
                            </template>
                            <template v-slot:option="scope">
                                <q-item v-bind="scope.itemProps" :disable="scope.opt.status !== 'Vacant'">
                                    <q-item-section>
                                        <q-item-label>{{ $CapitalizeWords(scope.opt.label) }} - {{ scope.opt.status }}</q-item-label>
                                    </q-item-section>
                                </q-item>
                            </template>
                        </q-select>
                    </div>
                </div>
                <div class="row q-col-gutter-xs q-mb-md">
                    <div class="col-2">
                        <div class="text-caption text-uppercase q-mb-xs" :class="Errors.dateStart.msg ? 'text-negative' : 'text-grey'">{{ Errors.dateStart.msg ? Errors.dateStart.msg : 'date start (YYYY-MM-DD)' }}</div>
                        <q-input outlined v-model="dateStart" label="Enter Date">
                            <q-popup-proxy cover transition-show="scale" transition-hide="scale" ref="popup" class="no-shadow custom-border radius-sm">
                                <q-date v-model="dateStart" mask="YYYY-MM-DD" @update:model-value="() => { popup.hide() }" />
                            </q-popup-proxy>
                        </q-input>
                    </div>
                    <div class="col-2">
                        <div class="text-caption text-uppercase q-mb-xs" :class="Errors.dateEnd.msg ? 'text-negative' : 'text-grey'">{{ Errors.dateEnd.msg ? Errors.dateEnd.msg : 'date end (YYYY-MM-DD)' }}</div>
                        <q-input outlined v-model="dateEnd" label="Enter Date">
                            <q-popup-proxy cover transition-show="scale" transition-hide="scale" ref="popup" class="no-shadow custom-border radius-sm">
                                <q-date v-model="dateEnd" mask="YYYY-MM-DD" @update:model-value="() => { popup.hide() }" />
                            </q-popup-proxy>
                        </q-input>
                    </div>
                </div>
                <div class="q-mb-md">
                    <div class="text-caption text-uppercase q-mb-xs" :class="Errors.salarytype.type ? 'text-negative' : 'text-grey'">{{ Errors.salarytype.type ? Errors.salarytype.msg : 'salary type' }}</div>
                    <div class="q-gutter-sm">
                        <q-radio v-for="value in salarytypes" v-model="salarytype" checked-icon="task_alt" unchecked-icon="panorama_fish_eye" :val="value" :label="value" />
                    </div>
                </div>
                <div class="row q-col-gutter-xs q-mb-md">
                    <div class="col-2">
                        <div class="text-caption text-uppercase q-mb-xs" :class="Errors.amount.msg ? 'text-negative' : 'text-grey'">{{ Errors.amount.msg ? Errors.amount.msg : 'amount' }}</div>
                        <q-input 
                            v-model="amount" 
                            label="Enter Amount"
                            outlined 
                            :error="Errors.amount.type"
                            :no-error-icon="true"
                        />
                    </div>
                </div>
                <div class="row q-col-gutter-xs q-mb-md">
                    <div class="col-2">
                        <div class="text-caption text-uppercase q-mb-xs" :class="Errors.salarygroup.msg ? 'text-negative' : 'text-grey'">{{ Errors.salarygroup.msg ? Errors.salarygroup.msg : 'salary group' }}</div>
                        <q-select
                            outlined
                            v-model="salarygroup"
                            label="Choose Salary Group"
                            emit-value
                            map-options
                            use-input
                            input-debounce="300"
                            :options="salarygroups"
                            :error="Errors.salarygroup.type"
                            dropdown-icon="keyboard_arrow_down"
                            :no-error-icon="true"
                            class="text-capitalize"
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
                        <div class="text-caption text-uppercase text-grey q-mb-xs">note</div>
                        <q-input 
                            v-model="note" 
                            label="Enter Notes"
                            outlined 
                            :no-error-icon="true"
                            type="textarea"
                        />
                    </div>
                </div>
            </q-card-section>
            
            <q-card-actions class="q-pa-lg bg">
                <div class="q-gutter-sm">
                    <q-btn unelevated size="md" color="primary" class="btn text-capitalize" label="save" @click="Save()" />
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

const positions = ref([]);
const salarygroups = ref([
    { value: "HIRE", label: "Hiring Rate" },
    { value: "PROMO", label: "Promotion Increase" },
    { value: "MERIT", label: "Merit Increase" },
    { value: "ANNUAL", label: "Annual Increase" },
    { value: "COLA", label: "Cost of Living Allowance" },
    { value: "PROB", label: "Probationary Increase" },
    { value: "ADJUST", label: "Salary Adjustment" },
    { value: "GOVT", label: "Government Mandated Increase" },
]);
const salarytypes = ref(["Monthly", "Daily", "Hourly"]);
const filteredPositions = ref([]);
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
const normalizeOptions = (data = []) => data.map(d => {
    const baseLabel = d.label ?? d.name ?? String(d.text ?? d.value ?? '')

    // With amount (fees, salary, rates, etc)
    if (d.amount !== undefined && d.amount !== null) {
        const cost = formatCurrency(d.amount) ?? '';

        const rawAmount = d.amount !== undefined && d.amount !== null
            ? Number(String(d.amount).replace(/,/g, ''))
            : null

        return {
            id: Number(d.value ?? d.id),
            label: `${baseLabel} (${cost})`,
            value: Number(d.value ?? d.id),
            status: d.status ?? null,
            amount: rawAmount ?? null,
            salarytype: d.salary_type ?? null
        }
    }

    // Default
    return {
        id: Number(d.value ?? d.id),
        label: baseLabel,
        value: Number(d.value ?? d.id),
        status: d.status ?? null,
        amount: d.amount ?? null,
        salarytype: d.salarytype
    }
})
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
const filterPositionFn = createFilterFn(positions, filteredPositions);
const LoadPositions = async () => {
    try {
        const { data } = await api.get(`/salary/option/position`);
        positions.value = normalizeOptions(data)
        filteredPositions.value = [...positions.value]
    } catch (error) {
        console.error("Error fetching options:", error);
    }
};

const position = ref('');
const dateStart = ref(new Date().toISOString().split('T')[0]);
const dateEnd = ref('');
const salarygroup = ref('');
const salarytype = ref('');
const amount = ref('');
const notes = ref('');

const Errors = reactive({
    dateStart: { type: null, msg: '' },
    dateEnd: { type: null, msg: '' },
    position: { type: null, msg: '' },
    salarygroup: { type: null, msg: '' },
    salarytype: { type: null, msg: '' },
    amount: { type: null, msg: '' },
});

const Validations = () => {

    let isError = false;

    if (!dateStart.value) {
        Errors.dateStart.type = true;
        Errors.dateStart.msg = ('date is required');
        isError = true;
    } else {
        Errors.dateStart.type = null;
    }

    if (!salarygroup.value) {
        Errors.salarygroup.type = true;
        Errors.salarygroup.msg = ('salary group is required');
        isError = true;
    } else {
        Errors.salarygroup.type = null;
    }

    if (!amount.value) {
        Errors.amount.type = true;
        Errors.amount.msg = ('amount is required');
        isError = true;
    } else {
        Errors.amount.type = null;
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

const SubmitLoading = ref(false);

const PopulateData = () => {
    LoadPositions();
}

const Save = async () => {
    if (!Validations()) return;
    SubmitLoading.value = true;
    const pos = position.value;
    try {
        const response = await api.post(`/employee/${EmployeeStore.data?.employment?.id}/salary`, {
            positionid: pos.id,
            dateStart: dateStart.value,
            dateEnd: dateEnd.value,
            salarytype: salarytype.value,
            salarygroup: salarygroup.value,
            amount: amount.value,
            notes: notes.value
        });
        emit('update:modelValue', null);
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
};

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

const ResetForm = () => {
    position.value = '';
    dateStart.value = new Date().toISOString().split('T')[0];
    dateEnd.value = '';
    salarytype.value = '';
    salarygroup.value = '';
    amount.value = '';
    notes.value = '';
}

const ResetAllErrors = () => {
    Object.keys(Errors).forEach(key => {
        Errors[key].type = null;
        Errors[key].msg = '';
    });
}

const popup = ref(null);

</script>