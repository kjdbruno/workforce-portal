<template>
    <q-dialog v-model="isOpen" full-height position="right" persistent square class="dialog" @before-show="() => { PopulateData(); }">
        <q-card class="dialog-card column full-height">
            <q-card-section class="q-pa-lg">
                <div class="text-h6 text-uppercase">dependent information</div>
            </q-card-section>
            <q-separator inset />
            <q-card-section class="col q-pa-lg scroll">
                <div v-for="(value, index) in dependents" :key="index" class="q-mb-md">
                    <div>
                        <span class="text-uppercase text-body1 text-bold">dependent {{ index+1 }}</span>
                        <q-btn 
                            v-if="dependents.length > 1" 
                            round 
                            icon="delete" 
                            flat 
                            unelevated 
                            color="grey" 
                            @click="RemoveDependent(index)" 
                            size="sm"
                            class="q-ml-sm"
                        />
                    </div>
                    <div class="row q-col-gutter-xs q-mb-sm">
                        <div class="col-2">
                            <div class="text-caption text-uppercase q-mb-xs" :class="Errors.dependents.relationship.msg ? 'text-negative' : 'text-grey'">{{ Errors.dependents.relationship.msg ? Errors.dependents.relationship.msg : 'relationship' }}</div>
                            <q-select
                                outlined
                                v-model="value.relationship"
                                label="Choose Relationship"
                                input-debounce="300"
                                :options="relationships"
                                :error="Errors.dependents.relationship.type[index]"
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
                            <div class="text-caption text-uppercase q-mb-xs" :class="Errors.dependents.firstname.msg ? 'text-negative' : 'text-grey'">{{ Errors.dependents.firstname.msg ? Errors.dependents.firstname.msg : 'firstname' }}</div>
                            <q-input 
                                v-model="value.firstname" 
                                label="Enter Firstname"
                                outlined 
                                :error="Errors.dependents.firstname.type[index]"
                                :no-error-icon="true"
                                input-class="text-capitalize"
                            />
                        </div>
                        <div class="col-2">
                            <div class="text-caption text-uppercase q-mb-xs" :class="Errors.dependents.middlename.msg ? 'text-negative' : 'text-grey'">{{ Errors.dependents.middlename.msg ? Errors.dependents.middlename.msg : 'middlename' }}</div>
                            <q-input 
                                v-model="value.middlename" 
                                label="Enter Middlename"
                                outlined 
                                :error="Errors.dependents.middlename.type[index]"
                                :no-error-icon="true"
                                input-class="text-capitalize"
                            />
                        </div>
                        <div class="col-2">
                            <div class="text-caption text-uppercase q-mb-xs" :class="Errors.dependents.lastname.msg ? 'text-negative' : 'text-grey'">{{ Errors.dependents.lastname.msg ? Errors.dependents.lastname.msg : 'lastname' }}</div>
                            <q-input 
                                v-model="value.lastname" 
                                label="Enter Lastname"
                                outlined 
                                :error="Errors.dependents.lastname.type[index]"
                                :no-error-icon="true"
                                input-class="text-capitalize"
                            />
                        </div>
                        <div class="col-1">
                            <div class="text-caption text-uppercase q-mb-xs" :class="Errors.dependents.suffix.msg ? 'text-negative' : 'text-grey'">{{ Errors.dependents.suffix.msg ? Errors.dependents.suffix.msg : 'suffix' }}</div>
                            <q-input 
                                v-model="value.suffix" 
                                label="Enter Suffix"
                                outlined 
                                :error="Errors.dependents.suffix.type[index]"
                                :no-error-icon="true"
                                input-class="text-capitalize"
                            />
                        </div>
                    </div>
                    <div class="row q-col-gutter-xs q-mb-sm">
                        <div class="col-2">
                            <div class="text-caption text-uppercase q-mb-xs" :class="Errors.dependents.birthdate.msg ? 'text-negative' : 'text-grey'">{{ Errors.dependents.birthdate.msg ? Errors.dependents.birthdate.msg : 'birthdate (YYYY-MM-DD)' }}</div>
                            <q-input outlined v-model="value.birthdate" label="Enter Date">
                                <q-popup-proxy cover transition-show="scale" transition-hide="scale" class="no-shadow custom-border radius-sm" :ref="el => birthdatePopups[index] = el">
                                    <q-date v-model="value.birthdate" mask="YYYY-MM-DD" @update:model-value="() => hideBirthdatePopup(index)"/>
                                </q-popup-proxy>
                            </q-input>
                        </div>
                        <div class="col-2">
                            <div class="text-caption text-uppercase q-mb-xs" :class="Errors.dependents.contactNo.msg ? 'text-negative' : 'text-grey'">{{ Errors.dependents.contactNo.msg ? Errors.dependents.contactNo.msg : 'contactNo' }}</div>
                            <q-input 
                                v-model="value.contactNo" 
                                label="Enter Contact No."
                                outlined 
                                :error="Errors.dependents.contactNo.type[index]"
                                :no-error-icon="true"
                            />
                        </div>
                        <div class="col-2">
                            <div class="text-caption text-uppercase q-mb-xs" :class="Errors.dependents.email.msg ? 'text-negative' : 'text-grey'">{{ Errors.dependents.email.msg ? Errors.dependents.email.msg : 'email' }}</div>
                            <q-input 
                                v-model="value.email" 
                                label="Enter Email"
                                outlined 
                                :error="Errors.dependents.email.type[index]"
                                :no-error-icon="true"
                            />
                        </div>
                        <div class="col-3">
                            <div class="text-caption text-uppercase q-mb-xs" :class="Errors.dependents.address.msg ? 'text-negative' : 'text-grey'">{{ Errors.dependents.address.msg ? Errors.dependents.address.msg : 'address' }}</div>
                            <q-input 
                                v-model="value.address" 
                                label="Enter Address"
                                outlined 
                                :error="Errors.dependents.address.type[index]"
                                :no-error-icon="true"
                                input-class="text-capitalize"
                            />
                        </div>
                    </div>
                    <div>
                        <q-checkbox left-label v-model="value.isEmergency" @update:model-value="() => ToggleEmergency(index)" label="emergency contact person" checked-icon="task_alt" unchecked-icon="panorama_fish_eye" class="text-capitalize" />
                    </div>
                </div>
            </q-card-section>
            
            <q-card-actions class="q-pa-lg bg">
                <div class="q-gutter-sm">
                    <q-btn unelevated size="md" color="primary" class="btn text-capitalize" label="save" @click="Save()" />
                    <q-btn unelevated size="md" color="primary" class="btn text-capitalize" label="add" @click="AddDependent" outline/>
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
import { ref, onMounted, onBeforeUnmount, onBeforeMount, watch, reactive, computed, nextTick } from 'vue';
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

