import React from 'react';
import { connect } from 'react-redux';

// import BeerDetail from '../components/BeerDetail';
import BeerForm from './BeerForm';
import { getBeers } from '../actions/beers';

class Beers extends React.Component {
  //dispatch function with type FETCH_BEERS
  //dispatch() will send new object to Redux store
  componentDidMount() {
    this.props.dispatch({
      type: 'FETCH_BEERS',
      beers: [{name: 'testing', brand: 'FAKE', style: 'phony', abv: 3.9}]
    })
  }

  render() {
    console.log('what about here')
    return (
      <div>
        <h1>Beer List</h1>
        {this.props.beers.map(beer => {
          return <a href={`/beers/${beer.id}`} key={beer.id}>{beer.name}</a>
        })}


        <BeerForm />
      </div>
    )
  }
}

//mapStateToProps here!
const mapStateToProps = (state) => {
  return ({
    //subscribed to state.beers, when state changes, the change is now present in application
    beers: state.beers
  })
}

export default connect(mapStateToProps, { getBeers })(Beers)
