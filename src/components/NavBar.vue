<template>
  <nav class="fixed top-0 left-0 w-full flex justify-between items-center p-14 z-50 
     bg-transparent backdrop-blur-md md:backdrop-blur-none">
    <div class="text-white text-2xl font-bold">
      <router-link to="/" @click="handleClick">
        <img :src="Pentagram" alt="image of a pentagram" class="h-10 w-10 filter invert cursor-pointer" />
      </router-link>
    </div>

    <!-- Desktop Navigation -->
    <ul class="hidden md:flex space-x-6 text-white">
      <router-link to="/about" class="text-lg font-medium hover:text-gray-400 transition duration-300">
        About
      </router-link>
      <router-link to="/projects" class="text-lg font-medium hover:text-gray-400 transition duration-300">
        Projects
      </router-link>
      <router-link to="/conact" class="text-lg font-medium hover:text-gray-400 transition duration-300">
        Contact
      </router-link>
    </ul>

    <!-- Hamburger Button (Mobile) -->
    <button @click="openMenu" class="md:hidden text-white text-3xl">
      ☰
    </button>

    <!-- Mobile Menu Modal -->
    <transition name="slide-fade">
      <div v-if="isMenuOpen"
        class="fixed inset-0 bg-black bg-opacity-90 flex flex-col items-center justify-center text-white text-2xl space-y-6 min-h-screen w-full">
        <button @click="closeMenu" class="absolute top-5 right-5 text-3xl">✕</button>
        <router-link to="/about" @click="closeMenu" class="hover:text-gray-400 transition duration-300">
          About
        </router-link>
        <router-link to="/projects" @click="closeMenu" class="hover:text-gray-400 transition duration-300">
          Projects
        </router-link>
        <router-link to="/" @click="closeMenu" class="hover:text-gray-400 transition duration-300">
          Home
        </router-link>
        <router-link to="/conact" class="hover:text-gray-400 transition duration-300">
          Contact
        </router-link>
      </div>
    </transition>
  </nav>
</template>

<script setup>
import { ref } from "vue";

import { useRoute } from "vue-router";
import Pentagram from "../images/pentagram-svgrepo-com.svg";

const route = useRoute();

const handleClick = (event) => {
  if (route.path === "/") {
    event.preventDefault();
    window.location.reload();
  }
};

const isMenuOpen = ref(false);

const openMenu = () => {
  isMenuOpen.value = true;
};

const closeMenu = () => {
  isMenuOpen.value = false;
};
</script>

<style scoped>
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: opacity 0.4s ease-in-out, transform 0.4s ease-in-out;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>