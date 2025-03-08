<script setup>
import { useRoute } from 'vue-router';
import { Motion } from 'motion-v';
import AuroraBackground from './components/AuroraBackground.vue';
import NavBar from './components/NavBar.vue';
import Footer from './components/Footer.vue';

const route = useRoute();
</script>

<template>
  <!-- Transition wraps EVERYTHING, including AuroraBackground -->
  <transition name="fade-page" mode="out-in">
    <div :key="route.fullPath">
      <AuroraBackground>
        <Motion as="div" class="relative flex min-h-screen flex-col">
          <NavBar />
          <main class="flex flex-1 flex-col justify-center">
            <router-view />
          </main>
          <div class="fixed bottom-0 w-full bg-black bg-opacity-85 py-3 md:hidden">
            <Footer />
          </div>
        </Motion>
      </AuroraBackground>
    </div>
  </transition>
</template>

<style scoped>
/* Full page fade effect */
.fade-page-enter-active,
.fade-page-leave-active {
  transition: opacity 0.8s ease-in-out;
}

.fade-page-enter-from {
  opacity: 0;
}

.fade-page-leave-to {
  opacity: 0;
}
</style>
