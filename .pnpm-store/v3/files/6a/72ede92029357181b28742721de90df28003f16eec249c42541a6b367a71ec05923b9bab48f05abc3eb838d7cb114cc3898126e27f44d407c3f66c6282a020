var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var axios = require('axios');

var SolanaApi = function () {
  function SolanaApi() {
    (0, _classCallCheck2.default)(this, SolanaApi);
  }

  (0, _createClass2.default)(SolanaApi, null, [{
    key: "initialize",
    value: function (_ref) {
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
      bodyParams.forEach(function (_ref2) {
        var key = _ref2.key,
            type = _ref2.type,
            required = _ref2.required;

        if (params[key] === undefined) {
          if (required) throw new Error("param " + key + " is required!");
        } else if (type === _this.BodyParamTypes.setBody) {
          body = params[key];
        } else {
          body[key] = params[key];
        }

        delete params[key];
      });
      return body;
    }
  }, {
    key: "getParameterizedUrl",
    value: function (url, params) {
      if (!Object.keys(params).length) return url;
      var requiredParams = url.split('/').filter(function (s) {
        return s && s.includes(':');
      });
      if (!requiredParams.length) return url;
      var parameterizedUrl = url;
      requiredParams.forEach(function (p) {
        var key = p.substr(1);
        var value = params[key];

        if (!value) {
          throw new Error("required param " + key + " not provided");
        }

        parameterizedUrl = parameterizedUrl.replace(p, value);
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

      return (error == null ? void 0 : (_error$response = error.response) == null ? void 0 : (_error$response$data = _error$response.data) == null ? void 0 : _error$response$data.message) || (error == null ? void 0 : error.message) || (error == null ? void 0 : error.toString()) || "Solana API error while calling " + url;
    }
  }, {
    key: "fetch",
    value: function (_ref3) {
      var endpoint, providedParams, params, User, user;
      return _regenerator.default.async(function (_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              endpoint = _ref3.endpoint, providedParams = _ref3.params;
              params = (0, _extends2.default)({}, providedParams);

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
                _context.next = 7;
                break;
              }

              return _context.abrupt("return", this.fetchFromServer(endpoint.name, params));

            case 7:
              return _context.abrupt("return", this.fetchFromApi(endpoint, params));

            case 8:
            case "end":
              return _context.stop();
          }
        }
      }, null, this, null, Promise);
    }
  }, {
    key: "fetchFromApi",
    value: function (endpoint, params) {
      var _endpoint$method, method, url, bodyParams, parameterizedUrl, body, response, _error$response2, status, headers, data, msg;

      return _regenerator.default.async(function (_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _endpoint$method = endpoint.method, method = _endpoint$method === void 0 ? 'GET' : _endpoint$method, url = endpoint.url, bodyParams = endpoint.bodyParams;
              _context2.prev = 1;
              parameterizedUrl = this.getParameterizedUrl(url, params);
              body = this.getBody(params, bodyParams);
              _context2.next = 6;
              return _regenerator.default.awrap(axios(this.baseURL + parameterizedUrl, {
                params: params,
                method: method,
                body: body,
                headers: {
                  Accept: 'application/json',
                  'Content-Type': 'application/json',
                  'x-api-key': this.apiKey
                }
              }));

            case 6:
              response = _context2.sent;
              return _context2.abrupt("return", response.data);

            case 10:
              _context2.prev = 10;
              _context2.t0 = _context2["catch"](1);
              _error$response2 = _context2.t0.response, status = _error$response2.status, headers = _error$response2.headers, data = _error$response2.data;

              if (status === 429) {
                msg = "This Moralis Server is rate-limited because of the plan restrictions. See the details about the current rate and throttle limits: " + JSON.stringify(this.getApiRateLimitInfo(headers));
              } else {
                msg = this.getApiErrorMessage(_context2.t0, url);
              }

              throw new Error(msg);

            case 15:
            case "end":
              return _context2.stop();
          }
        }
      }, null, this, [[1, 10]], Promise);
    }
  }, {
    key: "fetchFromServer",
    value: function (name, options) {
      var http, user, response, _error$response3, _error$response3$data;

      return _regenerator.default.async(function (_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              if (this.serverUrl) {
                _context3.next = 2;
                break;
              }

              throw new Error('SolanaAPI not initialized, run Moralis.start() first');

            case 2:
              _context3.prev = 2;
              http = axios.create({
                baseURL: this.serverUrl
              });
              user = this.Moralis.User.current();

              if (user) {
                options._SessionToken = user.attributes.sessionToken;
                options._ApplicationId = this.Moralis.applicationId;
              }

              _context3.next = 8;
              return _regenerator.default.awrap(http.post("/functions/sol-" + name, options, {
                headers: {
                  Accept: 'application/json',
                  'Content-Type': 'application/json'
                }
              }));

            case 8:
              response = _context3.sent;
              return _context3.abrupt("return", response.data.result);

            case 12:
              _context3.prev = 12;
              _context3.t0 = _context3["catch"](2);

              if (!((_error$response3 = _context3.t0.response) != null && (_error$response3$data = _error$response3.data) != null && _error$response3$data.error)) {
                _context3.next = 16;
                break;
              }

              throw new Error(_context3.t0.response.data.error);

            case 16:
              throw _context3.t0;

            case 17:
            case "end":
              return _context3.stop();
          }
        }
      }, null, this, [[2, 12]], Promise);
    }
  }]);
  return SolanaApi;
}();

SolanaApi.baseURL = 'https://solana-gateway.moralis.io';
SolanaApi.BodyParamTypes = {
  setBody: 'set body',
  property: 'property'
};
SolanaApi.account = {
  balance: function () {
    var options,
        _args4 = arguments;
    return _regenerator.default.async(function (_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            options = _args4.length > 0 && _args4[0] !== undefined ? _args4[0] : {};
            return _context4.abrupt("return", SolanaApi.fetch({
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
            return _context4.stop();
        }
      }
    }, null, null, null, Promise);
  },
  getSPL: function () {
    var options,
        _args5 = arguments;
    return _regenerator.default.async(function (_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            options = _args5.length > 0 && _args5[0] !== undefined ? _args5[0] : {};
            return _context5.abrupt("return", SolanaApi.fetch({
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
            return _context5.stop();
        }
      }
    }, null, null, null, Promise);
  },
  getNFTs: function () {
    var options,
        _args6 = arguments;
    return _regenerator.default.async(function (_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            options = _args6.length > 0 && _args6[0] !== undefined ? _args6[0] : {};
            return _context6.abrupt("return", SolanaApi.fetch({
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
            return _context6.stop();
        }
      }
    }, null, null, null, Promise);
  },
  getPortfolio: function () {
    var options,
        _args7 = arguments;
    return _regenerator.default.async(function (_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            options = _args7.length > 0 && _args7[0] !== undefined ? _args7[0] : {};
            return _context7.abrupt("return", SolanaApi.fetch({
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
            return _context7.stop();
        }
      }
    }, null, null, null, Promise);
  }
};
SolanaApi.nft = {
  getNFTMetadata: function () {
    var options,
        _args8 = arguments;
    return _regenerator.default.async(function (_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            options = _args8.length > 0 && _args8[0] !== undefined ? _args8[0] : {};
            return _context8.abrupt("return", SolanaApi.fetch({
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
            return _context8.stop();
        }
      }
    }, null, null, null, Promise);
  }
};
var _default = SolanaApi;
exports.default = _default;