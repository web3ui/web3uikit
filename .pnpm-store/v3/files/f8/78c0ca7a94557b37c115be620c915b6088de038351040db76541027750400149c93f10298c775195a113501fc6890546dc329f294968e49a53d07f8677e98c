var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Web3Auth = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _ethers = require("ethers");

var _verifyChainId = _interopRequireDefault(require("../utils/verifyChainId"));

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

var Web3Auth = function (_AbstractWeb3Connecto) {
  (0, _inherits2.default)(Web3Auth, _AbstractWeb3Connecto);

  var _super = _createSuper(Web3Auth);

  function Web3Auth() {
    var _this;

    (0, _classCallCheck2.default)(this, Web3Auth);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    _this.type = 'web3Auth';

    _this.connect = function (web3auth) {
      return new Promise(function (resolve, reject) {
        (function (web3auth) {
          web3auth.loginModal.on('MODAL_VISIBILITY', function (visibility) {
            return _regenerator.default.async(function (_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    if (!visibility) {
                      reject(new Error('Web3Auth: User closed login modal.'));
                    }

                  case 1:
                  case "end":
                    return _context.stop();
                }
              }
            }, null, null, null, Promise);
          });
        })(web3auth);

        web3auth.connect().then(resolve).catch(reject);
      });
    };

    _this.activate = function () {
      var _ref,
          _ref$chainId,
          chainId,
          clientId,
          theme,
          appLogo,
          loginMethodsOrder,
          rpcTarget,
          displayName,
          blockExplorer,
          ticker,
          tickerName,
          _Web3Auth,
          _require,
          _window,
          _window$Web3auth,
          ethChainConfig,
          web3auth,
          provider,
          _web3auth,
          _web3auth2,
          _web3auth3,
          isSocialLogin,
          ether,
          signer,
          values,
          providerChainId,
          _args2 = arguments;

      return _regenerator.default.async(function (_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _ref = _args2.length > 0 && _args2[0] !== undefined ? _args2[0] : {}, _ref$chainId = _ref.chainId, chainId = _ref$chainId === void 0 ? '0x1' : _ref$chainId, clientId = _ref.clientId, theme = _ref.theme, appLogo = _ref.appLogo, loginMethodsOrder = _ref.loginMethodsOrder, rpcTarget = _ref.rpcTarget, displayName = _ref.displayName, blockExplorer = _ref.blockExplorer, ticker = _ref.ticker, tickerName = _ref.tickerName;

              if (clientId) {
                _context2.next = 3;
                break;
              }

              throw new Error('"clientId" not provided, please provide clientId');

            case 3:
              try {
                _Web3Auth = (_require = require('@web3auth/web3auth')) == null ? void 0 : _require.Web3Auth;
              } catch (_unused) {}

              if (!_Web3Auth) {
                _Web3Auth = (_window = window) == null ? void 0 : (_window$Web3auth = _window.Web3auth) == null ? void 0 : _window$Web3auth.Web3Auth;
              }

              if (_Web3Auth) {
                _context2.next = 7;
                break;
              }

              throw new Error('"@web3auth/web3auth" not installed, please install');

            case 7:
              ethChainConfig = (0, _extends2.default)({
                chainNamespace: 'eip155',
                chainId: (0, _verifyChainId.default)(chainId)
              }, rpcTarget && {
                rpcTarget: rpcTarget
              }, displayName && {
                displayName: displayName
              }, blockExplorer && {
                blockExplorer: blockExplorer
              }, ticker && {
                ticker: ticker
              }, tickerName && {
                tickerName: tickerName
              });

              try {
                web3auth = new _Web3Auth({
                  chainConfig: ethChainConfig,
                  uiConfig: {
                    theme: theme != null ? theme : 'dark',
                    appLogo: appLogo != null ? appLogo : 'https://moralis.io/wp-content/uploads/2021/05/moralisWhiteLogo.svg',
                    loginMethodsOrder: loginMethodsOrder
                  },
                  clientId: clientId
                });
              } catch (_unused2) {}

              if (web3auth) {
                _context2.next = 11;
                break;
              }

              throw new Error('Could not connect via Web3Auth, error during initializing Web3Auth');

            case 11:
              _context2.next = 13;
              return _regenerator.default.awrap(web3auth.initModal());

            case 13:
              provider = null;
              _context2.next = 16;
              return _regenerator.default.awrap(_this.connect(web3auth));

            case 16:
              provider = _context2.sent;

              if (provider) {
                _context2.next = 19;
                break;
              }

              throw new Error('Could not connect via Web3Auth, error in connecting to provider');

            case 19:
              _context2.prev = 19;
              isSocialLogin = (_web3auth = web3auth) != null && _web3auth.provider ? false : true;
              ether = new _ethers.ethers.providers.Web3Provider((_web3auth2 = web3auth) != null && _web3auth2.provider ? web3auth.provider : web3auth);
              signer = ether.getSigner();
              _context2.next = 25;
              return _regenerator.default.awrap(Promise.all([ether.getNetwork(), signer.getAddress()]));

            case 25:
              values = _context2.sent;
              providerChainId = values[0].chainId;
              _this.account = values[1].toLocaleLowerCase();
              _this.chainId = "0x" + providerChainId.toString(16);
              _this.provider = isSocialLogin ? ether : (_web3auth3 = web3auth) == null ? void 0 : _web3auth3.provider;
              _this.web3Instance = web3auth;

              _this.subscribeToEvents(_this.provider);

              return _context2.abrupt("return", {
                chainId: _this.chainId,
                account: _this.account,
                provider: _this.provider
              });

            case 35:
              _context2.prev = 35;
              _context2.t0 = _context2["catch"](19);
              throw new Error('Could not connect via Web3Auth, error while authenticating');

            case 38:
            case "end":
              return _context2.stop();
          }
        }
      }, null, null, [[19, 35]], Promise);
    };

    _this.deactivate = function () {
      return _regenerator.default.async(function (_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _this.unsubscribeToEvents(_this.provider);

              if (!_this.web3Instance) {
                _context3.next = 4;
                break;
              }

              _context3.next = 4;
              return _regenerator.default.awrap(_this.web3Instance.logout());

            case 4:
              _this.account = null;
              _this.chainId = null;
              _this.provider = null;

            case 7:
            case "end":
              return _context3.stop();
          }
        }
      }, null, null, null, Promise);
    };

    return _this;
  }

  return (0, _createClass2.default)(Web3Auth);
}(_AbstractWeb3Connector.default);

exports.Web3Auth = Web3Auth;