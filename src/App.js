import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DashboardLayout from "./layouts/DashboardLayout"
import './App.css';
import Home from './pages/Home/Home';
import '@fontsource/source-sans-pro';
import SearchedMovies from './pages/searchedMovies/searchedMovies';
import MoviesPages from './pages/Movies/movies';

function App() {
  return <BrowserRouter>
    <Routes>
      <Route element={<DashboardLayout />}>
        <Route path='/' element={<Home />} />
        <Route path='/movies' element={<h2>Movies page</h2>} />
        <Route path='/search' element={<SearchedMovies />} />
        <Route path='/movie' element={<MoviesPages />} />

      </Route>
    </Routes>
  </BrowserRouter>
}

export default App;
