import React from 'react';
import './stars.css';

const StarsRating = ({ rating }) => (
  <div>
    <span className={`fa fa-star${rating > 0 ? ' checked' : ''}`} />
    <span className={`fa fa-star${rating > 2.5 ? ' checked' : ''}`} />
    <span className={`fa fa-star${rating > 5 ? ' checked' : ''}`} />
    <span className={`fa fa-star${rating > 7.5 ? ' checked' : ''}`} />
    <span className={`fa fa-star${rating === 10 ? ' checked' : ''}`} />
  </div>
);

export default StarsRating;
