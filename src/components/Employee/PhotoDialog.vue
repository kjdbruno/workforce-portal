<template>
    <q-dialog v-model="isOpen" full-height position="right" persistent square class="dialog" @before-show="() => { PopulateData(); ResetForm(); }">
        <q-card class="dialog-card column full-height">
            <q-card-section class="q-pa-lg">
                <div class="text-h6 text-uppercase">photo information</div>
            </q-card-section>
            <q-separator inset />
            <q-card-section class="col q-pa-lg scroll">
                <div class="profile-section q-mb-lg">
                    <img :src="FormatAvatar(photo?.avatar)" alt="Profile" class="profile-img" />
                </div>
                <div class="row">
                    <q-file 
                        v-model="file" 
                        label="Upload Photo"
                        outlined 
                        :error="Errors.file.type"
                        :no-error-icon="true"
                        class="col-2"
                    />
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

const FormatAvatar = (photo) => {
    const baseUrl = process.env.VUE_APP_BACKEND_URL
    const defaultAvatar = '/photos/Default.png'

    if (!photo) {
        return `${baseUrl}${defaultAvatar}`
    }

    return `${baseUrl}${photo}`
}

const photo = ref(null);

const GetPhoto = async (id) => {
    SubmitLoading.value = true;
    try {
        const response = await api.get(`/employee/photo`, {
            params: { 
                id: id
            }
        });
        photo.value = response.data.record;

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

const PopulateData = () => {
    GetPhoto(EmployeeStore.data?.id)
}

const file = ref('')

const ResetForm = () => {
    file.value = ''
};

const Errors = reactive({
    file: {
        type: null, msg: ''
    }
});
const Validations = () => {

    let isError = false;

    const maxSize = 5 * 1024 * 1024; // 5MB
    const allowedTypes = ['image/jpeg', 'image/png'];
    
    if (!file.value) {
        Errors.file.type = true;
        Errors.file.msg = 'file is required';
        isError = true;
    } else if (!allowedTypes.includes(file.value.type)) {
        Errors.file.type = true;
        Errors.file.msg = 'file must be a PDF document';
        isError = true;
    } else if (file.value.size > maxSize) {
        Errors.file.type = true;
        Errors.file.msg = 'file size must not exceed to 5MB';
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

const Save = async () => {
    if (!Validations()) return;
    SubmitLoading.value = true;
    try {
        const Data = new FormData();
        Data.append('file', file.value);
        const response = await api.post(`/employee/${EmployeeStore.data?.id}/photo`, Data, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
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

<style lang="css" scoped>
    .profile-img {
        width: 250px;
        height: 250px;
        border-radius: 50%;
        object-fit: cover;
        border: 5px solid #ffffff;
        background: #ffffff;
        box-shadow: 0 12px 28px rgba(0, 0, 0, 0.35);
    }
</style>