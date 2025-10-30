document.getElementById('getFactBtn').addEventListener('click', async () => {
    const result = document.getElementById('factResult');
    result.innerHTML = '<p>Загрузка...</p>';
    result.classList.add('show');
  
    try {
      const res = await fetch('https://random.dog/woof.json');
      const data = await res.json();
      if (data.url.endsWith('.mp4') || data.url.endsWith('.webm')) {
        result.innerHTML = '<p>Получено видео. Попробуйте ещё раз.</p>';
        return;
      }
  
      result.innerHTML = `
        <img src="${data.url}" alt="Собака" style="max-width:100%; border-radius:8px; margin-bottom:16px;">
        <p>🐶 Случайная собака!</p>
      `;
    } catch (err) {
      console.error('Ошибка:', err);
      result.innerHTML = '<p>Не удалось загрузить изображение.</p>';
    }
  });