"use strict";

var _Object$keys2 = require("@babel/runtime-corejs3/core-js-stable/object/keys");

var _Object$getOwnPropertySymbols = require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols");

var _filterInstanceProperty2 = require("@babel/runtime-corejs3/core-js-stable/instance/filter");

var _Object$getOwnPropertyDescriptor = require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor");

var _forEachInstanceProperty2 = require("@babel/runtime-corejs3/core-js-stable/instance/for-each");

var _Object$getOwnPropertyDescriptors = require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors");

var _Object$defineProperties = require("@babel/runtime-corejs3/core-js-stable/object/define-properties");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime-corejs3/regenerator"));

var _forEach = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/for-each"));

var _keys = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/keys"));

var _filter = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/filter"));

var _includes = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/includes"));

var _stringify = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/json/stringify"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/defineProperty"));

function ownKeys(object, enumerableOnly) {
  var keys = _Object$keys2(object);

  if (_Object$getOwnPropertySymbols) {
    var symbols = _Object$getOwnPropertySymbols(object);

    enumerableOnly && (symbols = _filterInstanceProperty2(symbols).call(symbols, function (sym) {
      return _Object$getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var _context10, _context11;

    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? _forEachInstanceProperty2(_context10 = ownKeys(Object(source), !0)).call(_context10, function (key) {
      (0, _defineProperty2.default)(target, key, source[key]);
    }) : _Object$getOwnPropertyDescriptors ? _Object$defineProperties(target, _Object$getOwnPropertyDescriptors(source)) : _forEachInstanceProperty2(_context11 = ownKeys(Object(source))).call(_context11, function (key) {
      _Object$defineProperty(target, key, _Object$getOwnPropertyDescriptor(source, key));
    });
  }

  return target;
}
/**
 * Automatically generated code, via genSolanaAPI.js
 * Do not modify manually
 */


var axios = require('axios');

var SolanaApi = /*#__PURE__*/function () {
  function SolanaApi() {
    (0, _classCallCheck2.default)(this, SolanaApi);
  }

  (0, _createClass2.default)(SolanaApi, null, [{
    key: "initialize",
    value: // URL will be changed when api is deployed
    function (_ref) {
      var apiKey = _ref.apiKey,
          serverUrl = _ref.serverUrl,
          _ref$Moralis = _ref.Moralis,
          Moralis = _ref$Moralis === void 0 ? null : _ref$Moralis;

      if (!serverUrl && !apiKey) {
        throw new Error('SolanaApi.initialize failed: initialize with apiKey or serverUrl');
      }

      if (apiKey) this.apiKey = apiKey;
      if (serverUrl) this.serverUrl = serverUrl;
      this.Moralis = Moralis;
    }
  }, {
    key: "getBody",
    value: function (params, bodyParams) {
      var _this = this;

      if (!params || !bodyParams || !bodyParams.length) {
        return undefined;
      }

      var body = {};
      (0, _forEach.default)(bodyParams).call(bodyParams, function (_ref2) {
        var key = _ref2.key,
            type = _ref2.type,
            required = _ref2.required;

        if (params[key] === undefined) {
          if (required) throw new Error("param ".concat(key, " is required!"));
        } else if (type === _this.BodyParamTypes.setBody) {
          body = params[key];
        } else {
          body[key] = params[key];
        } // remove the param so it doesn't also get added as a query param


        delete params[key];
      });
      return body;
    }
  }, {
    key: "getParameterizedUrl",
    value: function (url, params) {
      var _context;

      if (!(0, _keys.default)(params).length) return url; // find url params, they start with :

      var requiredParams = (0, _filter.default)(_context = url.split('/')).call(_context, function (s) {
        return s && (0, _includes.default)(s).call(s, ':');
      });
      if (!requiredParams.length) return url;
      var parameterizedUrl = url;
      (0, _forEach.default)(requiredParams).call(requiredParams, function (p) {
        // strip the : and replace with param value
        var key = p.substr(1);
        var value = params[key];

        if (!value) {
          throw new Error("required param ".concat(key, " not provided"));
        }

        parameterizedUrl = parameterizedUrl.replace(p, value); // remove required param from param list
        // so it doesn't become part of the query params

        delete params[key];
      });
      return parameterizedUrl;
    }
  }, {
    key: "getApiRateLimitInfo",
    value: function (headers) {
      return {
        'x-rate-limit-limit': headers['x-rate-limit-limit'],
        'x-rate-limit-remaining-ttl': headers['x-rate-limit-remaining-ttl'],
        'x-rate-limit-used': headers['x-rate-limit-used'],
        'x-rate-limit-remaining-ip-ttl': headers['x-rate-limit-remaining-ip-ttl'],
        'x-rate-limit-ip-used': headers['x-rate-limit-ip-used']
      };
    }
  }, {
    key: "getErrorMessage",
    value: function (error, url) {
      var _error$response, _error$response$data;

      return (error === null || error === void 0 ? void 0 : (_error$response = error.response) === null || _error$response === void 0 ? void 0 : (_error$response$data = _error$response.data) === null || _error$response$data === void 0 ? void 0 : _error$response$data.message) || (error === null || error === void 0 ? void 0 : error.message) || (error === null || error === void 0 ? void 0 : error.toString()) || "Solana API error while calling ".concat(url);
    }
  }, {
    key: "fetch",
    value: function () {
      var _fetch = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(_ref3) {
        var endpoint, providedParams, params, User, user;
        return _regenerator.default.wrap(function (_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                endpoint = _ref3.endpoint, providedParams = _ref3.params; // Make a shallow copy to prevent modification of original params

                params = _objectSpread({}, providedParams);

                if (this.Moralis) {
                  User = this.Moralis.User;
                  user = User.current();

                  if (!params.address) {
                    if (user) {
                      params.address = user.get('solAddress');
                    }
                  }
                }

                if (!params.network) params.network = 'mainnet';
                if (!params.responseType) params.responseType = 'native';

                if (this.apiKey) {
                  _context2.next = 7;
                  break;
                }

                return _context2.abrupt("return", this.fetchFromServer(endpoint.name, params));

              case 7:
                return _context2.abrupt("return", this.fetchFromApi(endpoint, params));

              case 8:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee, this);
      }));

      return function () {
        return _fetch.apply(this, arguments);
      };
    }()
  }, {
    key: "fetchFromApi",
    value: function () {
      var _fetchFromApi = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2(endpoint, params) {
        var _endpoint$method, method, url, bodyParams, parameterizedUrl, body, response, _error$response2, status, headers, data, msg;

        return _regenerator.default.wrap(function (_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _endpoint$method = endpoint.method, method = _endpoint$method === void 0 ? 'GET' : _endpoint$method, url = endpoint.url, bodyParams = endpoint.bodyParams;
                _context3.prev = 1;
                parameterizedUrl = this.getParameterizedUrl(url, params);
                body = this.getBody(params, bodyParams);
                _context3.next = 6;
                return axios(this.baseURL + parameterizedUrl, {
                  params: params,
                  method: method,
                  body: body,
                  headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    'x-api-key': this.apiKey
                  }
                });

              case 6:
                response = _context3.sent;
                return _context3.abrupt("return", response.data);

              case 10:
                _context3.prev = 10;
                _context3.t0 = _context3["catch"](1);
                _error$response2 = _context3.t0.response, status = _error$response2.status, headers = _error$response2.headers, data = _error$response2.data;

                if (status === 429) {
                  msg = "This Moralis Server is rate-limited because of the plan restrictions. See the details about the current rate and throttle limits: ".concat((0, _stringify.default)(this.getApiRateLimitInfo(headers)));
                } else {
                  msg = this.getApiErrorMessage(_context3.t0, url);
                }

                throw new Error(msg);

              case 15:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee2, this, [[1, 10]]);
      }));

      return function () {
        return _fetchFromApi.apply(this, arguments);
      };
    }()
  }, {
    key: "fetchFromServer",
    value: function () {
      var _fetchFromServer = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3(name, options) {
        var http, user, response, _error$response3, _error$response3$data;

        return _regenerator.default.wrap(function (_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                if (this.serverUrl) {
                  _context4.next = 2;
                  break;
                }

                throw new Error('SolanaAPI not initialized, run Moralis.start() first');

              case 2:
                _context4.prev = 2;
                http = axios.create({
                  baseURL: this.serverUrl
                });
                user = this.Moralis.User.current();

                if (user) {
                  options._SessionToken = user.attributes.sessionToken;
                  options._ApplicationId = this.Moralis.applicationId;
                }

                _context4.next = 8;
                return http.post("/functions/sol-".concat(name), options, {
                  headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                  }
                });

              case 8:
                response = _context4.sent;
                return _context4.abrupt("return", response.data.result);

              case 12:
                _context4.prev = 12;
                _context4.t0 = _context4["catch"](2);

                if (!((_error$response3 = _context4.t0.response) !== null && _error$response3 !== void 0 && (_error$response3$data = _error$response3.data) !== null && _error$response3$data !== void 0 && _error$response3$data.error)) {
                  _context4.next = 16;
                  break;
                }

                throw new Error(_context4.t0.response.data.error);

              case 16:
                throw _context4.t0;

              case 17:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee3, this, [[2, 12]]);
      }));

      return function () {
        return _fetchFromServer.apply(this, arguments);
      };
    }()
  }]);
  return SolanaApi;
}();

