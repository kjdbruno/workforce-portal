<template>
    <div>
        <div class="card-grid">
            <div class="card-anim-wrapper">
                <q-card key="data-add" class="card card-hover-animate flex flex-center q-pa-md no-shadow cursor-pointer radius-sm" v-ripple @click="NewDialog()">
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
                <q-card @click="InfoDialog(data)" class="card card-hover-animate flex flex-center q-pa-md no-shadow cursor-pointer radius-sm" >
                    <q-card-section class="text-center full-width">
                        <div class="text-subtitle2 text-uppercase">{{ formatName(data) }}</div>
                        <div class="text-caption text-uppercase">{{ data?.vacancy?.position?.name }}</div>
                        <div class="text-caption text-grey">{{ data?.vacancy?.salary_range }}</div>
                    </q-card-section>
                    <q-card-section class="full-width">
                        <div class="text-caption text-uppercase">{{ data?.status }}</div>
                        <div class="text-caption text-grey">{{ formatDate(data?.createdAt) }}</div>
                    </q-card-section>
                </q-card>
            </div>
        </div>
        <q-dialog v-model="dialog" full-height position="right" persistent square class="dialog">
            <q-card class="dialog-card column full-height">
                <q-card-section class="q-pa-lg">
                    <div class="text-h6 text-uppercase">new applicant</div>
                </q-card-section>
                <q-separator inset />
                <q-card-section class="col q-pa-lg scroll">
                    <div class="q-mb-md">
                        <div class="q-mb-sm">
                            <span class="text-caption text-uppercase" :class="Errors.vacancyId.msg ? 'text-negative' : 'text-grey'">{{ Errors.vacancyId.msg ? Errors.vacancyId.msg : 'vacancy' }}</span>
                        </div>
                        <div class="card-grid">
                            <div key="data-none" class="inner-card-anim-wrapper" :style="{ animationDelay: `120ms` }" v-if="vacancies.length === 0">
                                <q-card class="card card-hover-animate flex flex-center q-pa-md no-shadow cursor-pointer radius-sm" tag="label">
                                    <q-card-section class="text-center full-width q-pa-none">
                                        <div class="text-caption text-uppercase text-grey">no data found</div>
                                    </q-card-section>
                                </q-card>
                            </div>
                            <div v-for="(data, index) in vacancies" :key="`data-${data.id}`" class="inner-card-anim-wrapper" :style="{ animationDelay: `${index * 120}ms` }" v-else>
                                <q-card class="card card-hover-animate flex flex-center q-pa-md no-shadow cursor-pointer radius-sm" tag="label" :class="{ 'card--active': vacancyId === data.id }" @click="vacancyId = data.id" >
                                    <q-card-section class="text-center full-width q-pa-none">
                                        <div class="text-subtitle1 text-uppercase">{{ data?.position?.name }}</div>
                                        <div class="text-caption text-uppercase">{{ formatCurrency(data?.salary_range) }}</div>
                                    </q-card-section>
                                    <q-card-section class="q-pa-none">
                                        <div class="text-caption">{{ data?.company?.name }}</div>
                                        <div class="text-caption text-grey">{{ data?.department?.name }}</div>
                                    </q-card-section>
                                    <div class="checkmark-overlay">
                                        <q-radio v-model="vacancyId" :val="data.id" checked-icon="task_alt" unchecked-icon="panorama_fish_eye" size="md" />
                                    </div>
                                </q-card>
                            </div>
                        </div>
                    </div>
                    <div class="text-overline text-uppercase text-bold q-mt-xl q-mb-md">personal information</div>
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
                        <span class="text-overline text-uppercase text-bold q-mr-sm">educational information</span>
                        <q-btn icon="add" round size="sm" outline unelevated color="primary" @click="addEducation"/>
                    </div>
                    <div class="q-mb-md">
                        <div class="row q-col-gutter-xs q-mb-xs">
                            <div class="col-2">
                                <div class="q-mb-xs">
                                    <div class="text-caption text-uppercase" :class="Errors.educations.schoollevel.msg ? 'text-negative' : 'text-grey'">{{ Errors.educations.schoollevel.msg ? Errors.educations.schoollevel.msg : 'school level' }}</div>
                                </div>
                            </div>
                            <div class="col-2">
                                <div class="text-caption text-uppercase" :class="Errors.educations.schoolId.msg ? 'text-negative' : 'text-grey'">{{ Errors.educations.schoolId.msg ? Errors.educations.schoolId.msg : 'school' }}</div>
                            </div>
                            <div class="col-2">
                                <div class="text-caption text-uppercase" :class="Errors.educations.courseId.msg ? 'text-negative' : 'text-grey'">{{ Errors.educations.courseId.msg ? Errors.educations.courseId.msg : 'degree' }}</div>
                            </div>
                            <div class="col-2">
                                <div class="q-mb-xs">
                                    <div class="text-caption text-uppercase" :class="Errors.educations.startDate.msg ? 'text-negative' : 'text-grey'">{{ Errors.educations.startDate.msg ? Errors.educations.startDate.msg : 'start date (YYYY-MM-DD)' }}</div>
                                </div>
                            </div>
                            <div class="col-2">
                                <div class="q-mb-xs">
                                    <div class="text-caption text-uppercase" :class="Errors.educations.endDate.msg ? 'text-negative' : 'text-grey'">{{ Errors.educations.endDate.msg ? Errors.educations.endDate.msg : 'end date (YYYY-MM-DD)' }}</div>
                                </div>
                            </div>
                        </div>
                        <div class="row q-col-gutter-xs q-mb-xs" v-for="(value, index) in educations" :key="index">
                            <div class="col-2">
                                <q-select
                                    outlined
                                    v-model="value.schoollevel"
                                    label="Choose School Level"
                                    input-debounce="300"
                                    :options="schoollevels"
                                    :error="Errors.educations.schoollevel.type[index]"
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
                                                <q-item-label>{{ $CapitalizeWords(scope.opt) }}</q-item-label>
                                            </q-item-section>
                                        </q-item>
                                    </template>
                                </q-select>
                            </div>
                            <div class="col-2">
                                <q-select
                                    outlined
                                    v-model="value.schoolId"
                                    label="Choose School"
                                    emit-value
                                    map-options
                                    use-input
                                    input-debounce="300"
                                    :options="filteredSchools"
                                    @filter="filterSchoolFn"
                                    :error="Errors.educations.schoolId.type[index]"
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
                                <q-select
                                    outlined
                                    v-model="value.courseId"
                                    label="Choose Degree"
                                    emit-value
                                    map-options
                                    use-input
                                    input-debounce="300"
                                    :options="filteredCourses"
                                    @filter="filterCoursesFn"
                                    :error="Errors.educations.courseId.type[index]"
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
                                <q-input outlined v-model="value.startDate" label="Enter Date">
                                    <q-popup-proxy cover transition-show="scale" transition-hide="scale" class="no-shadow custom-border radius-sm" :ref="el => eduStartPopups[index] = el">
                                        <q-date v-model="value.startDate" mask="YYYY-MM-DD" @update:model-value="() => hideEduStartPopup(index)"/>
                                    </q-popup-proxy>
                                </q-input>
                            </div>
                            <div class="col-2">
                                <q-input outlined v-model="value.endDate" label="Enter Date">
                                    <q-popup-proxy cover transition-show="scale" transition-hide="scale" class="no-shadow custom-border radius-sm" :ref="el => eduEndPopups[index] = el">
                                        <q-date v-model="value.endDate" mask="YYYY-MM-DD" @update:model-value="() => hideEduEndPopup(index)"/>
                                    </q-popup-proxy>
                                </q-input>
                            </div>
                            <div class="col-1">
                                <q-btn 
                                    v-if="educations.length > 1" 
                                    round 
                                    icon="delete" 
                                    flat 
                                    unelevated 
                                    color="grey" 
                                    @click="removeEducation(index)" 
                                    size="sm"
                                    class="q-mt-md"
                                />
                            </div>
                        </div>
                    </div>
                    <div class="q-mb-sm q-mt-xl">
                        <span class="text-overline text-uppercase text-bold q-mr-md">training information</span>
                        <q-btn icon="add" round size="sm" outline unelevated color="primary" @click="addTraining"/>
                    </div>
                    <div class="q-mb-md">
                        <div class="row q-col-gutter-xs q-mb-xs">
                            <div class="col-2">
                                <div class="q-mb-xs">
                                    <div class="text-caption text-uppercase" :class="Errors.trainings.trainingtype.msg ? 'text-negative' : 'text-grey'">{{ Errors.trainings.trainingtype.msg ? Errors.trainings.trainingtype.msg : 'training type' }}</div>
                                </div>
                            </div>
                            <div class="col-3">
                                <div class="q-mb-xs">
                                    <div class="text-caption text-uppercase" :class="Errors.trainings.title.msg ? 'text-negative' : 'text-grey'">{{ Errors.trainings.title.msg ? Errors.trainings.title.msg : 'title' }}</div>
                                </div>
                            </div>
                            <div class="col-2">
                                <div class="q-mb-xs">
                                    <div class="text-caption text-uppercase" :class="Errors.trainings.startDate.msg ? 'text-negative' : 'text-grey'">{{ Errors.trainings.startDate.msg ? Errors.trainings.startDate.msg : 'start date (YYYY-MM-DD)' }}</div>
                                </div>
                            </div>
                            <div class="col-2">
                                <div class="q-mb-xs">
                                    <div class="text-caption text-uppercase" :class="Errors.trainings.endDate.msg ? 'text-negative' : 'text-grey'">{{ Errors.trainings.endDate.msg ? Errors.trainings.endDate.msg : 'end date (YYYY-MM-DD)' }}</div>
                                </div>
                            </div>
                            <div class="col-2">
                                <div class="q-mb-xs">
                                    <div class="text-caption text-uppercase" :class="Errors.trainings.hour.msg ? 'text-negative' : 'text-grey'">{{ Errors.trainings.hour.msg ? Errors.trainings.hour.msg : 'hour/s' }}</div>
                                </div>
                            </div>
                        </div>
                        <div class="row q-col-gutter-xs q-mb-xs" v-for="(value, index) in trainings" :key="index">
                            <div class="col-2">
                                <q-select
                                    outlined
                                    v-model="value.trainingtype"
                                    label="Choose Training Type"
                                    input-debounce="300"
                                    :options="trainingtypes"
                                    :error="Errors.trainings.trainingtype.type[index]"
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
                                                <q-item-label>{{ $CapitalizeWords(scope.opt) }}</q-item-label>
                                            </q-item-section>
                                        </q-item>
                                    </template>
                                </q-select>
                            </div>
                            <div class="col-3">
                                <q-input 
                                    v-model="value.title" 
                                    label="Enter Title"
                                    outlined 
                                    :error="Errors.trainings.title.type[index]"
                                    :no-error-icon="true"
                                    input-class="text-capitalize"
                                />
                            </div>
                            <div class="col-2">
                                <q-input outlined v-model="value.startDate" label="Enter Date">
                                    <q-popup-proxy cover transition-show="scale" transition-hide="scale" class="no-shadow custom-border radius-sm" :ref="el => trainingStartPopups[index] = el">
                                        <q-date v-model="value.startDate" mask="YYYY-MM-DD" @update:model-value="() => hideTrainingStartPopup(index)"/>
                                    </q-popup-proxy>
                                </q-input>
                            </div>
                            <div class="col-2">
                                <q-input outlined v-model="value.endDate" label="Enter Date">
                                    <q-popup-proxy cover transition-show="scale" transition-hide="scale" class="no-shadow custom-border radius-sm" :ref="el => trainingEndPopups[index] = el">
                                        <q-date v-model="value.endDate" mask="YYYY-MM-DD" @update:model-value="() => hideTrainingEndPopup(index)"/>
                                    </q-popup-proxy>
                                </q-input>
                            </div>
                            <div class="col-2">
                                <q-input 
                                    v-model="value.hour" 
                                    label="Enter Hour/s"
                                    outlined 
                                    :error="Errors.trainings.hour.type[index]"
                                    :no-error-icon="true"
                                />
                            </div>
                            <div class="col-1">
                                <q-btn 
                                    v-if="trainings.length > 1" 
                                    round 
                                    icon="delete" 
                                    flat 
                                    unelevated 
                                    color="grey" 
                                    @click="removeTraining(index)" 
                                    size="sm"
                                    class="q-mt-md"
                                />
                            </div>
                        </div>
                    </div>
                    <div class="q-mb-sm q-mt-xl">
                        <span class="text-overline text-uppercase text-bold q-mr-md">experience information</span>
                        <q-btn icon="add" round size="sm" outline unelevated color="primary" @click="addExperience"/>
                    </div>
                    <div class="q-mb-md">
                        <div class="row q-col-gutter-xs q-mb-xs">
                            <div class="col-3">
                                <div class="q-mb-xs">
                                    <div class="text-caption text-uppercase" :class="Errors.experiences.position.msg ? 'text-negative' : 'text-grey'">{{ Errors.experiences.position.msg ? Errors.experiences.position.msg : 'position' }}</div>
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="q-mb-xs">
                                    <div class="text-caption text-uppercase" :class="Errors.experiences.description.msg ? 'text-negative' : 'text-grey'">{{ Errors.experiences.description.msg ? Errors.experiences.description.msg : 'job description' }}</div>
                                </div>
                            </div>
                            <div class="col-2">
                                <div class="q-mb-xs">
                                    <div class="text-caption text-uppercase" :class="Errors.experiences.startDate.msg ? 'text-negative' : 'text-grey'">{{ Errors.experiences.startDate.msg ? Errors.experiences.startDate.msg : 'start date (YYYY-MM-DD)' }}</div>
                                </div>
                            </div>
                            <div class="col-2">
                                <div class="q-mb-xs">
                                    <div class="text-caption text-uppercase" :class="Errors.experiences.endDate.msg ? 'text-negative' : 'text-grey'">{{ Errors.experiences.endDate.msg ? Errors.experiences.endDate.msg : 'end date (YYYY-MM-DD)' }}</div>
                                </div>
                            </div>
                        </div>
                        <div class="row q-col-gutter-xs q-mb-xs" v-for="(value, index) in experiences" :key="index">
                            <div class="col-3">
                                <q-input 
                                    v-model="value.position" 
                                    label="Enter Position"
                                    outlined 
                                    :error="Errors.experiences.position.type[index]"
                                    :no-error-icon="true"
                                    input-class="text-capitalize"
                                />
                            </div>
                            <div class="col-4">
                                <q-input 
                                    v-model="value.description" 
                                    label="EnterJob Description"
                                    outlined 
                                    :error="Errors.experiences.description.type[index]"
                                    :no-error-icon="true"
                                />
                            </div>
                            <div class="col-2">
                                <q-input outlined v-model="value.startDate" label="Enter Date">
                                    <q-popup-proxy cover transition-show="scale" transition-hide="scale" class="no-shadow custom-border radius-sm" :ref="el => expStartPopups[index] = el">
                                        <q-date v-model="value.startDate" mask="YYYY-MM-DD" @update:model-value="() => hideExpStartPopup(index)"/>
                                    </q-popup-proxy>
                                </q-input>
                            </div>
                            <div class="col-2">
                                <q-input outlined v-model="value.endDate" label="Enter Date">
                                    <q-popup-proxy cover transition-show="scale" transition-hide="scale" class="no-shadow custom-border radius-sm" :ref="el => expEndPopups[index] = el">
                                        <q-date v-model="value.endDate" mask="YYYY-MM-DD" @update:model-value="() => hideExpEndPopup(index)"/>
                                    </q-popup-proxy>
                                </q-input>
                            </div>
                            <div class="col-1">
                                <q-btn 
                                    v-if="experiences.length > 1" 
                                    round 
                                    icon="delete" 
                                    flat 
                                    unelevated 
                                    color="grey" 
                                    @click="removeExperience(index)" 
                                    size="sm"
                                    class="q-mt-md"
                                />
                            </div>
                        </div>
                    </div>
                    <div class="q-mb-sm q-mt-xl">
                        <span class="text-overline text-uppercase text-bold q-mr-md">document information</span>
                        <q-btn icon="add" round size="sm" outline unelevated color="primary" @click="addDocument"/>
                    </div>
                    <div class="q-mb-md">
                        <div class="row q-col-gutter-xs q-mb-xs">
                            <div class="col-2">
                                <div class="q-mb-xs">
                                    <div class="text-caption text-uppercase" :class="Errors.documents.file.msg ? 'text-negative' : 'text-grey'">{{ Errors.documents.file.msg ? Errors.documents.file.msg : 'documents' }}</div>
                                </div>
                            </div>
                        </div>
                        <div class="row q-col-gutter-xs q-mb-xs" v-for="(value, index) in documents" :key="index">
                            <div class="col-3">
                                <q-file 
                                    v-model="value.file" 
                                    label="Upload File"
                                    outlined 
                                    :error="Errors.documents.file.type[index]"
                                    :no-error-icon="true"
                                />
                            </div>
                            <div class="col-1">
                                <q-btn 
                                    v-if="documents.length > 1" 
                                    round 
                                    icon="delete" 
                                    flat 
                                    unelevated 
                                    color="grey" 
                                    @click="removeDocument(index)" 
                                    size="sm"
                                    class="q-mt-md"
                                />
                            </div>
                        </div>
                    </div>
                </q-card-section>
                
                <q-card-actions class="q-pa-lg bg">
                    <div class="q-gutter-sm">
                        <q-btn v-if="!isEdit || isActive" unelevated size="md" color="primary" class="btn text-capitalize" label="save" @click="Save" />
                        <q-btn v-if="isEdit" unelevated size="md" color="primary" class="btn text-capitalize" :label="isActive ? 'disable' : 'enable'" @click="Toggle"/>
                        <q-btn unelevated size="md" color="primary" class="btn text-capitalize" label="discard" @click="() => { dialog = false; }" outline/>
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
        <q-dialog v-model="DetailDialog" full-height position="right" persistent square class="dialog">
            <q-card class="dialog-card column full-height">
                <q-card-section class="q-pa-lg">
                    <div class="text-h6 text-uppercase">applicant information</div>
                </q-card-section>
                <q-separator inset />
                <q-card-section class="col q-pa-lg scroll">
                    <div class="q-mb-lg">
                        <div class="text-h6 text-uppercase text-bold q-mb-md">vacancy information</div>
                        <div class="row q-col-gutter-xs q-mb-md">
                            <div class="col-4">
                                <div class="q-mb-md">
                                    <div class="text-caption text-uppercase text-grey">position</div>
                                    <div class="text-body1 text-uppercase">{{ info?.vacancy?.position?.name }}</div>
                                </div>
                                <div class="q-mb-md">
                                    <div class="text-caption text-uppercase text-grey">salary range</div>
                                    <div class="text-body1 text-uppercase">{{ info?.vacancy?.salary_range }}</div>
                                </div>
                                <div class="q-mb-md">
                                    <div class="text-caption text-uppercase text-grey">company</div>
                                    <div class="text-body1">{{ info?.vacancy?.company?.name }}</div>
                                </div>
                                <div class="q-mb-md">
                                    <div class="text-caption text-uppercase text-grey">department</div>
                                    <div class="text-body1">{{ info?.vacancy?.department?.name }}</div>
                                </div>
                                <div class="q-mb-md">
                                    <div class="text-caption text-uppercase text-grey">schedule</div>
                                    <div class="text-body1">{{ info?.vacancy?.schedule?.name }},&nbsp;{{ formatTime(info?.vacancy?.schedule?.time_start) }} to {{ formatTime(info?.vacancy?.schedule?.time_end) }}</div>
                                </div>
                                <div class="q-mb-md">
                                    <div class="text-caption text-uppercase text-grey">work location</div>
                                    <div class="text-body1">{{ info?.vacancy?.location }}</div>
                                </div>
                            </div>
                            <div class="col-8">
                                <div class="q-mb-md">
                                    <div class="text-caption text-uppercase text-grey">job description</div>
                                    <div class="text-body1">{{ info?.vacancy?.position?.description }}</div>
                                </div>
                                <div class="q-mb-md">
                                    <div class="text-caption text-uppercase text-grey">job qualifications</div>
                                    <div class="text-body1" v-for="(v, index) in info?.vacancy?.position?.qualification" :key="index">{{ (index+1) }}. {{ v || 'N/A' }}</div>
                                </div>
                            </div>
                        </div>
                        <div class="row q-col-gutter-lg q-mb-md">
                            <div>
                                <div class="text-caption text-uppercase text-grey">date needed</div>
                                <div class="text-body1">{{ formatDate(info?.vacancy?.date_needed) }}</div>
                            </div>
                            <div>
                                <div class="text-caption text-uppercase text-grey">need background check</div>
                                <div class="text-body1">{{ info?.vacancy?.need_background_check ? 'Yes' : 'No' }}</div>
                            </div>
                            <div>
                                <div class="text-caption text-uppercase text-grey">movement</div>
                                <div class="text-body1">{{ info?.vacancy?.movement }}</div>
                            </div>
                        </div>
                        <div class="q-mb-md">
                            <div class="text-caption text-uppercase text-grey">justification</div>
                            <div class="text-body1">{{ info?.vacancy?.justification }}</div>
                        </div>
                        <div class="row q-col-gutter-lg q-mb-mb">
                            <div>
                                <div class="text-caption text-uppercase text-grey">sex</div>
                                <div class="text-body1">{{ info?.vacancy?.sex }}</div>
                            </div>
                            <div>
                                <div class="text-caption text-uppercase text-grey">school level</div>
                                <div class="text-body1">{{ info?.vacancy?.school_level }}</div>
                            </div>
                            <div>
                                <div class="text-caption text-uppercase text-grey">year/s of experience</div>
                                <div class="text-body1">{{ info?.vacancy?.year_experience }}</div>
                            </div>
                            <div>
                                <div class="text-caption text-uppercase text-grey">age range</div>
                                <div class="text-body1">{{ info?.vacancy?.age_range }}</div>
                            </div>
                        </div>
                    </div>
                    <div class="q-mb-lg">
                        <div class="text-h6 text-uppercase text-bold q-mb-md">applicant information</div>
                        <div class="q-mb-md">
                            <div class="text-caption text-uppercase text-grey">name</div>
                            <div class="text-body1 text-uppercase">{{ formatName(info) }}</div>
                        </div>
                        <div class="q-mb-md">
                            <div class="text-caption text-uppercase text-grey">status</div>
                            <div class="text-body1 text-uppercase">{{ info?.status }}</div>
                        </div>
                        <div class="row q-col-gutter-lg q-mb-mb">
                            <div class="q-mb-md">
                                <div class="text-caption text-uppercase text-grey">sex</div>
                                <div class="text-body1 text-uppercase">{{ info?.sex }}</div>
                            </div>
                            <div class="q-mb-md">
                                <div class="text-caption text-uppercase text-grey">marital status</div>
                                <div class="text-body1 text-uppercase">{{ info?.civil_status }}</div>
                            </div>
                            <div class="q-mb-md">
                                <div class="text-caption text-uppercase text-grey">bithdate</div>
                                <div class="text-body1 text-uppercase">{{ info?.birthdate }}</div>
                            </div>
                            <div class="q-mb-md">
                                <div class="text-caption text-uppercase text-grey">birthplace</div>
                                <div class="text-body1 text-uppercase">{{ info?.birthplace }}</div>
                            </div>
                        </div>
                        <div class="q-mb-md">
                            <div class="text-caption text-uppercase text-grey">address</div>
                            <div class="text-body1 text-uppercase">{{ info?.address }}</div>
                        </div>
                        <div class="row q-col-gutter-lg q-mb-mb">
                            <div class="q-mb-md">
                                <div class="text-caption text-uppercase text-grey">blood type</div>
                                <div class="text-body1 text-uppercase">{{ info?.blood_type }}</div>
                            </div>
                            <div class="q-mb-md">
                                <div class="text-caption text-uppercase text-grey">email</div>
                                <div class="text-body1 text-uppercase">{{ info?.email }}</div>
                            </div>
                            <div class="q-mb-md">
                                <div class="text-caption text-uppercase text-grey">contact number</div>
                                <div class="text-body1 text-uppercase">{{ info?.contact_number }}</div>
                            </div>
                        </div>
                        <div class="q-mb-md">
                            <div class="text-caption text-uppercase text-grey q-mb-sm">educational attainment</div>
                            <div class="card-grid">
                                <div
                                    v-for="(data, index) in info?.educations"
                                    :key="`data-${data.id}`"
                                    class="inner-card-anim-wrapper"
                                    :style="{ animationDelay: `${index * 120}ms` }"
                                >
                                    <q-card 
                                        class="card card-hover-animate flex flex-center no-shadow cursor-pointer radius-sm" 
                                    >
                                        <q-card-section class="text-center full-width">
                                            <div class="text-caption text-uppercase">{{ data?.course?.name }}</div>
                                            <div class="text-caption text-capitalize text-grey">{{ data?.school?.name }}</div>
                                        </q-card-section>
                                        <q-card-section class="text-center full-width">
                                            <div class="text-caption">{{ data?.school_level }}</div>
                                            <div class="text-caption text-grey">{{ data?.start_date }} to {{ data?.end_date }}</div>
                                        </q-card-section>
                                    </q-card>
                                </div>
                            </div>
                        </div>
                        <div class="q-mb-md">
                            <div class="text-caption text-uppercase text-grey q-mb-sm">trainings</div>
                            <div class="card-grid">
                                <div
                                    v-for="(data, index) in info?.trainings"
                                    :key="`data-${data.id}`"
                                    class="inner-card-anim-wrapper"
                                    :style="{ animationDelay: `${index * 120}ms` }"
                                >
                                    <q-card 
                                        class="card card-hover-animate flex flex-center no-shadow cursor-pointer radius-sm" 
                                    >
                                        <q-card-section class="text-center full-width">
                                            <div class="text-subtitle1 text-uppercase">{{ data?.title }}</div>
                                            <div class="text-caption text-uppercase">{{ data?.type }}</div>
                                        </q-card-section>
                                        <q-card-section class="text-center full-width">
                                            <div class="text-caption text-grey">{{ data?.start_date }} to {{ data?.end_date }}</div>
                                            <div class="text-caption text-grey">{{ data?.hour }}hr/s</div>
                                        </q-card-section>
                                    </q-card>
                                </div>
                            </div>
                        </div>
                        <div class="q-mb-md">
                            <div class="text-caption text-uppercase text-grey q-mb-sm">work experiences</div>
                            <div class="card-grid">
                                <div
                                    v-for="(data, index) in info?.experiences"
                                    :key="`data-${data.id}`"
                                    class="inner-card-anim-wrapper"
                                    :style="{ animationDelay: `${index * 120}ms` }"
                                >
                                    <q-card 
                                        class="card card-hover-animate flex flex-center no-shadow cursor-pointer radius-sm" 
                                    >
                                        <q-card-section class="text-center full-width">
                                            <div class="text-subtitle1 text-uppercase">{{ data?.position }}</div>
                                        </q-card-section>
                                        <q-card-section class="text-center full-width">
                                            <div class="text-caption text-grey">{{ data?.start_date }} to {{ data?.end_date }}</div>
                                        </q-card-section>
                                    </q-card>
                                </div>
                            </div>
                        </div>
                        <div class="q-mb-md">
                            <div class="text-caption text-uppercase text-grey q-mb-sm">documents uploaded</div>
                            <div class="card-grid">
                                <div
                                    v-for="(data, index) in info?.documents"
                                    :key="`data-${data.id}`"
                                    class="inner-card-anim-wrapper"
                                    :style="{ animationDelay: `${index * 120}ms` }"
                                >
                                    <q-card 
                                        class="card card-hover-animate flex flex-center no-shadow cursor-pointer radius-sm" 
                                    >
                                        <q-card-section class="text-center full-width">
                                            <div class="text-subtitle1 text-uppercase" @click="ViewDocument(data)">{{ data?.filename }}</div>
                                        </q-card-section>
                                    </q-card>
                                </div>
                            </div>
                        </div>
                    </div>
                </q-card-section>
                
                <q-card-actions class="q-pa-lg bg">
                    <div class="row q-col-gutter-sm">
                        <div v-if="info?.status !== 'Hired' && info?.status !== 'Rejected' && info?.status !== 'Withdrawn'">
                            <q-select
                                outlined
                                v-model="applicationstatus"
                                input-debounce="300"
                                use-input
                                :options="applicationstatuses"
                                :error="Errors.applicationstatus.type"
                                dropdown-icon="keyboard_arrow_down"
                                :no-error-icon="true"
                                dense
                            />
                        </div>
                        <div v-if="info?.status !== 'Hired' && info?.status !== 'Rejected' && info?.status !== 'Withdrawn'">
                            <q-btn unelevated size="md" color="primary" class="btn text-capitalize" label="update" >
                                <q-menu transition-show="jump-up" transition-hide="jump-down" :offset="[0, 15]" class="radius-sm" style="box-shadow: rgba(0, 0, 0, 0.09) 0px 3px 12px;">
                                    <q-card class="no-shadow  radius-sm q-pa-lg" style="width: 300px;">
                                        <q-card-section>
                                            <div class="text-h6 text-center text-uppercase">
                                                proceed to update status
                                            </div>
                                        </q-card-section>
                                        <q-card-actions>
                                            <q-btn unelevated size="md" color="primary" class="full-width text-capitalize" label="proceed" @click="UpdateApplication(info)"/>
                                        </q-card-actions>
                                    </q-card>
                                </q-menu>
                            </q-btn>
                        </div>
                        <div class="q-gutter-sm">
                            <q-btn unelevated size="md" color="primary" class="btn text-capitalize" label="print" @click="PrintApplication(info.id)"/>
                            <q-btn unelevated size="md" color="primary" class="btn text-capitalize" label="discard" @click="() => { DetailDialog = false; }" outline/>
                        </div>
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
    onBeforeMount,
    nextTick
} from 'vue';

