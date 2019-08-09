import React from 'react';
import { connect } from 'react-redux';

// import BeerDetail from '../components/BeerDetail';
import BeerForm from './BeerForm';
import { getBeers } from '../actions/beers';

class Beers extends React.Component {
  //dispatch function with type FETCH_BEERS
  //dispatch() will send new object to Redux store
  componentDidMount() {
    this.props.getBeers()
  }

  render() {
    return (
      <div>
        <h1>Beer List</h1>
        <ul style={{ listStyle: 'none' }}>
          {this.props.beers.map(beer => {
            return <li> <a href={`/beers/${beer.id}`} key={beer.id}>{beer.name}</a></li>
          })}
        </ul>
        {
          //this is better but still not ideal!!!!!!
          //also runing into a 'key' issue again, although i don't see how
        }

        <BeerForm />
      </div>
    )
  }
}

//mapStateToProps here!
const mapStateToProps = (state) => {
  return {
    //subscribed to state.beers, when state changes, the change is now present in application
    beers: state.beers
  }
}

export default connect(mapStateToProps, { getBeers })(Beers)
