import React from 'react';
import { rxConnect } from '../../rxStore';
import { Control } from './Control';

class Controls extends React.Component {
  handleChange = (control, value) => {
    const { rxState, setRxState } = this.props;
    const name = control === 'mirror' ? rxState.name : 'custom';
    setRxState({ ...rxState, [control]: value, name });
  };

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
