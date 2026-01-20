<template>
    <div>
        <div class="card-grid">
            <div class="card-anim-wrapper">
                <q-card
                    key="data-add"
                    class="card card-hover-animate flex flex-center q-pa-md no-shadow cursor-pointer radius-sm"
                    v-ripple
                    @click="() => { ProfileStore.subcomponent = 'EmployeeListComponent' }"
                >
                    <q-card-section class="text-center">
                        <q-avatar size="75px" font-size="52px" color="grey" text-color="white" icon="arrow_back" />
                    </q-card-section>
                </q-card>
            </div>
            <div class="card-anim-wrapper" :style="{ animationDelay: `120ms` }">
                <q-card
                    key="data-add"
                    class="card card-hover-animate flex flex-center q-pa-md no-shadow cursor-pointer radius-sm bg-primary text-white"
                    v-ripple
                >
                    <q-card-section class="text-center full-width">
                        <div class="text-body1 text-uppercase">{{ ProfileStore.data?.profile?.firstname }}</div>
                        <div class="text-body1 text-uppercase">{{ ProfileStore.data?.profile?.middlename }}</div>
                        <div class="text-body1 text-uppercase">{{ ProfileStore.data?.profile?.lastname }}</div>
                        <div class="text-body1 text-uppercase">{{ ProfileStore.data?.profile?.suffix }}</div>
                    </q-card-section>
                    <q-card-section class="text-center full-width">
                        <div class="text-caption text-uppercase">{{ ProfileStore.data?.employeeNo }}</div>
                    </q-card-section>
                </q-card>
            </div>

            <div
                v-for="(data, index) in tabs"
                :key="`data-${data.id}`"
                class="card-anim-wrapper"
                :style="{ animationDelay: `${index * 120}ms` }"
            >
                <q-card
                    @click="() => {  }"
                    class="card card-hover-animate flex flex-center q-pa-md no-shadow cursor-pointer radius-sm"
                    >
                    <q-card-section class="text-center full-width">
                        <div class="text-h6 text-grey text-uppercase">{{ data }}</div>
                    </q-card-section>
                </q-card>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, onBeforeMount, watch } from 'vue';
import { api } from 'src/boot/axios';
import { Toast } from 'src/boot/sweetalert'; 

import { useProfileStore } from 'src/stores/profile-store';
const ProfileStore = useProfileStore();

const rows = ref([]);

const meta = ref({});
const page = ref(1);
const limit = ref(10);
const loading = ref(false);

const filter = ref('');

const LoadAll = async () => {
    loading.value = true;
    try {
        const { data } = await api.get(`/employee`, {
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

const tabs = ['profile', 'employment', 'photo', 'education', 'trainings', 'experiences', 'dependents', 'documents', 'id', 'service', 'dtr', 'leaves', 'performance', 'incidents', 'payslip'];

onMounted(() => {
    LoadAll();
});

</script>

<style scoped>
</style>