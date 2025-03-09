<template>
    <div class="flex flex-col items-center justify-center min-h-screen px-4 mt-24">
        <section class="text-center max-w-3xl mx-auto mt-32">

            <BlurReveal :delay="0.2" :duration="0.75" class="p-8">
                <h1 class="text-3xl text-gray-200 font-bold tracking-tighter xl:text-6xl/none sm:text-5xl">Here's my
                </h1>
                <span class="text-pretty text-gray-200 text-xl tracking-tighter xl:text-4xl/none sm:text-3xl">
                    Resumé
                </span>
            </BlurReveal>

            <div class="text-blance flex justify-center space-y-4">
                <h1 class="text-balance text-gray-200 text-center text-lg mb-6 font-bold leading-loose">
                    Reach out to me via my
                    <TextHighlight class="bg-gradient-to-r from-blue-900 to-purple-800">
                        Contact Page.
                    </TextHighlight>
                    Or, feel free to
                    <TextHighlight class="bg-gradient-to-r from-blue-900 to-purple-800">
                        Download or Print
                    </TextHighlight>
                    this Resume`.
                </h1>
            </div>
        </section>

        <section class="flex justify-center items-center w-full my-16">
            <div class="relative group max-w-lg mx-auto w-full">
                <GlowBorder><img :src="MyResume" alt="My Resume" class="w-full h-auto shadow-lg rounded-md">
                </GlowBorder>

                <div
                    class="absolute inset-0 flex items-center justify-center bg-black bg-opacity-75 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button @click="downloadResume" class="bg-white text-black px-4 py-2 rounded-md font-medium mx-2">
                        Download
                    </button>
                    <button @click="printResume" class="bg-white text-black px-4 py-2 rounded-md font-medium mx-2">
                        Print
                    </button>
                </div>
            </div>
        </section>
        <!-- Footer & Resume Link -->
        <div class="relative flex w-full flex-col items-start pb-12 md:pb-6">
            <Footer
                class="mx-20 hidden w-full max-w-2xl pb-6 text-center text-sm text-gray-300 opacity-70 hover:text-white md:block" />
            <router-link to="/contact"
                class="group mx-10 flex max-w-2xl space-x-2 pb-6 text-left text-lg font-medium text-white transition duration-300 hover:text-gray-500 md:mx-20">
                <span>Contact Me</span>
                <span class="relative inline-block h-5 w-5">
                    <div class="animate-bounce-horizontal absolute inset-0">➝</div>
                </span>
            </router-link>
        </div>
    </div>
</template>

<script setup>
import MyResume from '../images/my-resume.png'
import GlowBorder from '../components/GlowBorder.vue';
import TextHighlight from '../components/TextHighlight.vue';
import BlurReveal from '../components/BlurReveal.vue';
import Footer from '../components/Footer.vue';

const downloadResume = () => {
    const link = document.createElement('a');
    link.href = MyResume;
    link.download = 'My_Resume.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};

const printResume = () => {
    const newWindow = window.open(MyResume, '_blank');
    if (newWindow) {
        newWindow.print();
    }
};
</script>

<style lang="scss" scoped>
.max-w-lg {
    max-width: 740px;
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
