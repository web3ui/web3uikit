"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isExportsOrModuleAssignment;

var _astTypes = require("ast-types");

var expressionTo = _interopRequireWildcard(require("./expressionTo"));

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

/**
 * Returns true if the expression is of form `exports.foo = ...;` or
 * `modules.exports = ...;`.
 */
function isExportsOrModuleAssignment(path) {
  if (_astTypes.namedTypes.ExpressionStatement.check(path.node)) {
    path = path.get('expression');
  }

  if (!_astTypes.namedTypes.AssignmentExpression.check(path.node) || !_astTypes.namedTypes.MemberExpression.check(path.node.left)) {
    return false;
  }

  const exprArr = expressionTo.Array(path.get('left'));
  return exprArr[0] === 'module' && exprArr[1] === 'exports' || exprArr[0] === 'exports';
}