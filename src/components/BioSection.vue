<template>
    <section class="text-center pt-16">
        <div class="text-5xl font-bold mb-10 font-poppins">
            <h1 class="font-poppins">Ian Burnside</h1>
            <h1>Software Engineer</h1>
        </div>
        <img :src="ProfilePic" alt="Ian Burnside"
            class="w-32 h-32 object-cover rounded-full mx-auto mb-4 border-4 border-gray-700 shadow-lg" />
        <div class="relative w-full max-w-2xl mt-10 min-h-[250px]">
            <p class="text-lg text-gray-400 whitespace-pre-wrap text-center bio-text">
                {{ displayedText }}<span v-if="showCursor" class="cursor">|</span>
            </p>
        </div>
    </section>
</template>

<script setup>
import { ref, onMounted } from "vue";
import ProfilePic from "../images/profile-pic.jpg";

const fullText = ref(
    "I'm a frontend-focused full-stack software engineer specializing in Vue.js, React, and modern web technologies. Passionate about building sleek, intuitive user interfaces with a clean and maintainable codebase. I love to learn and share my knowledge with others in a supportive and encouraging manner. Below, you can view some recent personal projects that I have built. With more to come!"
);
const displayedText = ref("");
const showCursor = ref(true);

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