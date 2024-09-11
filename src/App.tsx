import React from 'react';
import ErrorBoundary from 'react-native-error-boundary';

import {Home} from './screens/home';

function App(): React.JSX.Element {
  return (
    <ErrorBoundary>
      <Home />
    </ErrorBoundary>
  );
}

export default App;
