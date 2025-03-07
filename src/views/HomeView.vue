<template>
  <transition name="fade" appear>
    <BioSection />
  </transition>
</template>

<script setup>
import { ref } from "vue";
import { Motion } from "motion-v";
import AuroraBackground from "../components/AuroraBackground.vue";
import BioSection from "../components/BioSection.vue";

const showIconCloud = ref(false);

const imageUrls = [
  "typescript",
  "javascript",
  "vuedotjs",
  "react",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "postgresql",
  "testinglibrary",
  "jest",
  "docker",
  "git",
  "jira",
  "github",
  "sonarqube",
  "figma",
  "dotenv",
  "axios",
  "bandcamp",
  "bitbucket"
].map(slug => `https://cdn.simpleicons.org/${slug}/${slug}`);
</script>

<style scoped>
.pop-up-enter-active {
  transition: opacity 1.2s ease-out, transform 1.2s cubic-bezier(0.22, 1, 0.36, 1);
  will-change: transform, opacity;
}

.pop-up-enter-from {
  opacity: 0;
  transform: translateY(-100vh);
  filter: blur(1px);
}

.pop-up-enter-to {
  opacity: 1;
  transform: translateY(0);
  filter: blur(0px);
}

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
