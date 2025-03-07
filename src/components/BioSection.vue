<template>
    <transition name="fade" appear>
        <section class="text-center pt-16 w-full flex flex-col items-center mx-auto">
            <div class="text-5xl w-full font-bold mb-1 font-poppins text-white pb-14 md:pb-0 pt-40">
                <h1 class="font-poppins pb-2">Ian Burnside</h1>
                <MorphingText :texts="texts" />
            </div>
            <img :src="ProfilePic" alt="Ian Burnside"
                class="w-40 h-40 object-cover rounded-full mx-auto mb-4 border-4 border-gray-700 shadow-lg" />

            <transition name="pop-up">
                <div v-if="showIconCloudMobile" class="lg:hidden mt-4 w-full flex justify-center relative z-10">
                    <IconCloud :images="imageUrls" class="w-40 h-40 bg-transparent" />
                </div>
            </transition>

            <div class="relative w-full max-w-2xl mt-10 min-h-[250px] text-center md:text-left pb-3">
                <p class="text-lg text-gray-400 whitespace-pre-wrap bio-text">
                    {{ displayedText }}<span v-if="showCursor" class="cursor">|</span>
                </p>

                <transition name="fade">
                    <Footer v-if="showFooter" />
                </transition>
            </div>
        </section>
    </transition>
</template>

<script setup>
import { ref, onMounted } from "vue";
import ProfilePic from "../images/profile-pic.jpg";
import MorphingText from "./MorphingText.vue";
import Footer from "./Footer.vue";
import IconCloud from "./IconCloud.vue";

const emit = defineEmits(["typewriter-finished"]);

const fullText = ref(
    "Frontend-focused full-stack software engineer specializing in Vue.js, React, and modern web technologies. Passionate about building sleek, intuitive user interfaces with clean and maintainable codebases."
);
const displayedText = ref("");
const showCursor = ref(true);
const showFooter = ref(false);
const showIconCloudMobile = ref(false);

const texts = [
    "Software Engineer",
    "Frontend",
    "Backend",
    "Musician"
];

const imageUrls = [
    "typescript",
    "javascript",
    "vuedotjs",
    "react",
    "html5",
    "css3",
    "nodedotjs",
    "express",
    "postgresql",
    "testinglibrary",
    "jest",
    "docker",
    "git",
    "jira",
    "github",
    "sonarqube",
    "figma",
    "dotenv",
    "axios",
    "bandcamp",
    "bitbucket"
].map(slug => `https://cdn.simpleicons.org/${slug}/${slug}`);

const typeText = () => {
    let index = 0;
    const interval = setInterval(() => {
        if (index < fullText.value.length) {
            displayedText.value += fullText.value[index];
            index++;
        } else {
            clearInterval(interval);
            showCursor.value = false;
            showFooter.value = true;
            showIconCloudMobile.value = true;
            emit("typewriter-finished");
        }
    }, 40);
};

onMounted(() => typeText());
</script>

<style scoped>
.pop-up-enter-active {
    transition: opacity 1.2s ease-out, transform 1.2s cubic-bezier(0.22, 1, 0.36, 1);
    will-change: transform, opacity;
}

.pop-up-enter-from {
    opacity: 0;
    transform: translateY(-100vh);
    filter: blur(5px);
}

.pop-up-enter-to {
    opacity: 1;
    transform: translateY(0);
    filter: blur(0px);
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