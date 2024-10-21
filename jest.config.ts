import type {Config} from '@jest/types';

const config: Config.InitialOptions = {
  clearMocks: true,
  preset: 'react-native',
  setupFiles: ['./jest.setup.ts'],
  transform: {
    '^.+\\.(ts|tsx|js|jsx)$': 'babel-jest',
  },
  transformIgnorePatterns: [
    'node_modules/(?!(react-native|@react-native|react-native-error-boundary|react-native-safe-area-context)/)',
  ],
  moduleNameMapper: {
    '\\.svg': '<rootDir>/__mocks__/svgMock.js',
  },
  testPathIgnorePatterns: ['/node_modules/', '/android/', '/ios/', '/e2e/'],
  globals: {
    'ts-jest': {
      isolatedModules: true,
    },
  },
  coverageReporters: ['text', 'text-summary', 'html', 'lcov'],
  coverageDirectory: './coverage',
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
  collectCoverageFrom: [
    'src/**/*.{ts,tsx,js,jsx}',
    '!src/**/*.d.ts',
    '!src/**/types.ts',
    // '!src/**/index.{ts,tsx,js,jsx}',
  ],
};

export default config;
