import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GetMovieCast } from "../../api";

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
        <ul>
            {cast.map(({ id, name, profile_path, character }) => (
                <li key={id}>
                    <h2>{name}</h2>
                    <img src={`https://image.tmdb.org/t/p/w200/${profile_path}`}>
                    </img>
                    
                    <h3>{character }</h3>
                </li>
            ))}
        </ul>
    )
}


export default MovieCast