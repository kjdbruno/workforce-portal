<template>
    <div>
        <div class="card-grid">
            <div class="card-anim-wrapper">
                <q-card
                    key="data-add"
                    class="card card-hover-animate flex flex-center q-pa-md no-shadow cursor-pointer radius-sm"
                    v-ripple
                    @click="NewDialog()"
                >
                    <q-card-section class="text-center">
                        <q-avatar size="75px" font-size="52px" color="grey" text-color="white" icon="add" />
                    </q-card-section>
                </q-card>
            </div>
            
            <div
                v-for="(data, index) in rows"
                :key="`data-${data.id}`"
                class="card-anim-wrapper"
                :style="{ animationDelay: `${index * 120}ms` }"
            >
                <q-card
                    @click="ModifyDialog(data)"
                    class="card card-hover-animate flex flex-center q-pa-md no-shadow cursor-pointer radius-sm"
                    v-ripple
                    >
                    <q-card-section class="text-center full-width">
                        <div class="text-subtitle2 text-uppercase">{{ formatName(data.user?.profile) }}</div>
                        <div class="text-caption text-grey">{{ data.description }}</div>
                    </q-card-section>
                    <q-card-section class="full-width">
                        <div class="text-caption">{{ formatOrdinal(data.order) }}</div>
                        <div class="text-caption text-grey">order</div>
                    </q-card-section>
                    <div
                        class="absolute-top-left q-ma-sm"
                        style="width: 7px; height: 7px; border-radius: 50%;"
                        :class="data.isActive ? 'bg-positive' : 'bg-negative'"
                    ></div>
                </q-card>
            </div>
        </div>
        <q-dialog v-model="dialog" full-height position="right" persistent square class="dialog">
            <q-card class="dialog-card column full-height">
                <q-card-section class="q-pa-lg">
                    <div class="text-h6 text-uppercase">{{ isEdit ? 'modify vacancy signatory' : 'create new vacancy signatory' }}</div>
                </q-card-section>
                <q-separator inset />
                <q-card-section class="col q-pa-lg scroll">
                    <div class="row q-col-gutter-xs q-mb-md">
                        <div class="col-3">
                            <div class="q-mb-xs">
                                <span class="text-caption text-uppercase" :class="Errors.userId.type ? 'text-negative' : 'text-grey'">{{ Errors.userId.type ? Errors.userId.message : 'employee/user' }}</span>
                            </div>
                            <q-select 
                                outlined 
                                v-model="userId" 
                                label="Select Employee"
                                emit-value 
                                map-options 
                                use-input 
                                input-debounce="300" 
                                :options="filteredUsers" 
                                @filter="filterUserFn" 
                                :error="Errors.userId.type"
                                :no-error-icon="true"
                                dropdown-icon="keyboard_arrow_down"
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
                                <span class="text-caption text-uppercase" :class="Errors.signature.type ? 'text-negative' : 'text-grey'">{{ Errors.signature.type ? Errors.signature.message : 'signature' }}</span>
                            </div>
                            <q-file 
                                outlined 
                                v-model="signature"
                                label="Upload Signature"
                                accept=".jpg,.jpeg,.png"
                                :error="Errors.signature.type"
                                :no-error-icon="true"
                            >
                                <template v-if="signature" v-slot:append>
                                    <q-avatar>
                                        <img :src="previewUrl">
                                    </q-avatar>
                                </template>
                            </q-file>
                        </div>
                        <div class="col-2">
                            <div class="q-mb-xs">
                                <span class="text-caption text-uppercase" :class="Errors.description.type ? 'text-negative' : 'text-grey'">{{ Errors.description.type ? Errors.description.message : 'description' }}</span>
                            </div>
                            <q-input 
                                v-model="description" 
                                label="Enter Description"
                                outlined
                                :error="Errors.description.type" 
                                :no-error-icon="true"
                            />
                        </div>
                        <div class="col-2">
                            <div class="q-mb-xs">
                                <span class="text-caption text-uppercase" :class="Errors.order.type ? 'text-negative' : 'text-grey'">{{ Errors.order.type ? Errors.order.message : 'order' }}</span>
                            </div>
                            <q-input 
                                v-model="order" 
                                label="Enter Order"
                                outlined
                                :error="Errors.order.type" 
                                :no-error-icon="true"
                            />
                        </div>
                    </div>
                </q-card-section>
                
                <q-card-actions class="q-pa-lg bg">
                    <div class="q-gutter-sm">
                        <q-btn v-if="!isEdit || isActive" unelevated size="md" color="primary" class="btn text-capitalize" label="save" @click="Save" />
                        <q-btn v-if="isEdit" unelevated size="md" color="primary" class="btn text-capitalize" :label="isActive ? 'disable' : 'enable'" @click="Toggle"/>
                        <q-btn unelevated size="md" color="primary" class="btn text-capitalize" label="discard" @click="() => { dialog = false; }" outline/>
                    </div>
                </q-card-actions>
                <q-inner-loading :showing="submitLoading">
                    <div class="text-center">
                        <q-spinner-puff size="md"/>
                        <div class="text-caption text-grey text-uppercase q-mt-xs">we're working on it!</div>
                    </div>
                </q-inner-loading>
            </q-card>
        </q-dialog>
        <q-footer class="bg-white no-shadow q-mx-lg q-mb-md q-py-sm radius-xs text-grey">
            <q-toolbar>
                <q-toolbar-title class="text-caption text-uppercase">
                    <div>© 2025 WORKFORCE. All Rights Reserved.</div>
                </q-toolbar-title>
                <q-input outlined dense debounce="1000" v-model="filter" placeholder="Search...">
                    <template v-slot:before>
                        <div class="text-caption text-uppercase">{{ `page ${meta.CurrentPage} of ${meta.TotalPages}` }}</div>
                    </template>
                    <template v-slot:after>
                        <q-btn unelevated size="xs" round color="primary" icon="first_page" :disable="page <= 1" @click="FirstPage">
                            <q-tooltip anchor="top middle" self="top middle" transition-show="scale" transition-hide="scale" class="text-capitalize">First Page</q-tooltip>
                        </q-btn>
                        <q-btn unelevated size="xs" round color="primary" icon="arrow_back" :disable="page <= 1" @click="PreviousPage">
                            <q-tooltip anchor="top middle" self="top middle" transition-show="scale" transition-hide="scale" class="text-capitalize">Previous</q-tooltip>
                        </q-btn>
                        <q-btn unelevated size="xs" round color="primary" icon="arrow_forward" :disable="page >= meta.TotalPages" @click="NextPage">
                            <q-tooltip anchor="top middle" self="top middle" transition-show="scale" transition-hide="scale" class="text-capitalize">Next</q-tooltip>
                        </q-btn>
                        <q-btn unelevated size="xs" round color="primary" icon="last_page" :disable="page >= meta.TotalPages" @click="LastPage">
                            <q-tooltip anchor="top middle" self="top middle" transition-show="scale" transition-hide="scale" class="text-capitalize">Last Page</q-tooltip>
                        </q-btn>
                    </template>
                    <template v-slot:prepend>
                        <q-icon name="search" style="font-size: 1rem;" />
                    </template>
                </q-input>
                <q-inner-loading :showing="loading">
                    <q-spinner-puff size="md" />
                </q-inner-loading>
            </q-toolbar>
        </q-footer>
    </div>
