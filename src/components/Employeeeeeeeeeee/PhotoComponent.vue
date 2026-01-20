<template>
    <q-card-section class="col q-pa-lg scroll">
        <div class="row q-col-gutter-xs">
            <div class="col-2">
                <q-file 
                    v-model="file"
                    outlined
                    :no-error-icon="true"
                    accept="image/*"
                    >
                    <template v-slot:append>
                        <q-avatar>
                            <img :src="previewUrl">
                        </q-avatar>
                    </template>
                </q-file>
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

const file = ref(null);
const previewUrl = ref(null)

const Errors = reactive({
    file: { 
        type: null, messages: []
    },
});

const Validations = () => {

    let isError = false;

    Object.keys(Errors).forEach(key => {
        Errors[key].type = null;
        Errors[key].messages = [];
    });

    if (!file.value) {
        Errors.file.type = true;
        Errors.file.messages.push('profile photo is required');
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

const LoadPhoto = async () => {
    EmployeeStore.loading = true;
    try {
        const { data } = await api.get(`/employee/photo/${EmployeeStore.profileId}`);
        previewUrl.value = formatPhoto(data.data.file);
        file.value = {
            name: data.data.filename,
            __uploadedFile: true
        };
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

const Save = async () => {
    if (!Validations()) return;
    EmployeeStore.loading = true;
    try {
        const Data = new FormData();
        Data.append("file", file.value);
        const response = await api.post(`/employee/photo/${EmployeeStore.employment.profileId}`, Data, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        });
        LoadPhoto();
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

const formatPhoto = (photo) => {
    return `${process.env.VUE_APP_BACKEND_URL}${photo}`
}

watch(file, (newFile) => {
    if (!newFile) return
    // If newFile is actual File object
    if (newFile instanceof File) {
        previewUrl.value = URL.createObjectURL(newFile)
    }
});

onMounted(() => {
    LoadPhoto();
});

</script>