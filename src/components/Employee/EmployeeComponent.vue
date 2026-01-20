<template>
    <div>
        <div class="card-grid">
            <div class="card-anim-wrapper">
                <q-card key="data-add" class="card card-hover-animate flex flex-center q-pa-md no-shadow cursor-pointer radius-sm" v-ripple @click="() => { modal = true}" >
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
            <div v-for="(data, index) in rows" :key="`data-${data.id}`" class="card-anim-wrapper" :style="{ animationDelay: `${index * 120}ms` }" >
                <q-card @click="() => { EmployeeStore.component = 'ProfileComponent'; EmployeeStore.data = data; }" class="card card-hover-animate flex flex-center q-pa-md no-shadow cursor-pointer radius-sm" >
                    <q-card-section class="text-center full-width">
                        <div class="text-caption text-uppercase">{{ data?.employment?.employee_no }}</div>
                        <div class="text-subtitle2 text-uppercase">{{ formatName(data) }}</div>
                    </q-card-section>
                    <q-card-section class="full-width">
                        <div class="text-caption text-uppercase">{{ data?.employment?.position?.name }}</div>
                        <div class="text-caption text-grey">{{ data?.employment?.employment_status }}</div>
                        <div class="text-caption text-grey text-italic">{{ formatCurrency(data?.employment?.position?.amount) }}</div>
                    </q-card-section>
                </q-card>
            </div>
        </div>
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
        <q-dialog v-model="modal" full-height position="right" persistent square class="dialog" @before-show="ShowModal()">
            <q-card class="dialog-card column full-height">
                <q-card-section class="q-pa-lg">
                    <div class="text-h6 text-uppercase">new employee</div>
                </q-card-section>
                <q-separator inset />
                <q-card-section class="col q-pa-lg scroll">
                    <div class="q-mb-xl">
                        <div class="q-mb-sm">
                            <span class="text-caption text-uppercase text-grey q-mr-sm">choose hired applicant</span>
                        </div>
                        <div class="card-grid">
                            <div v-if="applicants.length === 0" class="inner-card-anim-wrapper" :style="{ animationDelay: `${index * 120}ms` }" >
                                <q-card class="card card-hover-animate flex flex-center q-pa-md no-shadow cursor-pointer radius-sm" tag="label" >
                                    <q-card-section class="text-center full-width">
                                        <div>
                                            <q-icon name="error" color="grey" size="lg"/>
                                        </div>
                                        <div class="text-caption text-capitalize text-grey">no hired applicant</div>
                                    </q-card-section>
                                </q-card>
                            </div>
                            <div v-for="(data, index) in applicants" :key="`data-${data.id}`" class="inner-card-anim-wrapper" :style="{ animationDelay: `${index * 120}ms` }" >
                                <q-card class="card card-hover-animate flex flex-center q-pa-md no-shadow cursor-pointer radius-sm" tag="label" :class="{ 'card--active': applicant === data }" @click="() => { applicant = data; PopulateData(data) }">
                                    <q-card-section class="text-center full-width">
                                        <div class="text-subtitle1 text-uppercase">{{ formatName(data) }}</div>
                                    </q-card-section>
                                    <div class="checkmark-overlay">
                                        <q-radio v-model="applicant" :val="data" checked-icon="task_alt" unchecked-icon="panorama_fish_eye" size="md"/>
                                    </div>
                                </q-card>
                            </div>
                        </div>
                    </div>
                    <div class="text-overline text-uppercase text-bold q-mb-md">personal information</div>
                    <div class="row q-col-gutter-xs q-mb-md">
                        <div class="col-3">
                            <div class="q-mb-xs">
                                <span class="text-caption text-uppercase" :class="Errors.firstname.msg ? 'text-negative' : 'text-grey'">{{ Errors.firstname.msg ? Errors.firstname.msg : 'firstname' }}</span>
                            </div>
                            <q-input 
                                v-model="firstname" 
                                label="Enter Firstname"
                                outlined 
                                :error="Errors.firstname.type"
                                :no-error-icon="true"
                                input-class="text-capitalize"
                            />
                        </div>
                        <div class="col-3">
                            <div class="q-mb-xs">
                                <span class="text-caption text-uppercase" :class="Errors.middlename.msg ? 'text-negative' : 'text-grey'">{{ Errors.middlename.msg ? Errors.middlename.msg : 'middlename' }}</span>
                            </div>
                            <q-input 
                                v-model="middlename" 
                                label="Enter Middlename"
                                outlined 
                                :error="Errors.middlename.type"
                                :no-error-icon="true"
                                input-class="text-capitalize"
                            />
                        </div>
                        <div class="col-3">
                            <div class="q-mb-xs">
                                <span class="text-caption text-uppercase" :class="Errors.lastname.msg ? 'text-negative' : 'text-grey'">{{ Errors.lastname.msg ? Errors.lastname.msg : 'lastname' }}</span>
                            </div>
                            <q-input 
                                v-model="lastname"
                                label="Enter Lastname" 
                                outlined 
                                :error="Errors.lastname.type"
                                :no-error-icon="true"
                                input-class="text-capitalize"
                            />
                        </div>
                        <div class="col-1">
                            <div class="q-mb-xs">
                                <span class="text-caption text-uppercase" :class="Errors.suffix.msg ? 'text-negative' : 'text-grey'">{{ Errors.suffix.msg ? Errors.suffix.msg : 'suffix' }}</span>
                            </div>
                            <q-input 
                                v-model="suffix" 
                                label="Enter Suffix"
                                outlined 
                                :error="Errors.suffix.type"
                                :no-error-icon="true"
                                input-class="text-capitalize"
                            />
                        </div>
                    </div>
                    <div class="q-mb-md">
                        <div class="q-mb-xs">
                            <span class="text-caption text-uppercase" :class="Errors.sex.msg ? 'text-negative' : 'text-grey'">{{ Errors.sex.msg ? Errors.sex.msg : 'sex' }}</span>
                        </div>
                        <div class="q-gutter-sm">
                            <q-radio v-for="value in sexes" v-model="sex" checked-icon="task_alt" unchecked-icon="panorama_fish_eye" :val="value" :label="value" />
                        </div>
                    </div>
                    <div class="q-mb-md">
                        <div class="q-mb-xs">
                            <span class="text-caption text-uppercase" :class="Errors.bloodtype.msg ? 'text-negative' : 'text-grey'">{{ Errors.bloodtype.msg ? Errors.bloodtype.msg : 'blood type' }}</span>
                        </div>
                        <div class="q-gutter-sm">
                            <q-radio v-for="value in bloodtypes" v-model="bloodtype" checked-icon="task_alt" unchecked-icon="panorama_fish_eye" :val="value" :label="value" />
                        </div>
                    </div>
                    <div class="q-mb-md">
                        <div class="q-mb-xs">
                            <span class="text-caption text-uppercase" :class="Errors.civilstatus.msg ? 'text-negative' : 'text-grey'">{{ Errors.civilstatus.msg ? Errors.civilstatus.msg : 'civil status' }}</span>
                        </div>
                        <div class="q-gutter-sm">
                            <q-radio v-for="value in civilstatuses" v-model="civilstatus" checked-icon="task_alt" unchecked-icon="panorama_fish_eye" :val="value" :label="value" />
                        </div>
                    </div>
                    <div class="row q-col-gutter-xs q-mb-md">
                        <div class="col-2">
                            <div class="q-mb-xs">
                                <span class="text-caption text-uppercase" :class="Errors.birthdate.msg ? 'text-negative' : 'text-grey'">{{ Errors.birthdate.msg ? Errors.birthdate.msg : 'birthdate (YYYY-MM-DD)' }}</span>
                            </div>
                            <q-input outlined v-model="birthdate" label="Enter Birthdate">
                                <q-popup-proxy cover transition-show="scale" transition-hide="scale" ref="popup" class="no-shadow custom-border radius-sm">
                                    <q-date v-model="birthdate" mask="YYYY-MM-DD" @update:model-value="() => { popup.hide() }" />
                                </q-popup-proxy>
                            </q-input>
                        </div>
                        <div class="col-4">
                            <div class="q-mb-xs">
                                <span class="text-caption text-uppercase" :class="Errors.birthplace.msg ? 'text-negative' : 'text-grey'">{{ Errors.birthplace.msg ? Errors.birthplace.msg : 'birthplace' }}</span>
                            </div>
                            <q-input 
                                v-model="birthplace" 
                                label="Enter Birthplace"
                                outlined 
                                :error="Errors.birthplace.type"
                                :no-error-icon="true"
                                input-class="text-capitalize"
                            />
                        </div>
                    </div>
                    <div class="row q-col-gutter-xs q-mb-md">
                        <div class="col-6">
                            <div class="q-mb-xs">
                                <span class="text-caption text-uppercase" :class="Errors.address.msg ? 'text-negative' : 'text-grey'">{{ Errors.address.msg ? Errors.address.msg : 'address' }}</span>
                            </div>
                            <div class="q-gutter-sm">
                                <q-input 
                                    v-model="address" 
                                    label="Enter Address"
                                    outlined 
                                    :error="Errors.address.type"
                                    :no-error-icon="true"
                                    input-class="text-capitalize"
                                />
                            </div>
                        </div>
                    </div>
                    <div class="row q-col-gutter-xs q-mb-md">
                        <div class="col-2">
                            <div class="q-mb-xs">
                                <span class="text-caption text-uppercase" :class="Errors.email.msg ? 'text-negative' : 'text-grey'">{{ Errors.email.msg ? Errors.email.msg : 'email address' }}</span>
                            </div>
                            <q-input 
                                v-model="email" 
                                label="Enter Email Address"
                                outlined 
                                :error="Errors.email.type"
                                :no-error-icon="true"
                            />
                        </div>
                        <div class="col-2">
                            <div class="q-mb-xs">
                                <span class="text-caption text-uppercase" :class="Errors.contactNo.msg ? 'text-negative' : 'text-grey'">{{ Errors.contactNo.msg ? Errors.contactNo.msg : 'contact number' }}</span>
                            </div>
                            <q-input 
                                v-model="contactNo"
                                label="Enter Contact No." 
                                outlined 
                                :error="Errors.contactNo.type"
                                :no-error-icon="true"
                            />
                        </div>
                    </div>
                    <div class="q-mb-sm q-mt-xl">
                        <span class="text-overline text-uppercase text-bold q-mr-sm">employment information</span>
                    </div>
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
                            <q-input outlined v-model="dateHired" label="Enter Date Hired">
                                <q-popup-proxy cover transition-show="scale" transition-hide="scale" ref="popup" class="no-shadow custom-border radius-sm">
                                    <q-date v-model="dateHired" mask="YYYY-MM-DD" @update:model-value="() => { popup.hide() }" />
                                </q-popup-proxy>
                            </q-input>
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
                        <div class="col-2">
                            <div class="q-mb-xs">
                                <span class="text-caption text-uppercase" :class="Errors.positionId.msg ? 'text-negative' : 'text-grey'">{{ Errors.positionId.msg ? Errors.positionId.msg : 'Position' }}</span>
                            </div>
                            <q-select
                                outlined
                                v-model="positionId"
                                label="Choose Position"
                                emit-value
                                map-options
                                use-input
                                input-debounce="300"
                                :options="filteredPositions"
                                @filter="filterPositionFn"
                                :error="Errors.positionId.type"
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
                                    <q-item v-bind="scope.itemProps" :disable="scope.opt.status !== 'Vacant'">
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
                    <div class="q-mb-sm q-mt-xl">
                        <span class="text-overline text-uppercase text-bold q-mr-sm">salary schedule</span>
                    </div>
                    <div class="q-mb-md">
                        <div class="q-mb-xs">
                            <span class="text-caption text-uppercase" :class="Errors.payrollgroupId.msg ? 'text-negative' : 'text-grey'">{{ Errors.payrollgroupId.msg ? Errors.payrollgroupId.msg : 'payroll group' }}</span>
                        </div>
                        <div class="q-gutter-sm">
                            <q-radio v-for="value in payrollgroups" v-model="payrollgroupId" checked-icon="task_alt" unchecked-icon="panorama_fish_eye" :val="value.value" :label="value.label" class="text-capitalize"/>
                        </div>
                    </div>
                    <div class="row q-col-gutter-xs q-mb-md">
                        <div class="col-2">
                            <div class="q-mb-xs">
                                <span class="text-caption text-uppercase" :class="Errors.salarygroup.msg ? 'text-negative' : 'text-grey'">{{ Errors.salarygroup.msg ? Errors.salarygroup.msg : 'salary group' }}</span>
                            </div>
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
                        <div class="col-2">
                            <div class="q-mb-xs">
                                <span class="text-caption text-uppercase" :class="Errors.taxstatus.msg ? 'text-negative' : 'text-grey'">{{ Errors.taxstatus.msg ? Errors.taxstatus.msg : 'tax status' }}</span>
                            </div>
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
                        <q-btn unelevated size="md" color="primary" class="btn text-capitalize" label="save" @click="Save" />
                        <q-btn unelevated size="md" color="primary" class="btn text-capitalize" label="discard" v-close-popup outline/>
                    </div>
                </q-card-actions>
                <q-inner-loading :showing="ApplicationSubmitting">
                    <div class="text-center">
                        <q-spinner-puff size="md"/>
                        <div class="text-caption text-grey text-uppercase q-mt-xs">we're working on it!</div>
                    </div>
                </q-inner-loading>
            </q-card>
        </q-dialog>
    </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, onBeforeMount, watch, reactive } from 'vue';
