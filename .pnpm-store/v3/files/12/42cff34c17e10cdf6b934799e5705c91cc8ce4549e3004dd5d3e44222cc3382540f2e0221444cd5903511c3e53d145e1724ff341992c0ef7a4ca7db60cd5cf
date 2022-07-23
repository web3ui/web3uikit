"use strict";

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = _default;

var _typeof2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/typeof"));

var _concat = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/concat"));

var _indexOf = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/index-of"));

var _keys = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/keys"));

var _startsWith = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/starts-with"));

var _isArray = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/array/is-array"));

var _map = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/map"));

var _ParseACL = _interopRequireDefault(require("./ParseACL"));

var _ParseFile = _interopRequireDefault(require("./ParseFile"));

var _ParseGeoPoint = _interopRequireDefault(require("./ParseGeoPoint"));

var _ParsePolygon = _interopRequireDefault(require("./ParsePolygon"));

var _ParseObject = _interopRequireDefault(require("./ParseObject"));

var _ParseOp = require("./ParseOp");

var _ParseRelation = _interopRequireDefault(require("./ParseRelation"));
/**
 * Copyright (c) 2015-present, Parse, LLC.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @flow
 */


function encode(value
/*: mixed*/
, disallowObjects
/*: boolean*/
, forcePointers
/*: boolean*/
, seen
/*: Array<mixed>*/
, offline
/*: boolean*/
)
/*: any*/
{
  if (value instanceof _ParseObject.default) {
    var _context;

    if (disallowObjects) {
      throw new Error('Parse Objects not allowed here');
    }

    var seenEntry = value.id ? (0, _concat.default)(_context = "".concat(value.className, ":")).call(_context, value.id) : value;

    if (forcePointers || !seen || (0, _indexOf.default)(seen).call(seen, seenEntry) > -1 || value.dirty() || (0, _keys.default)(value._getServerData()).length < 1) {
      var _context2;

      if (offline && (0, _startsWith.default)(_context2 = value._getId()).call(_context2, 'local')) {
        return value.toOfflinePointer();
      }

      return value.toPointer();
    }

    seen = (0, _concat.default)(seen).call(seen, seenEntry);
    return value._toFullJSON(seen, offline);
  }

  if (value instanceof _ParseOp.Op || value instanceof _ParseACL.default || value instanceof _ParseGeoPoint.default || value instanceof _ParsePolygon.default || value instanceof _ParseRelation.default) {
    return value.toJSON();
  }

  if (value instanceof _ParseFile.default) {
    if (!value.url()) {
      throw new Error('Tried to encode an unsaved file.');
    }

    return value.toJSON();
  }

  if (Object.prototype.toString.call(value) === '[object Date]') {
    if (isNaN(value)) {
      throw new Error('Tried to encode an invalid date.');
    }

    return {
      __type: 'Date',
      iso: value
      /*: any*/
      .toJSON()
    };
  }

  if (Object.prototype.toString.call(value) === '[object RegExp]' && typeof value.source === 'string') {
    return value.source;
  }

  if ((0, _isArray.default)(value)) {
    return (0, _map.default)(value).call(value, function (v) {
      return encode(v, disallowObjects, forcePointers, seen, offline);
    });
  }

  if (value && (0, _typeof2.default)(value) === 'object') {
    var output = {};

    for (var k in value) {
      output[k] = encode(value[k], disallowObjects, forcePointers, seen, offline);
    }

    return output;
  }

  return value;
}

function _default(value
/*: mixed*/
, disallowObjects
/*:: ?: boolean*/
, forcePointers
/*:: ?: boolean*/
, seen
/*:: ?: Array<mixed>*/
, offline
/*:: ?: boolean*/
)
/*: any*/
{
  return encode(value, !!disallowObjects, !!forcePointers, seen || [], offline);
}