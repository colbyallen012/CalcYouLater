import React, { Component } from 'react';
import './App.css';
import Input from './Input.jsx'

export class App extends Component {
  constructor(){
    super() 
    this.state = {
      input: '',
      operator: null
    }
  }

  handleInput = (e) => {
    e.preventDefault()
    if (e.target.innerText === '='){
      this.calculate()
    } else {
      this.setState({input: this.state.input + e.target.innerText})
    }
  }

  calculate = () => {
    var operation = ''

    if(this.state.input.includes('--')){
        operation = this.state.input.replace('--','+')
    } else {
        operation = this.state.input
    }

    this.setState({
      // eslint-disable-next-line
        input: (eval(operation) || "" ) + ""
    })
};

  handleOperator = (e) => {
    e.preventDefault()
    this.setState({operator: e.target.innerText})
    console.log(this.state)
  }


  render () {
    return (
      <div className='App'>
        <h2 className='title'>Calc You Later</h2>
        <h3 className='display'>{this.state.input}</h3>
        <Input handleInput={this.handleInput} />
      </div>
    )
  }
}

export default App;
