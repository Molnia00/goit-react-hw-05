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
                setReviews(data.results);
            }
            catch  {
                console.log('whats going on here?');
            }
        }
        getData();
    }, [movieId])
    
    if (!reviews) {
        return <p>We dont have any reviews for this movie</p>; 
    }

    return (
        <>
        <ul>
            {reviews.length === 0 ? (
                <p>No reviews available.</p>
            ) : (
                reviews.map(({ author, content, id }) => (
                    <li key={id}>
                        <h2>{author}</h2>
                        <p>{content}</p>
                    </li>
                ))
            )}
        </ul>
        
        </>
    )
}


export default MovieReviews