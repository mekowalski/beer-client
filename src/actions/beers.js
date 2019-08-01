//Action Creators: functions that will go to Reducers
const setBeers = beers => {
  return {
    type: 'FETCH_BEERS',
    beers
  }
}

//async action
//return a dispatch, of making the API call
export const getBeers = () => {
  return dispatch => {
    return fetch('http://localhost:3001/api/beers') //this is the code to get beer
    .then(response => response.json())
    .then(beers => dispatch(setBeers(beers)))
    .catch(error => console.log(error))
  }
}
