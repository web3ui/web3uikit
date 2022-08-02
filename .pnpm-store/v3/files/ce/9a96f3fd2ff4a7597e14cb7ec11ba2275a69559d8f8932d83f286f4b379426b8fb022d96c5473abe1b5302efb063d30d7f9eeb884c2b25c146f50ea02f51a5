"use strict";

var _Reflect$construct = require("@babel/runtime-corejs3/core-js-stable/reflect/construct");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = exports.InjectedEvents = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime-corejs3/regenerator"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/slicedToArray"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/asyncToGenerator"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/assertThisInitialized"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/defineProperty"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/createClass"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/classCallCheck"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/getPrototypeOf"));

var _wrapNativeSuper2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/wrapNativeSuper"));

var _freeze = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/freeze"));

var _concat = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/concat"));

var _promise = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/promise"));

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

var InjectedEvents = (0, _freeze.default)({
  ACCOUNTS_CHANGED: 'accountsChanged',
  CHAIN_CHANGED: 'chainChanged',
  CONNECT: 'connect',
  DISCONNECT: 'disconnect'
});
exports.InjectedEvents = InjectedEvents;

var NoEthereumProviderError = /*#__PURE__*/function (_Error) {
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
}( /*#__PURE__*/(0, _wrapNativeSuper2.default)(Error));
/**
 * Connector to connect an injected provider (like Metamask) to Moralis
 * The provider should be injected in window.ethereum
 */


var InjectedWeb3Connector = /*#__PURE__*/function (_AbstractWeb3Connecto) {
  (0, _inherits2.default)(InjectedWeb3Connector, _AbstractWeb3Connecto);

  var _super2 = _createSuper(InjectedWeb3Connector);

  function InjectedWeb3Connector() {
    var _context;

    var _this2;

    (0, _classCallCheck2.default)(this, InjectedWeb3Connector);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this2 = _super2.call.apply(_super2, (0, _concat.default)(_context = [this]).call(_context, args));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this2), "type", 'injected');
    return _this2;
  }

  (0, _createClass2.default)(InjectedWeb3Connector, [{
    key: "verifyEthereumBrowser",
    value: function () {
      var _window;

      if (!((_window = window) !== null && _window !== void 0 && _window.ethereum)) {
        throw new NoEthereumProviderError();
      }
    }
  }, {
    key: "activate",
    value: function () {
      var _activate = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
        var _yield$Promise$all, _yield$Promise$all2, accounts, chainId, account, provider;

        return _regenerator.default.wrap(function (_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                this.verifyEthereumBrowser();
                _context2.next = 3;
                return _promise.default.all([window.ethereum.request({
                  method: 'eth_requestAccounts'
                }), window.ethereum.request({
                  method: 'eth_chainId'
                })]);

              case 3:
                _yield$Promise$all = _context2.sent;
                _yield$Promise$all2 = (0, _slicedToArray2.default)(_yield$Promise$all, 2);
                accounts = _yield$Promise$all2[0];
                chainId = _yield$Promise$all2[1];
                account = accounts[0] ? accounts[0].toLowerCase() : null;
                provider = window.ethereum;
                this.chainId = chainId;
                this.account = account;
                this.provider = provider;
                this.subscribeToEvents(provider);
                return _context2.abrupt("return", {
                  provider: provider,
                  chainId: chainId,
                  account: account
                });

              case 14:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee, this);
      }));

      return function () {
        return _activate.apply(this, arguments);
      };
    }()
  }, {
    key: "switchNetwork",
    value: function () {
      var _switchNetwork = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2(chainId) {
        var currentNetwork;
        return _regenerator.default.wrap(function (_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                this.verifyEthereumBrowser();
                chainId = (0, _verifyChainId.default)(chainId);
                currentNetwork = this.chainId;

                if (!(currentNetwork === chainId)) {
                  _context3.next = 5;
                  break;
                }

                return _context3.abrupt("return");

              case 5:
                _context3.next = 7;
                return window.ethereum.request({
                  method: 'wallet_switchEthereumChain',
                  params: [{
                    chainId: chainId
                  }]
                });

              case 7:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee2, this);
      }));

      return function () {
        return _switchNetwork.apply(this, arguments);
      };
    }()
  }, {
    key: "addNetwork",
    value: function () {
      var _addNetwork = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3(chainId, chainName, currencyName, currencySymbol, rpcUrl, blockExplorerUrl) {
        var newchainId;
        return _regenerator.default.wrap(function (_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                this.verifyEthereumBrowser();
                newchainId = (0, _verifyChainId.default)(chainId);
                _context4.next = 4;
                return window.ethereum.request({
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
                });

              case 4:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee3, this);
      }));

      return function () {
        return _addNetwork.apply(this, arguments);
      };
    }()
  }]);
  return InjectedWeb3Connector;
}(_AbstractWeb3Connector.default);

var _default = InjectedWeb3Connector;
exports.default = _default;