import React from 'react';
import { rxConnect } from '../../rxStore';
import { setPreset, setToCustom } from '../../rxStore/actions';
import data from '../../data';

class Presets extends React.Component {
  handleChange = event => {
    const { dispatch } = this.props;
    const { value: preset } = event.target;
    preset === 'custom'
      ? dispatch(setToCustom())
      : dispatch(setPreset(data[preset]));
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
