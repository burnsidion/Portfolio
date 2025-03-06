<script setup>
import NavBar from "./components/NavBar.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <div class="flex flex-col min-h-screen bg-[#1d1e22]">
    <NavBar />
    <main class="flex-1 flex flex-col justify-center">
      <router-view />
    </main>
    <!-- <Footer /> -->
  </div>
</template>

<style scoped></style>