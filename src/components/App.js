import React from 'react';
import StyledApp from './styles/StyledApp';
import Logo from './Logo';
import Write from './Write';
import Read from './Read';
import ReadReverse from './ReadReverse';

class App extends React.Component {
  render() {
    return (
      <StyledApp>
        <header>
          <h1>stream-state demo</h1>
          <Logo />
        </header>
        <Write />
        <Read />
        <ReadReverse />
      </StyledApp>
    );
  }
}

export default App;
