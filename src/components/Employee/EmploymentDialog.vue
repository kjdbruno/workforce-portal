<template>
    <q-dialog v-model="isOpen" full-height position="right" persistent square class="dialog" @before-show="PopulateData()">
        <q-card class="dialog-card column full-height">
            <q-card-section class="q-pa-lg">
                <div class="text-h6 text-uppercase">employment information</div>
            </q-card-section>
            <q-separator inset />
            <q-card-section class="col q-pa-lg scroll">
                <div class="row q-col-gutter-xs q-mb-md">
                    <div class="col-2">
                        <div class="q-mb-xs">
                            <span class="text-caption text-uppercase" :class="Errors.employeeNo.msg ? 'text-negative' : 'text-grey'">{{ Errors.employeeNo.msg ? Errors.employeeNo.msg : 'employee id number' }}</span>
                        </div>
                        <q-input 
                            v-model="employeeNo" 
                            label="Enter Employee ID No."
                            outlined 
                            :error="Errors.employeeNo.type"
                            :no-error-icon="true"
                        />
                    </div>
                    <div class="col-2">
                        <div class="q-mb-xs">
                            <span class="text-caption text-uppercase" :class="Errors.dateHired.msg ? 'text-negative' : 'text-grey'">{{ Errors.dateHired.msg ? Errors.dateHired.msg : 'date hired (YYYY-MM-DD)' }}</span>
                        </div>  
                        <q-input 
                            v-model="dateHired" 
                            outlined 
                            :error="Errors.dateHired.type"
                            :no-error-icon="true"
                            @update:model-value="formatDateHired"
                        />
                    </div>
                </div>
                <div class="q-mb-md">
                    <div class="q-mb-xs">
                        <span class="text-caption text-uppercase" :class="Errors.employmentstatus.msg ? 'text-negative' : 'text-grey'">{{ Errors.employmentstatus.msg ? Errors.employmentstatus.msg : 'employment status' }}</span>
                    </div>
                    <div class="q-gutter-sm">
                        <q-radio v-for="value in employmentstatuses" v-model="employmentstatus" checked-icon="task_alt" unchecked-icon="panorama_fish_eye" :val="value" :label="value" class="text-capitalize"/>
                    </div>
                </div>
                <div class="row q-col-gutter-xs q-mb-md">
                    <div class="col-2">
                        <div class="q-mb-xs">
                            <span class="text-caption text-uppercase" :class="Errors.companyId.msg ? 'text-negative' : 'text-grey'">{{ Errors.companyId.msg ? Errors.companyId.msg : 'company' }}</span>
                        </div>
                        <q-select
                            outlined
                            v-model="companyId"
                            label="Choose Company"
                            emit-value
                            map-options
                            use-input
                            input-debounce="300"
                            :options="filteredCompanies"
                            @filter="filterCompanyFn"
                            :error="Errors.companyId.type"
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
                    <div class="col-2">
                        <div class="q-mb-xs">
                            <span class="text-caption text-uppercase" :class="Errors.departmentId.msg ? 'text-negative' : 'text-grey'">{{ Errors.departmentId.msg ? Errors.departmentId.msg : 'department' }}</span>
                        </div>
                        <q-select
                            outlined
                            v-model="departmentId"
                            label="Choose Department"
                            emit-value
                            map-options
                            use-input
                            input-debounce="300"
                            :options="filteredDepartments"
                            @filter="filterDepartmentFn"
                            :error="Errors.departmentId.type"
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
                    <div class="col-2">
                        <div class="q-mb-xs">
                            <span class="text-caption text-uppercase" :class="Errors.scheduleId.msg ? 'text-negative' : 'text-grey'">{{ Errors.scheduleId.msg ? Errors.scheduleId.msg : 'Schedule' }}</span>
                        </div>
                        <q-select
                            outlined
                            v-model="scheduleId"
                            label="Choose Schedule"
                            emit-value
                            map-options
                            use-input
                            input-debounce="300"
                            :options="filteredSchedules"
                            @filter="filterScheduleFn"
                            :error="Errors.scheduleId.type"
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
                        <div class="q-mb-xs">
                            <span class="text-caption text-uppercase" :class="Errors.tin.msg ? 'text-negative' : 'text-grey'">{{ Errors.tin.msg ? Errors.tin.msg : 'TIN' }}</span>
                        </div>
                        <q-input 
                            v-model="tin" 
                            label="Enter TIN"
                            outlined 
                            :error="Errors.tin.type"
                            :no-error-icon="true"
                            class="text-capitalize"
                        />
                    </div>
                    <div class="col-2">
                        <div class="q-mb-xs">
                            <span class="text-caption text-uppercase" :class="Errors.sssNo.msg ? 'text-negative' : 'text-grey'">{{ Errors.sssNo.msg ? Errors.sssNo.msg : 'SSS no' }}</span>
                        </div>  
                        <q-input 
                            v-model="sssNo" 
                            label="Enter SSS No."
                            outlined 
                            :error="Errors.sssNo.type"
                            :no-error-icon="true"
                            class="text-capitalize"
                        />
                    </div>
                    <div class="col-2">
                        <div class="q-mb-xs">
                            <span class="text-caption text-uppercase" :class="Errors.philhealthNo.msg ? 'text-negative' : 'text-grey'">{{ Errors.philhealthNo.msg ? Errors.philhealthNo.msg : 'Philhealth No.' }}</span>
                        </div>  
                        <q-input 
                            v-model="philhealthNo"
                            label="Enter Philhealth No." 
                            outlined 
                            :error="Errors.philhealthNo.type"
                            :no-error-icon="true"
                            class="text-capitalize"
                        />
                    </div>
                    <div class="col-2">
                        <div class="q-mb-xs">
                            <span class="text-caption text-uppercase" :class="Errors.pagibigNo.msg ? 'text-negative' : 'text-grey'">{{ Errors.pagibigNo.msg ? Errors.pagibigNo.msg : 'pagibig no.' }}</span>
                        </div>  
                        <q-input 
                            v-model="pagibigNo" 
                            label="Enter Pagibig No."
                            outlined 
                            :error="Errors.pagibigNo.type"
                            :no-error-icon="true"
                            class="text-capitalize"
                        />
                    </div>
                </div>
                <div class="row q-col-gutter-xs q-mb-md">
                    <div class="col-2">
                        <div class="text-caption text-uppercase q-mb-xs" :class="Errors.taxstatus.msg ? 'text-negative' : 'text-grey'">{{ Errors.taxstatus.msg ? Errors.taxstatus.msg : 'tax status' }}</div>
                        <q-select
                            outlined
                            v-model="taxstatus"
                            label="Choose Tax Status"
                            use-input
                            input-debounce="300"
                            :options="taxstatuses"
                            :error="Errors.taxstatus.type"
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
                                        <q-item-label>{{ $CapitalizeWords(scope.opt) }}</q-item-label>
                                    </q-item-section>
                                </q-item>
                            </template>
                        </q-select>
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

