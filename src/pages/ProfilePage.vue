<template>
    <div>
        <q-card class="no-shadow radius-xs">
            <q-card-section>
                <div class="tabs-container" ref="tabsContainer">
                    <div v-for="tab in tabs" :key="tab.name" class="tab-wrapper">
                        <q-btn size="sm" unelevated class="tab" :class="{ active: activeTab === tab.name }" @click="tab.subTabs ? toggleDropdown(tab.name) : selectTab(tab.name)">
                            {{ activeTab === tab.name && activeSubTab ? `${activeSubTab}` : tab.name }}
                        </q-btn>
                        <transition name="fade">
                            <div v-if="tab.subTabs && dropdownOpen === tab.name" class="dropdown">
                                <div class="text-center text-uppercase text-bold">{{ tab.name }}</div>
                                <q-separator class="q-mt-xs q-mb-xs" />
                                <q-btn unelevated size="sm" v-for="sub in tab.subTabs" :key="sub" class="sub-tab q-mb-xs" :class="{ active: activeSubTab === sub }" @click="selectTab(tab.name, sub)">
                                    {{ sub }}
                                </q-btn>
                            </div>
                        </transition>
                    </div>
                </div>
            </q-card-section>
        </q-card>
        <div class="q-mt-md">
            <component :is="components[ProfileStore.component]" :key="ProfileStore.component" />
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, onBeforeMount } from 'vue';
import { useProfileStore } from 'src/stores/profile-store';

import SignatoryComponent from 'src/components/Profile/SignatoryComponent.vue';
import ProfileComponent from 'src/components/Profile/ProfileComponent.vue';

const ProfileStore = useProfileStore();

const components = {
    SignatoryComponent,
    ProfileComponent
};

const tabs = [
    { 
        name: 'Signatory'
    },
    { 
        name: 'Profile'
    }
];

const activeTab = ref('');
const activeSubTab = ref('');
const dropdownOpen = ref(null);
const tabsContainer = ref(null);

function selectTab(tabName, subTab = '') {
    activeTab.value = tabName;
    activeSubTab.value = subTab;
    dropdownOpen.value = null;
    
    const cleanTab = tabName.replace(/\s+/g, '');
    const cleanSub = subTab.replace(/\s+/g, '');
    ProfileStore.component = subTab ? `${cleanTab}${cleanSub}Component` : `${cleanTab}Component`;
}

function toggleDropdown(tabName) {
    dropdownOpen.value = dropdownOpen.value === tabName ? null : tabName;
}

// Close dropdown if click outside
function handleClickOutside(event) {
    if (tabsContainer.value && !tabsContainer.value.contains(event.target)) {
        dropdownOpen.value = null;
    }
}

onBeforeMount(() => {
    if (!ProfileStore.component) {
        // default
        ProfileStore.component = 'SignatoryComponent';
        activeTab.value = 'Signatory';
    } else {
        // restore previous
        const match = ProfileStore.component.match(/([A-Z][a-z]+)/g) || [];

        if (match.length) {
            const tabName = match[0];
            const subTabName = match.slice(1, -1).join(' ');

            activeTab.value = tabName;
            activeSubTab.value = subTabName || '';
        }
    }
})

onMounted(() => {
    document.addEventListener('click', handleClickOutside);
});

onBeforeUnmount(() => {
    document.removeEventListener('click', handleClickOutside);
});
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