import"./main-8MjXA5MH.js";document.addEventListener("DOMContentLoaded",()=>{const s=document.getElementById("getDogBtn"),e=document.getElementById("dogResult");s.addEventListener("click",async()=>{e.innerHTML="<p>Загрузка...</p>",e.classList.add("show");try{const t=await(await fetch("https://dog.ceo/api/breeds/image/random")).json();if(!t||t.status!=="success"){e.innerHTML="<p>Не удалось загрузить изображение.</p>";return}const r=t.message;e.innerHTML=`
          <img src="${r}" alt="Собака" style="max-width:100%; border-radius:8px; margin-bottom:16px;">
          <p>Случайная собака загружена!</p>
        `}catch(n){console.error("Ошибка:",n),e.innerHTML="<p>Ошибка загрузки. Попробуйте позже.</p>"}})});
