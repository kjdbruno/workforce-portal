<template>
    <div>
        <div class="row q-col-gutter-md">
            <div class="col-3">
                <q-card key="data-add" class="card card-profile no-shadow radius-sm q-mb-sm q-pb-lg">
                    <div class="cover-photo">
                        <img :src="randomCover" alt="Cover"/>
                    </div>
                    <q-card-section class="text-center profile-section">
                        <img :src="FormatAvatar(employee?.photo?.avatar)" alt="Profile" class="profile-img" />
                    </q-card-section>
                    <q-card-section class="text-center q-pt-sm">
                        <div class="text-caption text-uppercase text-white">{{ employee?.employment?.employee_no }}</div>
                        <div class="text-h5 text-uppercase text-bold text-white">{{ formatName(employee) }}</div>
                        <div class="text-body1 text-uppercase text-white">{{ employee?.employment?.position?.name }}</div>
                        <div class="text-caption text-uppercase text-white">{{ employee?.employment?.employment_status }}</div>
                    </q-card-section>
                    <q-card-section class="text-center">
                        <div class="text-caption text-uppercase text-white">email address</div>
                        <div class="text-body1 text-bold text-white">{{ employee?.email }}</div>
                    </q-card-section>
                    <q-card-section class="text-center">
                        <div class="text-caption text-uppercase text-white">contact number</div>
                        <div class="text-body1 text-bold text-white">{{ employee?.contact_number }}</div>
                    </q-card-section>
                    <q-card-section class="text-center">
                        <div class="text-caption text-uppercase text-white">adderss</div>
                        <div class="text-body1 text-capitalize text-bold text-white">{{ employee?.address }}</div>
                    </q-card-section>
                    <q-card-section class="text-center">
                        <q-btn unelevated size="sm" label="print employee data" text-color="primary" color="white" />
                    </q-card-section>
                    <div class="absolute-top-left q-ma-sm">
                        <q-btn round size="sm" icon="arrow_back" text-color="primary" color="white" @click="() => { EmployeeStore.component = 'EmployeeComponent'}"/>
                    </div>
                </q-card>
            </div>
            <div class="col-9">
                <div class="card-grid">
                    <div v-for="(data, index) in tabs" :key="`data-${data.id}`" class="card-anim-wrapper" :style="{ animationDelay: `${index * 100}ms` }">
                        <q-card @click="openDialog(data.dialog)" class="card card-menu card-hover-animate q-pa-md no-shadow cursor-pointer radius-sm" >
                            <q-card-section class="text-center">
                                <div class="text-body2 text-grey text-uppercase">{{ data.label }}</div>
                            </q-card-section>
                        </q-card>
                    </div>
                </div>
            </div>
        </div>
        <profile-dialog v-model="activeDialog" dialog-name="ProfileDialog" @saved="GetEmployee"/>
        <employment-dialog v-model="activeDialog" dialog-name="EmploymentDialog" @saved="GetEmployee"/>
        <service-dialog v-model="activeDialog" dialog-name="ServiceDialog"/>
        <biometric-dialog v-model="activeDialog" dialog-name="BiometricDialog"/>
        <photo-dialog v-model="activeDialog" dialog-name="PhotoDialog" @saved="GetEmployee"/>
        <education-dialog v-model="activeDialog" dialog-name="EducationDialog"/>
        <training-dialog v-model="activeDialog" dialog-name="TrainingDialog"/>
        <experience-dialog v-model="activeDialog" dialog-name="ExperienceDialog"/>
        <dependent-dialog v-model="activeDialog" dialog-name="DependentDialog"/>
        <document-dialog v-model="activeDialog" dialog-name="DocumentDialog"/>
        <identification-dialog v-model="activeDialog" dialog-name="IdentificationDialog"/>
        <attendance-dialog v-model="activeDialog" dialog-name="AttendanceDialog"/>
        <leave-dialog v-model="activeDialog" dialog-name="LeaveDialog"/>
        <performance-dialog v-model="activeDialog" dialog-name="PerformanceDialog"/>
        <incident-dialog v-model="activeDialog" dialog-name="IncidentDialog"/>
        <payslip-dialog v-model="activeDialog" dialog-name="PayslipDialog"/>
        <overtime-dialog v-model="activeDialog" dialog-name="OvertimeDialog"/>
        <salary-dialog v-model="activeDialog" dialog-name="SalaryDialog"/>
        <account-dialog v-model="activeDialog" dialog-name="AccountDialog"/>
    </div>
    <!-- <div class="card-grid">
        <div class="card-anim-wrapper">
            <q-card key="data-add" class="card card-hover-animate flex flex-center q-pa-md no-shadow cursor-pointer radius-sm" v-ripple @click="() => { EmployeeStore.component = 'EmployeeComponent'}" >
                <q-card-section class="text-center">
                    <q-avatar size="75px" font-size="52px" color="grey" text-color="white" icon="arrow_back" />
                </q-card-section>
            </q-card>
        </div>
        <div class="card-anim-wrapper">
            <q-card key="data-add" class="card card-hover-animate flex flex-center q-pa-md no-shadow cursor-pointer radius-sm bg-primary" v-ripple >
                <q-card-section class="text-center">
                </q-card-section>
                <q-card-section class="text-center">
                    <div class="text-body1 text-uppercase text-white">{{ formatName(EmployeeStore.data) }}</div>
                </q-card-section>
                <q-card-section class="text-center">
                    <div class="text-caption text-uppercase text-white">{{ EmployeeStore.data?.employment?.employee_no }}</div>
                </q-card-section>
            </q-card>
        </div>
        <div v-for="(data, index) in tabs" :key="`data-${data.id}`" class="card-anim-wrapper" :style="{ animationDelay: `${index * 120}ms` }">
            <q-card @click="openDialog(data.dialog)" class="card card-hover-animate flex flex-center q-pa-md no-shadow cursor-pointer radius-sm" >
                <q-card-section class="text-center full-width">
                    <div class="text-body1 text-grey text-uppercase">{{ data.label }}</div>
                </q-card-section>
            </q-card>
        </div>
        <profile-dialog v-model="activeDialog" dialog-name="ProfileDialog"/>
        <employment-dialog v-model="activeDialog" dialog-name="EmploymentDialog"/>
        <service-dialog v-model="activeDialog" dialog-name="ServiceDialog"/>
        <biometric-dialog v-model="activeDialog" dialog-name="BiometricDialog"/>
        <photo-dialog v-model="activeDialog" dialog-name="PhotoDialog"/>
        <education-dialog v-model="activeDialog" dialog-name="EducationDialog"/>
        <training-dialog v-model="activeDialog" dialog-name="TrainingDialog"/>
        <experience-dialog v-model="activeDialog" dialog-name="ExperienceDialog"/>
        <dependent-dialog v-model="activeDialog" dialog-name="DependentDialog"/>
        <document-dialog v-model="activeDialog" dialog-name="DocumentDialog"/>
        <identification-dialog v-model="activeDialog" dialog-name="IdentificationDialog"/>
        <attendance-dialog v-model="activeDialog" dialog-name="AttendanceDialog"/>
        <leave-dialog v-model="activeDialog" dialog-name="LeaveDialog"/>
        <performance-dialog v-model="activeDialog" dialog-name="PerformanceDialog"/>
        <incident-dialog v-model="activeDialog" dialog-name="IncidentDialog"/>
        <payslip-dialog v-model="activeDialog" dialog-name="PayslipDialog"/>
        <overtime-dialog v-model="activeDialog" dialog-name="OvertimeDialog"/>
    </div> -->
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, onBeforeMount, watch, reactive } from 'vue';
import { api } from 'src/boot/axios';
import { Toast } from 'src/boot/sweetalert'; 

