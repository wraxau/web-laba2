import"./modulepreload-polyfill-B5Qt9EMX.js";/* empty css             */document.addEventListener("DOMContentLoaded",()=>{const s=document.getElementById("getDogBtn"),t=document.getElementById("dogResult");s.addEventListener("click",async()=>{t.innerHTML="<p>Загрузка...</p>",t.classList.add("show");try{const e=await(await fetch("https://dog.ceo/api/breeds/image/random")).json();if(!e||e.status!=="success"){t.innerHTML="<p>Не удалось загрузить изображение.</p>";return}const r=e.message;t.innerHTML=`
          <img src="${r}" alt="Собака" style="max-width:100%; border-radius:8px; margin-bottom:16px;">
          <p>Случайная собака загружена!</p>
        `}catch(n){console.error("Ошибка:",n),t.innerHTML="<p>Ошибка загрузки. Попробуйте позже.</p>"}})});
