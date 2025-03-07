<template>
    <div class="w-full items-center justify-center px-8 pt-52 text-white">
        <TracingBeam class="px-6">
            <div class="relative mx-auto max-w-2xl pt-4 antialiased">
                <div v-for="(item, index) in dummyContent" :key="`content-${index}`" class="mb-10">
                    <span class="inline-block bg-black text-white text-sm px-4 py-1 rounded-full">
                        {{ item.badge }}
                    </span>

                    <p :class="['mb-4 text-xl']">
                        {{ item.title }}
                    </p>

                    <div class="prose prose-sm dark:prose-invert text-sm">
                        <img v-if="item.image" :src="item.image" alt="blog thumbnail"
                            class="mb-10 rounded-lg object-cover" />
                        <div>
                            <p v-for="(paragraph, idx) in item.description" :key="`desc-${idx}`">
                                {{ paragraph }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </TracingBeam>
    </div>
</template>

<script setup>
    import { ref, onMounted, onUnmounted } from "vue";
    import Aries from "../images/Aries.png";
    import Ibby from "../images/Ibby.png";
    import Vader from "../images/Vader.png";
    import OnlyAshSolo from "../assets/videos/OnlyAshSolo.mp4";
    import TracingBeam from "../components/TracingBeam.vue";


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

    const dummyContent = [
        {
            title: "Lorem Ipsum Dolor Sit Amet",
            description: [
                "The power of first impressions cannot be underestimated, and the gateway to capitalizing on them lies in exceptional website design. An outstanding website transcends mere aesthetics and extends its influence to encompass seamless functionality and user-friendly navigation. Drawing upon my expertise as a seasoned programmer, I possess the unique ability to tackle intricate technical challenges while crafting websites that exude sleekness and visual allure. Moreover, my extensive knowledge of recognized technical standards is complemented by my proficiency in modern building practices, ensuring that every aspect of your website is finely tuned to perfection."
            ],
            badge: "Vue",
        },
        {
            title: "Lorem Ipsum Dolor Sit Amet",
            description: [
                "Ex irure dolore veniam ex velit non aute nisi labore ipsum occaecat deserunt cupidatat aute. Enim cillum dolor et nulla sunt exercitation non voluptate qui aliquip esse tempor. Ullamco ut sunt consectetur sint qui qui do do qui do. Labore laborum culpa magna reprehenderit ea velit id esse adipisicing deserunt amet dolore. Ipsum occaecat veniam commodo proident aliqua id ad deserunt dolor aliquip duis veniam sunt.",
                "In dolore veniam excepteur eu est et sunt velit. Ipsum sint esse veniam fugiat esse qui sint ad sunt reprehenderit do qui proident reprehenderit. Laborum exercitation aliqua reprehenderit ea sint cillum ut mollit.",
            ],
            badge: "Nuxt",
            image:
                "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&q=80&w=3540&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            title: "Lorem Ipsum Dolor Sit Amet",
            description: [
                "Ex irure dolore veniam ex velit non aute nisi labore ipsum occaecat deserunt cupidatat aute. Enim cillum dolor et nulla sunt exercitation non voluptate qui aliquip esse tempor. Ullamco ut sunt consectetur sint qui qui do do qui do. Labore laborum culpa magna reprehenderit ea velit id esse adipisicing deserunt amet dolore. Ipsum occaecat veniam commodo proident aliqua id ad deserunt dolor aliquip duis veniam sunt.",
            ],
            badge: "Inspira UI",
            image:
                "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80&w=3506&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
    ];

    const typeText = (textRef, displayedRef, cursorRef) =>
    {
        let index = 0;
        const interval = setInterval(() =>
        {
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

    onMounted(() =>
    {
        typeText(fullText, displayedText, showCursor);
        typeText(musicText, displayedMusicText, showMusicCursor);
    });

    onUnmounted(() =>
    {
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