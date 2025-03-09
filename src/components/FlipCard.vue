<template>
  <div :class="cn('group h-72 w-56 [perspective:1000px]', props.class)">
    <div
      :class="
        cn(
          'relative h-full w-full rounded-2xl transition-all duration-500 [transform-style:preserve-3d]',
          rotation[0]
        )
      "
    >
      <!-- Front -->
      <div
        class="absolute flex size-full items-center justify-center rounded-2xl bg-black/80 [backface-visibility:hidden]"
      >
        <!-- Video Container with Border -->
        <div class="flex h-[80%] w-[98%] items-center justify-center rounded-lg p-2">
          <video
            :src="props.media"
            class="h-[100%] w-full rounded-lg object-cover shadow-lg"
            autoplay
            loop
            muted
            playsinline
          ></video>
        </div>
        <div class="absolute left-4 top-1 text-xl font-bold text-white">
          {{ props.title }}
        </div>
      </div>

      <!-- Back -->
      <div
        :class="
          cn(
            'absolute h-full w-full rounded-2xl bg-black/80 p-4 text-slate-200 [backface-visibility:hidden]',
            rotation[1]
          )
        "
      >
        <div class="flex min-h-full flex-col gap-2">
          <h1 class="text-xl font-bold text-white">{{ props.subtitle }}</h1>
          <p
            class="mt-1 border-t border-t-gray-200 py-4 text-base font-medium leading-normal text-gray-100"
          >
            {{ props.description }}
          </p>
          <!-- Add Links Here -->
          <div class="mt-auto flex w-full justify-between">
            <a
              :href="props.liveLink"
              target="_blank"
              class="rounded-lg bg-[#1d1e22] px-4 py-2 hover:bg-blue-600"
            >
              Live App
            </a>
            <a
              :href="props.repoLink"
              target="_blank"
              class="rounded-lg bg-[#1d1e22] px-4 py-2 hover:bg-blue-600"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { cn } from '../lib/utils';

const props = defineProps({
  media: String,
  title: String,
  subtitle: String,
  description: String,
  rotate: { type: String, default: 'y' },
  class: String,
  liveLink: String,
  repoLink: String,
});

const isVideo = computed(() => props.media?.endsWith('.mp4'));

const rotationClass = {
  x: ['group-hover:[transform:rotateX(180deg)]', '[transform:rotateX(180deg)]'],
  y: ['group-hover:[transform:rotateY(180deg)]', '[transform:rotateY(180deg)]'],
};

const rotation = computed(() => rotationClass[props.rotate]);
</script>
