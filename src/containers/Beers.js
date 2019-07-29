import React from 'react';
import { connect } from 'react-redux';

// import BeerDetail from '../components/BeerDetail';
import BeerForm from './BeerForm';

class Beers extends React.Component {

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
    beers: state.beers
  })
}

export default connect(mapStateToProps)(Beers)
