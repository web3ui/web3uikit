function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import "core-js/modules/es.promise.js";
import { readJSON } from 'fs-extra';
import { IgnorePlugin } from 'webpack'; // this is a hack to allow importing react-dom/client even when it's not available
// this should be removed once we drop support for react-dom < 18

export async function webpackFinal(config) {
  var reactDomPkg = await readJSON(require.resolve('react-dom/package.json'));
  return _objectSpread(_objectSpread({}, config), {}, {
    plugins: [...config.plugins, reactDomPkg.version.startsWith('18') || reactDomPkg.version.startsWith('0.0.0') ? null : new IgnorePlugin({
      resourceRegExp: /react-dom\/client$/,
      contextRegExp: /(app\/react|app\\react|@storybook\/react|@storybook\\react)/ // TODO this needs to work for both in our MONOREPO and in the user's NODE_MODULES

    })].filter(Boolean)
  });
}