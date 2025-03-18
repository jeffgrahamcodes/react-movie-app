import './App.css';
import './styles.css';

import Header from './components/Header';
import MovieGrid from './components/MovieGrid';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <MovieGrid />
      </div>
      <Footer />
    </div>
  );
}

export default App;
