import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { addFood, removeFood, searchTermChanged } from '../actions/FoodPickerActions'
import SelectedFoodsTable from '../components/SelectedFoodsTable';
import FilterableFoodTable from '../components/FilterableFoodTable';
import Overview from '../components/Overview'
import { FOOD_LIST } from '../constants/Foodlist'
let SELECTED_FOODS = [];

export default class FoodPicker extends Component {
  render() {
    // Injected by connect() call:
    const { dispatch, selectedFoods, allFoods } = this.props;

    return (
      <div>
        <Overview foods={selectedFoods} />

        <SelectedFoodsTable
          foods={selectedFoods}
          onRemoveFood={food =>
            dispatch(removeFood(food))
          } />

        <FilterableFoodTable
          foods={allFoods}
          onAddFood={food =>
            dispatch(addFood(food))
          }
          onSearchTermChanged={nextSearchTerm =>
            dispatch(searchTermChanged(nextSearchTerm))
          } />
      </div>
    );
  }
};

FoodPicker.propTypes = {
  allFoods: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired
  })),
  selectedFoods: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired
  })),
  searchTerm: PropTypes.string.isRequired
};


export default connect(state => state)(FoodPicker);
