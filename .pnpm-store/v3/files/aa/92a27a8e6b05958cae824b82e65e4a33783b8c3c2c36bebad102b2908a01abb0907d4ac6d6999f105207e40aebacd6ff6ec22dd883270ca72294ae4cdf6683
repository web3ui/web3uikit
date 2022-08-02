"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _CoreManager = _interopRequireDefault(require("./CoreManager"));

var _EventEmitter = _interopRequireDefault(require("./EventEmitter"));

var _ParseObject = _interopRequireDefault(require("./ParseObject"));

var _LiveQuerySubscription = _interopRequireDefault(require("./LiveQuerySubscription"));

var _promiseUtils = require("./promiseUtils");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
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
} // The LiveQuery client inner state


const CLIENT_STATE = {
  INITIALIZED: 'initialized',
  CONNECTING: 'connecting',
  CONNECTED: 'connected',
  CLOSED: 'closed',
  RECONNECTING: 'reconnecting',
  DISCONNECTED: 'disconnected'
}; // The event type the LiveQuery client should sent to server

const OP_TYPES = {
  CONNECT: 'connect',
  SUBSCRIBE: 'subscribe',
  UNSUBSCRIBE: 'unsubscribe',
  ERROR: 'error'
}; // The event we get back from LiveQuery server

const OP_EVENTS = {
  CONNECTED: 'connected',
  SUBSCRIBED: 'subscribed',
  UNSUBSCRIBED: 'unsubscribed',
  ERROR: 'error',
  CREATE: 'create',
  UPDATE: 'update',
  ENTER: 'enter',
  LEAVE: 'leave',
  DELETE: 'delete'
}; // The event the LiveQuery client should emit

const CLIENT_EMMITER_TYPES = {
  CLOSE: 'close',
  ERROR: 'error',
  OPEN: 'open'
}; // The event the LiveQuery subscription should emit

const SUBSCRIPTION_EMMITER_TYPES = {
  OPEN: 'open',
  CLOSE: 'close',
  ERROR: 'error',
  CREATE: 'create',
  UPDATE: 'update',
  ENTER: 'enter',
  LEAVE: 'leave',
  DELETE: 'delete'
};

const generateInterval = k => {
  return Math.random() * Math.min(30, Math.pow(2, k) - 1) * 1000;
};
/**
 * Creates a new LiveQueryClient.
 * Extends events.EventEmitter
 * <a href="https://nodejs.org/api/events.html#events_class_eventemitter">cloud functions</a>.
 *
 * A wrapper of a standard WebSocket client. We add several useful methods to
 * help you connect/disconnect to LiveQueryServer, subscribe/unsubscribe a ParseQuery easily.
 *
 * javascriptKey and masterKey are used for verifying the LiveQueryClient when it tries
 * to connect to the LiveQuery server
 *
 * We expose three events to help you monitor the status of the LiveQueryClient.
 *
 * <pre>
 * let Parse = require('parse/node');
 * let LiveQueryClient = Parse.LiveQueryClient;
 * let client = new LiveQueryClient({
 *   applicationId: '',
 *   serverURL: '',
 *   javascriptKey: '',
 *   masterKey: ''
 *  });
 * </pre>
 *
 * Open - When we establish the WebSocket connection to the LiveQuery server, you'll get this event.
 * <pre>
 * client.on('open', () => {
 *
 * });</pre>
 *
 * Close - When we lose the WebSocket connection to the LiveQuery server, you'll get this event.
 * <pre>
 * client.on('close', () => {
 *
 * });</pre>
 *
 * Error - When some network error or LiveQuery server error happens, you'll get this event.
 * <pre>
 * client.on('error', (error) => {
 *
 * });</pre>
 *
 * @alias Parse.LiveQueryClient
 */


