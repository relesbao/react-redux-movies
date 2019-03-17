import React, { Component } from 'react';
import { connect } from 'react-redux';
import { mapMovies, mapMoviesActions } from '../mappers/movies';
import MovieItem from './item';
import { withLoader } from '../loader';

class MovieList extends Component {
  componentDidMount() {
    // Calling route changed in case of a refresh or direct url access
    this.routeChanged();
  }

  componentDidUpdate({ location: oldLocation }) {
    // Check if the location has changed in order to call routeChanged()
    const { location: currentLocation } = this.props;
    if (currentLocation !== oldLocation) {
      this.routeChanged();
    }
  }

  routeChanged() {
    // All movie lists are rendered here, so i decided to handle all list paths here aswell
    // Another approach would be create a container component for each route that just renders the movie
    // list passing the correct list type as a prop.
    const {
      match, trendingMovies, topRatedMovies, searchMovies,
    } = this.props;
    switch (match.path) {
      case '/movies/trending':
        trendingMovies();
        break;
      case '/movies/top_rated':
        topRatedMovies();
        break;
      case '/movies/search/:query':
        searchMovies(match.params.query);
        break;
    }
  }

  render() {
    const { movies } = this.props;
    return (
      Array.isArray(movies) && movies.length
        ? (
          <div className="container">
            <div className="row">
              { movies.map(movie => <MovieItem key={movie.id} movie={movie} />) }
            </div>
          </div>
        ) : ''
    );
  }
}

export default withLoader(connect(mapMovies, mapMoviesActions)(MovieList));
