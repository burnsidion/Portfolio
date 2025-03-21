<template>
  <div ref="tracingBeamRef" :class="cn('relative mx-auto h-full w-full max-w-4xl', $props.class)">
    <div class="absolute -left-4 top-3 md:-left-12">
      <div
        :style="{
          boxShadow: scrollYProgress > 0 ? 'none' : 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
        }"
        class="border-netural-200 ml-[27px] flex size-4 items-center justify-center rounded-full border shadow-sm"
      >
        <Motion
          :animate="{
            backgroundColor:
              scrollYProgress > 0 ? 'rgba(255, 255, 255, 1)' : 'rgba(255, 255, 255, 1)',
            borderColor: scrollYProgress > 0 ? 'rgba(255, 255, 255, 1)' : 'rgba(255, 255, 255, 1)',
          }"
          class="size-2 rounded-full border border-neutral-300 bg-white"
        />
      </div>
      <svg
        :viewBox="`0 0 20 ${svgHeight}`"
        width="20"
        :height="svgHeight"
        class="ml-4 block"
        aria-hidden="true"
      >
        <path
          :d="`M 1 0V -36 l 18 24 V ${svgHeight * 0.8} l -18 24V ${svgHeight}`"
          fill="none"
          stroke="#9091A0"
          stroke-opacity="0.16"
        ></path>
        <path
          :d="`M 1 0V -36 l 18 24 V ${svgHeight * 0.8} l -18 24V ${svgHeight}`"
          fill="none"
          stroke="url(#gradient)"
          stroke-width="1.25"
          class="motion-reduce:hidden"
        ></path>
        <defs>
          <linearGradient
            id="gradient"
            gradientUnits="userSpaceOnUse"
            x1="0"
            x2="0"
            :y1="spring.y1"
            :y2="spring.y2"
          >
            <stop stop-color="#18CCFC" stop-opacity="0"></stop>
            <stop stop-color="#18CCFC"></stop>
            <stop offset="0.325" stop-color="#6344F5"></stop>
            <stop offset="1" stop-color="#AE48FF" stop-opacity="0"></stop>
          </linearGradient>
        </defs>
      </svg>
    </div>
    <div ref="tracingBeamContentRef">
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { cn } from '../lib/utils';
import { Motion } from 'motion-v';
import { onMounted, onUnmounted, watch, ref, computed } from 'vue';
import { useSpring } from 'vue-use-spring';

defineProps({
  class: String,
});

const tracingBeamRef = ref<HTMLDivElement>();
const tracingBeamContentRef = ref<HTMLDivElement>();

const scrollYProgress = ref(0);
const svgHeight = ref(0);
const scrollPercentage = ref(0);
const isMobile = ref(window.innerWidth <= 768);

const computedY1 = computed(
  () =>
    mapRange(scrollYProgress.value, 0, 0.8, scrollYProgress.value, svgHeight.value) *
    (1.4 - scrollPercentage.value)
);

const computedY2 = computed(
  () =>
    mapRange(scrollYProgress.value, 0, 1, scrollYProgress.value, svgHeight.value - 500) *
    (1.4 - scrollPercentage.value)
);

// Adjust spring values for more responsiveness
const spring = useSpring(
  { y1: computedY1.value, y2: computedY2.value },
  { tension: 50, friction: 70, precision: 0.01 }
);

const updateSpringValues = () => {
  if (isMobile.value) {
    spring.tension = 48; // Minor adjustment for smoother slowdown
    spring.friction = 140; // More friction to slow the drop further
  } else {
    spring.tension = 54; // Slows down slightly
    spring.friction = 110; // Stops the beam sooner after scrolling stops
  }
};

watch(isMobile, updateSpringValues, { immediate: true });

window.addEventListener('resize', () => {
  isMobile.value = window.innerWidth <= 768;
});

watch(computedY1, (newY1) => {
  spring.y1 = newY1;
});

watch(computedY2, (newY2) => {
  spring.y2 = newY2;
});

function updateScrollYProgress() {
  if (tracingBeamRef.value) {
    const boundingRect = tracingBeamRef.value.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    const elementHeight = boundingRect.height;

    // Ensure the beam starts moving up much sooner
    const newScrollPercentage = Math.min(
      1,
      Math.max(0, (windowHeight * 0.75 - boundingRect.top) / (windowHeight + elementHeight))
    );

    // Adjust beam movement to be more controlled
    if (isMobile.value) {
      scrollYProgress.value = (boundingRect.y / windowHeight) * -0.5; // Prevents dropping too far
    } else {
      scrollYProgress.value = (boundingRect.y / windowHeight) * -1.05; // Reduces overshooting
    }

    // Only update if there's a significant change, preventing sudden jumps
    if (Math.abs(newScrollPercentage - scrollPercentage.value) > 0.02) {
      scrollPercentage.value = newScrollPercentage;
    }
  }
}

onMounted(() => {
  window.addEventListener('scroll', updateScrollYProgress);
  window.addEventListener('resize', updateScrollYProgress);
  updateScrollYProgress();

  const resizeObserver = new ResizeObserver(function () {
    updateSVGHeight();
  });

  resizeObserver.observe(tracingBeamContentRef.value!);

  updateSVGHeight();
});

onUnmounted(() => {
  tracingBeamRef.value?.removeEventListener('scroll', updateScrollYProgress);
  window.removeEventListener('resize', updateScrollYProgress);
});

function updateSVGHeight() {
  if (!tracingBeamContentRef.value) return;

  svgHeight.value = tracingBeamContentRef.value.offsetHeight;
}

function mapRange(
  value: number,
  inMin: number,
  inMax: number,
  outMin: number,
  outMax: number
): number {
  return ((value - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}
</script>
