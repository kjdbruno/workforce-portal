<template>
    <q-page class="full-height flex flex-center">
        <q-card class="justify-center items-center no-shadow q-pa-xl radius-md border" style="width: 600px;">
            <q-card-section>
                <div class="text-center">
                    <div v-html="indexStore.brand"/>
                </div>
            </q-card-section>
            <q-card-section class="text-center">
                <div class="card-grid">
                    <div class="card-anim-wrapper" :style="{ animationDelay: `120ms` }">
                        <q-card key="data-add" class="card card-hover-animate flex flex-center q-pa-md no-shadow cursor-pointer radius-sm" >
                            <q-card-section class="text-center">
                                <div class="text-subtitle1 text-uppercase q-mt-xs">biometric</div>
                            </q-card-section>
                        </q-card>
                    </div>
                    <div class="card-anim-wrapper" :style="{ animationDelay: `120ms` }">
                        <q-card key="data-add" class="card card-hover-animate flex flex-center q-pa-md no-shadow cursor-pointer radius-sm" >
                            <q-card-section class="text-center">
                                <div class="text-subtitle1 text-uppercase q-mt-xs">leave</div>
                            </q-card-section>
                        </q-card>
                    </div>
                </div>
            </q-card-section>
        </q-card>
    </q-page>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useQuasar } from 'quasar'
import { useAuthStore } from 'src/stores/auth-store';
import { useIndexStore } from 'src/stores/index-store';
import { api } from 'src/boot/axios';

const $q = useQuasar();
const router = useRouter();
const authStore = useAuthStore();
const indexStore = useIndexStore();

const username = ref('');
const password = ref('');

const showPassword = ref(false);

const loading = ref(false);

const formErrors = reactive({
    username: { msg: null, type: null },
    password: { msg: null, type: null }
});

const errors = ref([]);

const userValidator = () => {
    let isError = false;
    if (username.value == '' || username.value == '') {
        formErrors.username.msg = 'Username is required!';
        formErrors.username.type = true;
        isError = true;
    } else {
        formErrors.username.msg = null;
        formErrors.username.type = null;
    }
    if (password.value == '' || password.value == null) {
        formErrors.password.msg = 'Password is required!'
        formErrors.password.type = true;
        isError = true;
    } else if (password.value.length > 0 && password.value.length < 4) {
        formErrors.password.msg = 'Minimum password length is 4!';
        formErrors.password.type = true;
        isError = true;
    } else {
        formErrors.password.msg = null;
        formErrors.password.type = null;
    }
    return isError;
}

const login = async () => {
    const isError = userValidator();
    if (isError) return false;
    loading.value = true;
    try {
        await authStore.login(username.value, password.value);
        router.push('/home');
        loading.value = false;
    } catch (e) {
        loading.value = false;
        errors.value = e.response.data.errors;
        console.log(e.response.data.errors);
    }
}
</script>
<style scoped lang="css">
    .card
    {
        box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px !important;
    }
</style>