import { api } from 'src/boot/axios';

import { Toast } from 'src/boot/sweetalert'; 

import moment from 'moment';

import { useAuthStore } from 'src/stores/auth-store';

const AuthStore = useAuthStore();

const dialog = ref(false);
const isEdit = ref(false);
const ApplicationSubmitting = ref(false);

const vacancyId = ref('');
const firstname = ref('');
const middlename = ref('');
const lastname = ref('');
const suffix = ref('');
const sex = ref('');
const civilstatus = ref('');
const birthdate = ref(new Date().toISOString().split('T')[0]);
const birthplace = ref('');
const bloodtype = ref('');
const address = ref('');
const email = ref('');
const contactNo = ref('09');
const educations = ref([
    {
        schoollevel: "",
        schoolId: "",
        courseId: "",
        startDate: new Date().toISOString().split('T')[0],
        endDate: new Date().toISOString().split('T')[0]
    }
]);
const trainings = ref([
    {
        title: '',
        startDate: new Date().toISOString().split('T')[0],
        endDate: new Date().toISOString().split('T')[0],
        hour: '',
        typeId: '',
        conductedBy: ''
    }
]);
const experiences = ref([
    {
        position: '',
        startDate: new Date().toISOString().split('T')[0],
        endDate: new Date().toISOString().split('T')[0],
        description: ''
    }
]);
const documents = ref([
    {
        file: ''
    }
]);
const applicationstatus = ref('');

