import { defineConfig } from 'vite';

export default defineConfig({
  base: '/web-laba2/', 
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        weather: 'weather.html',
        // Остальные добавим позже, когда все участники подгрузят свои таблицы
      }
    }
  }
});