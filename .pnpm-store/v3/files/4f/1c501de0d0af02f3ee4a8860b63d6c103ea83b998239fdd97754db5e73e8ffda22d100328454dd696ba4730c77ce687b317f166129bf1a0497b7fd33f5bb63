"use strict";

var _RESTController = _interopRequireDefault(require("./RESTController"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _wrapRegExp() {
  _wrapRegExp = function (re, groups) {
    return new BabelRegExp(re, void 0, groups);
  };

  var _super = RegExp.prototype,
      _groups = new WeakMap();

  function BabelRegExp(re, flags, groups) {
    var _this = new RegExp(re, flags);

    return _groups.set(_this, groups || _groups.get(re)), _setPrototypeOf(_this, BabelRegExp.prototype);
  }

  function buildGroups(result, re) {
    var g = _groups.get(re);

    return Object.keys(g).reduce(function (groups, name) {
      return groups[name] = result[g[name]], groups;
    }, Object.create(null));
  }

  return _inherits(BabelRegExp, RegExp), BabelRegExp.prototype.exec = function (str) {
    var result = _super.exec.call(this, str);

    return result && (result.groups = buildGroups(result, this)), result;
  }, BabelRegExp.prototype[Symbol.replace] = function (str, substitution) {
    if ("string" == typeof substitution) {
      var groups = _groups.get(this);

      return _super[Symbol.replace].call(this, str, substitution.replace(/\$<([^>]+)>/g, function (_, name) {
        return "$" + groups[name];
      }));
    }

    if ("function" == typeof substitution) {
      var _this = this;

      return _super[Symbol.replace].call(this, str, function () {
        var args = arguments;
        return "object" != typeof args[args.length - 1] && (args = [].slice.call(args)).push(buildGroups(args, _this)), substitution.apply(this, args);
      });
    }

    return _super[Symbol.replace].call(this, str, substitution);
  }, _wrapRegExp.apply(this, arguments);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function (o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

const DEEP_INDEX_API_HOST = 'deep-index.moralis.io';
const DEEP_INDEX_SWAGGER_PATH = '/api-docs/v2/swagger.json';
const TrackingEventName = Object.freeze({
  START_FUNCTION: 'Moralis SDK start'
});

const fetchSwaggerJson = async () => {
  const {
    response
  } = await _RESTController.default.ajax('GET', `https://${DEEP_INDEX_API_HOST}${DEEP_INDEX_SWAGGER_PATH}`);
  return response;
};

const getPathByTag = swaggerJSON => {
  const pathByTag = {};
  const pathDetails = {};
  Object.entries(swaggerJSON.paths).map(([pathName, requestData]) => {
    return Object.entries(requestData).forEach(([method, data]) => {
      const {
        tags
      } = data;

      if (tags.length > 0) {
        if (!pathByTag[tags[0]]) {
          pathByTag[tags[0]] = [];
        }

        pathByTag[tags[0]].push(data.operationId);
        pathDetails[data.operationId] = {
          method,
          pathName,
          data
        };
      }
    });
  });
  return {
    pathByTag,
    pathDetails
  };
};

const fetchEndpoints = async () => {
  const swaggerJSON = await fetchSwaggerJson();
  const {
    pathDetails
  } = await getPathByTag(swaggerJSON);
  const data = [];
  Object.keys(pathDetails).forEach(x => {
    const item = pathDetails[x];
    const endpoint = {
      method: item.method.toUpperCase(),
      group: item.data.tags[0],
      name: x,
      url: item.pathName.split('{').join(':').split('}').join('')
    };
    data.push(endpoint);
  });
  return data;
};
/**
 * Compares if the semantic version of version1 is larger than version2
 */


const isSemanticVersionLarger = (version1, version2) => {
  const [version1Main, version1Pre] = version1.split('-');
  const version1Arr = version1Main.split('.').map(s => Number(s));
  const [version2Main, version2Pre] = version2.split('-');
  const version2Arr = version2Main.split('.').map(s => Number(s));

  for (let index = 0; index < 3; index++) {
    const compare1 = version1Arr[index];
    const compare2 = version2Arr[index];
    if (compare1 > compare2) return true;
    if (compare1 < compare2) return false;
    if (!Number.isNaN(compare1) && Number.isNaN(compare2)) return true;
    if (Number.isNaN(compare1) && !Number.isNaN(compare2)) return false;
  } // Compare pre-releasees if main versions are the same


  if (version1Pre && version2Pre) {
    var _version1Pre$split$, _version2Pre$split$;

    const version1PreNumber = (_version1Pre$split$ = version1Pre.split('.')[1]) !== null && _version1Pre$split$ !== void 0 ? _version1Pre$split$ : 0;
    const version2PreNumber = (_version2Pre$split$ = version2Pre.split('.')[1]) !== null && _version2Pre$split$ !== void 0 ? _version2Pre$split$ : 0;
    return version1PreNumber > version2PreNumber;
  } // If version2 is a pre-release and version1 is not, then version 1 is newer


  if (version2Pre) {
    return true;
  }

  return false;
};

const checkForSdkUpdates = async () => {
  try {
    const {
      response
    } = await _RESTController.default.ajax('GET', 'https://www.unpkg.com/moralis/package.json');
    const latestVersion = response.version;
    if (isSemanticVersionLarger(latestVersion, "1.9.0")) // eslint-disable-next-line no-console
      console.warn(`Moralis: You are not using the latest version of the SDK. Please update it as soon as possible to enjoy the newest features. Most recent version: ${latestVersion}`);
  } catch (error) {// Cannot verify version, might be network error etc. We don't bother showing anything in that case
  }
};

const trackEvent = async (name, subdomain, options) => {
  try {
    const {
      response
    } = await _RESTController.default.ajax('POST', 'https://internal-api.moralis.io/api/functions/trackEvent', JSON.stringify({
      subdomain,
      event: name,
      options
    }), {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    });
    return response.result;
  } catch (error) {//
  }
};
/**
 * Regex to validate serverUrl, for example: https://xxxxxxxxxxxx.yyyyyyyyyy.zzzzzz:1234/server
 * It's very generous and doesn't assume the value of domain, subdomain and port, it only checks if we can extract
 * a subddomain
 */


const validServerUrlRegex = /*#__PURE__*/_wrapRegExp(/^https?:\/\/([0-9A-Z_a-z]+\.[0-9A-Z_a-z]+\.[0-9A-Z_a-z]+)(:[0-9]{4})?\/server\/?$/, {
  subdomain: 1
});

const validateServerUrl = serverUrl => {
  return validServerUrlRegex.test(serverUrl);
};

const getSubdomain = serverUrl => {
  var _match$groups$subdoma, _match$groups;

  const isValidServerUrl = validateServerUrl(serverUrl);

  if (!isValidServerUrl) {
    return null;
  }

  const match = validServerUrlRegex.exec(serverUrl);
  return (_match$groups$subdoma = match === null || match === void 0 ? void 0 : (_match$groups = match.groups) === null || _match$groups === void 0 ? void 0 : _match$groups.subdomain) !== null && _match$groups$subdoma !== void 0 ? _match$groups$subdoma : null;
};

module.exports = {
  fetchSwaggerJson,
  getPathByTag,
  fetchEndpoints,
  checkForSdkUpdates,
  trackEvent,
  TrackingEventName,
  getSubdomain
};