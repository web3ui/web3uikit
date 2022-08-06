"use strict";

var _Reflect$construct = require("@babel/runtime-corejs3/core-js-stable/reflect/construct");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime-corejs3/regenerator"));

var _bind = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/bind"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/defineProperty"));

var _events = _interopRequireDefault(require("events"));

var _verifyChainId = _interopRequireDefault(require("../utils/verifyChainId"));

var _events2 = require("./events");

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
}
/**
 * Abstract connector to connect EIP-1193 providers to Moralis
 *
 * It should implement at least:
 * - activate()
 * - Emit ConnectorEvent.CHAIN_CHANGED when the chain has changed (if possible)
 * - Emit ConnectorEvent.ACCOUNT_CHANGED when the account has changed (if possible)
 * - type: a name to identify
 * - network: the network type that is used (eg. 'evm')
 */


var AbstractWeb3Connector = /*#__PURE__*/function (_EventEmitter) {
  (0, _inherits2.default)(AbstractWeb3Connector, _EventEmitter);

  var _super = _createSuper(AbstractWeb3Connector);

  function AbstractWeb3Connector() {
    var _context, _context2, _context3, _context4;

    var _this;

    (0, _classCallCheck2.default)(this, AbstractWeb3Connector);
    _this = _super.call(this);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "type", 'abstract');
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "network", 'evm');
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "account", null);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "chainId", null);
    _this.handleAccountsChanged = (0, _bind.default)(_context = _this.handleAccountsChanged).call(_context, (0, _assertThisInitialized2.default)(_this));
    _this.handleChainChanged = (0, _bind.default)(_context2 = _this.handleChainChanged).call(_context2, (0, _assertThisInitialized2.default)(_this));
    _this.handleConnect = (0, _bind.default)(_context3 = _this.handleConnect).call(_context3, (0, _assertThisInitialized2.default)(_this));
    _this.handleDisconnect = (0, _bind.default)(_context4 = _this.handleDisconnect).call(_context4, (0, _assertThisInitialized2.default)(_this));
    return _this;
  }

  (0, _createClass2.default)(AbstractWeb3Connector, [{
    key: "subscribeToEvents",
    value: function (provider) {
      if (provider && provider.on) {
        provider.on(_events2.EthereumEvents.CHAIN_CHANGED, this.handleChainChanged);
        provider.on(_events2.EthereumEvents.ACCOUNTS_CHANGED, this.handleAccountsChanged);
        provider.on(_events2.EthereumEvents.CONNECT, this.handleConnect);
        provider.on(_events2.EthereumEvents.DISCONNECT, this.handleDisconnect);
      }
    }
  }, {
    key: "unsubscribeToEvents",
    value: function (provider) {
      if (provider && provider.removeListener) {
        provider.removeListener(_events2.EthereumEvents.CHAIN_CHANGED, this.handleChainChanged);
        provider.removeListener(_events2.EthereumEvents.ACCOUNTS_CHANGED, this.handleAccountsChanged);
        provider.removeListener(_events2.EthereumEvents.CONNECT, this.handleConnect);
        provider.removeListener(_events2.EthereumEvents.DISCONNECT, this.handleDisconnect);
      }
    }
    /**
     * Activates the provider.
     * Should returns an object with:
     * - provider: A valid EIP-1193 provider
     * - chainId(optional): the chainId that has been connected to (in hex format)
     * - account(optional): the address that is connected to the provider
     */

  }, {
    key: "activate",
    value: function () {
      var _activate = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
        return _regenerator.default.wrap(function (_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                throw new Error('Not implemented: activate()');

              case 1:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee);
      }));

      return function () {
        return _activate.apply(this, arguments);
      };
    }()
    /**
     * Updates account and emit event, on EIP-1193 accountsChanged events
     */

  }, {
    key: "handleAccountsChanged",
    value: function (accounts) {
      var account = accounts && accounts[0] ? accounts[0].toLowerCase() : null;
      this.account = account;
      this.emit(_events2.ConnectorEvents.ACCOUNT_CHANGED, account);
    }
    /**
     * Updates chainId and emit event, on EIP-1193 accountsChanged events
     */

  }, {
    key: "handleChainChanged",
    value: function (chainId) {
      var newChainId = (0, _verifyChainId.default)(chainId);
      this.chainId = newChainId;
      this.emit(_events2.ConnectorEvents.CHAIN_CHANGED, newChainId);
    }
  }, {
    key: "handleConnect",
    value: function (connectInfo) {
      this.emit(_events2.ConnectorEvents.CONNECT, connectInfo);
    }
  }, {
    key: "handleDisconnect",
    value: function (error) {
      this.emit(_events2.ConnectorEvents.DISCONNECT, error);
    }
    /**
     * Cleans all active listners, connections and stale references
     */

  }, {
    key: "deactivate",
    value: function () {
      var _deactivate = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2() {
        return _regenerator.default.wrap(function (_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                this.unsubscribeToEvents(this.provider);
                this.account = null;
                this.chainId = null;

              case 3:
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
  return AbstractWeb3Connector;
}(_events.default);

var _default = AbstractWeb3Connector;
exports.default = _default;