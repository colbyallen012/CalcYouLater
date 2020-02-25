import React, { Component } from 'react';
import './App.css';
import Input from './Input.jsx'

export class App extends Component {

  render () {
    return (
      <div className='App'>
        <h2>Calc You Later</h2>
        <Input />
      </div>
    )
  }
}

export default App;
