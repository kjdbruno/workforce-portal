<template>
    <q-card-section class="col q-pa-lg scroll">
        <div class="q-mb-md">
            <span class="text-subtitle1 text-uppercase text-bold q-mr-sm">employment information</span>
        </div>
        <div class="row q-col-gutter-xs q-mb-md">
            <div class="col-3">
                <div class="q-mb-sm">
                    <span class="text-caption text-uppercase text-grey q-mr-sm">position/salary</span>
                </div>
                <q-input 
                    v-model="position" 
                    outlined 
                    :readonly="true"
                />
            </div>
        </div>
        <div class="row q-col-gutter-xs q-mb-md">
            <div class="col-3">
                <div class="q-mb-sm">
                    <span class="text-caption text-uppercase text-grey q-mr-sm">increment rate</span>
                </div>
                <q-input 
                    v-model="rate" 
                    outlined
                    :readonly="true"
                />
            </div>
        </div>
        <div class="row q-col-gutter-xs q-mb-md">
            <div class="col-2">
                <div class="q-mb-xs">
                    <span class="text-caption text-uppercase text-grey q-mr-sm">employee id no.</span>
                    <q-icon
                        :name="Errors.employeeNo.type ? 'error' : 'info'"
                        :color="Errors.employeeNo.type ? 'negative' : 'grey'"
                        class="cursor-pointer"
                        size="xs"
                    >
                        <q-tooltip anchor="top middle" self="center middle" :class="Errors.employeeNo.type ? 'bg-negative' : 'bg-grey'">
                            <template v-if="Errors.employeeNo.type">
                                <div 
                                    v-for="(msg, i) in Errors.employeeNo.messages" 
                                    :key="i" 
                                    class="text-capitalize"
                                >
                                    <q-icon name="error" color="white" size="xs" />&nbsp;{{ msg || 'Invalid input' }}
                                </div>
                            </template>
                            <template v-else>
                                <div class="text-capitalize">
                                    <q-icon name="info" color="white" size="xs" />&nbsp;Optional
                                </div>
                            </template>
                        </q-tooltip>
                    </q-icon>
                </div>
                <q-input 
                    v-model="employeeNo" 
                    outlined 
                    :error="Errors.employeeNo.type"
                    :no-error-icon="true"
                    :readonly="true"
                />
            </div>
            <div class="col-2">
                <div class="q-mb-xs">
                    <span class="text-caption text-uppercase text-grey q-mr-sm">date hired</span>
                    <q-icon
                        :name="Errors.dateHired.type ? 'error' : 'info'"
                        :color="Errors.dateHired.type ? 'negative' : 'grey'"
                        class="cursor-pointer"
                        size="xs"
                    >
                        <q-tooltip anchor="top middle" self="center middle" :class="Errors.dateHired.type ? 'bg-negative' : 'bg-grey'">
                            <template v-if="Errors.dateHired.type">
                                <div 
                                    v-for="(msg, i) in Errors.dateHired.messages" 
                                    :key="i" 
                                    class="text-capitalize"
                                >
                                    <q-icon name="error" color="white" size="xs" />&nbsp;{{ msg || 'Invalid input' }}
                                </div>
                            </template>
                            <template v-else>
                                <div class="text-capitalize">
                                    <q-icon name="info" color="white" size="xs" />&nbsp;Required
                                </div>
                            </template>
                        </q-tooltip>
                    </q-icon>
                </div>  
                <q-input 
                    v-model="dateHired" 
                    outlined 
                    :error="Errors.dateHired.type"
                    :no-error-icon="true"
                    type="date"
                />
            </div>
        </div>
        <div class="row q-col-gutter-xs q-mb-md">
            <div class="col-2">
                <div class="q-mb-xs">
                    <span class="text-caption text-uppercase text-grey q-mr-sm">select employment status</span>
                    <q-icon
                        :name="Errors.employmentId.type ? 'error' : 'info'"
                        :color="Errors.employmentId.type ? 'negative' : 'grey'"
                        class="cursor-pointer"
                        size="xs"
                    >
                        <q-tooltip anchor="top middle" self="center middle" :class="Errors.employmentId.type ? 'bg-negative' : 'bg-grey'">
                            <template v-if="Errors.employmentId.type">
                                <div 
                                    v-for="(msg, i) in Errors.employmentId.messages" 
                                    :key="i" 
                                    class="text-capitalize"
                                >
                                    <q-icon name="error" color="white" size="xs" />&nbsp;{{ msg || 'Invalid input' }}
                                </div>
                            </template>
                            <template v-else>
                                <div class="text-capitalize">
                                    <q-icon name="info" color="white" size="xs" />&nbsp;Required
                                </div>
                            </template>
                        </q-tooltip>
                    </q-icon>
                </div>
                <q-select
                    outlined
                    v-model="employmentId"
                    emit-value
                    map-options
                    use-input
                    input-debounce="300"
                    :options="filteredEmploymentStatuses"
                    @filter="filterEmploymentStatusFn"
                    :error="Errors.employmentId.type"
                    dropdown-icon="keyboard_arrow_down"
                    :no-error-icon="true"
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
                    <span class="text-caption text-uppercase text-grey q-mr-sm">select appointment status</span>
                    <q-icon
                        :name="Errors.appointmentId.type ? 'error' : 'info'"
                        :color="Errors.appointmentId.type ? 'negative' : 'grey'"
                        class="cursor-pointer"
                        size="xs"
                    >
                        <q-tooltip anchor="top middle" self="center middle" :class="Errors.appointmentId.type ? 'bg-negative' : 'bg-grey'">
                            <template v-if="Errors.appointmentId.type">
                                <div 
                                    v-for="(msg, i) in Errors.appointmentId.messages" 
                                    :key="i" 
                                    class="text-capitalize"
                                >
                                    <q-icon name="error" color="white" size="xs" />&nbsp;{{ msg || 'Invalid input' }}
                                </div>
                            </template>
                            <template v-else>
                                <div class="text-capitalize">
                                    <q-icon name="info" color="white" size="xs" />&nbsp;Required
                                </div>
                            </template>
                        </q-tooltip>
                    </q-icon>
                </div>
                <q-select
                    outlined
                    v-model="appointmentId"
                    emit-value
                    map-options
                    use-input
                    input-debounce="300"
                    :options="filteredAppointmentStatuses"
                    @filter="filterAppointmentStatusFn"
                    :error="Errors.appointmentId.type"
                    dropdown-icon="keyboard_arrow_down"
                    :no-error-icon="true"
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
                    <span class="text-caption text-uppercase text-grey q-mr-sm">select company</span>
                    <q-icon
                        :name="Errors.companyId.type ? 'error' : 'info'"
                        :color="Errors.companyId.type ? 'negative' : 'grey'"
                        class="cursor-pointer"
                        size="xs"
                    >
                        <q-tooltip anchor="top middle" self="center middle" :class="Errors.companyId.type ? 'bg-negative' : 'bg-grey'">
                            <template v-if="Errors.companyId.type">
                                <div 
                                    v-for="(msg, i) in Errors.companyId.messages" 
                                    :key="i" 
                                    class="text-capitalize"
                                >
                                    <q-icon name="error" color="white" size="xs" />&nbsp;{{ msg || 'Invalid input' }}
                                </div>
                            </template>
                            <template v-else>
                                <div class="text-capitalize">
                                    <q-icon name="info" color="white" size="xs" />&nbsp;Required
                                </div>
                            </template>
                        </q-tooltip>
                    </q-icon>
                </div>
                <q-select
                    outlined
                    v-model="companyId"
                    emit-value
                    map-options
                    use-input
                    input-debounce="300"
                    :options="filteredCompanies"
                    @filter="filterCompanyFn"
                    :error="Errors.companyId.type"
                    dropdown-icon="keyboard_arrow_down"
                    :no-error-icon="true"
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
                    <span class="text-caption text-uppercase text-grey q-mr-sm">select department</span>
                    <q-icon
                        :name="Errors.departmentId.type ? 'error' : 'info'"
                        :color="Errors.departmentId.type ? 'negative' : 'grey'"
                        class="cursor-pointer"
                        size="xs"
                    >
                        <q-tooltip anchor="top middle" self="center middle" :class="Errors.departmentId.type ? 'bg-negative' : 'bg-grey'">
                            <template v-if="Errors.departmentId.type">
                                <div 
                                    v-for="(msg, i) in Errors.departmentId.messages" 
                                    :key="i" 
                                    class="text-capitalize"
                                >
                                    <q-icon name="error" color="white" size="xs" />&nbsp;{{ msg || 'Invalid input' }}
                                </div>
                            </template>
                            <template v-else>
                                <div class="text-capitalize">
                                    <q-icon name="info" color="white" size="xs" />&nbsp;Required
                                </div>
                            </template>
                        </q-tooltip>
                    </q-icon>
                </div>
                <q-select
                    outlined
                    v-model="departmentId"
                    emit-value
                    map-options
                    use-input
                    input-debounce="300"
                    :options="filteredDepartments"
                    @filter="filterDepartmentFn"
                    :error="Errors.departmentId.type"
                    dropdown-icon="keyboard_arrow_down"
                    :no-error-icon="true"
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
                    <span class="text-caption text-uppercase text-grey q-mr-sm">select schedule</span>
                    <q-icon
                        :name="Errors.shiftId.type ? 'error' : 'info'"
                        :color="Errors.shiftId.type ? 'negative' : 'grey'"
                        class="cursor-pointer"
                        size="xs"
                    >
                        <q-tooltip anchor="top middle" self="center middle" :class="Errors.shiftId.type ? 'bg-negative' : 'bg-grey'">
                            <template v-if="Errors.shiftId.type">
                                <div 
                                    v-for="(msg, i) in Errors.shiftId.messages" 
                                    :key="i" 
                                    class="text-capitalize"
                                >
                                    <q-icon name="error" color="white" size="xs" />&nbsp;{{ msg || 'Invalid input' }}
                                </div>
                            </template>
                            <template v-else>
                                <div class="text-capitalize">
                                    <q-icon name="info" color="white" size="xs" />&nbsp;Required
                                </div>
                            </template>
                        </q-tooltip>
                    </q-icon>
                </div>
                <q-select
                    outlined
                    v-model="shiftId"
                    emit-value
                    map-options
                    use-input
                    input-debounce="300"
                    :options="filteredSchedules"
                    @filter="filterScheduleFn"
                    :error="Errors.shiftId.type"
                    dropdown-icon="keyboard_arrow_down"
                    :no-error-icon="true"
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
                    <span class="text-caption text-uppercase text-grey q-mr-sm">tin</span>
                    <q-icon
                        :name="Errors.tin.type ? 'error' : 'info'"
                        :color="Errors.tin.type ? 'negative' : 'grey'"
                        class="cursor-pointer"
                        size="xs"
                    >
                        <q-tooltip anchor="top middle" self="center middle" :class="Errors.tin.type ? 'bg-negative' : 'bg-grey'">
                            <template v-if="Errors.tin.type">
                                <div 
                                    v-for="(msg, i) in Errors.tin.messages" 
                                    :key="i" 
                                    class="text-capitalize"
                                >
                                    <q-icon name="error" color="white" size="xs" />&nbsp;{{ msg || 'Invalid input' }}
                                </div>
                            </template>
                            <template v-else>
                                <div class="text-capitalize">
                                    <q-icon name="info" color="white" size="xs" />&nbsp;Optional
                                </div>
                            </template>
                        </q-tooltip>
                    </q-icon>
                </div>
                <q-input 
                    v-model="tin" 
                    outlined 
                    :error="Errors.tin.type"
                    :no-error-icon="true"
                />
            </div>
            <div class="col-2">
                <div class="q-mb-xs">
                    <span class="text-caption text-uppercase text-grey q-mr-sm">sss no.</span>
                    <q-icon
                        :name="Errors.sssNo.type ? 'error' : 'info'"
                        :color="Errors.sssNo.type ? 'negative' : 'grey'"
                        class="cursor-pointer"
                        size="xs"
                    >
                        <q-tooltip anchor="top middle" self="center middle" :class="Errors.sssNo.type ? 'bg-negative' : 'bg-grey'">
                            <template v-if="Errors.sssNo.type">
                                <div 
                                    v-for="(msg, i) in Errors.sssNo.messages" 
                                    :key="i" 
                                    class="text-capitalize"
                                >
                                    <q-icon name="error" color="white" size="xs" />&nbsp;{{ msg || 'Invalid input' }}
                                </div>
                            </template>
                            <template v-else>
                                <div class="text-capitalize">
                                    <q-icon name="info" color="white" size="xs" />&nbsp;Optional
                                </div>
                            </template>
                        </q-tooltip>
                    </q-icon>
                </div>  
                <q-input 
                    v-model="sssNo" 
                    outlined 
                    :error="Errors.sssNo.type"
                    :no-error-icon="true"
                />
            </div>
            <div class="col-2">
                <div class="q-mb-xs">
                    <span class="text-caption text-uppercase text-grey q-mr-sm">philhealth no.</span>
                    <q-icon
                        :name="Errors.philhealthNo.type ? 'error' : 'info'"
                        :color="Errors.philhealthNo.type ? 'negative' : 'grey'"
                        class="cursor-pointer"
                        size="xs"
                    >
                        <q-tooltip anchor="top middle" self="center middle" :class="Errors.philhealthNo.type ? 'bg-negative' : 'bg-grey'">
                            <template v-if="Errors.philhealthNo.type">
                                <div 
                                    v-for="(msg, i) in Errors.philhealthNo.messages" 
                                    :key="i" 
                                    class="text-capitalize"
                                >
                                    <q-icon name="error" color="white" size="xs" />&nbsp;{{ msg || 'Invalid input' }}
                                </div>
                            </template>
                            <template v-else>
                                <div class="text-capitalize">
                                    <q-icon name="info" color="white" size="xs" />&nbsp;Optional
                                </div>
                            </template>
                        </q-tooltip>
                    </q-icon>
                </div>  
                <q-input 
                    v-model="philhealthNo" 
                    outlined 
                    :error="Errors.philhealthNo.type"
                    :no-error-icon="true"
                />
            </div>
            <div class="col-2">
                <div class="q-mb-xs">
                    <span class="text-caption text-uppercase text-grey q-mr-sm">pagibig no.</span>
                    <q-icon
                        :name="Errors.pagibigNo.type ? 'error' : 'info'"
                        :color="Errors.pagibigNo.type ? 'negative' : 'grey'"
                        class="cursor-pointer"
                        size="xs"
                    >
                        <q-tooltip anchor="top middle" self="center middle" :class="Errors.pagibigNo.type ? 'bg-negative' : 'bg-grey'">
                            <template v-if="Errors.pagibigNo.type">
                                <div 
                                    v-for="(msg, i) in Errors.pagibigNo.messages" 
                                    :key="i" 
                                    class="text-capitalize"
                                >
                                    <q-icon name="error" color="white" size="xs" />&nbsp;{{ msg || 'Invalid input' }}
                                </div>
                            </template>
                            <template v-else>
                                <div class="text-capitalize">
                                    <q-icon name="info" color="white" size="xs" />&nbsp;Optional
                                </div>
                            </template>
                        </q-tooltip>
                    </q-icon>
                </div>  
                <q-input 
                    v-model="pagibigNo" 
                    outlined 
                    :error="Errors.pagibigNo.type"
                    :no-error-icon="true"
                />
            </div>
            <div class="col-2">
                <div class="q-mb-xs">
                    <span class="text-caption text-uppercase text-grey q-mr-sm">select tax code</span>
                    <q-icon
                        :name="Errors.taxCodeId.type ? 'error' : 'info'"
                        :color="Errors.taxCodeId.type ? 'negative' : 'grey'"
                        class="cursor-pointer"
                        size="xs"
                    >
                        <q-tooltip anchor="top middle" self="center middle" :class="Errors.taxCodeId.type ? 'bg-negative' : 'bg-grey'">
                            <template v-if="Errors.taxCodeId.type">
                                <div 
                                    v-for="(msg, i) in Errors.taxCodeId.messages" 
                                    :key="i" 
                                    class="text-capitalize"
                                >
                                    <q-icon name="error" color="white" size="xs" />&nbsp;{{ msg || 'Invalid input' }}
                                </div>
                            </template>
                            <template v-else>
                                <div class="text-capitalize">
                                    <q-icon name="info" color="white" size="xs" />&nbsp;Required
                                </div>
                            </template>
                        </q-tooltip>
                    </q-icon>
                </div>
                <q-select
                    outlined
                    v-model="taxCodeId"
                    emit-value
                    map-options
                    use-input
                    input-debounce="300"
                    :options="filteredTaxCodes"
                    @filter="filterTaxCodeFn"
                    :error="Errors.taxCodeId.type"
                    dropdown-icon="keyboard_arrow_down"
                    :no-error-icon="true"
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
    </q-card-section>
    <q-card-actions class="q-pa-lg">
        <div class="q-gutter-sm">
            <q-btn unelevated size="md" color="primary" class="btn text-capitalize" label="save" @click="Save()"/>
            <q-btn unelevated size="md" color="primary" class="btn text-capitalize" label="discard" v-close-popup outline/>
        </div>
    </q-card-actions>
