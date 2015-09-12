import React from 'react';
import FoodTable from './FoodTable';
import SearchBar from './SearchBar';

export default class FilterableFoodTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: undefined,
    };
  }

  handleUserInput (filterText) {
    this.setState({
      filterText: filterText
    });
  }

  render() {
    return (
      <div>
        <SearchBar filterText={this.state.filterText} onUserInput={(text) => this.handleUserInput(text)} />
        <FoodTable filterText={this.state.filterText} foods={this.props.foods} onAddFood={this.props.onAddFood}  />
      </div>
    );
  }
};
