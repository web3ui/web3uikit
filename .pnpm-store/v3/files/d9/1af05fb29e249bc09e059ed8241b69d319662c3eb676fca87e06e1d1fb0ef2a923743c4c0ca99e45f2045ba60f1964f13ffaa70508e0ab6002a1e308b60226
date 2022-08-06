/**
 * Moralis JavaScript SDK v1.9.0
 *
 * The source tree of this library can be found at
 *   https://github.com/MoralisWeb3/Moralis-JS-SDK
 */
(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.Web3Api = f()}})(function(){var define,module,exports;return (function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(_dereq_,module,exports){
"use strict";

var _Object$keys2 = _dereq_("@babel/runtime-corejs3/core-js-stable/object/keys");

var _Object$getOwnPropertySymbols = _dereq_("@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols");

var _filterInstanceProperty2 = _dereq_("@babel/runtime-corejs3/core-js-stable/instance/filter");

var _Object$getOwnPropertyDescriptor = _dereq_("@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor");

var _forEachInstanceProperty2 = _dereq_("@babel/runtime-corejs3/core-js-stable/instance/for-each");

var _Object$getOwnPropertyDescriptors = _dereq_("@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors");

var _Object$defineProperties = _dereq_("@babel/runtime-corejs3/core-js-stable/object/define-properties");

var _Object$defineProperty = _dereq_("@babel/runtime-corejs3/core-js-stable/object/define-property");

var _interopRequireDefault = _dereq_("@babel/runtime-corejs3/helpers/interopRequireDefault");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _regenerator = _interopRequireDefault(_dereq_("@babel/runtime-corejs3/regenerator"));

var _forEach = _interopRequireDefault(_dereq_("@babel/runtime-corejs3/core-js-stable/instance/for-each"));

var _keys = _interopRequireDefault(_dereq_("@babel/runtime-corejs3/core-js-stable/object/keys"));

var _filter = _interopRequireDefault(_dereq_("@babel/runtime-corejs3/core-js-stable/instance/filter"));

var _includes = _interopRequireDefault(_dereq_("@babel/runtime-corejs3/core-js-stable/instance/includes"));

var _stringify = _interopRequireDefault(_dereq_("@babel/runtime-corejs3/core-js-stable/json/stringify"));

var _every = _interopRequireDefault(_dereq_("@babel/runtime-corejs3/core-js-stable/instance/every"));

var _asyncToGenerator2 = _interopRequireDefault(_dereq_("@babel/runtime-corejs3/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(_dereq_("@babel/runtime-corejs3/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(_dereq_("@babel/runtime-corejs3/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(_dereq_("@babel/runtime-corejs3/helpers/defineProperty"));

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
    var _context44, _context45;

    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? _forEachInstanceProperty2(_context44 = ownKeys(Object(source), !0)).call(_context44, function (key) {
      (0, _defineProperty2.default)(target, key, source[key]);
    }) : _Object$getOwnPropertyDescriptors ? _Object$defineProperties(target, _Object$getOwnPropertyDescriptors(source)) : _forEachInstanceProperty2(_context45 = ownKeys(Object(source))).call(_context45, function (key) {
      _Object$defineProperty(target, key, _Object$getOwnPropertyDescriptor(source, key));
    });
  }

  return target;
}
/**
 * Automatically generated code, via genWeb3API.js
 * Do not modify manually
 */


var axios = _dereq_('axios');

var Web3Api = /*#__PURE__*/function () {
  function Web3Api() {
    (0, _classCallCheck2.default)(this, Web3Api);
  }

  (0, _createClass2.default)(Web3Api, null, [{
    key: "initialize",
    value: function (_ref) {
      var apiKey = _ref.apiKey,
          serverUrl = _ref.serverUrl,
          _ref$Moralis = _ref.Moralis,
          Moralis = _ref$Moralis === void 0 ? null : _ref$Moralis;

      if (!serverUrl && !apiKey) {
        throw new Error('Web3Api.initialize failed: initialize with apiKey or serverUrl');
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
    key: "getNextOptions",
    value: function (result, options) {
      var nextOptions = _objectSpread({}, options);

      if (!result || !result.page_size || !result.total || result.page === undefined) return options;

      if (result.cursor) {
        if (result.total > result.page_size * (result.page + 1)) nextOptions.cursor = result.cursor;
      } else {
        if (result.total > result.page_size * (result.page + 1)) {
          nextOptions.offset = (result.page + 1) * (nextOptions.limit || 500);
        }
      }

      return nextOptions;
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
    key: "getApiErrorMessage",
    value: function (error, url) {
      var _error$response, _error$response$data;

      return (error === null || error === void 0 ? void 0 : (_error$response = error.response) === null || _error$response === void 0 ? void 0 : (_error$response$data = _error$response.data) === null || _error$response$data === void 0 ? void 0 : _error$response$data.message) || (error === null || error === void 0 ? void 0 : error.message) || (error === null || error === void 0 ? void 0 : error.toString()) || "Web3 API error while calling ".concat(url);
    }
  }, {
    key: "fetch",
    value: function () {
      var _fetch = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(_ref3) {
        var endpoint, providedParams, params, _this$Moralis, User, account, user;

        return _regenerator.default.wrap(function (_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                endpoint = _ref3.endpoint, providedParams = _ref3.params; // Make a shallow copy to prevent modification of original params

                params = _objectSpread({}, providedParams);

                if (this.Moralis) {
                  _this$Moralis = this.Moralis, User = _this$Moralis.User, account = _this$Moralis.account;
                  user = User.current();

                  if (!params.address) {
                    if (user) {
                      params.address = user.get('ethAddress');
                    } else if (account) {
                      params.address = account;
                    }
                  }
                }

                if (this.apiKey) {
                  _context2.next = 5;
                  break;
                }

                return _context2.abrupt("return", this.fetchFromServer(endpoint.name, params));

              case 5:
                return _context2.abrupt("return", this.fetchFromApi(endpoint, params));

              case 6:
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
        var _this2 = this;

        var _endpoint$method, method, url, bodyParams, parameterizedUrl, body, response, result, nextOptions, _error$response2, status, headers, data, msg;

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
                result = response.data;
                nextOptions = this.getNextOptions(result, params);
                if (!this.checkObjEqual(nextOptions, params)) result.next = function () {
                  return _this2.fetchFromApi(endpoint, nextOptions);
                };
                return _context3.abrupt("return", result);

              case 13:
                _context3.prev = 13;
                _context3.t0 = _context3["catch"](1);
                _error$response2 = _context3.t0.response, status = _error$response2.status, headers = _error$response2.headers, data = _error$response2.data;

                if (status === 429) {
                  msg = "This Moralis Server is rate-limited because of the plan restrictions. See the details about the current rate and throttle limits: ".concat((0, _stringify.default)(this.getApiRateLimitInfo(headers)));
                } else {
                  msg = this.getApiErrorMessage(_context3.t0, url);
                }

                throw new Error(msg);

              case 18:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee2, this, [[1, 13]]);
      }));

      return function () {
        return _fetchFromApi.apply(this, arguments);
      };
    }()
  }, {
    key: "fetchFromServer",
    value: function () {
      var _fetchFromServer = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3(name, options) {
        var _this3 = this;

        var http, user, response, result, nextOptions, _error$response3, _error$response3$data;

        return _regenerator.default.wrap(function (_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                if (this.serverUrl) {
                  _context4.next = 2;
                  break;
                }

                throw new Error('Web3Api not initialized, run Moralis.start() first');

              case 2:
                _context4.prev = 2;
                http = axios.create({
                  baseURL: this.serverUrl
                });
                if (!options.chain) options.chain = 'eth';
                user = this.Moralis.User.current();

                if (user) {
                  options._SessionToken = user.attributes.sessionToken;
                  options._ApplicationId = this.Moralis.applicationId;
                }

                _context4.next = 9;
                return http.post("/functions/".concat(name), options, {
                  headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                  }
                });

              case 9:
                response = _context4.sent;
                result = response.data.result;
                nextOptions = this.getNextOptions(result, options);
                if (!this.checkObjEqual(nextOptions, options)) result.next = function () {
                  return _this3.fetchFromServer(name, nextOptions);
                };
                return _context4.abrupt("return", result);

              case 16:
                _context4.prev = 16;
                _context4.t0 = _context4["catch"](2);

                if (!((_error$response3 = _context4.t0.response) !== null && _error$response3 !== void 0 && (_error$response3$data = _error$response3.data) !== null && _error$response3$data !== void 0 && _error$response3$data.error)) {
                  _context4.next = 20;
                  break;
                }

                throw new Error(_context4.t0.response.data.error);

              case 20:
                throw _context4.t0;

              case 21:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee3, this, [[2, 16]]);
      }));

      return function () {
        return _fetchFromServer.apply(this, arguments);
      };
    }()
  }]);
  return Web3Api;
}();

(0, _defineProperty2.default)(Web3Api, "baseURL", 'https://deep-index.moralis.io/api/v2');
(0, _defineProperty2.default)(Web3Api, "BodyParamTypes", {
  setBody: 'set body',
  property: 'property'
});
(0, _defineProperty2.default)(Web3Api, "checkObjEqual", function () {
  for (var _len = arguments.length, objects = new Array(_len), _key = 0; _key < _len; _key++) {
    objects[_key] = arguments[_key];
  }

  return (0, _every.default)(objects).call(objects, function (obj) {
    return (0, _stringify.default)(obj) === (0, _stringify.default)(objects[0]);
  });
});
(0, _defineProperty2.default)(Web3Api, "native", {
  getBlock: function () {
    var _getBlock = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee4() {
      var options,
          _args4 = arguments;
      return _regenerator.default.wrap(function (_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              options = _args4.length > 0 && _args4[0] !== undefined ? _args4[0] : {};
              return _context5.abrupt("return", Web3Api.fetch({
                endpoint: {
                  "method": "GET",
                  "group": "native",
                  "name": "getBlock",
                  "url": "/block/:block_number_or_hash"
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
      return _getBlock.apply(this, arguments);
    };
  }(),
  getDateToBlock: function () {
    var _getDateToBlock = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee5() {
      var options,
          _args5 = arguments;
      return _regenerator.default.wrap(function (_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              options = _args5.length > 0 && _args5[0] !== undefined ? _args5[0] : {};
              return _context6.abrupt("return", Web3Api.fetch({
                endpoint: {
                  "method": "GET",
                  "group": "native",
                  "name": "getDateToBlock",
                  "url": "/dateToBlock"
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
      return _getDateToBlock.apply(this, arguments);
    };
  }(),
  getLogsByAddress: function () {
    var _getLogsByAddress = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee6() {
      var options,
          _args6 = arguments;
      return _regenerator.default.wrap(function (_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              options = _args6.length > 0 && _args6[0] !== undefined ? _args6[0] : {};
              return _context7.abrupt("return", Web3Api.fetch({
                endpoint: {
                  "method": "GET",
                  "group": "native",
                  "name": "getLogsByAddress",
                  "url": "/:address/logs"
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
      return _getLogsByAddress.apply(this, arguments);
    };
  }(),
  getNFTTransfersByBlock: function () {
    var _getNFTTransfersByBlock = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee7() {
      var options,
          _args7 = arguments;
      return _regenerator.default.wrap(function (_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              options = _args7.length > 0 && _args7[0] !== undefined ? _args7[0] : {};
              return _context8.abrupt("return", Web3Api.fetch({
                endpoint: {
                  "method": "GET",
                  "group": "native",
                  "name": "getNFTTransfersByBlock",
                  "url": "/block/:block_number_or_hash/nft/transfers"
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
      return _getNFTTransfersByBlock.apply(this, arguments);
    };
  }(),
  getTransaction: function () {
    var _getTransaction = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee8() {
      var options,
          _args8 = arguments;
      return _regenerator.default.wrap(function (_context9) {
        while (1) {
          switch (_context9.prev = _context9.next) {
            case 0:
              options = _args8.length > 0 && _args8[0] !== undefined ? _args8[0] : {};
              return _context9.abrupt("return", Web3Api.fetch({
                endpoint: {
                  "method": "GET",
                  "group": "native",
                  "name": "getTransaction",
                  "url": "/transaction/:transaction_hash"
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
      return _getTransaction.apply(this, arguments);
    };
  }(),
  getContractEvents: function () {
    var _getContractEvents = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee9() {
      var options,
          _args9 = arguments;
      return _regenerator.default.wrap(function (_context10) {
        while (1) {
          switch (_context10.prev = _context10.next) {
            case 0:
              options = _args9.length > 0 && _args9[0] !== undefined ? _args9[0] : {};
              return _context10.abrupt("return", Web3Api.fetch({
                endpoint: {
                  "method": "POST",
                  "group": "native",
                  "name": "getContractEvents",
                  "url": "/:address/events",
                  "bodyParams": [{
                    "key": "data",
                    "type": "set body",
                    "required": false
                  }]
                },
                params: options
              }));

            case 2:
            case "end":
              return _context10.stop();
          }
        }
      }, _callee9);
    }));

    return function () {
      return _getContractEvents.apply(this, arguments);
    };
  }(),
  runContractFunction: function () {
    var _runContractFunction = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee10() {
      var options,
          _args10 = arguments;
      return _regenerator.default.wrap(function (_context11) {
        while (1) {
          switch (_context11.prev = _context11.next) {
            case 0:
              options = _args10.length > 0 && _args10[0] !== undefined ? _args10[0] : {};
              return _context11.abrupt("return", Web3Api.fetch({
                endpoint: {
                  "method": "POST",
                  "group": "native",
                  "name": "runContractFunction",
                  "url": "/:address/function",
                  "bodyParams": [{
                    "key": "abi",
                    "type": "property",
                    "required": true
                  }, {
                    "key": "params",
                    "type": "property",
                    "required": false
                  }]
                },
                params: options
              }));

            case 2:
            case "end":
              return _context11.stop();
          }
        }
      }, _callee10);
    }));

    return function () {
      return _runContractFunction.apply(this, arguments);
    };
  }()
});
(0, _defineProperty2.default)(Web3Api, "account", {
  getTransactions: function () {
    var _getTransactions = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee11() {
      var options,
          _args11 = arguments;
      return _regenerator.default.wrap(function (_context12) {
        while (1) {
          switch (_context12.prev = _context12.next) {
            case 0:
              options = _args11.length > 0 && _args11[0] !== undefined ? _args11[0] : {};
              return _context12.abrupt("return", Web3Api.fetch({
                endpoint: {
                  "method": "GET",
                  "group": "account",
                  "name": "getTransactions",
                  "url": "/:address"
                },
                params: options
              }));

            case 2:
            case "end":
              return _context12.stop();
          }
        }
      }, _callee11);
    }));

    return function () {
      return _getTransactions.apply(this, arguments);
    };
  }(),
  getNativeBalance: function () {
    var _getNativeBalance = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee12() {
      var options,
          _args12 = arguments;
      return _regenerator.default.wrap(function (_context13) {
        while (1) {
          switch (_context13.prev = _context13.next) {
            case 0:
              options = _args12.length > 0 && _args12[0] !== undefined ? _args12[0] : {};
              return _context13.abrupt("return", Web3Api.fetch({
                endpoint: {
                  "method": "GET",
                  "group": "account",
                  "name": "getNativeBalance",
                  "url": "/:address/balance"
                },
                params: options
              }));

            case 2:
            case "end":
              return _context13.stop();
          }
        }
      }, _callee12);
    }));

    return function () {
      return _getNativeBalance.apply(this, arguments);
    };
  }(),
  getTokenBalances: function () {
    var _getTokenBalances = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee13() {
      var options,
          _args13 = arguments;
      return _regenerator.default.wrap(function (_context14) {
        while (1) {
          switch (_context14.prev = _context14.next) {
            case 0:
              options = _args13.length > 0 && _args13[0] !== undefined ? _args13[0] : {};
              return _context14.abrupt("return", Web3Api.fetch({
                endpoint: {
                  "method": "GET",
                  "group": "account",
                  "name": "getTokenBalances",
                  "url": "/:address/erc20"
                },
                params: options
              }));

            case 2:
            case "end":
              return _context14.stop();
          }
        }
      }, _callee13);
    }));

    return function () {
      return _getTokenBalances.apply(this, arguments);
    };
  }(),
  getTokenTransfers: function () {
    var _getTokenTransfers = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee14() {
      var options,
          _args14 = arguments;
      return _regenerator.default.wrap(function (_context15) {
        while (1) {
          switch (_context15.prev = _context15.next) {
            case 0:
              options = _args14.length > 0 && _args14[0] !== undefined ? _args14[0] : {};
              return _context15.abrupt("return", Web3Api.fetch({
                endpoint: {
                  "method": "GET",
                  "group": "account",
                  "name": "getTokenTransfers",
                  "url": "/:address/erc20/transfers"
                },
                params: options
              }));

            case 2:
            case "end":
              return _context15.stop();
          }
        }
      }, _callee14);
    }));

    return function () {
      return _getTokenTransfers.apply(this, arguments);
    };
  }(),
  getNFTs: function () {
    var _getNFTs = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee15() {
      var options,
          _args15 = arguments;
      return _regenerator.default.wrap(function (_context16) {
        while (1) {
          switch (_context16.prev = _context16.next) {
            case 0:
              options = _args15.length > 0 && _args15[0] !== undefined ? _args15[0] : {};
              return _context16.abrupt("return", Web3Api.fetch({
                endpoint: {
                  "method": "GET",
                  "group": "account",
                  "name": "getNFTs",
                  "url": "/:address/nft"
                },
                params: options
              }));

            case 2:
            case "end":
              return _context16.stop();
          }
        }
      }, _callee15);
    }));

    return function () {
      return _getNFTs.apply(this, arguments);
    };
  }(),
  getNFTTransfers: function () {
    var _getNFTTransfers = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee16() {
      var options,
          _args16 = arguments;
      return _regenerator.default.wrap(function (_context17) {
        while (1) {
          switch (_context17.prev = _context17.next) {
            case 0:
              options = _args16.length > 0 && _args16[0] !== undefined ? _args16[0] : {};
              return _context17.abrupt("return", Web3Api.fetch({
                endpoint: {
                  "method": "GET",
                  "group": "account",
                  "name": "getNFTTransfers",
                  "url": "/:address/nft/transfers"
                },
                params: options
              }));

            case 2:
            case "end":
              return _context17.stop();
          }
        }
      }, _callee16);
    }));

    return function () {
      return _getNFTTransfers.apply(this, arguments);
    };
  }(),
  getNFTsForContract: function () {
    var _getNFTsForContract = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee17() {
      var options,
          _args17 = arguments;
      return _regenerator.default.wrap(function (_context18) {
        while (1) {
          switch (_context18.prev = _context18.next) {
            case 0:
              options = _args17.length > 0 && _args17[0] !== undefined ? _args17[0] : {};
              return _context18.abrupt("return", Web3Api.fetch({
                endpoint: {
                  "method": "GET",
                  "group": "account",
                  "name": "getNFTsForContract",
                  "url": "/:address/nft/:token_address"
                },
                params: options
              }));

            case 2:
            case "end":
              return _context18.stop();
          }
        }
      }, _callee17);
    }));

    return function () {
      return _getNFTsForContract.apply(this, arguments);
    };
  }()
});
(0, _defineProperty2.default)(Web3Api, "token", {
  getTokenMetadata: function () {
    var _getTokenMetadata = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee18() {
      var options,
          _args18 = arguments;
      return _regenerator.default.wrap(function (_context19) {
        while (1) {
          switch (_context19.prev = _context19.next) {
            case 0:
              options = _args18.length > 0 && _args18[0] !== undefined ? _args18[0] : {};
              return _context19.abrupt("return", Web3Api.fetch({
                endpoint: {
                  "method": "GET",
                  "group": "token",
                  "name": "getTokenMetadata",
                  "url": "/erc20/metadata"
                },
                params: options
              }));

            case 2:
            case "end":
              return _context19.stop();
          }
        }
      }, _callee18);
    }));

    return function () {
      return _getTokenMetadata.apply(this, arguments);
    };
  }(),
  getNFTTrades: function () {
    var _getNFTTrades = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee19() {
      var options,
          _args19 = arguments;
      return _regenerator.default.wrap(function (_context20) {
        while (1) {
          switch (_context20.prev = _context20.next) {
            case 0:
              options = _args19.length > 0 && _args19[0] !== undefined ? _args19[0] : {};
              return _context20.abrupt("return", Web3Api.fetch({
                endpoint: {
                  "method": "GET",
                  "group": "token",
                  "name": "getNFTTrades",
                  "url": "/nft/:address/trades"
                },
                params: options
              }));

            case 2:
            case "end":
              return _context20.stop();
          }
        }
      }, _callee19);
    }));

    return function () {
      return _getNFTTrades.apply(this, arguments);
    };
  }(),
  getNFTLowestPrice: function () {
    var _getNFTLowestPrice = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee20() {
      var options,
          _args20 = arguments;
      return _regenerator.default.wrap(function (_context21) {
        while (1) {
          switch (_context21.prev = _context21.next) {
            case 0:
              options = _args20.length > 0 && _args20[0] !== undefined ? _args20[0] : {};
              return _context21.abrupt("return", Web3Api.fetch({
                endpoint: {
                  "method": "GET",
                  "group": "token",
                  "name": "getNFTLowestPrice",
                  "url": "/nft/:address/lowestprice"
                },
                params: options
              }));

            case 2:
            case "end":
              return _context21.stop();
          }
        }
      }, _callee20);
    }));

    return function () {
      return _getNFTLowestPrice.apply(this, arguments);
    };
  }(),
  getTokenMetadataBySymbol: function () {
    var _getTokenMetadataBySymbol = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee21() {
      var options,
          _args21 = arguments;
      return _regenerator.default.wrap(function (_context22) {
        while (1) {
          switch (_context22.prev = _context22.next) {
            case 0:
              options = _args21.length > 0 && _args21[0] !== undefined ? _args21[0] : {};
              return _context22.abrupt("return", Web3Api.fetch({
                endpoint: {
                  "method": "GET",
                  "group": "token",
                  "name": "getTokenMetadataBySymbol",
                  "url": "/erc20/metadata/symbols"
                },
                params: options
              }));

            case 2:
            case "end":
              return _context22.stop();
          }
        }
      }, _callee21);
    }));

    return function () {
      return _getTokenMetadataBySymbol.apply(this, arguments);
    };
  }(),
  getTokenPrice: function () {
    var _getTokenPrice = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee22() {
      var options,
          _args22 = arguments;
      return _regenerator.default.wrap(function (_context23) {
        while (1) {
          switch (_context23.prev = _context23.next) {
            case 0:
              options = _args22.length > 0 && _args22[0] !== undefined ? _args22[0] : {};
              return _context23.abrupt("return", Web3Api.fetch({
                endpoint: {
                  "method": "GET",
                  "group": "token",
                  "name": "getTokenPrice",
                  "url": "/erc20/:address/price"
                },
                params: options
              }));

            case 2:
            case "end":
              return _context23.stop();
          }
        }
      }, _callee22);
    }));

    return function () {
      return _getTokenPrice.apply(this, arguments);
    };
  }(),
  getTokenAddressTransfers: function () {
    var _getTokenAddressTransfers = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee23() {
      var options,
          _args23 = arguments;
      return _regenerator.default.wrap(function (_context24) {
        while (1) {
          switch (_context24.prev = _context24.next) {
            case 0:
              options = _args23.length > 0 && _args23[0] !== undefined ? _args23[0] : {};
              return _context24.abrupt("return", Web3Api.fetch({
                endpoint: {
                  "method": "GET",
                  "group": "token",
                  "name": "getTokenAddressTransfers",
                  "url": "/erc20/:address/transfers"
                },
                params: options
              }));

            case 2:
            case "end":
              return _context24.stop();
          }
        }
      }, _callee23);
    }));

    return function () {
      return _getTokenAddressTransfers.apply(this, arguments);
    };
  }(),
  getTokenAllowance: function () {
    var _getTokenAllowance = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee24() {
      var options,
          _args24 = arguments;
      return _regenerator.default.wrap(function (_context25) {
        while (1) {
          switch (_context25.prev = _context25.next) {
            case 0:
              options = _args24.length > 0 && _args24[0] !== undefined ? _args24[0] : {};
              return _context25.abrupt("return", Web3Api.fetch({
                endpoint: {
                  "method": "GET",
                  "group": "token",
                  "name": "getTokenAllowance",
                  "url": "/erc20/:address/allowance"
                },
                params: options
              }));

            case 2:
            case "end":
              return _context25.stop();
          }
        }
      }, _callee24);
    }));

    return function () {
      return _getTokenAllowance.apply(this, arguments);
    };
  }(),
  searchNFTs: function () {
    var _searchNFTs = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee25() {
      var options,
          _args25 = arguments;
      return _regenerator.default.wrap(function (_context26) {
        while (1) {
          switch (_context26.prev = _context26.next) {
            case 0:
              options = _args25.length > 0 && _args25[0] !== undefined ? _args25[0] : {};
              return _context26.abrupt("return", Web3Api.fetch({
                endpoint: {
                  "method": "GET",
                  "group": "token",
                  "name": "searchNFTs",
                  "url": "/nft/search"
                },
                params: options
              }));

            case 2:
            case "end":
              return _context26.stop();
          }
        }
      }, _callee25);
    }));

    return function () {
      return _searchNFTs.apply(this, arguments);
    };
  }(),
  getNftTransfersFromToBlock: function () {
    var _getNftTransfersFromToBlock = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee26() {
      var options,
          _args26 = arguments;
      return _regenerator.default.wrap(function (_context27) {
        while (1) {
          switch (_context27.prev = _context27.next) {
            case 0:
              options = _args26.length > 0 && _args26[0] !== undefined ? _args26[0] : {};
              return _context27.abrupt("return", Web3Api.fetch({
                endpoint: {
                  "method": "GET",
                  "group": "token",
                  "name": "getNftTransfersFromToBlock",
                  "url": "/nft/transfers"
                },
                params: options
              }));

            case 2:
            case "end":
              return _context27.stop();
          }
        }
      }, _callee26);
    }));

    return function () {
      return _getNftTransfersFromToBlock.apply(this, arguments);
    };
  }(),
  getAllTokenIds: function () {
    var _getAllTokenIds = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee27() {
      var options,
          _args27 = arguments;
      return _regenerator.default.wrap(function (_context28) {
        while (1) {
          switch (_context28.prev = _context28.next) {
            case 0:
              options = _args27.length > 0 && _args27[0] !== undefined ? _args27[0] : {};
              return _context28.abrupt("return", Web3Api.fetch({
                endpoint: {
                  "method": "GET",
                  "group": "token",
                  "name": "getAllTokenIds",
                  "url": "/nft/:address"
                },
                params: options
              }));

            case 2:
            case "end":
              return _context28.stop();
          }
        }
      }, _callee27);
    }));

    return function () {
      return _getAllTokenIds.apply(this, arguments);
    };
  }(),
  getContractNFTTransfers: function () {
    var _getContractNFTTransfers = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee28() {
      var options,
          _args28 = arguments;
      return _regenerator.default.wrap(function (_context29) {
        while (1) {
          switch (_context29.prev = _context29.next) {
            case 0:
              options = _args28.length > 0 && _args28[0] !== undefined ? _args28[0] : {};
              return _context29.abrupt("return", Web3Api.fetch({
                endpoint: {
                  "method": "GET",
                  "group": "token",
                  "name": "getContractNFTTransfers",
                  "url": "/nft/:address/transfers"
                },
                params: options
              }));

            case 2:
            case "end":
              return _context29.stop();
          }
        }
      }, _callee28);
    }));

    return function () {
      return _getContractNFTTransfers.apply(this, arguments);
    };
  }(),
  getNFTOwners: function () {
    var _getNFTOwners = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee29() {
      var options,
          _args29 = arguments;
      return _regenerator.default.wrap(function (_context30) {
        while (1) {
          switch (_context30.prev = _context30.next) {
            case 0:
              options = _args29.length > 0 && _args29[0] !== undefined ? _args29[0] : {};
              return _context30.abrupt("return", Web3Api.fetch({
                endpoint: {
                  "method": "GET",
                  "group": "token",
                  "name": "getNFTOwners",
                  "url": "/nft/:address/owners"
                },
                params: options
              }));

            case 2:
            case "end":
              return _context30.stop();
          }
        }
      }, _callee29);
    }));

    return function () {
      return _getNFTOwners.apply(this, arguments);
    };
  }(),
  getNFTMetadata: function () {
    var _getNFTMetadata = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee30() {
      var options,
          _args30 = arguments;
      return _regenerator.default.wrap(function (_context31) {
        while (1) {
          switch (_context31.prev = _context31.next) {
            case 0:
              options = _args30.length > 0 && _args30[0] !== undefined ? _args30[0] : {};
              return _context31.abrupt("return", Web3Api.fetch({
                endpoint: {
                  "method": "GET",
                  "group": "token",
                  "name": "getNFTMetadata",
                  "url": "/nft/:address/metadata"
                },
                params: options
              }));

            case 2:
            case "end":
              return _context31.stop();
          }
        }
      }, _callee30);
    }));

    return function () {
      return _getNFTMetadata.apply(this, arguments);
    };
  }(),
  reSyncMetadata: function () {
    var _reSyncMetadata = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee31() {
      var options,
          _args31 = arguments;
      return _regenerator.default.wrap(function (_context32) {
        while (1) {
          switch (_context32.prev = _context32.next) {
            case 0:
              options = _args31.length > 0 && _args31[0] !== undefined ? _args31[0] : {};
              return _context32.abrupt("return", Web3Api.fetch({
                endpoint: {
                  "method": "GET",
                  "group": "token",
                  "name": "reSyncMetadata",
                  "url": "/nft/:address/:token_id/metadata/resync"
                },
                params: options
              }));

            case 2:
            case "end":
              return _context32.stop();
          }
        }
      }, _callee31);
    }));

    return function () {
      return _reSyncMetadata.apply(this, arguments);
    };
  }(),
  syncNFTContract: function () {
    var _syncNFTContract = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee32() {
      var options,
          _args32 = arguments;
      return _regenerator.default.wrap(function (_context33) {
        while (1) {
          switch (_context33.prev = _context33.next) {
            case 0:
              options = _args32.length > 0 && _args32[0] !== undefined ? _args32[0] : {};
              return _context33.abrupt("return", Web3Api.fetch({
                endpoint: {
                  "method": "PUT",
                  "group": "token",
                  "name": "syncNFTContract",
                  "url": "/nft/:address/sync"
                },
                params: options
              }));

            case 2:
            case "end":
              return _context33.stop();
          }
        }
      }, _callee32);
    }));

    return function () {
      return _syncNFTContract.apply(this, arguments);
    };
  }(),
  getTokenIdMetadata: function () {
    var _getTokenIdMetadata = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee33() {
      var options,
          _args33 = arguments;
      return _regenerator.default.wrap(function (_context34) {
        while (1) {
          switch (_context34.prev = _context34.next) {
            case 0:
              options = _args33.length > 0 && _args33[0] !== undefined ? _args33[0] : {};
              return _context34.abrupt("return", Web3Api.fetch({
                endpoint: {
                  "method": "GET",
                  "group": "token",
                  "name": "getTokenIdMetadata",
                  "url": "/nft/:address/:token_id"
                },
                params: options
              }));

            case 2:
            case "end":
              return _context34.stop();
          }
        }
      }, _callee33);
    }));

    return function () {
      return _getTokenIdMetadata.apply(this, arguments);
    };
  }(),
  getTokenIdOwners: function () {
    var _getTokenIdOwners = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee34() {
      var options,
          _args34 = arguments;
      return _regenerator.default.wrap(function (_context35) {
        while (1) {
          switch (_context35.prev = _context35.next) {
            case 0:
              options = _args34.length > 0 && _args34[0] !== undefined ? _args34[0] : {};
              return _context35.abrupt("return", Web3Api.fetch({
                endpoint: {
                  "method": "GET",
                  "group": "token",
                  "name": "getTokenIdOwners",
                  "url": "/nft/:address/:token_id/owners"
                },
                params: options
              }));

            case 2:
            case "end":
              return _context35.stop();
          }
        }
      }, _callee34);
    }));

    return function () {
      return _getTokenIdOwners.apply(this, arguments);
    };
  }(),
  getWalletTokenIdTransfers: function () {
    var _getWalletTokenIdTransfers = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee35() {
      var options,
          _args35 = arguments;
      return _regenerator.default.wrap(function (_context36) {
        while (1) {
          switch (_context36.prev = _context36.next) {
            case 0:
              options = _args35.length > 0 && _args35[0] !== undefined ? _args35[0] : {};
              return _context36.abrupt("return", Web3Api.fetch({
                endpoint: {
                  "method": "GET",
                  "group": "token",
                  "name": "getWalletTokenIdTransfers",
                  "url": "/nft/:address/:token_id/transfers"
                },
                params: options
              }));

            case 2:
            case "end":
              return _context36.stop();
          }
        }
      }, _callee35);
    }));

    return function () {
      return _getWalletTokenIdTransfers.apply(this, arguments);
    };
  }()
});
(0, _defineProperty2.default)(Web3Api, "resolve", {
  resolveDomain: function () {
    var _resolveDomain = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee36() {
      var options,
          _args36 = arguments;
      return _regenerator.default.wrap(function (_context37) {
        while (1) {
          switch (_context37.prev = _context37.next) {
            case 0:
              options = _args36.length > 0 && _args36[0] !== undefined ? _args36[0] : {};
              return _context37.abrupt("return", Web3Api.fetch({
                endpoint: {
                  "method": "GET",
                  "group": "resolve",
                  "name": "resolveDomain",
                  "url": "/resolve/:domain"
                },
                params: options
              }));

            case 2:
            case "end":
              return _context37.stop();
          }
        }
      }, _callee36);
    }));

    return function () {
      return _resolveDomain.apply(this, arguments);
    };
  }(),
  resolveAddress: function () {
    var _resolveAddress = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee37() {
      var options,
          _args37 = arguments;
      return _regenerator.default.wrap(function (_context38) {
        while (1) {
          switch (_context38.prev = _context38.next) {
            case 0:
              options = _args37.length > 0 && _args37[0] !== undefined ? _args37[0] : {};
              return _context38.abrupt("return", Web3Api.fetch({
                endpoint: {
                  "method": "GET",
                  "group": "resolve",
                  "name": "resolveAddress",
                  "url": "/resolve/:address/reverse"
                },
                params: options
              }));

            case 2:
            case "end":
              return _context38.stop();
          }
        }
      }, _callee37);
    }));

    return function () {
      return _resolveAddress.apply(this, arguments);
    };
  }()
});
(0, _defineProperty2.default)(Web3Api, "defi", {
  getPairReserves: function () {
    var _getPairReserves = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee38() {
      var options,
          _args38 = arguments;
      return _regenerator.default.wrap(function (_context39) {
        while (1) {
          switch (_context39.prev = _context39.next) {
            case 0:
              options = _args38.length > 0 && _args38[0] !== undefined ? _args38[0] : {};
              return _context39.abrupt("return", Web3Api.fetch({
                endpoint: {
                  "method": "GET",
                  "group": "defi",
                  "name": "getPairReserves",
                  "url": "/:pair_address/reserves"
                },
                params: options
              }));

            case 2:
            case "end":
              return _context39.stop();
          }
        }
      }, _callee38);
    }));

    return function () {
      return _getPairReserves.apply(this, arguments);
    };
  }(),
  getPairAddress: function () {
    var _getPairAddress = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee39() {
      var options,
          _args39 = arguments;
      return _regenerator.default.wrap(function (_context40) {
        while (1) {
          switch (_context40.prev = _context40.next) {
            case 0:
              options = _args39.length > 0 && _args39[0] !== undefined ? _args39[0] : {};
              return _context40.abrupt("return", Web3Api.fetch({
                endpoint: {
                  "method": "GET",
                  "group": "defi",
                  "name": "getPairAddress",
                  "url": "/:token0_address/:token1_address/pairAddress"
                },
                params: options
              }));

            case 2:
            case "end":
              return _context40.stop();
          }
        }
      }, _callee39);
    }));

    return function () {
      return _getPairAddress.apply(this, arguments);
    };
  }()
});
(0, _defineProperty2.default)(Web3Api, "storage", {
  uploadFolder: function () {
    var _uploadFolder = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee40() {
      var options,
          _args40 = arguments;
      return _regenerator.default.wrap(function (_context41) {
        while (1) {
          switch (_context41.prev = _context41.next) {
            case 0:
              options = _args40.length > 0 && _args40[0] !== undefined ? _args40[0] : {};
              return _context41.abrupt("return", Web3Api.fetch({
                endpoint: {
                  "method": "POST",
                  "group": "storage",
                  "name": "uploadFolder",
                  "url": "/ipfs/uploadFolder",
                  "bodyParams": [{
                    "key": "data",
                    "type": "set body",
                    "required": false
                  }]
                },
                params: options
              }));

            case 2:
            case "end":
              return _context41.stop();
          }
        }
      }, _callee40);
    }));

    return function () {
      return _uploadFolder.apply(this, arguments);
    };
  }()
});
(0, _defineProperty2.default)(Web3Api, "info", {
  web3ApiVersion: function () {
    var _web3ApiVersion = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee41() {
      var options,
          _args41 = arguments;
      return _regenerator.default.wrap(function (_context42) {
        while (1) {
          switch (_context42.prev = _context42.next) {
            case 0:
              options = _args41.length > 0 && _args41[0] !== undefined ? _args41[0] : {};
              return _context42.abrupt("return", Web3Api.fetch({
                endpoint: {
                  "method": "GET",
                  "group": "info",
                  "name": "web3ApiVersion",
                  "url": "/web3/version"
                },
                params: options
              }));

            case 2:
            case "end":
              return _context42.stop();
          }
        }
      }, _callee41);
    }));

    return function () {
      return _web3ApiVersion.apply(this, arguments);
    };
  }(),
  endpointWeights: function () {
    var _endpointWeights = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee42() {
      var options,
          _args42 = arguments;
      return _regenerator.default.wrap(function (_context43) {
        while (1) {
          switch (_context43.prev = _context43.next) {
            case 0:
              options = _args42.length > 0 && _args42[0] !== undefined ? _args42[0] : {};
              return _context43.abrupt("return", Web3Api.fetch({
                endpoint: {
                  "method": "GET",
                  "group": "info",
                  "name": "endpointWeights",
                  "url": "/info/endpointWeights"
                },
                params: options
              }));

            case 2:
            case "end":
              return _context43.stop();
          }
        }
      }, _callee42);
    }));

    return function () {
      return _endpointWeights.apply(this, arguments);
    };
  }()
});
var _default = Web3Api;
exports.default = _default;
},{"@babel/runtime-corejs3/core-js-stable/instance/every":2,"@babel/runtime-corejs3/core-js-stable/instance/filter":3,"@babel/runtime-corejs3/core-js-stable/instance/for-each":4,"@babel/runtime-corejs3/core-js-stable/instance/includes":5,"@babel/runtime-corejs3/core-js-stable/json/stringify":6,"@babel/runtime-corejs3/core-js-stable/object/define-properties":7,"@babel/runtime-corejs3/core-js-stable/object/define-property":8,"@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor":9,"@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors":10,"@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols":11,"@babel/runtime-corejs3/core-js-stable/object/keys":12,"@babel/runtime-corejs3/helpers/asyncToGenerator":15,"@babel/runtime-corejs3/helpers/classCallCheck":16,"@babel/runtime-corejs3/helpers/createClass":17,"@babel/runtime-corejs3/helpers/defineProperty":18,"@babel/runtime-corejs3/helpers/interopRequireDefault":19,"@babel/runtime-corejs3/regenerator":20,"axios":21}],2:[function(_dereq_,module,exports){
module.exports = _dereq_("core-js-pure/stable/instance/every");
},{"core-js-pure/stable/instance/every":229}],3:[function(_dereq_,module,exports){
module.exports = _dereq_("core-js-pure/stable/instance/filter");
},{"core-js-pure/stable/instance/filter":230}],4:[function(_dereq_,module,exports){
module.exports = _dereq_("core-js-pure/stable/instance/for-each");
},{"core-js-pure/stable/instance/for-each":231}],5:[function(_dereq_,module,exports){
module.exports = _dereq_("core-js-pure/stable/instance/includes");
},{"core-js-pure/stable/instance/includes":232}],6:[function(_dereq_,module,exports){
module.exports = _dereq_("core-js-pure/stable/json/stringify");
},{"core-js-pure/stable/json/stringify":233}],7:[function(_dereq_,module,exports){
module.exports = _dereq_("core-js-pure/stable/object/define-properties");
},{"core-js-pure/stable/object/define-properties":234}],8:[function(_dereq_,module,exports){
module.exports = _dereq_("core-js-pure/stable/object/define-property");
},{"core-js-pure/stable/object/define-property":235}],9:[function(_dereq_,module,exports){
module.exports = _dereq_("core-js-pure/stable/object/get-own-property-descriptor");
},{"core-js-pure/stable/object/get-own-property-descriptor":236}],10:[function(_dereq_,module,exports){
module.exports = _dereq_("core-js-pure/stable/object/get-own-property-descriptors");
},{"core-js-pure/stable/object/get-own-property-descriptors":237}],11:[function(_dereq_,module,exports){
module.exports = _dereq_("core-js-pure/stable/object/get-own-property-symbols");
},{"core-js-pure/stable/object/get-own-property-symbols":238}],12:[function(_dereq_,module,exports){
module.exports = _dereq_("core-js-pure/stable/object/keys");
},{"core-js-pure/stable/object/keys":239}],13:[function(_dereq_,module,exports){
module.exports = _dereq_("core-js-pure/features/object/define-property");
},{"core-js-pure/features/object/define-property":70}],14:[function(_dereq_,module,exports){
module.exports = _dereq_("core-js-pure/features/promise");
},{"core-js-pure/features/promise":71}],15:[function(_dereq_,module,exports){
var _Promise = _dereq_("@babel/runtime-corejs3/core-js/promise");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    _Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new _Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

module.exports = _asyncToGenerator, module.exports.__esModule = true, module.exports["default"] = module.exports;
},{"@babel/runtime-corejs3/core-js/promise":14}],16:[function(_dereq_,module,exports){
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck, module.exports.__esModule = true, module.exports["default"] = module.exports;
},{}],17:[function(_dereq_,module,exports){
var _Object$defineProperty = _dereq_("@babel/runtime-corejs3/core-js/object/define-property");

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _Object$defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);

  _Object$defineProperty(Constructor, "prototype", {
    writable: false
  });

  return Constructor;
}

