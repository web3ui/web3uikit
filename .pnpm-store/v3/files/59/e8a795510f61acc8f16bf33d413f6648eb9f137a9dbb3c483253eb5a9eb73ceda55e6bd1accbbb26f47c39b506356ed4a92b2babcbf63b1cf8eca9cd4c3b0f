"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.babel = babel;
exports.previewAnnotations = void 0;
exports.webpackFinal = webpackFinal;

require("core-js/modules/es.promise.js");

var _coreCommon = require("@storybook/core-common");

var _reactDocgenTypescriptPlugin = _interopRequireDefault(require("@storybook/react-docgen-typescript-plugin"));

var _docsTools = require("@storybook/docs-tools");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

async function babel(config, options) {
  if (!(0, _docsTools.hasDocsOrControls)(options)) return config;
  var typescriptOptions = await options.presets.apply('typescript', {});
  var reactDocgen = typescriptOptions.reactDocgen;

  if (typeof reactDocgen !== 'string') {
    return config;
  }

  return _objectSpread(_objectSpread({}, config), {}, {
    overrides: [...((config === null || config === void 0 ? void 0 : config.overrides) || []), {
      test: reactDocgen === 'react-docgen' ? /\.(mjs|tsx?|jsx?)$/ : /\.(mjs|jsx?)$/,
      plugins: [[require.resolve('babel-plugin-react-docgen'), {
        DOC_GEN_COLLECTION_NAME: 'STORYBOOK_REACT_CLASSES'
      }]]
    }]
  });
}

async function webpackFinal(config, options) {
  if (!(0, _docsTools.hasDocsOrControls)(options)) return config;
  var typescriptOptions = await options.presets.apply('typescript', {});
  var reactDocgen = typescriptOptions.reactDocgen,
      reactDocgenTypescriptOptions = typescriptOptions.reactDocgenTypescriptOptions;

  if (reactDocgen !== 'react-docgen-typescript') {
    return config;
  }

  return _objectSpread(_objectSpread({}, config), {}, {
    plugins: [...config.plugins, new _reactDocgenTypescriptPlugin.default(_objectSpread(_objectSpread({}, reactDocgenTypescriptOptions), {}, {
      // We *need* this set so that RDT returns default values in the same format as react-docgen
      savePropValueAsString: true
    }))]
  });
}

var previewAnnotations = function (entry = [], options) {
  if (!(0, _docsTools.hasDocsOrControls)(options)) return entry;
  return [...entry, (0, _coreCommon.findDistEsm)(__dirname, 'client/docs/config')];
};

exports.previewAnnotations = previewAnnotations;