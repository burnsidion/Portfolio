<template>
    <div :class="cn('group h-72 w-56 [perspective:1000px]', props.class)">
        <div :class="cn(
            'relative h-full w-full rounded-2xl transition-all duration-500 [transform-style:preserve-3d]',
            rotation[0],
        )">
            <!-- Front -->
            <div
                class="absolute size-full [backface-visibility:hidden] rounded-2xl bg-black/80 flex items-center justify-center">
                <!-- Video Container with Border -->
                <div class="rounded-lg p-2 h-[80%] w-[98%] flex items-center justify-center">
                    <video :src="props.media" class="rounded-lg w-full h-[100%] object-cover shadow-lg" autoplay loop
                        muted playsinline>
                    </video>
                </div>
                <div class="absolute top-1 left-4 text-xl font-bold text-white">
                    {{ props.title }}
                </div>
            </div>

            <!-- Back -->
            <div :class="cn(
                'absolute h-full w-full rounded-2xl bg-black/80 p-4 text-slate-200 [backface-visibility:hidden]',
                rotation[1],
            )">
                <div class="flex min-h-full flex-col gap-2">
                    <h1 class="text-xl font-bold text-white">{{ props.subtitle }}</h1>
                    <p class="mt-1 border-t border-t-gray-200 py-4 text-base font-medium leading-normal text-gray-100">
                        {{ props.description }}
                    </p>
                    <!-- Add Links Here -->
                    <div class="flex justify-between w-full mt-auto">
                        <a :href="props.liveLink" target="_blank"
                            class="bg-[#1d1e22] hover:bg-blue-600 py-2 px-4 rounded-lg">
                            Live App
                        </a>
                        <a :href="props.repoLink" target="_blank"
                            class="bg-[#1d1e22] hover:bg-blue-600 py-2 px-4 rounded-lg">
                            GitHub
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed } from "vue";
import { cn } from "../lib/utils";

const props = defineProps({
    media: String,
    title: String,
    subtitle: String,
    description: String,
    rotate: { type: String, default: "y" },
    class: String,
    liveLink: String,
    repoLink: String,
});

const isVideo = computed(() => props.media?.endsWith(".mp4"));

const rotationClass = {
    x: ["group-hover:[transform:rotateX(180deg)]", "[transform:rotateX(180deg)]"],
    y: ["group-hover:[transform:rotateY(180deg)]", "[transform:rotateY(180deg)]"],
};

const rotation = computed(() => rotationClass[props.rotate]);
</script>
