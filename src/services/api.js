const API_KEY = "c452b29b53f1fee6cf4038b554fc35d0" ;
const BASE_URL = "https://api.themoviedb.org/3";


export const getPopularMovies = async () => {
  const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
  const data = await response.json();
  return data.results;
};


export const searchPopularMovies = async (query) => {
    const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`);
    const data = await response.json();
    return data.results;
}
