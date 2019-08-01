//create reducer for beers
export default (state = [], action) => {
  switch (action.type) {
    case 'FETCH_BEERS':
      return action.beers
    default:
      return state
  }
}
