var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

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

var AbstractWeb3Connector = function (_EventEmitter) {
  (0, _inherits2.default)(AbstractWeb3Connector, _EventEmitter);

  var _super = _createSuper(AbstractWeb3Connector);

  function AbstractWeb3Connector() {
    var _this;

    (0, _classCallCheck2.default)(this, AbstractWeb3Connector);
    _this = _super.call(this);
    _this.type = 'abstract';
    _this.network = 'evm';
    _this.account = null;
    _this.chainId = null;
    _this.handleAccountsChanged = _this.handleAccountsChanged.bind((0, _assertThisInitialized2.default)(_this));
    _this.handleChainChanged = _this.handleChainChanged.bind((0, _assertThisInitialized2.default)(_this));
    _this.handleConnect = _this.handleConnect.bind((0, _assertThisInitialized2.default)(_this));
    _this.handleDisconnect = _this.handleDisconnect.bind((0, _assertThisInitialized2.default)(_this));
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
  }, {
    key: "activate",
    value: function () {
      return _regenerator.default.async(function (_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              throw new Error('Not implemented: activate()');

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, null, null, null, Promise);
    }
  }, {
    key: "handleAccountsChanged",
    value: function (accounts) {
      var account = accounts && accounts[0] ? accounts[0].toLowerCase() : null;
      this.account = account;
      this.emit(_events2.ConnectorEvents.ACCOUNT_CHANGED, account);
    }
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
  }, {
    key: "deactivate",
    value: function () {
      return _regenerator.default.async(function (_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              this.unsubscribeToEvents(this.provider);
              this.account = null;
              this.chainId = null;

            case 3:
            case "end":
              return _context2.stop();
          }
        }
      }, null, this, null, Promise);
    }
  }]);
  return AbstractWeb3Connector;
}(_events.default);

var _default = AbstractWeb3Connector;
exports.default = _default;