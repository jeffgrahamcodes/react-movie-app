# MovieFinder

MovieFinder is a web application that allows users to search, browse, and manage a watchlist of movies. The app provides filtering options based on genre and rating, and allows users to add or remove movies from their personal watchlist.

## Features

- **Movie Search:** Search movies by title.
- **Genre & Rating Filters:** Filter movies based on genre and user ratings.
- **Watchlist Management:** Add and remove movies from your personal watchlist.
- **Dynamic UI:** Responsive and interactive movie cards.

## Components

### 1. Header

Displays the application logo and a subtitle.

- Located in `Header.js`

### 2. Footer

Displays copyright information.

- Located in `Footer.js`

### 3. MovieGrid

Displays a grid of movies that users can filter and search through.

- Located in `MovieGrid.js`
- Includes search, genre, and rating filtering options.

### 4. MovieCard

Displays individual movie details, including title, genre, rating, and a watchlist toggle.

- Located in `MovieCard.js`

### 5. WatchList

Displays movies that have been added to the watchlist.

- Located in `WatchList.js`

## Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/jeffgrahamcodes/react-movie-app.git
   cd react-movie-app
   ```

2. Install dependencies:

   ```sh
   npm install
   ```

3. Start the development server:
   ```sh
   npm start
   ```

## Usage

- Use the search bar to find movies by title.
- Use the dropdown filters to narrow down movies by genre and rating.
- Click on the watchlist toggle to add or remove movies from your watchlist.

## Technologies Used

- React.js
- CSS for styling

## License

This project is licensed under the MIT License.
