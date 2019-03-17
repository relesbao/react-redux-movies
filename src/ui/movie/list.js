import React, { Component } from 'react';
import { connect } from 'react-redux';
import { mapMovies, mapMoviesActions } from '../mappers/movies';
import MovieItem from './item';
import { withLoader } from '../loader';

class MovieList extends Component {
  componentDidMount() {
    this.routeChanged();
  }

  componentDidUpdate({ location: oldLocation }) {
    const { location: currentLocation } = this.props;
    if (currentLocation !== oldLocation) {
      this.routeChanged();
    }
  }

  routeChanged() {
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
