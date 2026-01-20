<template>
    <div>
        <div class="card-grid">
            <div class="card-anim-wrapper" :style="{ animationDelay: `120ms` }">
                <q-card key="data-add" class="card card-hover-animate flex flex-center q-pa-md no-shadow cursor-pointer radius-sm" v-ripple @click="NewDialog()" >
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
                <q-card @click="InfoDialog(data)" class="card card-hover-animate flex flex-center q-pa-md no-shadow cursor-pointer radius-sm">
                    <q-card-section class="text-center full-width">
                        <div class="text-subtitle2 text-uppercase">{{ data?.position?.name }}</div>
                    </q-card-section>
                    <q-card-section class="full-width">
                        <div class="text-caption text-uppercase">{{ formatCurrency(data?.salary_range) }} {{ data?.position?.salary_type }}</div>
                        <div class="text-caption text-grey">{{ data?.status }}</div>
                    </q-card-section>
                    <div class="absolute-top-left q-ma-sm" style="width: 7px; height: 7px; border-radius: 50%;" :class="data.status === 'Requested' ? 'bg-blue' : (data.status === 'Approved' ? 'bg-positive' : (data.status === 'Rejected' ? 'bg-negative' : (data.status === 'Filled' ? 'bg-primary' : null)))"/>
                </q-card>
            </div>
        </div>
        <q-dialog v-model="dialog" full-height position="right" persistent square class="dialog">
            <q-card class="dialog-card column full-height">
                <q-card-section class="q-pa-lg">
                    <div class="text-h6 text-uppercase">create recruitment</div>
                </q-card-section>
                <q-separator inset />
                <q-card-section class="col q-pa-lg scroll">
                    <div class="row q-col-gutter-xs q-mb-md">
                        <div class="col-3">
                            <div class="q-mb-xs">
                                <span class="text-caption text-uppercase" :class="Errors.position.type ? 'text-negative' : 'text-grey'">{{ Errors.position.type ? Errors.position.message : 'position' }}</span>
                            </div>
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
                                @update:model-value="() => { salaryRange = position.amount }"
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
                    <div class="q-mb-md">
                        <div class="q-mb-md">
                            <div class="text-caption text-uppercase text-grey q-mb-xs">job description</div>
                            <div class="text-caption">{{ position.description || 'N/A' }}</div>
                        </div>
                        <div class="q-mb-md">
                            <div class="text-caption text-uppercase text-grey q-mb-xs">job qualification</div>
                            <div class="text-caption">
                                <template v-if="Array.isArray(position?.qualification) && position.qualification.length">
                                    <div v-for="(dt, index) in position.qualification" :key="index">
                                    {{ index + 1 }}. {{ dt }}
                                    </div>
                                </template>
                                <div v-else>
                                    N/A
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row q-col-gutter-xs q-mb-md">
                        <div class="col-3">
                            <div class="q-mb-xs">
                                <span class="text-caption text-uppercase" :class="Errors.sex.type ? 'text-negative' : 'text-grey'">{{ Errors.sex.type ? Errors.sex.message : 'sex' }}</span>
                            </div>
                            <div class="q-gutter-sm">
                                <q-radio v-for="value in sexes" v-model="sex" checked-icon="task_alt" unchecked-icon="panorama_fish_eye" :val="value" :label="value" />
                            </div>
                        </div>
                    </div>
                    <div class="row q-col-gutter-xs q-mb-md">
                        <div class="col-6">
                            <div class="q-mb-xs">
                                <span class="text-caption text-uppercase" :class="Errors.schoolLevel.type ? 'text-negative' : 'text-grey'">{{ Errors.schoolLevel.type ? Errors.schoolLevel.message : 'school level' }}</span>
                            </div>
                            <div class="q-gutter-sm">
                                <q-radio v-for="value in schoollevels" v-model="schoolLevel" checked-icon="task_alt" unchecked-icon="panorama_fish_eye" :val="value" :label="value" />
                            </div>
                        </div>
                    </div>
                    <div class="row q-col-gutter-xs q-mb-md">
                        <div class="col-12">
                            <div class="q-mb-xs">
                                <span class="text-caption text-uppercase" :class="Errors.employmentStatus.type ? 'text-negative' : 'text-grey'">{{ Errors.employmentStatus.type ? Errors.employmentStatus.message : 'employment status' }}</span>
                            </div>
                            <div class="q-gutter-sm">
                                <q-radio v-for="value in employmentstatuses" v-model="employmentStatus" checked-icon="task_alt" unchecked-icon="panorama_fish_eye" :val="value" :label="value" />
                            </div>
                        </div>
                    </div>
                    <div class="row q-col-gutter-xs q-mb-md">
                        <div class="col-2">
                            <div class="q-mb-xs">
                                <span class="text-caption text-uppercase" :class="Errors.companyId.type ? 'text-negative' : 'text-grey'">{{ Errors.companyId.type ? Errors.companyId.message : 'company' }}</span>
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
                                <span class="text-caption text-uppercase" :class="Errors.departmentId.type ? 'text-negative' : 'text-grey'">{{ Errors.departmentId.type ? Errors.departmentId.message : 'department' }}</span>
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
                                <span class="text-caption text-uppercase" :class="Errors.scheduleId.type ? 'text-negative' : 'text-grey'">{{ Errors.scheduleId.type ? Errors.scheduleId.message : 'Schedule' }}</span>
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
                                            <q-item-label caption>{{ formatTimeRange(scope.opt) }}</q-item-label>
                                        </q-item-section>
                                    </q-item>
                                </template>
                            </q-select>
                        </div>
                        <div class="col-2">
                            <div class="q-mb-xs">
                                <span class="text-caption text-uppercase" :class="Errors.salaryRange.type ? 'text-negative' : 'text-grey'">{{ Errors.salaryRange.type ? Errors.salaryRange.message : 'salary range' }}</span>
                            </div>
                            <q-input 
                                v-model="salaryRange" 
                                label="Enter Salary Range"
                                outlined
                                :error="Errors.salaryRange.type"
                                :no-error-icon="true"
                                @update:model-value="formatSalaryRange"
                            />
                        </div>
                    </div>
                    <div class="row q-col-gutter-xs q-mb-md">
                        <div class="col-2">
                            <div class="q-mb-xs">
                                <span class="text-caption text-uppercase" :class="Errors.yearExperience.type ? 'text-negative' : 'text-grey'">{{ Errors.yearExperience.type ? Errors.yearExperience.message : 'yr/s of experience' }}</span>
                            </div>
                            <q-input 
                                v-model="yearExperience" 
                                label="Enter Yr/s of Experience"
                                outlined
                                :error="Errors.yearExperience.type"
                                :no-error-icon="true"
                            />
                        </div>
                        <div class="col-2">
                            <div class="q-mb-xs">
                                <span class="text-caption text-uppercase" :class="Errors.ageRange.type ? 'text-negative' : 'text-grey'">{{ Errors.ageRange.type ? Errors.ageRange.message : 'age range (00-00)' }}</span>
                            </div>
                            <q-input 
                                v-model="ageRange" 
                                label="Enter Age Range"
                                outlined
                                :error="Errors.ageRange.type"
                                :no-error-icon="true"
                                @update:model-value="formatAgeRange"
                            />
                        </div>
                        <div class="col-2">
                            <div class="q-mb-xs">
                                <span class="text-caption text-uppercase" :class="Errors.date.type ? 'text-negative' : 'text-grey'">{{ Errors.date.type ? Errors.date.message : 'date needed (YYYY-MM-DD)' }}</span>
                            </div>
                            <!-- <q-input 
                                v-model="date" 
                                label="Enter Date"
                                outlined
                                :error="Errors.date.type"
                                :no-error-icon="true"
                                @update:model-value="formatDateNeeded"
                            /> -->
                            <q-input outlined v-model="date">
                                <q-popup-proxy cover transition-show="scale" transition-hide="scale" ref="popup" class="no-shadow custom-border radius-sm">
                                    <q-date v-model="date" mask="YYYY-MM-DD" @update:model-value="() => { popup.hide() }" />
                                </q-popup-proxy>
                            </q-input>
                        </div>
                    </div>
                    <div class="row q-col-gutter-xs q-mb-md">
                        <div class="col-6">
                            <div class="q-mb-xs">
                                <span class="text-caption text-uppercase" :class="Errors.location.type ? 'text-negative' : 'text-grey'">{{ Errors.location.type ? Errors.location.message : 'location' }}</span>
                            </div>
                            <q-input 
                                v-model="location" 
                                label="Enter Location"
                                outlined
                                :error="Errors.location.type"
                                :no-error-icon="true"
                                input-class="text-capitalize"
                            />
                        </div>
                    </div>
                    <div class="q-mb-md">
                        <div class="q-mb-xs">
                            <span class="text-caption text-uppercase" :class="Errors.movement.type ? 'text-negative' : 'text-grey'">{{ Errors.movement.type ? Errors.movement.message : 'movement' }}</span>
                        </div>
                        <q-radio v-model="movement" checked-icon="task_alt" unchecked-icon="panorama_fish_eye" val="Addition" label="addition to department"  class="text-uppercase" />
                        <q-radio v-model="movement" checked-icon="task_alt" unchecked-icon="panorama_fish_eye" val="Replacement" label="replacement"  class="text-uppercase" />
                    </div>
                    <div class="row q-col-gutter-xs q-mb-md">
                        <div class="col-4">
                            <div class="q-mb-xs">
                                <span class="text-caption text-uppercase" :class="Errors.justification.type ? 'text-negative' : 'text-grey'">{{ Errors.justification.type ? Errors.justification.message : 'justification' }}</span>
                            </div>
                            <q-input 
                                v-model="justification" 
                                label="Enter Justification"
                                outlined
                                :error="Errors.justification.type"
                                :no-error-icon="true"
                                type="textarea"
                            />
                        </div>
                    </div>
                    <div class="q-mb-md">
                        <div class="text-caption text-uppercase text-grey q-mb-xs">background check</div>
                        <q-checkbox right-label v-model="needBackgroundCheck" label="need background check?" checked-icon="task_alt" unchecked-icon="panorama_fish_eye" class="text-uppercase"/>
                    </div>
                </q-card-section>
                
                <q-card-actions class="q-pa-lg bg">
                    <div class="q-gutter-sm">
                        <q-btn v-if="!isEdit || isActive" unelevated size="md" color="primary" class="btn text-capitalize" label="save" @click="Save" />
                        <q-btn v-if="isEdit" unelevated size="md" color="primary" class="btn text-capitalize" :label="isActive ? 'disable' : 'enable'" @click="Toggle"/>
                        <q-btn unelevated size="md" color="primary" class="btn text-capitalize" label="discard" @click="() => { dialog = false; }" outline/>
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
        <q-dialog v-model="DetailDialog" full-height position="right" persistent square class="dialog">
            <q-card class="dialog-card column full-height">
                <q-card-section class="q-pa-lg">
                    <div class="text-h6 text-uppercase">requisition information</div>
                </q-card-section>
                <q-separator inset />
                <q-card-section class="col q-pa-lg scroll">
                    <div class="q-mb-md">
                        <div class="text-caption text-uppercase text-grey">position</div>
                        <div class="text-body1 text-uppercase">{{ info?.position?.name }}</div>
                    </div>
                    <div class="q-mb-md">
                        <div class="text-caption text-uppercase text-grey">salary range</div>
                        <div class="text-body1 text-uppercase">{{ formatCurrency(info?.salary_range) }} {{ info?.position?.salary_type }}</div>
                    </div>
                    <div class="q-mb-md">
                        <div class="text-caption text-uppercase text-grey">status</div>
                        <div class="text-body1 text-uppercase">{{ info?.status }}</div>
                    </div>
                    <div class="q-mb-md">
                        <div class="text-caption text-uppercase text-grey">job description</div>
                        <div class="text-body1">{{ info?.position?.description }}</div>
                    </div>
                    <div class="q-mb-md">
                        <div class="text-caption text-uppercase text-grey">job qualifications</div>
                        <div class="text-body1" v-for="(v, index) in info?.position?.qualification" :key="index">{{ (index+1) }}. {{ v || 'N/A' }}</div>
                    </div>
                    <div class="row q-col-gutter-lg q-mb-md">
                        <div>
                            <div class="text-caption text-uppercase text-grey">company</div>
                            <div class="text-body1 text-capitalize">{{ info?.company?.name }}</div>
                        </div>
                        <div>
                            <div class="text-caption text-uppercase text-grey">department</div>
                            <div class="text-body1 text-capitalize">{{ info?.department?.name }}</div>
                        </div>
                        <div>
                            <div class="text-caption text-uppercase text-grey">schedule</div>
                            <div class="text-body1 text-capitalize">{{ info?.schedule?.name }},&nbsp;{{ formatTime(info?.schedule?.time_start) }} to {{ formatTime(info?.schedule?.time_end) }}</div>
                        </div>
                    </div>
                    <div class="row q-col-gutter-lg q-mb-md">
                        <div>
                            <div class="text-caption text-uppercase text-grey">date needed</div>
                            <div class="text-body1 text-capitalize">{{ formatDate(info?.date_needed) }}</div>
                        </div>
                        <div>
                            <div class="text-caption text-uppercase text-grey">need background check</div>
                            <div class="text-body1 text-capitalize">{{ info?.need_background_check ? 'Yes' : 'No' }}</div>
                        </div>
                    </div>
                    <div class="q-mb-md">
                        <div class="text-caption text-uppercase text-grey">work location</div>
                        <div class="text-body1 text-capitalize">{{ info?.location }}</div>
                    </div>
                    <div class="row q-col-gutter-lg q-mb-md">
                        <div>
                            <div class="text-caption text-uppercase text-grey">movement</div>
                            <div class="text-body1 text-capitalize">{{ info?.movement }}</div>
                        </div>
                        <div>
                            <div class="text-caption text-uppercase text-grey">justification</div>
                            <div class="text-body1">{{ info?.justification }}</div>
                        </div>
                    </div>
                    <div class="row q-col-gutter-lg q-mb-mb">
                        <div>
                            <div class="text-caption text-uppercase text-grey">sex</div>
                            <div class="text-body1 text-capitalize">{{ info?.sex }}</div>
                        </div>
                        <div>
                            <div class="text-caption text-uppercase text-grey">school level</div>
                            <div class="text-body1">{{ info?.school_level }}</div>
                        </div>
                        <div>
                            <div class="text-caption text-uppercase text-grey">year/s of experience</div>
                            <div class="text-body1">{{ info?.year_experience }}</div>
                        </div>
                        <div>
                            <div class="text-caption text-uppercase text-grey">age range</div>
                            <div class="text-body1">{{ info?.age_range }}</div>
                        </div>
                    </div>
                    <div class="row q-col-gutter-xl q-mb-md q-mt-xl">
                        <div v-for="(dt, index) in info?.approvals">
                            <div class="text-caption text-uppercase text-grey">{{ dt?.status == 'Pending' ? 'unsigned' : 'signed' }}</div>
                            <div v-if="dt?.status == 'Approved'">
                                <img :src="formatSignature(dt?.setting)" width="150"/>
                            </div>
                            <div class="text-h6 text-uppercase">{{ formatName(dt?.setting?.approver?.employeeAccount?.employee) }}</div>
                        </div>
                    </div>
                </q-card-section>
                
                <q-card-actions class="q-pa-lg bg">
                    <div class="q-gutter-sm">
                        <q-btn v-if="canApprove" unelevated size="md" color="primary" class="btn text-capitalize" label="approve" >
                            <q-menu @before-show="() => {  }" transition-show="jump-up" transition-hide="jump-down" :offset="[0, 15]" class="radius-sm" style="box-shadow: rgba(0, 0, 0, 0.09) 0px 3px 12px;">
                                <q-card class="no-shadow  radius-sm q-pa-lg" style="width: 300px;">
                                    <q-card-section>
                                        <div class="text-h6 text-center text-uppercase">
                                            proceed to approve
                                        </div>
                                    </q-card-section>
                                    <q-card-actions>
                                        <q-btn unelevated size="md" color="primary" class="full-width text-capitalize" label="proceed" @click="ApproveRequisition(info)"/>
                                    </q-card-actions>
                                </q-card>
                            </q-menu>
                        </q-btn>
                        <q-btn unelevated size="md" color="primary" class="btn text-capitalize" label="print" @click="PrintManpowerRequisition"/>
                        <q-btn  v-if="isActive" unelevated size="md" color="primary" class="btn text-capitalize" :label="formatToggle(info) ? 'disable' : 'enable'" @click="Toggle"/>
                        <q-btn unelevated size="md" color="primary" class="btn text-capitalize" label="discard" @click="() => { DetailDialog = false; }" outline/>
                    </div>
                </q-card-actions>
                <q-inner-loading :showing="DetailSubmitting">
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
    </div>
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

