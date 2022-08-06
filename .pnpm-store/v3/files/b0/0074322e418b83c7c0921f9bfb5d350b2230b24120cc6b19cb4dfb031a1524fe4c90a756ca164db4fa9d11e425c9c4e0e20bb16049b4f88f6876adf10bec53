"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _EventEmitter = _interopRequireDefault(require("./EventEmitter"));

var _LiveQueryClient = _interopRequireDefault(require("./LiveQueryClient"));

var _CoreManager = _interopRequireDefault(require("./CoreManager"));

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


const LiveQuery = new _EventEmitter.default();
/**
 * After open is called, the LiveQuery will try to send a connect request
 * to the LiveQuery server.
 */

LiveQuery.open = async () => {
  const liveQueryClient = await getLiveQueryClient();
  liveQueryClient.open();
};
/**
 * When you're done using LiveQuery, you can call Parse.LiveQuery.close().
 * This function will close the WebSocket connection to the LiveQuery server,
 * cancel the auto reconnect, and unsubscribe all subscriptions based on it.
 * If you call query.subscribe() after this, we'll create a new WebSocket
 * connection to the LiveQuery server.
 */


LiveQuery.close = async () => {
  const liveQueryClient = await getLiveQueryClient();
  liveQueryClient.close();
}; // Register a default onError callback to make sure we do not crash on error


LiveQuery.on('error', () => {});
var _default = LiveQuery;
exports.default = _default;
let defaultLiveQueryClient;
const DefaultLiveQueryController = {
  setDefaultLiveQueryClient(liveQueryClient
  /*: LiveQueryClient*/
  ) {
    defaultLiveQueryClient = liveQueryClient;
  },

  async getDefaultLiveQueryClient()
  /*: Promise<LiveQueryClient>*/
  {
    if (defaultLiveQueryClient) {
      return defaultLiveQueryClient;
    }

    const [currentUser, installationId] = await Promise.all([_CoreManager.default.getUserController().currentUserAsync(), _CoreManager.default.getInstallationController().currentInstallationId()]);
    const sessionToken = currentUser ? currentUser.getSessionToken() : undefined;

    let liveQueryServerURL = _CoreManager.default.get('LIVEQUERY_SERVER_URL');

    if (liveQueryServerURL && liveQueryServerURL.indexOf('ws') !== 0) {
      throw new Error('You need to set a proper Parse LiveQuery server url before using LiveQueryClient');
    } // If we can not find Parse.liveQueryServerURL, we try to extract it from Parse.serverURL


    if (!liveQueryServerURL) {
      const serverURL = _CoreManager.default.get('SERVER_URL');

      const protocol = serverURL.indexOf('https') === 0 ? 'wss://' : 'ws://';
      const host = serverURL.replace(/^https?:\/\//, '');
      liveQueryServerURL = protocol + host;

      _CoreManager.default.set('LIVEQUERY_SERVER_URL', liveQueryServerURL);
    }

    const applicationId = _CoreManager.default.get('APPLICATION_ID');

    const javascriptKey = _CoreManager.default.get('JAVASCRIPT_KEY');

    const masterKey = _CoreManager.default.get('MASTER_KEY');

    defaultLiveQueryClient = new _LiveQueryClient.default({
      applicationId,
      serverURL: liveQueryServerURL,
      javascriptKey,
      masterKey,
      sessionToken,
      installationId
    });
    defaultLiveQueryClient.on('error', error => {
      LiveQuery.emit('error', error);
    });
    defaultLiveQueryClient.on('open', () => {
      LiveQuery.emit('open');
    });
    defaultLiveQueryClient.on('close', () => {
      LiveQuery.emit('close');
    });
    return defaultLiveQueryClient;
  },

  _clearCachedDefaultClient() {
    defaultLiveQueryClient = null;
  }

};

_CoreManager.default.setLiveQueryController(DefaultLiveQueryController);