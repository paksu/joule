import React from 'react';
import SelectedFoodsTable from './SelectedFoodsTable';
import FilterableFoodTable from './FilterableFoodTable';
import Overview from './Overview'
import { FOOD_LIST } from '../lib/constants'
let SELECTED_FOODS = [];

export default class FoodPicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFoods: SELECTED_FOODS,
      allFoods: FOOD_LIST
    };
  }

  addFood(food) {
    let newSelectedFoods = [...this.state.selectedFoods, food];
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
        <Overview foods={this.state.selectedFoods} />
        <SelectedFoodsTable foods={this.state.selectedFoods} onRemoveFood={(food) => this.removeFood(food)} />
        <FilterableFoodTable foods={this.state.allFoods} onAddFood={(food) => this.addFood(food)} />
      </div>
    );
  }
};
