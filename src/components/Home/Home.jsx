import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { getTrending } from "utils/API";
import { List, NavItem, ListNavItem } from "./Home.styled";

const Home = () => {
    const [movies, setMovies] = useState([]);
    const location = useLocation();

    useEffect(() => {
        getTrending().then(movies => setMovies(movies.results));
    }, [])
    
    return (<> 
            <nav>
             <ListNavItem>
               <li><NavItem to="/">Home</NavItem></li>
               <li><NavItem to="/movies">Movies</NavItem></li>
             </ListNavItem>   
           </nav>
           <h1>Trending today</h1>
             <List>
              {movies.length > 0 && movies.map(({title, id}) => {
                return <li key={id}>
                  <Link to={`/movies/${id}`} state={{ from: location }}>{title}</Link>
                </li>
              })}    
        </List>
            </>)
}

export default Home;