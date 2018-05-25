import React from 'react';

import Controls from './Controls';
import Presets from './Presets';
import Spinner, { MirroredSpinner } from './Spinner';

const App = () => (
  <div>
    <p>React-Rx Demo</p>
    <Presets />
    <Controls />
    <Spinner />
    <MirroredSpinner />
  </div>
);

export default App;
