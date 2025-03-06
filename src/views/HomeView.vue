<template>
  <transition name="fade" appear>
    <div class="min-h-screen bg-[#1d1e22] flex flex-col items-center p-8 text-[#fff1e7]">
      <BioSection class="flex-1" />
      <router-link to="/projects" class="text-xl text-blue-400 underline">View My Projects</router-link>

      <!-- Tech Section moved BELOW bio and project link -->
      <section class="mt-5 text-center">
        <h2 class="text-3xl font-semibold mb-6">Technologies I Know and Love</h2>
        <div class="flex flex-wrap justify-center gap-6 filter invert animate-pulse">
          <img :src="VueImg" alt="Vue Icon" class="h-12 w-12">
          <img :src="ReactImg" alt="React Icon" class="h-12 w-12">
          <img :src="NodeImg" alt="Node.js Icon" class="h-12 w-12">
          <img :src="JSImage" alt="JavaScript Icon" class="h-12 w-12">
          <img :src="GithubImg" alt="GitHub Logo" class="h-12 w-12">
          <img :src="SupabaseImg" alt="Supabase Logo" class="h-12 w-12">
          <img :src="TailwindImg" alt="Tailwind CSS Logo" class="h-12 w-12">
          <img :src="PostgresImg" alt="PostgreSQL Logo" class="h-12 w-12">
          <img :src="TypeScriptImg" alt="TypeScript Logo" class="h-12 w-12">
        </div>
      </section>
    </div>
  </transition>
</template>

<script setup>
import BioSection from "../components/BioSection.vue";
import ReactImg from "../images/react.svg";
import VueImg from "../images/vuedotjs.svg";
import NodeImg from "../images/nodedotjs.svg";
import GithubImg from "../images/refinedgithub.svg";
import SupabaseImg from "../images/supabase.svg";
import TailwindImg from "../images/tailwindcss.svg";
import JSImage from "../images/javascript.svg";
import PostgresImg from "../images/postgresql.svg";
import TypeScriptImg from "../images/typescript.svg";
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