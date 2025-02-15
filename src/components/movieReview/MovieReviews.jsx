import { useEffect, useState } from "react"
import { GetMovieReviews } from "../../api";
import { useParams } from "react-router-dom";

function MovieReviews() {
    const [reviews, setReviews] = useState(null);
    const { movieId } = useParams();

   useEffect(() => {

        const getData = async () => {
            try {
                const data = await GetMovieReviews(movieId);
                setReviews(data);
            }
            catch  {
                console.log('whats going on here?');
            }
        }
        getData();
    }, [movieId])
    
    if (!reviews) {
        return <div>We dont have any reviews for this movie</div>; 
    }

    const { id, author, content } = reviews;
    return (
        <>
        <ul>
                {reviews.map(() => (
                    <li key={id}>
                        <h3>{author}</h3>
                        <p>{ content}</p>
                    </li>
                ))}
        </ul>
        
        </>
    )
}


export default MovieReviews