import React from 'react';

import {WrapperProviders} from './providers';
import {AppRouter} from './routes';
function App() {
  return (
    <WrapperProviders>
      <AppRouter />
    </WrapperProviders>
  );
}

export default App;
