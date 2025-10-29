(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const s of n.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function a(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(e){if(e.ep)return;e.ep=!0;const n=a(e);fetch(e.href,n)}})();let d="";document.getElementById("cityForm").addEventListener("submit",async i=>{i.preventDefault();const t=document.getElementById("cityInput").value.trim();t&&(d=t,await u(t))});async function u(i){const t=document.getElementById("weatherResult");t.innerHTML="<p>Загрузка погоды...</p>",t.classList.add("show");try{const r=await(await fetch(`https://nominatim.openstreetmap.org/search?city=${encodeURIComponent(i)}&format=json&limit=1`)).json();if(!r||r.length===0){t.innerHTML="<p>Город не найден. Попробуйте другой.</p>";return}const{lat:e,lon:n,display_name:s}=r[0],l=await(await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${e}&longitude=${n}&current_weather=true`)).json();if(!l.current_weather){t.innerHTML="<p>Не удалось получить данные о погоде.</p>";return}const{temperature:c,windspeed:p}=l.current_weather,m=new Date().toLocaleString("ru-RU",{timeZone:"Europe/Moscow",year:"numeric",month:"long",day:"numeric",hour:"2-digit",minute:"2-digit"});let o="🌤️";c<0?o="❄️":c<10?o="☁️":c<20?o="⛅":o="☀️",t.innerHTML=`
      <div class="weather-header">
        <span class="weather-icon-large">${o}</span>
        <h2>${s.split(",")[0]}</h2>
      </div>
      <div class="result-item">
        <label>🌡️ Температура:</label>
        <span>${c}°C</span>
      </div>
      <div class="result-item">
        <label>💨 Ветер:</label>
        <span>${p} км/ч</span>
      </div>
      <div class="result-item">
        <label>📅 Запрос:</label>
        <span>${m}</span>
      </div>
      <details class="tech-details">
        <summary>🌍 Техническая информация</summary>
        <p><strong>Координаты:</strong> ${e}, ${n}</p>
        <p><strong>API:</strong> Open-Meteo + Nominatim (OpenStreetMap)</p>
      </details>
      <div class="action-buttons">
        <button id="refreshBtn" class="btn">🔄 Обновить</button>
      </div>
    `,document.getElementById("refreshBtn").addEventListener("click",()=>{u(d)})}catch(a){console.error("Ошибка:",a),t.innerHTML="<p>Произошла ошибка. Проверьте подключение и попробуйте снова.</p>"}}
