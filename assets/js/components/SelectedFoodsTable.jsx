import React from 'react';
import FoodRow from './FoodRow';

export default class SelectedFoodsTable extends React.Component {
  render() {
    const { foods, onRemoveFood } = this.props;

    return (
      <ul className="list-group">
        {foods.map(food =>
            (<FoodRow food={food} key={food.name} icon="minus" onClick={onRemoveFood} />)
        )}
      </ul>
    );
  }
};
