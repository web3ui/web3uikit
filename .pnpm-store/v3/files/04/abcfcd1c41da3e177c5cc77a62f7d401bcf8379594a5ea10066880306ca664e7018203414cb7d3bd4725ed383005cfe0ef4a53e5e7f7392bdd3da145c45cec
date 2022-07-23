"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handlers = exports.defaultHandlers = void 0;
exports.parse = defaultParse;
exports.utils = exports.resolver = void 0;

var allHandlers = _interopRequireWildcard(require("./handlers"));

exports.handlers = allHandlers;

var _parse = _interopRequireDefault(require("./parse"));

var AllResolver = _interopRequireWildcard(require("./resolver"));

exports.resolver = AllResolver;

var utils = _interopRequireWildcard(require("./utils"));

exports.utils = utils;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */
const defaultResolver = AllResolver.findExportedComponentDefinition;
const defaultHandlers = [allHandlers.propTypeHandler, allHandlers.contextTypeHandler, allHandlers.childContextTypeHandler, allHandlers.propTypeCompositionHandler, allHandlers.propDocBlockHandler, allHandlers.flowTypeHandler, allHandlers.defaultPropsHandler, allHandlers.componentDocblockHandler, allHandlers.displayNameHandler, allHandlers.componentMethodsHandler, allHandlers.componentMethodsJsDocHandler];
/**
 * See `lib/parse.js` for more information about the arguments. This function
 * simply sets default values for convenience.
 *
 * The default resolver looks for *exported* `React.createClass(def)` calls
 * and expected `def` to resolve to an object expression.
 *
 * The default `handlers` look for `propTypes` and `getDefaultProps` in the
 * provided object expression, and extract prop type information, prop
 * documentation (from docblocks), default prop values and component
 * documentation (from a docblock).
 */

exports.defaultHandlers = defaultHandlers;

function defaultParse(src, resolver, handlers, options = {}) {
  if (!resolver) {
    resolver = defaultResolver;
  }

  if (!handlers) {
    handlers = defaultHandlers;
  }

  return (0, _parse.default)(String(src), resolver, handlers, options);
}