import { useEmployeeStore } from 'src/stores/employee-store';
import ProfileDialog from './ProfileDialog.vue';
import EmploymentDialog from './EmploymentDialog.vue';
import ServiceDialog from './ServiceDialog.vue';
import BiometricDialog from './BiometricDialog.vue';
import PhotoDialog from './PhotoDialog.vue';
import EducationDialog from './EducationDialog.vue';
import TrainingDialog from './TrainingDialog.vue';
import ExperienceDialog from './ExperienceDialog.vue';
import DependentDialog from './DependentDialog.vue';
import DocumentDialog from './DocumentDialog.vue';
import IdentificationDialog from './IdentificationDialog.vue';
import AttendanceDialog from './AttendanceDialog.vue';
import LeaveDialog from './LeaveDialog.vue';
import PerformanceDialog from './PerformanceDialog.vue';
import IncidentDialog from './IncidentDialog.vue';
import PayslipDialog from './PayslipDialog.vue';
import OvertimeDialog from './OvertimeDialog.vue';
import SalaryDialog from './SalaryDialog.vue';
import AccountDialog from './AccountDialog.vue';
const EmployeeStore = useEmployeeStore();

const tabs = [
    { label: 'profile', dialog: 'ProfileDialog'},
    { label: 'employment', dialog: 'EmploymentDialog'},
    { label: 'service recrod', dialog: 'ServiceDialog'},
    { label: 'salary', dialog: 'SalaryDialog'},
    { label: 'photo', dialog: 'PhotoDialog'},
    { label: 'account', dialog: 'AccountDialog'},
    { label: 'face recognition', dialog: 'BiometricDialog'},
    { label: 'education', dialog: 'EducationDialog'},
    { label: 'trainings', dialog: 'TrainingDialog'},
    { label: 'experiences', dialog: 'ExperienceDialog'},
    { label: 'dependents', dialog: 'DependentDialog'},
    { label: 'documents', dialog: 'DocumentDialog'},
    { label: 'id', dialog: 'IdentificationDialog'},
    { label: 'dtr', dialog: 'AttendanceDialog'},
    { label: 'leaves', dialog: 'LeaveDialog'},
    { label: 'overtime', dialog: 'OvertimeDialog'},
    { label: 'performance', dialog: 'PerformanceDialog'},
    { label: 'incidents', dialog: 'IncidentDialog'},
    { label: 'payslip', dialog: 'PayslipDialog'},
]

