import { defineConfig } from 'vite';

export default defineConfig({
  root: 'docs', 
  base: '/web-laba2/', 
  build: {
    outDir: '../dist', 
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: 'docs/index.html',
        weather: 'docs/weather.html',
      },
    },
  },
});
