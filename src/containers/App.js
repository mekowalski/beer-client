import React from 'react';
import Beers from './Beers';

const beers = [
  {
    name: 'Beer Me'
  },
  {
    name: 'Beer For You'
  },
  {
    name: 'Beer Almost Gone'
  }
]

class App extends React.Component {
  render() {
    return (
      <div>
       <Beers beers={beers}/>
      </div>
    )
  }
}

export default App
