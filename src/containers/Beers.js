import React from 'react';

const Beers = (props) => {
  return (
    <div>
      <h1>Beer List</h1>
      {props.beers.map(
        beer => <h3 key={beer.id}>{beer.name}</h3>
      )}
    </div>
  )
}

export default Beers