const emit = defineEmits(['update:modelValue', 'saved'])

const isOpen = computed({
    get: () => props.modelValue === props.dialogName,
    set: (val) => {
        if (!val) emit('update:modelValue', null)
    }
})

const SubmitLoading = ref(false);

const employeeNo = ref('');
const dateHired = ref('');
const employmentstatus = ref('');
const companyId = ref('');
const departmentId = ref('');
const scheduleId = ref('');
const tin = ref('');
const sssNo = ref('');
const philhealthNo = ref('');
const pagibigNo = ref('');
const taxstatus = ref('');

const Errors = reactive({
    employeeNo: { type: null, msg: '' },
    dateHired: { type: null, msg: '' },
    employmentstatus: { type: null, msg: '' },
    companyId: { type: null, msg: '' },
    departmentId: { type: null, msg: '' },
    scheduleId: { type: null, msg: '' },
    tin: { type: null, msg: '' },
    sssNo: { type: null, msg: '' },
    philhealthNo: { type: null, msg: '' },
    pagibigNo: { type: null, msg: '' },
    taxstatus: { type: null, msg: null }
});

const Validations = () => {

    let isError = false;

    if (!dateHired.value) {
        Errors.dateHired.type = true;
        Errors.dateHired.msg = ('date hired is required');
        isError = true;
    } else {
        Errors.dateHired.type = null;
    }
    
    if (!employmentstatus.value) {
        Errors.employmentstatus.type = true;
        Errors.employmentstatus.msg = ('employment status is required');
        isError = true;
    } else {
        Errors.employmentstatus.type = null;
    }

    if (!companyId.value) {
        Errors.companyId.type = true;
        Errors.companyId.msg = ('company is required');
        isError = true;
    } else {
        Errors.companyId.type = null;
    }

    if (!departmentId.value) {
        Errors.departmentId.type = true;
        Errors.departmentId.msg = ('department is required');
        isError = true;
    } else {
        Errors.departmentId.type = null;
    }

    if (!scheduleId.value) {
        Errors.scheduleId.type = true;
        Errors.scheduleId.msg = ('schedule shift is required');
        isError = true;
    } else {
        Errors.scheduleId.type = null;
    }

    if (tin.value && tin.value.length > 15) {
        Errors.tin.type = true;
        Errors.tin.msg = ('TIN must not exceed 15 characters');
        isError = true;
    } else {
        Errors.tin.type = null;
    }

    if (sssNo.value && sssNo.value.length > 15) {
        Errors.sssNo.type = true;
        Errors.sssNo.msg = ('sss number must not exceed 15 characters');
        isError = true;
    } else {
        Errors.sssNo.type = null;
    }

    if (philhealthNo.value && philhealthNo.value.length > 15) {
        Errors.philhealthNo.type = true;
        Errors.philhealthNo.msg = ('philhealth number must not exceed 15 characters');
        isError = true;
    } else {
        Errors.philhealthNo.type = null;
    }

    if (pagibigNo.value && pagibigNo.value.length > 15) {
        Errors.pagibigNo.type = true;
        Errors.pagibigNo.msg = ('pagibig number must not exceed 15 characters');
        isError = true;
    } else {
        Errors.pagibigNo.type = null;
    }

    if (!taxstatus.value) {
        Errors.taxstatus.type = true;
        Errors.taxstatus.msg = ('tax status is required');
        isError = true;
    } else {
        Errors.taxstatus.type = null;
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

const formatDateHired = (val) => {
    if (!val) {
        dateHired.value = ''
        return
    }

    // keep digits only
    const digits = val.replace(/\D/g, '')

    let formatted = digits

    // YYYY-MM-DD
    if (digits.length > 4 && digits.length <= 6) {
        formatted = `${digits.slice(0, 4)}-${digits.slice(4)}`
    } else if (digits.length > 6) {
        formatted = `${digits.slice(0, 4)}-${digits.slice(4, 6)}-${digits.slice(6, 8)}`
    }

    dateHired.value = formatted
}


const employmentstatuses = ref(["Regular","Probationary","Contractual","Temporary","Intern"]);
const companies = ref([]);
const departments = ref([]);
const schedules = ref([]);
const taxstatuses = ref(['S', 'ME', 'S1', 'S2', 'S3', 'S4', 'ME1', 'ME2', 'ME3', 'ME4', 'Z']);

const filteredCompanies = ref([]);
const filteredDepartments = ref([]);
const filteredSchedules = ref([]);

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

const formatTime = (time) => {
    if (!time) return null
    const [h, m] = time.split(':')
    const hour = Number(h)
    const ampm = hour >= 12 ? 'PM' : 'AM'
    const hour12 = hour % 12 || 12
    return `${hour12}:${m}${ampm}`
}

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

const normalizeOptions = (data = []) => data.map(d => {
    const baseLabel = d.label ?? d.name ?? String(d.text ?? d.value ?? '')

    // Schedule with time range
    if (d.time_start && d.time_end) {
        const start = formatTime(d.time_start)
        const end = formatTime(d.time_end)

        return {
            label: `${baseLabel} (${start} - ${end})`,
            value: Number(d.value ?? d.id)
        }
    }

    // With amount (fees, salary, rates, etc)
    if (d.amount !== undefined && d.amount !== null) {
        const cost = formatCurrency(d.amount)

        return {
            label: `${baseLabel} (${cost})`,
            value: Number(d.value ?? d.id),
            status: d.status ?? null
        }
    }

    // Default
    return {
        label: baseLabel,
        value: Number(d.value ?? d.id),
        status: d.status ?? null
    }
})



const filterCompanyFn = createFilterFn(companies, filteredCompanies);
const filterDepartmentFn = createFilterFn(departments, filteredDepartments);
const filterScheduleFn = createFilterFn(schedules, filteredSchedules);

const LoadCompanies = async () => {
    try {
        const { data } = await api.get(`/employee/option/company`);
        companies.value = normalizeOptions(data)
        filteredCompanies.value = [...companies.value]
    } catch (error) {
        console.error("Error fetching options:", error);
    }
};

const LoadDepartments = async () => {
    try {
        const { data } = await api.get(`/employee/option/department`);
        departments.value = normalizeOptions(data)
        filteredDepartments.value = [...departments.value]
    } catch (error) {
        console.error("Error fetching options:", error);
    }
};

const LoadSchedules = async () => {
    try {
        const { data } = await api.get(`/employee/option/schedule`);
        schedules.value = normalizeOptions(data)
        filteredSchedules.value = [...schedules.value]
    } catch (error) {
        console.error("Error fetching options:", error);
    }
};

const PopulateData = () => {
    const app = EmployeeStore.data;
    LoadCompanies();
    LoadDepartments();
    LoadSchedules();
    employeeNo.value = app.employment?.employee_no;
    dateHired.value = app.employment?.date_hired;
    employmentstatus.value = app.employment.employment_status;
    companyId.value = Number(app.employment.company_id);
    departmentId.value = app.employment.department_id;
    scheduleId.value = app.employment.schedule_id;
    tin.value = app.employment.tin;
    sssNo.value = app.employment.sss_no;
    philhealthNo.value = app.employment.philhealth_no;
    pagibigNo.value = app.employment.pagibig_no;
    taxstatus.value = app.employment.tax_status;
}

const Save = async () => {
    if (!Validations()) return;
    SubmitLoading.value = true;
    try {
        const response = await api.post(`/employee/${EmployeeStore.data?.employment?.id}/employment`, {
            employeeNo: employeeNo.value,
            dateHired: dateHired.value,
            companyId: companyId.value,
            departmentId: departmentId.value,
            employmentstatus: employmentstatus.value,
            tin: tin.value,
            sssNo: sssNo.value,
            pagibigNo: pagibigNo.value,
            philhealthNo: philhealthNo.value,
            taxstatus: taxstatus.value
        });
        emit('saved');
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
</script>