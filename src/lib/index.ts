import { HTMLAttributes } from "vue";

export interface SphereIcon {
  x: number;
  y: number;
  z: number;
  scale: number;
  opacity: number;
  id: number;
}

export interface IconCloudProps {
  class?: HTMLAttributes["class"];
  images?: string[];
}

// Explicitly export everything (this helps TypeScript find exports)
export type { SphereIcon, IconCloudProps };
