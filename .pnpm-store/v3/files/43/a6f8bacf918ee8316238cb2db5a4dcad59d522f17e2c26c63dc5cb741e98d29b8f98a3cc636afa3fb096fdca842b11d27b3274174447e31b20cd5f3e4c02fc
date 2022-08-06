var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _RESTController = _interopRequireDefault(require("./RESTController"));

var DEEP_INDEX_API_HOST = 'deep-index.moralis.io';
var DEEP_INDEX_SWAGGER_PATH = '/api-docs/v2/swagger.json';
var TrackingEventName = Object.freeze({
  START_FUNCTION: 'Moralis SDK start'
});

var fetchSwaggerJson = function () {
  var _await$RESTController, response;

  return _regenerator.default.async(function (_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return _regenerator.default.awrap(_RESTController.default.ajax('GET', "https://" + DEEP_INDEX_API_HOST + DEEP_INDEX_SWAGGER_PATH));

        case 2:
          _await$RESTController = _context.sent;
          response = _await$RESTController.response;
          return _context.abrupt("return", response);

        case 5:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, null, Promise);
};

var getPathByTag = function (swaggerJSON) {
  var pathByTag = {};
  var pathDetails = {};
  Object.entries(swaggerJSON.paths).map(function (_ref) {
    var _ref2 = (0, _slicedToArray2.default)(_ref, 2),
        pathName = _ref2[0],
        requestData = _ref2[1];

    return Object.entries(requestData).forEach(function (_ref3) {
      var _ref4 = (0, _slicedToArray2.default)(_ref3, 2),
          method = _ref4[0],
          data = _ref4[1];

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

var fetchEndpoints = function () {
  var swaggerJSON, _await$getPathByTag, pathDetails, data;

  return _regenerator.default.async(function (_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return _regenerator.default.awrap(fetchSwaggerJson());

        case 2:
          swaggerJSON = _context2.sent;
          _context2.next = 5;
          return _regenerator.default.awrap(getPathByTag(swaggerJSON));

        case 5:
          _await$getPathByTag = _context2.sent;
          pathDetails = _await$getPathByTag.pathDetails;
          data = [];
          Object.keys(pathDetails).forEach(function (x) {
            var item = pathDetails[x];
            var endpoint = {
              method: item.method.toUpperCase(),
              group: item.data.tags[0],
              name: x,
              url: item.pathName.split('{').join(':').split('}').join('')
            };
            data.push(endpoint);
          });
          return _context2.abrupt("return", data);

        case 10:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, null, Promise);
};

var isSemanticVersionLarger = function (version1, version2) {
  var _version1$split = version1.split('-'),
      _version1$split2 = (0, _slicedToArray2.default)(_version1$split, 2),
      version1Main = _version1$split2[0],
      version1Pre = _version1$split2[1];

  var version1Arr = version1Main.split('.').map(function (s) {
    return Number(s);
  });

  var _version2$split = version2.split('-'),
      _version2$split2 = (0, _slicedToArray2.default)(_version2$split, 2),
      version2Main = _version2$split2[0],
      version2Pre = _version2$split2[1];

  var version2Arr = version2Main.split('.').map(function (s) {
    return Number(s);
  });

  for (var index = 0; index < 3; index++) {
    var compare1 = version1Arr[index];
    var compare2 = version2Arr[index];
    if (compare1 > compare2) return true;
    if (compare1 < compare2) return false;
    if (!Number.isNaN(compare1) && Number.isNaN(compare2)) return true;
    if (Number.isNaN(compare1) && !Number.isNaN(compare2)) return false;
  }

  if (version1Pre && version2Pre) {
    var _version1Pre$split$, _version2Pre$split$;

    var version1PreNumber = (_version1Pre$split$ = version1Pre.split('.')[1]) != null ? _version1Pre$split$ : 0;
    var version2PreNumber = (_version2Pre$split$ = version2Pre.split('.')[1]) != null ? _version2Pre$split$ : 0;
    return version1PreNumber > version2PreNumber;
  }

  if (version2Pre) {
    return true;
  }

  return false;
};

var checkForSdkUpdates = function () {
  var _await$RESTController2, response, latestVersion, installedVersion;

  return _regenerator.default.async(function (_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return _regenerator.default.awrap(_RESTController.default.ajax('GET', 'https://www.unpkg.com/moralis/package.json'));

        case 3:
          _await$RESTController2 = _context3.sent;
          response = _await$RESTController2.response;
          latestVersion = response.version;
          installedVersion = "1.9.0";
          if (isSemanticVersionLarger(latestVersion, installedVersion)) console.warn("Moralis: You are not using the latest version of the SDK. Please update it as soon as possible to enjoy the newest features. Most recent version: " + latestVersion);
          _context3.next = 12;
          break;

        case 10:
          _context3.prev = 10;
          _context3.t0 = _context3["catch"](0);

        case 12:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[0, 10]], Promise);
};

var trackEvent = function (name, subdomain, options) {
  var _await$RESTController3, response;

  return _regenerator.default.async(function (_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _context4.next = 3;
          return _regenerator.default.awrap(_RESTController.default.ajax('POST', 'https://internal-api.moralis.io/api/functions/trackEvent', JSON.stringify({
            subdomain: subdomain,
            event: name,
            options: options
          }), {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          }));

        case 3:
          _await$RESTController3 = _context4.sent;
          response = _await$RESTController3.response;
          return _context4.abrupt("return", response.result);

        case 8:
          _context4.prev = 8;
          _context4.t0 = _context4["catch"](0);

        case 10:
        case "end":
          return _context4.stop();
      }
    }
  }, null, null, [[0, 8]], Promise);
};

var validServerUrlRegex = /^https?:\/\/(?<subdomain>\w+\.\w+\.\w+)(:\d{4})?\/server\/?$/;

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
  return (_match$groups$subdoma = match == null ? void 0 : (_match$groups = match.groups) == null ? void 0 : _match$groups.subdomain) != null ? _match$groups$subdoma : null;
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