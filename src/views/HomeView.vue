<template>
  <transition name="fade" appear>
    <div
      class="min-h-screen bg-gray-900 text-white flex flex-col items-center p-8"
    >
      <section class="text-center mb-12">
        <h1 class="text-5xl font-bold mb-4">Hey, I'm Ian</h1>

        <img
          :src="ProfilePic"
          alt="Ian Burnside"
          class="w-32 h-32 object-cover rounded-full mx-auto mb-4 border-4 border-gray-700 shadow-lg"
        />

        <p class="text-lg text-gray-400 max-w-2xl">
          {{ displayedText }}<span v-if="showCursor" class="cursor">|</span>
        </p>
      </section>

      <h2 class="text-3xl font-semibold mb-6">My Current Personal Projects</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
        <template v-if="isLoading">
          <SkeletonCard v-for="i in 2" :key="i" />
        </template>

        <template v-else>
          <div
            v-for="app in apps"
            :key="app.name"
            class="bg-gray-800 p-6 rounded-xl shadow-lg transition-transform transform hover:scale-105 flex flex-col h-full"
          >
            <img
              :src="app.image"
              :alt="app.name"
              class="rounded-lg mb-4 w-[400px] h-[250px] object-cover"
            />
            <div class="flex flex-col flex-grow justify-between">
              <div class="flex flex-col gap-2">
                <h2 class="text-2xl font-semibold">{{ app.name }}</h2>
                <p class="text-gray-400 mb-4">{{ app.description }}</p>
              </div>
              <div class="flex justify-between mt-4">
                <a
                  :href="app.liveLink"
                  target="_blank"
                  class="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg"
                >
                  Live App
                </a>
                <a
                  :href="app.repoLink"
                  target="_blank"
                  class="bg-gray-700 hover:bg-gray-800 text-white py-2 px-4 rounded-lg"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </template>
      </div>

      <footer class="mt-16 border-t border-gray-700 w-full text-center py-6">
        <p class="text-gray-400">Let's Connect!!</p>
        <div class="flex justify-center gap-6 mt-3">
          <a
            href="https://github.com/burnsidion"
            target="_blank"
            class="text-gray-400 hover:text-white text-xl"
          >
            <i class="fab fa-github"></i> GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/ian-burnside/"
            target="_blank"
            class="text-gray-400 hover:text-white text-xl"
          >
            <i class="fab fa-linkedin"></i> LinkedIn
          </a>
        </div>
      </footer>
    </div>
  </transition>
</template>

<script setup>
import { ref, onMounted } from "vue";
import vueAppImgHome from "../images/Vue-App-Home.png";
import reactAppImgHome from "../images/React-App-Home.png";
import SkeletonCard from "../components/SkeletonCard.vue";
import ProfilePic from "../images/profile-pic.jpg";

const fullText = ref(
  "I'm a frontend-focused full-stack developer specializing in Vue.js, React, and modern web technologies. Passionate about building sleek, intuitive user interfaces with a clean and maintainable codebase. I love to learn and share my knowledge with others in a supportive and encouraging manner. Below, you can view some recent personal projects that I have built. With more to come!"
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

const isLoading = ref(true);
const apps = [
  {
    name: "Vue Weather App",
    description:
      "A full-stack weather app built with Vue.js and Tailwind CSS on the frontend, and Express.js on the backend. Allowing users to search for and preview the weather for a searched city. Utliizing the OpenWeatherMap API and the MapBox API. With Local Storage to handle saving and tracking cities.",
    image: vueAppImgHome,
    liveLink: "https://weathering-heights-d1cfbe2e31ee.herokuapp.com/",
    repoLink: "https://github.com/burnsidion/Vue-Weather-App",
  },
  {
    name: "React Weather App",
    description:
      "A full-stack weather app built with React with Context API and Tailwind CSS and Express.js. This completely mimics the Vue applications' functionality and UI/UX. This, in my opinion, highlights the differences between how a React and Vue application handle the same functionality and UI/UX.",
    image: reactAppImgHome,
    liveLink: "https://weathering-heights-react-ee026e20f12a.herokuapp.com/",
    repoLink: "https://github.com/burnsidion/React-Weather-App",
  },
];

onMounted(() => {
  typeText();
  setTimeout(() => {
    isLoading.value = false;
  }, 1500);
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