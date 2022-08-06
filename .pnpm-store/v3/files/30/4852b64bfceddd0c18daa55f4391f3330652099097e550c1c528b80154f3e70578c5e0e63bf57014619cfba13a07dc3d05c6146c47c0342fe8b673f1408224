"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Backoff = require('backoff');

var EventEmitter = require('events');

var inherits = require('util').inherits;

var WebSocket = global.WebSocket || require('ws');

var Subprovider = require('./subprovider');

var createPayload = require('../util/create-payload');

var WebsocketSubprovider = /*#__PURE__*/function (_Subprovider) {
  _inherits(WebsocketSubprovider, _Subprovider);

  var _super = _createSuper(WebsocketSubprovider);

  function WebsocketSubprovider(_ref) {
    var _this;

    var rpcUrl = _ref.rpcUrl,
        debug = _ref.debug,
        origin = _ref.origin;

    _classCallCheck(this, WebsocketSubprovider);

    _this = _super.call(this); // inherit from EventEmitter

    EventEmitter.call(_assertThisInitialized(_this));
    Object.defineProperties(_assertThisInitialized(_this), {
      _backoff: {
        value: Backoff.exponential({
          randomisationFactor: 0.2,
          maxDelay: 5000
        })
      },
      _connectTime: {
        value: null,
        writable: true
      },
      _log: {
        value: debug ? function () {
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          return console.info.apply(console, ['[WSProvider]'].concat(args));
        } : function () {}
      },
      _origin: {
        value: origin
      },
      _pendingRequests: {
        value: new Map()
      },
      _socket: {
        value: null,
        writable: true
      },
      _unhandledRequests: {
        value: []
      },
      _url: {
        value: rpcUrl
      }
    });
    _this._handleSocketClose = _this._handleSocketClose.bind(_assertThisInitialized(_this));
    _this._handleSocketMessage = _this._handleSocketMessage.bind(_assertThisInitialized(_this));
    _this._handleSocketOpen = _this._handleSocketOpen.bind(_assertThisInitialized(_this)); // Called when a backoff timeout has finished. Time to try reconnecting.

    _this._backoff.on('ready', function () {
      _this._openSocket();
    });

    _this._openSocket();

    return _this;
  }

  _createClass(WebsocketSubprovider, [{
    key: "handleRequest",
    value: function handleRequest(payload, next, end) {
      if (!this._socket || this._socket.readyState !== WebSocket.OPEN) {
        this._unhandledRequests.push(Array.from(arguments));

        this._log('Socket not open. Request queued.');

        return;
      }

      this._pendingRequests.set(payload.id, [payload, end]);

      var newPayload = createPayload(payload);
      delete newPayload.origin;

      this._socket.send(JSON.stringify(newPayload));

      this._log("Sent: ".concat(newPayload.method, " #").concat(newPayload.id));
    }
  }, {
    key: "_handleSocketClose",
    value: function _handleSocketClose(_ref2) {
      var reason = _ref2.reason,
          code = _ref2.code;

      this._log("Socket closed, code ".concat(code, " (").concat(reason || 'no reason', ")")); // If the socket has been open for longer than 5 seconds, reset the backoff


      if (this._connectTime && Date.now() - this._connectTime > 5000) {
        this._backoff.reset();
      }

      this._socket.removeEventListener('close', this._handleSocketClose);

      this._socket.removeEventListener('message', this._handleSocketMessage);

      this._socket.removeEventListener('open', this._handleSocketOpen);

      this._socket = null;

      this._backoff.backoff();
    }
  }, {
    key: "_handleSocketMessage",
    value: function _handleSocketMessage(message) {
      var payload;

      try {
        payload = JSON.parse(message.data);
      } catch (e) {
        this._log('Received a message that is not valid JSON:', payload);

        return;
      } // check if server-sent notification


      if (payload.id === undefined) {
        return this.engine.emit('data', null, payload);
      } // ignore if missing


      if (!this._pendingRequests.has(payload.id)) {
        return;
      } // retrieve payload + arguments


      var _this$_pendingRequest = this._pendingRequests.get(payload.id),
          _this$_pendingRequest2 = _slicedToArray(_this$_pendingRequest, 2),
          originalReq = _this$_pendingRequest2[0],
          end = _this$_pendingRequest2[1];

      this._pendingRequests["delete"](payload.id);

      this._log("Received: ".concat(originalReq.method, " #").concat(payload.id)); // forward response


      if (payload.error) {
        return end(new Error(payload.error.message));
      }

      end(null, payload.result);
    }
  }, {
    key: "_handleSocketOpen",
    value: function _handleSocketOpen() {
      var _this2 = this;

      this._log('Socket open.');

      this._connectTime = Date.now(); // Any pending requests need to be resent because our session was lost
      // and will not get responses for them in our new session.

      this._pendingRequests.forEach(function (_ref3) {
        var _ref4 = _slicedToArray(_ref3, 2),
            payload = _ref4[0],
            end = _ref4[1];

        _this2._unhandledRequests.push([payload, null, end]);
      });

      this._pendingRequests.clear();

      var unhandledRequests = this._unhandledRequests.splice(0, this._unhandledRequests.length);

      unhandledRequests.forEach(function (request) {
        _this2.handleRequest.apply(_this2, request);
      });
    }
  }, {
    key: "_openSocket",
    value: function _openSocket() {
      this._log('Opening socket...');

      this._socket = new WebSocket(this._url, [], this._origin ? {
        headers: {
          origin: this._origin
        }
      } : {});

      this._socket.addEventListener('close', this._handleSocketClose);

      this._socket.addEventListener('message', this._handleSocketMessage);

      this._socket.addEventListener('open', this._handleSocketOpen);
    }
  }]);

  return WebsocketSubprovider;
}(Subprovider); // multiple inheritance


Object.assign(WebsocketSubprovider.prototype, EventEmitter.prototype);
module.exports = WebsocketSubprovider;