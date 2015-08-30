import React from 'react';
import SelectedFoodsTable from './SelectedFoodsTable';
import FilterableFoodTable from './FilterableFoodTable';

let FOODS = [
  { name: 'Pasta', components: []},
  { name: 'Nuts'},
  { name: 'Chicken'},
  { name: 'Pork'},
  { name: 'Beef'},
  { name: 'Rice'}
];
let SELECTED_FOODS = [{ name: 'Tomato'}];

export default class FoodPicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFoods: SELECTED_FOODS,
      allFoods: FOODS
    };
  }

  addFood(food) {
    let newSelectedFoods = this.state.selectedFoods;
    newSelectedFoods.push(food);
    this.setState({
      selectedFoods: newSelectedFoods
    });
  }

  removeFood(foodToRemove) {
    let newSelectedFoods = this.state.selectedFoods.filter((food) => {
      return food != foodToRemove;
    });
    this.setState({
      selectedFoods: newSelectedFoods
    });
  }

  render() {
    return (
      <div>
        <SelectedFoodsTable foods={this.state.selectedFoods} onRemoveFood={(food) => this.removeFood(food)} />
        <FilterableFoodTable foods={this.state.allFoods} onAddFood={(food) => this.addFood(food)} />
      </div>
    );
  }
};
