<template>
    <component :is="currentComponent" />
</template>

<script setup>
import { computed, onBeforeMount } from 'vue';
import { useProfileStore } from 'src/stores/profile-store';

import EmployeeListComponent from './EmployeeListComponent.vue';
import EmployeeComponent from './EmployeeComponent.vue';

const ProfileStore = useProfileStore();

const componentsMap = {
    EmployeeListComponent,
    EmployeeComponent
};

const currentComponent = computed(() => {
    return componentsMap[ProfileStore.subcomponent] || EmployeeListComponent;
});

onBeforeMount(() => {
    ProfileStore.subcomponent = 'EmployeeListComponent';
});
</script>

<style scoped>

</style>