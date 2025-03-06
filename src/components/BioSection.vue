<template>
    <transition name="fade" appear>
        <section class="text-center pt-16 w-full flex flex-col items-center mx-auto">
            <div class="text-5xl w-full font-bold mb-1 font-poppins text-white pb-14 md:pb-0 pt-40">
                <h1 class="font-poppins pb-2">Ian Burnside</h1>
                <MorphingText :texts="texts" />
            </div>
            <img :src="ProfilePic" alt="Ian Burnside"
                class="w-40 h-40 object-cover rounded-full mx-auto mb-4 border-4 border-gray-700 shadow-lg" />
            <div class="relative w-full max-w-2xl mt-10 min-h-[250px] text-left">
                <p class="text-lg text-gray-400 whitespace-pre-wrap bio-text">
                    {{ displayedText }}<span v-if="showCursor" class="cursor">|</span>
                </p>
            </div>
        </section>
    </transition>
</template>

<script setup>
import { ref, onMounted } from "vue";
import ProfilePic from "../images/profile-pic.jpg";
import MorphingText from "./MorphingText.vue";

const fullText = ref(
    "I'm a frontend-focused full-stack software engineer specializing in Vue.js, React, and modern web technologies. Passionate about building sleek, intuitive user interfaces with a clean and maintainable codebase. I love to learn and share my knowledge with others in a supportive and encouraging manner. Below, you can view some recent personal projects that I have built. With more to come!"
);
const displayedText = ref("");
const showCursor = ref(true);

const texts = [
    "Software Engineer",
    "Frontend",
    "Backend",
    "Musician"
];

const typeText = () => {
    let index = 0;
    const interval = setInterval(() => {
        if (index < fullText.value.length) {
            displayedText.value += fullText.value[index];
            index++;
        } else {
            clearInterval(interval);
            showCursor.value = false;
        }
    }, 40);
};

onMounted(() => typeText());
</script>

<style scoped>
@media (max-width: 768px) {
    .bio-text {
        min-height: 250px;
        font-size: 1rem;
    }

    h1 {
        font-size: 2rem;
    }
}
</style>