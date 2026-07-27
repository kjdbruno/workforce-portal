<template>
    <q-layout view="lHh Lpr lFf">
        <q-drawer v-model="drawer" show-if-above :mini="!drawer || miniState" :width="300" :mini-width="125" :breakpoint="500" bordered v-if="$q.platform.is.desktop">

            <div class="text-center q-mb-lg">
                <div class="q-pt-lg q-pb-lg">
                    <q-avatar>
                        <img src="~assets/ccmi-logo.png">
                    </q-avatar>
                </div>
            </div>

            <q-scroll-area class="fit" :horizontal-thumb-style="{ opacity: 0 }">
                <div class="full-height column flex-center">
                    <div v-for="item in menuItems" :key="item.label" class="q-pa-sm q-pb-sm">
                        <q-btn flat round @click="router.push(item.to)" class="q-mb-md">
                            <q-icon :name="item.icon" :color="isActive(item.label) ? 'primary' : 'secondary'" />
                        </q-btn>
                    </div>
                </div>
            </q-scroll-area>
        </q-drawer>
        <q-header elevated v-if="$q.platform.is.mobile">
            <q-toolbar>
                <q-avatar>
                    <img src="~assets/ccmi-logo.png" />
                </q-avatar>
                <q-space />
                <div v-for="item in menuItems" :key="item.label" class="q-pa-sm">
                    <q-btn flat round @click="router.push(item.to)">
                        <q-icon :name="item.icon" :color="isActive(item.label) ? 'white' : 'secondary'" />
                    </q-btn>
                </div>
            </q-toolbar>
        </q-header>
        <q-page-container>
            <router-view />
        </q-page-container>
    </q-layout>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeMount } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { useQuasar } from 'quasar'
const $q = useQuasar()

const router = useRouter();
const route = useRoute();
const drawer = ref(true)
const miniState = ref(true)
const isActive = (label) => route.name?.toLowerCase() === label.toLowerCase();
const menuItems = [
    { icon: 'bi-house', label: 'home', to: '/'},
    { icon: 'bi-person-workspace', label: 'biometric', to: '/biometric' },
    // { icon: 'bi-heart', label: 'fileleave', to: '/leave'  },
    // { icon: 'bi-bookmark-heart', label: 'myleave', to: '/my/leave' },
    // { icon: 'bi-alarm', label: 'dtr', to: '/dtr' },
    // { icon: 'bi-wallet', label: 'mypayslip', to: '/my/payslip' },
]
</script>
