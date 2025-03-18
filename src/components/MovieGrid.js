import React, { useState } from 'react';
import '../styles.css';
import MovieCard from './MovieCard';

export default function MovieGrid({
  movies,
  watchlist,
  toggleWatchList,
}) {
  const [searchTerm, setSearchTerm] = useState('');
  const [genre, setGenre] = useState('All Genres');
  const [rating, setRating] = useState('All');

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleGenreChange = (e) => {
    setGenre(e.target.value);
  };

  const handleRatingChange = (e) => {
    setRating(e.target.value);
  };

  const getGenreMatches = (movie, genre) => {
    return (
      genre === 'All Genres' ||
      movie.genre.toLowerCase() === genre.toLowerCase()
    );
  };

  const getSearchTermMatches = (movie, searchTerm) => {
    return movie.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
  };

  const getRatingMatches = (movie, rating) => {
    switch (rating) {
      case 'All':
        return true;
      case 'Good':
        return movie.rating >= 8;
      case 'Ok':
        return movie.rating > 5 && movie.rating < 8;
      case 'Bad':
        return movie.rating < 5;
      default:
        return false;
    }
  };

  const filteredMovies = movies.filter(
    (movie) =>
      getGenreMatches(movie, genre) &&
      getRatingMatches(movie, rating) &&
      getSearchTermMatches(movie, searchTerm)
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
          <label>Genre</label>
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
          <label>Rating</label>
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
          <MovieCard
            key={movie.id}
            movie={movie}
            toggleWatchList={toggleWatchList}
            isWatchListed={watchlist.includes(movie.id)}
          />
        ))}
      </div>
    </>
  );
}
