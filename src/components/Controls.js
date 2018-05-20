import React from 'react';
import { spinnerConfig$, initialConfig } from '../streams';

class Controls extends React.Component {
  state = initialConfig;

  componentDidMount() {
    this._config$ = spinnerConfig$.subscribe(state => this.setState(state));
  }

  componentWillUnmount() {
    this._config$.unsubscribe();
  }

  render() {
    const sectionKeys = Object.keys(this.state);
    return (
      <div>
        {sectionKeys.map(this.renderSections)}
        <button onClick={this.handleClick}>Go!</button>
      </div>
    );
  }

  renderSections = category => {
    const controls = Object.keys(this.state[category]).filter(
      key => key !== 'ease' && key !== 'duration'
    );
    return (
      <div key={category}>
        <strong>{category}</strong>
        <table>
          <tbody>
            {controls.map(key => this.renderControl(category, key))}
          </tbody>
        </table>
        <br />
      </div>
    );
  };

  renderControl = (category, key) => {
    return (
      <tr key={key}>
        <td width={80}>{key}</td>
        <td>
          <input
            style={{ width: 50 }}
            type="number"
            min={key === 'speed' ? 1 : null}
            max={key === 'speed' ? 10 : null}
            value={this.state[category][key]}
            onChange={e => this.handleChange(category, key, e.target.value)}
          />
        </td>
      </tr>
    );
  };

  handleChange = (category, key, value) => {
    const controls = this.state[category];
    this.setState({ [category]: { ...controls, [key]: value } });
  };

  handleClick = () => {
    spinnerConfig$.next(this.state);
  };
}

export default Controls;
