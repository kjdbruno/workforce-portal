<template>
    <div>
        <div class="q-mb-md">
            <span class="text-subtitle1 text-uppercase text-bold q-mr-md">dependent information</span>
            <q-btn icon="add" round size="sm" outline unelevated color="primary" @click="addDependent"/>
        </div>
        <div class="row q-col-gutter-xs q-mb-xs">
            <div class="col-2">
                <div class="q-mb-xs">
                    <span class="text-caption text-uppercase text-grey q-mr-sm">select relationship</span>
                    <q-icon
                        :name="Errors.dependentMessages?.relationshipId?.length ? 'error' : 'info'"
                        :color="Errors.dependentMessages?.relationshipId?.length ? 'negative' : 'grey'"
                        class="cursor-pointer"
                        size="xs"
                    >
                        <q-tooltip
                            anchor="top middle"
                            self="center middle"
                            :class="Errors.dependentMessages?.relationshipId?.length ? 'bg-negative' : 'bg-grey'"
                        >
                            <template v-if="Errors.dependentMessages?.relationshipId?.length">
                                <div
                                    v-for="(msg, i) in Errors.dependentMessages.relationshipId"
                                    :key="i"
                                    class="text-capitalize"
                                >
                                    <q-icon name="error" color="white" size="xs" />&nbsp;{{ msg }}
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
            </div>
            <div class="col-2">
                <div class="q-mb-xs">
                    <span class="text-caption text-uppercase text-grey q-mr-sm">first name</span>
                    <q-icon
                        :name="Errors.dependentMessages?.firstname?.length ? 'error' : 'info'"
                        :color="Errors.dependentMessages?.firstname?.length ? 'negative' : 'grey'"
                        class="cursor-pointer"
                        size="xs"
                    >
                        <q-tooltip
                            anchor="top middle"
                            self="center middle"
                            :class="Errors.dependentMessages?.firstname?.length ? 'bg-negative' : 'bg-grey'"
                        >
                            <template v-if="Errors.dependentMessages?.firstname?.length">
                                <div
                                    v-for="(msg, i) in Errors.dependentMessages.firstname"
                                    :key="i"
                                    class="text-capitalize"
                                >
                                    <q-icon name="error" color="white" size="xs" />&nbsp;{{ msg }}
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
            </div>
            <div class="col-2">
                <div class="q-mb-xs">
                    <span class="text-caption text-uppercase text-grey q-mr-sm">middle name</span>
                    <q-icon
                        :name="Errors.dependentMessages?.middlename?.length ? 'error' : 'info'"
                        :color="Errors.dependentMessages?.middlename?.length ? 'negative' : 'grey'"
                        class="cursor-pointer"
                        size="xs"
                    >
                        <q-tooltip
                            anchor="top middle"
                            self="center middle"
                            :class="Errors.dependentMessages?.middlename?.length ? 'bg-negative' : 'bg-grey'"
                        >
                            <template v-if="Errors.dependentMessages?.middlename?.length">
                                <div
                                    v-for="(msg, i) in Errors.dependentMessages.middlename"
                                    :key="i"
                                    class="text-capitalize"
                                >
                                    <q-icon name="error" color="white" size="xs" />&nbsp;{{ msg }}
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
            </div>
            <div class="col-2">
                <div class="q-mb-xs">
                    <span class="text-caption text-uppercase text-grey q-mr-sm">last name</span>
                    <q-icon
                        :name="Errors.dependentMessages?.lastname?.length ? 'error' : 'info'"
                        :color="Errors.dependentMessages?.lastname?.length ? 'negative' : 'grey'"
                        class="cursor-pointer"
                        size="xs"
                    >
                        <q-tooltip
                            anchor="top middle"
                            self="center middle"
                            :class="Errors.dependentMessages?.lastname?.length ? 'bg-negative' : 'bg-grey'"
                        >
                            <template v-if="Errors.dependentMessages?.lastname?.length">
                                <div
                                    v-for="(msg, i) in Errors.dependentMessages.lastname"
                                    :key="i"
                                    class="text-capitalize"
                                >
                                    <q-icon name="error" color="white" size="xs" />&nbsp;{{ msg }}
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
            </div>
            <div class="col-1">
                <div class="q-mb-xs">
                    <span class="text-caption text-uppercase text-grey q-mr-sm">suffix</span>
                    <q-icon
                        :name="Errors.dependentMessages?.suffix?.length ? 'error' : 'info'"
                        :color="Errors.dependentMessages?.suffix?.length ? 'negative' : 'grey'"
                        class="cursor-pointer"
                        size="xs"
                    >
                        <q-tooltip
                            anchor="top middle"
                            self="center middle"
                            :class="Errors.dependentMessages?.suffix?.length ? 'bg-negative' : 'bg-grey'"
                        >
                            <template v-if="Errors.dependentMessages?.suffix?.length">
                                <div
                                    v-for="(msg, i) in Errors.dependentMessages.suffix"
                                    :key="i"
                                    class="text-capitalize"
                                >
                                    <q-icon name="error" color="white" size="xs" />&nbsp;{{ msg }}
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
            </div>
            <div class="col-1">
                <div class="q-mb-xs">
                    <span class="text-caption text-uppercase text-grey q-mr-sm">birthdate</span>
                    <q-icon
                        :name="Errors.dependentMessages?.birthdate?.length ? 'error' : 'info'"
                        :color="Errors.dependentMessages?.birthdate?.length ? 'negative' : 'grey'"
                        class="cursor-pointer"
                        size="xs"
                    >
                        <q-tooltip
                            anchor="top middle"
                            self="center middle"
                            :class="Errors.dependentMessages?.birthdate?.length ? 'bg-negative' : 'bg-grey'"
                        >
                            <template v-if="Errors.dependentMessages?.birthdate?.length">
                                <div
                                    v-for="(msg, i) in Errors.dependentMessages.birthdate"
                                    :key="i"
                                    class="text-capitalize"
                                >
                                    <q-icon name="error" color="white" size="xs" />&nbsp;{{ msg }}
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
            </div>
        </div>
        <div class="row q-col-gutter-xs q-mb-xs" v-for="(value, index) in dependents" :key="index">
            <div class="col-2">
                <q-select
                    outlined
                    v-model="value.relationshipId"
                    option-value="value"
                    option-label="label"
                    virtual-scroll
                    emit-value
                    map-options
                    use-input
                    input-debounce="300"
                    :options="filteredRelationships"
                    @filter="filterRelationshipFn"
                    :error="Errors.dependents[index]?.relationshipId.type"
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
                <q-input 
                    v-model="value.firstname" 
                    outlined 
                    :error="Errors.dependents[index]?.firstname.type"
                    :no-error-icon="true"
                    input-class="text-capitalize"
                />
            </div>
            <div class="col-2">
                <q-input 
                    v-model="value.middlename" 
                    outlined 
                    :error="Errors.dependents[index]?.middlename.type"
                    :no-error-icon="true"
                    input-class="text-capitalize"
                />
            </div>
            <div class="col-2">
                <q-input 
                    v-model="value.lastname" 
                    outlined 
                    :error="Errors.dependents[index]?.lastname.type"
                    :no-error-icon="true"
                    input-class="text-capitalize"
                />
            </div>
            <div class="col-1">
                <q-input 
                    v-model="value.suffix" 
                    outlined 
                    :error="Errors.dependents[index]?.suffix.type"
                    :no-error-icon="true"
                    input-class="text-capitalize"
                />
            </div>
            <div class="col-1">
                <q-input 
                    v-model="value.birthdate" 
                    outlined 
                    type="date"
                    :error="Errors.dependents[index]?.birthdate.type"
                    :no-error-icon="true"
                />
            </div>
            <div class="col-1">
                <q-btn 
                    v-if="dependents.length > 1" 
                    round 
                    icon="delete" 
                    flat 
                    unelevated 
                    color="grey" 
                    @click="removeDependent(index)" 
                    size="sm"
                    class="q-mt-md"
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

