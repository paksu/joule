import React from 'react';
import FoodPicker from './containers/FoodPicker';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { foodpicker } from './reducers';
import httpMiddleWare from './middleware/http'

const createStoreWithMiddleware = applyMiddleware(
  httpMiddleWare
)(createStore);

const store = createStoreWithMiddleware(foodpicker);

React.render(
  // The child must be wrapped in a function
  // to work around an issue in React 0.13.
  <Provider store={store}>
    {() => <FoodPicker />}
  </Provider>,
   document.getElementById('react-app')
);
