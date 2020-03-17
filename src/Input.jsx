import React, { Component } from 'react';
import './Input.css';

export class Input extends Component {

  render () {
    return (
      <div className='Input'>
        <div className='Numbers'>
          <button onClick={this.props.handleInput}>7</button>
          <button onClick={this.props.handleInput}>8</button>
          <button onClick={this.props.handleInput}>9</button>
          <button onClick={this.props.handleInput}>4</button>
          <button onClick={this.props.handleInput}>5</button>
          <button onClick={this.props.handleInput}>6</button>
          <button onClick={this.props.handleInput}>1</button>
          <button onClick={this.props.handleInput}>2</button>
          <button onClick={this.props.handleInput}>3</button>
          <button onClick={this.props.handleInput}>0</button>
        </div>
        <div className='Buttons'>
          <button onClick={this.props.handleInput}>.</button>
          <button onClick={this.props.handleInput}>CE</button>
          <button onClick={this.props.handleInput}>*</button>
          <button onClick={this.props.handleInput}>/</button>
          <button onClick={this.props.handleInput}>-</button>
          <button onClick={this.props.handleInput}>+</button>
          <button onClick={this.props.handleInput}>=</button>
        </div>
      </div>
    )
  }
}

export default Input;