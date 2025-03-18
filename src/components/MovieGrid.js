import React, { useState, useEffect } from 'react';
import '../styles.css';
import MovieCard from './MovieCard';

export default function MovieGrid() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [genre, setGenre] = useState('All Genres');
  const [rating, setRating] = useState('All');

  useEffect(() => {
    fetch('movies.json')
      .then((res) => res.json())
      .then((data) => setMovies(data));
  }, []);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <input
        className="search-input"
        type="text"
        placeholder="Search movies.."
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <div className="filter-bar">
        <div className="filter-slot">
          <label htmlFor="">Genre</label>
          <select className="filter-dropdown" name="" id="">
            <option value="">All Genres</option>
            <option value="">Action</option>
            <option value="">Drama</option>
            <option value="">Fantasy</option>
            <option value="">Horror</option>
          </select>
        </div>
        <div className="filter-slot">
          <label htmlFor="">Rating</label>
          <select className="filter-dropdown" name="" id="">
            <option value="">All</option>
            <option value="">Good</option>
            <option value="">Ok</option>
            <option value="">Bad</option>
          </select>
        </div>
      </div>
      <div className="movies-grid">
        {filteredMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </>
  );
}
