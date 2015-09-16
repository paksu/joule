import * as actions from '../constants/ActionTypes';

export function addFood(food) {
  return { type: actions.ADD_FOOD, food };
}

export function removeFood(food) {
  return { type: actions.REMOVE_FOOD, food };
}
