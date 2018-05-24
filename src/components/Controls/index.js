import React from 'react';
import { connect } from '../../rxstore';
import { Control } from './Control';

class Controls extends React.Component {
  handleChange = (control, value) => {
    this.props.setNextState({
      ...this.props.nextState,
      [control]: value,
      name: 'custom'
    });
  };

  render() {
    return Object.keys(this.props.nextState).map(key => (
      <Control
        key={key}
        control={key}
        value={this.props.nextState[key]}
        handleChange={this.handleChange}
      />
    ));
  }
}

export default connect(Controls);
