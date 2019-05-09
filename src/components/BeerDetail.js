import React from 'react';

const BeerDetail = ({ beer }) => {
  return (
    <div>
      <h1>{beer.name}</h1>
      <p>Brand: {beer.brand}</p>
      <p>Style: {beer.style}</p>
      <p>Alcohol by Volume: {beer.abv}%</p>
    </div>
  )
}

export default BeerDetail
