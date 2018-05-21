import React from 'react';
import { NumberSubject$ } from './App';

class NumberControls extends React.Component {
  state = {
    spin: {
      speed: 3
    },
    resize: {
      from: 80,
      to: 80
    }
  };

  componentWillMount() {
    NumberSubject$.next(this.state);
  }

  componentDidUpdate() {
    NumberSubject$.next(this.state);
  }

  handleChange = (groupLabel, control, changedValue) => {
    const group = this.state[groupLabel];
    this.setState({ [groupLabel]: { ...group, [control]: changedValue } });
  };

  render() {
    const groupLabel = Object.keys(this.state);
    const controlGroups = groupLabel.map(this.renderControlGroups);
    return <div>{controlGroups}</div>;
  }

  renderControlGroups = groupLabel => {
    const controlLabels = Object.keys(this.state[groupLabel]);
    return (
      <div key={groupLabel}>
        <strong>{groupLabel}</strong>
        <table>
          <tbody>
            {controlLabels.map(controlLabel =>
              this.renderControl(groupLabel, controlLabel)
            )}
          </tbody>
        </table>
        <br />
      </div>
    );
  };

  renderControl = (groupLabel, controlLabel) => {
    return (
      <tr key={controlLabel}>
        <td>{controlLabel}</td>
        <td>
          <input
            type="number"
            min={controlLabel === 'speed' ? 1 : 0}
            max={controlLabel === 'speed' ? 10 : 1000}
            step={controlLabel !== 'speed' ? 50 : 1}
            value={this.state[groupLabel][controlLabel]}
            onChange={event =>
              this.handleChange(groupLabel, controlLabel, event.target.value)
            }
          />
        </td>
      </tr>
    );
  };
}

export default NumberControls;
