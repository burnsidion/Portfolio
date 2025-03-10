<template>
  <div class="w-full items-center justify-center px-4 pt-52 text-white">
    <div v-if="showHeader" class="flex justify-center mb-6">
      <HyperText text="About Me" class="text-4xl font-bold" :duration="800" :animate-on-load="true" />
    </div>
    <TracingBeam class="px-6">
      <div class="relative mx-auto max-w-2xl px-5 pt-4 antialiased">
        <!-- Professional Experience  -->
        <div v-for="(job, index) in professionalExperience" :key="`job-${index}`" class="mb-10">
          <span class="inline-block rounded-full bg-black px-4 py-1 text-sm text-white">
            {{ job.badge }}
          </span>

          <p class="my-4 text-lg font-bold">
            {{ job.title }}
          </p>

          <div class="break-words text-sm leading-relaxed text-gray-300">
            <p v-for="(desc, idx) in job.description" :key="`desc-${idx}`">
              {{ desc }}
            </p>
          </div>
        </div>

        <!-- Personal Section  -->
        <div>
          <span class="inline-block rounded-full bg-black px-4 py-1 text-sm text-white">
            Personal
          </span>
          <p class="my-4 text-lg font-bold">A Passion for Code & Community</p>
          <p class="max-w-prose text-sm leading-relaxed text-gray-300">
            {{ fullText }}
          </p>
          <a href="https://github.com/burnsidion" target="_blank"
            class="opacity-70 transition-transform hover:scale-110 hover:opacity-100">
            <font-awesome-icon :icon="['fab', 'github']" class="pt-3 text-2xl" />
          </a>
        </div>

        <!-- Photo Gallery Component  -->
        <PhotoGallery v-if="windowWidth >= 768" :items="items" />

        <!-- Music Events Section  -->
        <div v-for="(musicEvent, index) in musicTimeline" :key="`music-${index}`" class="py-10">
          <span class="inline-block rounded-full bg-black px-4 py-1 text-sm text-white">
            {{ musicEvent.badge }}
          </span>

          <p class="my-4 text-lg font-bold">
            {{ musicEvent.title }}
          </p>

          <p v-for="(desc, idx) in musicEvent.description" :key="`desc-${idx}`" class="pb-3">
            {{ desc }}
          </p>

          <!-- Video Section (YouTube) -->
          <div v-if="musicEvent.video.includes('youtube.com')" class="relative w-full max-w-2xl md:w-3/4">
            <GlowBorder>
              <iframe class="h-[250px] w-full rounded-lg md:h-[315px]" :src="musicEvent.video"
                title="YouTube video player" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen></iframe>
            </GlowBorder>
          </div>
          <!-- Imported Videos  -->
          <GlowBorder v-else class="w-full max-w-2xl md:w-3/4">
            <iframe :src="`${musicEvent.video}?controls=1`" class="w-full rounded-lg border-2 border-gray-600"
              frameborder="0" allow="fullscreen" allowfullscreen style="aspect-ratio: 16/9;">
            </iframe>
          </GlowBorder>
        </div>
        <!-- Footer  -->
        <div class=" relative mb-20 flex w-full flex-col items-start pb-16 md:mb-10 md:pb-6">
          <router-link to="/projects"
            class="group flex space-x-2 text-left text-lg font-medium transition duration-300 hover:text-gray-400">
            <span>Check out my projects</span>
            <span class="relative inline-block h-5 w-5">
              <div class="animate-bounce-horizontal absolute inset-0">➝</div>
            </span>
          </router-link>
          <Footer
            class="mx-auto hidden w-full max-w-2xl pb-6 pt-6 text-center text-sm text-gray-300 opacity-70 hover:text-white md:block" />
        </div>
      </div>
    </TracingBeam>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import TracingBeam from '../components/TracingBeam.vue';
