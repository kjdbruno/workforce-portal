<template>
    <q-page class="full-height flex flex-center">
        <q-card class="justify-center items-center no-shadow q-pa-xl radius-md border" style="width: 600px;">
            <q-card-section>
                <!-- <div class="text-center">
                    <div v-html="indexStore.brand"/>
                </div> -->
            </q-card-section>
            <q-card-section class="text-center">
                <div class="card-grid">
                    <div v-for="(data, index) in tabs" :key="`data-${data.id}`" class="card-anim-wrapper" :style="{ animationDelay: `${index * 100}ms` }">
                        <q-card @click="openDialog(data.dialog)" class="card card-menu card-hover-animate q-pa-md no-shadow cursor-pointer radius-sm" >
                            <q-card-section class="text-center">
                                <div class="text-body2 text-grey text-uppercase">{{ data.label }}</div>
                            </q-card-section>
                        </q-card>
                    </div>
                </div>
            </q-card-section>
        </q-card>
        <biometric-dialog v-model="activeDialog" dialog-name="BiometricDialog"/>
        <leave-dialog v-model="activeDialog" dialog-name="LeaveDialog"/>
    </q-page>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue';
import BiometricDialog from './BiometricDialog.vue';
import LeaveDialog from './leaveDialog.vue';
const tabs = [
    { label: 'biometric', dialog: 'BiometricDialog'},
    { label: 'leave', dialog: 'LeaveDialog'}
]
const activeDialog = ref(null)
const openDialog = (dialogName) => {
    activeDialog.value = dialogName
}
</script>
<style scoped lang="css">
    .card
    {
        box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px !important;
    }
</style>