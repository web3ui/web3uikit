var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.WalletConnectEvent = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _verifyChainId = _interopRequireDefault(require("../utils/verifyChainId"));

var _AbstractWeb3Connector = _interopRequireDefault(require("./AbstractWeb3Connector"));

var _events = require("./events");

var _MoralisRpcs = require("./MoralisRpcs");

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

var WalletConnectEvent = Object.freeze({
  ACCOUNTS_CHANGED: 'accountsChanged',
  CHAIN_CHANGED: 'chainChanged',
  DISCONNECT: 'disconnect'
});
exports.WalletConnectEvent = WalletConnectEvent;

var WalletConnectWeb3Connector = function (_AbstractWeb3Connecto) {
  (0, _inherits2.default)(WalletConnectWeb3Connector, _AbstractWeb3Connecto);

  var _super = _createSuper(WalletConnectWeb3Connector);

  function WalletConnectWeb3Connector() {
    var _this;

    (0, _classCallCheck2.default)(this, WalletConnectWeb3Connector);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    _this.type = 'WalletConnect';
    return _this;
  }

  (0, _createClass2.default)(WalletConnectWeb3Connector, [{
    key: "activate",
    value: function () {
      var _ref,
          providedChainId,
          mobileLinks,
          newSession,
          WalletConnectProvider,
          config,
          _require,
          _window,
          _window$WalletConnect,
          accounts,
          account,
          chainId,
          verifiedChainId,
          _args = arguments;

      return _regenerator.default.async(function (_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _ref = _args.length > 0 && _args[0] !== undefined ? _args[0] : {}, providedChainId = _ref.chainId, mobileLinks = _ref.mobileLinks, newSession = _ref.newSession;

              if (newSession) {
                this.cleanup();
              }

              if (this.provider) {
                _context.next = 9;
                break;
              }

              config = {
                rpc: (0, _MoralisRpcs.getMoralisRpcs)('WalletConnect'),
                chainId: providedChainId,
                qrcodeModalOptions: {
                  mobileLinks: mobileLinks
                }
              };

              try {
                WalletConnectProvider = (_require = require('@walletconnect/web3-provider')) == null ? void 0 : _require.default;
              } catch (error) {}

              if (!WalletConnectProvider) {
                WalletConnectProvider = (_window = window) == null ? void 0 : (_window$WalletConnect = _window.WalletConnectProvider) == null ? void 0 : _window$WalletConnect.default;
              }

              if (WalletConnectProvider) {
                _context.next = 8;
                break;
              }

              throw new Error('Cannot enable via WalletConnect: dependency "@walletconnect/web3-provider" is missing');

            case 8:
              if (typeof WalletConnectProvider === 'function') {
                this.provider = new WalletConnectProvider(config);
              } else {
                this.provider = new window.WalletConnectProvider(config);
              }

            case 9:
              if (this.provider) {
                _context.next = 11;
                break;
              }

              throw new Error('Could not connect via WalletConnect, error in connecting to provider');

            case 11:
              _context.next = 13;
              return _regenerator.default.awrap(this.provider.enable());

            case 13:
              accounts = _context.sent;
              account = accounts[0].toLowerCase();
              chainId = this.provider.chainId;
              verifiedChainId = (0, _verifyChainId.default)(chainId);
              this.account = account;
              this.chainId = verifiedChainId;
              this.subscribeToEvents(this.provider);
              return _context.abrupt("return", {
                provider: this.provider,
                account: account,
                chainId: verifiedChainId
              });

            case 21:
            case "end":
              return _context.stop();
          }
        }
      }, null, this, null, Promise);
    }
  }, {
    key: "cleanup",
    value: function () {
      try {
        if (window) {
          window.localStorage.removeItem('walletconnect');
        }
      } catch (error) {}
    }
  }, {
    key: "deactivate",
    value: function () {
      return _regenerator.default.async(function (_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              this.unsubscribeToEvents(this.provider);

              if (!this.provider) {
                _context2.next = 9;
                break;
              }

              _context2.prev = 2;
              _context2.next = 5;
              return _regenerator.default.awrap(this.provider.close());

            case 5:
              _context2.next = 9;
              break;

            case 7:
              _context2.prev = 7;
              _context2.t0 = _context2["catch"](2);

            case 9:
              this.account = null;
              this.chainId = null;
              this.provider = null;

            case 12:
            case "end":
              return _context2.stop();
          }
        }
      }, null, this, [[2, 7]], Promise);
    }
  }]);
  return WalletConnectWeb3Connector;
}(_AbstractWeb3Connector.default);

var _default = WalletConnectWeb3Connector;
exports.default = _default;