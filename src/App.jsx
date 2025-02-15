import HomePage from './pages/homePage/HomePage'
import MoviePages from './pages/moviesPage/MoviesPage'
import Navigation from './components/navigation/Navigation'
//import NotFoundPage from './pages/NotFoundPage'

import MovieDetail from './pages/movieDetails/MovieDetailsPage'
import './App.css'
import { Route, Routes, NavLink } from 'react-router-dom'
import MovieCast from './components/movieCast/MovieCast'
import MovieReviews from './components/movieReview/MovieReviews'

function App() {



  return (
    <>
      

      <Navigation/>

      <Routes>
        <Route path='/' element={< HomePage />} />
        <Route path='/movie' element={<MoviePages />} />

        <Route path='/movies/:movieId' element={<MovieDetail />} >
          <Route path='reviews' element={<MovieReviews/> } />
          <Route path='cast' element={ <MovieCast/>}/>
        </Route>

      </Routes>
    </>
  )
}

export default App































































