<template>
    <div>
        <div class="q-my-md">
            <div class="filter-inline q-mb-md">
                <q-input
                    outlined
                    v-model="year"
                    style="width: 80px"
                    dense
                />
                <div class="q-gutter-xs">
                    <q-btn
                        v-for="(m, index) in months"
                        round
                        unelevated
                        :class="month === m.value ? 'active' : 'inactive'"
                        @click="() => { month = m.value; GetDailyLogs(DTRStore.employee?.id); }"
                        size="md"
                        :label="m.label"
                    />
                </div>
            </div>
        </div>
        <div class="row q-col-gutter-xs">
            <div class="col-1">
                <div class="q-mb-xs">
                    <span class="text-caption text-uppercase text-grey q-mr-sm">date</span>
                </div>
            </div>
            <div class="col-1">
                <div class="q-mb-xs">
                    <span class="text-caption text-uppercase text-grey q-mr-sm">day</span>
                </div>
            </div>
            <div class="col-1">
                <div class="q-mb-xs">
                    <span class="text-caption text-uppercase text-grey q-mr-sm">records</span>
                </div>
            </div>
        </div>
        <div class="q-mb-xl scroll" style="height: 250px;">
            <div class="row q-col-gutter-xs q-mb-xs" v-for="(data, index) in logs">
                <div class="col-1">
                    <q-input outlined dense :model-value="FormatLogDate(data.date)" />
                </div>
                <div class="col-1">
                    <q-input outlined dense :model-value="FormatLogDay(data.date)" />
                </div>
                <div class="col-10">
                    <div class="row items-center q-gutter-xs">
                        <q-input v-for="(time, index) in data.times" outlined dense v-model="data.times[index]" style="width: 100px;" :readonly="true"/>
                        <q-badge v-if="data.leaveType" rounded color="primary" :label="data.leaveType" class="text-uppercase"/>
                        <q-badge v-if="data.holiday" rounded color="primary" :label="data.holiday" class="text-uppercase"/>
                        <q-badge v-if="data.overtimes" rounded color="primary" :label="data.overtimes" class="text-uppercase"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, onBeforeMount, watch, reactive, computed } from 'vue';
import { api } from 'src/boot/axios';
import moment from 'moment';
import { Toast } from 'src/boot/sweetalert'; 
import { useDTRStore } from 'src/stores/dtr-store';
const DTRStore = useDTRStore();

const today = new Date();
const month = ref(String(today.getMonth() + 1).padStart(2, '0'));
const year = ref(String(today.getFullYear()));

const months = Array.from({ length: 12 }, (_, i) => {
    const monthName = new Date(0, i).toLocaleString("en-US", { month: "short" });
    const monthValue = String(i + 1).padStart(2, "0");
    return { label: monthName, value: monthValue };
});

const logs = ref([]);

const GetDailyLogs = async (id) => {
    DTRStore.SubmitLoading = true;
    try {
        const response = await api.get(`/portal/dtr/logs`, {
            params: { 
                id: id,
                month: month.value,
                year: year.value
            }
        });
        const { data, employee_id } = response.data;
        logs.value = data

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
        DTRStore.SubmitLoading = false;
    }
}

onMounted(() => {
    GetDailyLogs(DTRStore.employee?.id);
});

const FormatLogDate = (date) => {
    if (!date) return ''
    return moment(date).format('DD')
}

const FormatLogDay = (date) => {
    if (!date) return ''
    return moment(date).format('ddd')
}
</script>

<style lang="css" scoped>
.card-menu
{
    width: 150px;
    height: 175px;
}

</style>