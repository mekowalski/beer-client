import React from 'react';
import Beers from './Beers';

class App extends React.Component {
  // constructor(props) {
  //   super(props)
  //
  //   this.state = { beers: [] }
  // }
  //this still works correctly, have to ask about it, not certain what the difference is
  state = {beers: []}

  componentDidMount() {
    fetch('http://localhost:3001/api/beers')
      .then(response => response.json())
      .then(beers => this.setState({ beers }))
  }

  render() {
    console.log(this.state)
    return (
      <div style={{ textAlign: 'center' }}>
       <Beers beers={this.state.beers}/>
      </div>
    )
  }
}

export default App
