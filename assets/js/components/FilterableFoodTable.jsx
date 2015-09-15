import React, { Component, PropTypes } from 'react';
import FoodTable from './FoodTable';
import SearchBar from './SearchBar';

export default class FilterableFoodTable extends Component {
  handleUserInput (searchTerm) {
    this.props.onSearchTermChanged(searchTerm)
  }

  render() {
    const { searchTerm, foods, onAddFood } = this.props;
    return (
      <div>
        <SearchBar searchTerm={searchTerm} onUserInput={(text) => this.handleUserInput(text)} />
        <FoodTable searchTerm={searchTerm} foods={foods} onAddFood={onAddFood}  />
      </div>
    );
  }
};

FilterableFoodTable.propTypes = {
  onSearchTermChanged: PropTypes.func.isRequired
};
