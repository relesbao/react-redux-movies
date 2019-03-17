import {
  MOVIES, MOVIE, SEARCH_MOVIES, TRENDING_MOVIES, TOP_RATED_MOVIES, GET_MOVIE, setMovies, setMovie, normalizedMovies,
} from '../actions/movies';
import { API_SUCCESS, apiRequest } from '../actions/api';
import {
  GetSearchMoviesUrl, GetTrendingMoviesUrl, GetTopRatedMoviesUrl, GetMovieUrl,
} from '../../libs/moviedb/api';

/**
 * The idea of this architecture is to create dumb actions / reducers, the middleware is responsible
 * for transforming actions and sometimes even deciding wether to call action 'a' or action 'b'
 *
 * As you can see here, the movies middleware is responsible for catching all movie related actions and dispatching
 * the needed actions for that particular task.
 */

const moviesMiddleware = ({ dispatch, getState }) => next => (action) => {
  next(action);
  let url = '';
  switch (action.type) {
    case SEARCH_MOVIES:
      url = GetSearchMoviesUrl(action.payload);
      dispatch(setMovies({ movies: [] }));
      dispatch(apiRequest({
        body: null, method: 'GET', url, context: MOVIES,
      }));
      break;

    case TRENDING_MOVIES:
      url = GetTrendingMoviesUrl(action.payload);
      dispatch(setMovies({ movies: [] }));
      dispatch(apiRequest({
        body: null, method: 'GET', url, context: MOVIES,
      }));
      break;

    case TOP_RATED_MOVIES:
      url = GetTopRatedMoviesUrl(action.payload);
      dispatch(setMovies({ movies: [] }));
      dispatch(apiRequest({
        body: null, method: 'GET', url, context: MOVIES,
      }));
      break;

    case GET_MOVIE:
      const { moviesById } = getState();
      if (moviesById[action.payload]) {
        dispatch(setMovie({ movie: moviesById[action.payload] }));
      } else {
        url = GetMovieUrl(action.payload);
        dispatch(apiRequest({
          body: null, method: 'GET', url, context: MOVIE,
        }));
      }
      break;

    case `${MOVIES} ${API_SUCCESS}`:
      const movies = action.payload.results;
      const normalized = movies.reduce((acc, movie) => {
        acc[movie.id] = movie;
        return acc;
      }, {});
      dispatch(normalizedMovies({ movies: normalized }));
      dispatch(setMovies({ movies }));
      break;

    case `${MOVIE} ${API_SUCCESS}`:
      dispatch(setMovie({ movie: action.payload }));
      break;
  }
};

export default moviesMiddleware;
