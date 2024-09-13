// /**
//  * @format
//  */

// import 'react-native';

// // Note: import explicitly to use the types shipped with jest.
// import {it} from '@jest/globals';
// import React from 'react';
// // Note: test renderer must be required after react-native.
// import renderer from 'react-test-renderer';

// import App from '../src/App';

// it('renders correctly', () => {
//   renderer.create(<App />);
// });

import {render} from '@testing-library/react-native';

import App from '../src/App';

describe('App', () => {
  it('renders correctly', () => {
    render(<App />);
  });
});
