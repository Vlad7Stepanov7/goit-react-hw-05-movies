import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

const Home = lazy(() => import("components/Home"));
const Movies = lazy(() => import("components/Movies"));
const MovieDetails = lazy(() => import("components/MovieDetails"));
const Cast = lazy(() => import("components/Cast"));
const Reviews = lazy(() => import("components/Reviews"))

export const App = () => {
  return (
    <Suspense>
      <Routes>
        <Route path="/" element={<Home />} />
         <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews/>}/>
          </Route>
        <Route path="*" element={"Address is not find"} />
      </Routes>
      </Suspense>
  );
};
