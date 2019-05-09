import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux';

//create reducer for beers
const beers = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_BEERS':
      return action.beer
    default:
      return state
  }
}
