<template>
    <q-card-section class="col q-pa-lg scroll">
        <div class="q-mb-md">
            <span class="text-subtitle1 text-uppercase text-bold q-mr-sm">employee information</span>
        </div>
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
                    input-class="text-capitalize"
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
            <div class="col-2">
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
            <div class="col-2">
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
        </div>
        <div class="row q-col-gutter-xs q-mb-md">
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
    </q-card-section>
    <q-card-actions class="q-pa-lg bg">
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
const regionId = ref(null);
const provinceId = ref(null);
const townId = ref(null);
const barangayId = ref(null);
const streetAddress = ref('');

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
    streetAddress: { type: null, messages: [] }
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
        const response = await api.get(`/employee/profile/${EmployeeStore.profileId}`);
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
        if (EmployeeStore.subComponent === 'EmployeeProfileComponent') {
            Save();
        }
    }
);

const Save = async () => {
    if (!Validations()) return;
    EmployeeStore.loading = true;
    try {
        const response = await api.post(`/employee/profile/${EmployeeStore.profileId}/update`, {
            firstname: firstname.value,
            middlename: middlename.value,
            lastname: lastname.value,
            suffix: suffix.value,
            sexId: sexId.value,
            civilStatusId: maritalId.value,
            birthdate: birthdate.value ? moment(birthdate.value).format('YYYY-MM-DD') : null,
            birthplace: birthplace.value,
            weight: weight.value,
            height: height.value,
            bloodTypeId: bloodTypeId.value,
            regionId: regionId.value,
            provinceId: provinceId.value,
            townId: townId.value,
            barangayId: barangayId.value,
            streetAddress: streetAddress.value,
            email: email.value,
            contactNo: contactNo.value
        });
        UpdateProfile(response.data.data)
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

const UpdateProfile = (data) => {
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
    let reg = regionId.value;
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