<template>
    <transition name="fade" appear>
        <div class="min-h-screen bg-[#1d1e22] text-[#fff1e7] mt-20 px-4">
            <!-- About Me Header -->
            <h2 class="text-4xl font-bold mb-6 text-center">About Me</h2>

            <!-- Typewriter Bio -->
            <div class="min-h-[100px]">
                <p class="text-xl text-gray-300 text-center max-w-3xl mx-auto animate-typing leading-relaxed">
                    {{ displayedText }}<span v-if="showCursor" class="cursor">|</span>
                </p>
            </div>

            <!-- Photos Section -->
            <div class="flex flex-wrap justify-center gap-6 my-10">
                <img :src="Aries" alt="Aries"
                    class="w-40 h-40 object-cover rounded-full border-4 border-gray-700 shadow-lg" />
                <img :src="Ibby" alt="Ibby"
                    class="w-40 h-40 object-cover rounded-full border-4 border-gray-700 shadow-lg" />
                <img :src="Vader" alt="Vader"
                    class="w-40 h-40 object-cover rounded-full border-4 border-gray-700 shadow-lg" />
            </div>

            <!-- Music Section -->
            <div class="mt-10 text-center">
                <h3 class="text-2xl font-semibold mb-4">Check out some material!:</h3>

                <!-- Typewriter Music Description -->
                <div class="min-h-[100px]">
                    <p class="text-lg text-gray-300 text-center max-w-3xl mx-auto leading-relaxed">
                        {{ displayedMusicText }}<span v-if="showMusicCursor" class="cursor">|</span>
                    </p>
                </div>

                <!-- Video Section -->
                <div class="flex flex-col md:flex-row justify-center gap-6 my-8">
                    <!-- YouTube Video Embed -->
                    <div
                        class="relative w-full md:w-1/2 max-w-2xl border-2 border-gray-600 rounded-lg shadow-[0px_4px_20px_rgba(255,255,255,0.3)]">
                        <iframe class="w-full h-[250px] md:h-[315px] rounded-lg"
                            src="https://www.youtube.com/embed/ATFxLFDcv5g" title="YouTube video player" frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen>
                        </iframe>
                    </div>

                    <!-- Local Video -->
                    <div
                        class="relative w-full md:w-1/2 max-w-2xl border-2 border-gray-600 rounded-lg shadow-[0px_4px_20px_rgba(255,255,255,0.3)]">
                        <video class="w-full h-[250px] md:h-[315px] rounded-lg" controls>
                            <source :src="OnlyAshSolo" type="video/mp4">
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import Aries from "../images/Aries.png";
import Ibby from "../images/Ibby.png";
import Vader from "../images/Vader.png";
import OnlyAshSolo from "../assets/videos/OnlyAshSolo.mp4";

const fullText = ref(
    "I have a deep passion for coding, music, and software engineering. Before diving into web development, I spent years playing guitar in bands and recording my own music..."
);

const musicText = ref(
    "You can find a music video for my last band 'Apotheon' below, as well as a cover of one of my favorite songs, 'Only Ash Remains' by Necrophagist."
);

const displayedText = ref("");
const showCursor = ref(true);

const displayedMusicText = ref("");
const showMusicCursor = ref(true);

const intervals = [];

const typeText = (textRef, displayedRef, cursorRef) => {
    let index = 0;
    const interval = setInterval(() => {
        if (index < textRef.value.length) {
            displayedRef.value += textRef.value[index];
            index++;
        } else {
            clearInterval(interval);
            cursorRef.value = false;
        }
    }, 40);

    intervals.push(interval);
};

onMounted(() => {
    typeText(fullText, displayedText, showCursor);
    typeText(musicText, displayedMusicText, showMusicCursor);
});

onUnmounted(() => {
    intervals.forEach(clearInterval);
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