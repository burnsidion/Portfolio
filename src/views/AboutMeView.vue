<template>
    <transition name="fade" appear>
        <div class="min-h-screen bg-[#1d1e22] text-[#fff1e7] mt-20">
            <h2 class="text-3xl font-semibold mb-5 text-center">About Me</h2>
            <div class="min-h-[100px]">
                <p class="text-lg text-gray-400 text-center max-w-3xl mx-auto animate-typing">
                    {{ displayedText }}<span v-if="showCursor" class="cursor">|</span>
                </p>
            </div>
            <!-- photos -->
            <div class="flex justify-center gap-6 my-6 overflow-y-scroll">
                <img :src="Aries" alt="Aries"
                    class="w-70 h-70 object-cover rounded-full border-4 border-gray-700 shadow-lg" />
                <img :src="Ibby" alt="Ibby"
                    class="w-70 h-70 object-cover rounded-full border-4 border-gray-700 shadow-lg" />
                <img :src="Vader" alt="Vader"
                    class="w-70 h-70 object-cover rounded-full border-4 border-gray-700 shadow-lg" />
            </div>
            <!-- music links -->
            <div class="mt-6 text-center">
                <h3 class="text-xl font-semibold mb-2">Check out some material!:</h3>
                <div class="min-h-[100px]">
                    <p class="text-lg text-gray-400 text-center max-w-3xl mx-auto">
                        {{ displayedMusicText }}<span v-if="showMusicCursor" class="cursor">|</span>
                    </p>
                </div>
                <div class="flex flex-col md:flex-row justify-center gap-6 my-6">
                    <!-- YouTube Video Embed -->
                    <div class="relative w-full max-w-2xl">
                        <iframe class="w-full h-[315px] rounded-lg shadow-[0px_4px_10px_rgba(255,255,255,0.2)]"
                            src="https://www.youtube.com/embed/ATFxLFDcv5g" title="YouTube video player" frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen>
                        </iframe>
                    </div>
                    <!-- Local Video -->
                    <div class="relative w-full max-w-2xl">
                        <video class="w-full h-[315px] rounded-lg shadow-[0px_4px_10px_rgba(255,255,255,0.2)]" controls>
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
import { ref, onMounted } from "vue";
import Aries from "../images/Aries.png";
import Ibby from "../images/Ibby.png";
import Vader from "../images/Vader.png";
import OnlyAshSolo from "../assets/videos/OnlyAshSolo.mp4"


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
};

onMounted(() => {
    typeText(fullText, displayedText, showCursor);
    typeText(musicText, displayedMusicText, showMusicCursor);
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