(0, _defineProperty2.default)(SolanaApi, "baseURL", 'https://solana-gateway.moralis.io');
(0, _defineProperty2.default)(SolanaApi, "BodyParamTypes", {
  setBody: 'set body',
  property: 'property'
});
(0, _defineProperty2.default)(SolanaApi, "account", {
  balance: function () {
    var _balance = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee4() {
      var options,
          _args4 = arguments;
      return _regenerator.default.wrap(function (_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              options = _args4.length > 0 && _args4[0] !== undefined ? _args4[0] : {};
              return _context5.abrupt("return", SolanaApi.fetch({
                endpoint: {
                  "method": "GET",
                  "group": "account",
                  "name": "balance",
                  "url": "/account/:network/:address/balance"
                },
                params: options
              }));

            case 2:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee4);
    }));

    return function () {
      return _balance.apply(this, arguments);
    };
  }(),
  getSPL: function () {
    var _getSPL = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee5() {
      var options,
          _args5 = arguments;
      return _regenerator.default.wrap(function (_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              options = _args5.length > 0 && _args5[0] !== undefined ? _args5[0] : {};
              return _context6.abrupt("return", SolanaApi.fetch({
                endpoint: {
                  "method": "GET",
                  "group": "account",
                  "name": "getSPL",
                  "url": "/account/:network/:address/tokens"
                },
                params: options
              }));

            case 2:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee5);
    }));

    return function () {
      return _getSPL.apply(this, arguments);
    };
  }(),
  getNFTs: function () {
    var _getNFTs = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee6() {
      var options,
          _args6 = arguments;
      return _regenerator.default.wrap(function (_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              options = _args6.length > 0 && _args6[0] !== undefined ? _args6[0] : {};
              return _context7.abrupt("return", SolanaApi.fetch({
                endpoint: {
                  "method": "GET",
                  "group": "account",
                  "name": "getNFTs",
                  "url": "/account/:network/:address/nft"
                },
                params: options
              }));

            case 2:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee6);
    }));

    return function () {
      return _getNFTs.apply(this, arguments);
    };
  }(),
  getPortfolio: function () {
    var _getPortfolio = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee7() {
      var options,
          _args7 = arguments;
      return _regenerator.default.wrap(function (_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              options = _args7.length > 0 && _args7[0] !== undefined ? _args7[0] : {};
              return _context8.abrupt("return", SolanaApi.fetch({
                endpoint: {
                  "method": "GET",
                  "group": "account",
                  "name": "getPortfolio",
                  "url": "/account/:network/:address/portfolio"
                },
                params: options
              }));

            case 2:
            case "end":
              return _context8.stop();
          }
        }
      }, _callee7);
    }));

    return function () {
      return _getPortfolio.apply(this, arguments);
    };
  }()
});
(0, _defineProperty2.default)(SolanaApi, "nft", {
  getNFTMetadata: function () {
    var _getNFTMetadata = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee8() {
      var options,
          _args8 = arguments;
      return _regenerator.default.wrap(function (_context9) {
        while (1) {
          switch (_context9.prev = _context9.next) {
            case 0:
              options = _args8.length > 0 && _args8[0] !== undefined ? _args8[0] : {};
              return _context9.abrupt("return", SolanaApi.fetch({
                endpoint: {
                  "method": "GET",
                  "group": "nft",
                  "name": "getNFTMetadata",
                  "url": "/nft/:network/:address/metadata"
                },
                params: options
              }));

            case 2:
            case "end":
              return _context9.stop();
          }
        }
      }, _callee8);
    }));

    return function () {
      return _getNFTMetadata.apply(this, arguments);
    };
  }()
});
var _default = SolanaApi;
exports.default = _default;