import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMovieCredits } from "utils/API";

const Cast = () => {
    const { movieId } = useParams();
    const [credits, setCredits] = useState(null);
    
    useEffect(() => {
        getMovieCredits(movieId).then(setCredits);
    }, [movieId])
    
    if (!credits) {
        return null
    }

    const defaultProfile = "https://thumbs.dreamstime.com/z/%D1%82%D1%80%D0%BE%D1%84%D0%B5%D0%B9-%D0%BD%D0%B0%D0%B3%D1%80%D0%B0%D0%B4%D1%8B-%D0%B7%D0%BE%D0%BB%D0%BE%D1%82%D0%B0-%D1%81-%D0%BA%D0%B8%D0%BD%D0%BE-%D1%84%D0%B8%D0%BB%D1%8C%D0%BC%D0%B0-%D0%BF%D1%80%D0%BE%D0%BA%D0%BB%D0%B0%D0%B4%D0%BA%D0%B8-%D0%B0%D0%BA%D1%82%D0%B5%D1%80%D0%B0-%D0%BB%D0%B0%D0%B2%D1%80%D0%B0-%D1%81%D0%B0%D0%BC%D1%8B%D0%BC-110050370.jpg";

 return (
     <ul>
         {credits.cast.map(({profile_path, character, name, id}) => {
             return <li key={id}>
                 <img src={profile_path === null ?
                     defaultProfile :
                     `https://image.tmdb.org/t/p/w500${profile_path}`}
                     alt={name} width="150px" height="200px" />
                 <p>{name}</p>
                 <p>Character: {character}</p>
             </li>
         })}
     </ul>
 )
}

export default Cast;