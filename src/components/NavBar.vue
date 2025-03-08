<template>
  <nav class="fixed top-0 left-0 w-full flex justify-between items-center
     p-4 md:p-10 lg:p-14 z-50 bg-transparent backdrop-blur-md md:backdrop-blur-none">
    <div class="text-white text-2xl font-bold">
      <router-link to="/" @click="handleClick">
        <img :src="Pentagram" alt="image of a pentagram"
          class="h-10 w-10 filter invert cursor-pointer transition-transform duration-500"
          :class="{ 'animate-3d-spin': isSpinning }" />
      </router-link>
    </div>

    <!-- Desktop Navigation -->
    <ul class="hidden md:flex space-x-6 text-white">
      <router-link to="/about"
        class="relative text-lg font-medium hover:text-gray-400 transition duration-300 after:absolute after:left-1/2 after:bottom-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 after:origin-center hover:after:w-full hover:after:left-0">
        About
      </router-link>
      <router-link to="/projects"
        class="relative text-lg font-medium hover:text-gray-400 transition duration-300 after:absolute after:left-1/2 after:bottom-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 after:origin-center hover:after:w-full hover:after:left-0">
        Projects
      </router-link>
      <router-link to="/contact"
        class="relative text-lg font-medium hover:text-gray-400 transition duration-300 after:absolute after:left-1/2 after:bottom-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 after:origin-center hover:after:w-full hover:after:left-0">
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

import { useRoute, useRouter } from "vue-router";
import Pentagram from "../images/pentagram-svgrepo-com.svg";

const route = useRoute();
const router = useRouter();

const isMenuOpen = ref(false);

const isSpinning = ref(false);

const openMenu = () => {
  isMenuOpen.value = true;
};

const closeMenu = () => {
  isMenuOpen.value = false;
};

const handleClick = async () => {
  if (!isSpinning.value) {
    isSpinning.value = true;
    await new Promise((resolve) => setTimeout(resolve, 600));
    isSpinning.value = false;
  }

  if (route.path === "/") {
    router.replace({ path: "/refresh" }).then(() => {
      router.replace("/");
    });
  } else {
    router.push("/");
  }
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

@keyframes spin3D {
  0% {
    transform: perspective(400px) rotateY(0deg);
  }

  50% {
    transform: perspective(400px) rotateY(180deg);
  }

  100% {
    transform: perspective(400px) rotateY(360deg);
  }
}

.animate-3d-spin {
  animation: spin3D 0.6s ease-out;
}
</style>
