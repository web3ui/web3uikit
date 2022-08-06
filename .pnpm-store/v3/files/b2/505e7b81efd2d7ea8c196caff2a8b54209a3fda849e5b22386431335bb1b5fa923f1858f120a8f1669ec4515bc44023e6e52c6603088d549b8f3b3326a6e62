"use strict";

var _Object$keys = require("@babel/runtime-corejs3/core-js-stable/object/keys");

var _Object$getOwnPropertySymbols = require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols");

var _filterInstanceProperty = require("@babel/runtime-corejs3/core-js-stable/instance/filter");

var _Object$getOwnPropertyDescriptor = require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor");

var _forEachInstanceProperty = require("@babel/runtime-corejs3/core-js-stable/instance/for-each");

var _Object$getOwnPropertyDescriptors = require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors");

var _Object$defineProperties = require("@babel/runtime-corejs3/core-js-stable/object/define-properties");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/defineProperty"));

var _typeof2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/typeof"));

var _promise = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/promise"));

var _stringify = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/json/stringify"));

var _includes = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/includes"));

var _setTimeout2 = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/set-timeout"));

var _concat = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/concat"));

var _CoreManager = _interopRequireDefault(require("./CoreManager"));

var _ParseError = _interopRequireDefault(require("./ParseError"));

var _promiseUtils = require("./promiseUtils");

