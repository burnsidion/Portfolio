<template>
  <main>
    <div
      v-bind="props"
      :class="
        cn(
          'transition-bg relative min-h-screen items-center justify-center bg-zinc-50 text-slate-950 dark:bg-zinc-900',
          props.class
        )
      "
    >
      <div class="fixed inset-0 overflow-hidden">
        <div
          :class="
            cn(
              'will-change-transform; pointer-events-none absolute -inset-[400px] opacity-50 blur-[10px] invert filter dark:invert-0',
              '[--white-gradient:repeating-linear-gradient(100deg,var(--white)_0%,var(--white)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--white)_16%)]',
              '[--dark-gradient:repeating-linear-gradient(100deg,var(--black)_0%,var(--black)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--black)_16%)]',
              '[--aurora:repeating-linear-gradient(100deg,var(--blue-500)_10%,var(--indigo-300)_15%,var(--blue-300)_20%,var(--violet-200)_25%,var(--blue-400)_30%)]',
              '[background-image:var(--white-gradient),var(--aurora)] [background-position:50%_50%,50%_50%] [background-size:300%,_200%] dark:[background-image:var(--dark-gradient),var(--aurora)]',
              'aurora-background-gradient-after',
              'aurora-gradient-animation',
              props.radialGradient &&
                `[mask-image:radial-gradient(ellipse_at_100%_0%,black_10%,var(--transparent)_70%)]`
            )
          "
        ></div>
      </div>
      <slot />
    </div>
  </main>
</template>

<script setup lang="ts">
import { cn } from '../lib/utils';

interface AuroraBackgroundProps {
  radialGradient?: boolean;
  class?: string;
}

const props = withDefaults(defineProps<AuroraBackgroundProps>(), {
  radialGradient: true,
});
</script>

<style scoped>
.aurora-background-gradient-after::after {
  content: '';
  position: absolute;
  inset: 0;
  background-image: var(--white-gradient), var(--aurora);
  background-size: 200%, 100%;
  background-attachment: fixed;
  mix-blend-mode: normal;
  /* Change from difference to normal */
}

.dark .aurora-background-gradient-after::after {
  background-image: var(--dark-gradient), var(--aurora);
  mix-blend-mode: normal;
  /* Ensuring dark mode applies properly */
}

.aurora-gradient-animation::after {
  animation: animate-aurora 60s linear infinite;
}

@keyframes animate-aurora {
  0% {
    background-position:
      50% 50%,
      50% 50%;
  }

  100% {
    background-position:
      350% 50%,
      350% 50%;
  }
}
</style>
