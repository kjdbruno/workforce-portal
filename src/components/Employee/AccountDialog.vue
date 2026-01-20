<template>
    <q-dialog v-model="isOpen" full-height position="right" persistent square class="dialog" @before-show="PopulateData()">
        <q-card class="dialog-card column full-height">
            <q-card-section class="q-pa-lg">
                <div class="text-h6 text-uppercase">employee account</div>
            </q-card-section>
            <q-separator inset />
            <q-card-section class="col q-pa-lg scroll">
                <div v-for="(value, index) in accounts" :key="index" class="q-mb-md">
                    <div>
                        <span class="text-uppercase text-body1 text-bold">account {{ index+1 }}</span>
                        <q-btn 
                            v-if="accounts.length > 1" 
                            round 
                            icon="delete" 
                            flat 
                            unelevated 
                            color="grey" 
                            @click="RemoveAccount(index)" 
                            size="sm"
                            class="q-ml-sm"
                        />
                    </div>
                    <div class="q-mb-md">
                        <div class="text-caption text-uppercase q-mb-xs" :class="Errors.accounts.role.msg ? 'text-negative' : 'text-grey'">{{ Errors.accounts.role.msg ? Errors.accounts.role.msg : 'role' }}</div>
                        <q-radio  v-for="(v, index) in roles" v-model="value.role" checked-icon="task_alt" unchecked-icon="panorama_fish_eye" :val="v.value" :label="v.label" class="text-uppercase" :disable="isDisabled(v.value)"/>
                    </div>
                    <div class="row q-col-gutter-xs q-mb-sm">
                        <div class="col-2">
                            <div class="text-caption text-uppercase q-mb-xs" :class="Errors.accounts.username.msg ? 'text-negative' : 'text-grey'">{{ Errors.accounts.username.msg ? Errors.accounts.username.msg : 'username' }}</div>
                            <q-input 
                                v-model="value.username" 
                                label="Enter Username"
                                outlined 
                                :error="Errors.accounts.username.type[index]"
                                :no-error-icon="true"
                            />
                        </div>
                        <div class="col-2">
                            <div class="text-caption text-uppercase q-mb-xs" :class="Errors.accounts.password.msg ? 'text-negative' : 'text-grey'">{{ Errors.accounts.password.msg ? Errors.accounts.password.msg : 'password' }}</div>
                            <q-input 
                                v-model="value.password" 
                                label="Enter Password"
                                outlined 
                                :error="Errors.accounts.password.type[index]"
                                :no-error-icon="true"
                                :type="showPassword ? 'text' : 'password'"
                            >
                                <template v-slot:append>
                                    <q-icon :name="showPassword ? 'visibility' : 'visibility_off'" class="cursor-pointer" @click="showPassword = !showPassword" style="font-size: 1rem;" />
                                </template>
                            </q-input>
                        </div>
                    </div>
                    <div class="q-mb-md">
                        <div class="text-caption text-uppercase q-mb-xs" :class="Errors.accounts.status.msg ? 'text-negative' : 'text-grey'">{{ Errors.accounts.status.msg ? Errors.accounts.status.msg : 'status' }}</div>
                        <q-radio  v-for="(v, index) in statuses" v-model="value.status" checked-icon="task_alt" unchecked-icon="panorama_fish_eye" :val="v" :label="v" class="text-uppercase" :disable="isDisabled(v)"/>
                    </div>
                </div>
            </q-card-section>
            
            <q-card-actions class="q-pa-lg bg">
                <div class="q-gutter-sm">
                    <q-btn unelevated size="md" color="primary" class="btn text-capitalize" label="save" @click="Save()" />
                    <q-btn unelevated size="md" color="primary" class="btn text-capitalize" label="add" @click="AddAccount" outline/>
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

const emit = defineEmits(['update:modelValue'])

const isOpen = computed({
    get: () => props.modelValue === props.dialogName,
    set: (val) => {
        if (!val) emit('update:modelValue', null)
    }
})

const showPassword = ref(false);

const SubmitLoading = ref(false);

const accounts = ref([
    {
        id: '',
        employeeid: "",
        username: "",
        password: "",
        role: "",
        status: ""
    }
]);

const EmptyAccount = () => ({
    id: '',
    employeeid: "",
    username: "",
    password: "",
    role: "",
    status: ""
})

const GetAccount = async (id) => {
    SubmitLoading.value = true;
    try {
        const response = await api.get(`/employee/account`, {
            params: { 
                id: id
            }
        });
        !response.data.record.length
            ? [EmptyAccount()]
            : MapAccounts(response.data.record)
        
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

const MapAccounts = (data = []) => {
    accounts.value = data.map(item => ({
        id: item.id ?? '',
        username: item.user?.username ?? '',
        role: item.user?.role ?? '',
        status: item.user?.status ?? '',
    }))
}

const PopulateData = () => {
    GetAccount(EmployeeStore.data?.id)
}

const Errors = reactive({
    accounts: {
        username: {
            type: [], msg: ''
        },
        password: {
            type: [], msg: ''
        },
        role: {
            type: [], msg: ''
        },
        status: {
            type: [], msg: ''
        },
    }
});

const initErrors = () => {
    Errors.accounts.username.type = accounts.value.map(() => null);
    Errors.accounts.password.type = accounts.value.map(() => null);
    Errors.accounts.role.type = accounts.value.map(() => null);
    Errors.accounts.status.type = accounts.value.map(() => null);
}

const Validations = () => {

    let isError = false;
    
    Errors.accounts.username = { type: null, msg: '' }
    Errors.accounts.password = { type: null, msg: '' }
    Errors.accounts.role = { type: null, msg: '' }
    Errors.accounts.status = { type: null, msg: '' }

    initErrors()
    
    accounts.value.forEach((e, index) => {
        if (!e.username) {
            Errors.accounts.username.type[index] = true;
            Errors.accounts.username.msg = 'username is required';
            isError = true;
        }
        if (!e.id) {
            if (!e.password) {
                Errors.accounts.password.type[index] = true;
                Errors.accounts.password.msg = 'password is required';
                isError = true;
            }   
        }
        if (!e.role) {
            Errors.accounts.role.type[index] = true;
            Errors.accounts.role.msg = 'role is required';
            isError = true;
        }
        if (!e.status) {
            Errors.accounts.status.type[index] = true;
            Errors.accounts.status.msg = 'status is required';
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

const roles = ref([
    {
        value: "SuperAdmin",
        label: "Super Administrator"
    },
    {
        value: "Admin",
        label: "Administrator"
    },
    {
        value: "Supervisor",
        label: "Supervisor"
    },
    {
        value: "HR",
        label: "Human Resource"
    },
    {
        value: "Finance",
        label: "Finance"
    },
    {
        value: "Employee",
        label: "Employee"
    },
]);
const statuses = ref(["Active", "Inactive", "Suspended"]);

const AddAccount = () => {
    const e = accounts.value;
    e.push({
       id: '',
        employeeid: "",
        username: "",
        password: "",
        role: "",
        status: ""
    });
}

const RemoveAccount = (index) => {
    accounts.value.splice(index, 1);
}

const Save = async () => {
    if (!Validations()) return;
    SubmitLoading.value = true;
    try {
        const response = await api.post(`/employee/${EmployeeStore.data?.id}/account`, {
            accounts: accounts.value
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

const isDisabled = (value) => {
  // Disable only specific roles (like SuperAdmin and Admin)
  return ['SuperAdmin'].includes(value)
}
</script>