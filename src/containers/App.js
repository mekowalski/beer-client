import React from 'react';
import Beers from './Beers';

class App extends React.Component {
  state = {beers: []}

  componentDidMount() {
    fetch('http://localhost:3001/api/beers')
      .then(response => response.json())
      .then(beers => this.setState({ beers }))
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
