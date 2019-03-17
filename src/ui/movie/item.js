import React from 'react';
import { Link } from 'react-router-dom';
import MovieImg from './img';
import StarsRating from './stars';

// A simple stateless functional component, it can use some refactoring, like receiving it's size as a prop
const MovieItem = ({ movie }) => (
  <div
    className="card"
    style={{
      width: '18rem',
      margin: '1rem',
    }}
  >
    <MovieImg posterPath={movie.poster_path} width={300} height={450} title={movie.title} />
    <div className="card-body">
      <h5 className="card-title">{movie.title}</h5>
      <StarsRating rating={movie.vote_average} />
    </div>
    <div className="card-footer">
      <Link className="btn btn-primary" to={`/movies/detail/${movie.id}`}>See more!</Link>
    </div>
  </div>
);
export default MovieItem;
