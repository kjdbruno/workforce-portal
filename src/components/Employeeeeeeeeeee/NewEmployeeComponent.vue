<template>
    <q-dialog v-model="model" full-height position="right" persistent square class="dialog">
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
                        <div
                            v-if="applications.length === 0"
                            class="inner-card-anim-wrapper"
                            :style="{ animationDelay: `${index * 120}ms` }"
                        >
                            <q-card 
                                class="card card-hover-animate flex flex-center q-pa-md no-shadow cursor-pointer radius-sm" 
                                tag="label"
                            >
                                <q-card-section class="text-center full-width">
                                    <div>
                                        <q-icon name="error" color="grey" size="lg"/>
                                    </div>
                                    <div class="text-caption text-capitalize text-grey">no hired applicant</div>
                                </q-card-section>
                            </q-card>
                        </div>
                        <div
                            v-for="(data, index) in applications"
                            :key="`data-${data.id}`"
                            class="inner-card-anim-wrapper"
                            :style="{ animationDelay: `${index * 120}ms` }"
                        >
                            <q-card 
                                class="card card-hover-animate flex flex-center q-pa-md no-shadow cursor-pointer radius-sm" 
                                tag="label"
                                :class="{ 'card--active': application === data }"
                                @click="() => { application = data; LoadProfile(data.profileId); LoadApplication(data.id) }"
                            >
                                <q-card-section class="text-center full-width">
                                    <div class="text-subtitle1 text-uppercase">{{ formatName(data?.profile) }}</div>
                                </q-card-section>
                                <div class="checkmark-overlay">
                                    <q-radio
                                        v-model="application"
                                        :val="data"
                                        checked-icon="task_alt"
                                        unchecked-icon="panorama_fish_eye" 
                                        size="md"
                                    />
                                </div>
                            </q-card>
                        </div>
                    </div>
                </div>
                <div class="text-overline text-uppercase text-bold q-mb-md">personal information</div>
                <div class="row q-col-gutter-xs q-mb-md">
                    <div class="col-3">
                        <div class="q-mb-xs">
                            <span class="text-caption text-uppercase text-grey q-mr-sm">firstname</span>
                            <q-icon
                                :name="Errors.firstname.type ? 'error' : 'info'"
                                :color="Errors.firstname.type ? 'negative' : 'grey'"
                                class="cursor-pointer"
                                size="xs"
                            >
                                <q-tooltip anchor="top middle" self="center middle" :class="Errors.firstname.type ? 'bg-negative' : 'bg-grey'">
                                    <template v-if="Errors.firstname.type">
                                        <div 
                                            v-for="(msg, i) in Errors.firstname.messages" 
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
                            v-model="firstname" 
                            outlined 
                            :error="Errors.firstname.type"
                            :no-error-icon="true"
                            input-class="text-capitalize"
                        />
                    </div>
                    <div class="col-3">
                        <div class="q-mb-xs">
                            <span class="text-caption text-uppercase text-grey q-mr-sm">middlename</span>
                            <q-icon
                                :name="Errors.middlename.type ? 'error' : 'info'"
                                :color="Errors.middlename.type ? 'negative' : 'grey'"
                                class="cursor-pointer"
                                size="xs"
                            >
                                <q-tooltip anchor="top middle" self="center middle" :class="Errors.middlename.type ? 'bg-negative' : 'bg-grey'">
                                    <template v-if="Errors.middlename.type">
                                        <div 
                                            v-for="(msg, i) in Errors.middlename.messages" 
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
                            v-model="middlename" 
                            outlined 
                            :error="Errors.middlename.type"
                            :no-error-icon="true"
                            input-class="text-capitalize"
                        />
                    </div>
                    <div class="col-3">
                        <div class="q-mb-xs">
                            <span class="text-caption text-uppercase text-grey q-mr-sm">lastname</span>
                            <q-icon
                                :name="Errors.lastname.type ? 'error' : 'info'"
                                :color="Errors.lastname.type ? 'negative' : 'grey'"
                                class="cursor-pointer"
                                size="xs"
                            >
                                <q-tooltip anchor="top middle" self="center middle" :class="Errors.lastname.type ? 'bg-negative' : 'bg-grey'">
                                    <template v-if="Errors.lastname.type">
                                        <div 
                                            v-for="(msg, i) in Errors.lastname.messages" 
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
                            v-model="lastname" 
                            outlined 
                            :error="Errors.lastname.type"
                            :no-error-icon="true"
                            input-class="text-capitalize"
                        />
                    </div>
                    <div class="col-1">
                        <div class="q-mb-xs">
                            <span class="text-caption text-uppercase text-grey q-mr-sm">suffix</span>
                            <q-icon
                                :name="Errors.suffix.type ? 'error' : 'info'"
                                :color="Errors.suffix.type ? 'negative' : 'grey'"
                                class="cursor-pointer"
                                size="xs"
                            >
                                <q-tooltip anchor="top middle" self="center middle" :class="Errors.suffix.type ? 'bg-negative' : 'bg-grey'">
                                    <template v-if="Errors.suffix.type">
                                        <div 
                                            v-for="(msg, i) in Errors.suffix.messages" 
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
                            v-model="suffix" 
                            outlined 
                            :error="Errors.suffix.type"
                            :no-error-icon="true"
                            input-class="text-capitalize"
                        />
                    </div>
                </div>
                <div class="row q-col-gutter-xs q-mb-md">
                    <div class="col-2">
                        <div class="q-mb-xs">
                            <span class="text-caption text-uppercase text-grey q-mr-sm">select sex</span>
                            <q-icon
                                :name="Errors.sexId.type ? 'error' : 'info'"
                                :color="Errors.sexId.type ? 'negative' : 'grey'"
                                class="cursor-pointer"
                                size="xs"
                            >
                                <q-tooltip anchor="top middle" self="center middle" :class="Errors.sexId.type ? 'bg-negative' : 'bg-grey'">
                                    <template v-if="Errors.sexId.type">
                                        <div 
                                            v-for="(msg, i) in Errors.sexId.messages" 
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
                            v-model="sexId"
                            emit-value
                            map-options
                            use-input
                            input-debounce="300"
                            :options="filteredSexes"
                            @filter="filterSexFn"
                            :error="Errors.sexId.type"
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
                            <span class="text-caption text-uppercase text-grey q-mr-sm">select civil Status</span>
                            <q-icon
                                :name="Errors.maritalId.type ? 'error' : 'info'"
                                :color="Errors.maritalId.type ? 'negative' : 'grey'"
                                class="cursor-pointer"
                                size="xs"
                            >
                                <q-tooltip anchor="top middle" self="center middle" :class="Errors.maritalId.type ? 'bg-negative' : 'bg-grey'">
                                    <template v-if="Errors.maritalId.type">
                                        <div 
                                            v-for="(msg, i) in Errors.maritalId.messages" 
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
                            v-model="maritalId"
                            emit-value
                            map-options
                            use-input
                            input-debounce="300"
                            :options="filteredMartitalStatuses"
                            @filter="filterMaritalStatusFn"
                            :error="Errors.maritalId.type"
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
                            <span class="text-caption text-uppercase text-grey q-mr-sm">birthdate</span>
                            <q-icon
                                :name="Errors.birthdate.type ? 'error' : 'info'"
                                :color="Errors.birthdate.type ? 'negative' : 'grey'"
                                class="cursor-pointer"
                                size="xs"
                            >
                                <q-tooltip anchor="top middle" self="center middle" :class="Errors.birthdate.type ? 'bg-negative' : 'bg-grey'">
                                    <template v-if="Errors.birthdate.type">
                                        <div 
                                            v-for="(msg, i) in Errors.birthdate.messages" 
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
                            v-model="birthdate" 
                            outlined 
                            :error="Errors.birthdate.type"
                            :no-error-icon="true"
                            type="date"
                        />
                    </div>
                    <div class="col-4">
                        <div class="q-mb-xs">
                            <span class="text-caption text-uppercase text-grey q-mr-sm">birthplace</span>
                            <q-icon
                                :name="Errors.birthplace.type ? 'error' : 'info'"
                                :color="Errors.birthplace.type ? 'negative' : 'grey'"
                                class="cursor-pointer"
                                size="xs"
                            >
                                <q-tooltip anchor="top middle" self="center middle" :class="Errors.birthplace.type ? 'bg-negative' : 'bg-grey'">
                                    <template v-if="Errors.birthplace.type">
                                        <div 
                                            v-for="(msg, i) in Errors.birthplace.messages" 
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
                            v-model="birthplace" 
                            outlined 
                            :error="Errors.birthplace.type"
                            :no-error-icon="true"
                            input-class="text-capitalize"
                        />
                    </div>
                </div>
                <div class="row q-col-gutter-xs q-mb-md">
                    <div class="col-2">
                        <div class="q-mb-xs">
                            <span class="text-caption text-uppercase text-grey q-mr-sm">select region</span>
                            <q-icon
                                :name="Errors.regionId.type ? 'error' : 'info'"
                                :color="Errors.regionId.type ? 'negative' : 'grey'"
                                class="cursor-pointer"
                                size="xs"
                            >
                                <q-tooltip anchor="top middle" self="center middle" :class="Errors.regionId.type ? 'bg-negative' : 'bg-grey'">
                                    <template v-if="Errors.regionId.type">
                                        <div 
                                            v-for="(msg, i) in Errors.regionId.messages" 
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
                            v-model="regionId"
                            use-input
                            emit-value
                            map-options
                            input-debounce="300"
                            :options="filteredRegions"
                            @filter="filterRegionFn"
                            :error="Errors.regionId.type"
                            dropdown-icon="keyboard_arrow_down"
                            @update:model-value="LoadProvinces"
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
                            <span class="text-caption text-uppercase text-grey q-mr-sm">select province</span>
                            <q-icon
                                :name="Errors.provinceId.type ? 'error' : 'info'"
                                :color="Errors.provinceId.type ? 'negative' : 'grey'"
                                class="cursor-pointer"
                                size="xs"
                            >
                                <q-tooltip anchor="top middle" self="center middle" :class="Errors.provinceId.type ? 'bg-negative' : 'bg-grey'">
                                    <template v-if="Errors.provinceId.type">
                                        <div 
                                            v-for="(msg, i) in Errors.provinceId.messages" 
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
                            v-model="provinceId"
                            use-input
                            emit-value
                            map-options
                            input-debounce="300"
                            :options="filteredProvinces"
                            @filter="filterProvinceFn"
                            :error="Errors.provinceId.type"
                            dropdown-icon="keyboard_arrow_down"
                            @update:model-value="LoadTowns"
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
                            <span class="text-caption text-uppercase text-grey q-mr-sm">select town</span>
                            <q-icon
                                :name="Errors.townId.type ? 'error' : 'info'"
                                :color="Errors.townId.type ? 'negative' : 'grey'"
                                class="cursor-pointer"
                                size="xs"
                            >
                                <q-tooltip anchor="top middle" self="center middle" :class="Errors.townId.type ? 'bg-negative' : 'bg-grey'">
                                    <template v-if="Errors.townId.type">
                                        <div 
                                            v-for="(msg, i) in Errors.townId.messages" 
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
                            v-model="townId"
                            use-input
                            emit-value
                            map-options
                            input-debounce="300"
                            :options="filteredTowns"
                            @filter="filterTownFn"
                            :error="Errors.townId.type"
                            dropdown-icon="keyboard_arrow_down"
                            @update:model-value="LoadBarangays"
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
                            <span class="text-caption text-uppercase text-grey q-mr-sm">select barangay</span>
                            <q-icon
                                :name="Errors.barangayId.type ? 'error' : 'info'"
                                :color="Errors.barangayId.type ? 'negative' : 'grey'"
                                class="cursor-pointer"
                                size="xs"
                            >
                                <q-tooltip anchor="top middle" self="center middle" :class="Errors.barangayId.type ? 'bg-negative' : 'bg-grey'">
                                    <template v-if="Errors.barangayId.type">
                                        <div 
                                            v-for="(msg, i) in Errors.barangayId.messages" 
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
                            v-model="barangayId"
                            use-input
                            emit-value
                            map-options
                            input-debounce="300"
                            :options="filteredBarangays"
                            @filter="filterBarangayFn"
                            :error="Errors.barangayId.type"
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
                            <span class="text-caption text-uppercase text-grey q-mr-sm">street address</span>
                            <q-icon
                                :name="Errors.streetAddress.type ? 'error' : 'info'"
                                :color="Errors.streetAddress.type ? 'negative' : 'grey'"
                                class="cursor-pointer"
                                size="xs"
                            >
                                <q-tooltip anchor="top middle" self="center middle" :class="Errors.streetAddress.type ? 'bg-negative' : 'bg-grey'">
                                    <template v-if="Errors.streetAddress.type">
                                        <div 
                                            v-for="(msg, i) in Errors.streetAddress.messages" 
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
                            v-model="streetAddress" 
                            outlined 
                            :error="Errors.streetAddress.type"
                            :no-error-icon="true"
                            input-class="text-capitalize"
                        />
                    </div>
                </div>
                <div class="row q-col-gutter-xs q-mb-md">
                    <div class="col-1">
                        <div class="q-mb-xs">
                            <span class="text-caption text-uppercase text-grey q-mr-sm">weight (kg)</span>
                            <q-icon
                                :name="Errors.weight.type ? 'error' : 'info'"
                                :color="Errors.weight.type ? 'negative' : 'grey'"
                                class="cursor-pointer"
                                size="xs"
                            >
                                <q-tooltip anchor="top middle" self="center middle" :class="Errors.weight.type ? 'bg-negative' : 'bg-grey'">
                                    <template v-if="Errors.weight.type">
                                        <div 
                                            v-for="(msg, i) in Errors.weight.messages" 
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
                            v-model="weight" 
                            outlined 
                            :error="Errors.weight.type"
                            :no-error-icon="true"
                        />
                    </div>
                    <div class="col-1">
                        <div class="q-mb-xs">
                            <span class="text-caption text-uppercase text-grey q-mr-sm">height (cm)</span>
                            <q-icon
                                :name="Errors.height.type ? 'error' : 'info'"
                                :color="Errors.height.type ? 'negative' : 'grey'"
                                class="cursor-pointer"
                                size="xs"
                            >
                                <q-tooltip anchor="top middle" self="center middle" :class="Errors.height.type ? 'bg-negative' : 'bg-grey'">
                                    <template v-if="Errors.height.type">
                                        <div 
                                            v-for="(msg, i) in Errors.height.messages" 
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
                            v-model="height" 
                            outlined 
                            :error="Errors.height.type"
                            :no-error-icon="true"
                        />
                    </div>
                    <div class="col-2">
                        <div class="q-mb-xs">
                            <span class="text-caption text-uppercase text-grey q-mr-sm">select blood type</span>
                            <q-icon
                                :name="Errors.bloodTypeId.type ? 'error' : 'info'"
                                :color="Errors.bloodTypeId.type ? 'negative' : 'grey'"
                                class="cursor-pointer"
                                size="xs"
                            >
                                <q-tooltip anchor="top middle" self="center middle" :class="Errors.bloodTypeId.type ? 'bg-negative' : 'bg-grey'">
                                    <template v-if="Errors.bloodTypeId.type">
                                        <div 
                                            v-for="(msg, i) in Errors.bloodTypeId.messages" 
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
                            v-model="bloodTypeId"
                            emit-value
                            map-options
                            use-input
                            input-debounce="300"
                            :options="filteredBloodTypes"
                            @filter="filterBloodTypeFn"
                            :error="Errors.bloodTypeId.type"
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
                            <span class="text-caption text-uppercase text-grey q-mr-sm">email address</span>
                            <q-icon
                                :name="Errors.email.type ? 'error' : 'info'"
                                :color="Errors.email.type ? 'negative' : 'grey'"
                                class="cursor-pointer"
                                size="xs"
                            >
                                <q-tooltip anchor="top middle" self="center middle" :class="Errors.email.type ? 'bg-negative' : 'bg-grey'">
                                    <template v-if="Errors.email.type">
                                        <div 
                                            v-for="(msg, i) in Errors.email.messages" 
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
                            v-model="email" 
                            outlined 
                            :error="Errors.email.type"
                            :no-error-icon="true"
                        />
                    </div>
                    <div class="col-2">
                        <div class="q-mb-xs">
                            <span class="text-caption text-uppercase text-grey q-mr-sm">contact number</span>
                            <q-icon
                                :name="Errors.contactNo.type ? 'error' : 'info'"
                                :color="Errors.contactNo.type ? 'negative' : 'grey'"
                                class="cursor-pointer"
                                size="xs"
                            >
                                <q-tooltip anchor="top middle" self="center middle" :class="Errors.contactNo.type ? 'bg-negative' : 'bg-grey'">
                                    <template v-if="Errors.contactNo.type">
                                        <div 
                                            v-for="(msg, i) in Errors.contactNo.messages" 
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
                            v-model="contactNo" 
                            outlined 
                            :error="Errors.contactNo.type"
                            :no-error-icon="true"
                        />
                    </div>
                </div>
                <div class="q-mb-sm q-mt-lg">
                    <span class="text-overline text-uppercase text-bold q-mr-sm">employment information</span>
                </div>
                <div class="row q-col-gutter-xs q-mb-md">
                    <div class="col-6">
                        <div class="q-mb-sm">
                            <span class="text-caption text-uppercase text-grey q-mr-sm">select position/salary</span>
                            <q-icon
                                :name="Errors.salaryId.type ? 'error' : 'info'"
                                :color="Errors.salaryId.type ? 'negative' : 'grey'"
                                class="cursor-pointer"
                                size="xs"
                            >
                                <q-tooltip anchor="top middle" self="center middle" :class="Errors.salaryId.type ? 'bg-negative' : 'bg-grey'">
                                    <template v-if="Errors.salaryId.type">
                                        <div 
                                            v-for="(msg, i) in Errors.salaryId.messages" 
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
                        <div class="scroll q-pa-md border radius-sm" style="height: 250px;">
                            <div class="card-grid">
                                <div
                                    v-for="(data, index) in salaries"
                                    :key="`data-${data.id}`"
                                    class="inner2-card-anim-wrapper"
                                    :style="{ animationDelay: `${index * 120}ms` }"
                                >
                                    <q-card 
                                        class="card card-hover-animate flex flex-center q-pa-md no-shadow cursor-pointer radius-sm" 
                                        tag="label"
                                        :class="{
                                            'card--active': salaryId === data.id,
                                            'disabled-card': 
                                            (application && data.status === 'Vacant') ||
                                            (!application && data.status === 'Requested')
                                        }"
                                        @click="()  => {
                                            salaryId = data.id;
                                            LoadSalaryRates()
                                        }"
                                    >
                                        <q-card-section class="text-center full-width q-pa-none">
                                            <div class="text-caption text-uppercase text-bold">{{ data?.label }}</div>
                                            <div class="text-caption text-uppercase">{{ data?.className }} | {{ data?.gradeName }}</div>
                                        </q-card-section>
                                        <q-card-section class="q-pa-none">
                                            <div class="text-caption text-grey">{{ data?.status }}</div>
                                        </q-card-section>
                                        <div class="checkmark-overlay">
                                            <q-radio
                                                v-model="salaryId"
                                                :val="data.id"
                                                :key="data.id"
                                                checked-icon="task_alt"
                                                unchecked-icon="panorama_fish_eye"
                                                size="md"
                                            />
                                        </div>
                                    </q-card>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-6">
                        <div class="q-mb-sm">
                            <span class="text-caption text-uppercase text-grey q-mr-sm">select increment rate</span>
                            <q-icon
                                :name="Errors.rateId.type ? 'error' : 'info'"
                                :color="Errors.rateId.type ? 'negative' : 'grey'"
                                class="cursor-pointer"
                                size="xs"
                            >
                                <q-tooltip anchor="top middle" self="center middle" :class="Errors.rateId.type ? 'bg-negative' : 'bg-grey'">
                                    <template v-if="Errors.rateId.type">
                                        <div 
                                            v-for="(msg, i) in Errors.rateId.messages" 
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
                        <div class="scroll q-pa-md border radius-sm" style="height: 250px;">
                            <div class="card-grid">
                                <div
                                    v-for="(data, index) in rates"
                                    :key="`data-${data.id}`"
                                    class="inner2-card-anim-wrapper"
                                    :style="{ animationDelay: `${index * 120}ms` }"
                                >
                                    <q-card 
                                        class="card card-hover-animate flex flex-center q-pa-md no-shadow cursor-pointer radius-sm" 
                                        tag="label"
                                        :class="{ 'card--active': rateId === data.id }"
                                        @click="rateId = data.id"
                                    >
                                        <q-card-section class="text-center full-width q-pa-none">
                                            <div class="text-caption text-uppercase text-bold">{{ data?.gradeName }}</div>
                                            <div class="text-caption text-uppercase">{{ data?.className }} | {{ data?.increment?.name }}</div>
                                        </q-card-section>
                                        <q-card-section class="q-pa-none">
                                            <div class="text-caption text-grey">{{ new Intl.NumberFormat('en-PH', { style: 'currency', currency: 'PHP' }).format(data.monthlyCompensation) }}</div>
                                        </q-card-section>
                                        <div class="checkmark-overlay">
                                            <q-radio
                                                v-model="rateId"
                                                :val="data.id"
                                                :key="data.id"
                                                checked-icon="task_alt"
                                                unchecked-icon="panorama_fish_eye"
                                                size="md"
                                            />
                                        </div>
                                    </q-card>
                                </div>
                            </div>
                        </div>
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
                <div class="row q-col-gutter-xs q-mb-md">
                    <div class="col-2">
                        <div class="q-mb-xs">
                            <span class="text-caption text-uppercase text-grey q-mr-sm">upload photo</span>
                            <q-icon
                                :name="Errors.file.type ? 'error' : 'info'"
                                :color="Errors.file.type ? 'negative' : 'grey'"
                                class="cursor-pointer"
                                size="xs"
                            >
                                <q-tooltip anchor="top middle" self="center middle" :class="Errors.file.type ? 'bg-negative' : 'bg-grey'">
                                    <template v-if="Errors.file.type">
                                        <div 
                                            v-for="(msg, i) in Errors.file.messages" 
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
                        <q-file 
                            v-model="file" 
                            outlined 
                            :error="Errors.file.type"
                            :no-error-icon="true"
                        />
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
</template>

