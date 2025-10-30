document.getElementById('bookForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const query = document.getElementById('bookInput').value.trim();
    const resultDiv = document.getElementById('bookResult');
    resultDiv.innerHTML = '<p>Поиск книги...</p>';
    resultDiv.classList.add('show');
  
    try {
      const res = await fetch(`https://openlibrary.org/search.json?q=${encodeURIComponent(query)}&limit=1`);
      const data = await res.json();
  
      if (!data.docs || data.docs.length === 0) {
        resultDiv.innerHTML = '<p>Книга не найдена. Попробуйте другое название.</p>';
        return;
      }
  
      const book = data.docs[0];
      const title = book.title || 'Без названия';
      const author = book.author_name ? book.author_name[0] : 'Неизвестен';
      const year = book.first_publish_year || '—';
      const coverId = book.cover_i;
      const coverUrl = coverId
        ? `https://covers.openlibrary.org/b/id/${coverId}-M.jpg`
        : 'https://via.placeholder.com/120x180?text=Обложка';
      const olLink = `https://openlibrary.org${book.key}`;
  
      resultDiv.innerHTML = `
        <div style="text-align: center;">
          <img src="${coverUrl}" alt="${title}" style="max-width:120px; border-radius:4px; margin-bottom:16px;">
          <h2>${title}</h2>
          <div class="result-item">
            <label>Автор:</label>
            <span>${author}</span>
          </div>
          <div class="result-item">
            <label>Год:</label>
            <span>${year}</span>
          </div>
          <a href="${olLink}" target="_blank" class="btn">Открыть в Open Library</a>
        </div>
      `;
    } catch (error) {
      console.error('Ошибка:', error);
      resultDiv.innerHTML = '<p>Произошла ошибка. Проверьте подключение.</p>';
    }
  });