</template>

<script setup>
import { 
    usePreferenceStore 
} from 'src/stores/preference-store';

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

const PreferenceStore = usePreferenceStore();

const dialog = ref(false);
const isEdit = ref(false);
const submitLoading = ref(false);

const id = ref('');
const userId = ref('');
const description = ref('');
const signature = ref('');
const order = ref('');

const previewUrl = ref(null)

const isActive = ref(false);

const Errors = reactive({
    userId: { 
        type: null, message: ''
    },
    description: {
        type: null, message: ''
    },
    signature: {
        type: null, message: ''
    },
    order: {
        type: null, message: ''
    }
});

const Validations = () => {

    let isError = false;

    Object.keys(Errors).forEach(key => {
        Errors[key].type = null;
        Errors[key].messages = [];
    });

    if (!userId.value) {
        Errors.userId.type = true;
        Errors.userId.message = 'User or employee is required!'
        isError = true
    } else {
        Errors.userId.type = null
    }

    if (!description.value) {
        Errors.description.type = true;
        Errors.description.message = 'description is required!'
        isError = true
    } else {
        Errors.description.type = null
    }

    if (!signature.value) {
        Errors.signature.type = true;
        Errors.signature.message = 'signature is required!'
        isError = true
    } else {
        Errors.signature.type = null
    }

    if (!order.value) {
        Errors.order.type = true;
        Errors.order.message = 'order is required';
        isError = true
    } else if (!/^\d+$/.test(order.value)) {
        Errors.order.type = true;
        Errors.order.message = 'Order must be a whole number';
        isError = true;
    } else {
        Errors.order.type = null
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
const limit = ref(10);
const loading = ref(false);

const filter = ref('');

const LoadAll = async () => {
    loading.value = true;
    try {
        const { data } = await api.get(`/vacancy/signatory`, {
            params: { 
                Page: page.value, 
                Limit: limit.value,
                Filter: filter.value || ''
            }
        });
        rows.value = data.data;
        meta.value = data.meta;

        if (!rows.value.length) {
            Toast.fire({
                icon: "info",
                html: `
                <div class="text-h6 text-bold text-uppercase">Notice</div>
                <div class="text-caption text-capitalize;">No records found!</div>
                `
            });
        }
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
        loading.value = false;
    }
}

watch(filter, () => {
    page.value = 1;
    LoadAll();
})

const NextPage = () => {
    if (page.value < meta.value.TotalPages) {
        page.value++
        LoadAll()
    }
}

const PreviousPage = () => {
    if (page.value > 1) {
        page.value--
        LoadAll()
    }
}

const FirstPage = () => {
    if (page.value > 1) {
        page.value = 1
        LoadAll()
    }
}

const LastPage = () => {
    if (page.value < meta.value.TotalPages) {
        page.value = meta.value.TotalPages
        LoadAll()
    }
}


const NewDialog = () => {
    ResetForm();
    dialog.value = true;
    isEdit.value = false;
}

const ModifyDialog = (data) => {
    ResetForm();
    dialog.value = true;
    isEdit.value = true;
    id.value = data.id;
    userId.value = data.userId;
    description.value = data.description;
    previewUrl.value = formatPhoto(data.signature);
    signature.value = {
        name: data.filename,
        __uploadedFile: true
    };
    order.value = data.order;
    isActive.value = (data.isActive ? true : false);
}

const ResetForm = () => {
    id.value = '';
    userId.value = '';
    description.value = '';
    signature.value = '';
    order.value = '';
    isActive.value = false;
    Errors.userId.type = null;
    Errors.description.type = null;
    Errors.signature.type = null;
    Errors.order.type = null;
}

const Save = async () => {
    if (!Validations()) return;
    submitLoading.value = true;
    try {
        const form = new FormData();
        form.append("userId", userId.value);
        form.append("description", description.value);
        form.append("file", signature.value);
        form.append("order", order.value);
        const response = id.value && isEdit
            ? await api.post(`/vacancy/signatory/${id.value}/update`, form, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            })
            : await api.post('/vacancy/signatory', form, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            });
        dialog.value = false;
        if (id.value && isEdit) {
            UpdateList(response.data.signatory);
        } else {
            LoadAll();
        }
        Toast.fire({
            icon: "success",
            html: `
                <div class="text-h6 text-bold text-uppercase">granted!</div>
                <div class="text-caption text-capitalize;">${response.data.message}<div>
            `
        });
        ResetForm();
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
        submitLoading.value = false;
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

const UpdateList = (data) => {
    const index = rows.value.findIndex(item => item.id === data.id)
    if (index !== -1) {
        rows.value[index] = data
    }
}

const Toggle = async () => {
    submitLoading.value = true;
    try {
        const response = isActive.value
            ? await api.post(`/vacancy/signatory/${id.value}/disable`)
            : await api.post(`/vacancy/signatory/${id.value}/enable`)
        dialog.value = false;
        UpdateList(response.data.signatory)
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
        submitLoading.value = false;
    }
}

const users = ref([]);
const filteredUsers = ref([]);

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

const filterUserFn = createFilterFn(users, filteredUsers);

const LoadUsers = async () => {
    try {
        const { data } = await api.get(`/vacancy/signatory/user/option`);
        users.value = normalizeOptions(data)
        filteredUsers.value = [...users.value]
    } catch (error) {
        console.error("Error fetching options:", error);
    }
};

const formatName = (profile) => {
    if (!profile) return '';
    const firstname = profile.firstname || '';
    const middlename = profile.middlename
        ? profile.middlename.charAt(0).toUpperCase() + '.'
        : '';
    const lastname = profile.lastname || '';
    const suffix = profile.suffix ? ` ${profile.suffix}` : '';
    return `${firstname} ${middlename} ${lastname}${suffix}`.trim();
}

const formatOrdinal = (value) => {
    if (!value || isNaN(value)) return '';
    const num = Number(value);
    const suffixes = ['th', 'st', 'nd', 'rd'];
    const v = num % 100;
    return num + (suffixes[(v - 20) % 10] || suffixes[v] || suffixes[0]);
};

const formatPhoto = (photo) => {
    return `${process.env.VUE_APP_BACKEND_URL}${photo}`
}

onMounted(() => {
    LoadAll();
});

onBeforeMount(() => {
    LoadUsers();
})

</script>

<style scoped>

</style>