const AuthStore = useAuthStore();

const dialog = ref(false);
const popup = ref(null);
const isEdit = ref(false);
const submitLoading = ref(false);

const id = ref('');
const position = ref('');
const companyId = ref('');
const departmentId = ref('');
const scheduleId = ref('');
const salaryRange = ref('');
const sex = ref('');
const date = ref(new Date().toISOString().split('T')[0]);
const location = ref('');
const employmentStatus = ref('');
const schoolLevel = ref('');
const yearExperience = ref('');
const ageRange = ref('');
const movement = ref('');
const justification = ref('');
const needBackgroundCheck = ref(false);
const isActive = ref(false);

const Errors = reactive({
    position: { 
        type: null, message: ''
    },
    companyId: {
        type: null, message: ''
    },
    departmentId: {
        type: null, message: ''
    },
    scheduleId: {
        type: null, message: ''
    },
    salaryRange: {
        type: null, message: ''
    },
    sex: {
        type: null, message: ''
    },
    employmentStatus: {
        type: null, message: ''
    },
    date: {
        type: null, message: ''
    },
    location: {
        type: null, message: ''
    },
    schoolLevel: {
        type: null, message: ''
    },
    yearExperience: {
        type: null, message: ''
    },
    ageRange: {
        type: null, message: ''
    },
    movement: {
        type: null, message: ''
    },
    justification: {
        type: null, message: ''
    },
});

