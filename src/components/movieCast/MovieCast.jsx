import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GetMovieCast } from "../../api";
import MovieList from "../movieList/MovieList";

function MovieCast() {
    
    const [cast, setCast] = useState(null);
    const { movieId } = useParams();


    useEffect(() => {

        const getData = async () => {
            try {
                const data = await GetMovieCast(movieId);
                setCast(data.cast);
            }
            catch  {
                console.log('whats going on here?');
            }
        }
        getData();
    }, [movieId])

    if (!cast) {
        return <p>No cast information available.</p>;
    }

    return (
        <MovieList/>
    )
}


export default MovieCast