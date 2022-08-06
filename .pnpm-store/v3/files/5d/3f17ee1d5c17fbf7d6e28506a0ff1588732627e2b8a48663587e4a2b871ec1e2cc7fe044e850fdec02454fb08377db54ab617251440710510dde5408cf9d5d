"use strict";

var _Reflect$construct = require("@babel/runtime-corejs3/core-js-stable/reflect/construct");

var _sliceInstanceProperty = require("@babel/runtime-corejs3/core-js-stable/instance/slice");

var _Array$from = require("@babel/runtime-corejs3/core-js-stable/array/from");

var _Symbol = require("@babel/runtime-corejs3/core-js-stable/symbol");

var _getIteratorMethod = require("@babel/runtime-corejs3/core-js/get-iterator-method");

var _Array$isArray = require("@babel/runtime-corejs3/core-js-stable/array/is-array");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _indexOf = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/index-of"));

var _map = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/map"));

var _keys = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/keys"));

var _stringify = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/json/stringify"));

var _forEach = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/for-each"));

var _values = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/values"));

var _setTimeout2 = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/set-timeout"));

var _bind = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/bind"));

var _typeof2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/typeof"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/defineProperty"));

var _CoreManager = _interopRequireDefault(require("./CoreManager"));

var _EventEmitter2 = _interopRequireDefault(require("./EventEmitter"));

var _ParseObject = _interopRequireDefault(require("./ParseObject"));

var _LiveQuerySubscription = _interopRequireDefault(require("./LiveQuerySubscription"));

var _promiseUtils = require("./promiseUtils");

