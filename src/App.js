import React, { Component } from 'react';
import './App.css';
import Input from './Input.jsx'

export class App extends Component {
  constructor(){
    super() 
    this.state = {
      input: 0
    }
  }

  handleInput = (e) => {
    e.preventDefault()
    this.setState({input: e.target.innerText})
  }


  render () {
    return (
      <div className='App'>
        <h2>Calc You Later</h2>
        <Input handleInput={this.handleInput} input={this.state.input}/>
      </div>
    )
  }
}

export default App;
