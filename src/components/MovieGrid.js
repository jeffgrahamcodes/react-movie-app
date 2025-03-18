import React, { useState, useEffect } from 'react';
import '../styles.css';
import MovieCard from './MovieCard';

export default function MovieGrid() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch('movies.json')
      .then((res) => res.json())
      .then((data) => setMovies(data));
  }, []);

  return (
    <div className="movies-grid">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}
