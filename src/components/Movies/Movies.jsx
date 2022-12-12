import { getSearchMovies } from "utils/API";
import { useForm } from "react-hook-form";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import { ListNavItem, NavItem, ContainerForm, List } from "./Movies.styled";
import { useState, useEffect } from "react";

const Movies = () => {
  const { register, handleSubmit, resetField } = useForm({
    defaultValues: {
      searchQuery: '',
    }
  });

  const location = useLocation();
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query") ?? '';

  useEffect(() => {
      if (query === '') {
        return
    }

    getSearchMovies(query).then(movies => setMovies(movies.results))
  }, [query])

  const onSubmit = query => {
    const { searchQuery } = query;
    setSearchParams({ query: searchQuery })
    
    resetField("searchQuery");
    }
    
    return (
        <>
        <header>
           <nav>
            <ListNavItem>
              <li><NavItem to="/">Home</NavItem></li>
              <li><NavItem to="/movies">Movies</NavItem></li>
            </ListNavItem>   
          </nav>
        </header>

       <ContainerForm>    
    <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("searchQuery")} />
            <button type="submit">Search</button>
    </form>
        </ContainerForm>

        <List>
          {movies.length > 0 && 
           movies.map(({title, id}) => {
             return <li key={id}>
               <Link to={`/movies/${id}`} state={{ from: location }}>{title}</Link>
             </li>
            })}
        </List>
            </>
 )
}

export default Movies;