import React from 'react';
import { control$, appState, presets } from '../subjects';

class Presets extends React.Component {
  state = appState;

  componentDidMount() {
    this._subscription = control$.subscribe(
      next => this.setState(next),
      error => console.log(error)
    );
  }

  componentWillUnmount() {
    this._subscription.unsubscribe();
  }

  handleChange = event => {
    event.target.value === 'custom'
      ? control$.next({ ...this.state, name: 'custom' })
      : control$.next(presets[event.target.value]);
  };

  render() {
    return (
      <div>
        <label>preset: </label>
        <select onChange={this.handleChange} value={this.state.name}>
          {Object.keys(presets).map(this.renderPreset)}
          <option value="custom">custom</option>
        </select>
      </div>
    );
  }

  renderPreset = key => (
    <option key={key} value={key}>
      {key}
    </option>
  );
}

export default Presets;