</template>

<script setup>
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

import { useAuthStore } from 'src/stores/auth-store';

import { useEmployeeStore } from 'src/stores/employee-store';

const EmployeeStore = useEmployeeStore();

const AuthStore = useAuthStore();

const position = ref('');
const rate = ref('');
const employeeNo = ref('');
const dateHired = ref('');
const tin = ref('');
const sssNo = ref('');
const philhealthNo = ref('');
const pagibigNo = ref('');
const taxCodeId = ref('');
const shiftId = ref('');
const companyId = ref('');
const departmentId = ref('');
const employmentId = ref('');
const appointmentId = ref('');

const Errors = reactive({
    employeeNo: { type: null, messages: [] },
    dateHired: { type: null, messages: [] },
    tin: { type: null, messages: [] },
    sssNo: { type: null, messages: [] },
    philhealthNo: { type: null, messages: [] },
    pagibigNo: { type: null, messages: [] },
    taxCodeId: { type: null, messages: [] },
    companyId: { type: null, messages: [] },
    departmentId: { type: null, messages: [] },
    employmentId: { type: null, messages: [] },
    appointmentId: { type: null, messages: [] },
    shiftId: { type: null, messages: [] },
});

const Validations = () => {

    let isError = false;

    Object.keys(Errors).forEach(key => {
        Errors[key].type = null;
        Errors[key].messages = [];
    });

    if (!dateHired.value) {
        Errors.dateHired.type = true;
        Errors.dateHired.messages.push('date hired is required');
        isError = true;
    } else {
        Errors.dateHired.type = null;
    }

    if (!companyId.value) {
        Errors.companyId.type = true;
        Errors.companyId.messages.push('company is required');
        isError = true;
    } else {
        Errors.companyId.type = null;
    }

    if (!departmentId.value) {
        Errors.departmentId.type = true;
        Errors.departmentId.messages.push('department is required');
        isError = true;
    } else {
        Errors.departmentId.type = null;
    }

    if (!employmentId.value) {
        Errors.employmentId.type = true;
        Errors.employmentId.messages.push('employment status is required');
        isError = true;
    } else {
        Errors.employmentId.type = null;
    }

    if (!appointmentId.value) {
        Errors.appointmentId.type = true;
        Errors.appointmentId.messages.push('appointment status is required');
        isError = true;
    } else {
        Errors.appointmentId.type = null;
    }

    if (tin.value && tin.value.length > 15) {
        Errors.tin.type = true;
        Errors.tin.messages.push('TIN must not exceed 15 characters');
        isError = true;
    } else {
        Errors.tin.type = null;
    }

    if (sssNo.value && sssNo.value.length > 15) {
        Errors.sssNo.type = true;
        Errors.sssNo.messages.push('sss number must not exceed 15 characters');
        isError = true;
    } else {
        Errors.sssNo.type = null;
    }

    if (philhealthNo.value && philhealthNo.value.length > 15) {
        Errors.philhealthNo.type = true;
        Errors.philhealthNo.messages.push('philhealth number must not exceed 15 characters');
        isError = true;
    } else {
        Errors.philhealthNo.type = null;
    }

    if (pagibigNo.value && pagibigNo.value.length > 15) {
        Errors.pagibigNo.type = true;
        Errors.pagibigNo.messages.push('pagibig number must not exceed 15 characters');
        isError = true;
    } else {
        Errors.pagibigNo.type = null;
    }

    if (!taxCodeId.value) {
        Errors.taxCodeId.type = true;
        Errors.taxCodeId.messages.push('tax code is required');
        isError = true;
    } else {
        Errors.taxCodeId.type = null;
    }

    if (!shiftId.value) {
        Errors.shiftId.type = true;
        Errors.shiftId.messages.push('schedule is required');
        isError = true;
    } else {
        Errors.shiftId.type = null;
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

const LoadEmployment = async () => {
    EmployeeStore.loading = true;
    try {
        const response = await api.get(`/employee/employment/${EmployeeStore.profileId}`);
        const data = response.data.data;
        companyId.value = Number(data.companyId);
        departmentId.value = Number(data.departmentId);
        shiftId.value = Number(data.shiftId);
        employmentId.value = Number(data.employmentId);
        appointmentId.value = Number(data.appointmentId);
        position.value = data?.salary?.positions?.name;
        rate.value = data?.rate?.monthlyCompensation;
        taxCodeId.value = Number(data.taxCodeId);
        employeeNo.value = data.employeeNo;
        dateHired.value = data.dateHired;
        tin.value = data.tin;
        sssNo.value = data.sssNo;
        pagibigNo.value = data.pagibigNo;
        philhealthNo.value = data.philhealthNo;
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
        EmployeeStore.loading = false;
    }
}

watch(
    () => EmployeeStore.saveEventCounter,
    () => {
        if (EmployeeStore.subComponent === 'EmployeeEmploymentComponent') {
            Save();
        }
    }
);

const Save = async () => {
    if (!Validations()) return;
    EmployeeStore.loading = true;
    try {
        const response = await api.post(`/employee/employment/${EmployeeStore.employment.id}/update`, {
            dateHired: dateHired.value,
            tin: tin.value,
            sssNo: sssNo.value,
            philhealthNo: philhealthNo.value,
            pagibigNo: pagibigNo.value,
            taxCodeId: taxCodeId.value,
            shiftId: shiftId.value,
            companyId: companyId.value,
            departmentId: departmentId.value,
            employmentId: employmentId.value,
            appointmentId: appointmentId.value
        });
        UpdateEmployment(response.data.data)
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
        EmployeeStore.loading = false;
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

const UpdateEmployment = (data) => {
    companyId.value = Number(data.companyId);
    departmentId.value = Number(data.departmentId);
    shiftId.value = Number(data.shiftId);
    employmentId.value = Number(data.employmentId);
    appointmentId.value = Number(data.appointmentId);
    position.value = data?.salary?.positions?.name;
    rate.value = data?.rate?.monthlyCompensation;
    taxCodeId.value = Number(data.taxCodeId);
    employeeNo.value = data.employeeNo;
    dateHired.value = data.dateHired;
    tin.value = data.tin;
    sssNo.value = data.sssNo;
    pagibigNo.value = data.pagibigNo;
    philhealthNo.value = data.philhealthNo;
}

const taxcodes = ref([]);
const companies = ref([]);
const departments = ref([]);
const schedules = ref([]);
const appointmentstatuses = ref([]);
const employmentstatuses = ref([]);
const salaries = ref([]);
const rates = ref([]);

const filteredTaxCodes = ref([]);
const filteredCompanies = ref([]);
const filteredDepartments = ref([]);
const filteredSchedules = ref([]);
const filteredEmploymentStatuses = ref([]);
const filteredAppointmentStatuses = ref([]);

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

const normalizeOptions = data => data.map(d => ({
    label: d.label ?? d.name ?? String(d.text ?? d.value),
    value: Number(d.value ?? d.id)
}))

const filterTaxCodeFn = createFilterFn(taxcodes, filteredTaxCodes);
const filterCompanyFn = createFilterFn(companies, filteredCompanies);
const filterDepartmentFn = createFilterFn(departments, filteredDepartments);
const filterScheduleFn = createFilterFn(schedules, filteredSchedules);
const filterEmploymentStatusFn = createFilterFn(employmentstatuses, filteredEmploymentStatuses);
const filterAppointmentStatusFn = createFilterFn(appointmentstatuses, filteredAppointmentStatuses);

const LoadTaxCodes = async () => {
    try {
        const { data } = await api.get(`/option/taxcodes`);
        taxcodes.value = normalizeOptions(data)
        filteredTaxCodes.value = [...taxcodes.value]
    } catch (error) {
        console.error("Error fetching options:", error);
    }
};

const LoadCompanies = async () => {
    try {
        const { data } = await api.get(`/option/companies`);
        companies.value = normalizeOptions(data)
        filteredCompanies.value = [...companies.value]
    } catch (error) {
        console.error("Error fetching options:", error);
    }
};

const LoadDepartments = async () => {
    try {
        const { data } = await api.get(`/option/departments`);
        departments.value = normalizeOptions(data)
        filteredDepartments.value = [...departments.value]
    } catch (error) {
        console.error("Error fetching options:", error);
    }
};

const LoadRecruitmentSchedules = async () => {
    try {
        const { data } = await api.get(`/option/recruitmentschedules`);
        schedules.value = normalizeOptions(data)
        filteredSchedules.value = [...schedules.value]
    } catch (error) {
        console.error("Error fetching options:", error);
    }
};

const LoadEmploymentStatuses = async () => {
    try {
        const { data } = await api.get(`/option/employmentstatuses`);
        employmentstatuses.value = normalizeOptions(data)
        filteredEmploymentStatuses.value = [...employmentstatuses.value]
    } catch (error) {
        console.error("Error fetching options:", error);
    }
};

const LoadAppointmentStatuses = async () => {
    try {
        const { data } = await api.get(`/option/appointmentstatuses`);
        appointmentstatuses.value = normalizeOptions(data)
        filteredAppointmentStatuses.value = [...appointmentstatuses.value]
    } catch (error) {
        console.error("Error fetching options:", error);
    }
};

onBeforeMount(() => {
    LoadAppointmentStatuses();
    LoadEmploymentStatuses();
    LoadRecruitmentSchedules();
    LoadDepartments();
    LoadCompanies();
    LoadTaxCodes();
});

onMounted(() => {
    LoadEmployment();
})
</script>