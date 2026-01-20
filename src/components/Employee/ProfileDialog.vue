<template>
    <q-dialog v-model="isOpen" full-height position="right" persistent square class="dialog" @before-show="PopulateData()">
        <q-card class="dialog-card column full-height">
            <q-card-section class="q-pa-lg">
                <div class="text-h6 text-uppercase">profile information</div>
            </q-card-section>
            <q-separator inset />
            <q-card-section class="col q-pa-lg scroll">
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
                            <span class="text-caption text-uppercase" :class="Errors.birthdate.msg ? 'text-negative' : 'text-grey'">{{ Errors.birthdate.msg ? Errors.birthdate.msg : 'birthdate' }}</span>
                        </div>
                        <q-input 
                            v-model="birthdate" 
                            label="Enter Birthdate"
                            outlined 
                            :error="Errors.birthdate.type"
                            :no-error-icon="true"
                            @update:model-value="formatBirthdate"
                        />
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

const firstname = ref('');
const middlename = ref('');
const lastname = ref('');
const suffix = ref('');
const sex = ref('');
const bloodtype = ref('');
const civilstatus = ref('');
const birthdate = ref('');
const birthplace = ref('');
const address = ref('');
const email = ref('');
const contactNo = ref('');

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

    if (!email.value) {
        Errors.email.type = true;
        Errors.email.msg = ('email is required');
        isError = true;
    } else {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email.value)) {
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
    }

    if (!contactNo.value) {
        Errors.contactNo.type = true;
        Errors.contactNo.msg = ('contact number is required');
        isError = true;
    } else {
        const phMobileRegex = /^(09\d{9}|\+639\d{9})$/;
        if (!phMobileRegex.test(contactNo.value)) {
            Errors.contactNo.type = true;
            Errors.contactNo.msg = ('enter a valid PH mobile number (e.g., 09123456789 or +639123456789)');
            isError = true;
        } else {
            Errors.contactNo.type = null;
        }
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

const sexes = ref(["Male","Female"]);
const bloodtypes = ref(["A+","A-","B+","B-","AB+","AB-","O+","O-"]);
const civilstatuses = ref(["Single","Married","Widowed","Divorced","Separated"]);

const PopulateData = () => {
    const app = EmployeeStore.data;
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
}

const Save = async () => {
    if (!Validations()) return;
    SubmitLoading.value = true;
    try {
        const response = await api.post(`/employee/${EmployeeStore.data?.id}/information`, {
            firstname: firstname.value,
            middlename: middlename.value,
            lastname: lastname.value,
            suffix: suffix.value,
            sex: sex.value,
            bloodtype: bloodtype.value,
            civilstatus: civilstatus.value,
            birthdate: birthdate.value,
            address: address.value,
            email: email.value,
            contactNo: contactNo.value
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