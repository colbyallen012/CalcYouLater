import React, { Component } from 'react';

export class Input extends Component {
  constructor(){
    super() 
    this.state = {
      input: 0
    }
  }

  handleButton = (e) => {
    e.preventDefault()
    this.setState({input: e.target.innerText})
  }

  render () {
    return (
      <div className='Input'>
        <h2>Input Component</h2>
        <h3>{this.state.input}</h3>
        <button onClick={this.handleButton}>9</button>
        <button onClick={this.handleButton}>8</button>
        <button onClick={this.handleButton}>7</button>
        <button onClick={this.handleButton}>6</button>
        <button onClick={this.handleButton}>5</button>
        <button onClick={this.handleButton}>4</button>
        <button onClick={this.handleButton}>3</button>
        <button onClick={this.handleButton}>2</button>
        <button onClick={this.handleButton}>1</button>
        <button onClick={this.handleButton}>0</button>
      </div>
    )
  }
}

export default Input;