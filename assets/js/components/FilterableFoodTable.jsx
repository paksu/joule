import React from 'react';
import FoodTable from './FoodTable';
import SearchBar from './SearchBar';

export default class FilterableFoodTable extends React.Component {
  render() {
    return (
      <div>
         <SearchBar />
        <FoodTable foods={this.props.foods} onAddFood={this.props.onAddFood}  />
      </div>
    );
  }
};
