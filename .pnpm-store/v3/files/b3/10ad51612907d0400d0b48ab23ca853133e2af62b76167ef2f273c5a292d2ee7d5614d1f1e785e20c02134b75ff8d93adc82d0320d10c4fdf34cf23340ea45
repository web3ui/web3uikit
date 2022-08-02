"use strict";

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = arrayContainsObject;

var _indexOf = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/index-of"));

var _ParseObject = _interopRequireDefault(require("./ParseObject"));
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


function arrayContainsObject(array
/*: Array<any>*/
, object
/*: ParseObject*/
)
/*: boolean*/
{
  if ((0, _indexOf.default)(array).call(array, object) > -1) {
    return true;
  }

  for (var i = 0; i < array.length; i++) {
    if (array[i] instanceof _ParseObject.default && array[i].className === object.className && array[i]._getId() === object._getId()) {
      return true;
    }
  }

  return false;
}