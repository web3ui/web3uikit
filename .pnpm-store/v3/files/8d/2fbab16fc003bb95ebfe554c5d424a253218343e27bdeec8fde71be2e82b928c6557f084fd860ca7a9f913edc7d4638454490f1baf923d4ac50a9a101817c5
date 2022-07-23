"use strict";

var _typeof = require("@babel/runtime-corejs3/helpers/typeof");

var _WeakMap = require("@babel/runtime-corejs3/core-js-stable/weak-map");

var _reduceInstanceProperty = require("@babel/runtime-corejs3/core-js-stable/instance/reduce");

var _Object$keys2 = require("@babel/runtime-corejs3/core-js-stable/object/keys");

var _Object$create = require("@babel/runtime-corejs3/core-js-stable/object/create");

var _Symbol$replace = require("@babel/runtime-corejs3/core-js-stable/symbol/replace");

var _sliceInstanceProperty = require("@babel/runtime-corejs3/core-js-stable/instance/slice");

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime-corejs3/regenerator"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/inherits"));

var _setPrototypeOf2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/setPrototypeOf"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/slicedToArray"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/asyncToGenerator"));

var _freeze = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/freeze"));

var _map = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/map"));

var _entries = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/entries"));

var _forEach = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/for-each"));

var _keys = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/keys"));

var _isNan = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/number/is-nan"));

var _stringify = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/json/stringify"));

var _RESTController = _interopRequireDefault(require("./RESTController"));

function _wrapRegExp() {
  _wrapRegExp = function (re, groups) {
    return new BabelRegExp(re, void 0, groups);
  };

  var _super = RegExp.prototype,
      _groups = new _WeakMap();

  function BabelRegExp(re, flags, groups) {
    var _this = new RegExp(re, flags);

    return _groups.set(_this, groups || _groups.get(re)), (0, _setPrototypeOf2.default)(_this, BabelRegExp.prototype);
  }

  function buildGroups(result, re) {
    var _context10;

    var g = _groups.get(re);

    return _reduceInstanceProperty(_context10 = _Object$keys2(g)).call(_context10, function (groups, name) {
      return groups[name] = result[g[name]], groups;
    }, _Object$create(null));
  }

  return (0, _inherits2.default)(BabelRegExp, RegExp), BabelRegExp.prototype.exec = function (str) {
    var result = _super.exec.call(this, str);

    return result && (result.groups = buildGroups(result, this)), result;
  }, BabelRegExp.prototype[_Symbol$replace] = function (str, substitution) {
    if ("string" == typeof substitution) {
      var groups = _groups.get(this);

      return _super[_Symbol$replace].call(this, str, substitution.replace(/\$<([^>]+)>/g, function (_, name) {
        return "$" + groups[name];
      }));
    }

    if ("function" == typeof substitution) {
      var _this = this;

      return _super[_Symbol$replace].call(this, str, function () {
        var args = arguments;
        return "object" != _typeof(args[args.length - 1]) && (args = _sliceInstanceProperty([]).call(args)).push(buildGroups(args, _this)), substitution.apply(this, args);
      });
    }

    return _super[_Symbol$replace].call(this, str, substitution);
  }, _wrapRegExp.apply(this, arguments);
}

var DEEP_INDEX_API_HOST = 'deep-index.moralis.io';
var DEEP_INDEX_SWAGGER_PATH = '/api-docs/v2/swagger.json';
var TrackingEventName = (0, _freeze.default)({
  START_FUNCTION: 'Moralis SDK start'
});

