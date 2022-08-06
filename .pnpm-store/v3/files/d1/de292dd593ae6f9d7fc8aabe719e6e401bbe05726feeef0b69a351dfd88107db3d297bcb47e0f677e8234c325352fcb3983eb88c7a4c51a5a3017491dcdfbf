var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _ethers = require("ethers");

var _AbstractWeb3Connector = _interopRequireDefault(require("./AbstractWeb3Connector"));

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

var MagicWeb3Connector = function (_AbstractWeb3Connecto) {
  (0, _inherits2.default)(MagicWeb3Connector, _AbstractWeb3Connecto);

  var _super = _createSuper(MagicWeb3Connector);

  function MagicWeb3Connector() {
    var _this;

    (0, _classCallCheck2.default)(this, MagicWeb3Connector);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    _this.type = 'MagicLink';

    _this.deactivate = function () {
      return _regenerator.default.async(function (_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _this.unsubscribeToEvents(_this.provider);

              if (!_this.magicUser) {
                _context.next = 4;
                break;
              }

              _context.next = 4;
              return _regenerator.default.awrap(_this.magicUser.user.logout());

            case 4:
              _this.account = null;
              _this.chainId = null;
              _this.provider = null;

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, null, null, null, Promise);
    };

    return _this;
  }

  (0, _createClass2.default)(MagicWeb3Connector, [{
    key: "activate",
    value: function () {
      var _ref,
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
          _await$ether$getNetwo,
          chainId,
          address,
          _args2 = arguments;

      return _regenerator.default.async(function (_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _ref = _args2.length > 0 && _args2[0] !== undefined ? _args2[0] : {}, email = _ref.email, apiKey = _ref.apiKey, network = _ref.network, newSession = _ref.newSession;
              magic = null;
              ether = null;

              if (email) {
                _context2.next = 5;
                break;
              }

              throw new Error('"email" not provided, please provide Email');

            case 5:
              if (apiKey) {
                _context2.next = 7;
                break;
              }

              throw new Error('"apiKey" not provided, please provide Api Key');

            case 7:
              if (network) {
                _context2.next = 9;
                break;
              }

              throw new Error('"network" not provided, please provide network');

            case 9:
              try {
                Magic = (_require = require('magic-sdk')) == null ? void 0 : _require.Magic;
              } catch (error) {}

              if (!Magic) {
                Magic = (_window = window) == null ? void 0 : _window.Magic;
              }

              if (Magic) {
                _context2.next = 13;
                break;
              }

              throw new Error('Cannot enable via MagicLink: dependency "magic-sdk" is missing');

            case 13:
              _context2.prev = 13;
              magic = new Magic(apiKey, {
                network: network
              });

              if (!newSession) {
                _context2.next = 24;
                break;
              }

              if (!((_magic = magic) != null && _magic.user)) {
                _context2.next = 24;
                break;
              }

              _context2.prev = 17;
              _context2.next = 20;
              return _regenerator.default.awrap((_magic2 = magic) == null ? void 0 : (_magic2$user = _magic2.user) == null ? void 0 : _magic2$user.logout());

            case 20:
              _context2.next = 24;
              break;

            case 22:
              _context2.prev = 22;
              _context2.t0 = _context2["catch"](17);

            case 24:
              ether = new _ethers.ethers.providers.Web3Provider(magic.rpcProvider);
              _context2.next = 27;
              return _regenerator.default.awrap(magic.auth.loginWithMagicLink({
                email: email
              }));

            case 27:
              _context2.next = 32;
              break;

            case 29:
              _context2.prev = 29;
              _context2.t1 = _context2["catch"](13);
              throw new Error('Error during enable via MagicLink, please double check network and apikey');

            case 32:
              _context2.next = 34;
              return _regenerator.default.awrap(magic.user.isLoggedIn());

            case 34:
              loggedIn = _context2.sent;

              if (!loggedIn) {
                _context2.next = 50;
                break;
              }

              signer = ether.getSigner();
              _context2.next = 39;
              return _regenerator.default.awrap(ether.getNetwork());

            case 39:
              _await$ether$getNetwo = _context2.sent;
              chainId = _await$ether$getNetwo.chainId;
              _context2.next = 43;
              return _regenerator.default.awrap(signer.getAddress());

            case 43:
              address = _context2.sent.toLowerCase();
              this.account = address;
              this.provider = ether.provider;
              this.chainId = "0x" + chainId.toString(16);
              this.magicUser = magic;
              this.subscribeToEvents(this.provider);
              return _context2.abrupt("return", {
                provider: this.provider,
                account: this.account,
                chainId: this.chainId
              });

            case 50:
              throw new Error('Error during enable via MagicLink, login to magic failed');

            case 51:
            case "end":
              return _context2.stop();
          }
        }
      }, null, this, [[13, 29], [17, 22]], Promise);
    }
  }]);
  return MagicWeb3Connector;
}(_AbstractWeb3Connector.default);

exports.default = MagicWeb3Connector;