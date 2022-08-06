"use strict";

var _Reflect$construct = require("@babel/runtime-corejs3/core-js-stable/reflect/construct");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime-corejs3/regenerator"));

var _concat = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/concat"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/defineProperty"));

var _ethers = require("ethers");

var _AbstractWeb3Connector = _interopRequireDefault(require("./AbstractWeb3Connector"));

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

var MagicWeb3Connector = /*#__PURE__*/function (_AbstractWeb3Connecto) {
  (0, _inherits2.default)(MagicWeb3Connector, _AbstractWeb3Connecto);

  var _super = _createSuper(MagicWeb3Connector);

  function MagicWeb3Connector() {
    var _context;

    var _this;

    (0, _classCallCheck2.default)(this, MagicWeb3Connector);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, (0, _concat.default)(_context = [this]).call(_context, args));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "type", 'MagicLink');
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "deactivate", /*#__PURE__*/(0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
      return _regenerator.default.wrap(function (_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _this.unsubscribeToEvents(_this.provider);

              if (!_this.magicUser) {
                _context2.next = 4;
                break;
              }

              _context2.next = 4;
              return _this.magicUser.user.logout();

            case 4:
              _this.account = null;
              _this.chainId = null;
              _this.provider = null;

            case 7:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee);
    })));
    return _this;
  }

  (0, _createClass2.default)(MagicWeb3Connector, [{
    key: "activate",
    value: function () {
      var _activate = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2() {
        var _ref2,
            email,
            apiKey,
            network,
            newSession,
            magic,
            ether,
            Magic,
            _require,
            _window,
            _magic,
            _magic2,
            _magic2$user,
            loggedIn,
            signer,
            _yield$ether$getNetwo,
            chainId,
            address,
            _args2 = arguments;

        return _regenerator.default.wrap(function (_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _ref2 = _args2.length > 0 && _args2[0] !== undefined ? _args2[0] : {}, email = _ref2.email, apiKey = _ref2.apiKey, network = _ref2.network, newSession = _ref2.newSession;
                magic = null;
                ether = null;

                if (email) {
                  _context3.next = 5;
                  break;
                }

                throw new Error('"email" not provided, please provide Email');

              case 5:
                if (apiKey) {
                  _context3.next = 7;
                  break;
                }

                throw new Error('"apiKey" not provided, please provide Api Key');

              case 7:
                if (network) {
                  _context3.next = 9;
                  break;
                }

                throw new Error('"network" not provided, please provide network');

              case 9:
                try {
                  Magic = (_require = require('magic-sdk')) === null || _require === void 0 ? void 0 : _require.Magic;
                } catch (error) {// Do nothing. User might not need walletconnect
                }

                if (!Magic) {
                  Magic = (_window = window) === null || _window === void 0 ? void 0 : _window.Magic;
                }

                if (Magic) {
                  _context3.next = 13;
                  break;
                }

                throw new Error('Cannot enable via MagicLink: dependency "magic-sdk" is missing');

              case 13:
                _context3.prev = 13;
                magic = new Magic(apiKey, {
                  network: network
                });

                if (!newSession) {
                  _context3.next = 24;
                  break;
                }

                if (!((_magic = magic) !== null && _magic !== void 0 && _magic.user)) {
                  _context3.next = 24;
                  break;
                }

                _context3.prev = 17;
                _context3.next = 20;
                return (_magic2 = magic) === null || _magic2 === void 0 ? void 0 : (_magic2$user = _magic2.user) === null || _magic2$user === void 0 ? void 0 : _magic2$user.logout();

              case 20:
                _context3.next = 24;
                break;

              case 22:
                _context3.prev = 22;
                _context3.t0 = _context3["catch"](17);

              case 24:
                ether = new _ethers.ethers.providers.Web3Provider(magic.rpcProvider);
                _context3.next = 27;
                return magic.auth.loginWithMagicLink({
                  email: email
                });

              case 27:
                _context3.next = 32;
                break;

              case 29:
                _context3.prev = 29;
                _context3.t1 = _context3["catch"](13);
                throw new Error('Error during enable via MagicLink, please double check network and apikey');

              case 32:
                _context3.next = 34;
                return magic.user.isLoggedIn();

              case 34:
                loggedIn = _context3.sent;

                if (!loggedIn) {
                  _context3.next = 50;
                  break;
                }

                signer = ether.getSigner();
                _context3.next = 39;
                return ether.getNetwork();

              case 39:
                _yield$ether$getNetwo = _context3.sent;
                chainId = _yield$ether$getNetwo.chainId;
                _context3.next = 43;
                return signer.getAddress();

              case 43:
                address = _context3.sent.toLowerCase(); // Assign Constants

                this.account = address;
                this.provider = ether.provider;
                this.chainId = "0x".concat(chainId.toString(16)); // Assign magic user for deactivation

                this.magicUser = magic;
                this.subscribeToEvents(this.provider);
                return _context3.abrupt("return", {
                  provider: this.provider,
                  account: this.account,
                  chainId: this.chainId
                });

              case 50:
                throw new Error('Error during enable via MagicLink, login to magic failed');

              case 51:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee2, this, [[13, 29], [17, 22]]);
      }));

      return function () {
        return _activate.apply(this, arguments);
      };
    }()
  }]);
  return MagicWeb3Connector;
}(_AbstractWeb3Connector.default);

exports.default = MagicWeb3Connector;