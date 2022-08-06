var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.InjectedEvents = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _wrapNativeSuper2 = _interopRequireDefault(require("@babel/runtime/helpers/wrapNativeSuper"));

var _AbstractWeb3Connector = _interopRequireDefault(require("./AbstractWeb3Connector"));

var _events = _interopRequireDefault(require("events"));

var _verifyChainId = _interopRequireDefault(require("../utils/verifyChainId"));

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

var InjectedEvents = Object.freeze({
  ACCOUNTS_CHANGED: 'accountsChanged',
  CHAIN_CHANGED: 'chainChanged',
  CONNECT: 'connect',
  DISCONNECT: 'disconnect'
});
exports.InjectedEvents = InjectedEvents;

var NoEthereumProviderError = function (_Error) {
  (0, _inherits2.default)(NoEthereumProviderError, _Error);

  var _super = _createSuper(NoEthereumProviderError);

  function NoEthereumProviderError() {
    var _this;

    (0, _classCallCheck2.default)(this, NoEthereumProviderError);
    _this = _super.call(this);
    _this.message = 'Non ethereum enabled browser';
    return _this;
  }

  return (0, _createClass2.default)(NoEthereumProviderError);
}((0, _wrapNativeSuper2.default)(Error));

var InjectedWeb3Connector = function (_AbstractWeb3Connecto) {
  (0, _inherits2.default)(InjectedWeb3Connector, _AbstractWeb3Connecto);

  var _super2 = _createSuper(InjectedWeb3Connector);

  function InjectedWeb3Connector() {
    var _this2;

    (0, _classCallCheck2.default)(this, InjectedWeb3Connector);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this2 = _super2.call.apply(_super2, [this].concat(args));
    _this2.type = 'injected';
    return _this2;
  }

  (0, _createClass2.default)(InjectedWeb3Connector, [{
    key: "verifyEthereumBrowser",
    value: function () {
      var _window;

      if (!((_window = window) != null && _window.ethereum)) {
        throw new NoEthereumProviderError();
      }
    }
  }, {
    key: "activate",
    value: function () {
      var _await$Promise$all, _await$Promise$all2, accounts, chainId, account, provider;

      return _regenerator.default.async(function (_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              this.verifyEthereumBrowser();
              _context.next = 3;
              return _regenerator.default.awrap(Promise.all([window.ethereum.request({
                method: 'eth_requestAccounts'
              }), window.ethereum.request({
                method: 'eth_chainId'
              })]));

            case 3:
              _await$Promise$all = _context.sent;
              _await$Promise$all2 = (0, _slicedToArray2.default)(_await$Promise$all, 2);
              accounts = _await$Promise$all2[0];
              chainId = _await$Promise$all2[1];
              account = accounts[0] ? accounts[0].toLowerCase() : null;
              provider = window.ethereum;
              this.chainId = chainId;
              this.account = account;
              this.provider = provider;
              this.subscribeToEvents(provider);
              return _context.abrupt("return", {
                provider: provider,
                chainId: chainId,
                account: account
              });

            case 14:
            case "end":
              return _context.stop();
          }
        }
      }, null, this, null, Promise);
    }
  }, {
    key: "switchNetwork",
    value: function (chainId) {
      var currentNetwork;
      return _regenerator.default.async(function (_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              this.verifyEthereumBrowser();
              chainId = (0, _verifyChainId.default)(chainId);
              currentNetwork = this.chainId;

              if (!(currentNetwork === chainId)) {
                _context2.next = 5;
                break;
              }

              return _context2.abrupt("return");

            case 5:
              _context2.next = 7;
              return _regenerator.default.awrap(window.ethereum.request({
                method: 'wallet_switchEthereumChain',
                params: [{
                  chainId: chainId
                }]
              }));

            case 7:
            case "end":
              return _context2.stop();
          }
        }
      }, null, this, null, Promise);
    }
  }, {
    key: "addNetwork",
    value: function (chainId, chainName, currencyName, currencySymbol, rpcUrl, blockExplorerUrl) {
      var newchainId;
      return _regenerator.default.async(function (_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              this.verifyEthereumBrowser();
              newchainId = (0, _verifyChainId.default)(chainId);
              _context3.next = 4;
              return _regenerator.default.awrap(window.ethereum.request({
                method: 'wallet_addEthereumChain',
                params: [{
                  chainId: newchainId,
                  chainName: chainName,
                  nativeCurrency: {
                    name: currencyName,
                    symbol: currencySymbol,
                    decimals: 18
                  },
                  rpcUrls: [rpcUrl],
                  blockExplorerUrls: blockExplorerUrl ? [blockExplorerUrl] : null
                }]
              }));

            case 4:
            case "end":
              return _context3.stop();
          }
        }
      }, null, this, null, Promise);
    }
  }]);
  return InjectedWeb3Connector;
}(_AbstractWeb3Connector.default);

var _default = InjectedWeb3Connector;
exports.default = _default;