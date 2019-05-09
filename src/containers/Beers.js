import React from 'react';

const Beers = (props) => {
  return (
    <div>
      {props.beers.map(
        beer => <h1 key={beer.id}>{beer.name}</h1>
      )}
    </div>
  )
}

export default Beers
