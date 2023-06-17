import './App.css';
import './Person.js';

import React, { Component } from 'react'
import Person from './Person.js';

export class App extends Component {
  render() {
    return (
      <div className="App">
        <Person />
      </div>
    )
  }
}

export default App

