export const MOVIES = '[Movies]';

export const SEARCH_MOVIES = `${MOVIES} SEARCH FETCH`;
export const TRENDING_MOVIES = `${MOVIES} TRENDING FETCH`;
export const TOP_RATED_MOVIES = `${MOVIES} TOP RATED FETCH`;
export const NORMALIZED_MOVIES = `${MOVIES} NORMALIZED`;
export const SET_MOVIES = `${MOVIES} SET`;

export const MOVIE = '[Movie]';
export const GET_MOVIE = `${MOVIE} FETCH`;
export const SET_MOVIE = `${MOVIE} SET`;

export const searchMovies = query => ({
  type: SEARCH_MOVIES,
  payload: query,
});

export const trendingMovies = () => ({
  type: TRENDING_MOVIES,
});

export const topRatedMovies = () => ({
  type: TOP_RATED_MOVIES,
});

export const setMovies = ({ movies }) => ({
  type: SET_MOVIES,
  payload: movies,
});

export const normalizedMovies = ({ movies }) => ({
  type: NORMALIZED_MOVIES,
  payload: movies,
});

export const getMovie = id => ({
  type: GET_MOVIE,
  payload: id,
});

export const setMovie = ({ movie }) => ({
  type: SET_MOVIE,
  payload: movie,
});
