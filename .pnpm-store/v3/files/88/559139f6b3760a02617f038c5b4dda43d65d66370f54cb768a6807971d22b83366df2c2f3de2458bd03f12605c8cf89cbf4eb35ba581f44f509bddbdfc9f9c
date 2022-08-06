"use strict";

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = parseDate;

var _parseInt2 = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/parse-int"));
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


function parseDate(iso8601
/*: string*/
)
/*: ?Date*/
{
  var regexp = new RegExp('^([0-9]{1,4})-([0-9]{1,2})-([0-9]{1,2})' + 'T' + '([0-9]{1,2}):([0-9]{1,2}):([0-9]{1,2})' + '(.([0-9]+))?' + 'Z$');
  var match = regexp.exec(iso8601);

  if (!match) {
    return null;
  }

  var year = (0, _parseInt2.default)(match[1]) || 0;
  var month = ((0, _parseInt2.default)(match[2]) || 1) - 1;
  var day = (0, _parseInt2.default)(match[3]) || 0;
  var hour = (0, _parseInt2.default)(match[4]) || 0;
  var minute = (0, _parseInt2.default)(match[5]) || 0;
  var second = (0, _parseInt2.default)(match[6]) || 0;
  var milli = (0, _parseInt2.default)(match[8]) || 0;
  return new Date(Date.UTC(year, month, day, hour, minute, second, milli));
}