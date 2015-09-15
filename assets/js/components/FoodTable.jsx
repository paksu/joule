import React, { Component, PropTypes } from 'react';
import FoodRow from './FoodRow';

export default class FoodTable extends Component {
  render() {
    const { searchTerm, onAddFood } = this.props;
    let { foods } = this.props;

    // if we got searchTerm then apply filter
    // otherwise show full list
    if(searchTerm) {
      foods = foods.filter((food) => {
        let foodName = food.name.toLowerCase();
        return foodName.includes(searchTerm.toLowerCase());
      });
    }

    return (
      <ul className="list-group">
      {foods.map(food =>
        (<FoodRow food={food} key={food.name} icon="plus" onClick={onAddFood} />)
      )}
      </ul>
    );
  }
};

FoodTable.propTypes = {
  foods: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired
  }))
};
