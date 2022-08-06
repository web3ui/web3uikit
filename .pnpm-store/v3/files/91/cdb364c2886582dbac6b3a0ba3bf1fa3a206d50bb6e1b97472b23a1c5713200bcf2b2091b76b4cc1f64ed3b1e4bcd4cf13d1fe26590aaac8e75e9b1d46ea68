"use strict";

var _Reflect$construct = require("@babel/runtime-corejs3/core-js-stable/reflect/construct");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime-corejs3/regenerator"));

var _stringify = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/json/stringify"));

var _concat = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/concat"));

var _url = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/url"));

var _keys = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/keys"));

var _reduce = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/reduce"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/getPrototypeOf"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/asyncToGenerator"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/createClass"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/classCallCheck"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/defineProperty"));

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

var MiniRpcProvider = /*#__PURE__*/(0, _createClass2.default)(function MiniRpcProvider(chainId, url) {
  var _this = this;

  (0, _classCallCheck2.default)(this, MiniRpcProvider);
  (0, _defineProperty2.default)(this, "request", /*#__PURE__*/function () {
    var _ref = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(method, params) {
      var RESTController, response, _context, body, _body$error, _body$error2, _body$error3, _context2;

      return _regenerator.default.wrap(function (_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              if (typeof method !== 'string') {
                // eslint-disable-next-line prefer-destructuring
                params = method.params; // eslint-disable-next-line prefer-destructuring

                method = method.method;
              }

              RESTController = _CoreManager.default.getRESTController();
              _context3.prev = 2;
              _context3.next = 5;
              return RESTController.ajax('POST', _this.url, (0, _stringify.default)({
                jsonrpc: '2.0',
                id: 1,
                method: method,
                params: params
              }), {
                'Content-Type': 'application/json'
              });

            case 5:
              response = _context3.sent;

              if (response) {
                _context3.next = 8;
                break;
              }

              throw new Error('No response');

            case 8:
              if (!(!response.status || response.status > 400)) {
                _context3.next = 10;
                break;
              }

              throw new Error((0, _concat.default)(_context = "Error response [".concat(response.status, "] ")).call(_context, response.statusText));

            case 10:
              body = response.response;

              if (!('error' in body)) {
                _context3.next = 13;
                break;
              }

              throw new Error(body === null || body === void 0 ? void 0 : (_body$error = body.error) === null || _body$error === void 0 ? void 0 : _body$error.message, body === null || body === void 0 ? void 0 : (_body$error2 = body.error) === null || _body$error2 === void 0 ? void 0 : _body$error2.code, body === null || body === void 0 ? void 0 : (_body$error3 = body.error) === null || _body$error3 === void 0 ? void 0 : _body$error3.data);

            case 13:
              if ('result' in body) {
                _context3.next = 15;
                break;
              }

              throw new Error("Received unexpected JSON-RPC response");

            case 15:
              return _context3.abrupt("return", body.result);

            case 18:
              _context3.prev = 18;
              _context3.t0 = _context3["catch"](2);
              throw new Error((0, _concat.default)(_context2 = "Failed to make \"".concat(method, "\" request with networkConnector: \"")).call(_context2, _context3.t0.message, "\""));

            case 21:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee, null, [[2, 18]]);
    }));

    return function () {
      return _ref.apply(this, arguments);
    };
  }());
  this.chainId = chainId;
  this.url = url;
  var parsed = new _url.default(url);
  this.host = parsed.host;
  this.path = parsed.pathname;
});
/**
 * Connect to web3 via a network url
 * Note: this has no knowledge of any user accounts
 */

var NetworkWeb3Connector = /*#__PURE__*/function (_AbstractWeb3Connecto) {
  (0, _inherits2.default)(NetworkWeb3Connector, _AbstractWeb3Connecto);

  var _super = _createSuper(NetworkWeb3Connector);

  function NetworkWeb3Connector() {
    var _ref3, _context4;

    var _this2;

    var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        urls = _ref2.urls,
        defaultChainId = _ref2.defaultChainId,
        chainId = _ref2.chainId,
        speedyNodeApiKey = _ref2.speedyNodeApiKey;

    (0, _classCallCheck2.default)(this, NetworkWeb3Connector);
    _this2 = _super.call(this);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this2), "type", 'network');

    if (!urls && speedyNodeApiKey) {
      urls = (0, _MoralisRpcs.getMoralisRpcs)(speedyNodeApiKey);
    }

    if (!urls && !speedyNodeApiKey) {
      throw new Error('Cannot connect to rpc: No urls or speedyNodeApiKey provided for NetworkWeb3Connector.');
    }

    if ("browser" !== 'node' && speedyNodeApiKey) {
      // eslint-disable-next-line no-console
      console.warn('Moralis: Using speedyNodeApiKey on the browser enviroment is not recommended, as it is publicly visible.');
    }

    _this2.chainId = (0, _verifyChainId.default)((_ref3 = chainId !== null && chainId !== void 0 ? chainId : defaultChainId) !== null && _ref3 !== void 0 ? _ref3 : Number((0, _keys.default)(urls)[0]));
    _this2.providers = (0, _reduce.default)(_context4 = (0, _keys.default)(urls)).call(_context4, function (accumulator, chainId) {
      accumulator[Number(chainId)] = new MiniRpcProvider(Number(chainId), urls[Number(chainId)]);
      return accumulator;
    }, {});
    return _this2;
  }

  (0, _createClass2.default)(NetworkWeb3Connector, [{
    key: "activate",
    value: function () {
      var _activate = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2() {
        var _ref4,
            providedChainId,
            _ref4$privateKey,
            privateKey,
            provider,
            _args2 = arguments;

        return _regenerator.default.wrap(function (_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _ref4 = _args2.length > 0 && _args2[0] !== undefined ? _args2[0] : {}, providedChainId = _ref4.chainId, _ref4$privateKey = _ref4.privateKey, privateKey = _ref4$privateKey === void 0 ? null : _ref4$privateKey;

                if (providedChainId) {
                  this.chainId = (0, _verifyChainId.default)(providedChainId);
                }

                provider = this.providers[(0, _convert.fromHexToDecimal)(this.chainId)];

                if (provider) {
                  _context5.next = 5;
                  break;
                }

                throw new Error("No rpc url provided for chainId ".concat(this.chainId));

              case 5:
                if (!(privateKey != null)) {
                  _context5.next = 9;
                  break;
                }

                _context5.next = 8;
                return new _ethers.ethers.Wallet(privateKey).getAddress();

              case 8:
                this.account = _context5.sent;

              case 9:
                return _context5.abrupt("return", {
                  provider: provider,
                  chainId: this.chainId,
                  account: this.account
                });

              case 10:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee2, this);
      }));

      return function () {
        return _activate.apply(this, arguments);
      };
    }()
  }]);
  return NetworkWeb3Connector;
}(_AbstractWeb3Connector.default);

var _default = NetworkWeb3Connector;
exports.default = _default;