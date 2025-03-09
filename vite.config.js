import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  server: {
    headers: {
      'Cache-Control': 'no-cache, must-revalidate, max-age=0',
    },
  },
  resolve: {
    extensions: ['.js', '.ts', '.vue'],
  },
});
