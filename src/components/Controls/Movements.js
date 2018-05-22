import React from 'react';
import { movement$ } from '../../subjects';
import tween from 'xstream/extra/tween';

class Movements extends React.Component {
  state = {
    movementLib: { ...tween },
    current: 'exponential.easeInOut'
  };

  componentDidUpdate() {
    const [category, movement] = this.state.current.split('.');
    movement$.next(this.state.movementLib[category][movement]);
  }

  handleChange = event => this.setState({ current: event.target.value });

  render() {
    return (
      <span>
        <strong>movement: </strong>
        <br />
        <select onChange={this.handleChange} value={this.state.current}>
          {Object.keys(this.state.movementLib).map(category =>
            Object.keys(this.state.movementLib[category]).map(movement => (
              <option key={movement} value={`${category}.${movement}`}>
                {category}: {movement}
              </option>
            ))
          )}
        </select>
      </span>
    );
  }
}

export default Movements;
