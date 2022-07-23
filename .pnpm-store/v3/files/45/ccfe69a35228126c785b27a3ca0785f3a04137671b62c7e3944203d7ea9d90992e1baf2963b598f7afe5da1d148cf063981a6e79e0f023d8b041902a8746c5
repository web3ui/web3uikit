"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = parseDate;
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
  const regexp = new RegExp('^([0-9]{1,4})-([0-9]{1,2})-([0-9]{1,2})' + 'T' + '([0-9]{1,2}):([0-9]{1,2}):([0-9]{1,2})' + '(.([0-9]+))?' + 'Z$');
  const match = regexp.exec(iso8601);

  if (!match) {
    return null;
  }

  const year = parseInt(match[1]) || 0;
  const month = (parseInt(match[2]) || 1) - 1;
  const day = parseInt(match[3]) || 0;
  const hour = parseInt(match[4]) || 0;
  const minute = parseInt(match[5]) || 0;
  const second = parseInt(match[6]) || 0;
  const milli = parseInt(match[8]) || 0;
  return new Date(Date.UTC(year, month, day, hour, minute, second, milli));
}