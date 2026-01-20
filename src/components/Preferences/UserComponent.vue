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
                        <div class="text-subtitle2 text-uppercase">{{ data.name }}</div>
                        <div class="text-caption text-grey">{{ data.username }}</div>
                    </q-card-section>
                    <q-card-section class="full-width">
                        <div class="text-caption text-uppercase">{{ data.role }}</div>
                        <div class="text-caption text-grey">{{ data.status }}</div>
                    </q-card-section>
                    <div
                        class="absolute-top-left q-ma-sm"
                        style="width: 7px; height: 7px; border-radius: 50%;"
                        :class="data.status == 'Active' ? 'bg-positive' : 'bg-negative'"
                    ></div>
                </q-card>
            </div>
        </div>
        <q-dialog v-model="dialog" full-height position="right" persistent square class="dialog">
            <q-card class="dialog-card column full-height">
                <q-card-section class="q-pa-lg">
                    <div class="text-h6 text-uppercase">{{ isEdit ? 'modify user' : 'create new user' }}</div>
                </q-card-section>
                <q-separator inset />
                <q-card-section class="col q-pa-lg scroll">
                    <div class="row q-col-gutter-xs q-mb-md">
                        <div class="col-3">
                            <div class="q-mb-xs">
                                <span class="text-caption text-uppercase text-grey q-mr-sm">search employee</span>
                                <q-icon
                                    :name="Errors.profileId.type ? 'error' : 'info'"
                                    :color="Errors.profileId.type ? 'negative' : 'grey'"
                                    class="cursor-pointer"
                                    size="xs"
                                >
                                    <q-tooltip anchor="top middle" self="center middle" :class="Errors.profileId.type ? 'bg-negative' : 'bg-grey'">
                                        <template v-if="Errors.profileId.type">
                                            <div 
                                                v-for="(msg, i) in Errors.profileId.messages" 
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
                                v-model="profileId" 
                                emit-value 
                                map-options 
                                use-input 
                                input-debounce="300" 
                                :options="filteredProfiles" 
                                @filter="filterProfileFn" 
                                :error="Errors.profileId.type"
                                hide-dropdown-icon
                                :no-error-icon="true"
                                clearable
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
                                <span class="text-caption text-uppercase text-grey q-mr-sm">username</span>
                                <q-icon
                                    :name="Errors.username.type ? 'error' : 'info'"
                                    :color="Errors.username.type ? 'negative' : 'grey'"
                                    class="cursor-pointer"
                                    size="xs"
                                >
                                    <q-tooltip anchor="top middle" self="center middle" :class="Errors.username.type ? 'bg-negative' : 'bg-grey'">
                                        <template v-if="Errors.username.type">
                                            <div 
                                                v-for="(msg, i) in Errors.username.messages" 
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
                                v-model="username" 
                                outlined 
                                :error="Errors.username.type" 
                                :no-error-icon="true"
                            />
                        </div>
                        <div class="col-2">
                            <div class="q-mb-xs">
                                <span class="text-caption text-uppercase text-grey q-mr-sm">password</span>
                                <q-icon
                                    :name="Errors.password.type ? 'error' : 'info'"
                                    :color="Errors.password.type ? 'negative' : 'grey'"
                                    class="cursor-pointer"
                                    size="xs"
                                >
                                    <q-tooltip anchor="top middle" self="center middle" :class="Errors.password.type ? 'bg-negative' : 'bg-grey'">
                                        <template v-if="Errors.password.type">
                                            <div 
                                                v-for="(msg, i) in Errors.password.messages" 
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
                                v-model="password" 
                                :type="showPassword ? 'text' : 'password'"
                                outlined 
                                :error="Errors.password.type" 
                                :no-error-icon="true"
                            >
                                <template v-slot:append>
                                    <q-icon :name="showPassword ? 'visibility' : 'visibility_off'" class="cursor-pointer" @click="showPassword = !showPassword" style="font-size: 1rem;" />
                                </template>
                            </q-input>
                        </div>
                    </div>
                    <div class="q-mb-md">
                        <div class="q-mb-xs">
                            <span class="text-caption text-uppercase text-grey q-mr-sm">user role</span>
                            <q-icon
                                :name="Errors.role.type ? 'error' : 'info'"
                                :color="Errors.role.type ? 'negative' : 'grey'"
                                class="cursor-pointer"
                                size="xs"
                            >
                                <q-tooltip anchor="top middle" self="center middle" :class="Errors.role.type ? 'bg-negative' : 'bg-grey'">
                                    <template v-if="Errors.role.type">
                                        <div 
                                            v-for="(msg, i) in Errors.role.messages" 
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
                        <q-radio 
                            v-for="(v, index) in roles" 
                            v-model="role" 
                            checked-icon="task_alt" 
                            unchecked-icon="panorama_fish_eye" 
                            :val="v.value" 
                            :label="v.label" 
                            class="text-uppercase" 
                            :disable="isDisabled(v.value)"
                        />
                    </div>
                    <div class="q-mb-md">
                        <div class="q-mb-xs">
                            <span class="text-caption text-uppercase text-grey q-mr-sm">status</span>
                            <q-icon
                                :name="Errors.status.type ? 'error' : 'info'"
                                :color="Errors.status.type ? 'negative' : 'grey'"
                                class="cursor-pointer"
                                size="xs"
                            >
                                <q-tooltip anchor="top middle" self="center middle" :class="Errors.status.type ? 'bg-negative' : 'bg-grey'">
                                    <template v-if="Errors.status.type">
                                        <div 
                                            v-for="(msg, i) in Errors.status.messages" 
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
                        <q-radio 
                            v-for="(v, index) in statuses" 
                            v-model="status" 
                            checked-icon="task_alt" 
                            unchecked-icon="panorama_fish_eye" 
                            :val="v.value" 
                            :label="v.label" 
                            class="text-uppercase"
                        />
                    </div>
                </q-card-section>
                
                <q-card-actions class="q-pa-lg bg">
                    <div class="q-gutter-sm">
                        <q-btn unelevated size="md" color="primary" class="btn text-capitalize" label="save" @click="Save" />
                        <q-btn unelevated size="md" color="primary" class="btn text-capitalize" label="face" @click="() => { faceDialog = true }" />
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
        <q-dialog v-model="faceDialog" full-height position="right" persistent square>
            <q-card class="dialog-card column full-height">
                <q-card-section class="q-pa-lg">
                    <div class="text-h6 text-uppercase">register face</div>
                </q-card-section>
                <q-separator inset />
                <q-card-section class="col q-pa-lg scroll">
                    <div width="480px" height="360px">
                        <SimpleVueCamera ref="camera" />
                        <!-- <div style="margin-top:10px;">
                        <input v-model="name" placeholder="Name (for register)" />
                        <button @click="registerFace">Register Face</button>
                        <button @click="scanFace">Scan (log)</button>
                        </div>
                        <div v-if="lastResult" style="margin-top:10px;">
                        <pre>{{ lastResult }}</pre>
                        </div> -->
                    </div>
                </q-card-section>
                
                <q-card-actions class="q-pa-lg bg">
                    <div class="q-gutter-sm">
                        <q-btn unelevated size="md" color="primary" class="btn text-capitalize" label="register" @click="registerFace" />
                        <q-btn unelevated size="md" color="primary" class="btn text-capitalize" label="discard" @click="() => { faceDialog = false; }" outline/>
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
    useAuthStore
} from 'src/stores/auth-store'

