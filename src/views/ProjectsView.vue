<template>
    <div class="min-h-screen bg-[#1d1e22] text-[#fff1e7] p-8">
        <h2 class="text-3xl font-semibold mb-5 text-center">My Personal Projects</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div v-for="app in apps" :key="app.name" class="bg-[#393f4d] p-6 rounded-xl shadow-lg">
                <video :src="app.video" class="rounded-lg mb-4 w-[400px] h-[250px]" autoplay loop muted></video>
                <h3 class="text-2xl font-semibold">{{ app.name }}</h3>
                <p class="text-gray-400 mb-4">{{ app.description }}</p>
                <div class="flex justify-between">
                    <a :href="app.liveLink" target="_blank" class="text-blue-400 underline">Live App</a>
                    <a :href="app.repoLink" target="_blank" class="text-blue-400 underline">GitHub</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import VueAppVideo from "../assets/videos/Vue-Weather-App.mp4";
import ReactAppVideo from "../assets/videos/React-Weather-App.mp4";

const apps = [
    {
        name: "Vue Weather App",
        description: "A weather app built with Vue.js, OpenWeatherMap API, and MapBox API.",
        video: VueAppVideo,
        liveLink: "https://weathering-heights-d1cfbe2e31ee.herokuapp.com/",
        repoLink: "https://github.com/burnsidion/Vue-Weather-App",
    },
    {
        name: "React Weather App",
        description: "A React-based weather app with the same functionality as its Vue counterpart.",
        video: ReactAppVideo,
        liveLink: "https://weathering-heights-react-ee026e20f12a.herokuapp.com/",
        repoLink: "https://github.com/burnsidion/React-Weather-App",
    },
];
</script>