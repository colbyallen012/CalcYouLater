import React, { Component } from 'react';
import './App.css';
import Input from './Input.jsx'
import Operator from './Operator.jsx'

export class App extends Component {
  constructor(){
    super() 
    this.state = {
      input: '',
      operator: null
    }
  }

  handleInput = (button) => {
    // e.preventDefault()

    console.log(button)

    // if (button === '='){
    //   console.log('calculate')
    // } else {
    //   this.setState({input: button})
    // }
  }

  handleOperator = (e) => {
    e.preventDefault()
    this.setState({operator: e.target.innerText})
    console.log(this.state)
  }


  render () {
    return (
      <div className='App'>
        <h2>Calc You Later</h2>
        <h3>{this.state.input}</h3>
        <Input handleInput={this.handleInput} />
        <Operator handleOperator={this.handleOperator} />
      </div>
    )
  }
}

export default App;
