<template>
    <q-layout view="lHh Lpr lFf">
        <q-page-container>
            <q-page class="full-height flex flex-center page-bg">
                <div class="card-grid">
                    <div v-for="(data, index) in tabs" :key="`data-${data.id}`" class="card-anim-wrapper" :style="{ animationDelay: `${index * 100}ms` }">
                        <q-card @click="openDialog(data.dialog)" class="card card-menu card-hover-animate q-pa-md no-shadow cursor-pointer radius-sm" >
                            <q-card-section class="text-center body">
                                <div class="text-h5 text-white text-bold text-uppercase">{{ data.label }}</div>
                            </q-card-section>
                        </q-card>
                    </div>
                </div>
                <time-in-dialog v-model="activeDialog" dialog-name="TimeInDialog"/>
                <biometric-dialog v-model="activeDialog" dialog-name="BiometricDialog"/>
                <leave-dialog v-model="activeDialog" dialog-name="LeaveDialog"/>
                <div class="bg-overlay"></div>
            </q-page>
        </q-page-container>
    </q-layout>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue';
import BiometricDialog from './BiometricDialog.vue';
import LeaveDialog from './LeaveDialog.vue';
import TimeInDialog from './TimeInDialog.vue';
const tabs = [
    { label: 'biometric', dialog: 'BiometricDialog'},
    { label: 'file a leave', dialog: 'LeaveDialog'},
    { label: 'track my leave', dialog: 'LeaveDialog'}
]
const activeDialog = ref(null)
const openDialog = (dialogName) => {
    activeDialog.value = dialogName
}
</script>
<style scoped lang="css">
    .card
    {
        /* box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px !important; */
        position: relative;
        z-index: 1;
        background: rgba(255, 255, 255, 0.20); /* semi-transparent */
        backdrop-filter: blur(15px) saturate(180%);
        -webkit-backdrop-filter: blur(15px) saturate(180%);
        border: 1px solid rgba(255, 255, 255, 0.25);
        border-radius: 16px;
        box-shadow: 0 8px 32px rgba(0,0,0,0.1);
        color: #fff; /* optional if you want white text on top */
    }
    .card-grid
    {
        z-index: 999;
    }
    .bg-overlay {
        position: fixed;
        inset: 0;
        background-color: rgba(0, 0, 0, 0.30);
        z-index: 1;
    }
    .page-bg {
        position: relative;
        width: 100%;
        height: 100%;
        background-image: url('/src/assets/bg.jpg'); /* Vite alias */
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        overflow: hidden;
    }
</style>