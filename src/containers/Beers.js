import React from 'react';
import BeerDetail from '../components/BeerDetail';

class Beers extends React.Component {

  render() {
    return (
      <div>
        <h1>Beer List</h1>
        {this.props.beers.map(beer => <BeerDetail key={beer.id} beer={beer} />)}
      </div>
    )
  }
}

export default Beers
