import { getProjectRoot } from '@storybook/core-common';
/**
 * Returns true if the framework can use the base TS config.
 * @param {string} framework
 */

export var useBaseTsSupport = function (framework) {
  // These packages both have their own TS implementation.
  return !['vue', 'angular'].includes(framework);
};
export var createBabelLoader = function (options, framework) {
  return {
    test: useBaseTsSupport(framework) ? /\.(mjs|tsx?|jsx?)$/ : /\.(mjs|jsx?)$/,
    use: [{
      loader: require.resolve('babel-loader'),
      options: options
    }],
    include: [getProjectRoot()],
    exclude: /node_modules/
  };
};