<template>
    <div class="w-full items-center justify-center px-4 pt-52 text-white">
        <h2 class="text-4xl font-bold mb-6 text-center">About Me</h2>
        <TracingBeam class="px-6">
            <div class="relative mx-auto max-w-2xl pt-4 antialiased px-5">

                <div v-for="(job, index) in professionalExperience" :key="`job-${index}`" class="mb-10">
                    <span class="inline-block bg-black text-white text-sm px-4 py-1 rounded-full">
                        {{ job.badge }}
                    </span>

                    <p class="my-4 text-lg font-bold">
                        {{ job.title }}
                    </p>

                    <div class="text-sm text-gray-300 leading-relaxed break-words">
                        <p v-for="(desc, idx) in job.description" :key="`desc-${idx}`">
                            {{ desc }}
                        </p>
                    </div>
                </div>

                <div>
                    <span class="inline-block bg-black text-white text-sm px-4 py-1 rounded-full">
                        Personal
                    </span>
                    <p class="my-4 text-lg font-bold">
                        A Passion for Code & Community
                    </p>
                    <p class="text-sm text-gray-300 max-w-prose leading-relaxed">
                        {{ fullText }}
                    </p>
                    <a href="https://github.com/burnsidion" target="_blank"
                        class="opacity-70 hover:opacity-100 transition-transform hover:scale-110">
                        <font-awesome-icon :icon="['fab', 'github']" class="text-2xl pt-3" />
                    </a>
                </div>


                <PhotoGallery v-if="windowWidth >= 768" :items="items" />

                <div v-for="(musicEvent, index) in musicTimeline" :key="`music-${index}`" class="py-10">
                    <span class="inline-block bg-black text-white text-sm px-4 py-1 rounded-full">
                        {{ musicEvent.badge }}
                    </span>

                    <p class="my-4 text-lg font-bold">
                        {{ musicEvent.title }}
                    </p>

                    <p v-for="(desc, idx) in musicEvent.description" :key="`desc-${idx}`" class="pb-3">
                        {{ desc }}
                    </p>

                    <div v-if="musicEvent.video.includes('youtube.com')" class="relative w-full md:w-3/4 max-w-2xl">
                        <GlowBorder>
                            <iframe class="w-full h-[250px] md:h-[315px] rounded-lg" :src="musicEvent.video"
                                title="YouTube video player" frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen>
                            </iframe>
                        </GlowBorder>
                    </div>

                    <GlowBorder v-else class="w-full md:w-3/4 max-w-2xl">
                        <video controls class="w-full rounded-lg border-2 border-gray-600">
                            <source :src="musicEvent.video" type="video/mp4" />
                        </video>
                    </GlowBorder>


                </div>
                <div class="flex flex-col items-start relative mb-20 md:mb-10 pb-16 md:pb-6 w-full">
                    <router-link to="/projects"
                        class="text-lg font-medium text-left hover:text-gray-400 transition duration-300 flex space-x-2 group">
                        <span>Check out my projects</span>
                        <span class="inline-block w-5 h-5 relative">
                            <div class="absolute inset-0 animate-bounce-horizontal">➝</div>
                        </span>
                    </router-link>
                    <Footer
                        class="hidden md:block w-full max-w-2xl mx-auto pt-6 pb-6 text-center text-gray-400 opacity-70 text-sm" />
                </div>
            </div>
        </TracingBeam>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import TracingBeam from "../components/TracingBeam.vue";
import GlowBorder from "../components/GlowBorder.vue";
import PhotoGallery from "../components/PhotoGallery.vue";
import OnlyAshSolo from "../assets/videos/OnlyAshSolo.mp4";

import Aries from "../images/Aries.png";
import Ibby from "../images/Ibby.png";
import Vader from "../images/Vader.png";
import Intense from "../images/intense.png";
import Show from "../images/show.png";
import Trailside from "../images/trailside.png";
import Shadows from "../images/shadows.png";
import Band from "../images/band.png";

import Footer from "../components/Footer.vue";

const professionalExperience = ref([
    {
        title: "Software Engineer, RealTruck",
        badge: "RealTruck",
        description: [
            "Migrated components to Vue 3 Composition API, enhancing maintainability and performance.",
            "Developed responsive UI components with Tailwind CSS, improving mobile usability by 20%.",
            "Created technical documentation to streamline onboarding and coding standards.",
            "Rebuilt cart component to render a better organized layout, using CSS Grid"
        ]
    },
    {
        title: "Associate Software Engineer, S&P Global",
        badge: "S&P Global",
        description: [
            "Developed reusable Vue.js components for a RBC's online trading platform with 10M daily users.",
            "Led WCAG accessibility initiatives, improving usability for screen readers.",
            "Authored internal guides and tutorials for Vue 3 adoption."
        ]
    },
    {
        title: "My Education",
        badge: "Education",
        description: [
            "Galvanize | Full-Stack Web Development (2018)",
            "University of Colorado, Boulder | B.A. in Humanities (2012)"
        ]
    }
]);

const items = [
    {
        src: Aries
    },
    {
        src: Vader
    },
    {
        src: Ibby
    },
    {
        src: Intense
    },
    {
        src: Show
    },
    {
        src: Trailside
    },
    {
        src: Shadows
    },
    {
        src: Band
    }
]

const fullText = ref(
    "I have a deep passion for coding, music, and software engineering. Before diving into web development, I spent years playing guitar in bands and recording my own music..."
);

const showCursor = ref(true);

const musicTimeline = ref([
    {
        title: "Apotheon - 'Mechanically Consumed'",
        badge: "Band",
        video: "https://www.youtube.com/embed/ATFxLFDcv5g",
        description: [
            "Music video for my last band, Apotheon."
        ]
    },
    {
        title: "Cover: 'Only Ash Remains' - Necrophagist",
        badge: "Music",
        video: OnlyAshSolo,
        description: [
            "A technical death metal cover of one of my favorite songs."
        ]
    }
]);

const windowWidth = ref(window.innerWidth);

const updateWidth = () => {
    windowWidth.value = window.innerWidth;
};

onMounted(() => {
    window.addEventListener("resize", updateWidth);
});

onUnmounted(() => {
    window.removeEventListener("resize", updateWidth);
});

</script>

<style scoped>
.cursor {
    animation: blink 1s infinite;
}

@keyframes blink {
    50% {
        opacity: 0;
    }
}

@keyframes bounce-horizontal {
    0% {
        transform: translateX(0);
    }

    50% {
        transform: translateX(6px);
    }

    100% {
        transform: translateX(0);
    }
}

.animate-bounce-horizontal {
    display: inline-block;
    animation: bounce-horizontal 1s infinite ease-in-out;
}
</style>