class LiveQueryClient extends _EventEmitter.default {
  /**
   * @param {object} options
   * @param {string} options.applicationId - applicationId of your Parse app
   * @param {string} options.serverURL - <b>the URL of your LiveQuery server</b>
   * @param {string} options.javascriptKey (optional)
   * @param {string} options.masterKey (optional) Your Parse Master Key. (Node.js only!)
   * @param {string} options.sessionToken (optional)
   * @param {string} options.installationId (optional)
   */
  constructor({
    applicationId,
    serverURL,
    javascriptKey,
    masterKey,
    sessionToken,
    installationId
  }) {
    super();

    _defineProperty(this, "attempts", void 0);

    _defineProperty(this, "id", void 0);

    _defineProperty(this, "requestId", void 0);

    _defineProperty(this, "applicationId", void 0);

    _defineProperty(this, "serverURL", void 0);

    _defineProperty(this, "javascriptKey", void 0);

    _defineProperty(this, "masterKey", void 0);

    _defineProperty(this, "sessionToken", void 0);

    _defineProperty(this, "installationId", void 0);

    _defineProperty(this, "additionalProperties", void 0);

    _defineProperty(this, "connectPromise", void 0);

    _defineProperty(this, "subscriptions", void 0);

    _defineProperty(this, "socket", void 0);

    _defineProperty(this, "state", void 0);

    if (!serverURL || serverURL.indexOf('ws') !== 0) {
      throw new Error('You need to set a proper Parse LiveQuery server url before using LiveQueryClient');
    }

    this.reconnectHandle = null;
    this.attempts = 1;
    this.id = 0;
    this.requestId = 1;
    this.serverURL = serverURL;
    this.applicationId = applicationId;
    this.javascriptKey = javascriptKey || undefined;
    this.masterKey = masterKey || undefined;
    this.sessionToken = sessionToken || undefined;
    this.installationId = installationId || undefined;
    this.additionalProperties = true;
    this.connectPromise = (0, _promiseUtils.resolvingPromise)();
    this.subscriptions = new Map();
    this.state = CLIENT_STATE.INITIALIZED; // adding listener so process does not crash
    // best practice is for developer to register their own listener

    this.on('error', () => {});
  }

  shouldOpen()
  /*: any*/
  {
    return this.state === CLIENT_STATE.INITIALIZED || this.state === CLIENT_STATE.DISCONNECTED;
  }
  /**
   * Subscribes to a ParseQuery
   *
   * If you provide the sessionToken, when the LiveQuery server gets ParseObject's
   * updates from parse server, it'll try to check whether the sessionToken fulfills
   * the ParseObject's ACL. The LiveQuery server will only send updates to clients whose
   * sessionToken is fit for the ParseObject's ACL. You can check the LiveQuery protocol
   * <a href="https://github.com/parse-community/parse-server/wiki/Parse-LiveQuery-Protocol-Specification">here</a> for more details. The subscription you get is the same subscription you get
   * from our Standard API.
   *
   * @param {object} query - the ParseQuery you want to subscribe to
   * @param {string} sessionToken (optional)
   * @returns {LiveQuerySubscription} subscription
   */


  subscribe(query
  /*: Object*/
  , sessionToken
  /*: ?string*/
  )
  /*: LiveQuerySubscription*/
  {
    if (!query) {
      return;
    }

    const {
      className
    } = query;
    const queryJSON = query.toJSON();
    const {
      where
    } = queryJSON;
    const fields = queryJSON.keys ? queryJSON.keys.split(',') : undefined;
    const subscribeRequest = {
      op: OP_TYPES.SUBSCRIBE,
      requestId: this.requestId,
      query: {
        className,
        where,
        fields
      }
    };

    if (sessionToken) {
      subscribeRequest.sessionToken = sessionToken;
    }

    const subscription = new _LiveQuerySubscription.default(this.requestId, query, sessionToken);
    this.subscriptions.set(this.requestId, subscription);
    this.requestId += 1;
    this.connectPromise.then(() => {
      this.socket.send(JSON.stringify(subscribeRequest));
    });
    return subscription;
  }
  /**
   * After calling unsubscribe you'll stop receiving events from the subscription object.
   *
   * @param {object} subscription - subscription you would like to unsubscribe from.
   */


