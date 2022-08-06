"use strict";

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.track = track;

var _CoreManager = _interopRequireDefault(require("./CoreManager"));
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

/**
 * Parse.Analytics provides an interface to Parse's logging and analytics
 * backend.
 *
 * @class Parse.Analytics
 * @static
 * @hideconstructor
 */

/**
 * Tracks the occurrence of a custom event with additional dimensions.
 * Parse will store a data point at the time of invocation with the given
 * event name.
 *
 * Dimensions will allow segmentation of the occurrences of this custom
 * event. Keys and values should be {@code String}s, and will throw
 * otherwise.
 *
 * To track a user signup along with additional metadata, consider the
 * following:
 * <pre>
 * var dimensions = {
 *  gender: 'm',
 *  source: 'web',
 *  dayType: 'weekend'
 * };
 * Parse.Analytics.track('signup', dimensions);
 * </pre>
 *
 * There is a default limit of 8 dimensions per event tracked.
 *
 * @function track
 * @name Parse.Analytics.track
 * @param {string} name The name of the custom event to report to Parse as
 * having happened.
 * @param {object} dimensions The dictionary of information by which to
 * segment this event.
 * @returns {Promise} A promise that is resolved when the round-trip
 * to the server completes.
 */


function track(name
/*: string*/
, dimensions
/*: { [key: string]: string }*/
)
/*: Promise*/
{
  name = name || '';
  name = name.replace(/^\s*/, '');
  name = name.replace(/\s*$/, '');

  if (name.length === 0) {
    throw new TypeError('A name for the custom event must be provided');
  }

  for (var _key in dimensions) {
    if (typeof _key !== 'string' || typeof dimensions[_key] !== 'string') {
      throw new TypeError('track() dimensions expects keys and values of type "string".');
    }
  }

  return _CoreManager.default.getAnalyticsController().track(name, dimensions);
}

var DefaultController = {
  track: function (name, dimensions) {
    var path = "events/".concat(name);

    var RESTController = _CoreManager.default.getRESTController();

    return RESTController.request('POST', path, {
      dimensions: dimensions
    });
  }
};

_CoreManager.default.setAnalyticsController(DefaultController);