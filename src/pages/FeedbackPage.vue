<template>
    <div>
        <component :is="components[FeedbackStore.component]" :key="FeedbackStore.component" />
    </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import { useFeedbackStore } from '../stores/feedback-store';
import FeedbackComponent from '../components/FeedbackComponent.vue';
import FeedbackOfficeComponent from '../components/FeedbackOfficeComponent.vue';

const FeedbackStore = useFeedbackStore();

const components = {
    FeedbackComponent,
    FeedbackOfficeComponent,
}

</script>