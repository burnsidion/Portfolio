<template>
  <transition name="fade" appear>
    <!-- Make the main container a flex column that ensures content fills space -->
    <div class="flex min-h-screen flex-col">
      <div class="flex-grow px-4 pb-12">
        <!-- Box Reveal Header -->
        <div class="mx-auto w-full max-w-4xl px-8 pt-20 text-left md:pt-32">
          <BoxReveal color="#4B5563">
            <p class="text-[3.5rem] font-semibold leading-none text-white">
              Personal Projects
              <span class="text-white">.</span>
            </p>
          </BoxReveal>
          <BoxReveal color="#6B7280" :duration="0.8">
            <h2 class="mt-2 text-lg text-gray-300">Check out some of my work.</h2>
          </BoxReveal>
          <BoxReveal color="#9CA3AF" :duration="1">
            <div class="mt-4">
              <p class="leading-relaxed text-gray-400">
                → Front End and Full Stack Applications, built with
                <span class="font-semibold text-white">Vue</span>
                ,
                <span class="font-semibold text-white">React</span>
                ,
                <span class="font-semibold text-white">JavaScript</span>
                ,
                <span class="font-semibold text-white">TypeScript</span>
                ,
                <span class="font-semibold text-white">Tailwind CSS</span>
                , and
                <span class="font-semibold text-white">More</span>
                .
                <br />
                → Click on each card to learn more and view repos.
              </p>
            </div>
          </BoxReveal>
        </div>
        <!-- Project Cards -->
        <div class="mx-auto mt-12 grid w-full max-w-4xl gap-8 sm:grid-cols-1 md:grid-cols-2">
          <div v-for="(app, index) in apps" :key="index"
            class="relative overflow-hidden rounded-lg bg-gray-900 shadow-lg" @mouseenter="hoverOn[index] = true"
            @mouseleave="hoverOn[index] = false" @click="openModal(app)">
            <GlowBorder class="w-full">
              <iframe :src="app.video" class="w-full h-full rounded-lg object-cover transition-opacity duration-300"
                frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen
                style="aspect-ratio: 16/9; width: 100%; height: auto; pointer-events: none;"></iframe>
            </GlowBorder>
            <div
              class="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-4 text-white transition-opacity duration-300"
              :class="{
                'opacity-100': hoverOn[index] || isMobile,
                'opacity-0': !hoverOn[index] && !isMobile,
              }">
              <h3 class="text-xl font-semibold">{{ app.name }}</h3>
              <p class="text-sm text-gray-400">{{ app.description }}</p>
              <div class="mt-2 flex flex-wrap gap-2">
                <span v-for="tech in app.technologies" :key="tech" class="rounded bg-gray-800 px-2 py-1 text-xs">
                  {{ tech }}
                </span>
              </div>
            </div>
          </div>
        </div>
        <!-- <template> -->
        <transition name="slide-fade">
          <ProjectModal :project="selectedProject" :isOpen="showModal" @close="closeModal" />
        </transition>
      </div>

      <!-- Footer & Resume Link -->
      <div class="relative flex w-full flex-col items-start pb-12 md:pb-6">
        <Footer
          class="mx-20 hidden w-full max-w-2xl pb-6 text-center text-sm text-gray-300 opacity-70 hover:text-white md:block" />
        <router-link to="/resume"
          class="group mx-10 flex max-w-2xl space-x-2 pb-6 text-left text-lg font-medium text-white transition duration-300 hover:text-gray-500 md:mx-20">
          <span>Check out my resume</span>
          <span class="relative inline-block h-5 w-5">
            <div class="animate-bounce-horizontal absolute inset-0">➝</div>
          </span>
        </router-link>
      </div>
    </div>
  </transition>
</template>

<script setup>
import { ref, onMounted } from 'vue';

import SkeletonCard from '../components/SkeletonCard.vue';
import BoxReveal from '../components/BoxReveal.vue';
import GlowBorder from '../components/GlowBorder.vue';
import Footer from '../components/Footer.vue';
import ProjectModal from '../components/ProjectModal.vue';