import GlowBorder from '../components/GlowBorder.vue';
import PhotoGallery from '../components/PhotoGallery.vue';
import HyperText from '../components/HyperText.vue';

import Aries from '../images/Aries.png';
import Ibby from '../images/Ibby.png';
import Vader from '../images/Vader.png';
import Intense from '../images/intense.png';
import Show from '../images/show.png';
import Trailside from '../images/trailside.png';
import Shadows from '../images/shadows.png';
import Band from '../images/band.png';

import Footer from '../components/Footer.vue';

const fullText = ref(
  'I have a deep passion for coding, music, and software engineering. Before diving into web development, my biggest passion was music. I have been playing guitar for about 20 years, played in multiple bands, and also write/record my own solo material. Im a huge fan of technical death metal, and the virtuosity/intensity it requires.'
);

const professionalExperience = ref([
  {
    title: 'Software Engineer, RealTruck',
    badge: 'RealTruck',
    description: [
      'At RealTruck, I played a key role in modernizing the frontend by migrating components to the Vue 3 Composition API, significantly improving maintainability and performance. I also focused on optimizing mobile usability, redesigning key UI components with Tailwind CSS, which led to a 20% improvement in responsiveness. To streamline collaboration, I authored internal technical documentation and best practices. Additionally, I rebuilt the cart component using CSS Grid, creating a more intuitive and structured layout for users.'
    ],
  },
  {
    title: 'Associate Software Engineer, S&P Global',
    badge: 'S&P Global',
    description: [
      'As an Associate Software Engineer at S&P Global, I developed reusable Vue.js components for RBC’s high-traffic online trading platform, serving over 10 million daily users. I led WCAG accessibility improvements to enhance the experience for screen readers and ensure compliance with accessibility standards. Beyond coding, I contributed to the team by writing internal guides and tutorials to facilitate the adoption of Vue 3, helping onboard developers more efficiently.'
    ],
  },
  {
    title: 'My Education',
    badge: 'Education',
    description: [
      'Galvanize | Full-Stack Web Development (2018)',
      'University of Colorado, Boulder | B.A. in Humanities (2012)',
    ],
  },
]);

const musicTimeline = ref([
  {
    title: "Apotheon - 'Mechanically Consumed'",
    badge: 'Band',
    video: 'https://www.youtube.com/embed/ATFxLFDcv5g',
    description: ['Music video for my last band, Apotheon.'],
  },
  {
    title: "Apotheon - 'Mechanically Consumed' Full EP",
    badge: 'Band',
    video: 'https://www.youtube.com/embed/XReG2F3G-SE',
    description: ['The Full EP, I wrote the title track for this.']
  },
  {
    title: "Cover: 'Only Ash Remains' - Necrophagist",
    badge: 'Music',
    video: 'https://player.vimeo.com/video/1064122859?autoplay01&loop=0&muted=0&background=1',
    description: ['A technical death metal cover of one of my favorite songs.'],
  },{
    title: "Cover: 'Im Awake' - Intervals",
    badge: 'Music',
    video: 'https://player.vimeo.com/video/1064122724?autoplay=0&loop=0&muted=0&background=1',
    description: ['A cover of a bit proggier song from the band "Intervals"'],
  },
]);

const showCursor = ref(true);

const windowWidth = ref(window.innerWidth);

const items = [
  {
    src: Aries,
  },
  {
    src: Vader,
  },
  {
    src: Ibby,
  },
  {
    src: Intense,
  },
  {
    src: Show,
  },
  {
    src: Trailside,
  },
  {
    src: Shadows,
  },
  {
    src: Band,
  },
];

const showHeader = ref(false);

const updateWidth = () => {
  windowWidth.value = window.innerWidth;
};

onMounted(() => {
  setTimeout(() => {
    showHeader.value = true;
  }, 100)
  window.addEventListener('resize', updateWidth);
});

onUnmounted(() => {
  showHeader.value = false;
  window.removeEventListener('resize', updateWidth);
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
