import HomePage from './pages/HomePage'
import MoviePages from './pages/MoviesPage'
import Navigation from './components/Navigation'
//import NotFoundPage from './pages/NotFoundPage'


import './App.css'
import { Route, Routes, NavLink } from 'react-router-dom'

function App() {

  








  return (
    <>
      

      <Navigation/>

      <Routes>
      
        <Route path="/" element={< HomePage />} />
        <Route path="/movie" element={<MoviePages />} />

      </Routes>
    </>
  )
}

export default App































































