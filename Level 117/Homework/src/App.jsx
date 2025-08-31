import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
 


import React, { useState, useEffect } from "react";

function App() {
  const [genre, setGenre] = useState("");
  const [books, setBooks] = useState([]);

  useEffect(() => {
    if (genre.trim() === "") return;

    const fetchBooks = async () => {
      try {
        const response = await fetch(
          `https://www.googleapis.com/books/v1/volumes?q=subject:${genre}`
        );
        const data = await response.json();
        setBooks(data.items || []);
      } catch (error) {
        console.error("Failed to fetch books:", error);
        setBooks([]);
      }
    };

    fetchBooks();
  }, [genre]);

  const handleInputChange = (e) => {
    setGenre(e.target.value);
  };

  return (
    <div>
      <h1>Book Genre Search</h1>
      <input
        type="text"
        placeholder="Type a genre (e.g. fantasy, history)"
        onChange={handleInputChange}
      />

      <div>
        {books.length === 0 && genre && <p>No books found.</p>}
        {books.map((book) => {
          const info = book.volumeInfo;
          return (
            <div key={book.id}>
              <h3>{info.title}</h3>
              <p>
                Author(s): {info.authors ? info.authors.join(", ") : "Unknown"}
              </p>
              {info.imageLinks?.thumbnail && (
                <img src={info.imageLinks.thumbnail} alt={info.title} />
              )}
              <hr />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;