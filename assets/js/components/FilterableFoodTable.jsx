import React from 'react';
import FoodTable from './FoodTable';
import SearchBar from './SearchBar';

export default class FilterableFoodTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: undefined,
    };
  }

  handleUserInput (searchTerm) {
    this.setState({
      searchTerm: searchTerm
    });
  }

  render() {
    return (
      <div>
        <SearchBar searchTerm={this.state.searchTerm} onUserInput={(text) => this.handleUserInput(text)} />
        <FoodTable searchTerm={this.state.searchTerm} foods={this.props.foods} onAddFood={this.props.onAddFood}  />
      </div>
    );
  }
};
