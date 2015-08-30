import React from 'react';
import FoodTable from './FoodTable';

export default class FilterableFoodTable extends React.Component {
  render() {
    return (
      <div>
        <FoodTable foods={this.props.foods} onAddFood={this.props.onAddFood}  />
      </div>
    );
  }
};
