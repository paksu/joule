import React from 'react';
import FoodRow from './FoodRow'

export default class FoodTable extends React.Component {
  render() {
    const { foods, onAddFood } = this.props;

    return (
      <ul className="list-group">
      {foods.map(food =>
        (<FoodRow food={food} key={food.name} icon="plus" onClick={onAddFood} />)
      )}
      </ul>
    );
  }
};
