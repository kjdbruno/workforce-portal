<template>
    <div>
        <q-card class="no-shadow radius-xs">
            <q-card-section>
                <div class="q-gutter-xs">
                    <q-btn
                        v-for="(btn, index) in navs"
                        unelevated
                        :class="RecruitmentStore.component === `${btn.component}` ? 'bg-primary text-white' : 'bg-accent'"
                        @click="RecruitmentStore.component = `${btn.component}`"
                        size="xs"
                        :label="btn.label"
                    />
                </div>
            </q-card-section>
        </q-card>
        <div class="q-mt-md">
            <component :is="components[RecruitmentStore.component]" :key="RecruitmentStore.component" />
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, onBeforeMount } from 'vue';
import { useRecruitmentStore } from 'src/stores/recruitment-store';
import RequisitionComponent from 'src/components/Recruitment/RequisitionComponent.vue';
import ApplicationComponent from 'src/components/Recruitment/ApplicationComponent.vue';

const RecruitmentStore = useRecruitmentStore();

const components = {
    RequisitionComponent,
    ApplicationComponent
};

const navs = [
    { component: 'RequisitionComponent', label: 'vacancy' },
    { component: 'ApplicationComponent', label: 'application' },
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