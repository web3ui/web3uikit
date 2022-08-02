"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = equals;

var _ParseACL = _interopRequireDefault(require("./ParseACL"));

var _ParseFile = _interopRequireDefault(require("./ParseFile"));

var _ParseGeoPoint = _interopRequireDefault(require("./ParseGeoPoint"));

var _ParseObject = _interopRequireDefault(require("./ParseObject"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/**
 * Copyright (c) 2015-present, Parse, LLC.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */


function equals(a, b) {
  const {
    toString
  } = Object.prototype;

  if (toString.call(a) === '[object Date]' || toString.call(b) === '[object Date]') {
    const dateA = new Date(a);
    const dateB = new Date(b);
    return +dateA === +dateB;
  }

  if (typeof a !== typeof b) {
    return false;
  }

  if (!a || typeof a !== 'object') {
    // a is a primitive
    return a === b;
  }

  if (Array.isArray(a) || Array.isArray(b)) {
    if (!Array.isArray(a) || !Array.isArray(b)) {
      return false;
    }

    if (a.length !== b.length) {
      return false;
    }

    for (let i = a.length; i--;) {
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

  if (Object.keys(a).length !== Object.keys(b).length) {
    return false;
  }

  for (const k in a) {
    if (!equals(a[k], b[k])) {
      return false;
    }
  }

  return true;
}