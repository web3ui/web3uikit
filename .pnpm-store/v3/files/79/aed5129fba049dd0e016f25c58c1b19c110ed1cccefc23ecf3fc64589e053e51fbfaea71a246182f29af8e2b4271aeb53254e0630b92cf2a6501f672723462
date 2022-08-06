var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.InternalWeb3Events = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

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

var InternalWeb3Events = Object.freeze({
  ACCOUNT_CHANGED: 'accountChanged',
  CHAIN_CHANGED: 'chainChanged',
  PROVIDER_CONNECT: 'provider-connect',
  PROVIDER_DISCONNECT: 'provider-disconnect',
  WEB3_ENABLED: 'web3Enabled',
  WEB3_DEACTIVATED: 'web3Deactivated'
});
exports.InternalWeb3Events = InternalWeb3Events;

var InternalWeb3Provider = function (_EventEmitter) {
  (0, _inherits2.default)(InternalWeb3Provider, _EventEmitter);

  var _super = _createSuper(InternalWeb3Provider);

  function InternalWeb3Provider(connector) {
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
    _this.handleAccountChanged = _this.handleAccountChanged.bind((0, _assertThisInitialized2.default)(_this));
    _this.handleChainChanged = _this.handleChainChanged.bind((0, _assertThisInitialized2.default)(_this));
    _this.handleConnect = _this.handleConnect.bind((0, _assertThisInitialized2.default)(_this));
    _this.handleDisconnect = _this.handleDisconnect.bind((0, _assertThisInitialized2.default)(_this));
    return _this;
  }

  (0, _createClass2.default)(InternalWeb3Provider, [{
    key: "activate",
    value: function (options) {
      var _await$this$connector, provider, chainId, account, network;

      return _regenerator.default.async(function (_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (this.connector) {
                _context.next = 2;
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

              _context.next = 5;
              return _regenerator.default.awrap(this.connector.activate(options));

            case 5:
              _await$this$connector = _context.sent;
              provider = _await$this$connector.provider;
              chainId = _await$this$connector.chainId;
              account = _await$this$connector.account;
              this.provider = provider;
              this.chainId = chainId;
              this.account = account;
              network = this.anyNetwork ? 'any' : (0, _convert.fromHexToDecimal)(chainId);
              this.web3 = new _ethers.ethers.providers.Web3Provider(provider, network);
              return _context.abrupt("return", {
                provider: provider,
                chainId: chainId,
                account: account,
                web3: this.web3
              });

            case 15:
            case "end":
              return _context.stop();
          }
        }
      }, null, this, null, Promise);
    }
  }, {
    key: "signer",
    get: function () {
      return this.privateKey != null ? new _ethers.ethers.Wallet(this.privateKey, this.web3) : this.web3.getSigner(this.account);
    }
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
    }
  }, {
    key: "handleConnect",
    value: function (connectInfo) {
      this.emit(InternalWeb3Events.PROVIDER_CONNECT, connectInfo);
    }
  }, {
    key: "handleDisconnect",
    value: function (error) {
      this.emit(InternalWeb3Events.PROVIDER_DISCONNECT, error);
    }
  }, {
    key: "deactivate",
    value: function () {
      return _regenerator.default.async(function (_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              this.account = null;
              this.chianId = null;
              this.web3 = null;
              this.provider = null;
              this.privateKey = null;

              if (!this.connector) {
                _context2.next = 10;
                break;
              }

              if (this.connector.removeListener) {
                this.connector.removeListener(InternalWeb3Events.CHAIN_CHANGED, this.handleChainChanged);
                this.connector.removeListener(InternalWeb3Events.ACCOUNT_CHANGED, this.handleAccountChanged);
                this.connector.removeListener(InternalWeb3Events.PROVIDER_CONNECT, this.handleConnect);
                this.connector.removeListener(InternalWeb3Events.PROVIDER_DISCONNECT, this.handleDisconnect);
              }

              if (!this.connector.deactivate) {
                _context2.next = 10;
                break;
              }

              _context2.next = 10;
              return _regenerator.default.awrap(this.connector.deactivate());

            case 10:
              this.connector = null;

            case 11:
            case "end":
              return _context2.stop();
          }
        }
      }, null, this, null, Promise);
    }
  }]);
  return InternalWeb3Provider;
}(_events.default);

var _default = InternalWeb3Provider;
exports.default = _default;