module.exports = _createClass, module.exports.__esModule = true, module.exports["default"] = module.exports;
},{"@babel/runtime-corejs3/core-js/object/define-property":13}],18:[function(_dereq_,module,exports){
var _Object$defineProperty = _dereq_("@babel/runtime-corejs3/core-js/object/define-property");

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _Object$defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty, module.exports.__esModule = true, module.exports["default"] = module.exports;
},{"@babel/runtime-corejs3/core-js/object/define-property":13}],19:[function(_dereq_,module,exports){
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault, module.exports.__esModule = true, module.exports["default"] = module.exports;
},{}],20:[function(_dereq_,module,exports){
module.exports = _dereq_("regenerator-runtime");

},{"regenerator-runtime":241}],21:[function(_dereq_,module,exports){
module.exports = _dereq_('./lib/axios');
},{"./lib/axios":23}],22:[function(_dereq_,module,exports){
'use strict';

var utils = _dereq_('./../utils');
var settle = _dereq_('./../core/settle');
var cookies = _dereq_('./../helpers/cookies');
var buildURL = _dereq_('./../helpers/buildURL');
var buildFullPath = _dereq_('../core/buildFullPath');
var parseHeaders = _dereq_('./../helpers/parseHeaders');
var isURLSameOrigin = _dereq_('./../helpers/isURLSameOrigin');
var createError = _dereq_('../core/createError');
var transitionalDefaults = _dereq_('../defaults/transitional');
var Cancel = _dereq_('../cancel/Cancel');

module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;
    var responseType = config.responseType;
    var onCanceled;
    function done() {
      if (config.cancelToken) {
        config.cancelToken.unsubscribe(onCanceled);
      }

      if (config.signal) {
        config.signal.removeEventListener('abort', onCanceled);
      }
    }

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password ? unescape(encodeURIComponent(config.auth.password)) : '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    var fullPath = buildFullPath(config.baseURL, config.url);
    request.open(config.method.toUpperCase(), buildURL(fullPath, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    function onloadend() {
      if (!request) {
        return;
      }
      // Prepare the response
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !responseType || responseType === 'text' ||  responseType === 'json' ?
        request.responseText : request.response;
      var response = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };

      settle(function _resolve(value) {
        resolve(value);
        done();
      }, function _reject(err) {
        reject(err);
        done();
      }, response);

      // Clean up request
      request = null;
    }

    if ('onloadend' in request) {
      // Use onloadend if available
      request.onloadend = onloadend;
    } else {
      // Listen for ready state to emulate onloadend
      request.onreadystatechange = function handleLoad() {
        if (!request || request.readyState !== 4) {
          return;
        }

        // The request errored out and we didn't get a response, this will be
        // handled by onerror instead
        // With one exception: request that using file: protocol, most browsers
        // will return status as 0 even though it's a successful request
        if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
          return;
        }
        // readystate handler is calling before onerror or ontimeout handlers,
        // so we should call onloadend on the next 'tick'
        setTimeout(onloadend);
      };
    }

    // Handle browser request cancellation (as opposed to a manual cancellation)
    request.onabort = function handleAbort() {
      if (!request) {
        return;
      }

      reject(createError('Request aborted', config, 'ECONNABORTED', request));

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config, null, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      var timeoutErrorMessage = config.timeout ? 'timeout of ' + config.timeout + 'ms exceeded' : 'timeout exceeded';
      var transitional = config.transitional || transitionalDefaults;
      if (config.timeoutErrorMessage) {
        timeoutErrorMessage = config.timeoutErrorMessage;
      }
      reject(createError(
        timeoutErrorMessage,
        config,
        transitional.clarifyTimeoutError ? 'ETIMEDOUT' : 'ECONNABORTED',
        request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(fullPath)) && config.xsrfCookieName ?
        cookies.read(config.xsrfCookieName) :
        undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    }

    // Add withCredentials to request if needed
    if (!utils.isUndefined(config.withCredentials)) {
      request.withCredentials = !!config.withCredentials;
    }

    // Add responseType to request if needed
    if (responseType && responseType !== 'json') {
      request.responseType = config.responseType;
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken || config.signal) {
      // Handle cancellation
      // eslint-disable-next-line func-names
      onCanceled = function(cancel) {
        if (!request) {
          return;
        }
        reject(!cancel || (cancel && cancel.type) ? new Cancel('canceled') : cancel);
        request.abort();
        request = null;
      };

      config.cancelToken && config.cancelToken.subscribe(onCanceled);
      if (config.signal) {
        config.signal.aborted ? onCanceled() : config.signal.addEventListener('abort', onCanceled);
      }
    }

    if (!requestData) {
      requestData = null;
    }

    // Send the request
    request.send(requestData);
  });
};

},{"../cancel/Cancel":24,"../core/buildFullPath":29,"../core/createError":30,"../defaults/transitional":37,"./../core/settle":34,"./../helpers/buildURL":40,"./../helpers/cookies":42,"./../helpers/isURLSameOrigin":45,"./../helpers/parseHeaders":47,"./../utils":50}],23:[function(_dereq_,module,exports){
'use strict';

var utils = _dereq_('./utils');
var bind = _dereq_('./helpers/bind');
var Axios = _dereq_('./core/Axios');
var mergeConfig = _dereq_('./core/mergeConfig');
var defaults = _dereq_('./defaults');

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  // Factory for creating new instances
  instance.create = function create(instanceConfig) {
    return createInstance(mergeConfig(defaultConfig, instanceConfig));
  };

  return instance;
}

// Create the default instance to be exported
var axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios;

// Expose Cancel & CancelToken
axios.Cancel = _dereq_('./cancel/Cancel');
axios.CancelToken = _dereq_('./cancel/CancelToken');
axios.isCancel = _dereq_('./cancel/isCancel');
axios.VERSION = _dereq_('./env/data').version;

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = _dereq_('./helpers/spread');

// Expose isAxiosError
axios.isAxiosError = _dereq_('./helpers/isAxiosError');

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports.default = axios;

},{"./cancel/Cancel":24,"./cancel/CancelToken":25,"./cancel/isCancel":26,"./core/Axios":27,"./core/mergeConfig":33,"./defaults":36,"./env/data":38,"./helpers/bind":39,"./helpers/isAxiosError":44,"./helpers/spread":48,"./utils":50}],24:[function(_dereq_,module,exports){
'use strict';

/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */
function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;

module.exports = Cancel;

},{}],25:[function(_dereq_,module,exports){
'use strict';

var Cancel = _dereq_('./Cancel');

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */
function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;

  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });

  var token = this;

  // eslint-disable-next-line func-names
  this.promise.then(function(cancel) {
    if (!token._listeners) return;

    var i;
    var l = token._listeners.length;

    for (i = 0; i < l; i++) {
      token._listeners[i](cancel);
    }
    token._listeners = null;
  });

  // eslint-disable-next-line func-names
  this.promise.then = function(onfulfilled) {
    var _resolve;
    // eslint-disable-next-line func-names
    var promise = new Promise(function(resolve) {
      token.subscribe(resolve);
      _resolve = resolve;
    }).then(onfulfilled);

    promise.cancel = function reject() {
      token.unsubscribe(_resolve);
    };

    return promise;
  };

  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};

/**
 * Subscribe to the cancel signal
 */

CancelToken.prototype.subscribe = function subscribe(listener) {
  if (this.reason) {
    listener(this.reason);
    return;
  }

  if (this._listeners) {
    this._listeners.push(listener);
  } else {
    this._listeners = [listener];
  }
};

/**
 * Unsubscribe from the cancel signal
 */

CancelToken.prototype.unsubscribe = function unsubscribe(listener) {
  if (!this._listeners) {
    return;
  }
  var index = this._listeners.indexOf(listener);
  if (index !== -1) {
    this._listeners.splice(index, 1);
  }
};

/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

module.exports = CancelToken;

},{"./Cancel":24}],26:[function(_dereq_,module,exports){
'use strict';

module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};

},{}],27:[function(_dereq_,module,exports){
'use strict';

var utils = _dereq_('./../utils');
var buildURL = _dereq_('../helpers/buildURL');
var InterceptorManager = _dereq_('./InterceptorManager');
var dispatchRequest = _dereq_('./dispatchRequest');
var mergeConfig = _dereq_('./mergeConfig');
var validator = _dereq_('../helpers/validator');

var validators = validator.validators;
/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */
function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}

/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */
Axios.prototype.request = function request(configOrUrl, config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof configOrUrl === 'string') {
    config = config || {};
    config.url = configOrUrl;
  } else {
    config = configOrUrl || {};
  }

  config = mergeConfig(this.defaults, config);

  // Set config.method
  if (config.method) {
    config.method = config.method.toLowerCase();
  } else if (this.defaults.method) {
    config.method = this.defaults.method.toLowerCase();
  } else {
    config.method = 'get';
  }

  var transitional = config.transitional;

  if (transitional !== undefined) {
    validator.assertOptions(transitional, {
      silentJSONParsing: validators.transitional(validators.boolean),
      forcedJSONParsing: validators.transitional(validators.boolean),
      clarifyTimeoutError: validators.transitional(validators.boolean)
    }, false);
  }

  // filter out skipped interceptors
  var requestInterceptorChain = [];
  var synchronousRequestInterceptors = true;
  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    if (typeof interceptor.runWhen === 'function' && interceptor.runWhen(config) === false) {
      return;
    }

    synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous;

    requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  var responseInterceptorChain = [];
  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
  });

  var promise;

  if (!synchronousRequestInterceptors) {
    var chain = [dispatchRequest, undefined];

    Array.prototype.unshift.apply(chain, requestInterceptorChain);
    chain = chain.concat(responseInterceptorChain);

    promise = Promise.resolve(config);
    while (chain.length) {
      promise = promise.then(chain.shift(), chain.shift());
    }

    return promise;
  }


  var newConfig = config;
  while (requestInterceptorChain.length) {
    var onFulfilled = requestInterceptorChain.shift();
    var onRejected = requestInterceptorChain.shift();
    try {
      newConfig = onFulfilled(newConfig);
    } catch (error) {
      onRejected(error);
      break;
    }
  }

  try {
    promise = dispatchRequest(newConfig);
  } catch (error) {
    return Promise.reject(error);
  }

  while (responseInterceptorChain.length) {
    promise = promise.then(responseInterceptorChain.shift(), responseInterceptorChain.shift());
  }

  return promise;
};

Axios.prototype.getUri = function getUri(config) {
  config = mergeConfig(this.defaults, config);
  return buildURL(config.url, config.params, config.paramsSerializer).replace(/^\?/, '');
};

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request(mergeConfig(config || {}, {
      method: method,
      url: url,
      data: (config || {}).data
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, data, config) {
    return this.request(mergeConfig(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});

module.exports = Axios;

},{"../helpers/buildURL":40,"../helpers/validator":49,"./../utils":50,"./InterceptorManager":28,"./dispatchRequest":31,"./mergeConfig":33}],28:[function(_dereq_,module,exports){
'use strict';

var utils = _dereq_('./../utils');

function InterceptorManager() {
  this.handlers = [];
}

/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */
InterceptorManager.prototype.use = function use(fulfilled, rejected, options) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected,
    synchronous: options ? options.synchronous : false,
    runWhen: options ? options.runWhen : null
  });
  return this.handlers.length - 1;
};

/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