const Errors = reactive({
    vacancyId: {
        type: null, msg: ''
    },
    firstname: {
        type: null, msg: ''
    },
    middlename: {
        type: null, msg: ''
    },
    lastname: {
        type: null, msg: ''
    },
    suffix: {
        type: null, msg: ''
    },
    sex: {
        type: null, msg: ''
    },
    civilstatus: {
        type: null, msg: ''
    },
    birthdate: {
        type: null, msg: ''
    },
    birthplace: {
        type: null, msg: ''
    },
    bloodtype: {
        type: null, msg: ''
    },
    address: {
        type: null, msg: ''
    },
    email: {
        type: null, msg: ''
    },
    contactNo: {
        type: null, msg: ''
    },
    //
    educations: {
        schoollevel: {
            type: [], msg: ''
        },
        schoolId: {
            type: [], msg: ''
        },
        courseId: {
            type: [], msg: ''
        },
        startDate: {
            type: [], msg: ''
        },
        endDate: {
            type: [], msg: ''
        }
    },
    trainings: {
        trainingtype: {
            type: [], msg: ''
        },
        title: {
            type: [], msg: ''
        },
        startDate: {
            type: [], msg: ''
        },
        endDate: {
            type: [], msg: ''
        },
        hour: {
            type: [], msg: ''
        }
    },
    experiences: {
        position: {
            type: [], msg: ''
        },
        startDate: {
            type: [], msg: ''
        },
        endDate: {
            type: [], msg: ''
        },
        description: {
            type: [], msg: ''
        }
    },
    documents: {
        file: {
            type: [], msg: ''
        }
    },
    //
    applicationstatus: {
        type: [], msg: ''
    }
});

