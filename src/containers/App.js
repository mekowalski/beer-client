import React from 'react';
import Beers from './Beers';
//want to import function called getBeers from '../actions/beers'

class App extends React.Component {
  state = {beers: []}

  componentDidMount() {
    //want to actually call this.props.getBeers()
    fetch('http://localhost:3001/api/beers') //this is the code to get beer
      .then(response => response.json())
      // .then(beers => this.setState({ beers }))
  }

  render() {
    return (
      <div style={{ textAlign: 'center' }}>
       <Beers beers={this.state.beers}/>
      </div>
    )
  }
}

export default App
