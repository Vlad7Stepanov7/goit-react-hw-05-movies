const KEY = "aaf79569db7508d9603d7e27ccd5678a";
const BASE_URL = "https://api.themoviedb.org/3";

export const getTrending = () => {
    return fetch(`${BASE_URL}/trending/movie/week?api_key=${KEY}`).then(response => {
       if (!response.ok) {
           throw new Error(response.status);
        }
        return response.json();
   })
}

export const getDetailsMovieById = (id) => {
    return fetch(`${BASE_URL}/movie/${id}?api_key=${KEY}&language=en-US`).then(response => {
       if (!response.ok) {
           throw new Error(response.status);
        }
        return response.json();
   })
}

export const getSearchMovies = (query) => {
    return fetch(`${BASE_URL}/search/movie?api_key=${KEY}&query=${query}&language=en-US&page=1&include_adult=false`).then(response => {
       if (!response.ok) {
           throw new Error(response.status);
        }
        return response.json();
   })
}

export const getMovieCredits = (id) => {
   return fetch(`${BASE_URL}/movie/${id}/credits?api_key=${KEY}&language=en-US`).then(response => {
       if (!response.ok) {
           throw new Error(response.status);
        }
        return response.json();
   })
}

export const getMovieReviews = (id) => {
    return fetch(`${BASE_URL}/movie/${id}/reviews?api_key=${KEY}&language=en-US`).then(response => {
       if (!response.ok) {
           throw new Error(response.status);
        }
        return response.json();
   })
}