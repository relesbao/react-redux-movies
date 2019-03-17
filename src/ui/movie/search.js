import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class MovieSearch extends Component {
  constructor(props) {
    super(props);
    // Keep non global state internal to the component.
    this.state = {
      query: '',
    };
  }

  componentDidMount() {
    // In case the user comes from a search url directly
    this.updateQuery();
  }

  componentDidUpdate({ location: oldLocation }) {
    // Check if the URL has changed.
    const { location: currentLocation } = this.props;
    if (currentLocation !== oldLocation) {
      this.updateQuery();
    }
  }

  onChange(e) {
    // Updated the state
    this.setState({ query: e.target.value });
  }

  onSearch() {
    // Instead of firing an action,
    // i opted to just change the URL and let the movie list component handle the action firing
    const { query } = this.state;
    const { history } = this.props;
    history.push(`/movies/search/${query}`);
  }

  updateQuery() {
    // Here i clear the state if the URL has changed for a non search URL
    const { match } = this.props;
    if (match.path === '/movies/search/:query') {
      this.setState({ query: match.params.query });
    } else {
      this.setState({ query: '' });
    }
  }

  render() {
    const { query } = this.state;
    return (
      <form className="form-inline my-2 my-lg-0" onSubmit={e => e.preventDefault()}>
        <input
          className="form-control mr-sm-2"
          type="search"
          value={query}
          onChange={e => this.onChange(e)}
          onKeyPress={(e) => { if (e.which === 13) { this.onSearch(); } }}
          placeholder="Search Movies"
          aria-label="Search Movies"
        />
        <button
          className="btn btn-outline-success my-2 my-sm-0"
          onClick={() => this.onSearch()}
          type="button"
        >
          Search
        </button>
      </form>
    );
  }
}

export default withRouter(MovieSearch);
