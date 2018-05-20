import React from 'react';
import { text$ } from '../streams';

class Read extends React.Component {
  state = { text: '' };

  componentDidMount() {
    this._text$ = text$.subscribe(text => this.setState({ text }));
  }

  componentWillUnmount() {
    this._text$.unsubscribe();
  }

  render() {
    return <p>Read text from stream: {this.state.text}</p>;
  }
}

export default Read;
