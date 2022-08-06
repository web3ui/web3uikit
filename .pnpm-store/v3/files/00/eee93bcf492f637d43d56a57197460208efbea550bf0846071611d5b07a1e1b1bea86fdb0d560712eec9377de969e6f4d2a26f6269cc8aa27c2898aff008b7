import _defineProperty from '@babel/runtime/helpers/defineProperty';
import merge from 'lodash.merge';
import logLevel, { levels } from 'loglevel';

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
const log = logLevel.getLogger("http-helpers");
log.setLevel(levels.INFO);
let apiKey = "torus-default";
let embedHost = ""; // #region API Keys

const gatewayAuthHeader = "x-api-key";
const gatewayEmbedHostHeader = "x-embed-host";
let sentry = null;
const tracingOrigins = [];
const tracingPaths = [];
function enableSentryTracing(_sentry, _tracingOrigins, _tracingPaths) {
  sentry = _sentry;
  tracingOrigins.push(..._tracingOrigins);
  tracingPaths.push(..._tracingPaths);
}
function setEmbedHost(embedHost_) {
  embedHost = embedHost_;
}
function clearEmbedHost() {
  embedHost = "";
}
function getEmbedHost() {
  return embedHost;
}
function setAPIKey(apiKey_) {
  apiKey = apiKey_;
}
function clearAPIKey() {
  apiKey = "torus-default";
}
function getAPIKey() {
  return apiKey;
} // #endregion

function setLogLevel(level) {
  log.setLevel(level);
}

async function fetchAndTrace(url, init) {
  let _url = null;

  try {
    _url = new URL(url);
  } catch (error) {}

  if (sentry && _url && (tracingOrigins.includes(_url.origin) || tracingPaths.includes(_url.pathname))) {
    const transaction = sentry.startTransaction({
      name: url
    });
    const span = transaction.startChild({
      op: "http"
    }); // This function returns a Span

    const response = await fetch(url, init);
    span.finish(); // Remember that only finished spans will be sent with the transaction

    transaction.finish(); // Finishing the transaction will send it to Sentry

    return response;
  }

  return fetch(url, init);
}

function getApiKeyHeaders() {
  const headers = {};
  if (apiKey) headers[gatewayAuthHeader] = apiKey;
  if (embedHost) headers[gatewayEmbedHostHeader] = embedHost;
  return headers;
}

function debugLogResponse(response) {
  log.info("Response: ".concat(response.status, " ").concat(response.statusText));
  log.info("Url: ".concat(response.url));
}

const promiseTimeout = (ms, promise) => {
  const timeout = new Promise((resolve, reject) => {
    const id = setTimeout(() => {
      clearTimeout(id);
      reject(new Error("Timed out in ".concat(ms, "ms")));
    }, ms);
  });
  return Promise.race([promise, timeout]);
};
const get = async function (url) {
  let options_ = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  let customOptions = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  const defaultOptions = {
    mode: "cors",
    headers: {}
  };

  if (customOptions.useAPIKey) {
    defaultOptions.headers = _objectSpread(_objectSpread({}, defaultOptions.headers), getApiKeyHeaders());
  }

  const options = merge(defaultOptions, options_, {
    method: "GET"
  });
  const response = await fetchAndTrace(url, options);

  if (response.ok) {
    return response.json();
  }

  debugLogResponse(response);
  throw response;
};
const post = function (url) {
  let data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  let options_ = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  let customOptions = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  const defaultOptions = {
    mode: "cors",
    headers: {
      "Content-Type": "application/json; charset=utf-8"
    }
  };

  if (customOptions.useAPIKey) {
    defaultOptions.headers = _objectSpread(_objectSpread({}, defaultOptions.headers), getApiKeyHeaders());
  }

  const options = merge(defaultOptions, options_, {
    method: "POST"
  }); // deep merge changes the structure of form data and url encoded data ,
  // so we should not deepmerge body data

  if (customOptions.isUrlEncodedData) {
    // for multipart request browser/client will add multipart content type
    // along with multipart boundary , so for multipart request send
    // content-type: undefined or send with multipart boundary if already known
    options.body = data; // If url encoded data, this must not be the content type

    if (options.headers["Content-Type"] === "application/json; charset=utf-8") delete options.headers["Content-Type"];
  } else {
    options.body = JSON.stringify(data);
  }

  return promiseTimeout(customOptions.timeout || 60000, fetchAndTrace(url, options).then(response => {
    if (response.ok) {
      return response.json();
    }

    debugLogResponse(response);
    throw response;
  }));
};
const patch = async function (url) {
  let data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  let options_ = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  let customOptions = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  const defaultOptions = {
    mode: "cors",
    headers: {
      "Content-Type": "application/json; charset=utf-8"
    }
  }; // for multipart request browser/client will add multipart content type
  // along with multipart boundary , so for multipart request send
  // content-type: undefined or send with multipart boundary if already known

  if (customOptions.useAPIKey) {
    defaultOptions.headers = _objectSpread(_objectSpread({}, defaultOptions.headers), getApiKeyHeaders());
  }

  const options = merge(defaultOptions, options_, {
    method: "PATCH"
  }); // deep merge changes the structure of form data and url encoded data ,
  // so we should not deepmerge body data

  if (customOptions.isUrlEncodedData) {
    // for multipart request browser/client will add multipart content type
    // along with multipart boundary , so for multipart request send
    // content-type: undefined or send with multipart boundary if already known
    options.body = data; // If url encoded data, this must not be the content type

    if (options.headers["Content-Type"] === "application/json; charset=utf-8") delete options.headers["Content-Type"];
  } else {
    options.body = JSON.stringify(data);
  }

  const response = await fetchAndTrace(url, options);

  if (response.ok) {
    return response.json();
  }

  debugLogResponse(response);
  throw response;
};
const remove = async function (url) {
  let data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  let options_ = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  let customOptions = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  const defaultOptions = {
    mode: "cors",
    headers: {
      "Content-Type": "application/json; charset=utf-8"
    }
  }; // for multipart request browser/client will add multipart content type
  // along with multipart boundary , so for multipart request send
  // content-type: undefined or send with multipart boundary if already known

  if (customOptions.useAPIKey) {
    defaultOptions.headers = _objectSpread(_objectSpread({}, defaultOptions.headers), getApiKeyHeaders());
  }

  const options = merge(defaultOptions, options_, {
    method: "DELETE"
  });

  if (customOptions.isUrlEncodedData) {
    // for multipart request browser/client will add multipart content type
    // along with multipart boundary , so for multipart request send
    // content-type: undefined or send with multipart boundary if already known
    options.body = data; // If url encoded data, this must not be the content type

    if (options.headers["Content-Type"] === "application/json; charset=utf-8") delete options.headers["Content-Type"];
  } else {
    options.body = JSON.stringify(data);
  }

  const response = await fetchAndTrace(url, options);

  if (response.ok) {
    return response.json();
  }

  debugLogResponse(response);
  throw response;
};
const generateJsonRPCObject = (method, parameters) => ({
  jsonrpc: "2.0",
  method,
  id: 10,
  params: parameters
});
const promiseRace = function (url, options) {
  let timeout = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 60000;
  return Promise.race([get(url, options), new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error("timed out"));
    }, timeout);
  })]);
};

export { clearAPIKey, clearEmbedHost, enableSentryTracing, gatewayAuthHeader, gatewayEmbedHostHeader, generateJsonRPCObject, get, getAPIKey, getEmbedHost, patch, post, promiseRace, promiseTimeout, remove, setAPIKey, setEmbedHost, setLogLevel };
//# sourceMappingURL=httpHelpers.esm.js.map
