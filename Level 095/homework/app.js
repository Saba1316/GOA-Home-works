class Book {
    constructor(title, author, status = "Unread") {
        this.title = title;
        this.author = author;
        this.status = status;
    }

    toggleStatus() {
        this.status = this.status === "Unread" ? "Read" : "Unread";
    }
}

// LocalStorage Helper Functions
function getLibraryFromLocalStorage() {
    const library = JSON.parse(localStorage.getItem('library')) || [];
    return library;
}

function saveLibraryToLocalStorage(library) {
    localStorage.setItem('library', JSON.stringify(library));
}

// Render Book List
function renderBookList(books) {
    const bookList = document.getElementById('book-list');
    bookList.innerHTML = ''; // Clear previous content
    books.forEach((book, index) => {
        const bookCard = document.createElement('div');
        bookCard.classList.add('book-card');
        bookCard.innerHTML = `
            <h3>${book.title}</h3>
            <p>${book.author}</p>
            <p>Status: ${book.status}</p>
            <button onclick="addToLibrary(${index})">Add to Library</button>
        `;
        bookList.appendChild(bookCard);
    });
}

// Render Library List
function renderLibraryList() {
    const library = getLibraryFromLocalStorage();
    const libraryList = document.getElementById('library-list');
    libraryList.innerHTML = ''; // Clear previous content
    library.forEach((book, index) => {
        const libraryCard = document.createElement('div');
        libraryCard.classList.add('library-card');
        libraryCard.innerHTML = `
            <h3>${book.title}</h3>
            <p>${book.author}</p>
            <p>Status: ${book.status}</p>
            <button onclick="removeFromLibrary(${index})">Remove from Library</button>
        `;
        libraryList.appendChild(libraryCard);
    });
}

// Add book to Library
function addToLibrary(bookIndex) {
    const books = [
        new Book('The Great Gatsby', 'F. Scott Fitzgerald'),
        new Book('1984', 'George Orwell'),
        new Book('To Kill a Mockingbird', 'Harper Lee'),
        // Add more books here
    ];

    const bookToAdd = books[bookIndex];
    const library = getLibraryFromLocalStorage();
    library.push(bookToAdd);
    saveLibraryToLocalStorage(library);
    renderLibraryList();
}

// Remove book from Library
function removeFromLibrary(bookIndex) {
    const library = getLibraryFromLocalStorage();
    library.splice(bookIndex, 1);
    saveLibraryToLocalStorage(library);
    renderLibraryList();
}

// Initialize app
function initializeApp() {
    const books = [
        new Book('The Great Gatsby', 'F. Scott Fitzgerald'),
        new Book('1984', 'George Orwell'),
        new Book('To Kill a Mockingbird', 'Harper Lee'),
        // Add more books here
    ];

    renderBookList(books);
    renderLibraryList();
}

initializeApp();
