import React, { useState, useEffect } from 'react';
import '../styles.css';

export default function MovieGrid() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch('movies.json')
      .then((res) => res.json())
      .then((data) => setMovies(data));
  }, []);

  return <div>{movies.length}</div>;
}
