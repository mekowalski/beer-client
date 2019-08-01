export default (state = {
  name: '',
  brand:'',
  style: '',
  abv: 0
},
  action) => {
    switch(action.type) => {
      case 'UPDATE_BEER':
        return action.beerFormData

      default:
        return state
    }
  }
