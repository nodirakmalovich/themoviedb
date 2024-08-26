import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DashboardLayout from "./layouts/DashboardLayout"
import './App.css';
import Home from './pages/Home/Home';
import '@fontsource/source-sans-pro';
import SearchedMovies from './pages/searchedMovies/searchedMovies';
import MoviesPages from './pages/Movies/movies';
import { Provider } from 'react-redux';
import { store } from './store/store';
import NowPlayingMovies from './pages/NowPlayingMovie/nowPlayingMovie';
import Upcoming from './pages/upcoming/upcoming';
import Toprated from './pages/TopRated/TopRated';
import TvPopular from './pages/TvPopular/TvPopular';
import TvAiringToday from './pages/TvAiringToday/TvAiringToday';
import TvOnTheAir from './pages/TvOnTheAir/TvOnTheAir';
import TvTopRated from './pages/TvTopRated/TvTopRated';
import PeopleData from './pages/People/People';
import SingleMovie from './pages/SingleMovie/singleMovie';
import SingleTvSeries from './pages/singleTvSeries/singleTvSeries';
import SinglePerson from './pages/singlePerson/singlePerson';

function App() {
  return <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route element={<DashboardLayout />}>
          <Route path='/' element={<Home />} />
          <Route path='/search' element={<SearchedMovies />} />
          <Route path='/movie' element={<MoviesPages />} />
          <Route path='/movie/now-playing' element={<NowPlayingMovies />} />
          <Route path='/movie/upcoming' element={<Upcoming />} />
          <Route path='/movie/top-rated' element={<Toprated />} />
          <Route path='/tv' element={<TvPopular />} />
          <Route path='/tv/airing-today' element={<TvAiringToday />} />
          <Route path='/tv/on-the-air' element={<TvOnTheAir />} />
          <Route path='/tv/top-rated' element={<TvTopRated />} />
          <Route path='/person' element={<PeopleData />} />
          <Route path='/movie-info/:movieId' element={<SingleMovie />} />
          <Route path='/tv-info/:movieId' element={<SingleTvSeries />} />
          <Route path='/person/:movieId' element={<SinglePerson />} />

        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>

}

export default App;
