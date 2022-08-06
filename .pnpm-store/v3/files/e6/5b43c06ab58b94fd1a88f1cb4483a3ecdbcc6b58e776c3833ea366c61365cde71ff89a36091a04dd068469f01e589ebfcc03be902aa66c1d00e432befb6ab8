"use strict";

var _Reflect$construct = require("@babel/runtime-corejs3/core-js-stable/reflect/construct");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = exports.InternalWeb3Events = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime-corejs3/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/getPrototypeOf"));

var _freeze = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/freeze"));

var _bind = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/bind"));

var _events = _interopRequireDefault(require("events"));

var _events2 = require("./Web3Connector/events");

var _ethers = require("ethers");

var _convert = require("./utils/convert");

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
} // Events emitted by Moralis


var InternalWeb3Events = (0, _freeze.default)({
  ACCOUNT_CHANGED: 'accountChanged',
  CHAIN_CHANGED: 'chainChanged',
  PROVIDER_CONNECT: 'provider-connect',
  PROVIDER_DISCONNECT: 'provider-disconnect',
  WEB3_ENABLED: 'web3Enabled',
  WEB3_DEACTIVATED: 'web3Deactivated'
});
/**
 * Wrapper for the internal web3 provider,
 * responsible for syncing data when connector connects/deactivates
 * Gives access to ethers functionalities, initialized by the connector
 */

exports.InternalWeb3Events = InternalWeb3Events;

var InternalWeb3Provider = /*#__PURE__*/function (_EventEmitter) {
  (0, _inherits2.default)(InternalWeb3Provider, _EventEmitter);

  var _super = _createSuper(InternalWeb3Provider);

  function InternalWeb3Provider(connector) {
    var _context, _context2, _context3, _context4;

    var _this;

    var anyNetwork = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var privateKey = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    (0, _classCallCheck2.default)(this, InternalWeb3Provider);
    _this = _super.call(this);

    if (!connector) {
      throw new Error('Cannot initialize InternalWeb3Provider without a connector');
    }

    _this.connector = connector;
    _this.anyNetwork = anyNetwork;
    _this.privateKey = privateKey;
    _this.handleAccountChanged = (0, _bind.default)(_context = _this.handleAccountChanged).call(_context, (0, _assertThisInitialized2.default)(_this));
    _this.handleChainChanged = (0, _bind.default)(_context2 = _this.handleChainChanged).call(_context2, (0, _assertThisInitialized2.default)(_this));
    _this.handleConnect = (0, _bind.default)(_context3 = _this.handleConnect).call(_context3, (0, _assertThisInitialized2.default)(_this));
    _this.handleDisconnect = (0, _bind.default)(_context4 = _this.handleDisconnect).call(_context4, (0, _assertThisInitialized2.default)(_this));
    return _this;
  }

  (0, _createClass2.default)(InternalWeb3Provider, [{
    key: "activate",
    value: function () {
      var _activate = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(options) {
        var _yield$this$connector, provider, chainId, account, network;

        return _regenerator.default.wrap(function (_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                if (this.connector) {
                  _context5.next = 2;
                  break;
                }

                throw new Error('Cannot activate InternalWeb3Provider without a connector');

              case 2:
                if (this.connector.on) {
                  this.connector.on(_events2.ConnectorEvents.ACCOUNT_CHANGED, this.handleAccountChanged);
                  this.connector.on(_events2.ConnectorEvents.CHAIN_CHANGED, this.handleChainChanged);
                  this.connector.on(_events2.ConnectorEvents.CONNECT, this.handleConnect);
                  this.connector.on(_events2.ConnectorEvents.DISCONNECT, this.handleDisconnect);
                }

                _context5.next = 5;
                return this.connector.activate(options);

              case 5:
                _yield$this$connector = _context5.sent;
                provider = _yield$this$connector.provider;
                chainId = _yield$this$connector.chainId;
                account = _yield$this$connector.account;
                this.provider = provider;
                this.chainId = chainId;
                this.account = account;
                network = this.anyNetwork ? 'any' : (0, _convert.fromHexToDecimal)(chainId);
                this.web3 = new _ethers.ethers.providers.Web3Provider(provider, network);
                return _context5.abrupt("return", {
                  provider: provider,
                  chainId: chainId,
                  account: account,
                  web3: this.web3
                });

              case 15:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee, this);
      }));

      return function () {
        return _activate.apply(this, arguments);
      };
    }() // Returns a provider (or wallet if a privateKey is provided) that can sign messages (throws if not possible, ie. the account cannot sign)

  }, {
    key: "signer",
    get: function () {
      return this.privateKey != null ? new _ethers.ethers.Wallet(this.privateKey, this.web3) : this.web3.getSigner(this.account);
    } // Returns a provider (or wallet if a privateKey is provided) that can sign messages or the normal web3 provider as fallback

  }, {
    key: "signerOrProvider",
    get: function () {
      try {
        if (this.account) {
          return this.privateKey != null ? new _ethers.ethers.Wallet(this.privateKey, this.web3) : this.web3.getSigner(this.account);
        }

        return this.web3;
      } catch (error) {
        return this.web3;
      }
    }
  }, {
    key: "handleChainChanged",
    value: function (chainId) {
      this.chainId = chainId;
      this.web3 = new _ethers.ethers.providers.Web3Provider(this.provider, (0, _convert.fromHexToDecimal)(chainId));
      this.emit(InternalWeb3Events.CHAIN_CHANGED, chainId);
    }
  }, {
    key: "handleAccountChanged",
    value: function (account) {
      this.account = account;
      this.emit(InternalWeb3Events.ACCOUNT_CHANGED, account);
    } // Handle Connect events fired from connectors

  }, {
    key: "handleConnect",
    value: function (connectInfo) {
      this.emit(InternalWeb3Events.PROVIDER_CONNECT, connectInfo);
    } // Handle Disconnect events fired from connectors

  }, {
    key: "handleDisconnect",
    value: function (error) {
      this.emit(InternalWeb3Events.PROVIDER_DISCONNECT, error);
    }
  }, {
    key: "deactivate",
    value: function () {
      var _deactivate = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2() {
        return _regenerator.default.wrap(function (_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                this.account = null;
                this.chianId = null;
                this.web3 = null;
                this.provider = null;
                this.privateKey = null;

                if (!this.connector) {
                  _context6.next = 10;
                  break;
                }

                if (this.connector.removeListener) {
                  this.connector.removeListener(InternalWeb3Events.CHAIN_CHANGED, this.handleChainChanged);
                  this.connector.removeListener(InternalWeb3Events.ACCOUNT_CHANGED, this.handleAccountChanged);
                  this.connector.removeListener(InternalWeb3Events.PROVIDER_CONNECT, this.handleConnect);
                  this.connector.removeListener(InternalWeb3Events.PROVIDER_DISCONNECT, this.handleDisconnect);
                }

                if (!this.connector.deactivate) {
                  _context6.next = 10;
                  break;
                }

                _context6.next = 10;
                return this.connector.deactivate();

              case 10:
                this.connector = null;

              case 11:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee2, this);
      }));

      return function () {
        return _deactivate.apply(this, arguments);
      };
    }()
  }]);
  return InternalWeb3Provider;
}(_events.default);

var _default = InternalWeb3Provider;
exports.default = _default;