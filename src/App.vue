<script setup>
import NavBar from "./components/NavBar.vue";
import { Motion } from "motion-v";
import AuroraBackground from "./components/AuroraBackground.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <AuroraBackground>
    <Motion as="div" class="relative flex flex-col min-h-screen">
      <NavBar />
      <main class="flex-1 flex flex-col justify-center">
        <router-view />
      </main>

      <div class="md:hidden fixed bottom-0 w-full bg-black bg-opacity-90 py-3">
        <Footer />
      </div>
    </Motion>
  </AuroraBackground>
</template>

<style scoped></style>
