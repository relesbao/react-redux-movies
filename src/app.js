import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './redux/store';

import MoviesList from './ui/movie/list';
import Nav from './ui/nav';
import MovieSearch from './ui/movie/search';
import MovieDetail from './ui/movie/detail';

const Default = () => (
  <Redirect to="/movies/trending" />
);

const NavBar = () => (
  <Nav>
    <MovieSearch />
  </Nav>
);

const App = () => (
  <Provider store={store}>
    <HashRouter>
      <Route path={['/movies/search/:query', '/']} component={NavBar} />
      <Route path={['/movies/search/:query', '/movies/trending', '/movies/top_rated']} component={MoviesList} />
      <Route path="/movies/detail/:id" component={MovieDetail} />
      <Route exact path="/" component={Default} />
    </HashRouter>
  </Provider>
);

ReactDOM.render(
  <App />,
  window.document.querySelector('#root'),
);
