import React from 'react';

import Controls from './Controls';
import Presets from './Presets';
import { Spinner, SpinnerCopies } from './Spinner';

const App = () => (
  <div>
    <p>React-Rx Demo</p>
    <Presets />
    <Controls />
    <Spinner />
    <SpinnerCopies />
  </div>
);

export default App;
