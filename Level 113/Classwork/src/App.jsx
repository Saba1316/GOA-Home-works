import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import React from "react";
import MovieCard from "./components/MovieCard";

const movieData = [
  {
    id: 1,
    title: "Inception",
    image: "https://m.media-amazon.com/images/I/51s+8PCQ8nL._AC_.jpg",
    shortDescription: "A thief who steals corporate secrets through dream-sharing.",
    rating: "8.8",
    genre: "Sci-Fi, Action",
    releaseDate: "2010-07-16"
  },
  {
    id: 2,
    title: "Interstellar",
    image: "https://m.media-amazon.com/images/I/91kFYg4fX3L._AC_SL1500_.jpg",
    shortDescription: "A team of explorers travel through a wormhole in space.",
    rating: "8.6",
    genre: "Sci-Fi, Drama",
    releaseDate: "2014-11-07"
  },
  {
    id: 3,
    title: "The Dark Knight",
    image: "https://m.media-amazon.com/images/I/51c6S4kGFmL._AC_.jpg",
    shortDescription: "Batman faces the Joker, a criminal mastermind.",
    rating: "9.0",
    genre: "Action, Crime, Drama",
    releaseDate: "2008-07-18"
  }
];

export default function App() {
  return (
    <div>
      {movieData.map(movie => (
        <MovieCard
          key={movie.id}
          title={movie.title}
          image={movie.image}
          shortDescription={movie.shortDescription}
          rating={movie.rating}
          genre={movie.genre}
          releaseDate={movie.releaseDate}
        />
      ))}
    </div>
  );
}
