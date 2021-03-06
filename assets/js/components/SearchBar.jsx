import debounce from 'debounce'
import React, { Component, PropTypes } from 'react';

export default class SearchBar extends Component {
  handleChange() {
    this.props.onUserInput(
      this.refs.searchTermInput.getDOMNode().value
    );
  }
  componentWillMount() {
    this.handleChange = debounce(this.handleChange, 350);
  }
  render() {
    return (
      <input
        className="form-control"
        type="text"
        placeholder="Search..."
        value={this.props.searchTerm}
        ref="searchTermInput"
        onChange={() =>
          this.handleChange()
        } />
    );
  }
};

SearchBar.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  searchTermInput: PropTypes.func.isRequired
};
