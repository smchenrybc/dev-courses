import React from 'react';

class App extends React.Component {
  // using state
  constructor() {
    super();

    this.state = {
      txt: "This is the state text.",
      cat: 0
    }
  }

  update(event) {
    this.setState({
      txt: event.target.value
    })
  }

  render() {
    return (
      <div>
        <h1>{this.state.txt} – {this.state.cat}</h1>
        <input type="text" onChange={this.update.bind(this)} />
      </div>
    )
  }
}

export default App
