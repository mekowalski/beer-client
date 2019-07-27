import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';

//create reducer for beers
const beersReducer = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_BEERS':
      return action.beers
    default:
      return state
  }
}

const reducers = combineReducers({
  beers: beersReducer
})

const middleware = [thunk]

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default createStore(
  reducers,
  composeEnhancer(applyMiddleware(...middleware))
)