var fetchSwaggerJson = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
    var _yield$RESTController, response;

    return _regenerator.default.wrap(function (_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _RESTController.default.ajax('GET', "https://".concat(DEEP_INDEX_API_HOST).concat(DEEP_INDEX_SWAGGER_PATH));

          case 2:
            _yield$RESTController = _context.sent;
            response = _yield$RESTController.response;
            return _context.abrupt("return", response);

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function () {
    return _ref.apply(this, arguments);
  };
}();

var getPathByTag = function (swaggerJSON) {
  var _context2;

  var pathByTag = {};
  var pathDetails = {};
  (0, _map.default)(_context2 = (0, _entries.default)(swaggerJSON.paths)).call(_context2, function (_ref2) {
    var _context3;

    var _ref3 = (0, _slicedToArray2.default)(_ref2, 2),
        pathName = _ref3[0],
        requestData = _ref3[1];

    return (0, _forEach.default)(_context3 = (0, _entries.default)(requestData)).call(_context3, function (_ref4) {
      var _ref5 = (0, _slicedToArray2.default)(_ref4, 2),
          method = _ref5[0],
          data = _ref5[1];

      var tags = data.tags;

      if (tags.length > 0) {
        if (!pathByTag[tags[0]]) {
          pathByTag[tags[0]] = [];
        }

        pathByTag[tags[0]].push(data.operationId);
        pathDetails[data.operationId] = {
          method: method,
          pathName: pathName,
          data: data
        };
      }
    });
  });
  return {
    pathByTag: pathByTag,
    pathDetails: pathDetails
  };
};

var fetchEndpoints = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2() {
    var _context4;

    var swaggerJSON, _yield$getPathByTag, pathDetails, data;

    return _regenerator.default.wrap(function (_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return fetchSwaggerJson();

          case 2:
            swaggerJSON = _context5.sent;
            _context5.next = 5;
            return getPathByTag(swaggerJSON);

          case 5:
            _yield$getPathByTag = _context5.sent;
            pathDetails = _yield$getPathByTag.pathDetails;
            data = [];
            (0, _forEach.default)(_context4 = (0, _keys.default)(pathDetails)).call(_context4, function (x) {
              var item = pathDetails[x];
              var endpoint = {
                method: item.method.toUpperCase(),
                group: item.data.tags[0],
                name: x,
                url: item.pathName.split('{').join(':').split('}').join('')
              };
              data.push(endpoint);
            });
            return _context5.abrupt("return", data);

          case 10:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee2);
  }));

  return function () {
    return _ref6.apply(this, arguments);
  };
}();
/**
 * Compares if the semantic version of version1 is larger than version2
 */


var isSemanticVersionLarger = function (version1, version2) {
  var _context6, _context7;

  var _version1$split = version1.split('-'),
      _version1$split2 = (0, _slicedToArray2.default)(_version1$split, 2),
      version1Main = _version1$split2[0],
      version1Pre = _version1$split2[1];

  var version1Arr = (0, _map.default)(_context6 = version1Main.split('.')).call(_context6, function (s) {
    return Number(s);
  });

  var _version2$split = version2.split('-'),
      _version2$split2 = (0, _slicedToArray2.default)(_version2$split, 2),
      version2Main = _version2$split2[0],
      version2Pre = _version2$split2[1];

  var version2Arr = (0, _map.default)(_context7 = version2Main.split('.')).call(_context7, function (s) {
    return Number(s);
  });

  for (var index = 0; index < 3; index++) {
    var compare1 = version1Arr[index];
    var compare2 = version2Arr[index];
    if (compare1 > compare2) return true;
    if (compare1 < compare2) return false;
    if (!(0, _isNan.default)(compare1) && (0, _isNan.default)(compare2)) return true;
    if ((0, _isNan.default)(compare1) && !(0, _isNan.default)(compare2)) return false;
  } // Compare pre-releasees if main versions are the same


  if (version1Pre && version2Pre) {
    var _version1Pre$split$, _version2Pre$split$;

    var version1PreNumber = (_version1Pre$split$ = version1Pre.split('.')[1]) !== null && _version1Pre$split$ !== void 0 ? _version1Pre$split$ : 0;
    var version2PreNumber = (_version2Pre$split$ = version2Pre.split('.')[1]) !== null && _version2Pre$split$ !== void 0 ? _version2Pre$split$ : 0;
    return version1PreNumber > version2PreNumber;
  } // If version2 is a pre-release and version1 is not, then version 1 is newer


  if (version2Pre) {
    return true;
  }

  return false;
};

