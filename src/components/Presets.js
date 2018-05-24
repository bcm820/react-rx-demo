import React from 'react';
import { connect } from '../rxstore';
import data from '../data';

class Presets extends React.Component {
  handleChange = event => {
    event.target.value === 'custom'
      ? this.props.setNext({ ...this.props.nextState, name: 'custom' })
      : this.props.setNext(data[event.target.value]);
  };

  render() {
    const presets = Object.keys(data);
    return (
      <div>
        <label>preset: </label>
        <select onChange={this.handleChange} value={this.props.nextState.name}>
          {presets.map(key => (
            <option key={key} value={key}>
              {key}
            </option>
          ))}
          <option value="custom">custom</option>
        </select>
      </div>
    );
  }
}

export default connect(Presets);
