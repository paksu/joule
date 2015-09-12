import React from 'react';

export default class SearchBar extends React.Component {
  handleChange() {
    this.props.onUserInput(
      this.refs.filterTextInput.getDOMNode().value
    );
  }

  render() {
    return (
      <input
        className="form-control"
        type="text"
        placeholder="Search..."
        value={this.props.filterText}
        ref="filterTextInput"
        onChange={() => this.handleChange()}
      />
    );
  }
};