function ownKeys(object, enumerableOnly) {
  var keys = _Object$keys(object);

  if (_Object$getOwnPropertySymbols) {
    var symbols = _Object$getOwnPropertySymbols(object);

    enumerableOnly && (symbols = _filterInstanceProperty(symbols).call(symbols, function (sym) {
      return _Object$getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var _context5, _context6;

    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? _forEachInstanceProperty(_context5 = ownKeys(Object(source), !0)).call(_context5, function (key) {
      (0, _defineProperty2.default)(target, key, source[key]);
    }) : _Object$getOwnPropertyDescriptors ? _Object$defineProperties(target, _Object$getOwnPropertyDescriptors(source)) : _forEachInstanceProperty(_context6 = ownKeys(Object(source))).call(_context6, function (key) {
      _Object$defineProperty(target, key, _Object$getOwnPropertyDescriptor(source, key));
    });
  }

  return target;
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

/* global XMLHttpRequest, XDomainRequest */


var _require = require('uuid'),
    uuidv4 = _require.v4;

var XHR = null;

if (typeof XMLHttpRequest !== 'undefined') {
  XHR = XMLHttpRequest;
}

var useXDomainRequest = false;

if (typeof XDomainRequest !== 'undefined' && !('withCredentials' in new XMLHttpRequest())) {
  useXDomainRequest = true;
}

function ajaxIE9(method
/*: string*/
, url
/*: string*/
, data
/*: any*/
, headers
/*:: ?: any*/
, options
/*:: ?: FullOptions*/
) {
  return new _promise.default(function (resolve, reject) {
    var xdr = new XDomainRequest();

    xdr.onload = function () {
      var response;

      try {
        response = JSON.parse(xdr.responseText);
      } catch (e) {
        reject(e);
      }

      if (response) {
        resolve({
          response: response
        });
      }
    };

    xdr.onerror = xdr.ontimeout = function () {
      // Let's fake a real error message.
      var fakeResponse = {
        responseText: (0, _stringify.default)({
          code: _ParseError.default.X_DOMAIN_REQUEST,
          error: "IE's XDomainRequest does not supply error info."
        })
      };
      reject(fakeResponse);
    };

    xdr.onprogress = function () {
      if (options && typeof options.progress === 'function') {
        options.progress(xdr.responseText);
      }
    };

    xdr.open(method, url);
    xdr.send(data);

    if (options && typeof options.requestTask === 'function') {
      options.requestTask(xdr);
    }
  });
}

var RESTController = {
  ajax: function (method
  /*: string*/
  , url
  /*: string*/
  , data
  /*: any*/
  , headers
  /*:: ?: any*/
  , options
  /*:: ?: FullOptions*/
  ) {
    var _context;

    if (useXDomainRequest) {
      return ajaxIE9(method, url, data, headers, options);
    }

    var promise = (0, _promiseUtils.resolvingPromise)();
    var isIdempotent = _CoreManager.default.get('IDEMPOTENCY') && (0, _includes.default)(_context = ['POST', 'PUT']).call(_context, method);
    var requestId = isIdempotent ? uuidv4() : '';
    var attempts = 0;

    var dispatch = function dispatch() {
      if (XHR == null) {
        throw new Error('Cannot make a request: No definition of XMLHttpRequest was found.');
      }

      var handled = false;
      var xhr = new XHR();

      xhr.onreadystatechange = function () {
        if (xhr.readyState !== 4 || handled || xhr._aborted) {
          return;
        }

        handled = true;

        if (xhr.status >= 200 && xhr.status < 300) {
          var response;

          try {
            response = JSON.parse(xhr.responseText);

            if (typeof xhr.getResponseHeader === 'function') {
              var _context2;

              if ((0, _includes.default)(_context2 = xhr.getAllResponseHeaders() || '').call(_context2, 'x-parse-job-status-id: ')) {
                response = xhr.getResponseHeader('x-parse-job-status-id');
              }
            }
          } catch (e) {
            promise.reject(e.toString());
          }

          if (response) {
            promise.resolve({
              response: response,
              status: xhr.status,
              xhr: xhr
            });
          }
        } else if (xhr.status >= 500 || xhr.status === 0) {
          // retry on 5XX or node-xmlhttprequest error
          if (++attempts < _CoreManager.default.get('REQUEST_ATTEMPT_LIMIT')) {
            // Exponentially-growing random delay
            var delay = Math.round(Math.random() * 125 * Math.pow(2, attempts));
            (0, _setTimeout2.default)(dispatch, delay);
          } else if (xhr.status === 0) {
            promise.reject('Unable to connect to the Parse API');
          } else {
            // After the retry limit is reached, fail
            promise.reject(xhr);
          }
        } else {
          promise.reject(xhr);
        }
      };

      headers = headers || {};

      if (typeof headers['Content-Type'] !== 'string') {
        // Avoid pre-flight
        headers['Content-Type'] = 'text/plain';
      }

      if (_CoreManager.default.get('IS_NODE')) {
        var _context3;

        headers['User-Agent'] = (0, _concat.default)(_context3 = "Parse/".concat(_CoreManager.default.get('VERSION'), " (NodeJS ")).call(_context3, process.versions.node, ")");
      }

      if (isIdempotent) {
        headers['X-Parse-Request-Id'] = requestId;
      }

      if (_CoreManager.default.get('SERVER_AUTH_TYPE') && _CoreManager.default.get('SERVER_AUTH_TOKEN')) {
        var _context4;

        headers.Authorization = (0, _concat.default)(_context4 = "".concat(_CoreManager.default.get('SERVER_AUTH_TYPE'), " ")).call(_context4, _CoreManager.default.get('SERVER_AUTH_TOKEN'));
      }

      var customHeaders = _CoreManager.default.get('REQUEST_HEADERS');

      for (var key in customHeaders) {
        headers[key] = customHeaders[key];
      }

      function handleProgress(type, event) {
        if (options && typeof options.progress === 'function') {
          if (event.lengthComputable) {
            options.progress(event.loaded / event.total, event.loaded, event.total, {
              type: type
            });
          } else {
            options.progress(null, null, null, {
              type: type
            });
          }
        }
      }

      xhr.onprogress = function (event) {
        handleProgress('download', event);
      };

      if (xhr.upload) {
        xhr.upload.onprogress = function (event) {
          handleProgress('upload', event);
        };
      }

      xhr.open(method, url, true);

      for (var h in headers) {
        xhr.setRequestHeader(h, headers[h]);
      }

      xhr.onabort = function () {
        promise.resolve({
          response: {
            results: []
          },
          status: 0,
          xhr: xhr
        });
      };

      xhr.send(data);

      if (options && typeof options.requestTask === 'function') {
        options.requestTask(xhr);
      }
    };

    dispatch();
    return promise;
  },
  request: function (method
  /*: string*/
  , path
  /*: string*/
  , data
  /*: mixed*/
  , options
  /*:: ?: RequestOptions*/
  ) {
    options = options || {};

    var url = _CoreManager.default.get('SERVER_URL');

    if (url[url.length - 1] !== '/') {
      url += '/';
    }

    url += path;
    var payload = {};

    if (data && (0, _typeof2.default)(data) === 'object') {
      for (var k in data) {
        payload[k] = data[k];
      }
    } // Add context


    var _options = options,
        context = _options.context;

    if (context !== undefined) {
      payload._context = context;
    }

    if (method !== 'POST') {
      payload._method = method;
      method = 'POST';
    }

    payload._ApplicationId = _CoreManager.default.get('APPLICATION_ID');

    var jsKey = _CoreManager.default.get('JAVASCRIPT_KEY');

    if (jsKey) {
      payload._JavaScriptKey = jsKey;
    }

    payload._ClientVersion = _CoreManager.default.get('VERSION');
    var _options2 = options,
        useMasterKey = _options2.useMasterKey;

    if (typeof useMasterKey === 'undefined') {
      useMasterKey = _CoreManager.default.get('USE_MASTER_KEY');
    }

    if (useMasterKey) {
      if (_CoreManager.default.get('MASTER_KEY')) {
        delete payload._JavaScriptKey;
        payload._MasterKey = _CoreManager.default.get('MASTER_KEY');
      }
    }

    if (_CoreManager.default.get('FORCE_REVOCABLE_SESSION')) {
      payload._RevocableSession = '1';
    }

    var _options3 = options,
        installationId = _options3.installationId;
    var installationIdPromise;

    if (installationId && typeof installationId === 'string') {
      installationIdPromise = _promise.default.resolve(installationId);
    } else {
      var installationController = _CoreManager.default.getInstallationController();

      installationIdPromise = installationController.currentInstallationId();
    }

    return installationIdPromise.then(function (iid) {
      payload._InstallationId = iid;

      var userController = _CoreManager.default.getUserController();

      if (options && typeof options.sessionToken === 'string') {
        return _promise.default.resolve(options.sessionToken);
      }

      if (userController) {
        return userController.currentUserAsync().then(function (user) {
          if (user) {
            return _promise.default.resolve(user.getSessionToken());
          }

          return _promise.default.resolve(null);
        });
      }

      return _promise.default.resolve(null);
    }).then(function (token) {
      if (token) {
        payload._SessionToken = token;
      }

      var payloadString = (0, _stringify.default)(payload);
      return RESTController.ajax(method, url, payloadString, {}, options).then(function (_ref) {
        var response = _ref.response,
            status = _ref.status;

        if (options.returnStatus) {
          return _objectSpread(_objectSpread({}, response), {}, {
            _status: status
          });
        }

        return response;
      });
    }).catch(RESTController.handleError);
  },
  handleError: function (response) {
    // Transform the error into an instance of ParseError by trying to parse
    // the error string as JSON
    var error;

    if (response && response.responseText) {
      try {
        var errorJSON = JSON.parse(response.responseText);
        error = new _ParseError.default(errorJSON.code, errorJSON.error);
      } catch (e) {
        // If we fail to parse the error text, that's okay.
        error = new _ParseError.default(_ParseError.default.INVALID_JSON, "Received an error with invalid JSON from Parse: ".concat(response.responseText));
      }
    } else {
      var message = response.message ? response.message : response;
      error = new _ParseError.default(_ParseError.default.CONNECTION_FAILED, "XMLHttpRequest failed: ".concat((0, _stringify.default)(message)));
    }

    return _promise.default.reject(error);
  },
  _setXHR: function (xhr
  /*: any*/
  ) {
    XHR = xhr;
  },
  _getXHR: function () {
    return XHR;
  }
};
module.exports = RESTController;