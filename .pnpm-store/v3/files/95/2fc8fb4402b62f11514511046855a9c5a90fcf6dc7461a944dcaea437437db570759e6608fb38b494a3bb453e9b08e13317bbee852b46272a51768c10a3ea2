"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = canBeSerialized;

var _ParseFile = _interopRequireDefault(require("./ParseFile"));

var _ParseObject = _interopRequireDefault(require("./ParseObject"));

var _ParseRelation = _interopRequireDefault(require("./ParseRelation"));

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

  const {
    attributes
  } = obj;

  for (const attr in attributes) {
    const val = attributes[attr];

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
  if (typeof value !== 'object') {
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

  if (Array.isArray(value)) {
    for (let i = 0; i < value.length; i++) {
      if (!canBeSerializedHelper(value[i])) {
        return false;
      }
    }

    return true;
  }

  for (const k in value) {
    if (!canBeSerializedHelper(value[k])) {
      return false;
    }
  }

  return true;
}