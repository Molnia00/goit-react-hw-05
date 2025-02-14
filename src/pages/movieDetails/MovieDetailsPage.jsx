import { useEffect, useRef, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom"
import { GetDetailsFromMovie } from "../../api";

function MovieDetail() {
    const [movie, setMovie] = useState(null);
    const { movieId } = useParams();
    const location = useLocation();
    const dataLocation = useRef(location.state)
    
    

    useEffect(() => {
         if (!movieId) return;
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

    const { genres, original_title, overview, poster_path,  vote_average  } = movie;



    return (
        <>
    
            <Link to={dataLocation.current}>Go back</Link>

            <img alt="Movie Poster" src={`https://image.tmdb.org/t/p/w500/${poster_path}`}></img>
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
        </>
    )







}


export default MovieDetail
















































































