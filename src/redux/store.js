import {
  applyMiddleware, combineReducers, compose, createStore,
} from 'redux';
import { moviesReducer, movieReducer, moviesByIdReducer } from './reducers/movies';
import moviesMiddleware from './middleware/movies';
import apiReducer from './reducers/api';
import { apiRequestMiddleware, apiStateMiddleware } from './middleware/api';

const reducers = combineReducers({
  movies: moviesReducer,
  moviesById: moviesByIdReducer,
  movie: movieReducer,
  api: apiReducer,
});

/* eslint-disable no-underscore-dangle */
const composeEnhancers = typeof window === 'object'
  && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
  }) : compose;
/* eslint-enable */

const enhancer = composeEnhancers(
  applyMiddleware(...[moviesMiddleware, apiRequestMiddleware, apiStateMiddleware]),
);

const store = createStore(reducers, {}, enhancer);
export default store;
