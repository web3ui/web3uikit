const { createJestConfig } = require('tsdx/dist/createJestConfig');
const { paths } = require('tsdx/dist/constants');

const config = createJestConfig(undefined, paths.appRoot);
config.transform['^.+\\.svg$'] = 'jest-svg-transformer';
config.globals = {
  'ts-jest': {
    isolatedModules: true,
  },
};
module.exports = config;
