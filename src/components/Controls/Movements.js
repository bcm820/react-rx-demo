import React from 'react';
import { Movement$ } from '../../subjects';
import tween from 'xstream/extra/tween';

class Movements extends React.Component {
  state = {
    tween: { ...tween },
    current: 'exponential.easeInOut'
  };

  componentDidUpdate() {
    const [group, func] = this.state.current.split('.');
    Movement$.next(this.state.tween[group][func]);
  }

  handleChange = event => this.setState({ current: event.target.value });

  render() {
    return (
      <span>
        <strong>movement: </strong>
        <br />
        <select onChange={this.handleChange} value={this.state.current}>
          {Object.keys(this.state.tween).map(group =>
            Object.keys(this.state.tween[group]).map(func => (
              <option key={func} value={`${group}.${func}`}>
                {group}: {func}
              </option>
            ))
          )}
        </select>
      </span>
    );
  }
}

export default Movements;
