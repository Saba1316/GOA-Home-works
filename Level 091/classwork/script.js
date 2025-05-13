document.getElementById('searchForm').addEventListener('submit', async function(event) {
    event.preventDefault();
    let searchTerm = document.getElementById('searchInput').value.trim();
    if (!searchTerm) return;
    let response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchTerm}`);
    let data = await response.json();
    displayBooks(data.items);
});

function displayBooks(books) {
    let resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '';
    if (!books) {
        resultsDiv.innerHTML = '<p>ვერ მოიძებნა წიგნები.</p>';
        return;
    }
    books.forEach(book => {
        let info = book.volumeInfo;
        let bookDiv = document.createElement('div');
        bookDiv.className = 'book';
        bookDiv.innerHTML = `
            <img src="${info.imageLinks?.thumbnail || 'https://via.placeholder.com/128x192'}" alt="${info.title}">
            <h3>${info.title}</h3>
            <p><strong>ავტორი:</strong> ${info.authors?.join(', ') || 'უცნობი'}</p>
            <p><strong>გამოშვების წელი:</strong> ${info.publishedDate || 'უცნობი'}</p>
            <p><strong>გვერდები:</strong> ${info.pageCount || 'უცნობი'}</p>
            <p><strong>აღწერა:</strong> ${info.description ? info.description.substring(0, 100) + '...' : 'აღწერა არ არის'}</p>
        `;
        resultsDiv.appendChild(bookDiv);
    });
}