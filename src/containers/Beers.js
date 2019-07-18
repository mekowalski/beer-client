import React from 'react';
import BeerDetail from '../components/BeerDetail';
import BeerForm from './BeerForm';

class Beers extends React.Component {

  render() {
    console.log('what about here')
    return (
      <div>
        <h1>Beer List</h1>
        {this.props.beers.map(beer => {
          return <a href={`/beers/${beer.id}`}>{beer.name}</a>
        })}


        <BeerForm />
      </div>
    )
  }
}

export default Beers
//  {this.props.beers.map(beer => <BeerDetail key={beer.id} beer={beer} />)}
