import {expect} from 'chai';
import {foodpicker} from '../assets/js/reducers';

describe('foodpicker', () => {

  it('handles ADD_FOOD', () => {
    const initialState = {
      selectedFoods: []
    };
    const action = {type: 'ADD_FOOD', food: {id: 1, name: 'foobar' }};
    const nextState = foodpicker(initialState, action);

    expect(nextState).deep.equal({
      selectedFoods: [{id: 1, name: 'foobar' }]
    });
  });

  it('handles REMOVE_FOOD', () => {
    const initialState = {
      selectedFoods: [{id: 1, name: 'foobar' }]
    };
    const action = {type: 'REMOVE_FOOD', food: {id: 1, name: 'foobar' }};
    const nextState = foodpicker(initialState, action);

    expect(nextState).deep.equal({
      selectedFoods: []
    });
  });

});
