import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
    };
  }

  handleSearchInputChange = (event) => {
    this.setState({ searchTerm: event.target.value });
  };

  searchFunction = (event) => {
    event.preventDefault();
    // You can perform further actions with the search term, like sending it to a server or processing it locally.
    console.log('Search term:', this.state.searchTerm);
  };

  render() {
    return (
      <form onSubmit={this.searchFunction}>
        <div className="search-container">
          <input
            type="text"
            id="search"
            name="q"
            placeholder="Search Here for Courses....."
            value={this.state.searchTerm}
            onChange={this.handleSearchInputChange}
          />
          <button type="submit">Search</button>
        </div>
      </form>
    );
  }
}

export default SearchBar;