const SubmitLoading = ref(false);

const dependents = ref([
    {
        id: '',
        relationship: "",
        firstname: "",
        middlename: "",
        lastname: "",
        suffix: "",
        birthdate: "",
        contactNo: "",
        email: "",
        address: "",
        isEmergency: false
    }
]);

const EmptyDependent = () => ({
    id: '',
    relationship: "",
    firstname: "",
    middlename: "",
    lastname: "",
    suffix: "",
    birthdate: "",
    contactNo: "",
    email: "",
    address: "",
    isEmergency: false
})

const GetDependent = async (id) => {
    SubmitLoading.value = true;
    try {
        const response = await api.get(`/employee/dependent`, {
            params: { 
                id: id
            }
        });
        !response.data.record.length
            ? [EmptyDependent()]
            : MapDependents(response.data.record)
        
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
        SubmitLoading.value = false;
    }
}

const MapDependents = (data = []) => {
    dependents.value = data.map(item => ({
        id: item.id ?? '',
        relationship: item.relationship ?? '',
        firstname: item.first_name ?? '',
        middlename: item.middle_name ?? '',
        lastname: item.last_name ?? '',
        suffix: item.suffix ?? '',
        birthdate: item.birthdate ?? '',
        contactNo: item.contact_number ?? '',
        email: item.email ?? '',
        address: item.address ?? '',
        isEmergency: (item.is_emergency ? true : false) ?? '',
    }))
}

const PopulateData = () => {
    GetDependent(EmployeeStore.data?.id)
}

const Errors = reactive({
    dependents: {
        relationship: {
            type: [], msg: ''
        },
        firstname: {
            type: [], msg: ''
        },
        middlename: {
            type: [], msg: ''
        },
        lastname: {
            type: [], msg: ''
        },
        suffix: {
            type: [], msg: ''
        },
        birthdate: {
            type: [], msg: ''
        },
        contactNo: {
            type: [], msg: ''
        },
        email: {
            type: [], msg: ''
        },
        address: {
            type: [], msg: ''
        }
    }
});

