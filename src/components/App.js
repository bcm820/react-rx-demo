import React from 'react';
import Spinner from './Spinner';
import NumberControls from './NumberControls';

import { Subject } from 'rxjs';
export const NumberSubject$ = new Subject();

const App = () => (
  <div>
    <NumberControls />
    <Spinner />
  </div>
);

export default App;
