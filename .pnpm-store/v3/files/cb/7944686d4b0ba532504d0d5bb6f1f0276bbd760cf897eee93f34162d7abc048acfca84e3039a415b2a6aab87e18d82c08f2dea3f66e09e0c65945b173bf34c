"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useBaseTsSupport = exports.createBabelLoader = void 0;

var _coreCommon = require("@storybook/core-common");

/**
 * Returns true if the framework can use the base TS config.
 * @param {string} framework
 */
var useBaseTsSupport = function (framework) {
  // These packages both have their own TS implementation.
  return !['vue', 'angular'].includes(framework);
};

exports.useBaseTsSupport = useBaseTsSupport;

var createBabelLoader = function (options, framework) {
  return {
    test: useBaseTsSupport(framework) ? /\.(mjs|tsx?|jsx?)$/ : /\.(mjs|jsx?)$/,
    use: [{
      loader: require.resolve('babel-loader'),
      options: options
    }],
    include: [(0, _coreCommon.getProjectRoot)()],
    exclude: /node_modules/
  };
};

exports.createBabelLoader = createBabelLoader;