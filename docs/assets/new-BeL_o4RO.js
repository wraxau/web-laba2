import"./modulepreload-polyfill-B5Qt9EMX.js";/* empty css             */document.getElementById("newForm").addEventListener("submit",async n=>{n.preventDefault();const t=document.getElementById("newInput").value.trim();t&&await y(t)});async function y(n){const t=document.getElementById("newResult");t.innerHTML="<p>Поиск новостей...</p>",t.classList.add("show");try{let o=function(s){return new Date(s).toLocaleString("ru-RU")};const e=await fetch(`https://api.spaceflightnewsapi.net/v4/articles/?format=json&limit=10&search=${n}`);if(!e.ok)throw new Error(`Ошибка сервера: ${e.status}`);const r=await e.json();if(!r.results||r.results.length===0){t.innerHTML="<p>Не удалось получить новости об этом объекте. Попробуйте ввести другое название.</p>";return}let a="";a+=`
                <div class = "new-header">
                    <h2>Вот лучшие новости о вашем космическом объекте: ${n}</h2>
                </div>`;for(const s of r.results){const{title:c,authors:d,url:l,image_url:u,news_site:m,summary:h,published_at:p,updated_at:g}=s,f=o(p),w=o(g),v=d?.[0]?.name||"Автор неизвестен";a+=`
                <div class = "news-card">
                    <div class = "name-story">
                        <span>${c}</span>
                    </div>
                    <img src="${u}" alt="Космический объект" class="image-object">
                    <div class = "short-story">
                        <label>Кратко: </label>
                        <span>${h}</span>
                    </div>
                    <details class = "in-detail">
                        <summary>Подробнее про эту статью</summary>
                        <ul class = "meta-data">
                            <li><strong>Авторы статьи: </strong>${v}</li>
                            <li><strong>Ссылка на статью: </strong> <a href = "${l}">${l}</a></li>
                            <li><strong>Источник статьи: </strong>${m}</li>
                            <li><strong>Статья опубликована: </strong>${f}</li>
                            <li><strong>Статья обновлена: </strong>${w}</li>
                        </ul>
                    </details>
                </div>
            `}a+=`
            <div class="to-home">
                <a href="index.html" class="homeButton" id="to-home-button">🏠 На главную</a>
            </div>
        `,t.innerHTML=a;const i=document.getElementById("to-home-button");i&&i.addEventListener("click",s=>{s.preventDefault(),window.location.href="https://wraxau.github.io/web-laba2/index.html"})}catch(e){console.error("Ошибка:",e),t.innerHTML="<p>Ошибка загрузки новостей</p>"}}
