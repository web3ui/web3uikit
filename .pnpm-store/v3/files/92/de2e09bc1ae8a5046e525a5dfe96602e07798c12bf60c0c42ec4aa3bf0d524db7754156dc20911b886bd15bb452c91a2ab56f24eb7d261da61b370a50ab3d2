var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _CoreManager = _interopRequireDefault(require("../CoreManager"));

var _convert = require("../utils/convert");

var _verifyChainId = _interopRequireDefault(require("../utils/verifyChainId"));

var _AbstractWeb3Connector = _interopRequireDefault(require("./AbstractWeb3Connector"));

var _MoralisRpcs = require("./MoralisRpcs");

var _ethers = require("ethers");

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

var MiniRpcProvider = (0, _createClass2.default)(function MiniRpcProvider(chainId, url) {
  var _this = this;

  (0, _classCallCheck2.default)(this, MiniRpcProvider);

  this.request = function (method, params) {
    var RESTController, response, body, _body$error, _body$error2, _body$error3;

    return _regenerator.default.async(function (_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (typeof method !== 'string') {
              params = method.params;
              method = method.method;
            }

            RESTController = _CoreManager.default.getRESTController();
            _context.prev = 2;
            _context.next = 5;
            return _regenerator.default.awrap(RESTController.ajax('POST', _this.url, JSON.stringify({
              jsonrpc: '2.0',
              id: 1,
              method: method,
              params: params
            }), {
              'Content-Type': 'application/json'
            }));

          case 5:
            response = _context.sent;

            if (response) {
              _context.next = 8;
              break;
            }

            throw new Error('No response');

          case 8:
            if (!(!response.status || response.status > 400)) {
              _context.next = 10;
              break;
            }

            throw new Error("Error response [" + response.status + "] " + response.statusText);

          case 10:
            body = response.response;

            if (!('error' in body)) {
              _context.next = 13;
              break;
            }

            throw new Error(body == null ? void 0 : (_body$error = body.error) == null ? void 0 : _body$error.message, body == null ? void 0 : (_body$error2 = body.error) == null ? void 0 : _body$error2.code, body == null ? void 0 : (_body$error3 = body.error) == null ? void 0 : _body$error3.data);

          case 13:
            if ('result' in body) {
              _context.next = 15;
              break;
            }

            throw new Error("Received unexpected JSON-RPC response");

          case 15:
            return _context.abrupt("return", body.result);

          case 18:
            _context.prev = 18;
            _context.t0 = _context["catch"](2);
            throw new Error("Failed to make \"" + method + "\" request with networkConnector: \"" + _context.t0.message + "\"");

          case 21:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, [[2, 18]], Promise);
  };

  this.chainId = chainId;
  this.url = url;
  var parsed = new URL(url);
  this.host = parsed.host;
  this.path = parsed.pathname;
});

var NetworkWeb3Connector = function (_AbstractWeb3Connecto) {
  (0, _inherits2.default)(NetworkWeb3Connector, _AbstractWeb3Connecto);

  var _super = _createSuper(NetworkWeb3Connector);

  function NetworkWeb3Connector() {
    var _ref2;

    var _this2;

    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        urls = _ref.urls,
        defaultChainId = _ref.defaultChainId,
        chainId = _ref.chainId,
        speedyNodeApiKey = _ref.speedyNodeApiKey;

    (0, _classCallCheck2.default)(this, NetworkWeb3Connector);
    _this2 = _super.call(this);
    _this2.type = 'network';

    if (!urls && speedyNodeApiKey) {
      urls = (0, _MoralisRpcs.getMoralisRpcs)(speedyNodeApiKey);
    }

    if (!urls && !speedyNodeApiKey) {
      throw new Error('Cannot connect to rpc: No urls or speedyNodeApiKey provided for NetworkWeb3Connector.');
    }

    if ("react-native" !== 'node' && speedyNodeApiKey) {
      console.warn('Moralis: Using speedyNodeApiKey on the browser enviroment is not recommended, as it is publicly visible.');
    }

    _this2.chainId = (0, _verifyChainId.default)((_ref2 = chainId != null ? chainId : defaultChainId) != null ? _ref2 : Number(Object.keys(urls)[0]));
    _this2.providers = Object.keys(urls).reduce(function (accumulator, chainId) {
      accumulator[Number(chainId)] = new MiniRpcProvider(Number(chainId), urls[Number(chainId)]);
      return accumulator;
    }, {});
    return _this2;
  }

  (0, _createClass2.default)(NetworkWeb3Connector, [{
    key: "activate",
    value: function () {
      var _ref3,
          providedChainId,
          _ref3$privateKey,
          privateKey,
          provider,
          _args2 = arguments;

      return _regenerator.default.async(function (_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _ref3 = _args2.length > 0 && _args2[0] !== undefined ? _args2[0] : {}, providedChainId = _ref3.chainId, _ref3$privateKey = _ref3.privateKey, privateKey = _ref3$privateKey === void 0 ? null : _ref3$privateKey;

              if (providedChainId) {
                this.chainId = (0, _verifyChainId.default)(providedChainId);
              }

              provider = this.providers[(0, _convert.fromHexToDecimal)(this.chainId)];

              if (provider) {
                _context2.next = 5;
                break;
              }

              throw new Error("No rpc url provided for chainId " + this.chainId);

            case 5:
              if (!(privateKey != null)) {
                _context2.next = 9;
                break;
              }

              _context2.next = 8;
              return _regenerator.default.awrap(new _ethers.ethers.Wallet(privateKey).getAddress());

            case 8:
              this.account = _context2.sent;

            case 9:
              return _context2.abrupt("return", {
                provider: provider,
                chainId: this.chainId,
                account: this.account
              });

            case 10:
            case "end":
              return _context2.stop();
          }
        }
      }, null, this, null, Promise);
    }
  }]);
  return NetworkWeb3Connector;
}(_AbstractWeb3Connector.default);

var _default = NetworkWeb3Connector;
exports.default = _default;