"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es.promise.js");

var _baseGenerator = require("../baseGenerator");

const generator = async (packageManager, npmOptions, options) => {
  await (0, _baseGenerator.baseGenerator)(packageManager, npmOptions, options, 'ember', {
    extraPackages: [// babel-plugin-ember-modules-api-polyfill is a peerDep of @storybook/ember
    'babel-plugin-ember-modules-api-polyfill', // babel-plugin-htmlbars-inline-precompile is a peerDep of @storybook/ember
    'babel-plugin-htmlbars-inline-precompile'],
    staticDir: 'dist'
  });
};

var _default = generator;
exports.default = _default;