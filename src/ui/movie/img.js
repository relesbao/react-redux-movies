import React from 'react';
import { MOVIE_IMAGE_URL } from '../../libs/moviedb/api';

const REPLACEMENT_IMAGE = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC';

const MovieImg = ({
  width, posterPath, title, height,
}) => (
  <img height={height} className="card-img-top" src={`${MOVIE_IMAGE_URL}w${width}${posterPath}`} onError={(e) => { e.target.onerror = null; e.target.src = REPLACEMENT_IMAGE; }} alt={title} />
);

export default MovieImg;
