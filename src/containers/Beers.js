import React from 'react';
import BeerDetail from '../components/BeerDetail';

const Beers = (props) => {
  return (
    <div>
      <h1>Beer List</h1>
      {props.beers.map(beer => <BeerDetail key={beer.id} beer={beer} />)}
    </div>
  )
}

export default Beers
