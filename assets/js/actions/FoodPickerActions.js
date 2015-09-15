import * as types from '../constants/ActionTypes';

export function searchTermChanged(searchTerm) {
  return {
    type: types.SEARCH_INPUT_CHANGED,
    searchTerm
  };
}

export function addFood(food) {
  return { type: types.ADD_FOOD, food };
}

export function removeFood(food) {
  return { type: types.REMOVE_FOOD, food };
}
