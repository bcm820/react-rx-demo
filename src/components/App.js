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
          <h1>streamState demo</h1>
          <Logo />
        </header>
        Component 1: <Write />
        Component 2: <Read />
        Component 3: <ReadReverse />
      </StyledApp>
    );
  }
}

export default App;
