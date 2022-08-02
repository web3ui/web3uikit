"use strict";

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.getJobStatus = getJobStatus;
exports.getJobsData = getJobsData;
exports.run = run;
exports.startJob = startJob;

var _keys = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/keys"));

var _promise = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/promise"));

var _typeof2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/typeof"));

var _CoreManager = _interopRequireDefault(require("./CoreManager"));

var _decode = _interopRequireDefault(require("./decode"));

var _encode = _interopRequireDefault(require("./encode"));

var _ParseError = _interopRequireDefault(require("./ParseError"));

var _ParseQuery = _interopRequireDefault(require("./ParseQuery"));

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

/**
 * Contains functions for calling and declaring
 * <a href="/docs/cloud_code_guide#functions">cloud functions</a>.
 * <p><strong><em>
 *   Some functions are only available from Cloud Code.
 * </em></strong></p>
 *
 * @class Parse.Cloud
 * @static
 * @hideconstructor
 */

/**
 * Makes a call to a cloud function.
 *
 * @function run
 * @name Parse.Cloud.run
 * @param {string} name The function name.
 * @param {object} data The parameters to send to the cloud function.
 * @param {object} options
 * @returns {Promise} A promise that will be resolved with the result
 * of the function.
 */


function run(name
/*: string*/
, data
/*: mixed*/
, options
/*: RequestOptions*/
)
/*: Promise<mixed>*/
{
  options = options || {};

  if (typeof name !== 'string' || name.length === 0) {
    throw new TypeError('Cloud function name must be a string.');
  }

  var requestOptions = {};

  if (options.useMasterKey) {
    requestOptions.useMasterKey = options.useMasterKey;
  }

  if (options.sessionToken) {
    requestOptions.sessionToken = options.sessionToken;
  }

  if (options.context && (0, _typeof2.default)(options.context) === 'object') {
    requestOptions.context = options.context;
  }

  return _CoreManager.default.getCloudController().run(name, data, requestOptions);
}
/**
 * Gets data for the current set of cloud jobs.
 *
 * @function getJobsData
 * @name Parse.Cloud.getJobsData
 * @returns {Promise} A promise that will be resolved with the result
 * of the function.
 */


function getJobsData()
/*: Promise<Object>*/
{
  return _CoreManager.default.getCloudController().getJobsData({
    useMasterKey: true
  });
}
/**
 * Starts a given cloud job, which will process asynchronously.
 *
 * @function startJob
 * @name Parse.Cloud.startJob
 * @param {string} name The function name.
 * @param {object} data The parameters to send to the cloud function.
 * @returns {Promise} A promise that will be resolved with the jobStatusId
 * of the job.
 */


function startJob(name
/*: string*/
, data
/*: mixed*/
)
/*: Promise<string>*/
{
  if (typeof name !== 'string' || name.length === 0) {
    throw new TypeError('Cloud job name must be a string.');
  }

  return _CoreManager.default.getCloudController().startJob(name, data, {
    useMasterKey: true
  });
}
/**
 * Gets job status by Id
 *
 * @function getJobStatus
 * @name Parse.Cloud.getJobStatus
 * @param {string} jobStatusId The Id of Job Status.
 * @returns {Parse.Object} Status of Job.
 */


function getJobStatus(jobStatusId
/*: string*/
)
/*: Promise<ParseObject>*/
{
  var query = new _ParseQuery.default('_JobStatus');
  return query.get(jobStatusId, {
    useMasterKey: true
  });
}

var DefaultController = {
  run: function (name, data, options
  /*: RequestOptions*/
  ) {
    var RESTController = _CoreManager.default.getRESTController();

    var payload = (0, _encode.default)(data, true);
    var request = RESTController.request('POST', "functions/".concat(name), payload, options);
    return request.then(function (res) {
      if ((0, _typeof2.default)(res) === 'object' && (0, _keys.default)(res).length > 0 && !res.hasOwnProperty('result')) {
        throw new _ParseError.default(_ParseError.default.INVALID_JSON, 'The server returned an invalid response.');
      }

      var decoded = (0, _decode.default)(res);

      if (decoded && decoded.hasOwnProperty('result')) {
        return _promise.default.resolve(decoded.result);
      }

      return _promise.default.resolve(undefined);
    });
  },
  getJobsData: function (options
  /*: RequestOptions*/
  ) {
    var RESTController = _CoreManager.default.getRESTController();

    return RESTController.request('GET', 'cloud_code/jobs/data', null, options);
  },
  startJob: function (name, data, options
  /*: RequestOptions*/
  ) {
    var RESTController = _CoreManager.default.getRESTController();

    var payload = (0, _encode.default)(data, true);
    return RESTController.request('POST', "jobs/".concat(name), payload, options);
  }
};

_CoreManager.default.setCloudController(DefaultController);