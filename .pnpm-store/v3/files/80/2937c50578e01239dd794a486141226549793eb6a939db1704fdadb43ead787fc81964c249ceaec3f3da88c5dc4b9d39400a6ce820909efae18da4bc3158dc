"use strict";

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _promise = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/promise"));

var _indexOf = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/index-of"));

var _regenerator = _interopRequireDefault(require("@babel/runtime-corejs3/regenerator"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/slicedToArray"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/asyncToGenerator"));

var _EventEmitter = _interopRequireDefault(require("./EventEmitter"));

var _LiveQueryClient = _interopRequireDefault(require("./LiveQueryClient"));

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


function getLiveQueryClient()
/*: LiveQueryClient*/
{
  return _CoreManager.default.getLiveQueryController().getDefaultLiveQueryClient();
}
/**
 * We expose three events to help you monitor the status of the WebSocket connection:
 *
 * <p>Open - When we establish the WebSocket connection to the LiveQuery server, you'll get this event.
 *
 * <pre>
 * Parse.LiveQuery.on('open', () => {
 *
 * });</pre></p>
 *
 * <p>Close - When we lose the WebSocket connection to the LiveQuery server, you'll get this event.
 *
 * <pre>
 * Parse.LiveQuery.on('close', () => {
 *
 * });</pre></p>
 *
 * <p>Error - When some network error or LiveQuery server error happens, you'll get this event.
 *
 * <pre>
 * Parse.LiveQuery.on('error', (error) => {
 *
 * });</pre></p>
 *
 * @class Parse.LiveQuery
 * @static
 */


var LiveQuery = new _EventEmitter.default();
/**
 * After open is called, the LiveQuery will try to send a connect request
 * to the LiveQuery server.
 */

LiveQuery.open = /*#__PURE__*/(0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
  var liveQueryClient;
  return _regenerator.default.wrap(function (_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return getLiveQueryClient();

        case 2:
          liveQueryClient = _context.sent;
          liveQueryClient.open();

        case 4:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
}));
/**
 * When you're done using LiveQuery, you can call Parse.LiveQuery.close().
 * This function will close the WebSocket connection to the LiveQuery server,
 * cancel the auto reconnect, and unsubscribe all subscriptions based on it.
 * If you call query.subscribe() after this, we'll create a new WebSocket
 * connection to the LiveQuery server.
 */

LiveQuery.close = /*#__PURE__*/(0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2() {
  var liveQueryClient;
  return _regenerator.default.wrap(function (_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return getLiveQueryClient();

        case 2:
          liveQueryClient = _context2.sent;
          liveQueryClient.close();

        case 4:
        case "end":
          return _context2.stop();
      }
    }
  }, _callee2);
})); // Register a default onError callback to make sure we do not crash on error

LiveQuery.on('error', function () {});
var _default = LiveQuery;
exports.default = _default;
var defaultLiveQueryClient;
var DefaultLiveQueryController = {
  setDefaultLiveQueryClient: function (liveQueryClient
  /*: LiveQueryClient*/
  ) {
    defaultLiveQueryClient = liveQueryClient;
  },
  getDefaultLiveQueryClient: function ()
  /*: Promise<LiveQueryClient>*/
  {
    return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3() {
      var _yield$Promise$all, _yield$Promise$all2, currentUser, installationId, sessionToken, liveQueryServerURL, serverURL, protocol, host, applicationId, javascriptKey, masterKey;

      return _regenerator.default.wrap(function (_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              if (!defaultLiveQueryClient) {
                _context3.next = 2;
                break;
              }

              return _context3.abrupt("return", defaultLiveQueryClient);

            case 2:
              _context3.next = 4;
              return _promise.default.all([_CoreManager.default.getUserController().currentUserAsync(), _CoreManager.default.getInstallationController().currentInstallationId()]);

            case 4:
              _yield$Promise$all = _context3.sent;
              _yield$Promise$all2 = (0, _slicedToArray2.default)(_yield$Promise$all, 2);
              currentUser = _yield$Promise$all2[0];
              installationId = _yield$Promise$all2[1];
              sessionToken = currentUser ? currentUser.getSessionToken() : undefined;
              liveQueryServerURL = _CoreManager.default.get('LIVEQUERY_SERVER_URL');

              if (!(liveQueryServerURL && (0, _indexOf.default)(liveQueryServerURL).call(liveQueryServerURL, 'ws') !== 0)) {
                _context3.next = 12;
                break;
              }

              throw new Error('You need to set a proper Parse LiveQuery server url before using LiveQueryClient');

            case 12:
              // If we can not find Parse.liveQueryServerURL, we try to extract it from Parse.serverURL
              if (!liveQueryServerURL) {
                serverURL = _CoreManager.default.get('SERVER_URL');
                protocol = (0, _indexOf.default)(serverURL).call(serverURL, 'https') === 0 ? 'wss://' : 'ws://';
                host = serverURL.replace(/^https?:\/\//, '');
                liveQueryServerURL = protocol + host;

                _CoreManager.default.set('LIVEQUERY_SERVER_URL', liveQueryServerURL);
              }

              applicationId = _CoreManager.default.get('APPLICATION_ID');
              javascriptKey = _CoreManager.default.get('JAVASCRIPT_KEY');
              masterKey = _CoreManager.default.get('MASTER_KEY');
              defaultLiveQueryClient = new _LiveQueryClient.default({
                applicationId: applicationId,
                serverURL: liveQueryServerURL,
                javascriptKey: javascriptKey,
                masterKey: masterKey,
                sessionToken: sessionToken,
                installationId: installationId
              });
              defaultLiveQueryClient.on('error', function (error) {
                LiveQuery.emit('error', error);
              });
              defaultLiveQueryClient.on('open', function () {
                LiveQuery.emit('open');
              });
              defaultLiveQueryClient.on('close', function () {
                LiveQuery.emit('close');
              });
              return _context3.abrupt("return", defaultLiveQueryClient);

            case 21:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }))();
  },
  _clearCachedDefaultClient: function () {
    defaultLiveQueryClient = null;
  }
};

_CoreManager.default.setLiveQueryController(DefaultLiveQueryController);