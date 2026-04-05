<template>
    <q-page class="flex flex-center no-scroll">
        <div class="camera-card q-pa-none" v-if="!LeaveStore.isMatch">
            <div class="camera-container relative-position">
                <div class="camera-view">
                    <SimpleVueCamera
                        ref="camera"
                        :constraints="cameraConstraints"
                        @loading="LoadingCamera"
                        @started="StartedCamera"
                    />
                </div>
                <div class="absolute-full flex flex-center camera-overlay" v-show="!SubmitLoading && !CameraLoading">
                    <q-card class="no-shadow radius-md q-pa-lg">
                        <q-card-section class="text-center">
                            <div class="text-h6 text-uppercase">scan to file a leave</div>
                            <div class="text-caption">
                                Please position your face within the camera frame and smile clearly.
                            </div>
                        </q-card-section>
                        <q-card-section class="text-center">
                            <q-btn
                                label="Scan"
                                color="primary"
                                unelevated
                                size="lg"
                                icon="bi-camera2"
                                class="text-capitalize btn-lg"
                                @click="ScanFace"
                                :loading="SubmitLoading"
                            />
                        </q-card-section>
                        <div class="absolute-right q-pa-sm">
                            <q-btn
                                unelevated
                                size="md"
                                icon="bi-arrow-repeat"
                                round
                                @click="ToggleCamera"
                            />
                        </div>
                    </q-card>
                </div>
            </div>
            <q-inner-loading :showing="SubmitLoading || CameraLoading">
                <q-card class="no-shadow radius-md q-pa-md">
                    <q-card-section class="text-center">
                        <div>
                            <q-spinner-ios color="dark"/>
                        </div>
                        <div class="text-dark text-uppercase text-caption">we're working on it!</div>
                    </q-card-section>
                </q-card>
            </q-inner-loading>
        </div>
        <q-card v-else class="radius-md no-shadow q-pa-lg" style="width: 65%; box-shadow: rgba(0, 0, 0, 0.09) 0px 3px 12px;">
            <q-card-section>
                <div class="row q-col-gutter-lg">
                    <div class="col-4">
                        <q-card key="data-add" class="card card-profile no-shadow radius-sm q-mb-sm q-pb-lg">
                            <div class="cover-photo">
                                <img :src="randomCover" alt="Cover"/>
                            </div>
                            <q-card-section class="text-center profile-section">
                                <img :src="LeaveStore.employee?.photo" alt="Profile" class="profile-img" />
                            </q-card-section>
                            <q-card-section class="text-center q-pt-sm">
                                <div class="text-caption text-uppercase text-white">{{ LeaveStore.employee?.employee_no }}</div>
                                <div class="text-h5 text-uppercase text-bold text-white">{{ FormatName(LeaveStore.employee) }}</div>
                                <div class="text-body1 text-uppercase text-white">{{ LeaveStore.employee?.position }}</div>
                                <div class="text-caption text-uppercase text-white">{{ LeaveStore.employee?.employment_status }}</div>
                            </q-card-section>
                        </q-card>
                    </div>
                    <div class="col">
                        <div class="text-h5 text-uppercase q-mb-sm">leave information</div>
                        <div class="q-my-md">
                            <div class="q-gutter-xs">
                                <q-btn
                                    v-for="(btn, index) in navs"
                                    unelevated
                                    :class="LeaveStore.component === `${btn.component}` ? 'bg-primary text-white' : 'bg-accent'"
                                    @click="LeaveStore.component = `${btn.component}`"
                                    size="xs"
                                    :label="btn.label"
                                />
                            </div>
                            <div class="q-my-md">
                                <component :is="components[LeaveStore.component]" :key="LeaveStore.component" />
                            </div>
                        </div>
                    </div>
                </div>
            </q-card-section>
            <q-inner-loading :showing="LeaveStore.SubmitLoading">
                <q-card class="no-shadow radius-md q-pa-md">
                    <q-card-section class="text-center">
                        <div>
                            <q-spinner-ios color="dark"/>
                        </div>
                        <div class="text-dark text-uppercase text-caption">we're working on it!</div>
                    </q-card-section>
                </q-card>
            </q-inner-loading>
        </q-card>
    </q-page>
</template>
<script setup>
import { ref, onMounted, onBeforeUnmount, onBeforeMount, watch, reactive, computed } from 'vue';
import { api } from 'src/boot/axios';
import { Toast } from 'src/boot/sweetalert'; 
import { useLeaveStore } from 'src/stores/leave-store';
const LeaveStore = useLeaveStore();

const CameraLoading = ref(false);
const SubmitLoading = ref(false);

import * as faceapi from 'face-api.js';
import SimpleVueCamera from 'simple-vue-camera';

const camera = ref(null);

const cameraConstraints = ref({
    video: {
        facingMode: 'user',
        width: { ideal: 1280 },
        height: { ideal: 720 }
    }
})
const ToggleCamera = async () => {
    const mode = cameraConstraints.value.video.facingMode
    const newMode = mode === 'user' ? 'environment' : 'user'

    cameraConstraints.value = {
        video: {
            facingMode: newMode,
            width: { ideal: 1280 },
            height: { ideal: 720 }
        }
    }

    if (camera.value) {
        await camera.value.stop()
        await camera.value.start()
    }
}

