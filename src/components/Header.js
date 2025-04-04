import React from 'react';
import '../styles.css';

export default function Header() {
  return (
    <div className="header">
      <img src="logo.png" className="logo" alt="MovieFinder logo" />
      <h2 className="app-subtitle">
        It's time for 🍿! Find you next movie here.
      </h2>
    </div>
  );
}