  unsubscribe(subscription
  /*: Object*/
  ) {
    if (!subscription) {
      return;
    }

    this.subscriptions.delete(subscription.id);
    const unsubscribeRequest = {
      op: OP_TYPES.UNSUBSCRIBE,
      requestId: subscription.id
    };
    this.connectPromise.then(() => {
      this.socket.send(JSON.stringify(unsubscribeRequest));
    });
  }
  /**
   * After open is called, the LiveQueryClient will try to send a connect request
   * to the LiveQuery server.
   *
   */


  open() {
    const WebSocketImplementation = _CoreManager.default.getWebSocketController();

    if (!WebSocketImplementation) {
      this.emit(CLIENT_EMMITER_TYPES.ERROR, 'Can not find WebSocket implementation');
      return;
    }

    if (this.state !== CLIENT_STATE.RECONNECTING) {
      this.state = CLIENT_STATE.CONNECTING;
    }

    this.socket = new WebSocketImplementation(this.serverURL); // Bind WebSocket callbacks

    this.socket.onopen = () => {
      this._handleWebSocketOpen();
    };

    this.socket.onmessage = event => {
      this._handleWebSocketMessage(event);
    };

    this.socket.onclose = () => {
      this._handleWebSocketClose();
    };

    this.socket.onerror = error => {
      this._handleWebSocketError(error);
    };
  }

  resubscribe() {
    this.subscriptions.forEach((subscription, requestId) => {
      const {
        query
      } = subscription;
      const queryJSON = query.toJSON();
      const {
        where
      } = queryJSON;
      const fields = queryJSON.keys ? queryJSON.keys.split(',') : undefined;
      const {
        className
      } = query;
      const {
        sessionToken
      } = subscription;
      const subscribeRequest = {
        op: OP_TYPES.SUBSCRIBE,
        requestId,
        query: {
          className,
          where,
          fields
        }
      };

      if (sessionToken) {
        subscribeRequest.sessionToken = sessionToken;
      }

      this.connectPromise.then(() => {
        this.socket.send(JSON.stringify(subscribeRequest));
      });
    });
  }
  /**
   * This method will close the WebSocket connection to this LiveQueryClient,
   * cancel the auto reconnect and unsubscribe all subscriptions based on it.
   *
   */


  close() {
    if (this.state === CLIENT_STATE.INITIALIZED || this.state === CLIENT_STATE.DISCONNECTED) {
      return;
    }

    this.state = CLIENT_STATE.DISCONNECTED;
    this.socket.close(); // Notify each subscription about the close

    for (const subscription of this.subscriptions.values()) {
      subscription.subscribed = false;
      subscription.emit(SUBSCRIPTION_EMMITER_TYPES.CLOSE);
    }

    this._handleReset();

    this.emit(CLIENT_EMMITER_TYPES.CLOSE);
  } // ensure we start with valid state if connect is called again after close


  _handleReset() {
    this.attempts = 1;
    this.id = 0;
    this.requestId = 1;
    this.connectPromise = (0, _promiseUtils.resolvingPromise)();
    this.subscriptions = new Map();
  }

  _handleWebSocketOpen() {
    this.attempts = 1;
    const connectRequest = {
      op: OP_TYPES.CONNECT,
      applicationId: this.applicationId,
      javascriptKey: this.javascriptKey,
      masterKey: this.masterKey,
      sessionToken: this.sessionToken
    };

    if (this.additionalProperties) {
      connectRequest.installationId = this.installationId;
    }

    this.socket.send(JSON.stringify(connectRequest));
  }

