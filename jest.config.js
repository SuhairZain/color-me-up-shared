module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleNameMapper: {
    // We use the commonjs version of lodash for tests
    // since we don't need to use any kind of tree shaking
    '^lodash-es$': '<rootDir>/node_modules/lodash/index.js'
  },
};