const formatName = (profile) => {
    if (!profile) return '';
    const firstname = profile.first_name || '';
    const middlename = profile.middle_name
        ? profile.middle_name.charAt(0).toUpperCase() + '.'
        : '';
    const lastname = profile.last_name || '';
    const suffix = profile.suffix ? ` ${profile.suffix}` : '';
    return `${firstname} ${middlename} ${lastname}${suffix}`.trim();
}

const FormatAvatar = (photo) => {
    const baseUrl = process.env.VUE_APP_BACKEND_URL
    const defaultAvatar = '/photos/Default.png'

    if (!photo) {
        return `${baseUrl}${defaultAvatar}`
    }

    return `${baseUrl}${photo}`
}


const activeDialog = ref(null)
const openDialog = (dialogName) => {
    activeDialog.value = dialogName
}

const loading = ref(false);
const employee = ref([]);

const GetEmployee = async () => {
    loading.value = true;
    try {
        const response = await api.get(`/employee/information/${EmployeeStore.data?.id}`);
        employee.value = response.data.record;

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

onMounted(() => {
    GetEmployee()
})

const TOTAL_COVERS = 25;

const randomCover = ref('');

onBeforeMount(() => {
    const randomNumber = Math.floor(Math.random() * TOTAL_COVERS) + 1;

    randomCover.value = new URL(
        `../../assets/cover/${randomNumber}.jpg`,
        import.meta.url
    ).href;
})

</script>

<style lang="css" scoped>
     /* CARD */
    .card-profile {
        overflow: hidden;
        background: linear-gradient(
            135deg,
            #ff9f1c 0%,
            #ff7a18 45%,
            #ff4d2d 100%
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
    .card-menu
    {
        width: 175px;
        height: 200px;
    }
</style>