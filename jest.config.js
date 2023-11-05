module.exports = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': '@swc-node/jest',
  },
  
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
};