"use strict";

var _CoreManager = _interopRequireDefault(require("./CoreManager"));

var _ParseError = _interopRequireDefault(require("./ParseError"));

var _promiseUtils = require("./promiseUtils");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }

  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
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


const {
  v4: uuidv4
} = require('uuid');

let XHR = null;

if (typeof XMLHttpRequest !== 'undefined') {
  XHR = XMLHttpRequest;
}

XHR = require('xmlhttprequest').XMLHttpRequest;
let useXDomainRequest = false;

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
  return new Promise((resolve, reject) => {
    const xdr = new XDomainRequest();

    xdr.onload = function () {
      let response;

      try {
        response = JSON.parse(xdr.responseText);
      } catch (e) {
        reject(e);
      }

      if (response) {
        resolve({
          response
        });
      }
    };

    xdr.onerror = xdr.ontimeout = function () {
      // Let's fake a real error message.
      const fakeResponse = {
        responseText: JSON.stringify({
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

const RESTController = {
  ajax(method
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
    if (useXDomainRequest) {
      return ajaxIE9(method, url, data, headers, options);
    }

    const promise = (0, _promiseUtils.resolvingPromise)();
    const isIdempotent = _CoreManager.default.get('IDEMPOTENCY') && ['POST', 'PUT'].includes(method);
    const requestId = isIdempotent ? uuidv4() : '';
    let attempts = 0;

    const dispatch = function () {
      if (XHR == null) {
        throw new Error('Cannot make a request: No definition of XMLHttpRequest was found.');
      }

      let handled = false;
      const xhr = new XHR();

      xhr.onreadystatechange = function () {
        if (xhr.readyState !== 4 || handled || xhr._aborted) {
          return;
        }

        handled = true;

        if (xhr.status >= 200 && xhr.status < 300) {
          let response;

          try {
            response = JSON.parse(xhr.responseText);

            if (typeof xhr.getResponseHeader === 'function') {
              if ((xhr.getAllResponseHeaders() || '').includes('x-parse-job-status-id: ')) {
                response = xhr.getResponseHeader('x-parse-job-status-id');
              }
            }
          } catch (e) {
            promise.reject(e.toString());
          }

          if (response) {
            promise.resolve({
              response,
              status: xhr.status,
              xhr
            });
          }
        } else if (xhr.status >= 500 || xhr.status === 0) {
          // retry on 5XX or node-xmlhttprequest error
          if (++attempts < _CoreManager.default.get('REQUEST_ATTEMPT_LIMIT')) {
            // Exponentially-growing random delay
            const delay = Math.round(Math.random() * 125 * Math.pow(2, attempts));
            setTimeout(dispatch, delay);
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
        headers['User-Agent'] = `Parse/${_CoreManager.default.get('VERSION')} (NodeJS ${process.versions.node})`;
      }

      if (isIdempotent) {
        headers['X-Parse-Request-Id'] = requestId;
      }

      if (_CoreManager.default.get('SERVER_AUTH_TYPE') && _CoreManager.default.get('SERVER_AUTH_TOKEN')) {
        headers.Authorization = `${_CoreManager.default.get('SERVER_AUTH_TYPE')} ${_CoreManager.default.get('SERVER_AUTH_TOKEN')}`;
      }

      const customHeaders = _CoreManager.default.get('REQUEST_HEADERS');

      for (const key in customHeaders) {
        headers[key] = customHeaders[key];
      }

      function handleProgress(type, event) {
        if (options && typeof options.progress === 'function') {
          if (event.lengthComputable) {
            options.progress(event.loaded / event.total, event.loaded, event.total, {
              type
            });
          } else {
            options.progress(null, null, null, {
              type
            });
          }
        }
      }

      xhr.onprogress = event => {
        handleProgress('download', event);
      };

      if (xhr.upload) {
        xhr.upload.onprogress = event => {
          handleProgress('upload', event);
        };
      }

      xhr.open(method, url, true);

      for (const h in headers) {
        xhr.setRequestHeader(h, headers[h]);
      }

      xhr.onabort = function () {
        promise.resolve({
          response: {
            results: []
          },
          status: 0,
          xhr
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

  request(method
  /*: string*/
  , path
  /*: string*/
  , data
  /*: mixed*/
  , options
  /*:: ?: RequestOptions*/
  ) {
    options = options || {};

    let url = _CoreManager.default.get('SERVER_URL');

    if (url[url.length - 1] !== '/') {
      url += '/';
    }

    url += path;
    const payload = {};

    if (data && typeof data === 'object') {
      for (const k in data) {
        payload[k] = data[k];
      }
    } // Add context


    const {
      context
    } = options;

    if (context !== undefined) {
      payload._context = context;
    }

    if (method !== 'POST') {
      payload._method = method;
      method = 'POST';
    }

    payload._ApplicationId = _CoreManager.default.get('APPLICATION_ID');

    const jsKey = _CoreManager.default.get('JAVASCRIPT_KEY');

    if (jsKey) {
      payload._JavaScriptKey = jsKey;
    }

    payload._ClientVersion = _CoreManager.default.get('VERSION');
    let {
      useMasterKey
    } = options;

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

    const {
      installationId
    } = options;
    let installationIdPromise;

    if (installationId && typeof installationId === 'string') {
      installationIdPromise = Promise.resolve(installationId);
    } else {
      const installationController = _CoreManager.default.getInstallationController();

      installationIdPromise = installationController.currentInstallationId();
    }

    return installationIdPromise.then(iid => {
      payload._InstallationId = iid;

      const userController = _CoreManager.default.getUserController();

      if (options && typeof options.sessionToken === 'string') {
        return Promise.resolve(options.sessionToken);
      }

      if (userController) {
        return userController.currentUserAsync().then(user => {
          if (user) {
            return Promise.resolve(user.getSessionToken());
          }

          return Promise.resolve(null);
        });
      }

      return Promise.resolve(null);
    }).then(token => {
      if (token) {
        payload._SessionToken = token;
      }

      const payloadString = JSON.stringify(payload);
      return RESTController.ajax(method, url, payloadString, {}, options).then(({
        response,
        status
      }) => {
        if (options.returnStatus) {
          return _objectSpread(_objectSpread({}, response), {}, {
            _status: status
          });
        }

        return response;
      });
    }).catch(RESTController.handleError);
  },

  handleError(response) {
    // Transform the error into an instance of ParseError by trying to parse
    // the error string as JSON
    let error;

    if (response && response.responseText) {
      try {
        const errorJSON = JSON.parse(response.responseText);
        error = new _ParseError.default(errorJSON.code, errorJSON.error);
      } catch (e) {
        // If we fail to parse the error text, that's okay.
        error = new _ParseError.default(_ParseError.default.INVALID_JSON, `Received an error with invalid JSON from Parse: ${response.responseText}`);
      }
    } else {
      const message = response.message ? response.message : response;
      error = new _ParseError.default(_ParseError.default.CONNECTION_FAILED, `XMLHttpRequest failed: ${JSON.stringify(message)}`);
    }

    return Promise.reject(error);
  },

  _setXHR(xhr
  /*: any*/
  ) {
    XHR = xhr;
  },

  _getXHR() {
    return XHR;
  }

};
module.exports = RESTController;