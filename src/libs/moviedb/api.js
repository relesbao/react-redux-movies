const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '3c417e4e4818ed5d3a9b3c057cff070f';

export const MOVIE_IMAGE_URL = 'https://image.tmdb.org/t/p/';
export const GetSearchMoviesUrl = query => `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`;
export const GetTrendingMoviesUrl = () => `${BASE_URL}/trending/all/day?api_key=${API_KEY}`;
export const GetTopRatedMoviesUrl = () => `${BASE_URL}/movie/top_rated?api_key=${API_KEY}`;
export const GetMovieUrl = id => `${BASE_URL}/movie/${id}?api_key=${API_KEY}`;
