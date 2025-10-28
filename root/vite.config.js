import { defineConfig } from 'vite';

export default defineConfig({
  base: '/web-laba2/',
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        weather: 'weather.html'
      }
    }
  }
});