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

  const handleGenreChange = (e) => {
    setGenre(e.target.value);
  };

  const handleRatingChange = (e) => {
    setRating(e.target.value);
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
          <select
            className="filter-dropdown"
            name=""
            id=""
            value={genre}
            onChange={handleGenreChange}
          >
            <option value="All Genres">All Genres</option>
            <option value="Action">Action</option>
            <option value="Drama">Drama</option>
            <option value="Fantasy">Fantasy</option>
            <option value="Horror">Horror</option>
          </select>
        </div>
        <div className="filter-slot">
          <label htmlFor="">Rating</label>
          <select
            className="filter-dropdown"
            name=""
            id=""
            value={rating}
            onChange={handleRatingChange}
          >
            <option value="All">All</option>
            <option value="Good">Good</option>
            <option value="Ok">Ok</option>
            <option value="Bad">Bad</option>
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
