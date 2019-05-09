import React from 'react';
import Beers from './Beers';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { beers: [] }
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
