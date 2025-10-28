import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'


setupCounter(document.querySelector('#counter'))
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        weather: 'weather.html',
        // добавь сюда другие страницы, если будут
      },
    },
  },
  base: '/web-2/', // ⚠️ замени на имя твоего репозитория!
});