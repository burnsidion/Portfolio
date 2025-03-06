<template>
    <transition name="fade" appear>
        <div class="min-h-screen bg-[#1d1e22] text-[#fff1e7] pt-20">
            <h2 class="text-3xl font-semibold mb-5 text-center">My Personal Projects</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto px-5">
                <template v-if="isLoading">
                    <SkeletonCard v-for="n in apps.length" :key="n" />
                </template>
                <template v-else>
                    <div v-for="(app, index) in apps" :key="app.name"
                        class="bg-[#393f4d] p-6 rounded-xl shadow-lg flex flex-col h-[600px]">
                        <video :src="app.video" class="rounded-lg mb-4 w-full h-[250px]" autoplay loop muted></video>
                        <div class="flex flex-col flex-grow">
                            <h3 class="text-2xl font-semibold">{{ app.name }}</h3>
                            <p class="text-gray-400 my-4 min-h-[100px]">
                                {{ typedDescriptions[index] }}
                                <span v-if="showCursor[index]" class="text-white">|</span>
                            </p>
                            <div class="flex justify-between w-full mt-auto">
                                <a :href="app.liveLink" target="_blank"
                                    class="bg-[#1d1e22] hover:bg-blue-600 py-2 px-4 rounded-lg">
                                    Live App
                                </a>
                                <a :href="app.repoLink" target="_blank"
                                    class="bg-[#1d1e22] hover:bg-blue-600 py-2 px-4 rounded-lg">
                                    GitHub
                                </a>
                            </div>
                        </div>
                    </div>
                </template>
            </div>
        </div>
    </transition>
</template>

<script setup>
import { ref, onMounted } from "vue";

import VueAppVideo from "../assets/videos/Vue-Weather-App.mp4";
import ReactAppVideo from "../assets/videos/React-Weather-App.mp4";
import SkeletonCard from "../components/SkeletonCard.vue";

const isLoading = ref(true);
const apps = [
    {
        name: "Vue Weather App",
        description: "A full stack weather app built with Vue.js and Tailwind on the front end, and express.js on the backend. Uses the OpenWeatherMap API, and MapBox API to allow users to search for, preview, and track cities and their weather.",
        video: VueAppVideo,
        liveLink: "https://weathering-heights-d1cfbe2e31ee.herokuapp.com/",
        repoLink: "https://github.com/burnsidion/Vue-Weather-App",
    },
    {
        name: "React Weather App",
<<<<<<< HEAD
        description: "A React-based weather app with the same functionality as its Vue counterpart.",
=======
        description: "A React-based weather app with the same functionality as its Vue counterpart. Utilizes React's Context API for state management as well.",
>>>>>>> enhancements-continued
        video: ReactAppVideo,
        liveLink: "https://weathering-heights-react-ee026e20f12a.herokuapp.com/",
        repoLink: "https://github.com/burnsidion/React-Weather-App",
    },
];
<<<<<<< HEAD
</script>
=======

const typedDescriptions = ref(Array(apps.length).fill(""));
const showCursor = ref(Array(apps.length).fill(true));

const typeText = (text, index) => {
    let i = 0;
    const speed = 40;

    const interval = setInterval(() => {
        if (i < text.length) {
            typedDescriptions.value[index] += text[i];
            i++;
        } else {
            clearInterval(interval);
            setTimeout(() => (showCursor.value[index] = false), 500);
        }
    }, speed);
};

onMounted(() => {
    setTimeout(() => {
        isLoading.value = false;
        apps.forEach((app, index) => {
            typeText(app.description, index);
        });
    }, 2000);
});
</script>

<style scoped>
.fade-enter-active {
    animation: fadeInScale 1s ease-in-out;
}

@keyframes fadeInScale {
    from {
        opacity: 0;
        transform: scale(0.8);
    }

    to {
        opacity: 1;
        transform: scale(1);
    }
}

.cursor {
    animation: blink 1s infinite;
}

@keyframes blink {
    50% {
        opacity: 0;
    }
}
</style>
>>>>>>> enhancements-continued
