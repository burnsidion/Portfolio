<template>
  <AuroraBackground>
    <Motion as="div" :initial="{ opacity: 0, y: 40, filter: 'blur(10px)' }"
      :while-in-view="{ opacity: 1, y: 0, filter: 'blur(0px)' }"
      :transition="{ delay: 0.3, duration: 0.8, ease: 'easeInOut' }"
      class="relative flex flex-col items-center gap-4 px-4">

      <BioSection />

      <!-- Desktop: IconCloud in bottom-right corner -->
      <div class="hidden lg:block absolute bottom-4 right-4">
        <IconCloud :images="imageUrls" />
      </div>

    </Motion>
  </AuroraBackground>
</template>

<script setup lang="ts">
import { Motion } from "motion-v";
import AuroraBackground from "../components/AuroraBackground.vue";
import BioSection from "../components/BioSection.vue";
import IconCloud from "../components/IconCloud.vue";


const slugs = [
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

];

const imageUrls = slugs.map((slug) => `https://cdn.simpleicons.org/${slug}/${slug}`);

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