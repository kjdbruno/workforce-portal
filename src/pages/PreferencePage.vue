<template>
    <div>
        <q-card class="no-shadow radius-xs">
            <q-card-section>
                <div class="q-gutter-xs">
                    <q-btn
                        v-for="(btn, index) in navs"
                        unelevated
                        :class="PreferenceStore.component === `${btn.component}` ? 'bg-primary text-white' : 'bg-accent'"
                        @click="PreferenceStore.component = `${btn.component}`"
                        size="xs"
                        :label="btn.label"
                    />
                </div>
            </q-card-section>
        </q-card>
        <div class="q-mt-md">
            <component :is="components[PreferenceStore.component]" :key="PreferenceStore.component" />
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, onBeforeMount } from 'vue';
import { usePreferenceStore } from '../stores/preference-store';

import UserComponent from 'src/components/Preferences/UserComponent.vue';
import HolidayComponent from 'src/components/Preferences/HolidayComponent.vue';
import SchoolComponent from 'src/components/Preferences/SchoolComponent.vue';
import DegreeComponent from 'src/components/Preferences/DegreeComponent.vue';
import IncidentClassComponent from 'src/components/Preferences/IncidentClassComponent.vue';
import IncidentRoleComponent from 'src/components/Preferences/IncidentRoleComponent.vue';
import DepartmentComponent from 'src/components/Preferences/DepartmentComponent.vue';
import CompanyComponent from 'src/components/Preferences/CompanyComponent.vue';
import PositionComponent from 'src/components/Preferences/PositionComponent.vue';
import ScheduleComponent from 'src/components/Preferences/ScheduleComponent.vue';
import LeaveComponent from 'src/components/Preferences/LeaveComponent.vue';
import SignatoryComponent from 'src/components/Preferences/SignatoryComponent.vue';
import PayrollGroupComponent from 'src/components/Preferences/PayrollGroupComponent.vue';


const PreferenceStore = usePreferenceStore();

const components = {
    UserComponent,
    HolidayComponent,
    SchoolComponent,
    DegreeComponent,
    IncidentClassComponent,
    IncidentRoleComponent,
    DepartmentComponent,
    CompanyComponent,
    PositionComponent,
    ScheduleComponent,
    LeaveComponent,
    SignatoryComponent,
    PayrollGroupComponent
};

const navs = [
    // { component: 'UserComponent', label: 'User' },
    { component: 'HolidayComponent', label: 'Holiday' },
    { component: 'SchoolComponent', label: 'School' },
    { component: 'DegreeComponent', label: 'Degree' },
    { component: 'IncidentClassComponent', label: 'Incident class' },
    { component: 'IncidentRoleComponent', label: 'incident role' },
    { component: 'DepartmentComponent', label: 'department' },
    { component: 'CompanyComponent', label: 'company' },
    { component: 'PositionComponent', label: 'position' },
    { component: 'ScheduleComponent', label: 'schedule' },
    { component: 'LeaveComponent', label: 'leave' },
    { component: 'SignatoryComponent', label: 'signatory' },
    { component: 'PayrollGroupComponent', label: 'payroll group' },
]

</script>

<style scoped>
.tabs-container {
    display: flex;
    flex-wrap: wrap;
    gap: .2rem;
}

.tab-wrapper {
    position: relative;
}

.tab {
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: all 0.3s ease;
}

.tab.active {
    background: #FA6724;
    color: white;
    border-color: #FA6724;
    box-shadow: 0 4px 12px rgba(33, 150, 243, 0.25);
}

.arrow {
  font-size: 0.7rem;
  margin-left: 0.5rem;
}

.dropdown {
    position: absolute;
    top: 110%;
    left: 0;
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    overflow: hidden;
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
    background: white;
    min-width: 140px;
    z-index: 10;
    padding: 10px;
}

.sub-tab {
    font-weight: 500;
    transition: all 0.2s ease;
}

.sub-tab.active {
    background: #FA6724;
    color: white;
}

/* Dropdown animation */
.fade-enter-active, .fade-leave-active {
    transition: opacity 0.25s ease, transform 0.25s ease;
}
.fade-enter-from, .fade-leave-to {
    opacity: 0;
    transform: translateY(-10px);
}
.fade-enter-to, .fade-leave-from {
    opacity: 1;
    transform: translateY(0);
}

.content {
    font-size: 1rem;
    color: #333;
}
</style>