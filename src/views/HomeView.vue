<template>
  <div
    class="min-h-screen bg-gray-900 text-white flex flex-col items-center p-8"
  >
    <h1 class="text-4xl font-bold mb-8 text-center">
      My Current Personal Projects
    </h1>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
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

        <!-- Wrap the text and buttons in a flex-grow div -->
        <div class="flex flex-col flex-grow justify-between">
          <div class="flex flex-col gap-2">
            <h2 class="text-2xl font-semibold">{{ app.name }}</h2>
            <p class="text-gray-400 mb-4">{{ app.description }}</p>
          </div>

          <!-- Buttons stay at the bottom -->
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
    </div>
  </div>
</template>

<script setup>
import vueAppImgHome from "../images/Vue-App-Home.png";

import reactAppImgHome from "../images/React-App-Home.png";

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
</script>