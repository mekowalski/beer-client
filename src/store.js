import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';

import beers from './reducers/beers';
import beerFormData from './reducers/beerFormData';

const reducers = combineReducers({
  beers,
  beerFormData
})

const middleware = [thunk]

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default createStore(
  reducers,
  composeEnhancer(applyMiddleware(...middleware))
)
