<template>
  <transition name="fade" appear>
    <!-- Ensure full viewport height -->
    <section class="mx-auto flex min-h-screen w-full flex-col items-center pt-16 text-center">
      <div
        class="font-poppins mb-1 w-full pb-14 pt-20 text-5xl font-bold text-white md:pb-0 md:pt-24"
      >
        <h1 class="font-poppins pb-2">Ian Burnside</h1>
        <MorphingText :texts="texts" />
      </div>

      <!-- Container for Profile + Floating Icons -->
      <div class="flex h-[400px] flex-col items-center gap-2">
        <transition name="drop-in">
          <img
            v-if="showProfilePic"
            :src="ProfilePic"
            alt="Ian Burnside"
            class="h-40 w-40 rounded-full border-4 border-gray-700 object-cover shadow-lg"
          />
        </transition>

        <transition name="drop-in-delay">
          <IconCloud v-if="showIconCloud" :images="imageUrls" class="w-56 bg-transparent" />
        </transition>
      </div>

      <!-- Bio + Footer Section -->
      <div class="relative min-h-[250px] w-full max-w-2xl py-2 pb-20 text-center md:text-left">
        <TextGenerator
          class="bio-text whitespace-pre-wrap text-lg text-gray-400"
          :words="fullText"
          @animationComplete="showFooter = true"
        />

        <transition name="slide-fade">
          <div v-if="showFooter" class="hidden pt-5 md:block">
            <router-link
              to="/about"
              class="group flex space-x-2 pb-4 text-left text-lg font-medium text-white transition duration-300 hover:text-gray-400"
            >
              <span>See More About Me</span>
              <span class="relative inline-block h-5 w-5">
                <div class="animate-bounce-horizontal absolute inset-0">➝</div>
              </span>
            </router-link>
            <Footer class="text-black" />
          </div>
        </transition>

        <!-- Mobile version -->
        <transition name="slide-fade">
          <div v-if="showFooter" class="pb-8 pt-5 md:hidden">
            <router-link
              to="/about"
              class="group flex space-x-2 px-5 pb-2 text-left text-lg font-medium text-white transition duration-300 hover:text-gray-400"
            >
              <span>See More About Me</span>
              <span class="relative inline-block h-5 w-5">
                <div class="animate-bounce-horizontal absolute inset-0">➝</div>
              </span>
            </router-link>
          </div>
        </transition>
      </div>
    </section>
  </transition>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import ProfilePic from '../images/profile-pic.jpg';
import MorphingText from './MorphingText.vue';
import Footer from './Footer.vue';
import IconCloud from './IconCloud.vue';
import TextGenerator from './TextGenerator.vue';

const fullText = ref(
  'Frontend-focused full-stack software engineer specializing in Vue.js, React, and modern web technologies. Passionate about building sleek, intuitive user interfaces with clean and maintainable codebases.'
);

const displayedText = ref('');
const showCursor = ref(true);
const showFooter = ref(false);

const showIconCloud = ref(false);
const showProfilePic = ref(false);

const texts = ['Software Engineer', 'Frontend', 'Backend', 'Musician'];

const imageUrls = [
  'typescript',
  'javascript',
  'vuedotjs',
  'react',
  'html5',
  'css3',
  'nodedotjs',
  'express',
  'postgresql',
  'testinglibrary',
  'jest',
  'docker',
  'git',
  'jira',
  'github',
  'sonarqube',
  'figma',
  'dotenv',
  'axios',
  'bandcamp',
  'bitbucket',
].map((slug) => `https://cdn.simpleicons.org/${slug}/${slug}`);

onMounted(() => {
  showProfilePic.value = true;
  setTimeout(() => {
    showIconCloud.value = true;
  }, 1200);
});
</script>

<style scoped>
.drop-in-enter-active {
  transition:
    opacity 1.2s ease-out,
    transform 1.2s cubic-bezier(0.22, 1, 0.36, 1);
  will-change: transform, opacity;
}

.drop-in-enter-from {
  opacity: 0;
  transform: translateY(-100vh);
  filter: blur(5px);
}

.drop-in-enter-to {
  opacity: 1;
  transform: translateY(0);
  filter: blur(0px);
}

.drop-in-delay-enter-active {
  transition:
    opacity 1.2s ease-out,
    transform 1.2s cubic-bezier(0.22, 1, 0.36, 1);
  will-change: transform, opacity;
}

.drop-in-delay-enter-from {
  opacity: 0;
  transform: translateY(-100vh);
  filter: blur(5px);
}

.drop-in-delay-enter-to {
  opacity: 1;
  transform: translateY(0);
  filter: blur(0px);
}

.slide-fade-enter-active {
  transition:
    opacity 1s ease-out,
    transform 1s ease-out;
}

.slide-fade-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.slide-fade-enter-to {
  opacity: 1;
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
