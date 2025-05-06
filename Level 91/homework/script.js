document.getElementById('searchForm').addEventListener('submit', async function(event) {
    event.preventDefault();
    let searchTerm = document.getElementById('searchInput').value.trim();
    if (!searchTerm) {
        // Show a message if search term is empty
        document.getElementById('results').innerHTML = '<p>გთხოვთ შეიყვანოთ სასურველი საძიებო სიტყვა.</p>';
        return;
    }

    try {
        let response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchTerm}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        let data = await response.json();
        await displayBooks(data.items);
    } catch (error) {
        // Handle errors like network issues
        document.getElementById('results').innerHTML = '<p>სერვერთან დაკავშირება ვერ მოხერხდა. სცადეთ მოგვიანებით.</p>';
    }
});

async function displayBooks(books) {
    let resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '';

    if (!books || books.length === 0) {
        resultsDiv.innerHTML = '<p>ვერ მოიძებნა წიგნები.</p>';
        return;
    }

    for (let book of books) {
        let info = book.volumeInfo;
        let bookDiv = document.createElement('div');
        bookDiv.className = 'book';
        bookDiv.innerHTML = `
            <img src="${info.imageLinks?.thumbnail || 'https://via.placeholder.com/128x192'}" alt="${info.title}">
            <h3>${info.title}</h3>
            <p><strong>ავტორი:</strong> ${info.authors?.join(', ') || 'უცნობი'}</p>
            <p><strong>გამოშვების წელი:</strong> ${info.publishedDate || 'უცნობი'}</p>
            <p><strong>გვერდები:</strong> ${info.pageCount || 'უცნობი'}</p>
            <p><strong>აღწერა:</strong> ${await truncateDescription(info.description || 'აღწერა არ არის')}</p>
        `;
        resultsDiv.appendChild(bookDiv);
    }
}

async function truncateDescription(description) {
    const maxLength = 100;
    if (description.length > maxLength) {
        // Ensure the description doesn't cut off in the middle of a word
        let truncated = description.substring(0, maxLength);
        let lastSpaceIndex = truncated.lastIndexOf(' ');
        if (lastSpaceIndex > 0) {
            truncated = truncated.substring(0, lastSpaceIndex);
        }
        return truncated + '...';
    }
    return description;
}
