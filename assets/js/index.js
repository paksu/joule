import React from 'react';
import FoodPicker from './containers/FoodPicker';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { foodpicker } from './reducers';

let store = createStore(foodpicker);

React.render(
  // The child must be wrapped in a function
  // to work around an issue in React 0.13.
  <Provider store={store}>
    {() => <FoodPicker />}
  </Provider>,
   document.getElementById('react-app')
);
