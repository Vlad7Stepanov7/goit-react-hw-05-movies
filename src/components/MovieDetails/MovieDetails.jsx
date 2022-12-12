import { useState, useEffect } from "react";
import { useParams, Link, useLocation, Outlet } from "react-router-dom";
import { getDetailsMovieById } from "utils/API";
import { Description, Title, ButtonBack, ListNavItem, NavItem, Poster } from "./MovieDetails.styled";

const MovieDetails = () => {
    const {movieId} = useParams();
    const [movieDetails, setMovieDetails] = useState(null);
    const location = useLocation();

    useEffect(() => {
        getDetailsMovieById(movieId).then(setMovieDetails);
    }, [movieId])
     
    if (!movieDetails) {
        return null
    }
   
    const { vote_average, title, overview, release_date, genres, backdrop_path } = movieDetails;
    
    const releaseYear = release_date.slice(0, 4);
    const genresMovie = genres.map(genre => genre.name);
    const defaultProfile = "https://moscowseasons.com/uploads/2018/10/17/5bc6fa21867b7.jpg";
    
    const backLinkHref = location.state?.from ?? '/'
    
  return <div>
      <header>
            <nav>
              <ListNavItem>
                <li><NavItem to="/">Home</NavItem></li>
                <li><NavItem to="/movies">Movies</NavItem></li>
              </ListNavItem>   
      </nav>
      </header>
        <ButtonBack type="button">
            <Link to={backLinkHref}>Go back</Link>
        </ButtonBack>
    
        <Description>
          <Poster src={backdrop_path === null ?
                  defaultProfile :
                 `https://image.tmdb.org/t/p/w500${backdrop_path}`} alt={title} />
         <div>
            <Title>{title}({releaseYear})</Title>
            <p>User Score: {vote_average}</p>
            <Title>Overview</Title>
            <p>{overview}</p>
            <Title>Genres</Title>     
            <p>
                {genresMovie.join(", ")}
          </p>
         </div>
    </Description>
    
             <ul>
               <li><Link to="cast" state={{from: location.state.from}}>Cast</Link></li>
               <li><Link to="reviews" state={{from: location.state.from}}>Reviews</Link></li>
             </ul>
            <Outlet/>
           </div>
    }
    


export default MovieDetails;