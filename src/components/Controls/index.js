import React from 'react';
import { rxConnect } from '../../rxStore';
import { changeControl } from '../../rxStore/actions';
import { Control } from './Control';

class Controls extends React.Component {
  handleChange = (label, value) => {
    const { rxState, dispatch } = this.props;
    const name = label === 'mirror' ? rxState.name : 'custom';
    const control = { [label]: value, name };
    dispatch(changeControl(control));
  };

  render() {
    const { rxState } = this.props;
    return Object.keys(rxState).map(key => (
      <Control
        key={key}
        control={key}
        value={rxState[key]}
        handleChange={this.handleChange}
        mirror={rxState.mirror}
      />
    ));
  }
}

export default rxConnect(Controls);
