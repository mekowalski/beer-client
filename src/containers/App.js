import React from 'react';
import Beers from './Beers';
// import BeerDetail from '../components/BeerDetail';

class App extends React.Component {
  state = {beers: []}

  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        <Beers beers={this.state.beers}/>
      </div>
    )
  }
}

export default App


//would eventually like to use this format
//left side view with list of beers, select a beer and beer details show on right side

// <div className='ui container grid' style={{ marginTop: '15px' }}>
//   <div className='ui row'>
//     <div className='column eight wide'>
//       <Beers beers={this.state.beers} />
//     </div>
//
//     <div className='column eight wide'>
//       <BeerDetail />
//     </div>
//   </div>
// </div>
