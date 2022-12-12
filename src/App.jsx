import { Routes, Route } from "react-router-dom";
import Home from "components/Home/Home";
import Movies from "components/Movies";
import MovieDetails from "components/MovieDetails";
import Cast from "components/Cast";
import Reviews from "components/Reviews";


export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
         <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews/>}/>
          </Route>
        <Route path="*" element={"Address is not find"} />
      </Routes>
    </div>
  );
};
