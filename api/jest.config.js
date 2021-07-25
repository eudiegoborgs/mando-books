module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  collectCoverage: true,
  "collectCoverageFrom": [
    "**/*.ts",
    "!**/node_modules/**",
    "!**/vendor/**",
    "!**/commons/**"
  ],
  coverageDirectory: 'coverage-report',
  testMatch: [ "**/__tests__/**/*.ts?(x)", "**/?(*.)+(spec|test).ts?(x)" ]
};