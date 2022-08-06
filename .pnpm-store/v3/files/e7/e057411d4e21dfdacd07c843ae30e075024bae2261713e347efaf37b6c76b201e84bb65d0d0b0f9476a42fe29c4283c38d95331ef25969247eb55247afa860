"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = unique;

var _arrayContainsObject = _interopRequireDefault(require("./arrayContainsObject"));

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
 *
 * @flow
 */


function unique
/*:: <T>*/
(arr
/*: Array<T>*/
)
/*: Array<T>*/
{
  const uniques = [];
  arr.forEach(value => {
    if (value instanceof _ParseObject.default) {
      if (!(0, _arrayContainsObject.default)(uniques, value)) {
        uniques.push(value);
      }
    } else {
      if (uniques.indexOf(value) < 0) {
        uniques.push(value);
      }
    }
  });
  return uniques;
}