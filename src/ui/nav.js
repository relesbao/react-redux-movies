import React from 'react';
import { Link } from 'react-router-dom';

const Nav = ({ children }) => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item">
        <Link className="nav-link" to="/movies/trending">Trending</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/movies/top_rated">Top Rated</Link>
      </li>
    </ul>
    {children}
  </nav>
);

export default Nav;
