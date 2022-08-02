"use strict";

var _Reflect$construct = require("@babel/runtime-corejs3/core-js-stable/reflect/construct");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = exports.WalletConnectEvent = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime-corejs3/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/defineProperty"));

var _freeze = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/freeze"));

var _concat = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/concat"));

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

var WalletConnectEvent = (0, _freeze.default)({
  ACCOUNTS_CHANGED: 'accountsChanged',
  CHAIN_CHANGED: 'chainChanged',
  DISCONNECT: 'disconnect'
});
/**
 * Connector to connect an WalletConenct provider to Moralis
 * Note: this assumes using WalletConnect v1
 * // TODO: support WalletConnect v2
 */

exports.WalletConnectEvent = WalletConnectEvent;

var WalletConnectWeb3Connector = /*#__PURE__*/function (_AbstractWeb3Connecto) {
  (0, _inherits2.default)(WalletConnectWeb3Connector, _AbstractWeb3Connecto);

  var _super = _createSuper(WalletConnectWeb3Connector);

  function WalletConnectWeb3Connector() {
    var _context;

    var _this;

    (0, _classCallCheck2.default)(this, WalletConnectWeb3Connector);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, (0, _concat.default)(_context = [this]).call(_context, args));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "type", 'WalletConnect');
    return _this;
  }

  (0, _createClass2.default)(WalletConnectWeb3Connector, [{
    key: "activate",
    value: function () {
      var _activate = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
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

        return _regenerator.default.wrap(function (_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _ref = _args.length > 0 && _args[0] !== undefined ? _args[0] : {}, providedChainId = _ref.chainId, mobileLinks = _ref.mobileLinks, newSession = _ref.newSession; // Log out of any previous sessions

                if (newSession) {
                  this.cleanup();
                }

                if (this.provider) {
                  _context2.next = 9;
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
                  WalletConnectProvider = (_require = require('@walletconnect/web3-provider')) === null || _require === void 0 ? void 0 : _require.default;
                } catch (error) {// Do nothing. User might not need walletconnect
                }

                if (!WalletConnectProvider) {
                  WalletConnectProvider = (_window = window) === null || _window === void 0 ? void 0 : (_window$WalletConnect = _window.WalletConnectProvider) === null || _window$WalletConnect === void 0 ? void 0 : _window$WalletConnect.default;
                }

                if (WalletConnectProvider) {
                  _context2.next = 8;
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
                  _context2.next = 11;
                  break;
                }

                throw new Error('Could not connect via WalletConnect, error in connecting to provider');

              case 11:
                _context2.next = 13;
                return this.provider.enable();

              case 13:
                accounts = _context2.sent;
                account = accounts[0].toLowerCase();
                chainId = this.provider.chainId;
                verifiedChainId = (0, _verifyChainId.default)(chainId);
                this.account = account;
                this.chainId = verifiedChainId;
                this.subscribeToEvents(this.provider);
                return _context2.abrupt("return", {
                  provider: this.provider,
                  account: account,
                  chainId: verifiedChainId
                });

              case 21:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee, this);
      }));

      return function () {
        return _activate.apply(this, arguments);
      };
    }() // Cleanup old sessions

  }, {
    key: "cleanup",
    value: function () {
      try {
        if (window) {
          window.localStorage.removeItem('walletconnect');
        }
      } catch (error) {// Do nothing
      }
    }
  }, {
    key: "deactivate",
    value: function () {
      var _deactivate = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2() {
        return _regenerator.default.wrap(function (_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                this.unsubscribeToEvents(this.provider);

                if (!this.provider) {
                  _context3.next = 9;
                  break;
                }

                _context3.prev = 2;
                _context3.next = 5;
                return this.provider.close();

              case 5:
                _context3.next = 9;
                break;

              case 7:
                _context3.prev = 7;
                _context3.t0 = _context3["catch"](2);

              case 9:
                this.account = null;
                this.chainId = null;
                this.provider = null;

              case 12:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee2, this, [[2, 7]]);
      }));

      return function () {
        return _deactivate.apply(this, arguments);
      };
    }()
  }]);
  return WalletConnectWeb3Connector;
}(_AbstractWeb3Connector.default);

var _default = WalletConnectWeb3Connector;
exports.default = _default;