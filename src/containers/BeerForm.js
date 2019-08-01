import React from 'react';
import { connect } from 'react-redux';

class BeerForm extends React.Component{
  render() {
    return (
      <div>
        Fill the form out
        <form>
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