const initErrors = () => {
    Errors.dependents.relationship.type = dependents.value.map(() => null);
    Errors.dependents.firstname.type = dependents.value.map(() => null);
    Errors.dependents.middlename.type = dependents.value.map(() => null);
    Errors.dependents.lastname.type = dependents.value.map(() => null);
    Errors.dependents.suffix.type = dependents.value.map(() => null);
    Errors.dependents.birthdate.type = dependents.value.map(() => null);
    Errors.dependents.contactNo.type = dependents.value.map(() => null);
    Errors.dependents.email.type = dependents.value.map(() => null);
    Errors.dependents.address.type = dependents.value.map(() => null);
}

const Validations = () => {

    let isError = false;
    
    Errors.dependents.relationship = { type: null, msg: '' }
    Errors.dependents.firstname = { type: null, msg: '' }
    Errors.dependents.middlename = { type: null, msg: '' }
    Errors.dependents.lastname = { type: null, msg: '' }
    Errors.dependents.suffix = { type: null, msg: '' }
    Errors.dependents.birthdate = { type: null, msg: '' }
    Errors.dependents.contactNo = { type: null, msg: '' }
    Errors.dependents.email = { type: null, msg: '' }
    Errors.dependents.address = { type: null, msg: '' }

    initErrors()
    
    dependents.value.forEach((e, index) => {
        if (!e.relationship) {
            Errors.dependents.relationship.type[index] = true;
            Errors.dependents.relationship.msg = 'relationship is required';
            isError = true;
        }
        if (!e.firstname) {
            Errors.dependents.firstname.type[index] = true;
            Errors.dependents.firstname.msg = 'firstname is required';
            isError = true;
        }
        if (!e.middlename) {
            Errors.dependents.middlename.type[index] = true;
            Errors.dependents.middlename.msg = 'middlename is required';
            isError = true;
        }
        if (!e.lastname) {
            Errors.dependents.lastname.type[index] = true;
            Errors.dependents.lastname.msg = 'lastname is required';
            isError = true;
        } 
        const allowedSuffixes = ['SR', 'JR', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X'];
        if (e.suffix) {
            const suffixValue = suffix.value.trim().toUpperCase();
            if (!allowedSuffixes.includes(suffixValue)) {
                Errors.dependents.suffix.type[index] = true;
                Errors.dependents.suffix.msg = 'suffix is required';
                isError = true;   
            }
        }
        if (!e.birthdate) {
            Errors.dependents.birthdate.type[index] = true;
            Errors.dependents.birthdate.msg = 'birthdate is required';
            isError = true;
        } 
        if (!e.contactNo) {
            Errors.dependents.contactNo.type[index] = true;
            Errors.dependents.contactNo.msg = 'contact number is required';
            isError = true;
        } 
        if (!e.email) {
            Errors.dependents.email.type[index] = true;
            Errors.dependents.email.msg = 'email is required';
            isError = true;
        } 
        if (!e.address) {
            Errors.dependents.address.type[index] = true;
            Errors.dependents.address.msg = 'address is required';
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

const FormatBirthdate = (val, index) => {
    dependents.value[index].birthdate = FormatToYMD(val)
}
const FormatToYMD = (val) => {
    if (!val) return ''

    // keep digits only
    const digits = val.replace(/\D/g, '').slice(0, 8)

    let formatted = digits

    if (digits.length > 4 && digits.length <= 6) {
        formatted = `${digits.slice(0, 4)}-${digits.slice(4)}`
    } else if (digits.length > 6) {
        formatted = `${digits.slice(0, 4)}-${digits.slice(4, 6)}-${digits.slice(6)}`
    }

    return formatted

}

const relationships = ref(["Spouse", "Child", "Parent", "Sibling", "Other"]);

const AddDependent = () => {
    const e = dependents.value;
    e.push({
        id: '',
        relationship: "",
        firstname: "",
        middlename: "",
        lastname: "",
        suffix: "",
        birthdate: "",
        contactNo: "",
        email: "",
        address: "",
        isEmergency: false
    });
}

const RemoveDependent = (index) => {
    dependents.value.splice(index, 1);
}

const ToggleEmergency = (index) => {
    dependents.value.forEach((d, i) => {
        d.isEmergency = i === index
    })
}

const Save = async () => {
    if (!Validations()) return;
    SubmitLoading.value = true;
    try {
        const response = await api.post(`/employee/${EmployeeStore.data?.id}/dependent`, {
            dependents: dependents.value
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

const birthdatePopups = ref([]);
function hideBirthdatePopup(index) {
  nextTick(() => {
    if (birthdatePopups.value[index]) birthdatePopups.value[index].hide();
  });
}
</script>