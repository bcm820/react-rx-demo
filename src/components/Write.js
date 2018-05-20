import React from 'react';
import { text$ } from '../streams';

class Write extends React.Component {
  handleChange = event => {
    text$.next(event.target.value);
  };

  render() {
    return (
      <div>
        <input type="text" onChange={this.handleChange} />
      </div>
    );
  }
}

export default Write;