module.exports = InterceptorManager;

},{"./../utils":50}],29:[function(_dereq_,module,exports){
'use strict';

var isAbsoluteURL = _dereq_('../helpers/isAbsoluteURL');
var combineURLs = _dereq_('../helpers/combineURLs');

/**
 * Creates a new URL by combining the baseURL with the requestedURL,
 * only when the requestedURL is not already an absolute URL.
 * If the requestURL is absolute, this function returns the requestedURL untouched.
 *
 * @param {string} baseURL The base URL
 * @param {string} requestedURL Absolute or relative URL to combine
 * @returns {string} The combined full path
 */
module.exports = function buildFullPath(baseURL, requestedURL) {
  if (baseURL && !isAbsoluteURL(requestedURL)) {
    return combineURLs(baseURL, requestedURL);
  }
  return requestedURL;
};

},{"../helpers/combineURLs":41,"../helpers/isAbsoluteURL":43}],30:[function(_dereq_,module,exports){
'use strict';

var enhanceError = _dereq_('./enhanceError');

/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
module.exports = function createError(message, config, code, request, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, request, response);
};

},{"./enhanceError":32}],31:[function(_dereq_,module,exports){
'use strict';

var utils = _dereq_('./../utils');
var transformData = _dereq_('./transformData');
var isCancel = _dereq_('../cancel/isCancel');
var defaults = _dereq_('../defaults');
var Cancel = _dereq_('../cancel/Cancel');

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }

  if (config.signal && config.signal.aborted) {
    throw new Cancel('canceled');
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
module.exports = function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData.call(
    config,
    config.data,
    config.headers,
    config.transformRequest
  );

  // Flatten headers
  config.headers = utils.merge(
    config.headers.common || {},
    config.headers[config.method] || {},
    config.headers
  );

  utils.forEach(
    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
    function cleanHeaderConfig(method) {
      delete config.headers[method];
    }
  );

  var adapter = config.adapter || defaults.adapter;

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData.call(
      config,
      response.data,
      response.headers,
      config.transformResponse
    );

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData.call(
          config,
          reason.response.data,
          reason.response.headers,
          config.transformResponse
        );
      }
    }

    return Promise.reject(reason);
  });
};

},{"../cancel/Cancel":24,"../cancel/isCancel":26,"../defaults":36,"./../utils":50,"./transformData":35}],32:[function(_dereq_,module,exports){
'use strict';

/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The error.
 */
module.exports = function enhanceError(error, config, code, request, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }

  error.request = request;
  error.response = response;
  error.isAxiosError = true;

  error.toJSON = function toJSON() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: this.config,
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  };
  return error;
};

},{}],33:[function(_dereq_,module,exports){
'use strict';

var utils = _dereq_('../utils');

/**
 * Config-specific merge-function which creates a new config-object
 * by merging two configuration objects together.
 *
 * @param {Object} config1
 * @param {Object} config2
 * @returns {Object} New object resulting from merging config2 to config1
 */
module.exports = function mergeConfig(config1, config2) {
  // eslint-disable-next-line no-param-reassign
  config2 = config2 || {};
  var config = {};

  function getMergedValue(target, source) {
    if (utils.isPlainObject(target) && utils.isPlainObject(source)) {
      return utils.merge(target, source);
    } else if (utils.isPlainObject(source)) {
      return utils.merge({}, source);
    } else if (utils.isArray(source)) {
      return source.slice();
    }
    return source;
  }

  // eslint-disable-next-line consistent-return
  function mergeDeepProperties(prop) {
    if (!utils.isUndefined(config2[prop])) {
      return getMergedValue(config1[prop], config2[prop]);
    } else if (!utils.isUndefined(config1[prop])) {
      return getMergedValue(undefined, config1[prop]);
    }
  }

  // eslint-disable-next-line consistent-return
  function valueFromConfig2(prop) {
    if (!utils.isUndefined(config2[prop])) {
      return getMergedValue(undefined, config2[prop]);
    }
  }

  // eslint-disable-next-line consistent-return
  function defaultToConfig2(prop) {
    if (!utils.isUndefined(config2[prop])) {
      return getMergedValue(undefined, config2[prop]);
    } else if (!utils.isUndefined(config1[prop])) {
      return getMergedValue(undefined, config1[prop]);
    }
  }

  // eslint-disable-next-line consistent-return
  function mergeDirectKeys(prop) {
    if (prop in config2) {
      return getMergedValue(config1[prop], config2[prop]);
    } else if (prop in config1) {
      return getMergedValue(undefined, config1[prop]);
    }
  }

  var mergeMap = {
    'url': valueFromConfig2,
    'method': valueFromConfig2,
    'data': valueFromConfig2,
    'baseURL': defaultToConfig2,
    'transformRequest': defaultToConfig2,
    'transformResponse': defaultToConfig2,
    'paramsSerializer': defaultToConfig2,
    'timeout': defaultToConfig2,
    'timeoutMessage': defaultToConfig2,
    'withCredentials': defaultToConfig2,
    'adapter': defaultToConfig2,
    'responseType': defaultToConfig2,
    'xsrfCookieName': defaultToConfig2,
    'xsrfHeaderName': defaultToConfig2,
    'onUploadProgress': defaultToConfig2,
    'onDownloadProgress': defaultToConfig2,
    'decompress': defaultToConfig2,
    'maxContentLength': defaultToConfig2,
    'maxBodyLength': defaultToConfig2,
    'transport': defaultToConfig2,
    'httpAgent': defaultToConfig2,
    'httpsAgent': defaultToConfig2,
    'cancelToken': defaultToConfig2,
    'socketPath': defaultToConfig2,
    'responseEncoding': defaultToConfig2,
    'validateStatus': mergeDirectKeys
  };

  utils.forEach(Object.keys(config1).concat(Object.keys(config2)), function computeConfigValue(prop) {
    var merge = mergeMap[prop] || mergeDeepProperties;
    var configValue = merge(prop);
    (utils.isUndefined(configValue) && merge !== mergeDirectKeys) || (config[prop] = configValue);
  });

  return config;
};

},{"../utils":50}],34:[function(_dereq_,module,exports){
'use strict';

var createError = _dereq_('./createError');

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  if (!response.status || !validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError(
      'Request failed with status code ' + response.status,
      response.config,
      null,
      response.request,
      response
    ));
  }
};

},{"./createError":30}],35:[function(_dereq_,module,exports){
'use strict';

var utils = _dereq_('./../utils');
var defaults = _dereq_('../defaults');

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
module.exports = function transformData(data, headers, fns) {
  var context = this || defaults;
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn.call(context, data, headers);
  });

  return data;
};

},{"../defaults":36,"./../utils":50}],36:[function(_dereq_,module,exports){
(function (process){(function (){
'use strict';

var utils = _dereq_('../utils');
var normalizeHeaderName = _dereq_('../helpers/normalizeHeaderName');
var enhanceError = _dereq_('../core/enhanceError');
var transitionalDefaults = _dereq_('./transitional');

var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;
  if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = _dereq_('../adapters/xhr');
  } else if (typeof process !== 'undefined' && Object.prototype.toString.call(process) === '[object process]') {
    // For node use HTTP adapter
    adapter = _dereq_('../adapters/http');
  }
  return adapter;
}

function stringifySafely(rawValue, parser, encoder) {
  if (utils.isString(rawValue)) {
    try {
      (parser || JSON.parse)(rawValue);
      return utils.trim(rawValue);
    } catch (e) {
      if (e.name !== 'SyntaxError') {
        throw e;
      }
    }
  }

  return (encoder || JSON.stringify)(rawValue);
}

var defaults = {

  transitional: transitionalDefaults,

  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Accept');
    normalizeHeaderName(headers, 'Content-Type');

    if (utils.isFormData(data) ||
      utils.isArrayBuffer(data) ||
      utils.isBuffer(data) ||
      utils.isStream(data) ||
      utils.isFile(data) ||
      utils.isBlob(data)
    ) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }
    if (utils.isObject(data) || (headers && headers['Content-Type'] === 'application/json')) {
      setContentTypeIfUnset(headers, 'application/json');
      return stringifySafely(data);
    }
    return data;
  }],

  transformResponse: [function transformResponse(data) {
    var transitional = this.transitional || defaults.transitional;
    var silentJSONParsing = transitional && transitional.silentJSONParsing;
    var forcedJSONParsing = transitional && transitional.forcedJSONParsing;
    var strictJSONParsing = !silentJSONParsing && this.responseType === 'json';

    if (strictJSONParsing || (forcedJSONParsing && utils.isString(data) && data.length)) {
      try {
        return JSON.parse(data);
      } catch (e) {
        if (strictJSONParsing) {
          if (e.name === 'SyntaxError') {
            throw enhanceError(e, this, 'E_JSON_PARSE');
          }
          throw e;
        }
      }
    }

    return data;
  }],

  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,
  maxBodyLength: -1,

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  },

  headers: {
    common: {
      'Accept': 'application/json, text/plain, */*'
    }
  }
};

utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

module.exports = defaults;

}).call(this)}).call(this,_dereq_('_process'))
},{"../adapters/http":22,"../adapters/xhr":22,"../core/enhanceError":32,"../helpers/normalizeHeaderName":46,"../utils":50,"./transitional":37,"_process":51}],37:[function(_dereq_,module,exports){
'use strict';

module.exports = {
  silentJSONParsing: true,
  forcedJSONParsing: true,
  clarifyTimeoutError: false
};

},{}],38:[function(_dereq_,module,exports){
module.exports = {
  "version": "0.26.1"
};
},{}],39:[function(_dereq_,module,exports){
'use strict';

module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};

},{}],40:[function(_dereq_,module,exports){
'use strict';

var utils = _dereq_('./../utils');

function encode(val) {
  return encodeURIComponent(val).
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */
module.exports = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      } else {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    var hashmarkIndex = url.indexOf('#');
    if (hashmarkIndex !== -1) {
      url = url.slice(0, hashmarkIndex);
    }

    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};

},{"./../utils":50}],41:[function(_dereq_,module,exports){
'use strict';

/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */
module.exports = function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
};

},{}],42:[function(_dereq_,module,exports){
'use strict';

var utils = _dereq_('./../utils');

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs support document.cookie
    (function standardBrowserEnv() {
      return {
        write: function write(name, value, expires, path, domain, secure) {
          var cookie = [];
          cookie.push(name + '=' + encodeURIComponent(value));

          if (utils.isNumber(expires)) {
            cookie.push('expires=' + new Date(expires).toGMTString());
          }

          if (utils.isString(path)) {
            cookie.push('path=' + path);
          }

          if (utils.isString(domain)) {
            cookie.push('domain=' + domain);
          }

          if (secure === true) {
            cookie.push('secure');
          }

          document.cookie = cookie.join('; ');
        },

        read: function read(name) {
          var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
          return (match ? decodeURIComponent(match[3]) : null);
        },

        remove: function remove(name) {
          this.write(name, '', Date.now() - 86400000);
        }
      };
    })() :

  // Non standard browser env (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
      return {
        write: function write() {},
        read: function read() { return null; },
        remove: function remove() {}
      };
    })()
);

},{"./../utils":50}],43:[function(_dereq_,module,exports){
'use strict';

/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
module.exports = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(url);
};

},{}],44:[function(_dereq_,module,exports){
'use strict';

var utils = _dereq_('./../utils');

/**
 * Determines whether the payload is an error thrown by Axios
 *
 * @param {*} payload The value to test
 * @returns {boolean} True if the payload is an error thrown by Axios, otherwise false
 */
module.exports = function isAxiosError(payload) {
  return utils.isObject(payload) && (payload.isAxiosError === true);
};

},{"./../utils":50}],45:[function(_dereq_,module,exports){
'use strict';

var utils = _dereq_('./../utils');

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
    (function standardBrowserEnv() {
      var msie = /(msie|trident)/i.test(navigator.userAgent);
      var urlParsingNode = document.createElement('a');
      var originURL;

      /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
      function resolveURL(url) {
        var href = url;

        if (msie) {
        // IE needs attribute set twice to normalize properties
          urlParsingNode.setAttribute('href', href);
          href = urlParsingNode.href;
        }

        urlParsingNode.setAttribute('href', href);

        // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
        return {
          href: urlParsingNode.href,
          protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
          host: urlParsingNode.host,
          search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
          hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
          hostname: urlParsingNode.hostname,
          port: urlParsingNode.port,
          pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
            urlParsingNode.pathname :
            '/' + urlParsingNode.pathname
        };
      }

      originURL = resolveURL(window.location.href);

      /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
      return function isURLSameOrigin(requestURL) {
        var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
        return (parsed.protocol === originURL.protocol &&
            parsed.host === originURL.host);
      };
    })() :

  // Non standard browser envs (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
      return function isURLSameOrigin() {
        return true;
      };
    })()
);

},{"./../utils":50}],46:[function(_dereq_,module,exports){
'use strict';

var utils = _dereq_('../utils');

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};

},{"../utils":50}],47:[function(_dereq_,module,exports){
'use strict';

var utils = _dereq_('./../utils');

// Headers whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
var ignoreDuplicateOf = [
  'age', 'authorization', 'content-length', 'content-type', 'etag',
  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
  'last-modified', 'location', 'max-forwards', 'proxy-authorization',
  'referer', 'retry-after', 'user-agent'
];

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */
module.exports = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) { return parsed; }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
        return;
      }
      if (key === 'set-cookie') {
        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
      }
    }
  });

  return parsed;
};

},{"./../utils":50}],48:[function(_dereq_,module,exports){
'use strict';

/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */
module.exports = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};

},{}],49:[function(_dereq_,module,exports){
'use strict';

var VERSION = _dereq_('../env/data').version;

var validators = {};

// eslint-disable-next-line func-names
['object', 'boolean', 'number', 'function', 'string', 'symbol'].forEach(function(type, i) {
  validators[type] = function validator(thing) {
    return typeof thing === type || 'a' + (i < 1 ? 'n ' : ' ') + type;
  };
});

var deprecatedWarnings = {};

/**
 * Transitional option validator
 * @param {function|boolean?} validator - set to false if the transitional option has been removed
 * @param {string?} version - deprecated version / removed since version
 * @param {string?} message - some message with additional info
 * @returns {function}
 */
validators.transitional = function transitional(validator, version, message) {
  function formatMessage(opt, desc) {
    return '[Axios v' + VERSION + '] Transitional option \'' + opt + '\'' + desc + (message ? '. ' + message : '');
  }

  // eslint-disable-next-line func-names
  return function(value, opt, opts) {
    if (validator === false) {
      throw new Error(formatMessage(opt, ' has been removed' + (version ? ' in ' + version : '')));
    }

    if (version && !deprecatedWarnings[opt]) {
      deprecatedWarnings[opt] = true;
      // eslint-disable-next-line no-console
      console.warn(
        formatMessage(
          opt,
          ' has been deprecated since v' + version + ' and will be removed in the near future'
        )
      );
    }

    return validator ? validator(value, opt, opts) : true;
  };
};

/**
 * Assert object's properties type
 * @param {object} options
 * @param {object} schema
 * @param {boolean?} allowUnknown
 */

function assertOptions(options, schema, allowUnknown) {
  if (typeof options !== 'object') {
    throw new TypeError('options must be an object');
  }
  var keys = Object.keys(options);
  var i = keys.length;
  while (i-- > 0) {
    var opt = keys[i];
    var validator = schema[opt];
    if (validator) {
      var value = options[opt];
      var result = value === undefined || validator(value, opt, options);
      if (result !== true) {
        throw new TypeError('option ' + opt + ' must be ' + result);
      }
      continue;
    }
    if (allowUnknown !== true) {
      throw Error('Unknown option ' + opt);
    }
  }
}

module.exports = {
  assertOptions: assertOptions,
  validators: validators
};

},{"../env/data":38}],50:[function(_dereq_,module,exports){
'use strict';

var bind = _dereq_('./helpers/bind');

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return Array.isArray(val);
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is a Buffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Buffer, otherwise false
 */
function isBuffer(val) {
  return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor)
    && typeof val.constructor.isBuffer === 'function' && val.constructor.isBuffer(val);
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(val) {
  return toString.call(val) === '[object FormData]';
}

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (isArrayBuffer(val.buffer));
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && typeof val === 'object';
}

/**
 * Determine if a value is a plain Object
 *
 * @param {Object} val The value to test
 * @return {boolean} True if value is a plain Object, otherwise false
 */
function isPlainObject(val) {
  if (toString.call(val) !== '[object Object]') {
    return false;
  }

  var prototype = Object.getPrototypeOf(val);
  return prototype === null || prototype === Object.prototype;
}

/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
function isFile(val) {
  return toString.call(val) === '[object File]';
}

/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
function isURLSearchParams(val) {
  return toString.call(val) === '[object URLSearchParams]';
}

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.trim ? str.trim() : str.replace(/^\s+|\s+$/g, '');
}

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 * nativescript
 *  navigator.product -> 'NativeScript' or 'NS'
 */
