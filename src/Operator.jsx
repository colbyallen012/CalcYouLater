import React, { Component } from 'react';

export class Operator extends Component {

  render () {
    return (
      <div className='Operator'>
        <h2>Operator Component</h2>
        <button onClick={this.props.handleOperator}>+</button>
        <button onClick={this.props.handleOperator}>-</button>
        <button onClick={this.props.handleOperator}>X</button>
        <button onClick={this.props.handleOperator}>/</button>
      </div>
    )
  }
}

export default Operator;