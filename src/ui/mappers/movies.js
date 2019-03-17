import { bindActionCreators } from 'redux';
import {
  searchMovies, trendingMovies, getMovie, topRatedMovies,
} from '../../redux/actions/movies';

export const mapMoviesActions = dispatch => bindActionCreators({ searchMovies, trendingMovies, topRatedMovies }, dispatch);
export const mapMovies = state => ({ movies: state.movies });

export const mapMovieActions = dispatch => bindActionCreators({ getMovie }, dispatch);
export const mapMovie = state => ({ movie: state.movie });