const Validations = () => {

    let isError = false;

    if (!position.value) {
        Errors.position.type = true;
        Errors.position.message = 'Position is required';
        isError = true;
    } else {
        Errors.position.type = null;
    }

    if (!companyId.value) {
        Errors.companyId.type = true;
        Errors.companyId.message = 'company is required';
        isError = true;
    } else {
        Errors.companyId.type = null;
    }

    if (!departmentId.value) {
        Errors.departmentId.type = true;
        Errors.departmentId.message = 'department is required';
        isError = true;
    } else {
        Errors.departmentId.type = null;
    }

    if (!scheduleId.value) {
        Errors.scheduleId.type = true;
        Errors.scheduleId.message = 'schedule shift is required';
        isError = true;
    } else {
        Errors.scheduleId.type = null;
    }

    if (!salaryRange.value) {
        Errors.salaryRange.type = true;
        Errors.salaryRange.message = 'salary range is required';
        isError = true;
    } else {
        Errors.salaryRange.type = null;
    }

    if (!sex.value) {
        Errors.sex.type = true;
        Errors.sex.message = 'sex is required';
        isError = true;
    } else {
        Errors.sex.type = null;
    }

    if (!employmentStatus.value) {
        Errors.employmentStatus.type = true;
        Errors.employmentStatus.message = 'Employment status is required';
        isError = true;
    } else {
        Errors.employmentStatus.type = null;
    }

    if (!schoolLevel.value) {
        Errors.schoolLevel.type = true;
        Errors.schoolLevel.message = 'school level is required';
        isError = true;
    } else {
        Errors.schoolLevel.type = null;
    }

    if (!date.value) {
        Errors.date.type = true;
        Errors.date.message = 'Date is required';
        isError = true;
    } else {
        const parts = date.value.split('-');

        if (parts.length !== 3) {
            Errors.date.type = true;
            Errors.date.message = 'Invalid date format';
            isError = true;
        } else {
            let [yyyy, mm, dd] = parts.map(Number);
            const today = new Date();
            const currentYear = today.getFullYear();

            let valid = true;
            let errMsg = '';

            // Validate year
            if (yyyy < currentYear) {
                valid = false;
                errMsg = 'Year cannot be in the past';
            }
            // Validate month
            else if (mm < 1 || mm > 12) {
                valid = false;
                errMsg = 'Invalid month';
            }
            // Validate day
            else if (dd < 1 || dd > 31) {
                valid = false;
                errMsg = 'Invalid day';
            }
            // Validate actual day for month
            else {
                const daysInMonth = new Date(yyyy, mm, 0).getDate();
                if (dd > daysInMonth) {
                    valid = false;
                    errMsg = `Invalid day for month ${mm}`;
                }
            }

            if (!valid) {
                Errors.date.type = true;
                Errors.date.message = errMsg;
                isError = true;
            }
        }
    }



    if (!location.value) {
        Errors.location.type = true;
        Errors.location.message = 'location is required';
        isError = true;
    } else {
        Errors.location.type = null;
    }

    if (!yearExperience.value) {
        Errors.yearExperience.type = true;
        Errors.yearExperience.message = 'experience is required';
        isError = true;
    } else {
        Errors.yearExperience.type = null;
    }

    if (!ageRange.value) {
        Errors.ageRange.type = true;
        Errors.ageRange.message = 'age range is required';
        isError = true;
    } else {
        Errors.ageRange.type = null;
    }

    if (!movement.value) {
        Errors.movement.type = true;
        Errors.movement.message = 'movement is required';
        isError = true;
    } else {
        Errors.movement.type = null;
    }

    if (!justification.value) {
        Errors.justification.type = true;
        Errors.justification.message = 'justification is required';
        isError = true;
    } else {
        Errors.justification.type = null;
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

const qualifications = ref([]);

const rows = ref([]);

const meta = ref({});
const page = ref(1);
const limit = ref(10);
const loading = ref(false);

const filter = ref('');

const LoadAll = async () => {
    loading.value = true;
    try {
        const { data } = await api.get(`/recruitment`, {
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

const NewDialog = () => {
    ResetForm();
    LoadPositions();
    LoadCompanies();
    LoadDepartments();
    LoadSchedules();
    dialog.value = true;
}

const ResetForm = () => {
    position.value = '';
    companyId.value = '';
    departmentId.value = '';
    scheduleId.value = '';
    salaryRange.value = '';
    date.value = new Date().toISOString().split('T')[0];
    location.value = '';
    movement.value = '';
    justification.value = '';
    needBackgroundCheck.value = false;
    sex.value = '';
    ageRange.value = '';
    schoolLevel.value = '';
    yearExperience.value = '';
    employmentStatus.value = '';
    qualifications.value = [];
    Errors.position.type = null;
    Errors.companyId.type = null;
    Errors.departmentId.type = null;
    Errors.scheduleId.type = null;
    Errors.salaryRange.type = null;
    Errors.date.type = null;
    Errors.location.type = null;
    Errors.movement.type = null;
    Errors.justification.type = null;
    Errors.sex.type = null;
    Errors.ageRange.type = null;
    Errors.schoolLevel.type = null;
    Errors.yearExperience.type = null;
    Errors.employmentStatus.type = null;
}

const Save = async () => {
    if (!Validations()) return;
    submitLoading.value = true;
    try {
        const response = await api.post('/recruitment', {
            positionId: position.value.id,
            companyId: companyId.value,
            departmentId: departmentId.value,
            scheduleId: scheduleId.value,
            salaryRange: salaryRange.value,
            date: date.value,
            location: location.value,
            movement: movement.value,
            justification: justification.value,
            needBackgroundCheck: needBackgroundCheck.value,
            sex: sex.value,
            ageRange: ageRange.value,
            schoolLevel: schoolLevel.value,
            yearExperience: yearExperience.value,
            employmentStatus: employmentStatus.value,
        });
        LoadAll();
        dialog.value = false;
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

const DetailSubmitting = ref(false);
const DetailDialog = ref(false);
const info = ref(null)

const InfoDialog = (data) => {
    id.value = data.id;
    isActive.value = data.is_active;
    DetailDialog.value = true;
    LoadDetails(data.id);
}

const LoadDetails = async (id) => {
    DetailSubmitting.value = true;
    try {
        const response  = await api.get(`/recruitment/${id}/details`);
        info.value = response.data.data
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

const ApproveRequisition = async (data) => {
    DetailSubmitting.value = true;
    // const authUserId = AuthStore.user?.id;
    // const matchedSignatory = data?.requests?.find(req => req.signatory?.userId === authUserId);
    // const signatoryId = matchedSignatory ? matchedSignatory.signatoryId : null;
    const vacancyId = data?.id;
    try {
        const response = await api.post('recruitment/approve', {
            vacancyId: vacancyId
        })
        Toast.fire({
            icon: "success",
            html: `
                <div class="text-h6 text-bold text-uppercase">granted!</div>
                <div class="text-caption text-capitalize;">${response.data.message}<div>
            `
        });
        LoadAll();
        DetailDialog.value = false;
    } catch (error) {
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
        DetailSubmitting.value = false;
    }
}

const UpdateList = (data) => {
    const index = rows.value.findIndex(item => item.id === data.id)
    if (index !== -1) {
        rows.value[index] = data
    }
}

const Toggle = async () => {
    DetailSubmitting.value = true;
    try {
        const response = isActive.value
            ? await api.post(`/recruitment/${id.value}/disable`)
            : await api.post(`/recruitment/${id.value}/enable`)
        DetailDialog.value = false;
        UpdateList(response.data.vacancy);
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
        DetailSubmitting.value = false;
    }
}
const sexes = ref(['Male', 'Female']);
const employmentstatuses = ref(['Regular', 'Probationary', 'Contractual', 'Temporary', 'Intern']);
const positions = ref([]);
const companies = ref([]);
const departments = ref([]);
const schedules = ref([]);
const schoollevels = ref(['High School', 'Vocational', 'College', 'Graduate Studies']);

const filteredPositions = ref([]);
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

const filterCompanyFn = createFilterFn(companies, filteredCompanies);
const filterDepartmentFn = createFilterFn(departments, filteredDepartments);
const filterScheduleFn = createFilterFn(schedules, filteredSchedules);
const filterPositionFn = createFilterFn(positions, filteredPositions);

const LoadCompanies = async () => {
    try {
        const response = await api.get(`/recruitment/option/company`);
        companies.value = response.data;
    } catch (error) {
        console.error("Error fetching options:", error);
    }
};

const LoadDepartments = async () => {
    try {
        const response = await api.get(`/recruitment/option/department`);
        departments.value = response.data;
    } catch (error) {
        console.error("Error fetching options:", error);
    }
};

const LoadSchedules = async () => {
    try {
        const response = await api.get(`/recruitment/option/schedule`);
        schedules.value = response.data;
    } catch (error) {
        console.error("Error fetching options:", error);
    }
};

const LoadPositions = async () => {
    try {
        const response = await api.get(`/recruitment/option/position`);
        positions.value = response.data;
    } catch (error) {
        console.error("Error fetching options:", error);
    }
};

const formatTime = (time) => {
    if (!time) return ''
    return moment(time, 'HH:mm').format('hh:mm A')
}

const formatDate = (date) => {
    if (!date) return ''
    return moment(date).format('MMMM Do, YYYY')
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

const formatSignature = (sign) => {
    return `${process.env.VUE_APP_BACKEND_URL}${sign.signature}`
}

const formatTimeRange = (time) => {
    const start = time.time_start;
    const end = time.time_end;
    if (!start && !end) return '';
    const formattedStart = start ? moment(start, 'HH:mm:ss').format('h:mm A') : '';
    const formattedEnd = end ? moment(end, 'HH:mm:ss').format('h:mm A') : '';
    if (formattedStart && formattedEnd) return `${formattedStart} to ${formattedEnd}`;
    return formattedStart || formattedEnd || '';
};

const formatSalaryRange = (val) => {
    if (!val) return
    let clean = val.replace(/[^\d,-]/g, '')
    const parts = clean.split('-').slice(0, 2)
    const format = (v) =>
        v.replace(/,/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    const min = format(parts[0] || '')
    const max = parts[1] ? format(parts[1]) : ''
    salaryRange.value = max ? `${min}-${max}` : min
}

const formatAgeRange = (val) => {
    if (!val) return;
    // Remove non-digit characters
    let clean = val.replace(/\D/g, '');
    // Take only the first 4 digits
    clean = clean.slice(0, 4);
    // Split into two parts of 2 digits each
    const min = clean.slice(0, 2);
    const max = clean.slice(2, 4);
    // Combine with dash if max exists
    ageRange.value = max ? `${min}-${max}` : min;
};

const formatDateNeeded = (val) => {
    if (!val) {
        date.value = "";
        return;
    }
    // Remove non-digit characters
    const digits = val.replace(/\D/g, "");
    // Automatically add slashes for MM/DD/YYYY
    let formatted = digits;
    if (digits.length > 2 && digits.length <= 4) {
        formatted = digits.slice(0, 2) + "/" + digits.slice(2);
    } else if (digits.length > 4) {
        formatted = digits.slice(0, 2) + "/" + digits.slice(2, 4) + "/" + digits.slice(4, 8);
    }
    date.value = formatted;
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

const formatToggle = (info) => !!info?.isActive;

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

const printDialog = ref(false);
const pdf = ref(null);

const PrintManpowerRequisition = async () => {
    DetailSubmitting.value = true;
    try {
        const res = await api.get(`/recruitment/${id.value}/pdf`, {
            responseType: 'arraybuffer',
        })
        const blob = new Blob([res.data], { type: 'application/pdf' });
        const pdfurl = window.URL.createObjectURL(blob) + "#view=FitW";
        pdf.value = pdfurl
        printDialog.value = true;
        DetailSubmitting.value = false;
    } catch (error) {
        DetailSubmitting.value = false;
        console.error("Error generating PDF:", error);
    }
}

onMounted(() => {
    LoadAll();
})
</script>