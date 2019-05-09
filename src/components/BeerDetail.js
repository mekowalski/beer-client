import React from 'react';
import BeerForm from '../containers/BeerForm';

const BeerDetail = ({ beer }) => {
  return (
    <div>
      <h1>{beer.name}</h1>
      <p>Brand: {beer.brand}</p>
      <p>Style: {beer.style}</p>
      <p>Alcohol by Volume: {beer.abv}%</p>

      <BeerForm />

    </div>
  )
}

export default BeerDetail
