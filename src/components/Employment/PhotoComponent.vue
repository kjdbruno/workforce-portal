<template>
    <div>
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
                />
            </div>
        </div>
        <div class="row q-col-gutter-xs q-mb-md">
            <div class="col-2">
                <div class="q-mb-xs">
                    <span class="text-caption text-uppercase text-grey q-mr-sm">select region</span>
                    <q-icon
                        :name="Errors.region.type ? 'error' : 'info'"
                        :color="Errors.region.type ? 'negative' : 'grey'"
                        class="cursor-pointer"
                        size="xs"
                    >
                        <q-tooltip anchor="top middle" self="center middle" :class="Errors.region.type ? 'bg-negative' : 'bg-grey'">
                            <template v-if="Errors.region.type">
                                <div 
                                    v-for="(msg, i) in Errors.region.messages" 
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
                    v-model="region"
                    use-input
                    emit-value
                    map-options
                    input-debounce="300"
                    :options="filteredRegions"
                    @filter="filterRegionFn"
                    :error="Errors.region.type"
                    dropdown-icon="keyboard_arrow_down"
                    @update:model-value="LoadProvinces"
                    :no-error-icon="true"
                >
                    
                </q-select>
            </div>
            <div class="col-2">
                <div class="q-mb-xs">
                    <span class="text-caption text-uppercase text-grey q-mr-sm">select province</span>
                    <q-icon
                        :name="Errors.province.type ? 'error' : 'info'"
                        :color="Errors.province.type ? 'negative' : 'grey'"
                        class="cursor-pointer"
                        size="xs"
                    >
                        <q-tooltip anchor="top middle" self="center middle" :class="Errors.province.type ? 'bg-negative' : 'bg-grey'">
                            <template v-if="Errors.province.type">
                                <div 
                                    v-for="(msg, i) in Errors.province.messages" 
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
                    v-model="province"
                    use-input
                    emit-value
                    map-options
                    input-debounce="300"
                    :options="filteredProvinces"
                    @filter="filterProvinceFn"
                    :error="Errors.province.type"
                    dropdown-icon="keyboard_arrow_down"
                    @update:model-value="LoadTowns"
                    :no-error-icon="true"
                >
                
                </q-select>
            </div>
            <div class="col-2">
                <div class="q-mb-xs">
                    <span class="text-caption text-uppercase text-grey q-mr-sm">select town</span>
                    <q-icon
                        :name="Errors.town.type ? 'error' : 'info'"
                        :color="Errors.town.type ? 'negative' : 'grey'"
                        class="cursor-pointer"
                        size="xs"
                    >
                        <q-tooltip anchor="top middle" self="center middle" :class="Errors.town.type ? 'bg-negative' : 'bg-grey'">
                            <template v-if="Errors.town.type">
                                <div 
                                    v-for="(msg, i) in Errors.town.messages" 
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
                    v-model="town"
                    use-input
                    emit-value
                    map-options
                    input-debounce="300"
                    :options="filteredTowns"
                    @filter="filterTownFn"
                    :error="Errors.town.type"
                    dropdown-icon="keyboard_arrow_down"
                    @update:model-value="LoadBarangays"
                    :no-error-icon="true"
                >
                    
                </q-select>
            </div>
            <div class="col-2">
                <div class="q-mb-xs">
                    <span class="text-caption text-uppercase text-grey q-mr-sm">select barangay</span>
                    <q-icon
                        :name="Errors.barangay.type ? 'error' : 'info'"
                        :color="Errors.barangay.type ? 'negative' : 'grey'"
                        class="cursor-pointer"
                        size="xs"
                    >
                        <q-tooltip anchor="top middle" self="center middle" :class="Errors.barangay.type ? 'bg-negative' : 'bg-grey'">
                            <template v-if="Errors.barangay.type">
                                <div 
                                    v-for="(msg, i) in Errors.barangay.messages" 
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
                    v-model="barangay"
                    use-input
                    emit-value
                    map-options
                    input-debounce="300"
                    :options="filteredBarangays"
                    @filter="filterBarangayFn"
                    :error="Errors.barangay.type"
                    dropdown-icon="keyboard_arrow_down"
                    :no-error-icon="true"
                >
                
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
                />
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

