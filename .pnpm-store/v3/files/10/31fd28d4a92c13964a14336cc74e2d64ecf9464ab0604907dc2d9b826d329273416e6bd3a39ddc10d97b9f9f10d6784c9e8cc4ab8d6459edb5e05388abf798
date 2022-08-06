var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _CoreManager = _interopRequireDefault(require("./CoreManager"));

var _EventEmitter2 = _interopRequireDefault(require("./EventEmitter"));

var _ParseObject = _interopRequireDefault(require("./ParseObject"));

var _LiveQuerySubscription = _interopRequireDefault(require("./LiveQuerySubscription"));

var _promiseUtils = require("./promiseUtils");

function _createForOfIteratorHelperLoose(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (it) return (it = it.call(o)).next.bind(it);

  if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
    if (it) o = it;
    var i = 0;
    return function () {
      if (i >= o.length) return {
        done: true
      };
      return {
        done: false,
        value: o[i++]
      };
    };
  }

  throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
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
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return (0, _possibleConstructorReturn2.default)(this, result);
  };
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

var CLIENT_STATE = {
  INITIALIZED: 'initialized',
  CONNECTING: 'connecting',
  CONNECTED: 'connected',
  CLOSED: 'closed',
  RECONNECTING: 'reconnecting',
  DISCONNECTED: 'disconnected'
};
var OP_TYPES = {
  CONNECT: 'connect',
  SUBSCRIBE: 'subscribe',
  UNSUBSCRIBE: 'unsubscribe',
  ERROR: 'error'
};
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
};
var CLIENT_EMMITER_TYPES = {
  CLOSE: 'close',
  ERROR: 'error',
  OPEN: 'open'
};
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

var LiveQueryClient = function (_EventEmitter) {
  (0, _inherits2.default)(LiveQueryClient, _EventEmitter);

  var _super = _createSuper(LiveQueryClient);

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

    if (!serverURL || serverURL.indexOf('ws') !== 0) {
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
    _this.subscriptions = new Map();
    _this.state = CLIENT_STATE.INITIALIZED;

    _this.on('error', function () {});

    return _this;
  }

  (0, _createClass2.default)(LiveQueryClient, [{
    key: "shouldOpen",
    value: function () {
      return this.state === CLIENT_STATE.INITIALIZED || this.state === CLIENT_STATE.DISCONNECTED;
    }
  }, {
    key: "subscribe",
    value: function (query, sessionToken) {
      var _this2 = this;

      if (!query) {
        return;
      }

      var className = query.className;
      var queryJSON = query.toJSON();
      var where = queryJSON.where;
      var fields = queryJSON.keys ? queryJSON.keys.split(',') : undefined;
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
        _this2.socket.send(JSON.stringify(subscribeRequest));
      });
      return subscription;
    }
  }, {
    key: "unsubscribe",
    value: function (subscription) {
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
        _this3.socket.send(JSON.stringify(unsubscribeRequest));
      });
    }
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

      this.socket = new WebSocketImplementation(this.serverURL);

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
      var _this5 = this;

      this.subscriptions.forEach(function (subscription, requestId) {
        var query = subscription.query;
        var queryJSON = query.toJSON();
        var where = queryJSON.where;
        var fields = queryJSON.keys ? queryJSON.keys.split(',') : undefined;
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
          _this5.socket.send(JSON.stringify(subscribeRequest));
        });
      });
    }
  }, {
    key: "close",
    value: function () {
      if (this.state === CLIENT_STATE.INITIALIZED || this.state === CLIENT_STATE.DISCONNECTED) {
        return;
      }

      this.state = CLIENT_STATE.DISCONNECTED;
      this.socket.close();

      for (var _iterator = _createForOfIteratorHelperLoose(this.subscriptions.values()), _step; !(_step = _iterator()).done;) {
        var subscription = _step.value;
        subscription.subscribed = false;
        subscription.emit(SUBSCRIPTION_EMMITER_TYPES.CLOSE);
      }

      this._handleReset();

      this.emit(CLIENT_EMMITER_TYPES.CLOSE);
    }
  }, {
    key: "_handleReset",
    value: function () {
      this.attempts = 1;
      this.id = 0;
      this.requestId = 1;
      this.connectPromise = (0, _promiseUtils.resolvingPromise)();
      this.subscriptions = new Map();
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

      this.socket.send(JSON.stringify(connectRequest));
    }
  }, {
    key: "_handleWebSocketMessage",
    value: function (event) {
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
            setTimeout(function () {
              return subscription.emit(SUBSCRIPTION_EMMITER_TYPES.OPEN, response);
            }, 200);
          }

          break;

        case OP_EVENTS.ERROR:
          if (data.requestId) {
            if (subscription) {
              subscription.subscribePromise.resolve();
              setTimeout(function () {
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
          break;

        default:
          {
            if (!subscription) {
              break;
            }

            var override = false;

            if (data.original) {
              override = true;
              delete data.original.__type;

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
      if (this.state === CLIENT_STATE.DISCONNECTED) {
        return;
      }

      this.state = CLIENT_STATE.CLOSED;
      this.emit(CLIENT_EMMITER_TYPES.CLOSE);

      for (var _iterator2 = _createForOfIteratorHelperLoose(this.subscriptions.values()), _step2; !(_step2 = _iterator2()).done;) {
        var subscription = _step2.value;
        subscription.emit(SUBSCRIPTION_EMMITER_TYPES.CLOSE);
      }

      this._handleReconnect();
    }
  }, {
    key: "_handleWebSocketError",
    value: function (error) {
      this.emit(CLIENT_EMMITER_TYPES.ERROR, error);

      for (var _iterator3 = _createForOfIteratorHelperLoose(this.subscriptions.values()), _step3; !(_step3 = _iterator3()).done;) {
        var subscription = _step3.value;
        subscription.emit(SUBSCRIPTION_EMMITER_TYPES.ERROR, error);
      }

      this._handleReconnect();
    }
  }, {
    key: "_handleReconnect",
    value: function () {
      var _this6 = this;

      if (this.state === CLIENT_STATE.DISCONNECTED) {
        return;
      }

      this.state = CLIENT_STATE.RECONNECTING;
      var time = generateInterval(this.attempts);

      if (this.reconnectHandle) {
        clearTimeout(this.reconnectHandle);
      }

      this.reconnectHandle = setTimeout(function () {
        _this6.attempts++;
        _this6.connectPromise = (0, _promiseUtils.resolvingPromise)();

        _this6.open();
      }.bind(this), time);
    }
  }]);
  return LiveQueryClient;
}(_EventEmitter2.default);

_CoreManager.default.setWebSocketController(WebSocket);

var _default = LiveQueryClient;
exports.default = _default;