function _createForOfIteratorHelper(o, allowArrayLike) {
  var it = typeof _Symbol !== "undefined" && _getIteratorMethod(o) || o["@@iterator"];

  if (!it) {
    if (_Array$isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;

      var F = function () {};

      return {
        s: F,
        n: function () {
          if (i >= o.length) return {
            done: true
          };
          return {
            done: false,
            value: o[i++]
          };
        },
        e: function (_e) {
          throw _e;
        },
        f: F
      };
    }

    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var normalCompletion = true,
      didErr = false,
      err;
  return {
    s: function () {
      it = it.call(o);
    },
    n: function () {
      var step = it.next();
      normalCompletion = step.done;
      return step;
    },
    e: function (_e2) {
      didErr = true;
      err = _e2;
    },
    f: function () {
      try {
        if (!normalCompletion && it.return != null) it.return();
      } finally {
        if (didErr) throw err;
      }
    }
  };
}

function _unsupportedIterableToArray(o, minLen) {
  var _context6;

  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);

  var n = _sliceInstanceProperty(_context6 = Object.prototype.toString.call(o)).call(_context6, 8, -1);

  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return _Array$from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function () {
    var Super = (0, _getPrototypeOf2.default)(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = (0, _getPrototypeOf2.default)(this).constructor;
      result = _Reflect$construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return (0, _possibleConstructorReturn2.default)(this, result);
  };
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !_Reflect$construct) return false;
  if (_Reflect$construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Boolean.prototype.valueOf.call(_Reflect$construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
} // The LiveQuery client inner state


var CLIENT_STATE = {
  INITIALIZED: 'initialized',
  CONNECTING: 'connecting',
  CONNECTED: 'connected',
  CLOSED: 'closed',
  RECONNECTING: 'reconnecting',
  DISCONNECTED: 'disconnected'
}; // The event type the LiveQuery client should sent to server

var OP_TYPES = {
  CONNECT: 'connect',
  SUBSCRIBE: 'subscribe',
  UNSUBSCRIBE: 'unsubscribe',
  ERROR: 'error'
}; // The event we get back from LiveQuery server

var OP_EVENTS = {
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

var CLIENT_EMMITER_TYPES = {
  CLOSE: 'close',
  ERROR: 'error',
  OPEN: 'open'
}; // The event the LiveQuery subscription should emit

var SUBSCRIPTION_EMMITER_TYPES = {
  OPEN: 'open',
  CLOSE: 'close',
  ERROR: 'error',
  CREATE: 'create',
  UPDATE: 'update',
  ENTER: 'enter',
  LEAVE: 'leave',
  DELETE: 'delete'
};

var generateInterval = function (k) {
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


var LiveQueryClient = /*#__PURE__*/function (_EventEmitter) {
  (0, _inherits2.default)(LiveQueryClient, _EventEmitter);

  var _super = _createSuper(LiveQueryClient);
  /**
   * @param {object} options
   * @param {string} options.applicationId - applicationId of your Parse app
   * @param {string} options.serverURL - <b>the URL of your LiveQuery server</b>
   * @param {string} options.javascriptKey (optional)
   * @param {string} options.masterKey (optional) Your Parse Master Key. (Node.js only!)
   * @param {string} options.sessionToken (optional)
   * @param {string} options.installationId (optional)
   */


  function LiveQueryClient(_ref) {
    var _this;

    var applicationId = _ref.applicationId,
        serverURL = _ref.serverURL,
        javascriptKey = _ref.javascriptKey,
        masterKey = _ref.masterKey,
        sessionToken = _ref.sessionToken,
        installationId = _ref.installationId;
    (0, _classCallCheck2.default)(this, LiveQueryClient);
    _this = _super.call(this);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "attempts", void 0);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "id", void 0);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "requestId", void 0);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "applicationId", void 0);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "serverURL", void 0);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "javascriptKey", void 0);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "masterKey", void 0);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "sessionToken", void 0);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "installationId", void 0);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "additionalProperties", void 0);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "connectPromise", void 0);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "subscriptions", void 0);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "socket", void 0);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "state", void 0);

    if (!serverURL || (0, _indexOf.default)(serverURL).call(serverURL, 'ws') !== 0) {
      throw new Error('You need to set a proper Parse LiveQuery server url before using LiveQueryClient');
    }

    _this.reconnectHandle = null;
    _this.attempts = 1;
    _this.id = 0;
    _this.requestId = 1;
    _this.serverURL = serverURL;
    _this.applicationId = applicationId;
    _this.javascriptKey = javascriptKey || undefined;
    _this.masterKey = masterKey || undefined;
    _this.sessionToken = sessionToken || undefined;
    _this.installationId = installationId || undefined;
    _this.additionalProperties = true;
    _this.connectPromise = (0, _promiseUtils.resolvingPromise)();
    _this.subscriptions = new _map.default();
    _this.state = CLIENT_STATE.INITIALIZED; // adding listener so process does not crash
    // best practice is for developer to register their own listener

    _this.on('error', function () {});

    return _this;
  }

  (0, _createClass2.default)(LiveQueryClient, [{
    key: "shouldOpen",
    value: function ()
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

  }, {
    key: "subscribe",
    value: function (query
    /*: Object*/
    , sessionToken
    /*: ?string*/
    )
    /*: LiveQuerySubscription*/
    {
      var _this2 = this;

      if (!query) {
        return;
      }

      var className = query.className;
      var queryJSON = query.toJSON();
      var where = queryJSON.where;
      var fields = (0, _keys.default)(queryJSON) ? (0, _keys.default)(queryJSON).split(',') : undefined;
      var subscribeRequest = {
        op: OP_TYPES.SUBSCRIBE,
        requestId: this.requestId,
        query: {
          className: className,
          where: where,
          fields: fields
        }
      };

      if (sessionToken) {
        subscribeRequest.sessionToken = sessionToken;
      }

      var subscription = new _LiveQuerySubscription.default(this.requestId, query, sessionToken);
      this.subscriptions.set(this.requestId, subscription);
      this.requestId += 1;
      this.connectPromise.then(function () {
        _this2.socket.send((0, _stringify.default)(subscribeRequest));
      });
      return subscription;
    }
    /**
     * After calling unsubscribe you'll stop receiving events from the subscription object.
     *
     * @param {object} subscription - subscription you would like to unsubscribe from.
     */

  }, {
    key: "unsubscribe",
    value: function (subscription
    /*: Object*/
    ) {
      var _this3 = this;

      if (!subscription) {
        return;
      }

      this.subscriptions.delete(subscription.id);
      var unsubscribeRequest = {
        op: OP_TYPES.UNSUBSCRIBE,
        requestId: subscription.id
      };
      this.connectPromise.then(function () {
        _this3.socket.send((0, _stringify.default)(unsubscribeRequest));
      });
    }
    /**
     * After open is called, the LiveQueryClient will try to send a connect request
     * to the LiveQuery server.
     *
     */

  }, {
    key: "open",
    value: function () {
      var _this4 = this;

      var WebSocketImplementation = _CoreManager.default.getWebSocketController();

      if (!WebSocketImplementation) {
        this.emit(CLIENT_EMMITER_TYPES.ERROR, 'Can not find WebSocket implementation');
        return;
      }

      if (this.state !== CLIENT_STATE.RECONNECTING) {
        this.state = CLIENT_STATE.CONNECTING;
      }

      this.socket = new WebSocketImplementation(this.serverURL); // Bind WebSocket callbacks

      this.socket.onopen = function () {
        _this4._handleWebSocketOpen();
      };

      this.socket.onmessage = function (event) {
        _this4._handleWebSocketMessage(event);
      };

      this.socket.onclose = function () {
        _this4._handleWebSocketClose();
      };

      this.socket.onerror = function (error) {
        _this4._handleWebSocketError(error);
      };
    }
  }, {
    key: "resubscribe",
    value: function () {
      var _context,
          _this5 = this;

      (0, _forEach.default)(_context = this.subscriptions).call(_context, function (subscription, requestId) {
        var query = subscription.query;
        var queryJSON = query.toJSON();
        var where = queryJSON.where;
        var fields = (0, _keys.default)(queryJSON) ? (0, _keys.default)(queryJSON).split(',') : undefined;
        var className = query.className;
        var sessionToken = subscription.sessionToken;
        var subscribeRequest = {
          op: OP_TYPES.SUBSCRIBE,
          requestId: requestId,
          query: {
            className: className,
            where: where,
            fields: fields
          }
        };

        if (sessionToken) {
          subscribeRequest.sessionToken = sessionToken;
        }

        _this5.connectPromise.then(function () {
          _this5.socket.send((0, _stringify.default)(subscribeRequest));
        });
      });
    }
    /**
     * This method will close the WebSocket connection to this LiveQueryClient,
     * cancel the auto reconnect and unsubscribe all subscriptions based on it.
     *
     */

  }, {
    key: "close",
    value: function () {
      var _context2;

      if (this.state === CLIENT_STATE.INITIALIZED || this.state === CLIENT_STATE.DISCONNECTED) {
        return;
      }

      this.state = CLIENT_STATE.DISCONNECTED;
      this.socket.close(); // Notify each subscription about the close

      var _iterator = _createForOfIteratorHelper((0, _values.default)(_context2 = this.subscriptions).call(_context2)),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var subscription = _step.value;
          subscription.subscribed = false;
          subscription.emit(SUBSCRIPTION_EMMITER_TYPES.CLOSE);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      this._handleReset();

      this.emit(CLIENT_EMMITER_TYPES.CLOSE);
    } // ensure we start with valid state if connect is called again after close

  }, {
    key: "_handleReset",
    value: function () {
      this.attempts = 1;
      this.id = 0;
      this.requestId = 1;
      this.connectPromise = (0, _promiseUtils.resolvingPromise)();
      this.subscriptions = new _map.default();
    }
  }, {
    key: "_handleWebSocketOpen",
    value: function () {
      this.attempts = 1;
      var connectRequest = {
        op: OP_TYPES.CONNECT,
        applicationId: this.applicationId,
        javascriptKey: this.javascriptKey,
        masterKey: this.masterKey,
        sessionToken: this.sessionToken
      };

      if (this.additionalProperties) {
        connectRequest.installationId = this.installationId;
      }

      this.socket.send((0, _stringify.default)(connectRequest));
    }
  }, {
    key: "_handleWebSocketMessage",
    value: function (event
    /*: any*/
    ) {
      var data = event.data;

      if (typeof data === 'string') {
        data = JSON.parse(data);
      }

      var subscription = null;

      if (data.requestId) {
        subscription = this.subscriptions.get(data.requestId);
      }

      var response = {
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
            (0, _setTimeout2.default)(function () {
              return subscription.emit(SUBSCRIPTION_EMMITER_TYPES.OPEN, response);
            }, 200);
          }

          break;

        case OP_EVENTS.ERROR:
          if (data.requestId) {
            if (subscription) {
              subscription.subscribePromise.resolve();
              (0, _setTimeout2.default)(function () {
                return subscription.emit(SUBSCRIPTION_EMMITER_TYPES.ERROR, data.error);
              }, 200);
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

            var override = false;

            if (data.original) {
              override = true;
              delete data.original.__type; // Check for removed fields

              for (var field in data.original) {
                if (!(field in data.object)) {
                  data.object[field] = undefined;
                }
              }

              data.original = _ParseObject.default.fromJSON(data.original, false);
            }

            delete data.object.__type;

            var parseObject = _ParseObject.default.fromJSON(data.object, override);

            if (data.original) {
              subscription.emit(data.op, parseObject, data.original, response);
            } else {
              subscription.emit(data.op, parseObject, response);
            }

            var localDatastore = _CoreManager.default.getLocalDatastore();

            if (override && localDatastore.isEnabled) {
              localDatastore._updateObjectIfPinned(parseObject).then(function () {});
            }
          }
      }
    }
  }, {
    key: "_handleWebSocketClose",
    value: function () {
      var _context3;

      if (this.state === CLIENT_STATE.DISCONNECTED) {
        return;
      }

      this.state = CLIENT_STATE.CLOSED;
      this.emit(CLIENT_EMMITER_TYPES.CLOSE); // Notify each subscription about the close

      var _iterator2 = _createForOfIteratorHelper((0, _values.default)(_context3 = this.subscriptions).call(_context3)),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var subscription = _step2.value;
          subscription.emit(SUBSCRIPTION_EMMITER_TYPES.CLOSE);
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }

      this._handleReconnect();
    }
  }, {
    key: "_handleWebSocketError",
    value: function (error
    /*: any*/
    ) {
      var _context4;

      this.emit(CLIENT_EMMITER_TYPES.ERROR, error);

      var _iterator3 = _createForOfIteratorHelper((0, _values.default)(_context4 = this.subscriptions).call(_context4)),
          _step3;

      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var subscription = _step3.value;
          subscription.emit(SUBSCRIPTION_EMMITER_TYPES.ERROR, error);
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }

      this._handleReconnect();
    }
  }, {
    key: "_handleReconnect",
    value: function () {
      var _context5,
          _this6 = this; // if closed or currently reconnecting we stop attempting to reconnect


      if (this.state === CLIENT_STATE.DISCONNECTED) {
        return;
      }

      this.state = CLIENT_STATE.RECONNECTING;
      var time = generateInterval(this.attempts); // handle case when both close/error occur at frequent rates we ensure we do not reconnect unnecessarily.
      // we're unable to distinguish different between close/error when we're unable to reconnect therefore
      // we try to reconnect in both cases
      // server side ws and browser WebSocket behave differently in when close/error get triggered

      if (this.reconnectHandle) {
        clearTimeout(this.reconnectHandle);
      }

      this.reconnectHandle = (0, _setTimeout2.default)((0, _bind.default)(_context5 = function () {
        _this6.attempts++;
        _this6.connectPromise = (0, _promiseUtils.resolvingPromise)();

        _this6.open();
      }).call(_context5, this), time);
    }
  }]);
  return LiveQueryClient;
}(_EventEmitter2.default);

_CoreManager.default.setWebSocketController(typeof WebSocket === 'function' || (typeof WebSocket === "undefined" ? "undefined" : (0, _typeof2.default)(WebSocket)) === 'object' ? WebSocket : null);

var _default = LiveQueryClient;
exports.default = _default;