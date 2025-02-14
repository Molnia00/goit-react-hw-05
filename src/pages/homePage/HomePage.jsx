import { NavLink } from "react-router-dom"
import MovieList from '../../components/movieList/MovieList'
import { useEffect, useState } from "react"
import {GetPopularMovie} from '../../api'

function HomePage() {

    const [photoOfMovies, setPhotoOfMovies] = useState([]);

    useEffect(() => {
        const getData = async () => {
            try {
                const data = await GetPopularMovie();
                setPhotoOfMovies(data);
            }
            catch  {
                console.log('whats going on here?');
            }
        }
        getData();
    }, [])

    return (
        <>
            <h1>Trending today</h1>
        
            <MovieList movies={photoOfMovies} />
        </>
    )
}




export default HomePage
