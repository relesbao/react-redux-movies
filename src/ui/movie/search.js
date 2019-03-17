import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class MovieSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
    };
  }

  componentDidMount() {
    this.updateQuery();
  }

  componentDidUpdate({ location: oldLocation }) {
    const { location: currentLocation } = this.props;
    if (currentLocation !== oldLocation) {
      this.updateQuery();
    }
  }

  onChange(e) {
    this.setState({ query: e.target.value });
  }

  onSearch() {
    const { query } = this.state;
    const { history } = this.props;
    history.push(`/movies/search/${query}`);
  }

  updateQuery() {
    const { match } = this.props;
    if (match && match.params && match.params.query) {
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
