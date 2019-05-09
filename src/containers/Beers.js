import React from 'react';
import BeerDetail from '../components/BeerDetail';
import BeerForm from './containers/BeerForm';

class Beers extends React.Component {

  render() {
    return (
      <div>
        <h1>Beer List</h1>
        {this.props.beers.map(beer => <BeerDetail key={beer.id} beer={beer} />)}
      </div>

      <div>
        <BeerForm />
      </div>
    )
  }
}

export default Beers
