"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.previewAnnotations = exports.addons = void 0;

var _coreCommon = require("@storybook/core-common");

var previewAnnotations = function (entries = []) {
  return [...entries, (0, _coreCommon.findDistEsm)(__dirname, 'client/preview/config')];
};

exports.previewAnnotations = previewAnnotations;
var addons = [require.resolve('./framework-preset-react'), require.resolve('./framework-preset-react-dom-hack'), require.resolve('./framework-preset-cra'), require.resolve('./framework-preset-react-docs')];
exports.addons = addons;