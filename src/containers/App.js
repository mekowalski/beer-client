import React from 'react';
import Beers from './Beers';

class App extends React.Component {
  state = {beers: []}

  componentDidMount() {
    //want to actually call this.props.getBeers()
    this.props.getBeers()
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
