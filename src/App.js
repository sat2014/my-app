import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

export default class App extends Component {
  constructor() {
    super();
    this.state = { clickCount: 0 };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">The clickCount is: {this.state.clickCount}</h1>
        </header>
        <p className="App-intro">
          I am Bjørn!!           
          <button type="button" onClick={
            () => this.setState({ clickCount: this.state.clickCount + 1 })            
          }  >Click Me!</button>
        </p>
      </div>
    );
  }
}

//export default App;
