"use strict";

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = canBeSerialized;

var _isArray = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/array/is-array"));

var _typeof2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/typeof"));

var _ParseFile = _interopRequireDefault(require("./ParseFile"));

var _ParseObject = _interopRequireDefault(require("./ParseObject"));

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


function canBeSerialized(obj
/*: ParseObject*/
)
/*: boolean*/
{
  if (!(obj instanceof _ParseObject.default)) {
    return true;
  }

  var attributes = obj.attributes;

  for (var attr in attributes) {
    var val = attributes[attr];

    if (!canBeSerializedHelper(val)) {
      return false;
    }
  }

  return true;
}

function canBeSerializedHelper(value
/*: any*/
)
/*: boolean*/
{
  if ((0, _typeof2.default)(value) !== 'object') {
    return true;
  }

  if (value instanceof _ParseRelation.default) {
    return true;
  }

  if (value instanceof _ParseObject.default) {
    return !!value.id;
  }

  if (value instanceof _ParseFile.default) {
    if (value.url()) {
      return true;
    }

    return false;
  }

  if ((0, _isArray.default)(value)) {
    for (var i = 0; i < value.length; i++) {
      if (!canBeSerializedHelper(value[i])) {
        return false;
      }
    }

    return true;
  }

  for (var k in value) {
    if (!canBeSerializedHelper(value[k])) {
      return false;
    }
  }

  return true;
}