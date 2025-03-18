import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from 'react-router-dom';

import Header from './components/Header';
import MovieGrid from './components/MovieGrid';
import Footer from './components/Footer';
import WatchList from './components/WatchList';
import './App.css';
import './styles.css';

function App() {
  const [movies, setMovies] = useState([]);
  const [watchlist, setWatchList] = useState([]);

  useEffect(() => {
    fetch('movies.json')
      .then((res) => res.json())
      .then((data) => setMovies(data));
  }, []);

  const toggleWatchList = (movieId) => {
    setWatchList((prev) =>
      prev.includes(movieId)
        ? prev.filter((id) => id !== movieId)
        : [...prev, movieId]
    );
  };

  return (
    <div className="App">
      <div className="container">
        <Header />
        <Router>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/watchlist">Watchlist</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route
              path="/"
              element={
                <MovieGrid
                  movies={movies}
                  watchlist={watchlist}
                  toggleWatchList={toggleWatchList}
                />
              }
            />
            <Route
              path="/watchlist"
              element={
                <WatchList
                  watchlist={watchlist}
                  movies={movies}
                  toggleWatchList={toggleWatchList}
                />
              }
            />
          </Routes>
        </Router>
      </div>
      <Footer />
    </div>
  );
}

export default App;
