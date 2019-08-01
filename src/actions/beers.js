//async action
//return a dispatch, of making the API call
const getBeers = () => {
  dispatch => {
    return fetch('http://localhost:3001/api/beers') //this is the code to get beer
    .then(response => response.json())
    .then(beers => dispatch(setBeers))
  }
}
