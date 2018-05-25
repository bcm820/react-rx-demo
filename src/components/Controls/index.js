import React from 'react';
import { rxConnect } from '../../rxStore';
import { Control } from './Control';

class Controls extends React.Component {
  handleChange = (control, value) =>
    this.props.setRxState({
      ...this.props.rxState,
      [control]: value,
      name: 'custom'
    });

  render() {
    return Object.keys(this.props.rxState).map(key => (
      <Control
        key={key}
        control={key}
        value={this.props.rxState[key]}
        handleChange={this.handleChange}
      />
    ));
  }
}

export default rxConnect(Controls);