const isMobile = ref(window.innerWidth < 768);
const hoverOn = ref([]);
const showModal = ref(false);
const selectedProject = ref(null);

const apps = [
  {
    name: 'Vue Weather App',
    description: 'A sleek weather tracker built with Vue.js and Tailwind.',
    extendedDescription: "A full stack weather app built with Vue.js and Tailwind on the front end, and express.js on the backend. Uses the OpenWeatherMap API, and MapBox API to allow users to search for, preview, and track cities and their weather.",
    video: 'https://player.vimeo.com/video/1064123116?autoplay=1&loop=1&muted=1&background=1',
    technologies: ['Vue3', 'Tailwind', 'OpenWeatherMap', 'MapBoxAPI'],
    liveLink: 'https://weathering-heights-d1cfbe2e31ee.herokuapp.com/',
    repoLink: 'https://github.com/burnsidion/Vue-Weather-App',
  },
  {
    name: 'React Weather App',
    description: 'A modern weather app leveraging React and Context API.',
    extendedDescription: "A React-based weather app with the same functionality as its Vue counterpart. Utilizes React's Context API for state management as well.",
    video: 'https://player.vimeo.com/video/1064123105?autoplay=1&loop=1&muted=1&background=1',
    technologies: ['React', 'Context API', 'Tailwind', 'Vite'],
    liveLink: 'https://weathering-heights-react-ee026e20f12a.herokuapp.com/',
    repoLink: 'https://github.com/burnsidion/React-Weather-App',
  },
  {
    name: 'My Portfolio Page',
    description: 'A fully responsive and sleek design to showcase myself.',
    extendedDescription: 'This Portfolio page was built with Vue3/Vite, utilizing Tailwind CSS, and InspiraUI to add some personal flare. Deployed on Netlify, all videos hosted on Vimeo',
    video: 'https://player.vimeo.com/video/1064123049?autoplay=1&loop=1&muted=1&background=1',
    technologies: ['Vue3', 'Vite', 'Tailwind CSS', 'InspiraUI'],
    liveLink: 'https://ianbportfolio.netlify.app/',
    repoLink: 'https://github.com/burnsidion/Portfolio',
  },
  {
    name: 'Inventour-y',
    description: 'A robust and responsive inventory and sales tracking application for merchandise managers.',
    extendedDescription: 'Allows users to easily add and keep track of inventory and nightly sales. Using Supabase for database hosting, Vue3 with Tailwind and DaisyUI on the Front-End. Express.js and Axios for the API.',
    video: 'https://player.vimeo.com/video/1069363973?autoplay=1&loop=1&muted=1&background=1',
    technologies: ['Vue3', 'Pinia', 'Vite', 'Tailwind CSS', 'DaisyUI', 'Supabase', 'PostgreSQL'],
    liveLink: 'https://inventour-y.onrender.com/',
    repoLink: 'https://github.com/burnsidion/Inventour-y'
  },
  {
    name: 'ResumeAI (In progress)',
    description: 'Handy and intuitive resume tailoring and job tracking',
    extendedDescription: 'Full-Stack application, catered to job hunters. Allows for easy reasume tailoring (ATS Friendly), and job application tracking for organization. Built with Supabase, Vue3, Pinia, Tailwind, InspiraUI, and Shadcn for Vue',
    video: 'https://player.vimeo.com/video/1069400766?autoplay=1&loop=1&muted=1&background=1',
    technologies: ['Vue3', 'Pinia', 'Vite', 'Tailwind CSS', 'InspiraUI', 'Supabase', 'PostgreSQL'],
    liveLink: 'Coming Soon!',
    repoLink: 'https://github.com/burnsidion/jobgoblin'
  }
];
const openModal = (project) =>
{
  document.querySelectorAll('video').forEach(video => video.pause());
  selectedProject.value = project;
  showModal.value = true;
};

const closeModal = () =>
{
  showModal.value = false;
  selectedProject.value = null;
};

onMounted(() =>
{
  window.addEventListener('resize', () =>
  {
    isMobile.value = window.innerWidth < 768;
  });
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

video {
  pointer-events: none;
}
</style>
