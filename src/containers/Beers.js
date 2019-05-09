import React from 'react';

const Beers = (props) => {
  return (
    <div>
      <h1>Beer List</h1>
      {props.beers.map(beer => <BeerDetail beer={beer} />)}
    </div>
  )
}

export default Beers
