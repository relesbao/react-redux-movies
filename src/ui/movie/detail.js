import React, { Component } from 'react';
import { connect } from 'react-redux';
import { mapMovie, mapMovieActions } from '../mappers/movies';
import MovieImg from './img';
import { withLoader } from '../loader';
import StarsRating from './stars';

class MovieDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      containerStyle: {
        marginTop: '1rem',
      },
      wrapperStyle: {
        margin: '0.5rem',
      },
    };
  }

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
    const { match, getMovie } = this.props;
    switch (match.path) {
      case '/movies/detail/:id':
        getMovie(match.params.id);
        break;
    }
  }

  goBack() {
    const { history } = this.props;
    history.goBack();
  }

  render() {
    const { movie } = this.props;
    const { containerStyle, wrapperStyle } = this.state;
    return (
      Object.keys(movie).length ? (
        <div style={containerStyle} className="container">
          <div className="card">
            <div style={wrapperStyle} className="wrapper row">
              <div className="col-md-6">
                <MovieImg posterPath={movie.poster_path} width={500} height={750} title={movie.title} />
              </div>
              <div className="col-md-6">
                <h3>{movie.title}</h3>
                <StarsRating rating={movie.vote_average} />
                <p>{movie.overview}</p>
              </div>
            </div>
            <div className="card-footer">
              <button type="button" className="btn btn-primary" onClick={() => this.goBack()}>Back!</button>
            </div>
          </div>
        </div>
      ) : ''
    );
  }
}
export default withLoader(connect(mapMovie, mapMovieActions)(MovieDetail));
