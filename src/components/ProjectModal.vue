<template>
    <transition name="slide-fade">
        <div v-if="isOpen" class="fixed inset-0 z-50 flex items-center justify-end bg-black bg-opacity-70">
            <!-- Modal Content Wrapper -->
            <div ref="modalRef"
                class="relative h-full w-full max-w-lg transform bg-gray-900 text-gray-300 transition-transform duration-500">
                <!-- Close Button -->
                <button @click="closeModal" class="absolute right-4 top-4 text-gray-400 text-2xl hover:text-white z-20">
                    ✕
                </button>
                <!-- Lamp Effect (Fixed at the top) -->
                <LampEffect class="absolute top-14 w-full h-full z-10 overflow-y-auto">
                    <div class="p-6 mb-10 relative z-20">

                        <!-- Project Content -->
                        <h2 class="text-3xl font-bold mt-6">{{ project.name }}</h2>
                        <p class="text-gray-400 mt-2">{{ project.description }}</p>

                        <!-- Video Preview -->
                        <div class="relative mt-4" v-if="isOpen">
                            <GlowBorder>
                                <iframe
                                    :src="`${project.video}?autoplay=1&loop=1&muted=1&background=1&controls=0&title=0&byline=0&portrait=0`"
                                    class="w-full h-full rounded-lg object-cover transition-opacity duration-300"
                                    frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen
                                    style="aspect-ratio: 16/9; pointer-events: none;"></iframe>
                            </GlowBorder>
                        </div>

                        <!-- Extended Description -->
                        <div class=" mt-4">
                            <p class="text-gray-300">{{ project.extendedDescription }}</p>
                        </div>

                        <!-- Technologies Section -->
                        <div class="mt-6">
                            <h3 class="text-lg font-semibold">Technologies</h3>
                            <div class="mt-2 flex flex-wrap gap-2">
                                <span v-for="tech in project.technologies" :key="tech"
                                    class="px-3 py-1 text-sm font-medium bg-gray-800 rounded-lg text-white">
                                    {{ tech }}
                                </span>
                            </div>
                        </div>

                        <!-- Website Link -->
                        <div class="mt-6">
                            <div class="flex gap-2 pb-2">
                                <h3 class="text-lg font-semibold">Website</h3>
                                <font-awesome-icon :icon="['fas', 'globe']" class="text-2xl" />
                            </div>
                            <a :href="project.liveLink" target="_blank" rel="noopener noreferrer"
                                class="text-gray-200 hover:underline">
                                {{ project.liveLink }}
                            </a>
                        </div>

                        <!-- GitHub Link -->
                        <div class="mt-4">
                            <div class="flex gap-2 pb-2">
                                <h3 class="text-lg font-semibold">GitHub</h3>
                                <font-awesome-icon :icon="['fab', 'github']" class="text-2xl" />
                            </div>
                            <a :href="project.repoLink" target="_blank" rel="noopener noreferrer"
                                class="text-gray-200 hover:underline">
                                {{ project.repoLink }}
                            </a>
                        </div>
                    </div>
                </LampEffect>
            </div>
        </div>
    </transition>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import LampEffect from '../components/LampEffect.vue';
import GlowBorder from './GlowBorder.vue';

const props = defineProps({
    project: Object,
    isOpen: Boolean,
});

const emit = defineEmits(['close']);

const modalRef = ref(null);

const closeModal = () => {
    emit('close');
};

const handleClickOutside = (event) => {
    if (modalRef.value && !modalRef.value.contains(event.target)) {
        emit('close');
    }
};


onMounted(() => {
    document.addEventListener('mousedown', handleClickOutside);
});

onUnmounted(() => {
    document.removeEventListener('mousedown', handleClickOutside);
});
</script>

<style scoped>
.slide-fade-enter-active,
.slide-fade-leave-active {
    transition: transform 0.4s ease-out, opacity 0.3s ease-out;
}

.slide-fade-enter-from {
    transform: translateX(100%);
    opacity: 0;
}

.slide-fade-enter-to {
    transform: translateX(0);
    opacity: 1;
}

.slide-fade-leave-from {
    transform: translateX(0);
    opacity: 1;
}

.slide-fade-leave-to {
    transform: translateX(100%);
    opacity: 0;
}
</style>