function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && (navigator.product === 'ReactNative' ||
                                           navigator.product === 'NativeScript' ||
                                           navigator.product === 'NS')) {
    return false;
  }
  return (
    typeof window !== 'undefined' &&
    typeof document !== 'undefined'
  );
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (isPlainObject(result[key]) && isPlainObject(val)) {
      result[key] = merge(result[key], val);
    } else if (isPlainObject(val)) {
      result[key] = merge({}, val);
    } else if (isArray(val)) {
      result[key] = val.slice();
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

/**
 * Remove byte order marker. This catches EF BB BF (the UTF-8 BOM)
 *
 * @param {string} content with BOM
 * @return {string} content value without BOM
 */
function stripBOM(content) {
  if (content.charCodeAt(0) === 0xFEFF) {
    content = content.slice(1);
  }
  return content;
}

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isPlainObject: isPlainObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  extend: extend,
  trim: trim,
  stripBOM: stripBOM
};

},{"./helpers/bind":39}],51:[function(_dereq_,module,exports){

},{}],52:[function(_dereq_,module,exports){
var parent = _dereq_('../../stable/object/define-property');

module.exports = parent;

},{"../../stable/object/define-property":235}],53:[function(_dereq_,module,exports){
var parent = _dereq_('../../stable/promise');

module.exports = parent;

},{"../../stable/promise":240}],54:[function(_dereq_,module,exports){
_dereq_('../../../modules/es.array.every');
var entryVirtual = _dereq_('../../../internals/entry-virtual');

module.exports = entryVirtual('Array').every;

},{"../../../internals/entry-virtual":110,"../../../modules/es.array.every":204}],55:[function(_dereq_,module,exports){
_dereq_('../../../modules/es.array.filter');
var entryVirtual = _dereq_('../../../internals/entry-virtual');

module.exports = entryVirtual('Array').filter;

},{"../../../internals/entry-virtual":110,"../../../modules/es.array.filter":205}],56:[function(_dereq_,module,exports){
_dereq_('../../../modules/es.array.for-each');
var entryVirtual = _dereq_('../../../internals/entry-virtual');

module.exports = entryVirtual('Array').forEach;

},{"../../../internals/entry-virtual":110,"../../../modules/es.array.for-each":206}],57:[function(_dereq_,module,exports){
_dereq_('../../../modules/es.array.includes');
var entryVirtual = _dereq_('../../../internals/entry-virtual');

module.exports = entryVirtual('Array').includes;

},{"../../../internals/entry-virtual":110,"../../../modules/es.array.includes":207}],58:[function(_dereq_,module,exports){
var isPrototypeOf = _dereq_('../../internals/object-is-prototype-of');
var method = _dereq_('../array/virtual/every');

var ArrayPrototype = Array.prototype;

module.exports = function (it) {
  var own = it.every;
  return it === ArrayPrototype || (isPrototypeOf(ArrayPrototype, it) && own === ArrayPrototype.every) ? method : own;
};

},{"../../internals/object-is-prototype-of":164,"../array/virtual/every":54}],59:[function(_dereq_,module,exports){
var isPrototypeOf = _dereq_('../../internals/object-is-prototype-of');
var method = _dereq_('../array/virtual/filter');

var ArrayPrototype = Array.prototype;

module.exports = function (it) {
  var own = it.filter;
  return it === ArrayPrototype || (isPrototypeOf(ArrayPrototype, it) && own === ArrayPrototype.filter) ? method : own;
};

},{"../../internals/object-is-prototype-of":164,"../array/virtual/filter":55}],60:[function(_dereq_,module,exports){
var isPrototypeOf = _dereq_('../../internals/object-is-prototype-of');
var arrayMethod = _dereq_('../array/virtual/includes');
var stringMethod = _dereq_('../string/virtual/includes');

var ArrayPrototype = Array.prototype;
var StringPrototype = String.prototype;

module.exports = function (it) {
  var own = it.includes;
  if (it === ArrayPrototype || (isPrototypeOf(ArrayPrototype, it) && own === ArrayPrototype.includes)) return arrayMethod;
  if (typeof it == 'string' || it === StringPrototype || (isPrototypeOf(StringPrototype, it) && own === StringPrototype.includes)) {
    return stringMethod;
  } return own;
};

},{"../../internals/object-is-prototype-of":164,"../array/virtual/includes":57,"../string/virtual/includes":69}],61:[function(_dereq_,module,exports){
_dereq_('../../modules/es.json.stringify');
var path = _dereq_('../../internals/path');
var apply = _dereq_('../../internals/function-apply');

// eslint-disable-next-line es/no-json -- safe
if (!path.JSON) path.JSON = { stringify: JSON.stringify };

// eslint-disable-next-line no-unused-vars -- required for `.length`
module.exports = function stringify(it, replacer, space) {
  return apply(path.JSON.stringify, null, arguments);
};

},{"../../internals/function-apply":115,"../../internals/path":172,"../../modules/es.json.stringify":209}],62:[function(_dereq_,module,exports){
_dereq_('../../modules/es.object.define-properties');
var path = _dereq_('../../internals/path');

var Object = path.Object;

var defineProperties = module.exports = function defineProperties(T, D) {
  return Object.defineProperties(T, D);
};

if (Object.defineProperties.sham) defineProperties.sham = true;

},{"../../internals/path":172,"../../modules/es.object.define-properties":210}],63:[function(_dereq_,module,exports){
_dereq_('../../modules/es.object.define-property');
var path = _dereq_('../../internals/path');

var Object = path.Object;

var defineProperty = module.exports = function defineProperty(it, key, desc) {
  return Object.defineProperty(it, key, desc);
};

if (Object.defineProperty.sham) defineProperty.sham = true;

},{"../../internals/path":172,"../../modules/es.object.define-property":211}],64:[function(_dereq_,module,exports){
_dereq_('../../modules/es.object.get-own-property-descriptor');
var path = _dereq_('../../internals/path');

var Object = path.Object;

var getOwnPropertyDescriptor = module.exports = function getOwnPropertyDescriptor(it, key) {
  return Object.getOwnPropertyDescriptor(it, key);
};

if (Object.getOwnPropertyDescriptor.sham) getOwnPropertyDescriptor.sham = true;

},{"../../internals/path":172,"../../modules/es.object.get-own-property-descriptor":212}],65:[function(_dereq_,module,exports){
_dereq_('../../modules/es.object.get-own-property-descriptors');
var path = _dereq_('../../internals/path');

module.exports = path.Object.getOwnPropertyDescriptors;

},{"../../internals/path":172,"../../modules/es.object.get-own-property-descriptors":213}],66:[function(_dereq_,module,exports){
_dereq_('../../modules/es.symbol');
var path = _dereq_('../../internals/path');

module.exports = path.Object.getOwnPropertySymbols;

},{"../../internals/path":172,"../../modules/es.symbol":222}],67:[function(_dereq_,module,exports){
_dereq_('../../modules/es.object.keys');
var path = _dereq_('../../internals/path');

module.exports = path.Object.keys;

},{"../../internals/path":172,"../../modules/es.object.keys":214}],68:[function(_dereq_,module,exports){
_dereq_('../../modules/es.aggregate-error');
_dereq_('../../modules/es.array.iterator');
_dereq_('../../modules/es.object.to-string');
_dereq_('../../modules/es.promise');
_dereq_('../../modules/es.promise.all-settled');
_dereq_('../../modules/es.promise.any');
_dereq_('../../modules/es.promise.finally');
_dereq_('../../modules/es.string.iterator');
var path = _dereq_('../../internals/path');

module.exports = path.Promise;

},{"../../internals/path":172,"../../modules/es.aggregate-error":203,"../../modules/es.array.iterator":208,"../../modules/es.object.to-string":215,"../../modules/es.promise":219,"../../modules/es.promise.all-settled":216,"../../modules/es.promise.any":217,"../../modules/es.promise.finally":218,"../../modules/es.string.iterator":221}],69:[function(_dereq_,module,exports){
_dereq_('../../../modules/es.string.includes');
var entryVirtual = _dereq_('../../../internals/entry-virtual');

module.exports = entryVirtual('String').includes;

},{"../../../internals/entry-virtual":110,"../../../modules/es.string.includes":220}],70:[function(_dereq_,module,exports){
var parent = _dereq_('../../actual/object/define-property');

module.exports = parent;

},{"../../actual/object/define-property":52}],71:[function(_dereq_,module,exports){
var parent = _dereq_('../../actual/promise');
_dereq_('../../modules/esnext.aggregate-error');
// TODO: Remove from `core-js@4`
_dereq_('../../modules/esnext.promise.all-settled');
_dereq_('../../modules/esnext.promise.try');
_dereq_('../../modules/esnext.promise.any');

module.exports = parent;

},{"../../actual/promise":53,"../../modules/esnext.aggregate-error":223,"../../modules/esnext.promise.all-settled":224,"../../modules/esnext.promise.any":225,"../../modules/esnext.promise.try":226}],72:[function(_dereq_,module,exports){
var global = _dereq_('../internals/global');
var isCallable = _dereq_('../internals/is-callable');
var tryToString = _dereq_('../internals/try-to-string');

var TypeError = global.TypeError;

// `Assert: IsCallable(argument) is true`
module.exports = function (argument) {
  if (isCallable(argument)) return argument;
  throw TypeError(tryToString(argument) + ' is not a function');
};

},{"../internals/global":125,"../internals/is-callable":137,"../internals/try-to-string":197}],73:[function(_dereq_,module,exports){
var global = _dereq_('../internals/global');
var isConstructor = _dereq_('../internals/is-constructor');
var tryToString = _dereq_('../internals/try-to-string');

var TypeError = global.TypeError;

// `Assert: IsConstructor(argument) is true`
module.exports = function (argument) {
  if (isConstructor(argument)) return argument;
  throw TypeError(tryToString(argument) + ' is not a constructor');
};

},{"../internals/global":125,"../internals/is-constructor":138,"../internals/try-to-string":197}],74:[function(_dereq_,module,exports){
var global = _dereq_('../internals/global');
var isCallable = _dereq_('../internals/is-callable');

var String = global.String;
var TypeError = global.TypeError;

module.exports = function (argument) {
  if (typeof argument == 'object' || isCallable(argument)) return argument;
  throw TypeError("Can't set " + String(argument) + ' as a prototype');
};

},{"../internals/global":125,"../internals/is-callable":137}],75:[function(_dereq_,module,exports){
module.exports = function () { /* empty */ };

},{}],76:[function(_dereq_,module,exports){
var global = _dereq_('../internals/global');
var isPrototypeOf = _dereq_('../internals/object-is-prototype-of');

var TypeError = global.TypeError;

module.exports = function (it, Prototype) {
  if (isPrototypeOf(Prototype, it)) return it;
  throw TypeError('Incorrect invocation');
};

},{"../internals/global":125,"../internals/object-is-prototype-of":164}],77:[function(_dereq_,module,exports){
var global = _dereq_('../internals/global');
var isObject = _dereq_('../internals/is-object');

var String = global.String;
var TypeError = global.TypeError;

// `Assert: Type(argument) is Object`
module.exports = function (argument) {
  if (isObject(argument)) return argument;
  throw TypeError(String(argument) + ' is not an object');
};

},{"../internals/global":125,"../internals/is-object":140}],78:[function(_dereq_,module,exports){
'use strict';
var $forEach = _dereq_('../internals/array-iteration').forEach;
var arrayMethodIsStrict = _dereq_('../internals/array-method-is-strict');

var STRICT_METHOD = arrayMethodIsStrict('forEach');

// `Array.prototype.forEach` method implementation
// https://tc39.es/ecma262/#sec-array.prototype.foreach
module.exports = !STRICT_METHOD ? function forEach(callbackfn /* , thisArg */) {
  return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
// eslint-disable-next-line es/no-array-prototype-foreach -- safe
} : [].forEach;

},{"../internals/array-iteration":80,"../internals/array-method-is-strict":82}],79:[function(_dereq_,module,exports){
var toIndexedObject = _dereq_('../internals/to-indexed-object');
var toAbsoluteIndex = _dereq_('../internals/to-absolute-index');
var lengthOfArrayLike = _dereq_('../internals/length-of-array-like');

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = lengthOfArrayLike(O);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare -- NaN check
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare -- NaN check
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

module.exports = {
  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};

},{"../internals/length-of-array-like":148,"../internals/to-absolute-index":188,"../internals/to-indexed-object":189}],80:[function(_dereq_,module,exports){
var bind = _dereq_('../internals/function-bind-context');
var uncurryThis = _dereq_('../internals/function-uncurry-this');
var IndexedObject = _dereq_('../internals/indexed-object');
var toObject = _dereq_('../internals/to-object');
var lengthOfArrayLike = _dereq_('../internals/length-of-array-like');
var arraySpeciesCreate = _dereq_('../internals/array-species-create');

var push = uncurryThis([].push);

// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex, filterReject }` methods implementation
var createMethod = function (TYPE) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var IS_FILTER_REJECT = TYPE == 7;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  return function ($this, callbackfn, that, specificCreate) {
    var O = toObject($this);
    var self = IndexedObject(O);
    var boundFunction = bind(callbackfn, that);
    var length = lengthOfArrayLike(self);
    var index = 0;
    var create = specificCreate || arraySpeciesCreate;
    var target = IS_MAP ? create($this, length) : IS_FILTER || IS_FILTER_REJECT ? create($this, 0) : undefined;
    var value, result;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      value = self[index];
      result = boundFunction(value, index, O);
      if (TYPE) {
        if (IS_MAP) target[index] = result; // map
        else if (result) switch (TYPE) {
          case 3: return true;              // some
          case 5: return value;             // find
          case 6: return index;             // findIndex
          case 2: push(target, value);      // filter
        } else switch (TYPE) {
          case 4: return false;             // every
          case 7: push(target, value);      // filterReject
        }
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
  };
};

module.exports = {
  // `Array.prototype.forEach` method
  // https://tc39.es/ecma262/#sec-array.prototype.foreach
  forEach: createMethod(0),
  // `Array.prototype.map` method
  // https://tc39.es/ecma262/#sec-array.prototype.map
  map: createMethod(1),
  // `Array.prototype.filter` method
  // https://tc39.es/ecma262/#sec-array.prototype.filter
  filter: createMethod(2),
  // `Array.prototype.some` method
  // https://tc39.es/ecma262/#sec-array.prototype.some
  some: createMethod(3),
  // `Array.prototype.every` method
  // https://tc39.es/ecma262/#sec-array.prototype.every
  every: createMethod(4),
  // `Array.prototype.find` method
  // https://tc39.es/ecma262/#sec-array.prototype.find
  find: createMethod(5),
  // `Array.prototype.findIndex` method
  // https://tc39.es/ecma262/#sec-array.prototype.findIndex
  findIndex: createMethod(6),
  // `Array.prototype.filterReject` method
  // https://github.com/tc39/proposal-array-filtering
  filterReject: createMethod(7)
};

},{"../internals/array-species-create":86,"../internals/function-bind-context":116,"../internals/function-uncurry-this":120,"../internals/indexed-object":131,"../internals/length-of-array-like":148,"../internals/to-object":192}],81:[function(_dereq_,module,exports){
var fails = _dereq_('../internals/fails');
var wellKnownSymbol = _dereq_('../internals/well-known-symbol');
var V8_VERSION = _dereq_('../internals/engine-v8-version');

var SPECIES = wellKnownSymbol('species');

module.exports = function (METHOD_NAME) {
  // We can't use this feature detection in V8 since it causes
  // deoptimization and serious performance degradation
  // https://github.com/zloirock/core-js/issues/677
  return V8_VERSION >= 51 || !fails(function () {
    var array = [];
    var constructor = array.constructor = {};
    constructor[SPECIES] = function () {
      return { foo: 1 };
    };
    return array[METHOD_NAME](Boolean).foo !== 1;
  });
};

},{"../internals/engine-v8-version":109,"../internals/fails":114,"../internals/well-known-symbol":202}],82:[function(_dereq_,module,exports){
'use strict';
var fails = _dereq_('../internals/fails');

module.exports = function (METHOD_NAME, argument) {
  var method = [][METHOD_NAME];
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call,no-throw-literal -- required for testing
    method.call(null, argument || function () { throw 1; }, 1);
  });
};

},{"../internals/fails":114}],83:[function(_dereq_,module,exports){
var global = _dereq_('../internals/global');
var toAbsoluteIndex = _dereq_('../internals/to-absolute-index');
var lengthOfArrayLike = _dereq_('../internals/length-of-array-like');
var createProperty = _dereq_('../internals/create-property');

var Array = global.Array;
var max = Math.max;

module.exports = function (O, start, end) {
  var length = lengthOfArrayLike(O);
  var k = toAbsoluteIndex(start, length);
  var fin = toAbsoluteIndex(end === undefined ? length : end, length);
  var result = Array(max(fin - k, 0));
  for (var n = 0; k < fin; k++, n++) createProperty(result, n, O[k]);
  result.length = n;
  return result;
};

},{"../internals/create-property":97,"../internals/global":125,"../internals/length-of-array-like":148,"../internals/to-absolute-index":188}],84:[function(_dereq_,module,exports){
var uncurryThis = _dereq_('../internals/function-uncurry-this');

module.exports = uncurryThis([].slice);

},{"../internals/function-uncurry-this":120}],85:[function(_dereq_,module,exports){
var global = _dereq_('../internals/global');
var isArray = _dereq_('../internals/is-array');
var isConstructor = _dereq_('../internals/is-constructor');
var isObject = _dereq_('../internals/is-object');
var wellKnownSymbol = _dereq_('../internals/well-known-symbol');

var SPECIES = wellKnownSymbol('species');
var Array = global.Array;

// a part of `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate
module.exports = function (originalArray) {
  var C;
  if (isArray(originalArray)) {
    C = originalArray.constructor;
    // cross-realm fallback
    if (isConstructor(C) && (C === Array || isArray(C.prototype))) C = undefined;
    else if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return C === undefined ? Array : C;
};

},{"../internals/global":125,"../internals/is-array":136,"../internals/is-constructor":138,"../internals/is-object":140,"../internals/well-known-symbol":202}],86:[function(_dereq_,module,exports){
var arraySpeciesConstructor = _dereq_('../internals/array-species-constructor');

// `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate
module.exports = function (originalArray, length) {
  return new (arraySpeciesConstructor(originalArray))(length === 0 ? 0 : length);
};

},{"../internals/array-species-constructor":85}],87:[function(_dereq_,module,exports){
var wellKnownSymbol = _dereq_('../internals/well-known-symbol');

var ITERATOR = wellKnownSymbol('iterator');
var SAFE_CLOSING = false;

try {
  var called = 0;
  var iteratorWithReturn = {
    next: function () {
      return { done: !!called++ };
    },
    'return': function () {
      SAFE_CLOSING = true;
    }
  };
  iteratorWithReturn[ITERATOR] = function () {
    return this;
  };
  // eslint-disable-next-line es/no-array-from, no-throw-literal -- required for testing
  Array.from(iteratorWithReturn, function () { throw 2; });
} catch (error) { /* empty */ }

module.exports = function (exec, SKIP_CLOSING) {
  if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
  var ITERATION_SUPPORT = false;
  try {
    var object = {};
    object[ITERATOR] = function () {
      return {
        next: function () {
          return { done: ITERATION_SUPPORT = true };
        }
      };
    };
    exec(object);
  } catch (error) { /* empty */ }
  return ITERATION_SUPPORT;
};

},{"../internals/well-known-symbol":202}],88:[function(_dereq_,module,exports){
var uncurryThis = _dereq_('../internals/function-uncurry-this');

var toString = uncurryThis({}.toString);
var stringSlice = uncurryThis(''.slice);

module.exports = function (it) {
  return stringSlice(toString(it), 8, -1);
};

},{"../internals/function-uncurry-this":120}],89:[function(_dereq_,module,exports){
var global = _dereq_('../internals/global');
var TO_STRING_TAG_SUPPORT = _dereq_('../internals/to-string-tag-support');
var isCallable = _dereq_('../internals/is-callable');
var classofRaw = _dereq_('../internals/classof-raw');
var wellKnownSymbol = _dereq_('../internals/well-known-symbol');

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var Object = global.Object;

// ES3 wrong here
var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (error) { /* empty */ }
};

// getting tag from ES6+ `Object.prototype.toString`
module.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (tag = tryGet(O = Object(it), TO_STRING_TAG)) == 'string' ? tag
    // builtinTag case
    : CORRECT_ARGUMENTS ? classofRaw(O)
    // ES3 arguments fallback
    : (result = classofRaw(O)) == 'Object' && isCallable(O.callee) ? 'Arguments' : result;
};

},{"../internals/classof-raw":88,"../internals/global":125,"../internals/is-callable":137,"../internals/to-string-tag-support":195,"../internals/well-known-symbol":202}],90:[function(_dereq_,module,exports){
var uncurryThis = _dereq_('../internals/function-uncurry-this');

var replace = uncurryThis(''.replace);

var TEST = (function (arg) { return String(Error(arg).stack); })('zxcasd');
var V8_OR_CHAKRA_STACK_ENTRY = /\n\s*at [^:]*:[^\n]*/;
var IS_V8_OR_CHAKRA_STACK = V8_OR_CHAKRA_STACK_ENTRY.test(TEST);

module.exports = function (stack, dropEntries) {
  if (IS_V8_OR_CHAKRA_STACK && typeof stack == 'string') {
    while (dropEntries--) stack = replace(stack, V8_OR_CHAKRA_STACK_ENTRY, '');
  } return stack;
};

},{"../internals/function-uncurry-this":120}],91:[function(_dereq_,module,exports){
var hasOwn = _dereq_('../internals/has-own-property');
var ownKeys = _dereq_('../internals/own-keys');
var getOwnPropertyDescriptorModule = _dereq_('../internals/object-get-own-property-descriptor');
var definePropertyModule = _dereq_('../internals/object-define-property');

module.exports = function (target, source, exceptions) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!hasOwn(target, key) && !(exceptions && hasOwn(exceptions, key))) {
      defineProperty(target, key, getOwnPropertyDescriptor(source, key));
    }
  }
};

},{"../internals/has-own-property":126,"../internals/object-define-property":158,"../internals/object-get-own-property-descriptor":159,"../internals/own-keys":171}],92:[function(_dereq_,module,exports){
var wellKnownSymbol = _dereq_('../internals/well-known-symbol');

var MATCH = wellKnownSymbol('match');

module.exports = function (METHOD_NAME) {
  var regexp = /./;
  try {
    '/./'[METHOD_NAME](regexp);
  } catch (error1) {
    try {
      regexp[MATCH] = false;
      return '/./'[METHOD_NAME](regexp);
    } catch (error2) { /* empty */ }
  } return false;
};

},{"../internals/well-known-symbol":202}],93:[function(_dereq_,module,exports){
var fails = _dereq_('../internals/fails');

module.exports = !fails(function () {
  function F() { /* empty */ }
  F.prototype.constructor = null;
  // eslint-disable-next-line es/no-object-getprototypeof -- required for testing
  return Object.getPrototypeOf(new F()) !== F.prototype;
});

},{"../internals/fails":114}],94:[function(_dereq_,module,exports){
'use strict';
var IteratorPrototype = _dereq_('../internals/iterators-core').IteratorPrototype;
var create = _dereq_('../internals/object-create');
var createPropertyDescriptor = _dereq_('../internals/create-property-descriptor');
var setToStringTag = _dereq_('../internals/set-to-string-tag');
var Iterators = _dereq_('../internals/iterators');

var returnThis = function () { return this; };

module.exports = function (IteratorConstructor, NAME, next, ENUMERABLE_NEXT) {
  var TO_STRING_TAG = NAME + ' Iterator';
  IteratorConstructor.prototype = create(IteratorPrototype, { next: createPropertyDescriptor(+!ENUMERABLE_NEXT, next) });
  setToStringTag(IteratorConstructor, TO_STRING_TAG, false, true);
  Iterators[TO_STRING_TAG] = returnThis;
  return IteratorConstructor;
};

},{"../internals/create-property-descriptor":96,"../internals/iterators":147,"../internals/iterators-core":146,"../internals/object-create":156,"../internals/set-to-string-tag":181}],95:[function(_dereq_,module,exports){
var DESCRIPTORS = _dereq_('../internals/descriptors');
var definePropertyModule = _dereq_('../internals/object-define-property');
var createPropertyDescriptor = _dereq_('../internals/create-property-descriptor');

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};

},{"../internals/create-property-descriptor":96,"../internals/descriptors":100,"../internals/object-define-property":158}],96:[function(_dereq_,module,exports){
module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};

},{}],97:[function(_dereq_,module,exports){
'use strict';
var toPropertyKey = _dereq_('../internals/to-property-key');
var definePropertyModule = _dereq_('../internals/object-define-property');
var createPropertyDescriptor = _dereq_('../internals/create-property-descriptor');

module.exports = function (object, key, value) {
  var propertyKey = toPropertyKey(key);
  if (propertyKey in object) definePropertyModule.f(object, propertyKey, createPropertyDescriptor(0, value));
  else object[propertyKey] = value;
};

},{"../internals/create-property-descriptor":96,"../internals/object-define-property":158,"../internals/to-property-key":194}],98:[function(_dereq_,module,exports){
'use strict';
var $ = _dereq_('../internals/export');
var call = _dereq_('../internals/function-call');
var IS_PURE = _dereq_('../internals/is-pure');
var FunctionName = _dereq_('../internals/function-name');
var isCallable = _dereq_('../internals/is-callable');
var createIteratorConstructor = _dereq_('../internals/create-iterator-constructor');
var getPrototypeOf = _dereq_('../internals/object-get-prototype-of');
var setPrototypeOf = _dereq_('../internals/object-set-prototype-of');
var setToStringTag = _dereq_('../internals/set-to-string-tag');
var createNonEnumerableProperty = _dereq_('../internals/create-non-enumerable-property');
var redefine = _dereq_('../internals/redefine');
var wellKnownSymbol = _dereq_('../internals/well-known-symbol');
var Iterators = _dereq_('../internals/iterators');
var IteratorsCore = _dereq_('../internals/iterators-core');

var PROPER_FUNCTION_NAME = FunctionName.PROPER;
var CONFIGURABLE_FUNCTION_NAME = FunctionName.CONFIGURABLE;
var IteratorPrototype = IteratorsCore.IteratorPrototype;
var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
var ITERATOR = wellKnownSymbol('iterator');
var KEYS = 'keys';
var VALUES = 'values';
var ENTRIES = 'entries';

var returnThis = function () { return this; };

module.exports = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
  createIteratorConstructor(IteratorConstructor, NAME, next);

  var getIterationMethod = function (KIND) {
    if (KIND === DEFAULT && defaultIterator) return defaultIterator;
    if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype) return IterablePrototype[KIND];
    switch (KIND) {
      case KEYS: return function keys() { return new IteratorConstructor(this, KIND); };
      case VALUES: return function values() { return new IteratorConstructor(this, KIND); };
      case ENTRIES: return function entries() { return new IteratorConstructor(this, KIND); };
    } return function () { return new IteratorConstructor(this); };
  };

  var TO_STRING_TAG = NAME + ' Iterator';
  var INCORRECT_VALUES_NAME = false;
  var IterablePrototype = Iterable.prototype;
  var nativeIterator = IterablePrototype[ITERATOR]
    || IterablePrototype['@@iterator']
    || DEFAULT && IterablePrototype[DEFAULT];
  var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
  var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
  var CurrentIteratorPrototype, methods, KEY;

  // fix native
  if (anyNativeIterator) {
    CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));
    if (CurrentIteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
      if (!IS_PURE && getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
        if (setPrototypeOf) {
          setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);
        } else if (!isCallable(CurrentIteratorPrototype[ITERATOR])) {
          redefine(CurrentIteratorPrototype, ITERATOR, returnThis);
        }
      }
      // Set @@toStringTag to native iterators
      setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true, true);
      if (IS_PURE) Iterators[TO_STRING_TAG] = returnThis;
    }
  }

  // fix Array.prototype.{ values, @@iterator }.name in V8 / FF
  if (PROPER_FUNCTION_NAME && DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
    if (!IS_PURE && CONFIGURABLE_FUNCTION_NAME) {
      createNonEnumerableProperty(IterablePrototype, 'name', VALUES);
    } else {
      INCORRECT_VALUES_NAME = true;
      defaultIterator = function values() { return call(nativeIterator, this); };
    }
  }

  // export additional methods
  if (DEFAULT) {
    methods = {
      values: getIterationMethod(VALUES),
      keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
      entries: getIterationMethod(ENTRIES)
    };
    if (FORCED) for (KEY in methods) {
      if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
        redefine(IterablePrototype, KEY, methods[KEY]);
      }
    } else $({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);
  }

  // define iterator
  if ((!IS_PURE || FORCED) && IterablePrototype[ITERATOR] !== defaultIterator) {
    redefine(IterablePrototype, ITERATOR, defaultIterator, { name: DEFAULT });
  }
  Iterators[NAME] = defaultIterator;

  return methods;
};

},{"../internals/create-iterator-constructor":94,"../internals/create-non-enumerable-property":95,"../internals/export":113,"../internals/function-call":118,"../internals/function-name":119,"../internals/is-callable":137,"../internals/is-pure":141,"../internals/iterators":147,"../internals/iterators-core":146,"../internals/object-get-prototype-of":163,"../internals/object-set-prototype-of":168,"../internals/redefine":177,"../internals/set-to-string-tag":181,"../internals/well-known-symbol":202}],99:[function(_dereq_,module,exports){
var path = _dereq_('../internals/path');
var hasOwn = _dereq_('../internals/has-own-property');
var wrappedWellKnownSymbolModule = _dereq_('../internals/well-known-symbol-wrapped');
var defineProperty = _dereq_('../internals/object-define-property').f;

module.exports = function (NAME) {
  var Symbol = path.Symbol || (path.Symbol = {});
  if (!hasOwn(Symbol, NAME)) defineProperty(Symbol, NAME, {
    value: wrappedWellKnownSymbolModule.f(NAME)
  });
};

},{"../internals/has-own-property":126,"../internals/object-define-property":158,"../internals/path":172,"../internals/well-known-symbol-wrapped":201}],100:[function(_dereq_,module,exports){
var fails = _dereq_('../internals/fails');

// Detect IE8's incomplete defineProperty implementation
module.exports = !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
});

},{"../internals/fails":114}],101:[function(_dereq_,module,exports){
var global = _dereq_('../internals/global');
var isObject = _dereq_('../internals/is-object');

var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};

},{"../internals/global":125,"../internals/is-object":140}],102:[function(_dereq_,module,exports){
// iterable DOM collections
// flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
module.exports = {
  CSSRuleList: 0,
  CSSStyleDeclaration: 0,
  CSSValueList: 0,
  ClientRectList: 0,
  DOMRectList: 0,
  DOMStringList: 0,
  DOMTokenList: 1,
  DataTransferItemList: 0,
  FileList: 0,
  HTMLAllCollection: 0,
  HTMLCollection: 0,
  HTMLFormElement: 0,
  HTMLSelectElement: 0,
  MediaList: 0,
  MimeTypeArray: 0,
  NamedNodeMap: 0,
  NodeList: 1,
  PaintRequestList: 0,
  Plugin: 0,
  PluginArray: 0,
  SVGLengthList: 0,
  SVGNumberList: 0,
  SVGPathSegList: 0,
  SVGPointList: 0,
  SVGStringList: 0,
  SVGTransformList: 0,
  SourceBufferList: 0,
  StyleSheetList: 0,
  TextTrackCueList: 0,
  TextTrackList: 0,
  TouchList: 0
};

},{}],103:[function(_dereq_,module,exports){
module.exports = typeof window == 'object';

},{}],104:[function(_dereq_,module,exports){
var userAgent = _dereq_('../internals/engine-user-agent');
var global = _dereq_('../internals/global');

module.exports = /ipad|iphone|ipod/i.test(userAgent) && global.Pebble !== undefined;

},{"../internals/engine-user-agent":108,"../internals/global":125}],105:[function(_dereq_,module,exports){
var userAgent = _dereq_('../internals/engine-user-agent');

module.exports = /(?:ipad|iphone|ipod).*applewebkit/i.test(userAgent);

},{"../internals/engine-user-agent":108}],106:[function(_dereq_,module,exports){
var classof = _dereq_('../internals/classof-raw');
var global = _dereq_('../internals/global');

module.exports = classof(global.process) == 'process';

},{"../internals/classof-raw":88,"../internals/global":125}],107:[function(_dereq_,module,exports){
var userAgent = _dereq_('../internals/engine-user-agent');

module.exports = /web0s(?!.*chrome)/i.test(userAgent);

},{"../internals/engine-user-agent":108}],108:[function(_dereq_,module,exports){
var getBuiltIn = _dereq_('../internals/get-built-in');

module.exports = getBuiltIn('navigator', 'userAgent') || '';

},{"../internals/get-built-in":121}],109:[function(_dereq_,module,exports){
var global = _dereq_('../internals/global');
var userAgent = _dereq_('../internals/engine-user-agent');

var process = global.process;
var Deno = global.Deno;
var versions = process && process.versions || Deno && Deno.version;
var v8 = versions && versions.v8;
var match, version;

if (v8) {
  match = v8.split('.');
  // in old Chrome, versions of V8 isn't V8 = Chrome / 10
  // but their correct versions are not interesting for us
  version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
}

// BrowserFS NodeJS `process` polyfill incorrectly set `.v8` to `0.0`
// so check `userAgent` even if `.v8` exists, but 0
if (!version && userAgent) {
  match = userAgent.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = userAgent.match(/Chrome\/(\d+)/);
    if (match) version = +match[1];
  }
}

module.exports = version;

},{"../internals/engine-user-agent":108,"../internals/global":125}],110:[function(_dereq_,module,exports){
var path = _dereq_('../internals/path');

module.exports = function (CONSTRUCTOR) {
  return path[CONSTRUCTOR + 'Prototype'];
};

},{"../internals/path":172}],111:[function(_dereq_,module,exports){
// IE8- don't enum bug keys
module.exports = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];

},{}],112:[function(_dereq_,module,exports){
var fails = _dereq_('../internals/fails');
var createPropertyDescriptor = _dereq_('../internals/create-property-descriptor');

module.exports = !fails(function () {
  var error = Error('a');
  if (!('stack' in error)) return true;
  // eslint-disable-next-line es/no-object-defineproperty -- safe
  Object.defineProperty(error, 'stack', createPropertyDescriptor(1, 7));
  return error.stack !== 7;
});

},{"../internals/create-property-descriptor":96,"../internals/fails":114}],113:[function(_dereq_,module,exports){
'use strict';
var global = _dereq_('../internals/global');
var apply = _dereq_('../internals/function-apply');
var uncurryThis = _dereq_('../internals/function-uncurry-this');
var isCallable = _dereq_('../internals/is-callable');
var getOwnPropertyDescriptor = _dereq_('../internals/object-get-own-property-descriptor').f;
var isForced = _dereq_('../internals/is-forced');
var path = _dereq_('../internals/path');
var bind = _dereq_('../internals/function-bind-context');
var createNonEnumerableProperty = _dereq_('../internals/create-non-enumerable-property');
var hasOwn = _dereq_('../internals/has-own-property');

var wrapConstructor = function (NativeConstructor) {
  var Wrapper = function (a, b, c) {
    if (this instanceof Wrapper) {
      switch (arguments.length) {
        case 0: return new NativeConstructor();
        case 1: return new NativeConstructor(a);
        case 2: return new NativeConstructor(a, b);
      } return new NativeConstructor(a, b, c);
    } return apply(NativeConstructor, this, arguments);
  };
  Wrapper.prototype = NativeConstructor.prototype;
  return Wrapper;
};

/*
  options.target      - name of the target object
  options.global      - target is the global object
  options.stat        - export as static methods of target
  options.proto       - export as prototype methods of target
  options.real        - real prototype method for the `pure` version
  options.forced      - export even if the native feature is available
  options.bind        - bind methods to the target, required for the `pure` version
  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
  options.sham        - add a flag to not completely full polyfills
  options.enumerable  - export as enumerable property
  options.noTargetGet - prevent calling a getter on target
  options.name        - the .name of the function if it does not match the key
*/
module.exports = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var PROTO = options.proto;

  var nativeSource = GLOBAL ? global : STATIC ? global[TARGET] : (global[TARGET] || {}).prototype;

  var target = GLOBAL ? path : path[TARGET] || createNonEnumerableProperty(path, TARGET, {})[TARGET];
  var targetPrototype = target.prototype;

  var FORCED, USE_NATIVE, VIRTUAL_PROTOTYPE;
  var key, sourceProperty, targetProperty, nativeProperty, resultProperty, descriptor;

  for (key in source) {
    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contains in native
    USE_NATIVE = !FORCED && nativeSource && hasOwn(nativeSource, key);

    targetProperty = target[key];

    if (USE_NATIVE) if (options.noTargetGet) {
      descriptor = getOwnPropertyDescriptor(nativeSource, key);
      nativeProperty = descriptor && descriptor.value;
    } else nativeProperty = nativeSource[key];

    // export native or implementation
    sourceProperty = (USE_NATIVE && nativeProperty) ? nativeProperty : source[key];

    if (USE_NATIVE && typeof targetProperty == typeof sourceProperty) continue;

    // bind timers to global for call from export context
    if (options.bind && USE_NATIVE) resultProperty = bind(sourceProperty, global);
    // wrap global constructors for prevent changs in this version
    else if (options.wrap && USE_NATIVE) resultProperty = wrapConstructor(sourceProperty);
    // make static versions for prototype methods
    else if (PROTO && isCallable(sourceProperty)) resultProperty = uncurryThis(sourceProperty);
    // default case
    else resultProperty = sourceProperty;

    // add a flag to not completely full polyfills
    if (options.sham || (sourceProperty && sourceProperty.sham) || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty(resultProperty, 'sham', true);
    }

    createNonEnumerableProperty(target, key, resultProperty);

    if (PROTO) {
      VIRTUAL_PROTOTYPE = TARGET + 'Prototype';
      if (!hasOwn(path, VIRTUAL_PROTOTYPE)) {
        createNonEnumerableProperty(path, VIRTUAL_PROTOTYPE, {});
      }
      // export virtual prototype methods
      createNonEnumerableProperty(path[VIRTUAL_PROTOTYPE], key, sourceProperty);
      // export real prototype methods
      if (options.real && targetPrototype && !targetPrototype[key]) {
        createNonEnumerableProperty(targetPrototype, key, sourceProperty);
      }
    }
  }
};

},{"../internals/create-non-enumerable-property":95,"../internals/function-apply":115,"../internals/function-bind-context":116,"../internals/function-uncurry-this":120,"../internals/global":125,"../internals/has-own-property":126,"../internals/is-callable":137,"../internals/is-forced":139,"../internals/object-get-own-property-descriptor":159,"../internals/path":172}],114:[function(_dereq_,module,exports){
module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};

},{}],115:[function(_dereq_,module,exports){
var NATIVE_BIND = _dereq_('../internals/function-bind-native');

var FunctionPrototype = Function.prototype;
var apply = FunctionPrototype.apply;
var call = FunctionPrototype.call;

// eslint-disable-next-line es/no-reflect -- safe
module.exports = typeof Reflect == 'object' && Reflect.apply || (NATIVE_BIND ? call.bind(apply) : function () {
  return call.apply(apply, arguments);
});

},{"../internals/function-bind-native":117}],116:[function(_dereq_,module,exports){
var uncurryThis = _dereq_('../internals/function-uncurry-this');
var aCallable = _dereq_('../internals/a-callable');
var NATIVE_BIND = _dereq_('../internals/function-bind-native');

var bind = uncurryThis(uncurryThis.bind);

// optional / simple context binding
module.exports = function (fn, that) {
  aCallable(fn);
  return that === undefined ? fn : NATIVE_BIND ? bind(fn, that) : function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};

},{"../internals/a-callable":72,"../internals/function-bind-native":117,"../internals/function-uncurry-this":120}],117:[function(_dereq_,module,exports){
var fails = _dereq_('../internals/fails');

module.exports = !fails(function () {
  var test = (function () { /* empty */ }).bind();
  // eslint-disable-next-line no-prototype-builtins -- safe
  return typeof test != 'function' || test.hasOwnProperty('prototype');
});

},{"../internals/fails":114}],118:[function(_dereq_,module,exports){
var NATIVE_BIND = _dereq_('../internals/function-bind-native');

var call = Function.prototype.call;

module.exports = NATIVE_BIND ? call.bind(call) : function () {
  return call.apply(call, arguments);
};

},{"../internals/function-bind-native":117}],119:[function(_dereq_,module,exports){
var DESCRIPTORS = _dereq_('../internals/descriptors');
var hasOwn = _dereq_('../internals/has-own-property');

var FunctionPrototype = Function.prototype;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getDescriptor = DESCRIPTORS && Object.getOwnPropertyDescriptor;

var EXISTS = hasOwn(FunctionPrototype, 'name');
// additional protection from minified / mangled / dropped function names
var PROPER = EXISTS && (function something() { /* empty */ }).name === 'something';
var CONFIGURABLE = EXISTS && (!DESCRIPTORS || (DESCRIPTORS && getDescriptor(FunctionPrototype, 'name').configurable));

module.exports = {
  EXISTS: EXISTS,
  PROPER: PROPER,
  CONFIGURABLE: CONFIGURABLE
};

},{"../internals/descriptors":100,"../internals/has-own-property":126}],120:[function(_dereq_,module,exports){
var NATIVE_BIND = _dereq_('../internals/function-bind-native');

var FunctionPrototype = Function.prototype;
var bind = FunctionPrototype.bind;
var call = FunctionPrototype.call;
var uncurryThis = NATIVE_BIND && bind.bind(call, call);

module.exports = NATIVE_BIND ? function (fn) {
  return fn && uncurryThis(fn);
} : function (fn) {
  return fn && function () {
    return call.apply(fn, arguments);
  };
};

},{"../internals/function-bind-native":117}],121:[function(_dereq_,module,exports){
var path = _dereq_('../internals/path');
var global = _dereq_('../internals/global');
var isCallable = _dereq_('../internals/is-callable');

var aFunction = function (variable) {
  return isCallable(variable) ? variable : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global[namespace])
    : path[namespace] && path[namespace][method] || global[namespace] && global[namespace][method];
};

},{"../internals/global":125,"../internals/is-callable":137,"../internals/path":172}],122:[function(_dereq_,module,exports){
var classof = _dereq_('../internals/classof');
var getMethod = _dereq_('../internals/get-method');
var Iterators = _dereq_('../internals/iterators');
var wellKnownSymbol = _dereq_('../internals/well-known-symbol');

var ITERATOR = wellKnownSymbol('iterator');

module.exports = function (it) {
  if (it != undefined) return getMethod(it, ITERATOR)
    || getMethod(it, '@@iterator')
    || Iterators[classof(it)];
};

},{"../internals/classof":89,"../internals/get-method":124,"../internals/iterators":147,"../internals/well-known-symbol":202}],123:[function(_dereq_,module,exports){
var global = _dereq_('../internals/global');
var call = _dereq_('../internals/function-call');
var aCallable = _dereq_('../internals/a-callable');
var anObject = _dereq_('../internals/an-object');
var tryToString = _dereq_('../internals/try-to-string');
var getIteratorMethod = _dereq_('../internals/get-iterator-method');

var TypeError = global.TypeError;

module.exports = function (argument, usingIterator) {
  var iteratorMethod = arguments.length < 2 ? getIteratorMethod(argument) : usingIterator;
  if (aCallable(iteratorMethod)) return anObject(call(iteratorMethod, argument));
  throw TypeError(tryToString(argument) + ' is not iterable');
};

},{"../internals/a-callable":72,"../internals/an-object":77,"../internals/function-call":118,"../internals/get-iterator-method":122,"../internals/global":125,"../internals/try-to-string":197}],124:[function(_dereq_,module,exports){
var aCallable = _dereq_('../internals/a-callable');

// `GetMethod` abstract operation
// https://tc39.es/ecma262/#sec-getmethod
module.exports = function (V, P) {
  var func = V[P];
  return func == null ? undefined : aCallable(func);
};

},{"../internals/a-callable":72}],125:[function(_dereq_,module,exports){
(function (global){(function (){
var check = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports =
  // eslint-disable-next-line es/no-global-this -- safe
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  // eslint-disable-next-line no-restricted-globals -- safe
  check(typeof self == 'object' && self) ||
  check(typeof global == 'object' && global) ||
  // eslint-disable-next-line no-new-func -- fallback
  (function () { return this; })() || Function('return this')();

}).call(this)}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],126:[function(_dereq_,module,exports){
var uncurryThis = _dereq_('../internals/function-uncurry-this');
var toObject = _dereq_('../internals/to-object');

var hasOwnProperty = uncurryThis({}.hasOwnProperty);

// `HasOwnProperty` abstract operation
// https://tc39.es/ecma262/#sec-hasownproperty
module.exports = Object.hasOwn || function hasOwn(it, key) {
  return hasOwnProperty(toObject(it), key);
};

},{"../internals/function-uncurry-this":120,"../internals/to-object":192}],127:[function(_dereq_,module,exports){
module.exports = {};

},{}],128:[function(_dereq_,module,exports){
var global = _dereq_('../internals/global');

module.exports = function (a, b) {
  var console = global.console;
  if (console && console.error) {
    arguments.length == 1 ? console.error(a) : console.error(a, b);
  }
};

},{"../internals/global":125}],129:[function(_dereq_,module,exports){
var getBuiltIn = _dereq_('../internals/get-built-in');

module.exports = getBuiltIn('document', 'documentElement');

},{"../internals/get-built-in":121}],130:[function(_dereq_,module,exports){
var DESCRIPTORS = _dereq_('../internals/descriptors');
var fails = _dereq_('../internals/fails');
var createElement = _dereq_('../internals/document-create-element');

// Thanks to IE8 for its funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});

},{"../internals/descriptors":100,"../internals/document-create-element":101,"../internals/fails":114}],131:[function(_dereq_,module,exports){
var global = _dereq_('../internals/global');
var uncurryThis = _dereq_('../internals/function-uncurry-this');
var fails = _dereq_('../internals/fails');
var classof = _dereq_('../internals/classof-raw');

var Object = global.Object;
var split = uncurryThis(''.split);

// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins -- safe
  return !Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) == 'String' ? split(it, '') : Object(it);
} : Object;

},{"../internals/classof-raw":88,"../internals/fails":114,"../internals/function-uncurry-this":120,"../internals/global":125}],132:[function(_dereq_,module,exports){
var uncurryThis = _dereq_('../internals/function-uncurry-this');
var isCallable = _dereq_('../internals/is-callable');
var store = _dereq_('../internals/shared-store');

var functionToString = uncurryThis(Function.toString);

// this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
if (!isCallable(store.inspectSource)) {
  store.inspectSource = function (it) {
    return functionToString(it);
  };
}

module.exports = store.inspectSource;

},{"../internals/function-uncurry-this":120,"../internals/is-callable":137,"../internals/shared-store":183}],133:[function(_dereq_,module,exports){
var isObject = _dereq_('../internals/is-object');
var createNonEnumerableProperty = _dereq_('../internals/create-non-enumerable-property');

// `InstallErrorCause` abstract operation
// https://tc39.es/proposal-error-cause/#sec-errorobjects-install-error-cause
module.exports = function (O, options) {
  if (isObject(options) && 'cause' in options) {
    createNonEnumerableProperty(O, 'cause', options.cause);
  }
};

},{"../internals/create-non-enumerable-property":95,"../internals/is-object":140}],134:[function(_dereq_,module,exports){
var NATIVE_WEAK_MAP = _dereq_('../internals/native-weak-map');
var global = _dereq_('../internals/global');
var uncurryThis = _dereq_('../internals/function-uncurry-this');
var isObject = _dereq_('../internals/is-object');
var createNonEnumerableProperty = _dereq_('../internals/create-non-enumerable-property');
var hasOwn = _dereq_('../internals/has-own-property');
var shared = _dereq_('../internals/shared-store');
var sharedKey = _dereq_('../internals/shared-key');
var hiddenKeys = _dereq_('../internals/hidden-keys');

var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
var TypeError = global.TypeError;
var WeakMap = global.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP || shared.state) {
  var store = shared.state || (shared.state = new WeakMap());
  var wmget = uncurryThis(store.get);
  var wmhas = uncurryThis(store.has);
  var wmset = uncurryThis(store.set);
  set = function (it, metadata) {
    if (wmhas(store, it)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    wmset(store, it, metadata);
    return metadata;
  };
  get = function (it) {
    return wmget(store, it) || {};
  };
  has = function (it) {
    return wmhas(store, it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;
  set = function (it, metadata) {
    if (hasOwn(it, STATE)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    createNonEnumerableProperty(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return hasOwn(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return hasOwn(it, STATE);
  };
}

module.exports = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};

},{"../internals/create-non-enumerable-property":95,"../internals/function-uncurry-this":120,"../internals/global":125,"../internals/has-own-property":126,"../internals/hidden-keys":127,"../internals/is-object":140,"../internals/native-weak-map":152,"../internals/shared-key":182,"../internals/shared-store":183}],135:[function(_dereq_,module,exports){
var wellKnownSymbol = _dereq_('../internals/well-known-symbol');
var Iterators = _dereq_('../internals/iterators');

var ITERATOR = wellKnownSymbol('iterator');
var ArrayPrototype = Array.prototype;

// check on default Array iterator
module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);
};

},{"../internals/iterators":147,"../internals/well-known-symbol":202}],136:[function(_dereq_,module,exports){
var classof = _dereq_('../internals/classof-raw');

// `IsArray` abstract operation
// https://tc39.es/ecma262/#sec-isarray
// eslint-disable-next-line es/no-array-isarray -- safe
module.exports = Array.isArray || function isArray(argument) {
  return classof(argument) == 'Array';
};

},{"../internals/classof-raw":88}],137:[function(_dereq_,module,exports){
// `IsCallable` abstract operation
// https://tc39.es/ecma262/#sec-iscallable
module.exports = function (argument) {
  return typeof argument == 'function';
};

},{}],138:[function(_dereq_,module,exports){
var uncurryThis = _dereq_('../internals/function-uncurry-this');
var fails = _dereq_('../internals/fails');
var isCallable = _dereq_('../internals/is-callable');
var classof = _dereq_('../internals/classof');
var getBuiltIn = _dereq_('../internals/get-built-in');
var inspectSource = _dereq_('../internals/inspect-source');

var noop = function () { /* empty */ };
var empty = [];
var construct = getBuiltIn('Reflect', 'construct');
var constructorRegExp = /^\s*(?:class|function)\b/;
var exec = uncurryThis(constructorRegExp.exec);
var INCORRECT_TO_STRING = !constructorRegExp.exec(noop);

var isConstructorModern = function isConstructor(argument) {
  if (!isCallable(argument)) return false;
  try {
    construct(noop, empty, argument);
    return true;
  } catch (error) {
    return false;
  }
};

var isConstructorLegacy = function isConstructor(argument) {
  if (!isCallable(argument)) return false;
  switch (classof(argument)) {
    case 'AsyncFunction':
    case 'GeneratorFunction':
    case 'AsyncGeneratorFunction': return false;
  }
  try {
    // we can't check .prototype since constructors produced by .bind haven't it
    // `Function#toString` throws on some built-it function in some legacy engines
    // (for example, `DOMQuad` and similar in FF41-)
    return INCORRECT_TO_STRING || !!exec(constructorRegExp, inspectSource(argument));
  } catch (error) {
    return true;
  }
};

isConstructorLegacy.sham = true;

// `IsConstructor` abstract operation
// https://tc39.es/ecma262/#sec-isconstructor
module.exports = !construct || fails(function () {
  var called;
  return isConstructorModern(isConstructorModern.call)
    || !isConstructorModern(Object)
    || !isConstructorModern(function () { called = true; })
    || called;
}) ? isConstructorLegacy : isConstructorModern;

},{"../internals/classof":89,"../internals/fails":114,"../internals/function-uncurry-this":120,"../internals/get-built-in":121,"../internals/inspect-source":132,"../internals/is-callable":137}],139:[function(_dereq_,module,exports){
var fails = _dereq_('../internals/fails');
var isCallable = _dereq_('../internals/is-callable');

var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true
    : value == NATIVE ? false
    : isCallable(detection) ? fails(detection)
    : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';

module.exports = isForced;

},{"../internals/fails":114,"../internals/is-callable":137}],140:[function(_dereq_,module,exports){
var isCallable = _dereq_('../internals/is-callable');

module.exports = function (it) {
  return typeof it == 'object' ? it !== null : isCallable(it);
};

},{"../internals/is-callable":137}],141:[function(_dereq_,module,exports){
module.exports = true;

},{}],142:[function(_dereq_,module,exports){
var isObject = _dereq_('../internals/is-object');
var classof = _dereq_('../internals/classof-raw');
var wellKnownSymbol = _dereq_('../internals/well-known-symbol');

var MATCH = wellKnownSymbol('match');

// `IsRegExp` abstract operation
// https://tc39.es/ecma262/#sec-isregexp
module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : classof(it) == 'RegExp');
};

},{"../internals/classof-raw":88,"../internals/is-object":140,"../internals/well-known-symbol":202}],143:[function(_dereq_,module,exports){
var global = _dereq_('../internals/global');
var getBuiltIn = _dereq_('../internals/get-built-in');
var isCallable = _dereq_('../internals/is-callable');
var isPrototypeOf = _dereq_('../internals/object-is-prototype-of');
var USE_SYMBOL_AS_UID = _dereq_('../internals/use-symbol-as-uid');

var Object = global.Object;

module.exports = USE_SYMBOL_AS_UID ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  var $Symbol = getBuiltIn('Symbol');
  return isCallable($Symbol) && isPrototypeOf($Symbol.prototype, Object(it));
};

},{"../internals/get-built-in":121,"../internals/global":125,"../internals/is-callable":137,"../internals/object-is-prototype-of":164,"../internals/use-symbol-as-uid":199}],144:[function(_dereq_,module,exports){
var global = _dereq_('../internals/global');
var bind = _dereq_('../internals/function-bind-context');
var call = _dereq_('../internals/function-call');
var anObject = _dereq_('../internals/an-object');
var tryToString = _dereq_('../internals/try-to-string');
var isArrayIteratorMethod = _dereq_('../internals/is-array-iterator-method');
var lengthOfArrayLike = _dereq_('../internals/length-of-array-like');
var isPrototypeOf = _dereq_('../internals/object-is-prototype-of');
var getIterator = _dereq_('../internals/get-iterator');
var getIteratorMethod = _dereq_('../internals/get-iterator-method');
var iteratorClose = _dereq_('../internals/iterator-close');

var TypeError = global.TypeError;

var Result = function (stopped, result) {
  this.stopped = stopped;
  this.result = result;
};

var ResultPrototype = Result.prototype;

module.exports = function (iterable, unboundFunction, options) {
  var that = options && options.that;
  var AS_ENTRIES = !!(options && options.AS_ENTRIES);
  var IS_ITERATOR = !!(options && options.IS_ITERATOR);
  var INTERRUPTED = !!(options && options.INTERRUPTED);
  var fn = bind(unboundFunction, that);
  var iterator, iterFn, index, length, result, next, step;

  var stop = function (condition) {
    if (iterator) iteratorClose(iterator, 'normal', condition);
    return new Result(true, condition);
  };

  var callFn = function (value) {
    if (AS_ENTRIES) {
      anObject(value);
      return INTERRUPTED ? fn(value[0], value[1], stop) : fn(value[0], value[1]);
    } return INTERRUPTED ? fn(value, stop) : fn(value);
  };

  if (IS_ITERATOR) {
    iterator = iterable;
  } else {
    iterFn = getIteratorMethod(iterable);
    if (!iterFn) throw TypeError(tryToString(iterable) + ' is not iterable');
    // optimisation for array iterators
    if (isArrayIteratorMethod(iterFn)) {
      for (index = 0, length = lengthOfArrayLike(iterable); length > index; index++) {
        result = callFn(iterable[index]);
        if (result && isPrototypeOf(ResultPrototype, result)) return result;
      } return new Result(false);
    }
    iterator = getIterator(iterable, iterFn);
  }

  next = iterator.next;
  while (!(step = call(next, iterator)).done) {
    try {
      result = callFn(step.value);
    } catch (error) {
      iteratorClose(iterator, 'throw', error);
    }
    if (typeof result == 'object' && result && isPrototypeOf(ResultPrototype, result)) return result;
  } return new Result(false);
};

},{"../internals/an-object":77,"../internals/function-bind-context":116,"../internals/function-call":118,"../internals/get-iterator":123,"../internals/get-iterator-method":122,"../internals/global":125,"../internals/is-array-iterator-method":135,"../internals/iterator-close":145,"../internals/length-of-array-like":148,"../internals/object-is-prototype-of":164,"../internals/try-to-string":197}],145:[function(_dereq_,module,exports){
var call = _dereq_('../internals/function-call');
var anObject = _dereq_('../internals/an-object');
var getMethod = _dereq_('../internals/get-method');

module.exports = function (iterator, kind, value) {
  var innerResult, innerError;
  anObject(iterator);
  try {
    innerResult = getMethod(iterator, 'return');
    if (!innerResult) {
      if (kind === 'throw') throw value;
      return value;
    }
    innerResult = call(innerResult, iterator);
  } catch (error) {
    innerError = true;
    innerResult = error;
  }
  if (kind === 'throw') throw value;
  if (innerError) throw innerResult;
  anObject(innerResult);
  return value;
};

},{"../internals/an-object":77,"../internals/function-call":118,"../internals/get-method":124}],146:[function(_dereq_,module,exports){
'use strict';
var fails = _dereq_('../internals/fails');
var isCallable = _dereq_('../internals/is-callable');
var create = _dereq_('../internals/object-create');
var getPrototypeOf = _dereq_('../internals/object-get-prototype-of');
var redefine = _dereq_('../internals/redefine');
var wellKnownSymbol = _dereq_('../internals/well-known-symbol');
var IS_PURE = _dereq_('../internals/is-pure');

var ITERATOR = wellKnownSymbol('iterator');
var BUGGY_SAFARI_ITERATORS = false;

// `%IteratorPrototype%` object
// https://tc39.es/ecma262/#sec-%iteratorprototype%-object
var IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator;

/* eslint-disable es/no-array-prototype-keys -- safe */
if ([].keys) {
  arrayIterator = [].keys();
  // Safari 8 has buggy iterators w/o `next`
  if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS = true;
  else {
    PrototypeOfArrayIteratorPrototype = getPrototypeOf(getPrototypeOf(arrayIterator));
    if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype = PrototypeOfArrayIteratorPrototype;
  }
}

var NEW_ITERATOR_PROTOTYPE = IteratorPrototype == undefined || fails(function () {
  var test = {};
  // FF44- legacy iterators case
  return IteratorPrototype[ITERATOR].call(test) !== test;
});

if (NEW_ITERATOR_PROTOTYPE) IteratorPrototype = {};
else if (IS_PURE) IteratorPrototype = create(IteratorPrototype);

// `%IteratorPrototype%[@@iterator]()` method
// https://tc39.es/ecma262/#sec-%iteratorprototype%-@@iterator
if (!isCallable(IteratorPrototype[ITERATOR])) {
  redefine(IteratorPrototype, ITERATOR, function () {
    return this;
  });
}

module.exports = {
  IteratorPrototype: IteratorPrototype,
  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS
};

},{"../internals/fails":114,"../internals/is-callable":137,"../internals/is-pure":141,"../internals/object-create":156,"../internals/object-get-prototype-of":163,"../internals/redefine":177,"../internals/well-known-symbol":202}],147:[function(_dereq_,module,exports){
arguments[4][127][0].apply(exports,arguments)
},{"dup":127}],148:[function(_dereq_,module,exports){
var toLength = _dereq_('../internals/to-length');

// `LengthOfArrayLike` abstract operation
// https://tc39.es/ecma262/#sec-lengthofarraylike
module.exports = function (obj) {
  return toLength(obj.length);
};

},{"../internals/to-length":191}],149:[function(_dereq_,module,exports){
var global = _dereq_('../internals/global');
var bind = _dereq_('../internals/function-bind-context');
var getOwnPropertyDescriptor = _dereq_('../internals/object-get-own-property-descriptor').f;
var macrotask = _dereq_('../internals/task').set;
var IS_IOS = _dereq_('../internals/engine-is-ios');
var IS_IOS_PEBBLE = _dereq_('../internals/engine-is-ios-pebble');
var IS_WEBOS_WEBKIT = _dereq_('../internals/engine-is-webos-webkit');
var IS_NODE = _dereq_('../internals/engine-is-node');

var MutationObserver = global.MutationObserver || global.WebKitMutationObserver;
var document = global.document;
var process = global.process;
var Promise = global.Promise;
// Node.js 11 shows ExperimentalWarning on getting `queueMicrotask`
var queueMicrotaskDescriptor = getOwnPropertyDescriptor(global, 'queueMicrotask');
var queueMicrotask = queueMicrotaskDescriptor && queueMicrotaskDescriptor.value;

var flush, head, last, notify, toggle, node, promise, then;

// modern engines have queueMicrotask method
if (!queueMicrotask) {
  flush = function () {
    var parent, fn;
    if (IS_NODE && (parent = process.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (error) {
        if (head) notify();
        else last = undefined;
        throw error;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // browsers with MutationObserver, except iOS - https://github.com/zloirock/core-js/issues/339
  // also except WebOS Webkit https://github.com/zloirock/core-js/issues/898
  if (!IS_IOS && !IS_NODE && !IS_WEBOS_WEBKIT && MutationObserver && document) {
    toggle = true;
    node = document.createTextNode('');
    new MutationObserver(flush).observe(node, { characterData: true });
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (!IS_IOS_PEBBLE && Promise && Promise.resolve) {
    // Promise.resolve without an argument throws an error in LG WebOS 2
    promise = Promise.resolve(undefined);
    // workaround of WebKit ~ iOS Safari 10.1 bug
    promise.constructor = Promise;
    then = bind(promise.then, promise);
    notify = function () {
      then(flush);
    };
  // Node.js without promises
  } else if (IS_NODE) {
    notify = function () {
      process.nextTick(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    // strange IE + webpack dev server bug - use .bind(global)
    macrotask = bind(macrotask, global);
    notify = function () {
      macrotask(flush);
    };
  }
}

module.exports = queueMicrotask || function (fn) {
  var task = { fn: fn, next: undefined };
  if (last) last.next = task;
  if (!head) {
    head = task;
    notify();
  } last = task;
};

},{"../internals/engine-is-ios":105,"../internals/engine-is-ios-pebble":104,"../internals/engine-is-node":106,"../internals/engine-is-webos-webkit":107,"../internals/function-bind-context":116,"../internals/global":125,"../internals/object-get-own-property-descriptor":159,"../internals/task":187}],150:[function(_dereq_,module,exports){
var global = _dereq_('../internals/global');

module.exports = global.Promise;

},{"../internals/global":125}],151:[function(_dereq_,module,exports){
/* eslint-disable es/no-symbol -- required for testing */
var V8_VERSION = _dereq_('../internals/engine-v8-version');
var fails = _dereq_('../internals/fails');

// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  var symbol = Symbol();
  // Chrome 38 Symbol has incorrect toString conversion
  // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
  return !String(symbol) || !(Object(symbol) instanceof Symbol) ||
    // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
    !Symbol.sham && V8_VERSION && V8_VERSION < 41;
});

},{"../internals/engine-v8-version":109,"../internals/fails":114}],152:[function(_dereq_,module,exports){
var global = _dereq_('../internals/global');
var isCallable = _dereq_('../internals/is-callable');
var inspectSource = _dereq_('../internals/inspect-source');

var WeakMap = global.WeakMap;

module.exports = isCallable(WeakMap) && /native code/.test(inspectSource(WeakMap));

},{"../internals/global":125,"../internals/inspect-source":132,"../internals/is-callable":137}],153:[function(_dereq_,module,exports){
'use strict';
var aCallable = _dereq_('../internals/a-callable');

var PromiseCapability = function (C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aCallable(resolve);
  this.reject = aCallable(reject);
};

// `NewPromiseCapability` abstract operation
// https://tc39.es/ecma262/#sec-newpromisecapability
module.exports.f = function (C) {
  return new PromiseCapability(C);
};

},{"../internals/a-callable":72}],154:[function(_dereq_,module,exports){
var toString = _dereq_('../internals/to-string');

module.exports = function (argument, $default) {
  return argument === undefined ? arguments.length < 2 ? '' : $default : toString(argument);
};

},{"../internals/to-string":196}],155:[function(_dereq_,module,exports){
var global = _dereq_('../internals/global');
var isRegExp = _dereq_('../internals/is-regexp');

var TypeError = global.TypeError;

module.exports = function (it) {
  if (isRegExp(it)) {
    throw TypeError("The method doesn't accept regular expressions");
  } return it;
};

},{"../internals/global":125,"../internals/is-regexp":142}],156:[function(_dereq_,module,exports){
/* global ActiveXObject -- old IE, WSH */
var anObject = _dereq_('../internals/an-object');
var definePropertiesModule = _dereq_('../internals/object-define-properties');
var enumBugKeys = _dereq_('../internals/enum-bug-keys');
var hiddenKeys = _dereq_('../internals/hidden-keys');
var html = _dereq_('../internals/html');
var documentCreateElement = _dereq_('../internals/document-create-element');
var sharedKey = _dereq_('../internals/shared-key');

var GT = '>';
var LT = '<';
var PROTOTYPE = 'prototype';
var SCRIPT = 'script';
var IE_PROTO = sharedKey('IE_PROTO');

var EmptyConstructor = function () { /* empty */ };

var scriptTag = function (content) {
  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
};

// Create object with fake `null` prototype: use ActiveX Object with cleared prototype
var NullProtoObjectViaActiveX = function (activeXDocument) {
  activeXDocument.write(scriptTag(''));
  activeXDocument.close();
  var temp = activeXDocument.parentWindow.Object;
  activeXDocument = null; // avoid memory leak
  return temp;
};

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var NullProtoObjectViaIFrame = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement('iframe');
  var JS = 'java' + SCRIPT + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html.appendChild(iframe);
  // https://github.com/zloirock/core-js/issues/475
  iframe.src = String(JS);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(scriptTag('document.F=Object'));
  iframeDocument.close();
  return iframeDocument.F;
};

// Check for document.domain and active x support
// No need to use active x approach when document.domain is not set
// see https://github.com/es-shims/es5-shim/issues/150
// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
// avoid IE GC bug
var activeXDocument;
var NullProtoObject = function () {
  try {
    activeXDocument = new ActiveXObject('htmlfile');
  } catch (error) { /* ignore */ }
  NullProtoObject = typeof document != 'undefined'
    ? document.domain && activeXDocument
      ? NullProtoObjectViaActiveX(activeXDocument) // old IE
      : NullProtoObjectViaIFrame()
    : NullProtoObjectViaActiveX(activeXDocument); // WSH
  var length = enumBugKeys.length;
  while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
  return NullProtoObject();
};

hiddenKeys[IE_PROTO] = true;

// `Object.create` method
// https://tc39.es/ecma262/#sec-object.create
module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    EmptyConstructor[PROTOTYPE] = anObject(O);
    result = new EmptyConstructor();
    EmptyConstructor[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = NullProtoObject();
  return Properties === undefined ? result : definePropertiesModule.f(result, Properties);
};

},{"../internals/an-object":77,"../internals/document-create-element":101,"../internals/enum-bug-keys":111,"../internals/hidden-keys":127,"../internals/html":129,"../internals/object-define-properties":157,"../internals/shared-key":182}],157:[function(_dereq_,module,exports){
var DESCRIPTORS = _dereq_('../internals/descriptors');
var V8_PROTOTYPE_DEFINE_BUG = _dereq_('../internals/v8-prototype-define-bug');
var definePropertyModule = _dereq_('../internals/object-define-property');
var anObject = _dereq_('../internals/an-object');
var toIndexedObject = _dereq_('../internals/to-indexed-object');
var objectKeys = _dereq_('../internals/object-keys');

// `Object.defineProperties` method
// https://tc39.es/ecma262/#sec-object.defineproperties
// eslint-disable-next-line es/no-object-defineproperties -- safe
exports.f = DESCRIPTORS && !V8_PROTOTYPE_DEFINE_BUG ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var props = toIndexedObject(Properties);
  var keys = objectKeys(Properties);
  var length = keys.length;
  var index = 0;
  var key;
  while (length > index) definePropertyModule.f(O, key = keys[index++], props[key]);
  return O;
};

},{"../internals/an-object":77,"../internals/descriptors":100,"../internals/object-define-property":158,"../internals/object-keys":166,"../internals/to-indexed-object":189,"../internals/v8-prototype-define-bug":200}],158:[function(_dereq_,module,exports){
var global = _dereq_('../internals/global');
var DESCRIPTORS = _dereq_('../internals/descriptors');
var IE8_DOM_DEFINE = _dereq_('../internals/ie8-dom-define');
var V8_PROTOTYPE_DEFINE_BUG = _dereq_('../internals/v8-prototype-define-bug');
var anObject = _dereq_('../internals/an-object');
var toPropertyKey = _dereq_('../internals/to-property-key');

var TypeError = global.TypeError;
// eslint-disable-next-line es/no-object-defineproperty -- safe
var $defineProperty = Object.defineProperty;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var ENUMERABLE = 'enumerable';
var CONFIGURABLE = 'configurable';
var WRITABLE = 'writable';

// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? V8_PROTOTYPE_DEFINE_BUG ? function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPropertyKey(P);
  anObject(Attributes);
  if (typeof O === 'function' && P === 'prototype' && 'value' in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {
    var current = $getOwnPropertyDescriptor(O, P);
    if (current && current[WRITABLE]) {
      O[P] = Attributes.value;
      Attributes = {
        configurable: CONFIGURABLE in Attributes ? Attributes[CONFIGURABLE] : current[CONFIGURABLE],
        enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],
        writable: false
      };
    }
  } return $defineProperty(O, P, Attributes);
} : $defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPropertyKey(P);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return $defineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};

},{"../internals/an-object":77,"../internals/descriptors":100,"../internals/global":125,"../internals/ie8-dom-define":130,"../internals/to-property-key":194,"../internals/v8-prototype-define-bug":200}],159:[function(_dereq_,module,exports){
var DESCRIPTORS = _dereq_('../internals/descriptors');
var call = _dereq_('../internals/function-call');
var propertyIsEnumerableModule = _dereq_('../internals/object-property-is-enumerable');
var createPropertyDescriptor = _dereq_('../internals/create-property-descriptor');
var toIndexedObject = _dereq_('../internals/to-indexed-object');
var toPropertyKey = _dereq_('../internals/to-property-key');
var hasOwn = _dereq_('../internals/has-own-property');
var IE8_DOM_DEFINE = _dereq_('../internals/ie8-dom-define');

// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPropertyKey(P);
  if (IE8_DOM_DEFINE) try {
    return $getOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (hasOwn(O, P)) return createPropertyDescriptor(!call(propertyIsEnumerableModule.f, O, P), O[P]);
};

},{"../internals/create-property-descriptor":96,"../internals/descriptors":100,"../internals/function-call":118,"../internals/has-own-property":126,"../internals/ie8-dom-define":130,"../internals/object-property-is-enumerable":167,"../internals/to-indexed-object":189,"../internals/to-property-key":194}],160:[function(_dereq_,module,exports){
/* eslint-disable es/no-object-getownpropertynames -- safe */
var classof = _dereq_('../internals/classof-raw');
var toIndexedObject = _dereq_('../internals/to-indexed-object');
var $getOwnPropertyNames = _dereq_('../internals/object-get-own-property-names').f;
var arraySlice = _dereq_('../internals/array-slice-simple');

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return $getOwnPropertyNames(it);
  } catch (error) {
    return arraySlice(windowNames);
  }
};

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && classof(it) == 'Window'
    ? getWindowNames(it)
    : $getOwnPropertyNames(toIndexedObject(it));
};

},{"../internals/array-slice-simple":83,"../internals/classof-raw":88,"../internals/object-get-own-property-names":161,"../internals/to-indexed-object":189}],161:[function(_dereq_,module,exports){
var internalObjectKeys = _dereq_('../internals/object-keys-internal');
var enumBugKeys = _dereq_('../internals/enum-bug-keys');

var hiddenKeys = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
// eslint-disable-next-line es/no-object-getownpropertynames -- safe
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};

},{"../internals/enum-bug-keys":111,"../internals/object-keys-internal":165}],162:[function(_dereq_,module,exports){
// eslint-disable-next-line es/no-object-getownpropertysymbols -- safe
exports.f = Object.getOwnPropertySymbols;

},{}],163:[function(_dereq_,module,exports){
var global = _dereq_('../internals/global');
var hasOwn = _dereq_('../internals/has-own-property');
var isCallable = _dereq_('../internals/is-callable');
var toObject = _dereq_('../internals/to-object');
var sharedKey = _dereq_('../internals/shared-key');
var CORRECT_PROTOTYPE_GETTER = _dereq_('../internals/correct-prototype-getter');

var IE_PROTO = sharedKey('IE_PROTO');
var Object = global.Object;
var ObjectPrototype = Object.prototype;

// `Object.getPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.getprototypeof
module.exports = CORRECT_PROTOTYPE_GETTER ? Object.getPrototypeOf : function (O) {
  var object = toObject(O);
  if (hasOwn(object, IE_PROTO)) return object[IE_PROTO];
  var constructor = object.constructor;
  if (isCallable(constructor) && object instanceof constructor) {
    return constructor.prototype;
  } return object instanceof Object ? ObjectPrototype : null;
};

},{"../internals/correct-prototype-getter":93,"../internals/global":125,"../internals/has-own-property":126,"../internals/is-callable":137,"../internals/shared-key":182,"../internals/to-object":192}],164:[function(_dereq_,module,exports){
var uncurryThis = _dereq_('../internals/function-uncurry-this');

module.exports = uncurryThis({}.isPrototypeOf);

},{"../internals/function-uncurry-this":120}],165:[function(_dereq_,module,exports){
var uncurryThis = _dereq_('../internals/function-uncurry-this');
var hasOwn = _dereq_('../internals/has-own-property');
var toIndexedObject = _dereq_('../internals/to-indexed-object');
var indexOf = _dereq_('../internals/array-includes').indexOf;
var hiddenKeys = _dereq_('../internals/hidden-keys');

var push = uncurryThis([].push);

module.exports = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !hasOwn(hiddenKeys, key) && hasOwn(O, key) && push(result, key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (hasOwn(O, key = names[i++])) {
    ~indexOf(result, key) || push(result, key);
  }
  return result;
};

},{"../internals/array-includes":79,"../internals/function-uncurry-this":120,"../internals/has-own-property":126,"../internals/hidden-keys":127,"../internals/to-indexed-object":189}],166:[function(_dereq_,module,exports){
var internalObjectKeys = _dereq_('../internals/object-keys-internal');
var enumBugKeys = _dereq_('../internals/enum-bug-keys');

// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
// eslint-disable-next-line es/no-object-keys -- safe
module.exports = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys);
};

},{"../internals/enum-bug-keys":111,"../internals/object-keys-internal":165}],167:[function(_dereq_,module,exports){
'use strict';
var $propertyIsEnumerable = {}.propertyIsEnumerable;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !$propertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : $propertyIsEnumerable;

},{}],168:[function(_dereq_,module,exports){
/* eslint-disable no-proto -- safe */
var uncurryThis = _dereq_('../internals/function-uncurry-this');
var anObject = _dereq_('../internals/an-object');
var aPossiblePrototype = _dereq_('../internals/a-possible-prototype');

// `Object.setPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.setprototypeof
// Works with __proto__ only. Old v8 can't work with null proto objects.
// eslint-disable-next-line es/no-object-setprototypeof -- safe
module.exports = Object.setPrototypeOf || ('__proto__' in {} ? function () {
  var CORRECT_SETTER = false;
  var test = {};
  var setter;
  try {
    // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
    setter = uncurryThis(Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set);
    setter(test, []);
    CORRECT_SETTER = test instanceof Array;
  } catch (error) { /* empty */ }
  return function setPrototypeOf(O, proto) {
    anObject(O);
    aPossiblePrototype(proto);
    if (CORRECT_SETTER) setter(O, proto);
    else O.__proto__ = proto;
    return O;
  };
}() : undefined);

},{"../internals/a-possible-prototype":74,"../internals/an-object":77,"../internals/function-uncurry-this":120}],169:[function(_dereq_,module,exports){
'use strict';
var TO_STRING_TAG_SUPPORT = _dereq_('../internals/to-string-tag-support');
var classof = _dereq_('../internals/classof');

// `Object.prototype.toString` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.tostring
module.exports = TO_STRING_TAG_SUPPORT ? {}.toString : function toString() {
  return '[object ' + classof(this) + ']';
};

},{"../internals/classof":89,"../internals/to-string-tag-support":195}],170:[function(_dereq_,module,exports){
var global = _dereq_('../internals/global');
var call = _dereq_('../internals/function-call');
var isCallable = _dereq_('../internals/is-callable');
var isObject = _dereq_('../internals/is-object');

var TypeError = global.TypeError;

// `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive
module.exports = function (input, pref) {
  var fn, val;
  if (pref === 'string' && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
  if (isCallable(fn = input.valueOf) && !isObject(val = call(fn, input))) return val;
  if (pref !== 'string' && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
  throw TypeError("Can't convert object to primitive value");
};

},{"../internals/function-call":118,"../internals/global":125,"../internals/is-callable":137,"../internals/is-object":140}],171:[function(_dereq_,module,exports){
var getBuiltIn = _dereq_('../internals/get-built-in');
var uncurryThis = _dereq_('../internals/function-uncurry-this');
var getOwnPropertyNamesModule = _dereq_('../internals/object-get-own-property-names');
var getOwnPropertySymbolsModule = _dereq_('../internals/object-get-own-property-symbols');
var anObject = _dereq_('../internals/an-object');

var concat = uncurryThis([].concat);

// all object keys, includes non-enumerable and symbols
module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? concat(keys, getOwnPropertySymbols(it)) : keys;
};

},{"../internals/an-object":77,"../internals/function-uncurry-this":120,"../internals/get-built-in":121,"../internals/object-get-own-property-names":161,"../internals/object-get-own-property-symbols":162}],172:[function(_dereq_,module,exports){
arguments[4][127][0].apply(exports,arguments)
},{"dup":127}],173:[function(_dereq_,module,exports){
module.exports = function (exec) {
  try {
    return { error: false, value: exec() };
  } catch (error) {
    return { error: true, value: error };
  }
};

},{}],174:[function(_dereq_,module,exports){
var anObject = _dereq_('../internals/an-object');
var isObject = _dereq_('../internals/is-object');
var newPromiseCapability = _dereq_('../internals/new-promise-capability');

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};

},{"../internals/an-object":77,"../internals/is-object":140,"../internals/new-promise-capability":153}],175:[function(_dereq_,module,exports){
var Queue = function () {
  this.head = null;
  this.tail = null;
};

Queue.prototype = {
  add: function (item) {
    var entry = { item: item, next: null };
    if (this.head) this.tail.next = entry;
    else this.head = entry;
    this.tail = entry;
  },
  get: function () {
    var entry = this.head;
    if (entry) {
      this.head = entry.next;
      if (this.tail === entry) this.tail = null;
      return entry.item;
    }
  }
};

module.exports = Queue;

},{}],176:[function(_dereq_,module,exports){
var redefine = _dereq_('../internals/redefine');

module.exports = function (target, src, options) {
  for (var key in src) {
    if (options && options.unsafe && target[key]) target[key] = src[key];
    else redefine(target, key, src[key], options);
  } return target;
};

},{"../internals/redefine":177}],177:[function(_dereq_,module,exports){
var createNonEnumerableProperty = _dereq_('../internals/create-non-enumerable-property');

module.exports = function (target, key, value, options) {
  if (options && options.enumerable) target[key] = value;
  else createNonEnumerableProperty(target, key, value);
};

},{"../internals/create-non-enumerable-property":95}],178:[function(_dereq_,module,exports){
var global = _dereq_('../internals/global');

var TypeError = global.TypeError;

// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on " + it);
  return it;
};

},{"../internals/global":125}],179:[function(_dereq_,module,exports){
var global = _dereq_('../internals/global');

// eslint-disable-next-line es/no-object-defineproperty -- safe
var defineProperty = Object.defineProperty;

module.exports = function (key, value) {
  try {
    defineProperty(global, key, { value: value, configurable: true, writable: true });
  } catch (error) {
    global[key] = value;
  } return value;
};

},{"../internals/global":125}],180:[function(_dereq_,module,exports){
'use strict';
var getBuiltIn = _dereq_('../internals/get-built-in');
var definePropertyModule = _dereq_('../internals/object-define-property');
var wellKnownSymbol = _dereq_('../internals/well-known-symbol');
var DESCRIPTORS = _dereq_('../internals/descriptors');

var SPECIES = wellKnownSymbol('species');

module.exports = function (CONSTRUCTOR_NAME) {
  var Constructor = getBuiltIn(CONSTRUCTOR_NAME);
  var defineProperty = definePropertyModule.f;

  if (DESCRIPTORS && Constructor && !Constructor[SPECIES]) {
    defineProperty(Constructor, SPECIES, {
      configurable: true,
      get: function () { return this; }
    });
  }
};

},{"../internals/descriptors":100,"../internals/get-built-in":121,"../internals/object-define-property":158,"../internals/well-known-symbol":202}],181:[function(_dereq_,module,exports){
var TO_STRING_TAG_SUPPORT = _dereq_('../internals/to-string-tag-support');
var defineProperty = _dereq_('../internals/object-define-property').f;
var createNonEnumerableProperty = _dereq_('../internals/create-non-enumerable-property');
var hasOwn = _dereq_('../internals/has-own-property');
var toString = _dereq_('../internals/object-to-string');
var wellKnownSymbol = _dereq_('../internals/well-known-symbol');

var TO_STRING_TAG = wellKnownSymbol('toStringTag');

module.exports = function (it, TAG, STATIC, SET_METHOD) {
  if (it) {
    var target = STATIC ? it : it.prototype;
    if (!hasOwn(target, TO_STRING_TAG)) {
      defineProperty(target, TO_STRING_TAG, { configurable: true, value: TAG });
    }
    if (SET_METHOD && !TO_STRING_TAG_SUPPORT) {
      createNonEnumerableProperty(target, 'toString', toString);
    }
  }
};

},{"../internals/create-non-enumerable-property":95,"../internals/has-own-property":126,"../internals/object-define-property":158,"../internals/object-to-string":169,"../internals/to-string-tag-support":195,"../internals/well-known-symbol":202}],182:[function(_dereq_,module,exports){
var shared = _dereq_('../internals/shared');
var uid = _dereq_('../internals/uid');

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};

},{"../internals/shared":184,"../internals/uid":198}],183:[function(_dereq_,module,exports){
var global = _dereq_('../internals/global');
var setGlobal = _dereq_('../internals/set-global');

var SHARED = '__core-js_shared__';
var store = global[SHARED] || setGlobal(SHARED, {});

module.exports = store;

},{"../internals/global":125,"../internals/set-global":179}],184:[function(_dereq_,module,exports){
var IS_PURE = _dereq_('../internals/is-pure');
var store = _dereq_('../internals/shared-store');

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.20.3',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2014-2022 Denis Pushkarev (zloirock.ru)',
  license: 'https://github.com/zloirock/core-js/blob/v3.20.3/LICENSE',
  source: 'https://github.com/zloirock/core-js'
});

},{"../internals/is-pure":141,"../internals/shared-store":183}],185:[function(_dereq_,module,exports){
var anObject = _dereq_('../internals/an-object');
var aConstructor = _dereq_('../internals/a-constructor');
var wellKnownSymbol = _dereq_('../internals/well-known-symbol');

var SPECIES = wellKnownSymbol('species');

// `SpeciesConstructor` abstract operation
// https://tc39.es/ecma262/#sec-speciesconstructor
module.exports = function (O, defaultConstructor) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? defaultConstructor : aConstructor(S);
};

},{"../internals/a-constructor":73,"../internals/an-object":77,"../internals/well-known-symbol":202}],186:[function(_dereq_,module,exports){
var uncurryThis = _dereq_('../internals/function-uncurry-this');
var toIntegerOrInfinity = _dereq_('../internals/to-integer-or-infinity');
var toString = _dereq_('../internals/to-string');
var requireObjectCoercible = _dereq_('../internals/require-object-coercible');

var charAt = uncurryThis(''.charAt);
var charCodeAt = uncurryThis(''.charCodeAt);
var stringSlice = uncurryThis(''.slice);

var createMethod = function (CONVERT_TO_STRING) {
  return function ($this, pos) {
    var S = toString(requireObjectCoercible($this));
    var position = toIntegerOrInfinity(pos);
    var size = S.length;
    var first, second;
    if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
    first = charCodeAt(S, position);
    return first < 0xD800 || first > 0xDBFF || position + 1 === size
      || (second = charCodeAt(S, position + 1)) < 0xDC00 || second > 0xDFFF
        ? CONVERT_TO_STRING
          ? charAt(S, position)
          : first
        : CONVERT_TO_STRING
          ? stringSlice(S, position, position + 2)
          : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
  };
};

module.exports = {
  // `String.prototype.codePointAt` method
  // https://tc39.es/ecma262/#sec-string.prototype.codepointat
  codeAt: createMethod(false),
  // `String.prototype.at` method
  // https://github.com/mathiasbynens/String.prototype.at
  charAt: createMethod(true)
};

},{"../internals/function-uncurry-this":120,"../internals/require-object-coercible":178,"../internals/to-integer-or-infinity":190,"../internals/to-string":196}],187:[function(_dereq_,module,exports){
var global = _dereq_('../internals/global');
var apply = _dereq_('../internals/function-apply');
var bind = _dereq_('../internals/function-bind-context');
var isCallable = _dereq_('../internals/is-callable');
var hasOwn = _dereq_('../internals/has-own-property');
var fails = _dereq_('../internals/fails');
var html = _dereq_('../internals/html');
var arraySlice = _dereq_('../internals/array-slice');
var createElement = _dereq_('../internals/document-create-element');
var IS_IOS = _dereq_('../internals/engine-is-ios');
var IS_NODE = _dereq_('../internals/engine-is-node');

var set = global.setImmediate;
var clear = global.clearImmediate;
var process = global.process;
var Dispatch = global.Dispatch;
var Function = global.Function;
var MessageChannel = global.MessageChannel;
var String = global.String;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var location, defer, channel, port;

try {
  // Deno throws a ReferenceError on `location` access without `--location` flag
  location = global.location;
} catch (error) { /* empty */ }

var run = function (id) {
  if (hasOwn(queue, id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};

var runner = function (id) {
  return function () {
    run(id);
  };
};

var listener = function (event) {
  run(event.data);
};

var post = function (id) {
  // old engines have not location.origin
  global.postMessage(String(id), location.protocol + '//' + location.host);
};

// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!set || !clear) {
  set = function setImmediate(fn) {
    var args = arraySlice(arguments, 1);
    queue[++counter] = function () {
      apply(isCallable(fn) ? fn : Function(fn), undefined, args);
    };
    defer(counter);
    return counter;
  };
  clear = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (IS_NODE) {
    defer = function (id) {
      process.nextTick(runner(id));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(runner(id));
    };
  // Browsers with MessageChannel, includes WebWorkers
  // except iOS - https://github.com/zloirock/core-js/issues/624
  } else if (MessageChannel && !IS_IOS) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = bind(port.postMessage, port);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (
    global.addEventListener &&
    isCallable(global.postMessage) &&
    !global.importScripts &&
    location && location.protocol !== 'file:' &&
    !fails(post)
  ) {
    defer = post;
    global.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in createElement('script')) {
    defer = function (id) {
      html.appendChild(createElement('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(runner(id), 0);
    };
  }
}

module.exports = {
  set: set,
  clear: clear
};

},{"../internals/array-slice":84,"../internals/document-create-element":101,"../internals/engine-is-ios":105,"../internals/engine-is-node":106,"../internals/fails":114,"../internals/function-apply":115,"../internals/function-bind-context":116,"../internals/global":125,"../internals/has-own-property":126,"../internals/html":129,"../internals/is-callable":137}],188:[function(_dereq_,module,exports){
var toIntegerOrInfinity = _dereq_('../internals/to-integer-or-infinity');

var max = Math.max;
var min = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
module.exports = function (index, length) {
  var integer = toIntegerOrInfinity(index);
  return integer < 0 ? max(integer + length, 0) : min(integer, length);
};

},{"../internals/to-integer-or-infinity":190}],189:[function(_dereq_,module,exports){
// toObject with fallback for non-array-like ES3 strings
var IndexedObject = _dereq_('../internals/indexed-object');
var requireObjectCoercible = _dereq_('../internals/require-object-coercible');

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};

},{"../internals/indexed-object":131,"../internals/require-object-coercible":178}],190:[function(_dereq_,module,exports){
var ceil = Math.ceil;
var floor = Math.floor;

// `ToIntegerOrInfinity` abstract operation
// https://tc39.es/ecma262/#sec-tointegerorinfinity
module.exports = function (argument) {
  var number = +argument;
  // eslint-disable-next-line no-self-compare -- safe
  return number !== number || number === 0 ? 0 : (number > 0 ? floor : ceil)(number);
};

},{}],191:[function(_dereq_,module,exports){
var toIntegerOrInfinity = _dereq_('../internals/to-integer-or-infinity');

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
module.exports = function (argument) {
  return argument > 0 ? min(toIntegerOrInfinity(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};

},{"../internals/to-integer-or-infinity":190}],192:[function(_dereq_,module,exports){
var global = _dereq_('../internals/global');
var requireObjectCoercible = _dereq_('../internals/require-object-coercible');

var Object = global.Object;

// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
module.exports = function (argument) {
  return Object(requireObjectCoercible(argument));
};

},{"../internals/global":125,"../internals/require-object-coercible":178}],193:[function(_dereq_,module,exports){
var global = _dereq_('../internals/global');
var call = _dereq_('../internals/function-call');
var isObject = _dereq_('../internals/is-object');
var isSymbol = _dereq_('../internals/is-symbol');
var getMethod = _dereq_('../internals/get-method');
var ordinaryToPrimitive = _dereq_('../internals/ordinary-to-primitive');
var wellKnownSymbol = _dereq_('../internals/well-known-symbol');

var TypeError = global.TypeError;
var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');

// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
module.exports = function (input, pref) {
  if (!isObject(input) || isSymbol(input)) return input;
  var exoticToPrim = getMethod(input, TO_PRIMITIVE);
  var result;
  if (exoticToPrim) {
    if (pref === undefined) pref = 'default';
    result = call(exoticToPrim, input, pref);
    if (!isObject(result) || isSymbol(result)) return result;
    throw TypeError("Can't convert object to primitive value");
  }
  if (pref === undefined) pref = 'number';
  return ordinaryToPrimitive(input, pref);
};

},{"../internals/function-call":118,"../internals/get-method":124,"../internals/global":125,"../internals/is-object":140,"../internals/is-symbol":143,"../internals/ordinary-to-primitive":170,"../internals/well-known-symbol":202}],194:[function(_dereq_,module,exports){
var toPrimitive = _dereq_('../internals/to-primitive');
var isSymbol = _dereq_('../internals/is-symbol');

// `ToPropertyKey` abstract operation
// https://tc39.es/ecma262/#sec-topropertykey
module.exports = function (argument) {
  var key = toPrimitive(argument, 'string');
  return isSymbol(key) ? key : key + '';
};

},{"../internals/is-symbol":143,"../internals/to-primitive":193}],195:[function(_dereq_,module,exports){
var wellKnownSymbol = _dereq_('../internals/well-known-symbol');

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var test = {};

test[TO_STRING_TAG] = 'z';

module.exports = String(test) === '[object z]';

},{"../internals/well-known-symbol":202}],196:[function(_dereq_,module,exports){
var global = _dereq_('../internals/global');
var classof = _dereq_('../internals/classof');

var String = global.String;

module.exports = function (argument) {
  if (classof(argument) === 'Symbol') throw TypeError('Cannot convert a Symbol value to a string');
  return String(argument);
};

},{"../internals/classof":89,"../internals/global":125}],197:[function(_dereq_,module,exports){
var global = _dereq_('../internals/global');

var String = global.String;

module.exports = function (argument) {
  try {
    return String(argument);
  } catch (error) {
    return 'Object';
  }
};

},{"../internals/global":125}],198:[function(_dereq_,module,exports){
var uncurryThis = _dereq_('../internals/function-uncurry-this');

var id = 0;
var postfix = Math.random();
var toString = uncurryThis(1.0.toString);

module.exports = function (key) {
  return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString(++id + postfix, 36);
};

},{"../internals/function-uncurry-this":120}],199:[function(_dereq_,module,exports){
/* eslint-disable es/no-symbol -- required for testing */
var NATIVE_SYMBOL = _dereq_('../internals/native-symbol');

module.exports = NATIVE_SYMBOL
  && !Symbol.sham
  && typeof Symbol.iterator == 'symbol';

},{"../internals/native-symbol":151}],200:[function(_dereq_,module,exports){
var DESCRIPTORS = _dereq_('../internals/descriptors');
var fails = _dereq_('../internals/fails');

// V8 ~ Chrome 36-
// https://bugs.chromium.org/p/v8/issues/detail?id=3334
module.exports = DESCRIPTORS && fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty(function () { /* empty */ }, 'prototype', {
    value: 42,
    writable: false
  }).prototype != 42;
});

},{"../internals/descriptors":100,"../internals/fails":114}],201:[function(_dereq_,module,exports){
var wellKnownSymbol = _dereq_('../internals/well-known-symbol');

exports.f = wellKnownSymbol;

},{"../internals/well-known-symbol":202}],202:[function(_dereq_,module,exports){
var global = _dereq_('../internals/global');
var shared = _dereq_('../internals/shared');
var hasOwn = _dereq_('../internals/has-own-property');
var uid = _dereq_('../internals/uid');
var NATIVE_SYMBOL = _dereq_('../internals/native-symbol');
var USE_SYMBOL_AS_UID = _dereq_('../internals/use-symbol-as-uid');

var WellKnownSymbolsStore = shared('wks');
var Symbol = global.Symbol;
var symbolFor = Symbol && Symbol['for'];
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol : Symbol && Symbol.withoutSetter || uid;

module.exports = function (name) {
  if (!hasOwn(WellKnownSymbolsStore, name) || !(NATIVE_SYMBOL || typeof WellKnownSymbolsStore[name] == 'string')) {
    var description = 'Symbol.' + name;
    if (NATIVE_SYMBOL && hasOwn(Symbol, name)) {
      WellKnownSymbolsStore[name] = Symbol[name];
    } else if (USE_SYMBOL_AS_UID && symbolFor) {
      WellKnownSymbolsStore[name] = symbolFor(description);
    } else {
      WellKnownSymbolsStore[name] = createWellKnownSymbol(description);
    }
  } return WellKnownSymbolsStore[name];
};

},{"../internals/global":125,"../internals/has-own-property":126,"../internals/native-symbol":151,"../internals/shared":184,"../internals/uid":198,"../internals/use-symbol-as-uid":199}],203:[function(_dereq_,module,exports){
'use strict';
var $ = _dereq_('../internals/export');
var global = _dereq_('../internals/global');
var isPrototypeOf = _dereq_('../internals/object-is-prototype-of');
var getPrototypeOf = _dereq_('../internals/object-get-prototype-of');
var setPrototypeOf = _dereq_('../internals/object-set-prototype-of');
var copyConstructorProperties = _dereq_('../internals/copy-constructor-properties');
var create = _dereq_('../internals/object-create');
var createNonEnumerableProperty = _dereq_('../internals/create-non-enumerable-property');
var createPropertyDescriptor = _dereq_('../internals/create-property-descriptor');
var clearErrorStack = _dereq_('../internals/clear-error-stack');
var installErrorCause = _dereq_('../internals/install-error-cause');
var iterate = _dereq_('../internals/iterate');
var normalizeStringArgument = _dereq_('../internals/normalize-string-argument');
var wellKnownSymbol = _dereq_('../internals/well-known-symbol');
var ERROR_STACK_INSTALLABLE = _dereq_('../internals/error-stack-installable');

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var Error = global.Error;
var push = [].push;

var $AggregateError = function AggregateError(errors, message /* , options */) {
  var options = arguments.length > 2 ? arguments[2] : undefined;
  var isInstance = isPrototypeOf(AggregateErrorPrototype, this);
  var that;
  if (setPrototypeOf) {
    that = setPrototypeOf(new Error(), isInstance ? getPrototypeOf(this) : AggregateErrorPrototype);
  } else {
    that = isInstance ? this : create(AggregateErrorPrototype);
    createNonEnumerableProperty(that, TO_STRING_TAG, 'Error');
  }
  if (message !== undefined) createNonEnumerableProperty(that, 'message', normalizeStringArgument(message));
  if (ERROR_STACK_INSTALLABLE) createNonEnumerableProperty(that, 'stack', clearErrorStack(that.stack, 1));
  installErrorCause(that, options);
  var errorsArray = [];
  iterate(errors, push, { that: errorsArray });
  createNonEnumerableProperty(that, 'errors', errorsArray);
  return that;
};

if (setPrototypeOf) setPrototypeOf($AggregateError, Error);
else copyConstructorProperties($AggregateError, Error, { name: true });

var AggregateErrorPrototype = $AggregateError.prototype = create(Error.prototype, {
  constructor: createPropertyDescriptor(1, $AggregateError),
  message: createPropertyDescriptor(1, ''),
  name: createPropertyDescriptor(1, 'AggregateError')
});

// `AggregateError` constructor
// https://tc39.es/ecma262/#sec-aggregate-error-constructor
$({ global: true }, {
  AggregateError: $AggregateError
});

},{"../internals/clear-error-stack":90,"../internals/copy-constructor-properties":91,"../internals/create-non-enumerable-property":95,"../internals/create-property-descriptor":96,"../internals/error-stack-installable":112,"../internals/export":113,"../internals/global":125,"../internals/install-error-cause":133,"../internals/iterate":144,"../internals/normalize-string-argument":154,"../internals/object-create":156,"../internals/object-get-prototype-of":163,"../internals/object-is-prototype-of":164,"../internals/object-set-prototype-of":168,"../internals/well-known-symbol":202}],204:[function(_dereq_,module,exports){
'use strict';
var $ = _dereq_('../internals/export');
var $every = _dereq_('../internals/array-iteration').every;
var arrayMethodIsStrict = _dereq_('../internals/array-method-is-strict');

var STRICT_METHOD = arrayMethodIsStrict('every');

// `Array.prototype.every` method
// https://tc39.es/ecma262/#sec-array.prototype.every
$({ target: 'Array', proto: true, forced: !STRICT_METHOD }, {
  every: function every(callbackfn /* , thisArg */) {
    return $every(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});

},{"../internals/array-iteration":80,"../internals/array-method-is-strict":82,"../internals/export":113}],205:[function(_dereq_,module,exports){
'use strict';
var $ = _dereq_('../internals/export');
var $filter = _dereq_('../internals/array-iteration').filter;
var arrayMethodHasSpeciesSupport = _dereq_('../internals/array-method-has-species-support');

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('filter');

// `Array.prototype.filter` method
// https://tc39.es/ecma262/#sec-array.prototype.filter
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {
  filter: function filter(callbackfn /* , thisArg */) {
    return $filter(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});

},{"../internals/array-iteration":80,"../internals/array-method-has-species-support":81,"../internals/export":113}],206:[function(_dereq_,module,exports){
'use strict';
var $ = _dereq_('../internals/export');
var forEach = _dereq_('../internals/array-for-each');

// `Array.prototype.forEach` method
// https://tc39.es/ecma262/#sec-array.prototype.foreach
// eslint-disable-next-line es/no-array-prototype-foreach -- safe
$({ target: 'Array', proto: true, forced: [].forEach != forEach }, {
  forEach: forEach
});

},{"../internals/array-for-each":78,"../internals/export":113}],207:[function(_dereq_,module,exports){
'use strict';
var $ = _dereq_('../internals/export');
var $includes = _dereq_('../internals/array-includes').includes;
var addToUnscopables = _dereq_('../internals/add-to-unscopables');

// `Array.prototype.includes` method
// https://tc39.es/ecma262/#sec-array.prototype.includes
$({ target: 'Array', proto: true }, {
  includes: function includes(el /* , fromIndex = 0 */) {
    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
  }
});

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('includes');

},{"../internals/add-to-unscopables":75,"../internals/array-includes":79,"../internals/export":113}],208:[function(_dereq_,module,exports){
'use strict';
var toIndexedObject = _dereq_('../internals/to-indexed-object');
var addToUnscopables = _dereq_('../internals/add-to-unscopables');
var Iterators = _dereq_('../internals/iterators');
var InternalStateModule = _dereq_('../internals/internal-state');
var defineProperty = _dereq_('../internals/object-define-property').f;
var defineIterator = _dereq_('../internals/define-iterator');
var IS_PURE = _dereq_('../internals/is-pure');
var DESCRIPTORS = _dereq_('../internals/descriptors');

var ARRAY_ITERATOR = 'Array Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(ARRAY_ITERATOR);

// `Array.prototype.entries` method
// https://tc39.es/ecma262/#sec-array.prototype.entries
// `Array.prototype.keys` method
// https://tc39.es/ecma262/#sec-array.prototype.keys
// `Array.prototype.values` method
// https://tc39.es/ecma262/#sec-array.prototype.values
// `Array.prototype[@@iterator]` method
// https://tc39.es/ecma262/#sec-array.prototype-@@iterator
// `CreateArrayIterator` internal method
// https://tc39.es/ecma262/#sec-createarrayiterator
module.exports = defineIterator(Array, 'Array', function (iterated, kind) {
  setInternalState(this, {
    type: ARRAY_ITERATOR,
    target: toIndexedObject(iterated), // target
    index: 0,                          // next index
    kind: kind                         // kind
  });
// `%ArrayIteratorPrototype%.next` method
// https://tc39.es/ecma262/#sec-%arrayiteratorprototype%.next
}, function () {
  var state = getInternalState(this);
  var target = state.target;
  var kind = state.kind;
  var index = state.index++;
  if (!target || index >= target.length) {
    state.target = undefined;
    return { value: undefined, done: true };
  }
  if (kind == 'keys') return { value: index, done: false };
  if (kind == 'values') return { value: target[index], done: false };
  return { value: [index, target[index]], done: false };
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values%
// https://tc39.es/ecma262/#sec-createunmappedargumentsobject
// https://tc39.es/ecma262/#sec-createmappedargumentsobject
var values = Iterators.Arguments = Iterators.Array;

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');

// V8 ~ Chrome 45- bug
if (!IS_PURE && DESCRIPTORS && values.name !== 'values') try {
  defineProperty(values, 'name', { value: 'values' });
} catch (error) { /* empty */ }

},{"../internals/add-to-unscopables":75,"../internals/define-iterator":98,"../internals/descriptors":100,"../internals/internal-state":134,"../internals/is-pure":141,"../internals/iterators":147,"../internals/object-define-property":158,"../internals/to-indexed-object":189}],209:[function(_dereq_,module,exports){
var $ = _dereq_('../internals/export');
var global = _dereq_('../internals/global');
var getBuiltIn = _dereq_('../internals/get-built-in');
var apply = _dereq_('../internals/function-apply');
var uncurryThis = _dereq_('../internals/function-uncurry-this');
var fails = _dereq_('../internals/fails');

var Array = global.Array;
var $stringify = getBuiltIn('JSON', 'stringify');
var exec = uncurryThis(/./.exec);
var charAt = uncurryThis(''.charAt);
var charCodeAt = uncurryThis(''.charCodeAt);
var replace = uncurryThis(''.replace);
var numberToString = uncurryThis(1.0.toString);

var tester = /[\uD800-\uDFFF]/g;
var low = /^[\uD800-\uDBFF]$/;
var hi = /^[\uDC00-\uDFFF]$/;

var fix = function (match, offset, string) {
  var prev = charAt(string, offset - 1);
  var next = charAt(string, offset + 1);
  if ((exec(low, match) && !exec(hi, next)) || (exec(hi, match) && !exec(low, prev))) {
    return '\\u' + numberToString(charCodeAt(match, 0), 16);
  } return match;
};

var FORCED = fails(function () {
  return $stringify('\uDF06\uD834') !== '"\\udf06\\ud834"'
    || $stringify('\uDEAD') !== '"\\udead"';
});

if ($stringify) {
  // `JSON.stringify` method
  // https://tc39.es/ecma262/#sec-json.stringify
  // https://github.com/tc39/proposal-well-formed-stringify
  $({ target: 'JSON', stat: true, forced: FORCED }, {
    // eslint-disable-next-line no-unused-vars -- required for `.length`
    stringify: function stringify(it, replacer, space) {
      for (var i = 0, l = arguments.length, args = Array(l); i < l; i++) args[i] = arguments[i];
      var result = apply($stringify, null, args);
      return typeof result == 'string' ? replace(result, tester, fix) : result;
    }
  });
}

},{"../internals/export":113,"../internals/fails":114,"../internals/function-apply":115,"../internals/function-uncurry-this":120,"../internals/get-built-in":121,"../internals/global":125}],210:[function(_dereq_,module,exports){
var $ = _dereq_('../internals/export');
var DESCRIPTORS = _dereq_('../internals/descriptors');
var defineProperties = _dereq_('../internals/object-define-properties').f;

// `Object.defineProperties` method
// https://tc39.es/ecma262/#sec-object.defineproperties
// eslint-disable-next-line es/no-object-defineproperties -- safe
$({ target: 'Object', stat: true, forced: Object.defineProperties !== defineProperties, sham: !DESCRIPTORS }, {
  defineProperties: defineProperties
});

},{"../internals/descriptors":100,"../internals/export":113,"../internals/object-define-properties":157}],211:[function(_dereq_,module,exports){
var $ = _dereq_('../internals/export');
var DESCRIPTORS = _dereq_('../internals/descriptors');
var defineProperty = _dereq_('../internals/object-define-property').f;

// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
// eslint-disable-next-line es/no-object-defineproperty -- safe
$({ target: 'Object', stat: true, forced: Object.defineProperty !== defineProperty, sham: !DESCRIPTORS }, {
  defineProperty: defineProperty
});

},{"../internals/descriptors":100,"../internals/export":113,"../internals/object-define-property":158}],212:[function(_dereq_,module,exports){
var $ = _dereq_('../internals/export');
var fails = _dereq_('../internals/fails');
var toIndexedObject = _dereq_('../internals/to-indexed-object');
var nativeGetOwnPropertyDescriptor = _dereq_('../internals/object-get-own-property-descriptor').f;
var DESCRIPTORS = _dereq_('../internals/descriptors');

var FAILS_ON_PRIMITIVES = fails(function () { nativeGetOwnPropertyDescriptor(1); });
var FORCED = !DESCRIPTORS || FAILS_ON_PRIMITIVES;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
$({ target: 'Object', stat: true, forced: FORCED, sham: !DESCRIPTORS }, {
  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(it, key) {
    return nativeGetOwnPropertyDescriptor(toIndexedObject(it), key);
  }
});

},{"../internals/descriptors":100,"../internals/export":113,"../internals/fails":114,"../internals/object-get-own-property-descriptor":159,"../internals/to-indexed-object":189}],213:[function(_dereq_,module,exports){
var $ = _dereq_('../internals/export');
var DESCRIPTORS = _dereq_('../internals/descriptors');
var ownKeys = _dereq_('../internals/own-keys');
var toIndexedObject = _dereq_('../internals/to-indexed-object');
var getOwnPropertyDescriptorModule = _dereq_('../internals/object-get-own-property-descriptor');
var createProperty = _dereq_('../internals/create-property');

// `Object.getOwnPropertyDescriptors` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptors
$({ target: 'Object', stat: true, sham: !DESCRIPTORS }, {
  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object) {
    var O = toIndexedObject(object);
    var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
    var keys = ownKeys(O);
    var result = {};
    var index = 0;
    var key, descriptor;
    while (keys.length > index) {
      descriptor = getOwnPropertyDescriptor(O, key = keys[index++]);
      if (descriptor !== undefined) createProperty(result, key, descriptor);
    }
    return result;
  }
});

},{"../internals/create-property":97,"../internals/descriptors":100,"../internals/export":113,"../internals/object-get-own-property-descriptor":159,"../internals/own-keys":171,"../internals/to-indexed-object":189}],214:[function(_dereq_,module,exports){
var $ = _dereq_('../internals/export');
var toObject = _dereq_('../internals/to-object');
var nativeKeys = _dereq_('../internals/object-keys');
var fails = _dereq_('../internals/fails');

var FAILS_ON_PRIMITIVES = fails(function () { nativeKeys(1); });

// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
$({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES }, {
  keys: function keys(it) {
    return nativeKeys(toObject(it));
  }
});

},{"../internals/export":113,"../internals/fails":114,"../internals/object-keys":166,"../internals/to-object":192}],215:[function(_dereq_,module,exports){
// empty

},{}],216:[function(_dereq_,module,exports){
'use strict';
var $ = _dereq_('../internals/export');
var call = _dereq_('../internals/function-call');
var aCallable = _dereq_('../internals/a-callable');
var newPromiseCapabilityModule = _dereq_('../internals/new-promise-capability');
var perform = _dereq_('../internals/perform');
var iterate = _dereq_('../internals/iterate');

// `Promise.allSettled` method
// https://tc39.es/ecma262/#sec-promise.allsettled
$({ target: 'Promise', stat: true }, {
  allSettled: function allSettled(iterable) {
    var C = this;
    var capability = newPromiseCapabilityModule.f(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var promiseResolve = aCallable(C.resolve);
      var values = [];
      var counter = 0;
      var remaining = 1;
      iterate(iterable, function (promise) {
        var index = counter++;
        var alreadyCalled = false;
        remaining++;
        call(promiseResolve, C, promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[index] = { status: 'fulfilled', value: value };
          --remaining || resolve(values);
        }, function (error) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[index] = { status: 'rejected', reason: error };
          --remaining || resolve(values);
        });
      });
      --remaining || resolve(values);
    });
    if (result.error) reject(result.value);
    return capability.promise;
  }
});

},{"../internals/a-callable":72,"../internals/export":113,"../internals/function-call":118,"../internals/iterate":144,"../internals/new-promise-capability":153,"../internals/perform":173}],217:[function(_dereq_,module,exports){
'use strict';
var $ = _dereq_('../internals/export');
var aCallable = _dereq_('../internals/a-callable');
var getBuiltIn = _dereq_('../internals/get-built-in');
var call = _dereq_('../internals/function-call');
var newPromiseCapabilityModule = _dereq_('../internals/new-promise-capability');
var perform = _dereq_('../internals/perform');
var iterate = _dereq_('../internals/iterate');

var PROMISE_ANY_ERROR = 'No one promise resolved';

// `Promise.any` method
// https://tc39.es/ecma262/#sec-promise.any
$({ target: 'Promise', stat: true }, {
  any: function any(iterable) {
    var C = this;
    var AggregateError = getBuiltIn('AggregateError');
    var capability = newPromiseCapabilityModule.f(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var promiseResolve = aCallable(C.resolve);
      var errors = [];
      var counter = 0;
      var remaining = 1;
      var alreadyResolved = false;
      iterate(iterable, function (promise) {
        var index = counter++;
        var alreadyRejected = false;
        remaining++;
        call(promiseResolve, C, promise).then(function (value) {
          if (alreadyRejected || alreadyResolved) return;
          alreadyResolved = true;
          resolve(value);
        }, function (error) {
          if (alreadyRejected || alreadyResolved) return;
          alreadyRejected = true;
          errors[index] = error;
          --remaining || reject(new AggregateError(errors, PROMISE_ANY_ERROR));
        });
      });
      --remaining || reject(new AggregateError(errors, PROMISE_ANY_ERROR));
    });
    if (result.error) reject(result.value);
    return capability.promise;
  }
});

},{"../internals/a-callable":72,"../internals/export":113,"../internals/function-call":118,"../internals/get-built-in":121,"../internals/iterate":144,"../internals/new-promise-capability":153,"../internals/perform":173}],218:[function(_dereq_,module,exports){
'use strict';
var $ = _dereq_('../internals/export');
var IS_PURE = _dereq_('../internals/is-pure');
var NativePromise = _dereq_('../internals/native-promise-constructor');
var fails = _dereq_('../internals/fails');
var getBuiltIn = _dereq_('../internals/get-built-in');
var isCallable = _dereq_('../internals/is-callable');
var speciesConstructor = _dereq_('../internals/species-constructor');
var promiseResolve = _dereq_('../internals/promise-resolve');
var redefine = _dereq_('../internals/redefine');

// Safari bug https://bugs.webkit.org/show_bug.cgi?id=200829
var NON_GENERIC = !!NativePromise && fails(function () {
  // eslint-disable-next-line unicorn/no-thenable -- required for testing
  NativePromise.prototype['finally'].call({ then: function () { /* empty */ } }, function () { /* empty */ });
});

// `Promise.prototype.finally` method
// https://tc39.es/ecma262/#sec-promise.prototype.finally
$({ target: 'Promise', proto: true, real: true, forced: NON_GENERIC }, {
  'finally': function (onFinally) {
    var C = speciesConstructor(this, getBuiltIn('Promise'));
    var isFunction = isCallable(onFinally);
    return this.then(
      isFunction ? function (x) {
        return promiseResolve(C, onFinally()).then(function () { return x; });
      } : onFinally,
      isFunction ? function (e) {
        return promiseResolve(C, onFinally()).then(function () { throw e; });
      } : onFinally
    );
  }
});

// makes sure that native promise-based APIs `Promise#finally` properly works with patched `Promise#then`
if (!IS_PURE && isCallable(NativePromise)) {
  var method = getBuiltIn('Promise').prototype['finally'];
  if (NativePromise.prototype['finally'] !== method) {
    redefine(NativePromise.prototype, 'finally', method, { unsafe: true });
  }
}

},{"../internals/export":113,"../internals/fails":114,"../internals/get-built-in":121,"../internals/is-callable":137,"../internals/is-pure":141,"../internals/native-promise-constructor":150,"../internals/promise-resolve":174,"../internals/redefine":177,"../internals/species-constructor":185}],219:[function(_dereq_,module,exports){
'use strict';
var $ = _dereq_('../internals/export');
var IS_PURE = _dereq_('../internals/is-pure');
var global = _dereq_('../internals/global');
var getBuiltIn = _dereq_('../internals/get-built-in');
var call = _dereq_('../internals/function-call');
var NativePromise = _dereq_('../internals/native-promise-constructor');
var redefine = _dereq_('../internals/redefine');
var redefineAll = _dereq_('../internals/redefine-all');
var setPrototypeOf = _dereq_('../internals/object-set-prototype-of');
var setToStringTag = _dereq_('../internals/set-to-string-tag');
var setSpecies = _dereq_('../internals/set-species');
var aCallable = _dereq_('../internals/a-callable');
var isCallable = _dereq_('../internals/is-callable');
var isObject = _dereq_('../internals/is-object');
var anInstance = _dereq_('../internals/an-instance');
var inspectSource = _dereq_('../internals/inspect-source');
var iterate = _dereq_('../internals/iterate');
var checkCorrectnessOfIteration = _dereq_('../internals/check-correctness-of-iteration');
var speciesConstructor = _dereq_('../internals/species-constructor');
var task = _dereq_('../internals/task').set;
var microtask = _dereq_('../internals/microtask');
var promiseResolve = _dereq_('../internals/promise-resolve');
var hostReportErrors = _dereq_('../internals/host-report-errors');
var newPromiseCapabilityModule = _dereq_('../internals/new-promise-capability');
var perform = _dereq_('../internals/perform');
var Queue = _dereq_('../internals/queue');
var InternalStateModule = _dereq_('../internals/internal-state');
var isForced = _dereq_('../internals/is-forced');
var wellKnownSymbol = _dereq_('../internals/well-known-symbol');
var IS_BROWSER = _dereq_('../internals/engine-is-browser');
var IS_NODE = _dereq_('../internals/engine-is-node');
var V8_VERSION = _dereq_('../internals/engine-v8-version');

var SPECIES = wellKnownSymbol('species');
var PROMISE = 'Promise';

var getInternalState = InternalStateModule.getterFor(PROMISE);
var setInternalState = InternalStateModule.set;
var getInternalPromiseState = InternalStateModule.getterFor(PROMISE);
var NativePromisePrototype = NativePromise && NativePromise.prototype;
var PromiseConstructor = NativePromise;
var PromisePrototype = NativePromisePrototype;
var TypeError = global.TypeError;
var document = global.document;
var process = global.process;
var newPromiseCapability = newPromiseCapabilityModule.f;
var newGenericPromiseCapability = newPromiseCapability;

var DISPATCH_EVENT = !!(document && document.createEvent && global.dispatchEvent);
var NATIVE_REJECTION_EVENT = isCallable(global.PromiseRejectionEvent);
var UNHANDLED_REJECTION = 'unhandledrejection';
var REJECTION_HANDLED = 'rejectionhandled';
var PENDING = 0;
var FULFILLED = 1;
var REJECTED = 2;
var HANDLED = 1;
var UNHANDLED = 2;
var SUBCLASSING = false;

var Internal, OwnPromiseCapability, PromiseWrapper, nativeThen;

var FORCED = isForced(PROMISE, function () {
  var PROMISE_CONSTRUCTOR_SOURCE = inspectSource(PromiseConstructor);
  var GLOBAL_CORE_JS_PROMISE = PROMISE_CONSTRUCTOR_SOURCE !== String(PromiseConstructor);
  // V8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
  // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
  // We can't detect it synchronously, so just check versions
  if (!GLOBAL_CORE_JS_PROMISE && V8_VERSION === 66) return true;
  // We need Promise#finally in the pure version for preventing prototype pollution
  if (IS_PURE && !PromisePrototype['finally']) return true;
  // We can't use @@species feature detection in V8 since it causes
  // deoptimization and performance degradation
  // https://github.com/zloirock/core-js/issues/679
  if (V8_VERSION >= 51 && /native code/.test(PROMISE_CONSTRUCTOR_SOURCE)) return false;
  // Detect correctness of subclassing with @@species support
  var promise = new PromiseConstructor(function (resolve) { resolve(1); });
  var FakePromise = function (exec) {
    exec(function () { /* empty */ }, function () { /* empty */ });
  };
  var constructor = promise.constructor = {};
  constructor[SPECIES] = FakePromise;
  SUBCLASSING = promise.then(function () { /* empty */ }) instanceof FakePromise;
  if (!SUBCLASSING) return true;
  // Unhandled rejections tracking support, NodeJS Promise without it fails @@species test
  return !GLOBAL_CORE_JS_PROMISE && IS_BROWSER && !NATIVE_REJECTION_EVENT;
});

var INCORRECT_ITERATION = FORCED || !checkCorrectnessOfIteration(function (iterable) {
  PromiseConstructor.all(iterable)['catch'](function () { /* empty */ });
});

// helpers
var isThenable = function (it) {
  var then;
  return isObject(it) && isCallable(then = it.then) ? then : false;
};

var callReaction = function (reaction, state) {
  var value = state.value;
  var ok = state.state == FULFILLED;
  var handler = ok ? reaction.ok : reaction.fail;
  var resolve = reaction.resolve;
  var reject = reaction.reject;
  var domain = reaction.domain;
  var result, then, exited;
  try {
    if (handler) {
      if (!ok) {
        if (state.rejection === UNHANDLED) onHandleUnhandled(state);
        state.rejection = HANDLED;
      }
      if (handler === true) result = value;
      else {
        if (domain) domain.enter();
        result = handler(value); // can throw
        if (domain) {
          domain.exit();
          exited = true;
        }
      }
      if (result === reaction.promise) {
        reject(TypeError('Promise-chain cycle'));
      } else if (then = isThenable(result)) {
        call(then, result, resolve, reject);
      } else resolve(result);
    } else reject(value);
  } catch (error) {
    if (domain && !exited) domain.exit();
    reject(error);
  }
};

var notify = function (state, isReject) {
  if (state.notified) return;
  state.notified = true;
  microtask(function () {
    var reactions = state.reactions;
    var reaction;
    while (reaction = reactions.get()) {
      callReaction(reaction, state);
    }
    state.notified = false;
    if (isReject && !state.rejection) onUnhandled(state);
  });
};

var dispatchEvent = function (name, promise, reason) {
  var event, handler;
  if (DISPATCH_EVENT) {
    event = document.createEvent('Event');
    event.promise = promise;
    event.reason = reason;
    event.initEvent(name, false, true);
    global.dispatchEvent(event);
  } else event = { promise: promise, reason: reason };
  if (!NATIVE_REJECTION_EVENT && (handler = global['on' + name])) handler(event);
  else if (name === UNHANDLED_REJECTION) hostReportErrors('Unhandled promise rejection', reason);
};

var onUnhandled = function (state) {
  call(task, global, function () {
    var promise = state.facade;
    var value = state.value;
    var IS_UNHANDLED = isUnhandled(state);
    var result;
    if (IS_UNHANDLED) {
      result = perform(function () {
        if (IS_NODE) {
          process.emit('unhandledRejection', value, promise);
        } else dispatchEvent(UNHANDLED_REJECTION, promise, value);
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      state.rejection = IS_NODE || isUnhandled(state) ? UNHANDLED : HANDLED;
      if (result.error) throw result.value;
    }
  });
};

var isUnhandled = function (state) {
  return state.rejection !== HANDLED && !state.parent;
};

var onHandleUnhandled = function (state) {
  call(task, global, function () {
    var promise = state.facade;
    if (IS_NODE) {
      process.emit('rejectionHandled', promise);
    } else dispatchEvent(REJECTION_HANDLED, promise, state.value);
  });
};

var bind = function (fn, state, unwrap) {
  return function (value) {
    fn(state, value, unwrap);
  };
};

var internalReject = function (state, value, unwrap) {
  if (state.done) return;
  state.done = true;
  if (unwrap) state = unwrap;
  state.value = value;
  state.state = REJECTED;
  notify(state, true);
};

var internalResolve = function (state, value, unwrap) {
  if (state.done) return;
  state.done = true;
  if (unwrap) state = unwrap;
  try {
    if (state.facade === value) throw TypeError("Promise can't be resolved itself");
    var then = isThenable(value);
    if (then) {
      microtask(function () {
        var wrapper = { done: false };
        try {
          call(then, value,
            bind(internalResolve, wrapper, state),
            bind(internalReject, wrapper, state)
          );
        } catch (error) {
          internalReject(wrapper, error, state);
        }
      });
    } else {
      state.value = value;
      state.state = FULFILLED;
      notify(state, false);
    }
  } catch (error) {
    internalReject({ done: false }, error, state);
  }
};

// constructor polyfill
if (FORCED) {
  // 25.4.3.1 Promise(executor)
  PromiseConstructor = function Promise(executor) {
    anInstance(this, PromisePrototype);
    aCallable(executor);
    call(Internal, this);
    var state = getInternalState(this);
    try {
      executor(bind(internalResolve, state), bind(internalReject, state));
    } catch (error) {
      internalReject(state, error);
    }
  };
  PromisePrototype = PromiseConstructor.prototype;
  // eslint-disable-next-line no-unused-vars -- required for `.length`
  Internal = function Promise(executor) {
    setInternalState(this, {
      type: PROMISE,
      done: false,
      notified: false,
      parent: false,
      reactions: new Queue(),
      rejection: false,
      state: PENDING,
      value: undefined
    });
  };
  Internal.prototype = redefineAll(PromisePrototype, {
    // `Promise.prototype.then` method
    // https://tc39.es/ecma262/#sec-promise.prototype.then
    // eslint-disable-next-line unicorn/no-thenable -- safe
    then: function then(onFulfilled, onRejected) {
      var state = getInternalPromiseState(this);
      var reaction = newPromiseCapability(speciesConstructor(this, PromiseConstructor));
      state.parent = true;
      reaction.ok = isCallable(onFulfilled) ? onFulfilled : true;
      reaction.fail = isCallable(onRejected) && onRejected;
      reaction.domain = IS_NODE ? process.domain : undefined;
      if (state.state == PENDING) state.reactions.add(reaction);
      else microtask(function () {
        callReaction(reaction, state);
      });
      return reaction.promise;
    },
    // `Promise.prototype.catch` method
    // https://tc39.es/ecma262/#sec-promise.prototype.catch
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    var state = getInternalState(promise);
    this.promise = promise;
    this.resolve = bind(internalResolve, state);
    this.reject = bind(internalReject, state);
  };
  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return C === PromiseConstructor || C === PromiseWrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };

  if (!IS_PURE && isCallable(NativePromise) && NativePromisePrototype !== Object.prototype) {
    nativeThen = NativePromisePrototype.then;

    if (!SUBCLASSING) {
      // make `Promise#then` return a polyfilled `Promise` for native promise-based APIs
      redefine(NativePromisePrototype, 'then', function then(onFulfilled, onRejected) {
        var that = this;
        return new PromiseConstructor(function (resolve, reject) {
          call(nativeThen, that, resolve, reject);
        }).then(onFulfilled, onRejected);
      // https://github.com/zloirock/core-js/issues/640
      }, { unsafe: true });

      // makes sure that native promise-based APIs `Promise#catch` properly works with patched `Promise#then`
      redefine(NativePromisePrototype, 'catch', PromisePrototype['catch'], { unsafe: true });
    }

    // make `.constructor === Promise` work for native promise-based APIs
    try {
      delete NativePromisePrototype.constructor;
    } catch (error) { /* empty */ }

    // make `instanceof Promise` work for native promise-based APIs
    if (setPrototypeOf) {
      setPrototypeOf(NativePromisePrototype, PromisePrototype);
    }
  }
}

$({ global: true, wrap: true, forced: FORCED }, {
  Promise: PromiseConstructor
});

setToStringTag(PromiseConstructor, PROMISE, false, true);
setSpecies(PROMISE);

PromiseWrapper = getBuiltIn(PROMISE);

// statics
$({ target: PROMISE, stat: true, forced: FORCED }, {
  // `Promise.reject` method
  // https://tc39.es/ecma262/#sec-promise.reject
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    call(capability.reject, undefined, r);
    return capability.promise;
  }
});

$({ target: PROMISE, stat: true, forced: IS_PURE || FORCED }, {
  // `Promise.resolve` method
  // https://tc39.es/ecma262/#sec-promise.resolve
  resolve: function resolve(x) {
    return promiseResolve(IS_PURE && this === PromiseWrapper ? PromiseConstructor : this, x);
  }
});

$({ target: PROMISE, stat: true, forced: INCORRECT_ITERATION }, {
  // `Promise.all` method
  // https://tc39.es/ecma262/#sec-promise.all
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var $promiseResolve = aCallable(C.resolve);
      var values = [];
      var counter = 0;
      var remaining = 1;
      iterate(iterable, function (promise) {
        var index = counter++;
        var alreadyCalled = false;
        remaining++;
        call($promiseResolve, C, promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.error) reject(result.value);
    return capability.promise;
  },
  // `Promise.race` method
  // https://tc39.es/ecma262/#sec-promise.race
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      var $promiseResolve = aCallable(C.resolve);
      iterate(iterable, function (promise) {
        call($promiseResolve, C, promise).then(capability.resolve, reject);
      });
    });
    if (result.error) reject(result.value);
    return capability.promise;
  }
});

},{"../internals/a-callable":72,"../internals/an-instance":76,"../internals/check-correctness-of-iteration":87,"../internals/engine-is-browser":103,"../internals/engine-is-node":106,"../internals/engine-v8-version":109,"../internals/export":113,"../internals/function-call":118,"../internals/get-built-in":121,"../internals/global":125,"../internals/host-report-errors":128,"../internals/inspect-source":132,"../internals/internal-state":134,"../internals/is-callable":137,"../internals/is-forced":139,"../internals/is-object":140,"../internals/is-pure":141,"../internals/iterate":144,"../internals/microtask":149,"../internals/native-promise-constructor":150,"../internals/new-promise-capability":153,"../internals/object-set-prototype-of":168,"../internals/perform":173,"../internals/promise-resolve":174,"../internals/queue":175,"../internals/redefine":177,"../internals/redefine-all":176,"../internals/set-species":180,"../internals/set-to-string-tag":181,"../internals/species-constructor":185,"../internals/task":187,"../internals/well-known-symbol":202}],220:[function(_dereq_,module,exports){
'use strict';
var $ = _dereq_('../internals/export');
var uncurryThis = _dereq_('../internals/function-uncurry-this');
var notARegExp = _dereq_('../internals/not-a-regexp');
var requireObjectCoercible = _dereq_('../internals/require-object-coercible');
var toString = _dereq_('../internals/to-string');
var correctIsRegExpLogic = _dereq_('../internals/correct-is-regexp-logic');

var stringIndexOf = uncurryThis(''.indexOf);

// `String.prototype.includes` method
// https://tc39.es/ecma262/#sec-string.prototype.includes
$({ target: 'String', proto: true, forced: !correctIsRegExpLogic('includes') }, {
  includes: function includes(searchString /* , position = 0 */) {
    return !!~stringIndexOf(
      toString(requireObjectCoercible(this)),
      toString(notARegExp(searchString)),
      arguments.length > 1 ? arguments[1] : undefined
    );
  }
});

},{"../internals/correct-is-regexp-logic":92,"../internals/export":113,"../internals/function-uncurry-this":120,"../internals/not-a-regexp":155,"../internals/require-object-coercible":178,"../internals/to-string":196}],221:[function(_dereq_,module,exports){
'use strict';
var charAt = _dereq_('../internals/string-multibyte').charAt;
var toString = _dereq_('../internals/to-string');
var InternalStateModule = _dereq_('../internals/internal-state');
var defineIterator = _dereq_('../internals/define-iterator');

var STRING_ITERATOR = 'String Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(STRING_ITERATOR);

// `String.prototype[@@iterator]` method
// https://tc39.es/ecma262/#sec-string.prototype-@@iterator
defineIterator(String, 'String', function (iterated) {
  setInternalState(this, {
    type: STRING_ITERATOR,
    string: toString(iterated),
    index: 0
  });
// `%StringIteratorPrototype%.next` method
// https://tc39.es/ecma262/#sec-%stringiteratorprototype%.next
}, function next() {
  var state = getInternalState(this);
  var string = state.string;
  var index = state.index;
  var point;
  if (index >= string.length) return { value: undefined, done: true };
  point = charAt(string, index);
  state.index += point.length;
  return { value: point, done: false };
});

},{"../internals/define-iterator":98,"../internals/internal-state":134,"../internals/string-multibyte":186,"../internals/to-string":196}],222:[function(_dereq_,module,exports){
'use strict';
var $ = _dereq_('../internals/export');
var global = _dereq_('../internals/global');
var getBuiltIn = _dereq_('../internals/get-built-in');
var apply = _dereq_('../internals/function-apply');
var call = _dereq_('../internals/function-call');
var uncurryThis = _dereq_('../internals/function-uncurry-this');
var IS_PURE = _dereq_('../internals/is-pure');
var DESCRIPTORS = _dereq_('../internals/descriptors');
var NATIVE_SYMBOL = _dereq_('../internals/native-symbol');
var fails = _dereq_('../internals/fails');
var hasOwn = _dereq_('../internals/has-own-property');
var isArray = _dereq_('../internals/is-array');
var isCallable = _dereq_('../internals/is-callable');
var isObject = _dereq_('../internals/is-object');
var isPrototypeOf = _dereq_('../internals/object-is-prototype-of');
var isSymbol = _dereq_('../internals/is-symbol');
var anObject = _dereq_('../internals/an-object');
var toObject = _dereq_('../internals/to-object');
var toIndexedObject = _dereq_('../internals/to-indexed-object');
var toPropertyKey = _dereq_('../internals/to-property-key');
var $toString = _dereq_('../internals/to-string');
var createPropertyDescriptor = _dereq_('../internals/create-property-descriptor');
var nativeObjectCreate = _dereq_('../internals/object-create');
var objectKeys = _dereq_('../internals/object-keys');
var getOwnPropertyNamesModule = _dereq_('../internals/object-get-own-property-names');
var getOwnPropertyNamesExternal = _dereq_('../internals/object-get-own-property-names-external');
var getOwnPropertySymbolsModule = _dereq_('../internals/object-get-own-property-symbols');
var getOwnPropertyDescriptorModule = _dereq_('../internals/object-get-own-property-descriptor');
var definePropertyModule = _dereq_('../internals/object-define-property');
var definePropertiesModule = _dereq_('../internals/object-define-properties');
var propertyIsEnumerableModule = _dereq_('../internals/object-property-is-enumerable');
var arraySlice = _dereq_('../internals/array-slice');
var redefine = _dereq_('../internals/redefine');
var shared = _dereq_('../internals/shared');
var sharedKey = _dereq_('../internals/shared-key');
var hiddenKeys = _dereq_('../internals/hidden-keys');
var uid = _dereq_('../internals/uid');
var wellKnownSymbol = _dereq_('../internals/well-known-symbol');
var wrappedWellKnownSymbolModule = _dereq_('../internals/well-known-symbol-wrapped');
var defineWellKnownSymbol = _dereq_('../internals/define-well-known-symbol');
var setToStringTag = _dereq_('../internals/set-to-string-tag');
var InternalStateModule = _dereq_('../internals/internal-state');
var $forEach = _dereq_('../internals/array-iteration').forEach;

var HIDDEN = sharedKey('hidden');
var SYMBOL = 'Symbol';
var PROTOTYPE = 'prototype';
var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');

var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(SYMBOL);

var ObjectPrototype = Object[PROTOTYPE];
var $Symbol = global.Symbol;
var SymbolPrototype = $Symbol && $Symbol[PROTOTYPE];
var TypeError = global.TypeError;
var QObject = global.QObject;
var $stringify = getBuiltIn('JSON', 'stringify');
var nativeGetOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
var nativeDefineProperty = definePropertyModule.f;
var nativeGetOwnPropertyNames = getOwnPropertyNamesExternal.f;
var nativePropertyIsEnumerable = propertyIsEnumerableModule.f;
var push = uncurryThis([].push);

var AllSymbols = shared('symbols');
var ObjectPrototypeSymbols = shared('op-symbols');
var StringToSymbolRegistry = shared('string-to-symbol-registry');
var SymbolToStringRegistry = shared('symbol-to-string-registry');
var WellKnownSymbolsStore = shared('wks');

// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var USE_SETTER = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDescriptor = DESCRIPTORS && fails(function () {
  return nativeObjectCreate(nativeDefineProperty({}, 'a', {
    get: function () { return nativeDefineProperty(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (O, P, Attributes) {
  var ObjectPrototypeDescriptor = nativeGetOwnPropertyDescriptor(ObjectPrototype, P);
  if (ObjectPrototypeDescriptor) delete ObjectPrototype[P];
  nativeDefineProperty(O, P, Attributes);
  if (ObjectPrototypeDescriptor && O !== ObjectPrototype) {
    nativeDefineProperty(ObjectPrototype, P, ObjectPrototypeDescriptor);
  }
} : nativeDefineProperty;

var wrap = function (tag, description) {
  var symbol = AllSymbols[tag] = nativeObjectCreate(SymbolPrototype);
  setInternalState(symbol, {
    type: SYMBOL,
    tag: tag,
    description: description
  });
  if (!DESCRIPTORS) symbol.description = description;
  return symbol;
};

var $defineProperty = function defineProperty(O, P, Attributes) {
  if (O === ObjectPrototype) $defineProperty(ObjectPrototypeSymbols, P, Attributes);
  anObject(O);
  var key = toPropertyKey(P);
  anObject(Attributes);
  if (hasOwn(AllSymbols, key)) {
    if (!Attributes.enumerable) {
      if (!hasOwn(O, HIDDEN)) nativeDefineProperty(O, HIDDEN, createPropertyDescriptor(1, {}));
      O[HIDDEN][key] = true;
    } else {
      if (hasOwn(O, HIDDEN) && O[HIDDEN][key]) O[HIDDEN][key] = false;
      Attributes = nativeObjectCreate(Attributes, { enumerable: createPropertyDescriptor(0, false) });
    } return setSymbolDescriptor(O, key, Attributes);
  } return nativeDefineProperty(O, key, Attributes);
};

var $defineProperties = function defineProperties(O, Properties) {
  anObject(O);
  var properties = toIndexedObject(Properties);
  var keys = objectKeys(properties).concat($getOwnPropertySymbols(properties));
  $forEach(keys, function (key) {
    if (!DESCRIPTORS || call($propertyIsEnumerable, properties, key)) $defineProperty(O, key, properties[key]);
  });
  return O;
};

var $create = function create(O, Properties) {
  return Properties === undefined ? nativeObjectCreate(O) : $defineProperties(nativeObjectCreate(O), Properties);
};

var $propertyIsEnumerable = function propertyIsEnumerable(V) {
  var P = toPropertyKey(V);
  var enumerable = call(nativePropertyIsEnumerable, this, P);
  if (this === ObjectPrototype && hasOwn(AllSymbols, P) && !hasOwn(ObjectPrototypeSymbols, P)) return false;
  return enumerable || !hasOwn(this, P) || !hasOwn(AllSymbols, P) || hasOwn(this, HIDDEN) && this[HIDDEN][P]
    ? enumerable : true;
};

var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(O, P) {
  var it = toIndexedObject(O);
  var key = toPropertyKey(P);
  if (it === ObjectPrototype && hasOwn(AllSymbols, key) && !hasOwn(ObjectPrototypeSymbols, key)) return;
  var descriptor = nativeGetOwnPropertyDescriptor(it, key);
  if (descriptor && hasOwn(AllSymbols, key) && !(hasOwn(it, HIDDEN) && it[HIDDEN][key])) {
    descriptor.enumerable = true;
  }
  return descriptor;
};

var $getOwnPropertyNames = function getOwnPropertyNames(O) {
  var names = nativeGetOwnPropertyNames(toIndexedObject(O));
  var result = [];
  $forEach(names, function (key) {
    if (!hasOwn(AllSymbols, key) && !hasOwn(hiddenKeys, key)) push(result, key);
  });
  return result;
};

var $getOwnPropertySymbols = function getOwnPropertySymbols(O) {
  var IS_OBJECT_PROTOTYPE = O === ObjectPrototype;
  var names = nativeGetOwnPropertyNames(IS_OBJECT_PROTOTYPE ? ObjectPrototypeSymbols : toIndexedObject(O));
  var result = [];
  $forEach(names, function (key) {
    if (hasOwn(AllSymbols, key) && (!IS_OBJECT_PROTOTYPE || hasOwn(ObjectPrototype, key))) {
      push(result, AllSymbols[key]);
    }
  });
  return result;
};

// `Symbol` constructor
// https://tc39.es/ecma262/#sec-symbol-constructor
if (!NATIVE_SYMBOL) {
  $Symbol = function Symbol() {
    if (isPrototypeOf(SymbolPrototype, this)) throw TypeError('Symbol is not a constructor');
    var description = !arguments.length || arguments[0] === undefined ? undefined : $toString(arguments[0]);
    var tag = uid(description);
    var setter = function (value) {
      if (this === ObjectPrototype) call(setter, ObjectPrototypeSymbols, value);
      if (hasOwn(this, HIDDEN) && hasOwn(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDescriptor(this, tag, createPropertyDescriptor(1, value));
    };
    if (DESCRIPTORS && USE_SETTER) setSymbolDescriptor(ObjectPrototype, tag, { configurable: true, set: setter });
    return wrap(tag, description);
  };

  SymbolPrototype = $Symbol[PROTOTYPE];

  redefine(SymbolPrototype, 'toString', function toString() {
    return getInternalState(this).tag;
  });

  redefine($Symbol, 'withoutSetter', function (description) {
    return wrap(uid(description), description);
  });

  propertyIsEnumerableModule.f = $propertyIsEnumerable;
  definePropertyModule.f = $defineProperty;
  definePropertiesModule.f = $defineProperties;
  getOwnPropertyDescriptorModule.f = $getOwnPropertyDescriptor;
  getOwnPropertyNamesModule.f = getOwnPropertyNamesExternal.f = $getOwnPropertyNames;
  getOwnPropertySymbolsModule.f = $getOwnPropertySymbols;

  wrappedWellKnownSymbolModule.f = function (name) {
    return wrap(wellKnownSymbol(name), name);
  };

  if (DESCRIPTORS) {
    // https://github.com/tc39/proposal-Symbol-description
    nativeDefineProperty(SymbolPrototype, 'description', {
      configurable: true,
      get: function description() {
        return getInternalState(this).description;
      }
    });
    if (!IS_PURE) {
      redefine(ObjectPrototype, 'propertyIsEnumerable', $propertyIsEnumerable, { unsafe: true });
    }
  }
}

$({ global: true, wrap: true, forced: !NATIVE_SYMBOL, sham: !NATIVE_SYMBOL }, {
  Symbol: $Symbol
});

$forEach(objectKeys(WellKnownSymbolsStore), function (name) {
  defineWellKnownSymbol(name);
});

$({ target: SYMBOL, stat: true, forced: !NATIVE_SYMBOL }, {
  // `Symbol.for` method
  // https://tc39.es/ecma262/#sec-symbol.for
  'for': function (key) {
    var string = $toString(key);
    if (hasOwn(StringToSymbolRegistry, string)) return StringToSymbolRegistry[string];
    var symbol = $Symbol(string);
    StringToSymbolRegistry[string] = symbol;
    SymbolToStringRegistry[symbol] = string;
    return symbol;
  },
  // `Symbol.keyFor` method
  // https://tc39.es/ecma262/#sec-symbol.keyfor
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol');
    if (hasOwn(SymbolToStringRegistry, sym)) return SymbolToStringRegistry[sym];
  },
  useSetter: function () { USE_SETTER = true; },
  useSimple: function () { USE_SETTER = false; }
});

$({ target: 'Object', stat: true, forced: !NATIVE_SYMBOL, sham: !DESCRIPTORS }, {
  // `Object.create` method
  // https://tc39.es/ecma262/#sec-object.create
  create: $create,
  // `Object.defineProperty` method
  // https://tc39.es/ecma262/#sec-object.defineproperty
  defineProperty: $defineProperty,
  // `Object.defineProperties` method
  // https://tc39.es/ecma262/#sec-object.defineproperties
  defineProperties: $defineProperties,
  // `Object.getOwnPropertyDescriptor` method
  // https://tc39.es/ecma262/#sec-object.getownpropertydescriptors
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor
});

$({ target: 'Object', stat: true, forced: !NATIVE_SYMBOL }, {
  // `Object.getOwnPropertyNames` method
  // https://tc39.es/ecma262/#sec-object.getownpropertynames
  getOwnPropertyNames: $getOwnPropertyNames,
  // `Object.getOwnPropertySymbols` method
  // https://tc39.es/ecma262/#sec-object.getownpropertysymbols
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
// https://bugs.chromium.org/p/v8/issues/detail?id=3443
$({ target: 'Object', stat: true, forced: fails(function () { getOwnPropertySymbolsModule.f(1); }) }, {
  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
    return getOwnPropertySymbolsModule.f(toObject(it));
  }
});

// `JSON.stringify` method behavior with symbols
// https://tc39.es/ecma262/#sec-json.stringify
if ($stringify) {
  var FORCED_JSON_STRINGIFY = !NATIVE_SYMBOL || fails(function () {
    var symbol = $Symbol();
    // MS Edge converts symbol values to JSON as {}
    return $stringify([symbol]) != '[null]'
      // WebKit converts symbol values to JSON as null
      || $stringify({ a: symbol }) != '{}'
      // V8 throws on boxed symbols
      || $stringify(Object(symbol)) != '{}';
  });

  $({ target: 'JSON', stat: true, forced: FORCED_JSON_STRINGIFY }, {
    // eslint-disable-next-line no-unused-vars -- required for `.length`
    stringify: function stringify(it, replacer, space) {
      var args = arraySlice(arguments);
      var $replacer = replacer;
      if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
      if (!isArray(replacer)) replacer = function (key, value) {
        if (isCallable($replacer)) value = call($replacer, this, key, value);
        if (!isSymbol(value)) return value;
      };
      args[1] = replacer;
      return apply($stringify, null, args);
    }
  });
}

// `Symbol.prototype[@@toPrimitive]` method
// https://tc39.es/ecma262/#sec-symbol.prototype-@@toprimitive
if (!SymbolPrototype[TO_PRIMITIVE]) {
  var valueOf = SymbolPrototype.valueOf;
  // eslint-disable-next-line no-unused-vars -- required for .length
  redefine(SymbolPrototype, TO_PRIMITIVE, function (hint) {
    // TODO: improve hint logic
    return call(valueOf, this);
  });
}
// `Symbol.prototype[@@toStringTag]` property
// https://tc39.es/ecma262/#sec-symbol.prototype-@@tostringtag
setToStringTag($Symbol, SYMBOL);

hiddenKeys[HIDDEN] = true;

},{"../internals/an-object":77,"../internals/array-iteration":80,"../internals/array-slice":84,"../internals/create-property-descriptor":96,"../internals/define-well-known-symbol":99,"../internals/descriptors":100,"../internals/export":113,"../internals/fails":114,"../internals/function-apply":115,"../internals/function-call":118,"../internals/function-uncurry-this":120,"../internals/get-built-in":121,"../internals/global":125,"../internals/has-own-property":126,"../internals/hidden-keys":127,"../internals/internal-state":134,"../internals/is-array":136,"../internals/is-callable":137,"../internals/is-object":140,"../internals/is-pure":141,"../internals/is-symbol":143,"../internals/native-symbol":151,"../internals/object-create":156,"../internals/object-define-properties":157,"../internals/object-define-property":158,"../internals/object-get-own-property-descriptor":159,"../internals/object-get-own-property-names":161,"../internals/object-get-own-property-names-external":160,"../internals/object-get-own-property-symbols":162,"../internals/object-is-prototype-of":164,"../internals/object-keys":166,"../internals/object-property-is-enumerable":167,"../internals/redefine":177,"../internals/set-to-string-tag":181,"../internals/shared":184,"../internals/shared-key":182,"../internals/to-indexed-object":189,"../internals/to-object":192,"../internals/to-property-key":194,"../internals/to-string":196,"../internals/uid":198,"../internals/well-known-symbol":202,"../internals/well-known-symbol-wrapped":201}],223:[function(_dereq_,module,exports){
// TODO: Remove from `core-js@4`
_dereq_('../modules/es.aggregate-error');

},{"../modules/es.aggregate-error":203}],224:[function(_dereq_,module,exports){
// TODO: Remove from `core-js@4`
_dereq_('../modules/es.promise.all-settled.js');

},{"../modules/es.promise.all-settled.js":216}],225:[function(_dereq_,module,exports){
// TODO: Remove from `core-js@4`
_dereq_('../modules/es.promise.any');

},{"../modules/es.promise.any":217}],226:[function(_dereq_,module,exports){
'use strict';
var $ = _dereq_('../internals/export');
var newPromiseCapabilityModule = _dereq_('../internals/new-promise-capability');
var perform = _dereq_('../internals/perform');

// `Promise.try` method
// https://github.com/tc39/proposal-promise-try
$({ target: 'Promise', stat: true }, {
  'try': function (callbackfn) {
    var promiseCapability = newPromiseCapabilityModule.f(this);
    var result = perform(callbackfn);
    (result.error ? promiseCapability.reject : promiseCapability.resolve)(result.value);
    return promiseCapability.promise;
  }
});

},{"../internals/export":113,"../internals/new-promise-capability":153,"../internals/perform":173}],227:[function(_dereq_,module,exports){
_dereq_('../modules/es.array.iterator');
var DOMIterables = _dereq_('../internals/dom-iterables');
var global = _dereq_('../internals/global');
var classof = _dereq_('../internals/classof');
var createNonEnumerableProperty = _dereq_('../internals/create-non-enumerable-property');
var Iterators = _dereq_('../internals/iterators');
var wellKnownSymbol = _dereq_('../internals/well-known-symbol');

var TO_STRING_TAG = wellKnownSymbol('toStringTag');

for (var COLLECTION_NAME in DOMIterables) {
  var Collection = global[COLLECTION_NAME];
  var CollectionPrototype = Collection && Collection.prototype;
  if (CollectionPrototype && classof(CollectionPrototype) !== TO_STRING_TAG) {
    createNonEnumerableProperty(CollectionPrototype, TO_STRING_TAG, COLLECTION_NAME);
  }
  Iterators[COLLECTION_NAME] = Iterators.Array;
}

},{"../internals/classof":89,"../internals/create-non-enumerable-property":95,"../internals/dom-iterables":102,"../internals/global":125,"../internals/iterators":147,"../internals/well-known-symbol":202,"../modules/es.array.iterator":208}],228:[function(_dereq_,module,exports){
var parent = _dereq_('../../../es/array/virtual/for-each');

module.exports = parent;

},{"../../../es/array/virtual/for-each":56}],229:[function(_dereq_,module,exports){
var parent = _dereq_('../../es/instance/every');

module.exports = parent;

},{"../../es/instance/every":58}],230:[function(_dereq_,module,exports){
var parent = _dereq_('../../es/instance/filter');

module.exports = parent;

},{"../../es/instance/filter":59}],231:[function(_dereq_,module,exports){
_dereq_('../../modules/web.dom-collections.iterator');
var classof = _dereq_('../../internals/classof');
var hasOwn = _dereq_('../../internals/has-own-property');
var isPrototypeOf = _dereq_('../../internals/object-is-prototype-of');
var method = _dereq_('../array/virtual/for-each');

var ArrayPrototype = Array.prototype;

var DOMIterables = {
  DOMTokenList: true,
  NodeList: true
};

module.exports = function (it) {
  var own = it.forEach;
  return it === ArrayPrototype || (isPrototypeOf(ArrayPrototype, it) && own === ArrayPrototype.forEach)
    || hasOwn(DOMIterables, classof(it)) ? method : own;
};

},{"../../internals/classof":89,"../../internals/has-own-property":126,"../../internals/object-is-prototype-of":164,"../../modules/web.dom-collections.iterator":227,"../array/virtual/for-each":228}],232:[function(_dereq_,module,exports){
var parent = _dereq_('../../es/instance/includes');

module.exports = parent;

},{"../../es/instance/includes":60}],233:[function(_dereq_,module,exports){
var parent = _dereq_('../../es/json/stringify');

module.exports = parent;

},{"../../es/json/stringify":61}],234:[function(_dereq_,module,exports){
var parent = _dereq_('../../es/object/define-properties');

module.exports = parent;

},{"../../es/object/define-properties":62}],235:[function(_dereq_,module,exports){
var parent = _dereq_('../../es/object/define-property');

module.exports = parent;

},{"../../es/object/define-property":63}],236:[function(_dereq_,module,exports){
var parent = _dereq_('../../es/object/get-own-property-descriptor');

module.exports = parent;

},{"../../es/object/get-own-property-descriptor":64}],237:[function(_dereq_,module,exports){
var parent = _dereq_('../../es/object/get-own-property-descriptors');

module.exports = parent;

},{"../../es/object/get-own-property-descriptors":65}],238:[function(_dereq_,module,exports){
var parent = _dereq_('../../es/object/get-own-property-symbols');

module.exports = parent;

},{"../../es/object/get-own-property-symbols":66}],239:[function(_dereq_,module,exports){
var parent = _dereq_('../../es/object/keys');

module.exports = parent;

},{"../../es/object/keys":67}],240:[function(_dereq_,module,exports){
var parent = _dereq_('../../es/promise');
_dereq_('../../modules/web.dom-collections.iterator');

module.exports = parent;

},{"../../es/promise":68,"../../modules/web.dom-collections.iterator":227}],241:[function(_dereq_,module,exports){
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = GeneratorFunctionPrototype;
  define(Gp, "constructor", GeneratorFunctionPrototype);
  define(GeneratorFunctionPrototype, "constructor", GeneratorFunction);
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  });
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  define(Gp, iteratorSymbol, function() {
    return this;
  });

  define(Gp, "toString", function() {
    return "[object Generator]";
  });

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
  typeof module === "object" ? module.exports : {}
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, in modern engines
  // we can explicitly access globalThis. In older engines we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  if (typeof globalThis === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}

},{}]},{},[1])(1)
});