const loadModels = async () => {
    const MODEL_URL = window.location.origin + '/models';
    await Promise.all([
        faceapi.nets.ssdMobilenetv1.loadFromUri(MODEL_URL),
        faceapi.nets.faceLandmark68Net.loadFromUri(MODEL_URL),
        faceapi.nets.faceRecognitionNet.loadFromUri(MODEL_URL),
        faceapi.nets.faceExpressionNet.loadFromUri(MODEL_URL),
    ])
    console.log('✅ Models loaded')
}

const captureFrame = async () => {
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
const createImageFromBlob = (blob) => {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve(img);
        img.onerror = reject;
        img.src = URL.createObjectURL(blob);
    });
}

// usage in registerFace or scanFace
const detectDescriptor = async () => {
    const img = await captureFrame();
    if (!img) return null;
    const detection = await faceapi
        .detectSingleFace(img)
        .withFaceLandmarks()
        .withFaceDescriptor();
    if (!detection) return null;
    return { descriptor: detection.descriptor, img };
}

const ScanFace = async () => {
    SubmitLoading.value = true;
    const result = await detectDescriptor();
    const { passed, happy } = await detectSmile(6000, 0.7)

    if (!passed) {
        Toast.fire({
            icon: "error",
            html: `
                <div class="text-subtitle1 text-bold text-uppercase">Liveness check failed!</div>
                <div class="text-caption text-capitalize;">Please smile clearly to continue<div>
            `
        });
        return
    }

    try {
        const response = await api.post(`/portal/face`, {
            descriptor: Array.from(result.descriptor)
        });
        const { match, record: emp, distance } = response.data;
        if (!match) {
            Toast.fire({
                icon: "error",
                html: `
                    <div class="text-subtitle1 text-bold text-uppercase">not recognized!</div>
                    <div class="text-caption text-capitalize;">no matching employee found<div>
                `
            });
        } else {
            LeaveStore.employee = emp;
            LeaveStore.isMatch = true;
            LeaveStore.component = 'LeaveFilingComponent'
        }
    } catch (e) {
        if (e.response && e.response.data) {
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
}

const detectSmile = async (timeoutMs = 5000, threshold = 0.7) => {
    const start = Date.now()

    while (Date.now() - start < timeoutMs) {
        const img = await captureFrame()
        if (!img) continue

        const detection = await faceapi
        .detectSingleFace(img)
        .withFaceLandmarks()
        .withFaceExpressions()

        if (!detection) continue

        const happy = detection.expressions?.happy || 0
        if (happy >= threshold) return { passed: true, happy }

        await new Promise(r => setTimeout(r, 200))
    }

    return { 
        passed: false, 
        happy: 0 
    }
}

onMounted(() => {
    PopulateData()
})

const PopulateData = async (app) => {
    await loadModels();
    getLocation();
}

const geo_lat = ref(null)
const geo_lng = ref(null)
const geo_place = ref(null)
const geoError = ref(null)

const getLocation = async () => {
    if (!navigator.geolocation) {
        geoError.value = 'Geolocation not supported'
        return
    }

    navigator.geolocation.getCurrentPosition(
        async (position) => {
            geo_lat.value = position.coords.latitude
            geo_lng.value = position.coords.longitude
            await getPlaceName(
                position.coords.latitude,
                position.coords.longitude
            )
        },
        (error) => {
            geoError.value = error.message
        },
        {
            enableHighAccuracy: true,
            timeout: 10000,
            maximumAge: 0
        }
    )
    
}

const getPlaceName = async (lat, lng) => {
    try {
        const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lng}`)
        const data = await response.json()
        geo_place.value = data.display_name || 'Unknown location'
    } catch {
        geo_place.value = 'Unable to fetch location name'
    }
}

const LoadingCamera = () => {
    CameraLoading.value = true;
}

const StartedCamera = () => {
    CameraLoading.value = false;
}

const FormatName = (profile) => {
    if (!profile) return '';
    const firstname = profile.first_name || '';
    const middlename = profile.middle_name
        ? profile.middle_name.charAt(0).toUpperCase() + '.'
        : '';
    const lastname = profile.last_name || '';
    const suffix = profile.suffix ? ` ${profile.suffix}` : '';
    return `${firstname} ${middlename} ${lastname}${suffix}`.trim();
}

const TOTAL_COVERS = 25;

const randomCover = ref('');

onBeforeMount(() => {

    LeaveStore.isMatch = false;

    const randomNumber = Math.floor(Math.random() * TOTAL_COVERS) + 1;
    randomCover.value = new URL(
        `../assets/cover/${randomNumber}.jpg`,
        import.meta.url
    ).href;
})

import LeaveFilingComponent from 'src/components/LeaveFilingComponent.vue';
import LeaveMonitoringComponent from 'src/components/LeaveMonitoringComponent.vue';

const components = {
    LeaveFilingComponent,
    LeaveMonitoringComponent
};

const navs = [
    { component: 'LeaveFilingComponent', label: 'leave filing' },
    { component: 'LeaveMonitoringComponent', label: 'leave monitoring' },
]
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

.profile-section {
    margin-top: -80px;
}

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