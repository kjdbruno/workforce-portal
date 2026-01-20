<template>
    <q-dialog v-model="isOpen" full-height position="right" persistent square class="dialog" @before-show="() => { PopulateData(); ResetForm(); }">
        <q-card class="dialog-card column full-height">
            <q-card-section class="q-pa-lg">
                <div class="text-h6 text-uppercase">document information</div>
            </q-card-section>
            <q-separator inset />
            <q-card-section class="col q-pa-lg scroll">
                <div class="q-mb-lg">
                    <div class="row q-col-gutter-xs q-mb-xs">
                        <div class="col-3">
                            <div class="text-caption text-uppercase q-mb-xs" :class="Errors.documents.file.msg ? 'text-negative' : 'text-grey'">{{ Errors.documents.file.msg ? Errors.documents.file.msg : 'documents' }}</div>
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
                                @click="RemoveDocument(index)" 
                                size="sm"
                                class="q-mt-md"
                            />
                        </div>
                    </div>
                </div>
                <div class="card-grid">
                    <div class="card-anim-wrapper" :style="{ animationDelay: `120ms` }" v-if="!SubmitLoading && rows.length === 0">
                        <q-card key="data-add" class="card card-hover-animate flex flex-center q-pa-md no-shadow cursor-pointer radius-sm" >
                            <q-card-section class="text-center">
                                <div class="text-caption text-uppercase text-grey">no data found</div>
                            </q-card-section>
                        </q-card>
                    </div>
                    <div v-for="(app, index) in rows" :key="`data-${app.id}`" class="card-anim-wrapper" :style="{ animationDelay: `${index * 120}ms` }" @click="ViewDocument(app)" v-else>
                        <q-card class="card card-hover-animate flex flex-center q-pa-md no-shadow cursor-pointer radius-sm" >
                            <q-card-section class="text-center full-width">
                                <div class="text-subtitle2 text-uppercase">{{ app?.filename }}</div>
                            </q-card-section>
                        </q-card>
                    </div>
                </div>
            </q-card-section>
            
            <q-card-actions class="q-pa-lg bg">
                <div class="q-gutter-sm">
                    <q-btn unelevated size="md" color="primary" class="btn text-capitalize" label="save" @click="Save()" />
                    <q-btn unelevated size="md" color="primary" class="btn text-capitalize" label="add" @click="AddDocument" outline/>
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

const SubmitLoading = ref(false);
const rows = ref([]);

const file = ref('');

const GetDocument = async (id) => {
    SubmitLoading.value = true;
    try {
        const response = await api.get(`/employee/document`, {
            params: { 
                id: id
            }
        });
        rows.value = response.data.record

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
    GetDocument(EmployeeStore.data?.id)
}

const ResetForm = () => {
    documents.value = [
        {
            file: ''
        }
    ];
};

const documents = ref([
    {
        file: ''
    }
]);

const Errors = reactive({
    documents: {
        file: {
            type: [], msg: ''
        }
    }
});

const initErrors = () => {
    Errors.documents.file.type = documents.value.map(() => null);
}

const Validations = () => {

    let isError = false;
    
    Errors.documents.file = { type: null, msg: '' }

    initErrors()
    
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

const ViewDocument = (app) => {
    const file = `${process.env.VUE_APP_BACKEND_URL}${app.document}`;
    window.open(file, '_blank');
}

const Save = async () => {
    if (!Validations()) return;
    SubmitLoading.value = true;
    try {
        const Data = new FormData();
        documents.value.forEach((doc, index) => {
            Data.append(`documents[${index}][documentId]`, doc.documentId);
            if (doc.file) {
                Data.append(`documents[${index}][file]`, doc.file);
            }
        });
        const response = await api.post(`/employee/${EmployeeStore.data?.id}/document`, Data, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
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

const AddDocument = () => {
    const d = documents.value;
    d.push({
        file: ""
    });
}

const RemoveDocument = (index) => {
    const d = documents.value;
    d.splice(index, 1);
}
</script>

<style scoped lang="css">
    .card
    {
        box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px !important;
    }
</style>