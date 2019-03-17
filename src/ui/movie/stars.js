import React from 'react';
import './stars.css';

// This component is just a POC, depends on font-awesome.
const StarsRating = ({ rating }) => (
  <div>
    <span className={`fa fa-star${rating > 0 ? ' checked' : ''}`} />
    <span className={`fa fa-star${rating > 2.5 ? ' checked' : ''}`} />
    <span className={`fa fa-star${rating > 5 ? ' checked' : ''}`} />
    <span className={`fa fa-star${rating > 7.0 ? ' checked' : ''}`} />
    <span className={`fa fa-star${rating > 8.5 ? ' checked' : ''}`} />
  </div>
);

export default StarsRating;
