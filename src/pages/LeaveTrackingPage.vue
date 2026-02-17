<template>
    <q-page class="flex flex-center">
        <q-card class="radius-md no-shadow" style="width: 65%; box-shadow: rgba(0, 0, 0, 0.09) 0px 3px 12px;">
            <q-card-section class="q-pl-lg q-pr-lg">
                <div class="text-h6 text-uppercase">track my leave</div>
            </q-card-section>
            <q-card-section class="q-pl-lg q-pr-lg">
                <div class="text-caption text-uppercase" :class="Errors.controlno.type ? 'text-negative text-italic' : 'text-grey'">{{ Errors.controlno.type ? Errors.controlno.msg : 'control no' }}</div>
                <q-input 
                    v-model="controlno" 
                    outlined 
                    :error="Errors.controlno.type"
                    :no-error-icon="true"
                    label="Enter Control No."
                    mask="####-###"
                    :input-style="{textAlign: 'center'}"
                />
            </q-card-section>
            <q-card-actions align="center" class="q-pb-lg">
                <q-btn unelevated size="md" color="primary" class="btn-xl text-capitalize" label="track my leave" @click="() => { TrackLeave() }" />
            </q-card-actions>
            <q-inner-loading :showing="SubmitLoading">
                <div class="text-center">
                    <q-spinner-puff size="xl" color="primary"/>
                    <div class="text-h6 text-dark text-uppercase q-mt-xs">we're working on it!</div>
                </div>
            </q-inner-loading>
        </q-card>
        <q-dialog v-model="printDialog" full-height full-width class="pdf">
        <q-card class="bg-white q-pa-none" style="height: 100vh; overflow: hidden;">
            <q-btn
                icon="close"
                class="fixed bg-white text-primary shadow-2"
                round
                dense
                v-close-popup
                style="top: 15px; right: 15px; z-index: 999;"
            />
            <q-card-section class="q-pa-none" style="height: 100%; overflow: hidden;">
                <div class="iframe-container">
                    <iframe v-if="pdf" :src="pdf" frameborder="0"></iframe>
                </div>
            </q-card-section>
        </q-card>
    </q-dialog>
    </q-page>
</template>
<script setup>
import { ref, onMounted, onBeforeUnmount, onBeforeMount, watch, reactive, computed } from 'vue';
import { api } from 'src/boot/axios';
import moment from 'moment';
import Swal from 'sweetalert2';
import { Toast } from 'src/boot/sweetalert'; 
import { useEmployeeStore } from 'src/stores/employee-store'
const EmployeeStore = useEmployeeStore();

const SubmitLoading = ref(false);

const printDialog = ref(false);
const pdf = ref(null);

const controlno = ref('');

const Errors = reactive({
    controlno: { 
        type: null, message: ''
    },
});

const failToast = () =>
    Toast.fire({
        icon: "error",
        html: `
        <div class="text-h6 text-bold text-uppercase">Request Failed</div>
        <div class="text-caption">Something went wrong.</div>
        `
    })

const setErr = (key, msg = 'required') => (Errors[key].type = true, Errors[key].msg = msg, true)
const clearErr = (key) => (Errors[key].type = null, Errors[key].msg = '', false)

const req = (key, val) => (!val ? setErr(key, 'required') : clearErr(key))

const ValidateControlNo = () => {

    let isError = false

    isError ||= req('controlno', controlno.value)

    if (isError) failToast()
    return !isError
}

const TrackLeave = async () => {
    if (!ValidateControlNo()) return;
    SubmitLoading.value = true;
    try {
        const res = await api.get(`/portal/leave/${controlno.value}/pdf`, {
            responseType: 'arraybuffer',
        })
        const blob = new Blob([res.data], { type: 'application/pdf' });
        const pdfurl = window.URL.createObjectURL(blob) + "#view=FitW";
        pdf.value = pdfurl
        printDialog.value = true;
        controlno.value = ''
    } catch (e) {
        if (e.response && e.response.data) {
            Toast.fire({
                icon: "error",
                html: `
                    <div class="text-h6 text-bold text-uppercase">Request Failed</div>
                    <div class="text-caption">Please check your control number</div>
                `
            })
        }
    } finally {
        SubmitLoading.value = false;
    }
}
</script>

<style lang="css" scoped>

.card-menu
{
    width: 150px;
    height: 175px;
}

.card-profile {
        overflow: hidden;
        background: linear-gradient(
  135deg,
  #c94a4a 0%,
  #a91f1f 65%,
  #900201 100%
);
    }

    /* COVER PHOTO */
    .cover-photo {
        height: 175px;
        width: 100%;
        position: relative;
    }

    .cover-photo img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    }

    /* Optional dark overlay for readability */
    .cover-photo::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0.15),
        rgba(0, 0, 0, 0.55)
    );
    }

    /* PROFILE IMAGE SECTION */
    .profile-section {
    margin-top: -80px; /* pulls image over cover */
    }

    /* PROFILE IMAGE */
    .profile-img {
        width: 150px;
        height: 150px;
        border-radius: 50%;
        object-fit: cover;
        border: 5px solid #ffffff;
        background: #ffffff;
        box-shadow: 0 12px 28px rgba(0, 0, 0, 0.35);
    }
</style>