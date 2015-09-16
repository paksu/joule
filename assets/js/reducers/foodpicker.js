import * as actions from '../constants/ActionTypes';

const initialState = {
  allFoods : [],
  selectedFoods: [],
  searchTerm: '',
}

export default function foodpicker(state = initialState, action) {
  switch (action.type) {
  case actions.ADD_FOOD:
    return {
      ...state,
      selectedFoods: [...state.selectedFoods, action.food]
    }

  case actions.REMOVE_FOOD:
    return {
      ...state,
      selectedFoods: state.selectedFoods.filter((food) => { return food.id != action.food.id; })
    }

  case actions.SEARCH_FOOD_READY:
    return {
      ...state,
      searchTerm: action.searchTerm,
      allFoods: action.foods
    }

  default:
    return state;
  }
}