var checkForSdkUpdates = /*#__PURE__*/function () {
  var _ref7 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3() {
    var _yield$RESTController2, response, latestVersion, installedVersion;

    return _regenerator.default.wrap(function (_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            _context8.prev = 0;
            _context8.next = 3;
            return _RESTController.default.ajax('GET', 'https://www.unpkg.com/moralis/package.json');

          case 3:
            _yield$RESTController2 = _context8.sent;
            response = _yield$RESTController2.response;
            latestVersion = response.version;
            installedVersion = "1.9.0";
            if (isSemanticVersionLarger(latestVersion, installedVersion)) // eslint-disable-next-line no-console
              console.warn("Moralis: You are not using the latest version of the SDK. Please update it as soon as possible to enjoy the newest features. Most recent version: ".concat(latestVersion));
            _context8.next = 12;
            break;

          case 10:
            _context8.prev = 10;
            _context8.t0 = _context8["catch"](0);

          case 12:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee3, null, [[0, 10]]);
  }));

  return function () {
    return _ref7.apply(this, arguments);
  };
}();

var trackEvent = /*#__PURE__*/function () {
  var _ref8 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee4(name, subdomain, options) {
    var _yield$RESTController3, response;

    return _regenerator.default.wrap(function (_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            _context9.prev = 0;
            _context9.next = 3;
            return _RESTController.default.ajax('POST', 'https://internal-api.moralis.io/api/functions/trackEvent', (0, _stringify.default)({
              subdomain: subdomain,
              event: name,
              options: options
            }), {
              Accept: 'application/json',
              'Content-Type': 'application/json'
            });

          case 3:
            _yield$RESTController3 = _context9.sent;
            response = _yield$RESTController3.response;
            return _context9.abrupt("return", response.result);

          case 8:
            _context9.prev = 8;
            _context9.t0 = _context9["catch"](0);

          case 10:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee4, null, [[0, 8]]);
  }));

  return function () {
    return _ref8.apply(this, arguments);
  };
}();
/**
 * Regex to validate serverUrl, for example: https://xxxxxxxxxxxx.yyyyyyyyyy.zzzzzz:1234/server
 * It's very generous and doesn't assume the value of domain, subdomain and port, it only checks if we can extract
 * a subddomain
 */


var validServerUrlRegex = /*#__PURE__*/_wrapRegExp(/^https?:\/\/([0-9A-Z_a-z]+\.[0-9A-Z_a-z]+\.[0-9A-Z_a-z]+)(:[0-9]{4})?\/server\/?$/, {
  subdomain: 1
});

var validateServerUrl = function (serverUrl) {
  return validServerUrlRegex.test(serverUrl);
};

var getSubdomain = function (serverUrl) {
  var _match$groups$subdoma, _match$groups;

  var isValidServerUrl = validateServerUrl(serverUrl);

  if (!isValidServerUrl) {
    return null;
  }

  var match = validServerUrlRegex.exec(serverUrl);
  return (_match$groups$subdoma = match === null || match === void 0 ? void 0 : (_match$groups = match.groups) === null || _match$groups === void 0 ? void 0 : _match$groups.subdomain) !== null && _match$groups$subdoma !== void 0 ? _match$groups$subdoma : null;
};

module.exports = {
  fetchSwaggerJson: fetchSwaggerJson,
  getPathByTag: getPathByTag,
  fetchEndpoints: fetchEndpoints,
  checkForSdkUpdates: checkForSdkUpdates,
  trackEvent: trackEvent,
  TrackingEventName: TrackingEventName,
  getSubdomain: getSubdomain
};