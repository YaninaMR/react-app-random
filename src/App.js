import React, { Component } from 'react';
import './App.css';
import Random from './Random'


class App extends Component {
  render() {
    return (
      <div className="App">
          <Random name="React" />
      </div>
    );
  }
}

export default App;