  _handleWebSocketMessage(event
  /*: any*/
  ) {
    let {
      data
    } = event;

    if (typeof data === 'string') {
      data = JSON.parse(data);
    }

    let subscription = null;

    if (data.requestId) {
      subscription = this.subscriptions.get(data.requestId);
    }

    const response = {
      clientId: data.clientId,
      installationId: data.installationId
    };

    switch (data.op) {
      case OP_EVENTS.CONNECTED:
        if (this.state === CLIENT_STATE.RECONNECTING) {
          this.resubscribe();
        }

        this.emit(CLIENT_EMMITER_TYPES.OPEN);
        this.id = data.clientId;
        this.connectPromise.resolve();
        this.state = CLIENT_STATE.CONNECTED;
        break;

      case OP_EVENTS.SUBSCRIBED:
        if (subscription) {
          subscription.subscribed = true;
          subscription.subscribePromise.resolve();
          setTimeout(() => subscription.emit(SUBSCRIPTION_EMMITER_TYPES.OPEN, response), 200);
        }

        break;

      case OP_EVENTS.ERROR:
        if (data.requestId) {
          if (subscription) {
            subscription.subscribePromise.resolve();
            setTimeout(() => subscription.emit(SUBSCRIPTION_EMMITER_TYPES.ERROR, data.error), 200);
          }
        } else {
          this.emit(CLIENT_EMMITER_TYPES.ERROR, data.error);
        }

        if (data.error === 'Additional properties not allowed') {
          this.additionalProperties = false;
        }

        if (data.reconnect) {
          this._handleReconnect();
        }

        break;

      case OP_EVENTS.UNSUBSCRIBED:
        // We have already deleted subscription in unsubscribe(), do nothing here
        break;

      default:
        {
          // create, update, enter, leave, delete cases
          if (!subscription) {
            break;
          }

          let override = false;

          if (data.original) {
            override = true;
            delete data.original.__type; // Check for removed fields

            for (const field in data.original) {
              if (!(field in data.object)) {
                data.object[field] = undefined;
              }
            }

            data.original = _ParseObject.default.fromJSON(data.original, false);
          }

          delete data.object.__type;

          const parseObject = _ParseObject.default.fromJSON(data.object, override);

          if (data.original) {
            subscription.emit(data.op, parseObject, data.original, response);
          } else {
            subscription.emit(data.op, parseObject, response);
          }

          const localDatastore = _CoreManager.default.getLocalDatastore();

          if (override && localDatastore.isEnabled) {
            localDatastore._updateObjectIfPinned(parseObject).then(() => {});
          }
        }
    }
  }

  _handleWebSocketClose() {
    if (this.state === CLIENT_STATE.DISCONNECTED) {
      return;
    }

    this.state = CLIENT_STATE.CLOSED;
    this.emit(CLIENT_EMMITER_TYPES.CLOSE); // Notify each subscription about the close

    for (const subscription of this.subscriptions.values()) {
      subscription.emit(SUBSCRIPTION_EMMITER_TYPES.CLOSE);
    }

    this._handleReconnect();
  }

  _handleWebSocketError(error
  /*: any*/
  ) {
    this.emit(CLIENT_EMMITER_TYPES.ERROR, error);

    for (const subscription of this.subscriptions.values()) {
      subscription.emit(SUBSCRIPTION_EMMITER_TYPES.ERROR, error);
    }

    this._handleReconnect();
  }

  _handleReconnect() {
    // if closed or currently reconnecting we stop attempting to reconnect
    if (this.state === CLIENT_STATE.DISCONNECTED) {
      return;
    }

    this.state = CLIENT_STATE.RECONNECTING;
    const time = generateInterval(this.attempts); // handle case when both close/error occur at frequent rates we ensure we do not reconnect unnecessarily.
    // we're unable to distinguish different between close/error when we're unable to reconnect therefore
    // we try to reconnect in both cases
    // server side ws and browser WebSocket behave differently in when close/error get triggered

    if (this.reconnectHandle) {
      clearTimeout(this.reconnectHandle);
    }

    this.reconnectHandle = setTimeout((() => {
      this.attempts++;
      this.connectPromise = (0, _promiseUtils.resolvingPromise)();
      this.open();
    }).bind(this), time);
  }

}

_CoreManager.default.setWebSocketController(require('ws'));

var _default = LiveQueryClient;
exports.default = _default;