import React from 'react';
import { initialControls, control$ } from '../../subjects';
import { ControlGroup } from './ControlGroup';
import Movements from './Movements';

class NumberControls extends React.Component {
  state = initialControls;

  componentDidUpdate() {
    control$.next(this.state);
  }

  handleChange = (groupLabel, control, value) => {
    const asInt = parseInt(value, 10);
    const group = this.state[groupLabel];
    this.setState({
      [groupLabel]: { ...group, [control]: isNaN(asInt) ? value : asInt }
    });
  };

  render() {
    return (
      <span>
        {Object.keys(this.state).map(this.renderControlGroup)}
        <Movements />
      </span>
    );
  }

  renderControlGroup = label => {
    return (
      <ControlGroup
        key={label}
        label={label}
        controls={this.state[label]}
        handleChange={this.handleChange}
      />
    );
  };
}

export default NumberControls;