import { 
    reactive,
    computed,
    onMounted,
    ref, 
    watch
} from 'vue';

import { api } from 'src/boot/axios';

import { Toast } from 'src/boot/sweetalert'; 

const PreferenceStore = usePreferenceStore();
const AuthStore = useAuthStore();

const dialog = ref(false);
const isEdit = ref(false);
const submitLoading = ref(false);
const showPassword = ref(false);

const id = ref('');
const profileId = ref('');
const username = ref('');
const password = ref('');
const role = ref('');
const status = ref('');

const Errors = reactive({
    profileId: { 
        type: null, messages: []
    },
    username: {
        type: null, messages: []
    },
    password: {
        type: null, messages: []
    },
    role: {
        type: null, messages: []
    },
    status: {
        type: null, messages: []
    }
});

const Validations = () => {

    let isError = false;

    Object.keys(Errors).forEach(key => {
        Errors[key].type = null;
        Errors[key].messages = [];
    });

    if (!profileId.value) {
        Errors.profileId.type = true;
        Errors.profileId.messages.push('Employee is required')
        isError = true
    } else {
        Errors.profileId.type = null
    }

    if (!username.value) {
        Errors.username.type = true;
        Errors.username.messages.push('Username is required')
        isError = true
    } else {
        Errors.username.type = null
    }

    if (!isEdit.value) {
        if (!password.value) {
            Errors.password.type = true;
            Errors.password.messages.push('Password is required')
            isError = true
        } else {
            Errors.password.type = null
        }
    }

    if (!role.value) {
        Errors.role.type = true;
        Errors.role.messages.push('Role is required')
        isError = true
    } else {
        Errors.role.type = null
    }

    if (!status.value) {
        Errors.status.type = true;
        Errors.status.messages.push('status is required')
        isError = true
    } else {
        Errors.status.type = null
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
        const { data } = await api.get(`/user`, {
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
    LoadProfile();
}

const ModifyDialog = async (data) => {
    ResetForm();
    LoadProfile();
    dialog.value = true;
    isEdit.value = true;
    id.value = data.id;
    profileId.value = Number(data.profileId);
    username.value = data.username;
    role.value = data.role;
    status.value = data.status;
}

const ResetForm = () => {
    id.value = '';
    profileId.value = '';
    username.value = '';
    password.value = '';
    role.value = '';
    status.value = '';
    Errors.profileId.type = null;
    Errors.username.type = null;
    Errors.password.type = null;
    Errors.role.type = null;
    Errors.status.type = null;
}

const Save = async () => {
    if (!Validations()) return;
    submitLoading.value = true;
    try {
        const response = id.value && isEdit
            ? await api.post(`/user/${id.value}/update`, {
                profileId: profileId.value,
                username: username.value,
                password: password.value,
                role: role.value,
                status: status.value
            })
            : await api.post('/user', {
                profileId: profileId.value,
                username: username.value,
                password: password.value,
                role: role.value,
                status: status.value
            });
        dialog.value = false;
        if (id.value && isEdit) {
            UpdateList(response.data.user);
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
            ? await api.post(`/user/${id.value}/disable`)
            : await api.post(`/user/${id.value}/enable`)
        dialog.value = false;
        UpdateList(response.data.user)
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


const profiles = ref([]);
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
const statuses = ref([
    {
        value: "Active",
        label: "Active"
    },
    {
        value: "Inactive",
        label: "Inactive"
    },
    {
        value: "Suspended",
        label: "Suspended"
    }
]);

const filteredProfiles = ref([]);

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

const filterProfileFn = createFilterFn(profiles, filteredProfiles);

const LoadProfile = async () => {
    try {
        const { data } = await api.get(`/option/profiles`);
        profiles.value = normalizeOptions(data)
        filteredProfiles.value = [...profiles.value]
    } catch (error) {
        console.error("Error fetching options:", error);
    }
}

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

const isDisabled = (value) => {
  // Disable only specific roles (like SuperAdmin and Admin)
  return ['SuperAdmin'].includes(value)
}



onMounted(() => {
    LoadAll();
})

import * as faceapi from 'face-api.js';
import SimpleVueCamera from 'simple-vue-camera';

const camera = ref(null);
const name = ref('');
const lastResult = ref(null);
const faceDialog = ref(false);

async function loadModels() {
  const MODEL_URL = '/models'; // put face-api models here
  await faceapi.nets.ssdMobilenetv1.loadFromUri(MODEL_URL);
  await faceapi.nets.faceLandmark68Net.loadFromUri(MODEL_URL);
  await faceapi.nets.faceRecognitionNet.loadFromUri(MODEL_URL);
}

async function captureFrame() {
  if (!camera.value) return null;

  try {
    const blob = await camera.value.snapshot(); // returns Blob
    // Convert Blob to Image (HTMLImageElement) for face-api.js
    const img = await createImageFromBlob(blob);
    return img;
  } catch (err) {
    console.error("Error capturing snapshot:", err);
    return null;
  }
}

// helper function
function createImageFromBlob(blob) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = URL.createObjectURL(blob);
  });
}

// usage in registerFace or scanFace
async function detectDescriptor() {
  const img = await captureFrame();
  if (!img) return null;

  const detection = await faceapi
    .detectSingleFace(img)
    .withFaceLandmarks()
    .withFaceDescriptor();

  if (!detection) return null;
  return { descriptor: detection.descriptor, img };
}

async function registerFace() {
  lastResult.value = "Registering...";
  const result = await detectDescriptor();
  if (!result) return (lastResult.value = "No face detected");

  const canvas = document.createElement("canvas");
  canvas.width = result.img.width;
  canvas.height = result.img.height;
  const ctx = canvas.getContext("2d");
  ctx.drawImage(result.img, 0, 0);

  const payload = {
    name: name.value || "unknown",
    descriptor: Array.from(result.descriptor),
    imageBase64: canvas.toDataURL("image/png"),
  };

  try {
    const res = await fetch("http://localhost:3000/api/face/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    lastResult.value = JSON.stringify(await res.json(), null, 2);
  } catch (err) {
    lastResult.value = "Error: " + err.message;
  }
}


async function scanFace() {
  lastResult.value = 'Scanning...';
  const result = await detectDescriptor();
  if (!result) return (lastResult.value = 'No face detected');

  const payload = { descriptor: Array.from(result.descriptor) };
  try {
    const res = await fetch('http://localhost:3000/api/faces/scan', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    lastResult.value = JSON.stringify(await res.json(), null, 2);
  } catch (err) {
    lastResult.value = 'Error: ' + err.message;
  }
}


onMounted(async () => {
  await loadModels();
});

</script>

<style scoped>

</style>