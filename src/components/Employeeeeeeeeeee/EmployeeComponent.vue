<template>
    <q-dialog v-model="model" full-height position="right" persistent square class="dialog">
        <q-card class="dialog-card column full-height">
            <q-toolbar class="q-pa-lg">
                <q-toolbar-title>
                    <div class="text-h6 text-uppercase">employee record</div>
                </q-toolbar-title>
            </q-toolbar>
            <q-separator inset />
            <q-card-section class="q-pa-lg">
                <div class="q-gutter-xs">
                    <q-btn
                        v-for="tab in tabs"
                        :key="tab"
                        :label="tab"
                        unelevated
                        color="primary"
                        :outline="activeTab !== tab"
                        @click="activeTab = tab"
                        size="sm"
                    />
                </div>
            </q-card-section>
            <component :is="currentComponent" :key="activeTab" />
        </q-card>
    </q-dialog>
</template>

<script setup>
import { reactive, computed, ref, onMounted, watch } from 'vue';
import { api } from 'src/boot/axios';

import ProfileComponent from './ProfileComponent.vue';
import EmploymentComponent from './EmploymentComponent.vue';
import PhotoComponent from './PhotoComponent.vue';
import EducationComponent from './EducationComponent.vue';
import TrainingsComponent from './TrainingComponent.vue';
import ExperiencesComponent from './ExperienceComponent.vue';
import DependentsComponent from './DependentComponent.vue';
import DocumentsComponent from './DocumentComponent.vue';
import DigitalIdComponent from './IDComponent.vue';
import ServiceRecordComponent from './ServiceRecordComponent.vue';
import DTRComponent from './DailyTimeRecordComponent.vue';
import LeavesComponent from './LeavesComponent.vue';
// import PerformanceComponent from './PerformanceComponent.vue';
// import IncidentsComponent from './IncidentsComponent.vue';
// import PaySlipsComponent from './PaySlipsComponent.vue';

const props = defineProps({
    modelValue: { type: Boolean, default: false }
});

const emit = defineEmits(['update:modelValue', 'saved']);

const model = computed({
    get: () => props.modelValue,
    set: (v) => emit('update:modelValue', v)
});

const tabs = ['profile', 'employment', 'photo', 'education', 'trainings', 'experiences', 'dependents', 'documents', 'id', 'service', 'dtr', 'leaves', 'performance', 'incidents', 'payslip'];
const activeTab = ref('profile');

const componentsMap = {
    profile: ProfileComponent,
    employment: EmploymentComponent,
    photo: PhotoComponent,
    education: EducationComponent,
    trainings: TrainingsComponent,
    experiences: ExperiencesComponent,
    dependents: DependentsComponent,
    documents: DocumentsComponent,
    id: DigitalIdComponent,
    service: ServiceRecordComponent,
    dtr: DTRComponent,
    leaves: LeavesComponent,
    // performance: PerformanceComponent,
    // incidents: IncidentsComponent,
    // payslip: PaySlipsComponent
};

const currentComponent = computed(() => componentsMap[activeTab.value]);

</script>
