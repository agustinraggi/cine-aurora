import './App.css';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './pages/home/home';
import MovieList from './components/movieList/movieList';
import Movie from './pages/movieDetail/movie';
import User from './pages/form/crudUser';

function App() {
  return (
      <div className="App">
        <Router>
          <Header />
          <Routes>
            <Route index element={<Home />}></Route>
            <Route path="movie/:id" element={<Movie />}></Route>
            <Route path="movies/:type" element={<MovieList />}></Route>
            <Route path='crudUser' element={<User />}></Route>
            <Route path="/*" element={<h1>Error Page</h1>}></Route>
          </Routes>
          <Footer />
        </Router>
      </div>
  );
}

export default App;
