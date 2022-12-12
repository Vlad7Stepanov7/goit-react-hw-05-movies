import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMovieReviews } from "utils/API";

const Reviews = () => {
    const { movieId } = useParams();
    const [reviews, setReviews] = useState(null);
    
    useEffect(() => {
        getMovieReviews(movieId).then(setReviews);
    }, [movieId])
    
    if (!reviews) {
        return null
    }

    if (reviews.results.length === 0) {
        return "We don't have any reviews for this movie"
    }
    
    return (
    
    <ul>
        {reviews.results.map(({author, content}) => {
            return <li key={author}>
                <p>{author}</p>
                <p>{content}</p>
            </li>
        })}
     </ul>
 )
}

export default Reviews;