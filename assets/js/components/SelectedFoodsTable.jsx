import React, { Component, PropTypes } from 'react';
import FoodRow from './FoodRow';

export default class SelectedFoodsTable extends Component {
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

SelectedFoodsTable.propTypes = {
  foods: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired
  })),
  onRemoveFood: PropTypes.func.isRequired
};
