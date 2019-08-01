import React from 'react';
import { connect } from 'react-redux';

class BeerForm extends React.Component{
  render() {
    const {name, brand, style, abv} = this.props.beerFormData

    return (
      <div>
        Fill the form out
        <form>
          <label htmlFor='name'>Name: </label>
          <input type='text' name='name' value={name} />

          <label htmlFor='name'>Brand: </label>
          <input type='text' name='name' value={name} />

          <label htmlFor='name'>Style: </label>
          <input type='text' name='name' value={name} />

          <label htmlFor='name'>Alcohol by Volume: </label>
          <input type='text' name='name' value={name} />
        </form>
      </div>
    )
  }
}

//mapStateToProps here
const mapStateToProps = state => {
  return {
    beerFormData: state.beerFormData
  }
}

export default connect(mapStateToProps)(BeerForm)