const dependents = ref([
    {
        relationshipId: '',
        firstname: '',
        middlename: '',
        lastname: '',
        suffix: '',
        birthdate: ''
    }
]);

const Errors = reactive({
    dependents: [],
    dependentMessages: {}
});

const Validations = () => {

    let isError = false;

    Object.keys(Errors).forEach(key => {
        Errors[key].type = null;
        Errors[key].messages = [];
    });

    Errors.dependents = dependents.value.map(() => ({
        relationshipId: { type: null, messages: [] },
        firstname: { type: null, messages: [] },
        middlename: { type: null, messages: [] },
        lastname: { type: null, messages: [] },
        suffix: { type: null, messages: [] },
        birthdate: { type: null, messages: [] }
    }))
    if (!Errors.dependentMessages) {
        Errors.dependentMessages = {
            relationshipId: [],
            firstname: [],
            middlename: [],
            lastname: [],
            suffix: [],
            birthdate: []
        };
    } else {
        Object.keys(Errors.dependentMessages).forEach((key) => {
            Errors.dependentMessages[key] = [];
        });
    }
    dependents.value.forEach((e, index) => {
        if (!e.relationshipId) {
            Errors.dependents[index].relationshipId.type = true;
            Errors.dependents[index].relationshipId.messages.push('relationship is required');
            Errors.dependentMessages.relationshipId.push('relationship is required');
            isError = true;
        }
        if (!e.firstname) {
            Errors.dependents[index].firstname.type = true;
            Errors.dependents[index].firstname.messages.push('firstname is required');
            Errors.dependentMessages.firstname.push('firstname is required');
            isError = true;
        }
        if (!e.middlename) {
            Errors.dependents[index].middlename.type = true;
            Errors.dependents[index].middlename.messages.push('middlename is required');
            Errors.dependentMessages.middlename.push('middlename is required');
            isError = true;
        }
        if (!e.lastname) {
            Errors.dependents[index].lastname.type = true;
            Errors.dependents[index].lastname.messages.push('lastname is required');
            Errors.dependentMessages.lastname.push('lastname is required');
            isError = true;
        }
        const allowedSuffixes = ['SR', 'JR', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X'];
        if (e.suffix) {
            const suffixValue = suffix.value.trim().toUpperCase();
            if (!allowedSuffixes.includes(suffixValue)) {
                Errors.dependents[index].suffix.type = true;
                Errors.dependents[index].suffix.messages.push('invalid suffix');
                Errors.dependentMessages.suffix.push('invalid suffix');
                isError = true;
            } 
        }
        if (!e.birthdate) {
            Errors.dependents[index].birthdate.type = true;
            Errors.dependents[index].birthdate.messages.push('birthdate is required');
            Errors.dependentMessages.birthdate.push('birthdate is required');
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

const relationships = ref([]);

const filteredRelationships = ref([]);

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

const filterRelationshipFn = createFilterFn(relationships, filteredRelationships);

const normalizeOptions = data => data.map(d => ({
    label: d.label ?? d.name ?? String(d.text ?? d.value),
    value: Number(d.value ?? d.id)
}))

const LoadRelationships = async () => {
    try {
        const { data } = await api.get(`/option/relationships`);
        relationships.value = normalizeOptions(data)
        filteredRelationships.value = [...relationships.value]
    } catch (error) {
        console.error("Error fetching options:", error);
    }
};

const addDependent = () => {
    const e = dependents.value;
    e.unshift({
        relationshipId: "",
        firstname: "",
        middlename: "",
        lastname: "",
        suffix: "",
        birthdate: ""
    });
}

const removeDependent = (index) => {
    dependents.value.splice(index, 1);
}

const LoadDependent = async () => {
    EmployeeStore.loading = true;
    try {
        const { data } = await api.get(`/employee/dependent/${EmployeeStore.employment.profileId}`);

        const dependentsData = Array.isArray(data.data) ? data.data : [data.data]
        if (!dependentsData.length || !dependentsData[0]) {
            return;
        }
        dependents.value = dependentsData.map(e => ({
            relationshipId: Number(e.relationshipId) || null,
            firstname: e.firstname || '',
            middlename: e.middlename || '',
            lastname: e.lastname || '',
            suffix: e.suffix || '',
            birthdate: e.birthdate?.slice(0, 10) || '',
        }))

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
        if (EmployeeStore.subComponent === 'EmployeeDependentsComponent') {
            Save();
        }
    }
);

const Save = async () => {
    if (!Validations()) return;
    EmployeeStore.loading = true;
    try {
        const response = await api.post(`/employee/dependent/${EmployeeStore.employment.profileId}`, {
            dependents: dependents.value
        });
        LoadDependent();
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

onMounted(() => {
    LoadDependent();
});

onBeforeMount(() => {
    LoadRelationships()
});
</script>