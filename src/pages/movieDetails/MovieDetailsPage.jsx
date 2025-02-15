import { useEffect, useRef, useState } from "react";
import { Link, NavLink, Outlet, useLocation, useParams } from "react-router-dom"
import { GetDetailsFromMovie } from "../../api";

function MovieDetail() {
    const [movie, setMovie] = useState(null);
    const { movieId } = useParams();
    const location = useLocation();
    const dataLocation = useRef(location.state)
    
    

    useEffect(() => {

        const getData = async () => {
            try {
                const data = await GetDetailsFromMovie(movieId);
                setMovie(data);
            }
            catch  {
                console.log('whats going on here?');
            }
        }
        getData();
    }, [movieId])

     if (!movie) {
        return <div>Loading...</div>; 
    }
    const { genres, original_title, overview, poster_path,  vote_average  } = movie;



    return (
        <>
    
            <Link to={dataLocation.current}
                style={{
                 
                 position: 'absolute',
                 top: '0',
                }}>
                Go back</Link>

            <img alt="Movie Poster" src={`https://image.tmdb.org/t/p/w300/${poster_path}`}></img>
            <h1>{original_title}</h1>
            <p>User Score : {vote_average}%</p>
            <h2>Overview</h2>
            <p>{overview}</p>
            <h2>Genres</h2>
            <ul>
                {genres.map((genre) => (
                    <li key={genre.id}>{genre.name}</li> 
                ))}
            </ul>

            <h3>Additional information</h3>
            <ul>
                <li>
                    <NavLink to = 'cast'>Cast</NavLink>
                </li>
                <li>
                    <NavLink to = 'reviews'>Reviews</NavLink>
                </li>
            </ul>
             <Outlet />
        </>
    )







}


export default MovieDetail
















































































