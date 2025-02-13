import { Link, useLocation } from 'react-router-dom'
 

const MovieList = ({ movies }) => {

    location = useLocation()
    return (
        <ul>
            {movies.map(movie => (
                <li key={movie.id}>
                    <Link to={`/movies/${movie.id}`} state={location} >
                    </Link>
                </li>
            ))}
        </ul>
    )
}

export default MovieList