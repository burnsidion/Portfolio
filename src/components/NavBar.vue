<template>
  <nav class="fixed top-0 w-full z-50 px-6 py-14">
    <div class="flex justify-between items-center max-w-7xl mx-auto">
      <!-- Use @click event to refresh the page if already on '/' -->
      <router-link to="/" @click="handleClick">
        <img :src="Pentagram" alt="image of a pentagram" class="h-10 w-10 filter invert cursor-pointer" />
      </router-link>
      <div class="flex space-x-6 text-white">
        <router-link to="/about" class="text-sm font-medium hover:text-gray-400 transition duration-300">
          About
        </router-link>
        <router-link to="/projects" class="text-sm font-medium hover:text-gray-400 transition duration-300">
          Projects
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { useRoute } from "vue-router";
import Pentagram from "../images/pentagram-svgrepo-com.svg";

const route = useRoute();

const handleClick = (event) => {
  if (route.path === "/") {
    event.preventDefault();
    window.location.reload();
  }
};
</script>