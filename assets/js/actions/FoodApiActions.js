import * as actions from '../constants/ActionTypes';

const FOOD_API_URI = '/api/foods';

export function searchTermChanged(searchTerm) {
  return {
    type: actions.SEARCH_FOODS,
    searchTerm,
    url: `${FOOD_API_URI}/?search=${searchTerm}`,
    onSuccess: (res, dispatch) => { console.log(res); dispatch(foodSearchReady(searchTerm, res.results)) }
  };
}

export function foodSearchReady(searchPhrase, foods) {
  return {
    type: actions.SEARCH_FOOD_READY,
    searchPhrase,
    foods
  };
}
