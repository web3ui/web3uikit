"use strict";

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = equals;

var _isArray = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/array/is-array"));

var _keys = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/keys"));

var _typeof2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/typeof"));

var _ParseACL = _interopRequireDefault(require("./ParseACL"));

var _ParseFile = _interopRequireDefault(require("./ParseFile"));

var _ParseGeoPoint = _interopRequireDefault(require("./ParseGeoPoint"));

var _ParseObject = _interopRequireDefault(require("./ParseObject"));
/**
 * Copyright (c) 2015-present, Parse, LLC.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */


function equals(a, b) {
  var toString = Object.prototype.toString;

  if (toString.call(a) === '[object Date]' || toString.call(b) === '[object Date]') {
    var dateA = new Date(a);
    var dateB = new Date(b);
    return +dateA === +dateB;
  }

  if ((0, _typeof2.default)(a) !== (0, _typeof2.default)(b)) {
    return false;
  }

  if (!a || (0, _typeof2.default)(a) !== 'object') {
    // a is a primitive
    return a === b;
  }

  if ((0, _isArray.default)(a) || (0, _isArray.default)(b)) {
    if (!(0, _isArray.default)(a) || !(0, _isArray.default)(b)) {
      return false;
    }

    if (a.length !== b.length) {
      return false;
    }

    for (var i = a.length; i--;) {
      if (!equals(a[i], b[i])) {
        return false;
      }
    }

    return true;
  }

  if (a instanceof _ParseACL.default || a instanceof _ParseFile.default || a instanceof _ParseGeoPoint.default || a instanceof _ParseObject.default) {
    return a.equals(b);
  }

  if (b instanceof _ParseObject.default) {
    if (a.__type === 'Object' || a.__type === 'Pointer') {
      return a.objectId === b.id && a.className === b.className;
    }
  }

  if ((0, _keys.default)(a).length !== (0, _keys.default)(b).length) {
    return false;
  }

  for (var k in a) {
    if (!equals(a[k], b[k])) {
      return false;
    }
  }

  return true;
}