import { api } from 'src/boot/axios';
import moment from 'moment';
import { Toast } from 'src/boot/sweetalert'; 

import { useEmployeeStore } from 'src/stores/employee-store';
const EmployeeStore = useEmployeeStore();

const rows = ref([]);

const meta = ref({});
const page = ref(1);
const limit = ref(10);
const loading = ref(false);

const filter = ref('');

const LoadAll = async () => {
    loading.value = true;
    try {
        const { data } = await api.get(`/employee`, {
            params: { 
                Page: page.value, 
                Limit: limit.value,
                Filter: filter.value || ''
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

const formatName = (profile) => {
    if (!profile) return '';
    const firstname = profile.first_name || '';
    const middlename = profile.middle_name
        ? profile.middle_name.charAt(0).toUpperCase() + '.'
        : '';
    const lastname = profile.last_name || '';
    const suffix = profile.suffix ? ` ${profile.suffix}` : '';
    return `${firstname} ${middlename} ${lastname}${suffix}`.trim();
}

onMounted(() => {
    LoadAll();
});

const modal = ref(false);
const ApplicationSubmitting = ref(false);

const applicant = ref(null);
const firstname = ref('');
const middlename = ref('');
const lastname = ref('');
const suffix = ref('');
const sex = ref('');
const bloodtype = ref('');
const civilstatus = ref('');
const birthdate = ref(new Date().toISOString().split('T')[0]);
const birthplace = ref('');
const address = ref('');
const email = ref('');
const contactNo = ref('');
const employeeNo = ref('');
const dateHired = ref(new Date().toISOString().split('T')[0]);
const employmentstatus = ref('');
const companyId = ref('');
const departmentId = ref('');
const scheduleId = ref('');
const positionId = ref('');
const tin = ref('');
const sssNo = ref('');
const philhealthNo = ref('');
const pagibigNo = ref('');
const salarygroup = ref('');
const payrollgroupId = ref('');
const taxstatus = ref('');

const Errors = reactive({
    firstname: { type: null, msg: '' },
    middlename: { type: null, msg: '' },
    lastname: { type: null, msg: '' },
    suffix: { type: null, msg: '' },
    sex: { type: null, msg: '' },
    bloodtype: { type: null, msg: '' },
    civilstatus: { type: null, msg: '' },
    birthdate: { type: null, msg: '' },
    birthplace: { type: null, msg: '' },
    address: { type: null, msg: '' },
    email: { type: null, msg: '' },
    contactNo: { type: null, msg: '' },
    employeeNo: { type: null, msg: '' },
    dateHired: { type: null, msg: '' },
    employmentstatus: { type: null, msg: '' },
    companyId: { type: null, msg: '' },
    departmentId: { type: null, msg: '' },
    scheduleId: { type: null, msg: '' },
    positionId: { type: null, msg: '' },
    tin: { type: null, msg: '' },
    sssNo: { type: null, msg: '' },
    philhealthNo: { type: null, msg: '' },
    pagibigNo: { type: null, msg: '' },
    salarygroup: { type: null, msg: '' },
    payrollgroupId: { type: null, msg: '' },
    taxstatus: { type: null, msg: '' },
});

const Validations = () => {

    let isError = false;

    if (!firstname.value) {
        Errors.firstname.type = true;
        Errors.firstname.msg = ('first name is required');
        isError = true;
    } else {
        Errors.firstname.type = null;
    }

    if (!middlename.value) {
        Errors.middlename.type = true;
        Errors.middlename.msg = ('middle name is required');
        isError = true;
    } else {
        Errors.middlename.type = null;
    }

    if (!lastname.value) {
        Errors.lastname.type = true;
        Errors.lastname.msg = ('last name is required');
        isError = true;
    } else {
        Errors.lastname.type = null;
    }

    const allowedSuffixes = ['SR', 'JR', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X'];
    if (suffix.value) {
        const suffixValue = suffix.value.trim().toUpperCase();
        if (!allowedSuffixes.includes(suffixValue)) {
            Errors.suffix.type = true;
            Errors.suffix.msg = ('invalid suffix');
            isError = true;
        } else {
            Errors.suffix.type = null;
        }
    } else {
        Errors.suffix.type = null;
    }

    if (!sex.value) {
        Errors.sex.type = true;
        Errors.sex.msg = ('sex is required');
        isError = true;
    } else {
        Errors.sex.type = null;
    }

    if (!bloodtype.value) {
        Errors.bloodtype.type = true;
        Errors.bloodtype.msg = ('blood type is required');
        isError = true;
    } else {
        Errors.bloodtype.type = null;
    }

    if (!civilstatus.value) {
        Errors.civilstatus.type = true;
        Errors.civilstatus.msg = ('civil status is required');
        isError = true;
    } else {
        Errors.civilstatus.type = null;
    }

    if (!birthdate.value) {
        Errors.birthdate.type = true;
        Errors.birthdate.msg = ('birthdate is required');
        isError = true;
    } else {
        Errors.birthdate.type = null;
    }

    if (!birthplace.value) {
        Errors.birthplace.type = true;
        Errors.birthplace.msg = ('birthplace is required');
        isError = true;
    } else {
        Errors.birthplace.type = null;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.value) {
        Errors.email.type = true;
        Errors.email.msg = ('email is required');
        isError = true;
    } else if (!emailRegex.test(email.value)) {
        Errors.email.type = true;
        Errors.email.msg = ('email must be a valid email address');
        isError = true;
    } else if (email.value.length > 100) {
        Errors.email.type = true;
        Errors.email.msg = ('email must not exceed 100 characters');
        isError = true;
    } else {
        Errors.email.type = null;
    }
    

    if (!contactNo.value) {
        Errors.contactNo.type = true;
        Errors.contactNo.msg = ('contact number is required');
        isError = true;
    } else {
        Errors.contactNo.type = null;
    }

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

    if (!address.value) {
        Errors.address.type = true;
        Errors.address.msg = ('address is requierd');
        isError = true;
    } else {
        Errors.address.type = null;
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

    if (!salarygroup.value) {
        Errors.salarygroup.type = true;
        Errors.salarygroup.msg = ('salary group is required');
        isError = true;
    } else {
        Errors.salarygroup.type = null;
    }

    if (!payrollgroupId.value) {
        Errors.payrollgroupId.type = true;
        Errors.payrollgroupId.msg = ('payroll group is required');
        isError = true;
    } else {
        Errors.payrollgroupId.type = null;
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

const ResetForm = () => {
    applicant.value = null;
    firstname.value = '';
    middlename.value = '';
    lastname.value = '';
    suffix.value = '';
    sex.value = '';
    bloodtype.value = '';
    civilstatus.value = '';
    birthdate.value = new Date().toISOString().split('T')[0];
    birthplace.value = '';
    address.value = '';
    email.value = '';
    contactNo.value = '';
    employeeNo.value = '';
    dateHired.value = new Date().toISOString().split('T')[0]; // today
    employmentstatus.value = '';
    companyId.value = '';
    departmentId.value = '';
    scheduleId.value = '';
    positionId.value = '';
    tin.value = '';
    sssNo.value = '';
    philhealthNo.value = '';
    pagibigNo.value = '';
    salarygroup.value = '';
    payrollgroupId.value = '';
    taxstatus.value = '';
}

const ResetAllErrors = () => {
    Object.keys(Errors).forEach(key => {
        Errors[key].type = null;
        Errors[key].msg = '';
    });
}

const ShowModal = () => {
    LoadCompanies();
    LoadDepartments();
    LoadSchedules();
    LoadPositions();
    LoadApplicants();
    LoadPayrollGroups();
    ResetForm();
    ResetAllErrors();
}

const applicants = ref([]);
const sexes = ref(["Male","Female"]);
const bloodtypes = ref(["A+","A-","B+","B-","AB+","AB-","O+","O-"]);
const civilstatuses = ref(["Single","Married","Widowed","Divorced","Separated"]);
const employmentstatuses = ref(["Regular","Probationary","Contractual","Temporary","Intern"]);
const positions = ref([]);
const companies = ref([]);
const departments = ref([]);
const schedules = ref([]);
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
const payrollgroups = ref([]);
const taxstatuses = ref(['S', 'ME', 'S1', 'S2', 'S3', 'S4', 'ME1', 'ME2', 'ME3', 'ME4', 'Z']);

const filteredPositions = ref([]);
const filteredCompanies = ref([]);
const filteredDepartments = ref([]);
const filteredSchedules = ref([]);
const filteredPayrollGroups = ref([]);

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
const filterPositionFn = createFilterFn(positions, filteredPositions);

const LoadApplicants = async () => {
    try {
        const response = await api.get(`/employee/option/applicant`);
        applicants.value = response.data;
    } catch (error) {
        console.error("Error fetching options:", error);
    }
};

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

const LoadPositions = async () => {
    try {
        const { data } = await api.get(`/employee/option/position`);
        positions.value = normalizeOptions(data)
        filteredPositions.value = [...positions.value]
    } catch (error) {
        console.error("Error fetching options:", error);
    }
};

const LoadPayrollGroups = async () => {
    try {
        const { data } = await api.get(`/employee/option/payrollgroup`);
        payrollgroups.value = normalizeOptions(data)
        filteredPayrollGroups.value = [...payrollgroups.value]
    } catch (error) {
        console.error("Error fetching options:", error);
    }
};

const PopulateData = (app) => {
    firstname.value = app.first_name;
    middlename.value = app.middle_name;
    lastname.value = app.last_name;
    suffix.value = app.suffix;
    sex.value = app.sex;
    bloodtype.value = app.blood_type;
    civilstatus.value = app.civil_status;
    birthdate.value = app.birthdate;
    birthplace.value = app.birthplace;
    address.value = app.address;
    email.value = app.email;
    contactNo.value = app.contact_number;
    employmentstatus.value = app.vacancy.employment_status;
    companyId.value = Number(app.vacancy.company_id);
    departmentId.value = app.vacancy.department_id;
    scheduleId.value = app.vacancy.schedule_id;
    positionId.value = app.vacancy.position_id;
}

const Save = async () => {
    if (!Validations()) return;
    ApplicationSubmitting.value = true;
    const applicantId = applicant.value?.id ?? null;
    try {
        const Data = new FormData();
        Data.append("applicantId", applicantId ?? "");
        Data.append("firstname", firstname.value);
        Data.append("middlename", middlename.value);
        Data.append("lastname", lastname.value);
        Data.append("suffix", suffix.value);
        Data.append("sex", sex.value);
        Data.append("civilstatus", civilstatus.value);
        Data.append("birthdate", birthdate.value);
        Data.append("birthplace", birthplace.value);
        Data.append("address", address.value);
        Data.append("bloodtype", bloodtype.value);
        Data.append("email", email.value);
        Data.append("contactNo", contactNo.value);
        Data.append("employeeNo", employeeNo.value);
        Data.append("dateHired", dateHired.value);
        Data.append("tin", tin.value);
        Data.append("sssNo", sssNo.value);
        Data.append("philhealthNo", philhealthNo.value);
        Data.append("pagibigNo", pagibigNo.value);
        Data.append("positionId", positionId.value);
        Data.append("companyId", companyId.value);
        Data.append("departmentId", departmentId.value);
        Data.append("scheduleId", scheduleId.value);
        Data.append("employmentstatus", employmentstatus.value);
        Data.append("salarygroup", salarygroup.value);
        Data.append("payrollgroupId", payrollgroupId.value);
        Data.append("taxstatus", taxstatus.value);
        const response = await api.post('/employee', Data, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        });
        modal.value = false;
        LoadAll()
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
        ApplicationSubmitting.value = false;
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

const popup = ref(null);

</script>

<style scoped>
</style>