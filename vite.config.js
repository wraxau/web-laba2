import { defineConfig } from 'vite';

export default defineConfig({
  base: '/web-laba2/',
    build: {
    outDir: 'docs',
    rollupOptions: {
      input: {
        main: 'index.html',
        weather: 'weather.html',
        new: 'new.html',
        dogs: 'dogs.html',
        crypto: 'crypto.html'
      }
    }
  }
});