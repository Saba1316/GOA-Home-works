import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


import React from 'react';
import MovieCard from './components/MovieCard';

// Sample movie data
const movies = [
  {
    id: 1,
    title: 'Inception',
    image: 'https://m.media-amazon.com/images/I/51kLhU+aAUL._AC_SY679_.jpg',
    description: 'A mind-bending thriller where dreams become reality.',
    rating: '8.8',
    genre: 'Sci-Fi',
    releaseDate: '2010',
  },
  {
    id: 2,
    title: 'Interstellar',
    image: 'https://m.media-amazon.com/images/I/71yRr1+0hPL._AC_SY679_.jpg',
    description: 'A team of explorers travel through a wormhole in space.',
    rating: '8.6',
    genre: 'Adventure, Drama, Sci-Fi',
    releaseDate: '2014',
  },
  {
    id: 3,
    title: 'The Dark Knight',
    image: 'https://m.media-amazon.com/images/I/71pox7eM1eL._AC_SY679_.jpg',
    description: 'Batman faces the Joker in a fight for Gotham.',
    rating: '9.0',
    genre: 'Action, Crime, Drama',
    releaseDate: '2008',
  },
];

function App() {
  return (
    <div style={{ display: 'grid', gap: '20px', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', padding: '20px' }}>
      {movies.map((movie) => (
        <MovieCard key={movie.id} {...movie} />
      ))}
    </div>
  );
}

export default App;
