import React from 'react';
import { connect } from 'react-redux';

class BeerForm extends React.Component{
  render() {
    const {name, brand, style, abv} = this.props.beerFormData

    return (
      <div>
        Fill the form out
        <form>
          <div>
            <label htmlFor='name'>Name: </label>
            <input type='text' name='name' value={name} />
          </div>

          <div>
            <label htmlFor='brand'>Brand: </label>
            <input type='text' name='brand' value={brand} />
          </div>

          <div>
            <label htmlFor='style'>Style: </label>
            <input type='text' name='style' value={style} />
          </div>

          <div>
            <label htmlFor='abv'>Alcohol by Volume: </label>
            <input type='number' name='abv' value={abv} />
          </div>
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
