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
            <Route path="/" element={<MovieGrid />} />
            <Route path="/watchlist" element={<WatchList />} />
          </Routes>
        </Router>
      </div>
      <Footer />
    </div>
  );
}

export default App;
