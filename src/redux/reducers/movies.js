import { SET_MOVIES, NORMALIZED_MOVIES, SET_MOVIE } from '../actions/movies';

const moviesReducer = (movies = [], action) => {
  switch (action.type) {
    case SET_MOVIES:
      return action.payload;

    default:
      return movies;
  }
};

const moviesByIdReducer = (movies = {}, action) => {
  switch (action.type) {
    case NORMALIZED_MOVIES:
      return action.payload;

    default:
      return movies;
  }
};

const movieReducer = (movie = {}, action) => {
  switch (action.type) {
    case SET_MOVIE:
      return action.payload;

    default:
      return movie;
  }
};

export {
  moviesReducer,
  movieReducer,
  moviesByIdReducer,
};
