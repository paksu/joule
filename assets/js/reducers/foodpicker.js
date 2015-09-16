import { SEARCH_INPUT_CHANGED, ADD_FOOD, REMOVE_FOOD } from '../constants/ActionTypes';
import { FOOD_LIST } from '../constants/Foodlist'

const initialState = {
  allFoods : FOOD_LIST,
  selectedFoods: [],
  searchTerm: '',
}

function doFilter(foods, searchTerm) {
  let filtered = FOOD_LIST;
  if(searchTerm) {
    filtered = filtered.filter((food) => {
      let foodName = food.name.toLowerCase();
      return foodName.includes(searchTerm.toLowerCase());
    });
  }
  return filtered;
};

export default function foodpicker(state = initialState, action) {
  switch (action.type) {
  case SEARCH_INPUT_CHANGED:
    return {
      ...state,
      searchTerm : action.searchTerm,
      allFoods : doFilter(state.allFoods, action.searchTerm)
    };
  case ADD_FOOD:
    return {
      ...state,
      selectedFoods: [...state.selectedFoods, action.food]
    }

  case REMOVE_FOOD:
    return {
      ...state,
      selectedFoods: state.selectedFoods.filter((food) => { return food.id != action.food.id; })
    }
  default:
    return state;
  }
}

