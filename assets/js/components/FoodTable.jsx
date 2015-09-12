import React from 'react';
import FoodRow from './FoodRow';

export default class FoodTable extends React.Component {
  render() {
    const { filterText, onAddFood } = this.props;
    let { foods } = this.props;

    // if we got filterText then apply filter
    // otherwise show full list
    if(filterText) {
      foods = foods.filter((food) => {
        let foodName = food.name.toLowerCase();
        return foodName.includes(filterText.toLowerCase());
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
