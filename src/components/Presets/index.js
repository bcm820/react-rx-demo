import React from 'react';
import { rxConnect } from '../../rxStore';
import data from '../../data';

class Presets extends React.Component {
  handleChange = event => {
    const { rxState, setRxState } = this.props;
    const { value } = event.target;
    value === 'custom'
      ? setRxState({ ...rxState, name: 'custom' })
      : setRxState({ ...data[value], mirror: rxState.mirror });
  };

  render() {
    const presets = Object.keys(data);
    return (
      <div>
        <label>preset: </label>
        <select onChange={this.handleChange} value={this.props.rxState.name}>
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

export default rxConnect(Presets);
