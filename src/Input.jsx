import React, { Component } from 'react';

export class Input extends Component {

  render () {
    return (
      <div className='Input'>
        <h2>Input Component</h2>
        <button onClick={e => this.props.handleInput(e.target.innerText)}>+</button>
        <button onClick={e => this.props.handleInput(e.target.innerText)}>-</button>
        <button onClick={e => this.props.handleInput(e.target.innerText)}>x</button>
        <button onClick={e => this.props.handleInput(e.target.innerText)}>/</button>
        <button onClick={e => this.props.handleInput(e.target.innerText)}>CE</button>
        <button onClick={e => this.props.handleInput(e.target.innerText)}>.</button>
        <button onClick={e => this.props.handleInput(e.target.innerText)}>=</button>
        <button onClick={e => this.props.handleInput(e.target.innerText)}>9</button>
        <button onClick={e => this.props.handleInput(e.target.innerText)}>8</button>
        <button onClick={e => this.props.handleInput(e.target.innerText)}>7</button>
        <button onClick={e => this.props.handleInput(e.target.innerText)}>6</button>
        <button onClick={e => this.props.handleInput(e.target.innerText)}>5</button>
        <button onClick={e => this.props.handleInput(e.target.innerText)}>4</button>
        <button onClick={e => this.props.handleInput(e.target.innerText)}>3</button>
        <button onClick={e => this.props.handleInput(e.target.innerText)}>2</button>
        <button onClick={e => this.props.handleInput(e.target.innerText)}>1</button>
        <button onClick={e => this.props.handleInput(e.target.innerText)}>0</button>
      </div>
    )
  }
}

export default Input;