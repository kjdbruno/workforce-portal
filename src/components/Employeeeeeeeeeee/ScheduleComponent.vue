<template>
    <div>
        <div class="row q-col-gutter-xs q-mb-md">
            <div class="col-2">
                <div class="q-mb-xs">
                    <span class="text-caption text-uppercase text-grey q-mr-sm">select schedule</span>
                    <q-icon
                        :name="Errors.shiftId.type ? 'error' : 'info'"
                        :color="Errors.shiftId.type ? 'negative' : 'grey'"
                        class="cursor-pointer"
                        size="xs"
                    >
                        <q-tooltip anchor="top middle" self="center middle" :class="Errors.shiftId.type ? 'bg-negative' : 'bg-grey'">
                            <template v-if="Errors.shiftId.type">
                                <div 
                                    v-for="(msg, i) in Errors.shiftId.messages" 
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
                    v-model="shiftId"
                    emit-value
                    map-options
                    use-input
                    input-debounce="300"
                    :options="filteredSchedules"
                    @filter="filterScheduleFn"
                    :error="Errors.shiftId.type"
                    dropdown-icon="keyboard_arrow_down"
                    :no-error-icon="true"
                >
                    <template v-slot:no-option>
                        <q-item>
                            <q-item-section class="text-italic text-grey">
                            No options
                            </q-item-section>
                        </q-item>
                    </template>
                </q-select>
            </div>
        </div>
    </div>
</template>

<script setup>
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

import moment from 'moment';

import { useAuthStore } from 'src/stores/auth-store';

import { useEmployeeStore } from 'src/stores/employee-store';

const EmployeeStore = useEmployeeStore();

const AuthStore = useAuthStore();

const shiftId = ref('');

const Errors = reactive({
    shiftId: { type: null, messages: [] },
});

const Validations = () => {

    let isError = false;

    Object.keys(Errors).forEach(key => {
        Errors[key].type = null;
        Errors[key].messages = [];
    });

    if (!shiftId.value) {
        Errors.shiftId.type = true;
        Errors.shiftId.messages.push('schedule shift is required');
        isError = true;
    } else {
        Errors.shiftId.type = null;
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

const schedules = ref([]);

const filteredSchedules = ref([]);

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

const filterScheduleFn = createFilterFn(schedules, filteredSchedules);

const LoadRecruitmentSchedules = async () => {
    try {
        const response = await api.get(`/option/recruitmentschedules`);
        schedules.value = response.data;
    } catch (error) {
        console.error("Error fetching options:", error);
    }
};

const LoadEmployment = async () => {
    EmployeeStore.loading = true;
    try {
        const response = await api.get(`/employee/schedule/${EmployeeStore.employment.profileId}`);
        
        const profile = response.data.data;

        filteredSchedules.value = [...schedules.value];
        shiftId.value = schedules.value.find(v => String(v.value) === String(profile.shiftId))?.value || null;

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
        EmployeeStore.loading = false;
    }
}

onMounted(() => {
    LoadEmployment();
});

onBeforeMount(() => {
    LoadRecruitmentSchedules();
});
</script>