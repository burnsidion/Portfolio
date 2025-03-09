<template>
  <transition name="fade-page" mode="out-in">
    <div :key="route.fullPath">
      <component :is="isMobile ? 'div' : AuroraBackground" :class="{ 'bg-zinc-900': isMobile }"
        style="background: linear-gradient(to bottom, #1a1a2e, #16213e) !important;">
        <Motion as="div" class="relative flex min-h-screen flex-col">
          <NavBar />
          <main class="flex flex-1 flex-col justify-center">
            <router-view />
          </main>
          <div class="fixed bottom-0 w-full bg-black bg-opacity-85 py-3 md:hidden">
            <Footer class="text-gray-100 hover:text-white" />
          </div>
        </Motion>
      </component>
    </div>
  </transition>
</template>


<script setup>
import { useRoute } from 'vue-router';
import { Motion } from 'motion-v';
import AuroraBackground from './components/AuroraBackground.vue';
import NavBar from './components/NavBar.vue';
import Footer from './components/Footer.vue';
import { ref, onMounted } from 'vue';

const isMobile = ref(false);

onMounted(() => {
  isMobile.value = window.innerWidth <= 768;
  window.addEventListener('resize', () => {
    isMobile.value = window.innerWidth <= 768;
  });
});

const route = useRoute();
</script>

<style scoped>
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