import { useEmployeeStore } from 'src/stores/employee-store';

const EmployeeStore = useEmployeeStore();

const AuthStore = useAuthStore();

const dialog = ref(false);
const isEdit = ref(false);
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
const region = ref(null);
const province = ref(null);
const town = ref(null);
const barangay = ref(null);
const streetAddress = ref('');
const employeeNo = ref('');
const dateHired = ref('');
const tin = ref('');
const sssNo = ref('');
const philhealthNo = ref('');
const pagibigNo = ref('');
const taxCodeId = ref('');
const positionId = ref('');
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
    region: { type: null, messages: [] },
    province: { type: null, messages: [] },
    town: { type: null, messages: [] },
    barangay: { type: null, messages: [] },
    streetAddress: { type: null, messages: [] },
    employeeNo: { type: null, messages: [] },
    dateHired: { type: null, messages: [] },
    tin: { type: null, messages: [] },
    sssNo: { type: null, messages: [] },
    philhealthNo: { type: null, messages: [] },
    pagibigNo: { type: null, messages: [] },
    taxCodeId: { type: null, messages: [] },
    positionId: { type: null, messages: [] },
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

    if (!region.value) {
        Errors.region.type = true;
        Errors.region.messages.push('region is required');
        isError = true;
    } else {
        Errors.region.type = null;
    }

    if (!province.value) {
        Errors.province.type = true;
        Errors.province.messages.push('province is required');
        isError = true;
    } else {
        Errors.province.type = null;
    }

    if (!town.value) {
        Errors.town.type = true;
        Errors.town.messages.push('town is required');
        isError = true;
    } else {
        Errors.town.type = null;
    }

    if (!barangay.value) {
        Errors.barangay.type = true;
        Errors.barangay.messages.push('barangay is required');
        isError = true;
    } else {
        Errors.barangay.type = null;
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
    
    if (!positionId.value) {
        Errors.positionId.type = true;
        Errors.positionId.messages.push('position is required');
        isError = true;
    } else {
        Errors.positionId.type = null;
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

const rows = ref([]);

const meta = ref({});
const page = ref(1);

const filter = ref('');

const LoadEmployment = async () => {
    EmployeeStore.loading = true;
    try {
        const response = await api.get(`/employee/profile/${EmployeeStore.employment.profileId}`);
        
        const profile = response.data.data;
        const contactInfo = profile.contactInformations?.[0] ?? {};

        // Region
        filteredRegions.value = [...regions.value];
        region.value = regions.value.find(v => String(v.value) === String(profile.regionCode))?.value || null;

        // Province (ensure loaded)
        if (!provinces.value.length || !provinces.value.find(v => v.regionCode === profile.regionCode)) {
            await LoadProvinces(profile.regionCode);
        }
        filteredProvinces.value = [...provinces.value];
        province.value = provinces.value.find(v => String(v.value) === String(profile.provinceCode))?.value || null;

        // Town (ensure loaded)
        if (!towns.value.length || !towns.value.find(v => v.provinceCode === profile.provinceCode)) {
            await LoadTowns(profile.provinceCode);
        }
        filteredTowns.value = [...towns.value];
        town.value = towns.value.find(v => String(v.value) === String(profile.townCode))?.value || null;

        // Barangay (ensure loaded)
        if (!barangays.value.length || !barangays.value.find(v => v.townCode === profile.townCode)) {
            await LoadBarangays(profile.townCode);
        }
        filteredBarangays.value = [...barangays.value];
        barangay.value = barangays.value.find(v => String(v.value) === String(profile.barangayCode))?.value || null;

        // Personal info
        firstname.value = profile.firstname;
        middlename.value = profile.middlename;
        lastname.value = profile.lastname;
        suffix.value = profile.suffix;
        filteredSexes.value = [...sexes.value];
        sexId.value = sexes.value.find(v => v.value === profile.sexId)?.value || null;
        filteredMartitalStatuses.value = [...maritalstatuses.value];
        maritalId.value = maritalstatuses.value.find(v => v.value === profile.civilStatusId)?.value || null;
        birthdate.value = profile.birthdate;
        birthplace.value = profile.birthplace;
        weight.value = profile.weight;
        height.value = profile.height;
        filteredBloodTypes.value = [...bloodtypes.value];
        bloodTypeId.value = bloodtypes.value.find(v => v.value === profile.bloodTypeId)?.value || null;
        streetAddress.value = profile.streetAddress;
        email.value = contactInfo.email || '';
        contactNo.value = contactInfo.contactNo || '';

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

watch(filter, () => {
    page.value = 1;
    LoadAll();
})

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
        Data.append("regionCode", region.value);
        Data.append("provinceCode", province.value);
        Data.append("townCode", town.value);
        Data.append("barangayCode", barangay.value);
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
        Data.append("positionId", positionId.value);
        Data.append("file", file.value);
        const response = await api.post('/employee', Data, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        });
        rows.value.unshift(response.data.data)
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
        ResetForm();
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

const sexes = ref([]);
const maritalstatuses = ref([]);
const bloodtypes = ref([]);
const regions = ref([]);
const provinces = ref([]);
const towns = ref([]);
const barangays = ref([]);

const filteredSexes = ref([]);
const filteredMartitalStatuses = ref([]);
const filteredBloodTypes = ref([]);
const filteredRegions = ref([]);
const filteredProvinces = ref([]);
const filteredTowns = ref([]);
const filteredBarangays = ref([]);

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

const filterSexFn = createFilterFn(sexes, filteredSexes);
const filterMaritalStatusFn = createFilterFn(maritalstatuses, filteredMartitalStatuses);
const filterBloodTypeFn = createFilterFn(bloodtypes, filteredBloodTypes);
const filterRegionFn = createFilterFn(regions, filteredRegions);
const filterProvinceFn = createFilterFn(provinces, filteredProvinces);
const filterTownFn = createFilterFn(towns, filteredTowns);
const filterBarangayFn = createFilterFn(barangays, filteredBarangays);

const LoadSexes = async () => {
    try {
        const response = await api.get(`/option/sexes`);
        sexes.value = response.data;
    } catch (error) {
        console.error("Error fetching options:", error);
    }
};

const LoadMaritalStatuses = async () => {
    try {
        const response = await api.get(`/option/maritalstatuses`);
        maritalstatuses.value = response.data;
    } catch (error) {
        console.error("Error fetching options:", error);
    }
};

const LoadBloodTypes = async () => {
    try {
        const response = await api.get(`/option/bloodtypes`);
        bloodtypes.value = response.data;
    } catch (error) {
        console.error("Error fetching options:", error);
    }
};

const LoadRegions = async () => {
    try {
        const response = await api.get(`/option/regions`);
        regions.value = response.data;
    } catch (error) {
        console.error("Error fetching options:", error);
    }
};

const LoadProvinces = async () => {
    const url = region.value
        ? `/option/provinces?regionCode=${region.value}`
        : `/option/provinces`;
    try {
        const response = await api.get(url);
        provinces.value = response.data;
    } catch (error) {
        console.error("Error fetching options:", error);
    }
};

const LoadTowns = async () => {
    const url = province.value
        ? `/option/towns?provinceCode=${province.value}`
        : `/option/towns`;
    try {
        const response = await api.get(url);
        towns.value = response.data;
    } catch (error) {
        console.error("Error fetching options:", error);
    }
};

const LoadBarangays = async () => {
    const url = town.value
        ? `/option/barangays?townCode=${town.value}`
        : `/option/barangays`;
    try {
        const response = await api.get(url);
        barangays.value = response.data;
    } catch (error) {
        console.error("Error fetching options:", error);
    }
};

onMounted(() => {
    LoadEmployment();
});

onBeforeMount(() => {
    LoadSexes();
    LoadBloodTypes();
    LoadMaritalStatuses();
    LoadRegions();
    LoadProvinces();
    LoadTowns();
    LoadBarangays();
});
</script>