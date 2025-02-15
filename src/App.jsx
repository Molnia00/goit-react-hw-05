
import Navigation from './components/navigation/Navigation'
import './App.css'
import { Route, Routes, NavLink } from 'react-router-dom'
import { lazy, Suspense } from 'react'

const MovieCast= lazy(() => import('./components/movieCast/MovieCast.jsx'));
const HomePage= lazy(() => import('./pages/homePage/HomePage.jsx'));
const MoviePages= lazy(() => import('./pages/moviesPage/MoviesPage.jsx'));
const MovieDetail= lazy(() => import('./pages/movieDetails/MovieDetailsPage.jsx'));
const MovieReviews= lazy(() => import('./components/movieReview/MovieReviews.jsx'));
const NotFoundPage= lazy(() => import('./pages/notFound/NotFoundPage.jsx'));




function App() {



  return (
    <>
      

      <Navigation/>

      <Suspense fallback={<>loading...</>}>
      <Routes>
        <Route path='/' element={< HomePage />} />
        <Route path='/movie' element={<MoviePages />} />

        <Route path='/movies/:movieId' element={<MovieDetail />} >
          <Route path='reviews' element={<MovieReviews/> } />
          <Route path='cast' element={ <MovieCast/>}/>
        </Route>

        </Routes>
      </Suspense>
    </>
  )
}

export default App































