const initErrors = () => {

    Errors.educations.schoollevel.type = educations.value.map(() => null);
    Errors.educations.schoolId.type = educations.value.map(() => null);
    Errors.educations.courseId.type = educations.value.map(() => null);
    Errors.educations.startDate.type = educations.value.map(() => null);
    Errors.educations.endDate.type = educations.value.map(() => null);
    
    Errors.trainings.trainingtype.type = trainings.value.map(() => null);
    Errors.trainings.title.type = trainings.value.map(() => null);
    Errors.trainings.startDate.type = trainings.value.map(() => null);
    Errors.trainings.endDate.type = trainings.value.map(() => null);
    Errors.trainings.hour.type = trainings.value.map(() => null);

    Errors.experiences.position.type = experiences.value.map(() => null);
    Errors.experiences.startDate.type = experiences.value.map(() => null);
    Errors.experiences.endDate.type = experiences.value.map(() => null);
    Errors.experiences.description.type = experiences.value.map(() => null);
    Errors.documents.file.type = documents.value.map(() => null);
}

const Validations = () => {

    let isError = false;
    
    Errors.educations.schoollevel = { type: null, msg: '' }
    Errors.educations.schoolId = { type: null, msg: '' }
    Errors.educations.courseId = { type: null, msg: '' }
    Errors.educations.startDate = { type: null, msg: '' }
    Errors.educations.endDate = { type: null, msg: '' }

    Errors.trainings.trainingtype = { type: null, msg: ''}
    Errors.trainings.title = { type: null, msg: ''}
    Errors.trainings.startDate = { type: null, msg: ''}
    Errors.trainings.endDate = { type: null, msg: ''}
    Errors.trainings.hour = { type: null, msg: ''}

    Errors.experiences.position = { type: null, msg: '' }
    Errors.experiences.startDate = { type: null, msg: '' }
    Errors.experiences.endDate = { type: null, msg: '' }
    Errors.experiences.description = { type: null, msg: '' }
    Errors.documents.file = { type: null, msg: '' }

    if (!vacancyId.value) {
        Errors.vacancyId.type = true;
        Errors.vacancyId.msg = 'vacancy is required';
        isError = true;
    } else {
        Errors.vacancyId.type = null;
    }

    if (!firstname.value) {
        Errors.firstname.type = true;
        Errors.firstname.msg = 'first name is required';
        isError = true;
    } else {
        Errors.firstname.type = null;
    }

    if (!middlename.value) {
        Errors.middlename.type = true;
        Errors.middlename.msg = 'middle name is required';
        isError = true;
    } else {
        Errors.middlename.type = null;
    }

    if (!lastname.value) {
        Errors.lastname.type = true;
        Errors.lastname.msg = 'last name is required';
        isError = true;
    } else {
        Errors.lastname.type = null;
    }

    const allowedSuffixes = ['SR', 'JR', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X'];
    if (suffix.value) {
        const suffixValue = suffix.value.trim().toUpperCase();
        if (!allowedSuffixes.includes(suffixValue)) {
            Errors.suffix.type = true;
            Errors.suffix.msg = 'invalid suffix';
            isError = true;
        } else {
            Errors.suffix.type = null;
        }
    } else {
        Errors.suffix.type = null;
    }

    if (!sex.value) {
        Errors.sex.type = true;
        Errors.sex.msg = 'sex is required';
        isError = true;
    } else {
        Errors.sex.type = null;
    }

    if (!civilstatus.value) {
        Errors.civilstatus.type = true;
        Errors.civilstatus.msg = 'civil status is required';
        isError = true;
    } else {
        Errors.civilstatus.type = null;
    }

    if (!birthdate.value) {
        Errors.birthdate.type = true;
        Errors.birthdate.message = 'Date is required';
        isError = true;
    } else {
        Errors.birthdate.type = null;
    }

    if (!birthplace.value) {
        Errors.birthplace.type = true;
        Errors.birthplace.msg = 'birthplace is required';
        isError = true;
    } else {
        Errors.birthplace.type = null;
    }

    if (!address.value) {
        Errors.address.type = true;
        Errors.address.msg = 'address is required';
        isError = true;
    } else {
        Errors.address.type = null;
    }

    if (!bloodtype.value) {
        Errors.bloodtype.type = true;
        Errors.bloodtype.msg = 'blood type is required';
        isError = true;
    } else {
        Errors.bloodtype.type = null;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.value) {
        Errors.email.type = true;
        Errors.email.msg = 'email is required';
        isError = true;
    } else if (!emailRegex.test(email.value)) {
        Errors.email.type = true;
        Errors.email.msg = 'email must be a valid email address';
        isError = true;
    } else if (email.value.length > 100) {
        Errors.email.type = true;
        Errors.email.msg = 'email must not exceed 100 characters';
        isError = true;
    } else {
        Errors.email.type = null;
    }

    const phMobileRegex = /^(09\d{9}|\+639\d{9})$/;
    if (!contactNo.value) {
        Errors.contactNo.type = true;
        Errors.contactNo.msg = 'contact number is required';
        isError = true;
    } else {
        Errors.contactNo.type = null;
    }

    initErrors()
    
    educations.value.forEach((e, index) => {
        if (!e.schoollevel) {
            Errors.educations.schoollevel.type[index] = true;
            Errors.educations.schoollevel.msg = 'school level is required';
            isError = true;
        }
        if (!e.schoolId) {
            Errors.educations.schoolId.type[index] = true;
            Errors.educations.schoolId.msg = 'school is required';
            isError = true;
        }
        if (!e.courseId) {
            Errors.educations.courseId.type[index] = true;
            Errors.educations.courseId.msg = 'degree is required';
            isError = true;
        }
        if (!e.startDate) {
            Errors.educations.startDate.type[index] = true;
            Errors.educations.startDate.msg = 'start date is required';
            isError = true;
        } else if (isNaN(new Date(e.startDate).getTime())) {
            Errors.educations.startDate.type[index] = true;
            Errors.educations.startDate.msg = 'start date must be a valid date';
            isError = true;
        }
        if (!e.endDate) {
            Errors.educations.endDate.type[index] = true;
            Errors.educations.endDate.msg = 'end date is required';
            isError = true;
        } else if (isNaN(new Date(e.endDate).getTime())) {
            Errors.educations.endDate.type[index] = true;
            Errors.educations.endDate.msg = 'end date must be a valid date';
            isError = true;
        }
    });

    trainings.value.forEach((e, index) => {
        if (!e.trainingtype) {
            Errors.trainings.trainingtype.type[index] = true;
            Errors.trainings.trainingtype.msg = 'training type is required';
            isError = true;
        }
        if (!e.title) {
            Errors.trainings.title.type[index] = true;
            Errors.trainings.title.msg = 'title is required';
            isError = true;
        }
        if (!e.startDate) {
            Errors.trainings.startDate.type[index] = true;
            Errors.trainings.startDate.msg = 'start date is required';
            isError = true;
        } else if (isNaN(new Date(e.startDate).getTime())) {
            Errors.trainings.startDate.type[index] = true;
            Errors.trainings.startDate.msg = 'start date must be a valid date';
            isError = true;
        }
        if (!e.endDate) {
            Errors.trainings.endDate.type[index] = true;
            Errors.trainings.endDate.msg = 'end date is required';
            isError = true;
        } else if (isNaN(new Date(e.endDate).getTime())) {
            Errors.trainings.endDate.type[index] = true;
            Errors.trainings.endDate.msg = 'end date must be a valid date';
            isError = true;
        }
        if (!e.hour) {
            Errors.trainings.hour.type[index] = true;
            Errors.trainings.hour.msg = 'hour/s is required';
            isError = true;
        } else if (isNaN(e.hour) || e.hour < 1 || e.hour > 23) {
            Errors.trainings.hour.type[index] = true;
            Errors.trainings.hour.msg = 'hour/s must be a valid number between 1 to 23';
            isError = true;
        }
    });
    
    experiences.value.forEach((e, index) => {
        if (!e.position) {
            Errors.experiences.position.type[index] = true;
            Errors.experiences.position.msg = 'position is required';
            isError = true;
        }
        if (!e.startDate) {
            Errors.experiences.startDate.type[index] = true;
            Errors.experiences.startDate.msg = 'start date is required';
            isError = true;
        } else if (isNaN(new Date(e.startDate).getTime())) {
            Errors.experiences.startDate.type[index] = true;
            Errors.experiences.startDate.msg = 'start date must be a valid date';
            isError = true;
        }
        if (!e.endDate) {
            Errors.experiences.endDate.type[index] = true;
            Errors.experiences.endDate.msg = 'end date is required';
            isError = true;
        } else if (isNaN(new Date(e.endDate).getTime())) {
            Errors.experiences.endDate.type[index] = true;
            Errors.experiences.endDate.msg = 'end date must a valid date';
            isError = true;
        }
        if (!e.description) {
            Errors.experiences.description.type[index] = true;
            Errors.experiences.description.msg = 'job description is required';
            isError = true;
        }
    });
    
    documents.value.forEach((e, index) => {
        const maxSize = 5 * 1024 * 1024;
        if (!e.file) {
            Errors.documents.file.type[index] = true;
            Errors.documents.file.msg = 'file is required';
            isError = true;
        } else if (e.file.type !== 'application/pdf') {
            Errors.documents.file.type[index] = true;
            Errors.documents.file.msg = 'file must be a PDF document';
            isError = true;
        } else if (e.file.size > maxSize) {
            Errors.documents.file.type[index] = true;
            Errors.documents.file.msg = 'file size must not exceed to 5MB';
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

const UpdateValidations = () => {

    let isError = false;

    if (!applicationstatus.value) {
        Errors.applicationstatus.type = true;
        Errors.applicationstatus.msg = 'application status is required';
        isError = true;
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

const rows = ref([]);

const meta = ref({});
const page = ref(1);
const limit = ref(10);
const loading = ref(false);

const filter = ref('');

const LoadAll = async () => {
    loading.value = true;
    try {
        const { data } = await api.get(`/application`, {
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
    LoadVacancies();
    LoadCourses();
    LoadSchools();
    dialog.value = true;
}

const ResetErrors = () => {
    Object.keys(Errors).forEach(key => {
        const field = Errors[key];

        // Top-level single fields
        if (field.type !== undefined && !Array.isArray(field.type)) {
        field.type = null;
        field.msg = '';
        }
        // Top-level array fields
        else if (field.type !== undefined && Array.isArray(field.type)) {
        field.type = [];
        field.msg = '';
        }
        // Nested groups (educations, trainings, experiences, documents)
        else {
        Object.keys(field).forEach(sub => {
            if (Array.isArray(field[sub].type)) {
            field[sub].type = [];
            } else {
            field[sub].type = null;
            }
            field[sub].msg = '';
        });
        }
    });
}

const ResetForm = () => {
    vacancyId.value = '';
    firstname.value = '';
    middlename.value = '';
    lastname.value = '';
    suffix.value = '';
    sex.value = '';
    civilstatus.value = '';
    birthdate.value = new Date().toISOString().split('T')[0];
    birthplace.value = '';
    bloodtype.value = '';
    address.value = '';
    email.value = '';
    contactNo.value = '09';
    educations.value = ([
        {
            schoollevel: "",
            schoolId: "",
            courseId: "",
            startDate: new Date().toISOString().split('T')[0],
            endDate: new Date().toISOString().split('T')[0]
        }
    ]);
    trainings.value = ([
        {
            title: '',
            startDate: new Date().toISOString().split('T')[0],
            endDate: new Date().toISOString().split('T')[0],
            hour: '',
            typeId: '',
            conductedBy: ''
        }
    ]);
    experiences.value = ([
        {
            position: '',
            startDate: new Date().toISOString().split('T')[0],
            endDate: new Date().toISOString().split('T')[0],
            description: ''
        }
    ]);
    documents.value = ([
        {
            file: ''
        }
    ]);
    ResetErrors()
}

const Save = async () => {
    if (!Validations()) return;
    ApplicationSubmitting.value = true;
    try {
        const Data = new FormData();
        Data.append("vacancyId", vacancyId.value);
        Data.append("firstname", firstname.value);
        Data.append("middlename", middlename.value);
        Data.append("lastname", lastname.value);
        Data.append("suffix", suffix.value);
        Data.append("sex", sex.value);
        Data.append("civilstatus",civilstatus.value);
        Data.append("birthdate", birthdate.value);
        Data.append("birthplace", birthplace.value);
        Data.append("bloodtype", bloodtype.value);
        Data.append("email", email.value);
        Data.append("contactNo", contactNo.value);
        Data.append("address", address.value);
        Data.append("educations", JSON.stringify(educations.value));
        Data.append("trainings", JSON.stringify(trainings.value));
        Data.append("experiences", JSON.stringify(experiences.value));
        documents.value.forEach((doc, index) => {
            Data.append(`documents[${index}][documentId]`, doc.documentId);
            if (doc.file) {
                Data.append(`documents[${index}][file]`, doc.file);
            }
        });
        const response = await api.post('/application', Data, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        });
        rows.value.unshift(response.data.application)
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
        ApplicationSubmitting.value = false;
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
    DetailDialog.value = true;
    LoadApplication(data.id);
    applicationstatus.value = data.status;
}

const LoadApplication = async (id) => {
    DetailSubmitting.value = true
    try {
        const response = await api.get(`/application/${id}/details`);
        info.value = response.data.data;
    } catch (error) {
        console.error("Error fetching options:", error);
    } finally {
        DetailSubmitting.value = false;
    }
};

const UpdateApplication = async (data) => {
    if (!UpdateValidations()) return;
    DetailSubmitting.value = true;
    try {
        const response = await api.post(`/application/${data.id}/update`, {
            status: applicationstatus.value
        });
        Toast.fire({
            icon: "success",
            html: `
                <div class="text-h6 text-bold text-uppercase">granted!</div>
                <div class="text-caption text-capitalize;">${response.data.message}<div>
            `
        });
        info.value = response.data.application;
        UpdateList(response.data.application);
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

const vacancies = ref([]);
const sexes = ref(["Male", "Female"]);
const schoollevels = ref(["High School", "Vocational", "College", "Graduate Studies"]);
const civilstatuses = ref(["Single", "Married", "Widowed", "Divorced", "Separated"]);
const bloodtypes = ref(["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"]);
const schools = ref([]);
const courses = ref([]);
const trainingtypes = ref(["Managerial", "Supervisory", "Technical", "Orientation", "Compliance", "Seminar", "Workshop", "Conference", "Other"]);
const applicationstatuses = ["Pooling", "Shortlisted", "Interview", "Hired", "Rejected", "Withdrawn"];

const filteredSchools = ref([]);
const filteredCourses = ref([]);
const filteredApplicationStatuses = ref([]);

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

const filterSchoolFn = createFilterFn(schools, filteredSchools);
const filterCoursesFn = createFilterFn(courses, filteredCourses);
const filterApplicationStatusFn = createFilterFn(applicationstatuses, filteredApplicationStatuses);

const LoadVacancies = async () => {
    try {
        const response = await api.get(`/application/option/vacancy`);
        vacancies.value = response.data;
    } catch (error) {
        console.error("Error fetching options:", error);
    }
};

const LoadSchools = async () => {
    try {
        const response = await api.get(`/application/option/school`);
        schools.value = response.data;
    } catch (error) {
        console.error("Error fetching options:", error);
    }
};

const LoadCourses = async () => {
    try {
        const response = await api.get(`/application/option/course`);
        courses.value = response.data;
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

const formatBirthdate = (val) => {
    if (!val) {
        birthdate.value = "";
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
    birthdate.value = formatted;
}

const addEducation = () => {
    const e = educations.value;
    e.unshift({
        schoollevel: "",
        schoolId: "",
        courseId: "",
        startDate: new Date().toISOString().split('T')[0],
        endDate: new Date().toISOString().split('T')[0]
    });
}

const removeEducation = (index) => {
    educations.value.splice(index, 1);
    ResetEducationErrors()
}

const addTraining = () => {
    const t = trainings.value;
    t.unshift({
        trainingtype: "",
        title: "",
        startDate: new Date().toISOString().split('T')[0],
        endDate: new Date().toISOString().split('T')[0],
        hour: ""
    });
}

const removeTraining = (index) => {
    const t = trainings.value;
    t.splice(index, 1);
    ResetTrainingErrors()
}

const addExperience = () => {
    const e = experiences.value;
    e.unshift({
        position: "",
        description: "",
        startDate: new Date().toISOString().split('T')[0],
        endDate: new Date().toISOString().split('T')[0]
    });
}

const removeExperience = (index) => {
    const e = experiences.value;
    e.splice(index, 1);
    ResetExperienceErrors()
}

const addDocument = () => {
    const d = documents.value;
    d.unshift({
        file: ""
    });
}

const removeDocument = (index) => {
    const d = documents.value;
    d.splice(index, 1);
    ResetDocumentErrors()
}

const ViewDocument = (data) => {
    const file = `${process.env.VUE_APP_BACKEND_URL}${data.document}`;
    window.open(file, '_blank');
}

const isFinalStatus = computed(() => {
    return ['Hired', 'Rejected', 'Withdrawn'].includes(info?.status);
});

const printDialog = ref(false);
const pdf = ref(null);

const PrintApplication = async (data) => {
    DetailSubmitting.value = true;
    try {
        const res = await api.get(`/application/${data}/pdf`, {
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

const popup = ref(null);
// Refs for popups
const eduStartPopups = ref([]);
const eduEndPopups = ref([]);

const trainingStartPopups = ref([]);
const trainingEndPopups = ref([]);

const expStartPopups = ref([]);
const expEndPopups = ref([]);

// Safe hide functions
function hideEduStartPopup(index) {
  nextTick(() => {
    if (eduStartPopups.value[index]) eduStartPopups.value[index].hide();
  });
}
function hideEduEndPopup(index) {
  nextTick(() => {
    if (eduEndPopups.value[index]) eduEndPopups.value[index].hide();
  });
}

function hideTrainingStartPopup(index) {
  nextTick(() => {
    if (trainingStartPopups.value[index]) trainingStartPopups.value[index].hide();
  });
}
function hideTrainingEndPopup(index) {
  nextTick(() => {
    if (trainingEndPopups.value[index]) trainingEndPopups.value[index].hide();
  });
}

function hideExpStartPopup(index) {
  nextTick(() => {
    if (expStartPopups.value[index]) expStartPopups.value[index].hide();
  });
}
function hideExpEndPopup(index) {
  nextTick(() => {
    if (expEndPopups.value[index]) expEndPopups.value[index].hide();
  });
}

onMounted(() => {
    LoadAll();
})
</script>

<style scoped>

</style>