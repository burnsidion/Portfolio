<script setup>
  import NavBar from "./components/NavBar.vue";
  import { Motion } from "motion-v";
  import AuroraBackground from "./components/AuroraBackground.vue";
</script>

<template>
  <AuroraBackground>
    <Motion as="div" class="relative flex flex-col min-h-screen">
      <NavBar />
      <main class="flex-1 flex flex-col justify-center">
        <router-view />
      </main>
    </Motion>
  </AuroraBackground>
</template>

<style scoped></style>