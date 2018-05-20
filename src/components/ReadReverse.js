import React from 'react';
import { text$ } from '../streams';

class ReadReverse extends React.Component {
  state = { text: '' };

  componentDidMount() {
    this._text$ = text$.subscribe(text => this.setState({ text }));
  }

  componentWillUnmount() {
    this._text$.unsubscribe();
  }

  render() {
    const text = [...this.state.text].reverse().join('');
    return <p>Reversed: {text}</p>;
  }
}

export default ReadReverse;