<script setup>
import { reactive, computed, ref, onMounted, watch } from 'vue';
import { api } from 'src/boot/axios';

const props = defineProps({
    modelValue: { type: Boolean, default: false }
});

const emit = defineEmits(['update:modelValue', 'saved']);

const model = computed({
    get: () => props.modelValue,
    set: (v) => emit('update:modelValue', v)
});

const Save = async () => {
    if (!Validations()) return;
    ApplicationSubmitting.value = true;
    const profileId = application.value?.profile?.id ?? null;
    try {
        const Data = new FormData();
        Data.append("profileId", profileId ?? "");
        Data.append("firstname", firstname.value);
        Data.append("middlename", middlename.value);
        Data.append("lastname", lastname.value);
        Data.append("suffix", suffix.value);
        Data.append("sexId", sexId.value);
        Data.append("maritalId", maritalId.value);
        Data.append("birthdate", birthdate.value);
        Data.append("birthplace", birthplace.value);
        Data.append("weight", weight.value);
        Data.append("height", height.value);
        Data.append("bloodTypeId", bloodTypeId.value);
        Data.append("email", email.value);
        Data.append("contactNo", contactNo.value);
        Data.append("regionId", regionId.value);
        Data.append("provinceId", provinceId.value);
        Data.append("townId", townId.value);
        Data.append("barangayId", barangayId.value);
        Data.append("streetAddress", streetAddress.value);
        Data.append("employeeNo", employeeNo.value);
        Data.append("dateHired", dateHired.value);
        Data.append("tin", tin.value);
        Data.append("sssNo", sssNo.value);
        Data.append("philhealthNo", philhealthNo.value);
        Data.append("pagibigNo", pagibigNo.value);
        Data.append("taxCodeId", taxCodeId.value);
        Data.append("companyId", companyId.value);
        Data.append("departmentId", departmentId.value);
        Data.append("shiftId", shiftId.value);
        Data.append("employmentId", employmentId.value);
        Data.append("appointmentId", appointmentId.value);
        Data.append("salaryId", salaryId.value);
        Data.append("rateId", rateId.value);
        Data.append("file", file.value);
        const response = await api.post('/employee', Data, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        });
        emit('saved', response.data.data);          // tells parent to reload list
        emit('update:modelValue', false);  // close dialog
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

const ApplicationSubmitting = ref(false);

const application = ref(null);
const firstname = ref('');
const middlename = ref('');
const lastname = ref('');
const suffix = ref('');
const sexId = ref('');
const maritalId = ref('');
const birthdate = ref('');
const birthplace = ref('');
const weight = ref('');
const height = ref('');
const bloodTypeId = ref('');
const email = ref('');
const contactNo = ref('');
const regionId = ref(null);
const provinceId = ref(null);
const townId = ref(null);
const barangayId = ref(null);
const streetAddress = ref('');
const employeeNo = ref('');
const dateHired = ref('');
const tin = ref('');
const sssNo = ref('');
const philhealthNo = ref('');
const pagibigNo = ref('');
const taxCodeId = ref('');
const salaryId = ref('');
const rateId = ref('');
const companyId = ref('');
const departmentId = ref('');
const shiftId = ref('');
const employmentId = ref('');
const appointmentId = ref('');
const file = ref(null);

const Errors = reactive({
    firstname: { type: null, messages: [] },
    middlename: { type: null, messages: [] },
    lastname: { type: null, messages: [] },
    suffix: { type: null, messages: [] },
    sexId: { type: null, messages: [] },
    maritalId: { type: null, messages: [] },
    birthdate: { type: null, messages: [] },
    birthplace: { type: null, messages: [] },
    weight: { type: null, messages: [] },
    height: { type: null, messages: [] },
    bloodTypeId: { type: null, messages: [] },
    email: { type: null, messages: [] },
    contactNo: { type: null, messages: [] },
    regionId: { type: null, messages: [] },
    provinceId: { type: null, messages: [] },
    townId: { type: null, messages: [] },
    barangayId: { type: null, messages: [] },
    streetAddress: { type: null, messages: [] },
    employeeNo: { type: null, messages: [] },
    dateHired: { type: null, messages: [] },
    tin: { type: null, messages: [] },
    sssNo: { type: null, messages: [] },
    philhealthNo: { type: null, messages: [] },
    pagibigNo: { type: null, messages: [] },
    taxCodeId: { type: null, messages: [] },
    salaryId: { type: null, messages: [] },
    rateId: { type: null, messages: [] },
    companyId: { type: null, messages: [] },
    departmentId: { type: null, messages: [] },
    shiftId: { type: null, messages: [] },
    employmentId: { type: null, messages: [] },
    appointmentId: { type: null, messages: [] },
    file: { type: null, messages: [] }
});

const Validations = () => {

    let isError = false;

    Object.keys(Errors).forEach(key => {
        Errors[key].type = null;
        Errors[key].messages = [];
    });

    if (!firstname.value) {
        Errors.firstname.type = true;
        Errors.firstname.messages.push('first name is required');
        isError = true;
    } else {
        Errors.firstname.type = null;
    }

    if (!middlename.value) {
        Errors.middlename.type = true;
        Errors.middlename.messages.push('middle name is required');
        isError = true;
    } else {
        Errors.middlename.type = null;
    }

    if (!lastname.value) {
        Errors.lastname.type = true;
        Errors.lastname.messages.push('last name is required');
        isError = true;
    } else {
        Errors.lastname.type = null;
    }

    const allowedSuffixes = ['SR', 'JR', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X'];
    if (suffix.value) {
        const suffixValue = suffix.value.trim().toUpperCase();
        if (!allowedSuffixes.includes(suffixValue)) {
            Errors.suffix.type = true;
            Errors.suffix.messages.push('invalid suffix');
            isError = true;
        } else {
            Errors.suffix.type = null;
        }
    } else {
        Errors.suffix.type = null;
    }

    if (!sexId.value) {
        Errors.sexId.type = true;
        Errors.sexId.messages.push('sex is required');
        isError = true;
    } else {
        Errors.sexId.type = null;
    }

    if (!maritalId.value) {
        Errors.maritalId.type = true;
        Errors.sexId.messages.push('marital status is required');
        isError = true;
    } else {
        Errors.maritalId.type = null;
    }

    if (!birthdate.value) {
        Errors.birthdate.type = true;
        Errors.birthdate.messages.push('birthdate is required');
        isError = true;
    } else {
        Errors.birthdate.type = null;
    }

    if (!birthplace.value) {
        Errors.birthplace.type = true;
        Errors.birthplace.messages.push('birthplace is required');
        isError = true;
    } else {
        Errors.birthplace.type = null;
    }

    if (!weight.value) {
        Errors.weight.type = true;
        Errors.weight.messages.push('weight is required');
        isError = true;
    } else if (isNaN(weight.value)) {
        Errors.weight.type = true;
        Errors.weight.messages.push('weight must be a number');
        isError = true;
    } else if (weight.value <= 0 || weight.value > 500) {
        Errors.weight.type = true;
        Errors.weight.messages.push('weight must be between 1 and 500');
        isError = true;
    } else {
        Errors.weight.type = null;
    }
    if (!height.value) {
        Errors.height.type = true;
        Errors.height.messages.push('height is required');
        isError = true;
    } else if (isNaN(height.value)) {
        Errors.height.type = true;
        Errors.height.messages.push('height must be a number');
        isError = true;
    } else if (height.value < 30 || height.value > 300) {
        Errors.height.type = true;
        Errors.height.messages.push('height must be between 30 and 300 cm');
        isError = true;
    } else {
        Errors.height.type = null;
    }

    if (!bloodTypeId.value) {
        Errors.bloodTypeId.type = true;
        Errors.bloodTypeId.messages.push('blood type is required');
        isError = true;
    } else {
        Errors.bloodTypeId.type = null;
    }

    if (!email.value) {
        Errors.email.type = true;
        Errors.email.messages.push('email is required');
        isError = true;
    } else {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email.value)) {
            Errors.email.type = true;
            Errors.email.messages.push('email must be a valid email address');
            isError = true;
        } else if (email.value.length > 100) {
            Errors.email.type = true;
            Errors.email.messages.push('email must not exceed 100 characters');
            isError = true;
        } else {
            Errors.email.type = null;
        }
    }

    if (!contactNo.value) {
        Errors.contactNo.type = true;
        Errors.contactNo.messages.push('contact number is required');
        isError = true;
    } else {
        const phMobileRegex = /^(09\d{9}|\+639\d{9})$/;
        if (!phMobileRegex.test(contactNo.value)) {
            Errors.contactNo.type = true;
            Errors.contactNo.messages.push('enter a valid PH mobile number (e.g., 09123456789 or +639123456789)');
            isError = true;
        } else {
            Errors.contactNo.type = null;
        }
    }

    if (!regionId.value) {
        Errors.regionId.type = true;
        Errors.regionId.messages.push('region is required');
        isError = true;
    } else {
        Errors.regionId.type = null;
    }

    if (!provinceId.value) {
        Errors.provinceId.type = true;
        Errors.provinceId.messages.push('province is required');
        isError = true;
    } else {
        Errors.provinceId.type = null;
    }

    if (!townId.value) {
        Errors.townId.type = true;
        Errors.townId.messages.push('town is required');
        isError = true;
    } else {
        Errors.townId.type = null;
    }

    if (!barangayId.value) {
        Errors.barangayId.type = true;
        Errors.barangayId.messages.push('barangay is required');
        isError = true;
    } else {
        Errors.barangayId.type = null;
    }

    if (!streetAddress.value) {
        Errors.streetAddress.type = true;
        Errors.streetAddress.messages.push('street address/zone/purok is required');
        isError = true;
    } else {
        Errors.streetAddress.type = null;
    }

    if (!dateHired.value) {
        Errors.dateHired.type = true;
        Errors.dateHired.messages.push('date hired is required');
        isError = true;
    } else {
        Errors.dateHired.type = null;
    }
    
    if (!salaryId.value) {
        Errors.salaryId.type = true;
        Errors.salaryId.messages.push('salary rate is required');
        isError = true;
    } else {
        Errors.salaryId.type = null;
    }

    if (!rateId.value) {
        Errors.rateId.type = true;
        Errors.rateId.messages.push('salary increment is required');
        isError = true;
    } else {
        Errors.rateId.type = null;
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

    if (!shiftId.value) {
        Errors.shiftId.type = true;
        Errors.shiftId.messages.push('schedule shift is required');
        isError = true;
    } else {
        Errors.shiftId.type = null;
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

    if (!file.value) {
        Errors.file.type = true;
        Errors.file.messages.push('photo is required');
        isError = true;
    } else {
        Errors.file.type = null;
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
    [
        firstname, middlename, lastname, suffix, sexId, maritalId,
        birthdate, birthplace, weight, height, bloodTypeId, email,
        contactNo, regionId, provinceId, townId, barangayId, streetAddress,
        companyId, departmentId, shiftId, employeeNo, dateHired,
        tin, sssNo, philhealthNo, pagibigNo, taxCodeId, appointmentId,
        salaryId, rateId, employmentId, file
    ].forEach(f => f.value = '');
    applications.value = [];
    application.value = null;
    ResetPersonalErrors();
}

const ResetPersonalErrors = () => {
    const personalFields = [
        'firstname',
        'middlename',
        'lastname',
        'suffix',
        'sexId',
        'maritalId',
        'birthdate',
        'birthplace',
        'weight',
        'height',
        'bloodTypeId',
        'email',
        'contactNo',
        'regionId',
        'provinceId',
        'townId',
        'barangayId',
        'streetAddress',
        'employeeNo',
        'dateHired',
        'tin',
        'sssNo',
        'philhealthNo',
        'pagibigNo',
        'taxCodeId',
        'salaryId',
        'rateId',
        'companyId',
        'departmentId',
        'shiftId',
        'employmentId',
        'appointmentId',
        'file'
    ];

    personalFields.forEach(field => {
        if (Errors[field]) {
            Errors[field].type = null;
            Errors[field].messages = [];
        }
    });
};

const applications = ref([]);
const sexes = ref([]);
const maritalstatuses = ref([]);
const bloodtypes = ref([]);
const regions = ref([]);
const provinces = ref([]);
const towns = ref([]);
const barangays = ref([]);
const taxcodes = ref([]);
const companies = ref([]);
const departments = ref([]);
const schedules = ref([]);
const appointmentstatuses = ref([]);
const employmentstatuses = ref([]);
const salaries = ref([]);
const rates = ref([]);

const filteredSexes = ref([]);
const filteredMartitalStatuses = ref([]);
const filteredBloodTypes = ref([]);
const filteredRegions = ref([]);
const filteredProvinces = ref([]);
const filteredTowns = ref([]);
const filteredBarangays = ref([]);
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

const filterSexFn = createFilterFn(sexes, filteredSexes);
const filterMaritalStatusFn = createFilterFn(maritalstatuses, filteredMartitalStatuses);
const filterBloodTypeFn = createFilterFn(bloodtypes, filteredBloodTypes);
const filterRegionFn = createFilterFn(regions, filteredRegions);
const filterProvinceFn = createFilterFn(provinces, filteredProvinces);
const filterTownFn = createFilterFn(towns, filteredTowns);
const filterBarangayFn = createFilterFn(barangays, filteredBarangays);
const filterTaxCodeFn = createFilterFn(taxcodes, filteredTaxCodes);
const filterCompanyFn = createFilterFn(companies, filteredCompanies);
const filterDepartmentFn = createFilterFn(departments, filteredDepartments);
const filterScheduleFn = createFilterFn(schedules, filteredSchedules);
const filterEmploymentStatusFn = createFilterFn(employmentstatuses, filteredEmploymentStatuses);
const filterAppointmentStatusFn = createFilterFn(appointmentstatuses, filteredAppointmentStatuses);

const LoadHiredApplications = async () => {
    try {
        const response = await api.get(`/option/hiredapplications`);
        applications.value = response.data;
    } catch (error) {
        console.error("Error fetching options:", error);
    }
};

const LoadSexes = async () => {
    try {
        const { data } = await api.get(`/option/sexes`);
        sexes.value = normalizeOptions(data)
        filteredSexes.value = [...sexes.value]
    } catch (error) {
        console.error("Error fetching options:", error);
    }
};

const LoadMaritalStatuses = async () => {
    try {
        const { data } = await api.get(`/option/maritalstatuses`);
        maritalstatuses.value = normalizeOptions(data)
        filteredMartitalStatuses.value = [...maritalstatuses.value]
    } catch (error) {
        console.error("Error fetching options:", error);
    }
};

const LoadBloodTypes = async () => {
    try {
        const { data } = await api.get(`/option/bloodtypes`);
        bloodtypes.value = normalizeOptions(data)
        filteredBloodTypes.value = [...bloodtypes.value]
    } catch (error) {
        console.error("Error fetching options:", error);
    }
};

const LoadRegions = async () => {
    try {
        const { data } = await api.get(`/option/regions`);
        regions.value = normalizeOptions(data)
        filteredRegions.value = [...regions.value]
    } catch (error) {
        console.error("Error fetching options:", error);
    }
};

const LoadProvinces = async () => {
    let reg = regionId.value
    const url = regionId.value
        ? `/option/provinces?regionId=${reg}`
        : `/option/provinces`;
    try {
        const { data } = await api.get(url);
        provinces.value = normalizeOptions(data)
        filteredProvinces.value = [...provinces.value]
    } catch (error) {
        console.error("Error fetching options:", error);
    }
};

const LoadTowns = async () => {
    let prov = provinceId.value;
    const url = provinceId.value
        ? `/option/towns?provinceId=${prov}`
        : `/option/towns`;
    try {
        const { data } = await api.get(url);
        towns.value = normalizeOptions(data)
        filteredTowns.value = [...towns.value]
    } catch (error) {
        console.error("Error fetching options:", error);
    }
};

const LoadBarangays = async () => {
    let t = townId.value;
    const url = townId.value
        ? `/option/barangays?townId=${t}`
        : `/option/barangays`;
    try {
        const { data } = await api.get(url);
        barangays.value = normalizeOptions(data)
        filteredBarangays.value = [...barangays.value]
    } catch (error) {
        console.error("Error fetching options:", error);
    }
};

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

const LoadSalaryPositions = async () => {
    try {
        const { data } = await api.get(`/employee/option/salary`);
        salaries.value = data
    } catch (error) {
        console.error("Error fetching options:", error);
    }
};

const LoadSalaryRates = async () => {
    try {
        const { data } = await api.get(`/option/rates?salaryId=${salaryId.value}`);
        rates.value = data
    } catch (error) {
        console.error("Error fetching options:", error);
    }
};

const LoadProfile = async (id) => {
    ApplicationSubmitting.value = true;
    try {
        const response = await api.get(`/employee/profile/${id}`);
        const data = response.data.data;
        firstname.value = data.firstname;
        middlename.value = data.middlename;
        lastname.value = data.lastname;
        suffix.value = data.suffix;
        sexId.value = Number(data.sexId);
        maritalId.value = Number(data.civilStatusId);
        birthdate.value = data.birthdate;
        birthplace.value = data.birthplace;
        weight.value = data.weight;
        height.value = data.height;
        bloodTypeId.value = Number(data.bloodTypeId);
        regionId.value = Number(data.regionId);
        provinceId.value = Number(data.provinceId);
        townId.value = Number(data.townId);
        barangayId.value = Number(data.barangayId);
        streetAddress.value = data.streetAddress;
        email.value = data.email;
        contactNo.value = data.contactNo;
    } catch (error) {
        console.error("Error fetching options:", error);
        ApplicationSubmitting.value = false;
    } finally {
        ApplicationSubmitting.value = false;
    }
}

const LoadApplication = async (id) => {
    ApplicationSubmitting.value = true;
    try {
        const response = await api.get(`/employee/application/${id}`);
        const data = response.data.data;
        companyId.value = Number(data.vacancy.companyId);
        departmentId.value = Number(data.vacancy.departmentId);
        shiftId.value = Number(data.vacancy.shiftId);
        employmentId.value = Number(data.vacancy.employmentId);
        salaryId.value = Number(data.vacancy.salaryId);
        rateId.value = Number(data.vacancy.stepId);
    } catch (error) {
        console.error("Error fetching options:", error);
        ApplicationSubmitting.value = false;
    } finally {
        ApplicationSubmitting.value = false;
    }
}

watch(() => props.modelValue, (val) => {
    if (val) {
        LoadAllOptions();  // load everything only when dialog opens
    }
});

const LoadAllOptions = async () => {
    await Promise.all([
        ResetForm(),
        LoadHiredApplications(),
        LoadSexes(),
        LoadBloodTypes(),
        LoadMaritalStatuses(),
        LoadRegions(),
        LoadProvinces(),
        LoadTowns(),
        LoadBarangays(),
        LoadTaxCodes(),
        LoadCompanies(),
        LoadDepartments(),
        LoadRecruitmentSchedules(),
        LoadEmploymentStatuses(),
        LoadAppointmentStatuses(),
        LoadSalaryPositions(),
        LoadSalaryRates()
    ]);
};
</script>
