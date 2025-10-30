import"./main-8MjXA5MH.js";let c="";document.getElementById("cityForm").addEventListener("submit",async s=>{s.preventDefault();const e=document.getElementById("cityInput").value.trim();e&&(c=e,await p(e))});async function p(s){const e=document.getElementById("weatherResult");e.innerHTML="<p>Загрузка погоды...</p>",e.classList.add("show");try{const a=await(await fetch(`https://nominatim.openstreetmap.org/search?city=${encodeURIComponent(s)}&format=json&limit=1`)).json();if(!a||a.length===0){e.innerHTML="<p>Город не найден. Попробуйте другой.</p>";return}const{lat:i,lon:o,display_name:d}=a[0],l=await(await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${i}&longitude=${o}&current_weather=true`)).json();if(!l.current_weather){e.innerHTML="<p>Не удалось получить данные о погоде.</p>";return}const{temperature:n,windspeed:m}=l.current_weather,u=new Date().toLocaleString("ru-RU",{timeZone:"Europe/Moscow",year:"numeric",month:"long",day:"numeric",hour:"2-digit",minute:"2-digit"});let t="🌤️";n<0?t="❄️":n<10?t="☁️":n<20?t="⛅":t="☀️",e.innerHTML=`
      <div class="weather-header">
        <span class="weather-icon-large">${t}</span>
        <h2>${d.split(",")[0]}</h2>
      </div>
      <div class="result-item">
        <label>🌡️ Температура:</label>
        <span>${n}°C</span>
      </div>
      <div class="result-item">
        <label>💨 Ветер:</label>
        <span>${m} км/ч</span>
      </div>
      <div class="result-item">
        <label>📅 Запрос:</label>
        <span>${u}</span>
      </div>
      <details class="tech-details">
        <summary>🌍 Техническая информация</summary>
        <p><strong>Координаты:</strong> ${i}, ${o}</p>
        <p><strong>API:</strong> Open-Meteo + Nominatim (OpenStreetMap)</p>
      </details>
      <div class="action-buttons">
        <button id="refreshBtn" class="btn">🔄 Обновить</button>
      </div>`,document.getElementById("refreshBtn").addEventListener("click",()=>{p(c)})}catch(r){console.error("Ошибка:",r),e.innerHTML="<p>Произошла ошибка. Проверьте подключение и попробуйте снова.</p>"}}
