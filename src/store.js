import { createStore, applyMiddleware, combineReducers } from 'redux';
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

export default createStore(
  reducers,
  applyMiddleware[...middleware],
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
