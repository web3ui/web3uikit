/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 809:
/***/ ((module) => {

module.exports = require("node-fetch");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "decryptData": () => (/* reexport */ decryptData),
  "default": () => (/* reexport */ src_MetadataStorageLayer),
  "ec": () => (/* reexport */ ec),
  "encParamsBufToHex": () => (/* reexport */ encParamsBufToHex),
  "encParamsHexToBuf": () => (/* reexport */ encParamsHexToBuf),
  "encryptAndSetData": () => (/* reexport */ encryptAndSetData),
  "encryptData": () => (/* reexport */ encryptData),
  "getAndDecryptData": () => (/* reexport */ getAndDecryptData),
  "getDeviceShare": () => (/* reexport */ getDeviceShare),
  "getTorusShare": () => (/* reexport */ getTorusShare),
  "keccak256": () => (/* reexport */ keccak256),
  "setDeviceShare": () => (/* reexport */ setDeviceShare),
  "setTorusShare": () => (/* reexport */ setTorusShare)
});

;// CONCATENATED MODULE: external "@babel/runtime/helpers/defineProperty"
const defineProperty_namespaceObject = require("@babel/runtime/helpers/defineProperty");
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty_namespaceObject);
;// CONCATENATED MODULE: external "lodash.merge"
const external_lodash_merge_namespaceObject = require("lodash.merge");
var external_lodash_merge_default = /*#__PURE__*/__webpack_require__.n(external_lodash_merge_namespaceObject);
;// CONCATENATED MODULE: external "loglevel"
const external_loglevel_namespaceObject = require("loglevel");
var external_loglevel_default = /*#__PURE__*/__webpack_require__.n(external_loglevel_namespaceObject);
;// CONCATENATED MODULE: ./node_modules/@toruslabs/http-helpers/dist/httpHelpers.esm.js
/* provided dependency */ var fetch = __webpack_require__(809)["default"];




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { defineProperty_default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
const log = external_loglevel_default().getLogger("http-helpers");
log.setLevel(external_loglevel_namespaceObject.levels.INFO);
let apiKey = "torus-default";
let embedHost = ""; // #region API Keys

const gatewayAuthHeader = "x-api-key";
const gatewayEmbedHostHeader = "x-embed-host";
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
  const response = await fetch(url, options);

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

  const options = external_lodash_merge_default()(defaultOptions, options_, {
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

  return promiseTimeout(customOptions.timeout || 60000, fetch(url, options).then(response => {
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

  const response = await fetch(url, options);

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

  const response = await fetch(url, options);

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


//# sourceMappingURL=httpHelpers.esm.js.map

;// CONCATENATED MODULE: external "json-stable-stringify"
const external_json_stable_stringify_namespaceObject = require("json-stable-stringify");
var external_json_stable_stringify_default = /*#__PURE__*/__webpack_require__.n(external_json_stable_stringify_namespaceObject);
;// CONCATENATED MODULE: external "elliptic"
const external_elliptic_namespaceObject = require("elliptic");
;// CONCATENATED MODULE: external "keccak"
const external_keccak_namespaceObject = require("keccak");
var external_keccak_default = /*#__PURE__*/__webpack_require__.n(external_keccak_namespaceObject);
;// CONCATENATED MODULE: ./src/utils.ts


function keccak256(a) {
  return external_keccak_default()("keccak256").update(a).digest();
}
const ec = new external_elliptic_namespaceObject.ec("secp256k1");
;// CONCATENATED MODULE: ./src/MetadataStorageLayer.ts


function MetadataStorageLayer_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function MetadataStorageLayer_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? MetadataStorageLayer_ownKeys(Object(source), !0).forEach(function (key) { defineProperty_default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : MetadataStorageLayer_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }





class MetadataStorageLayer {
  // ms
  constructor() {
    let metadataHost = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "https://metadata.tor.us";
    let serverTimeOffset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

    defineProperty_default()(this, "metadataHost", void 0);

    defineProperty_default()(this, "serverTimeOffset", void 0);

    this.metadataHost = metadataHost;
    this.serverTimeOffset = serverTimeOffset;
  }

  static setAPIKey(apiKey) {
    setAPIKey(apiKey);
  }

  static setEmbedHost(embedHost) {
    setEmbedHost(embedHost);
  }

  generateMetadataParams(message, privateKeyHex) {
    var _ref, _sig$recoveryParam;

    const key = ec.keyFromPrivate(privateKeyHex, "hex");
    const setData = {
      data: message,
      timestamp: Math.floor(this.serverTimeOffset + Date.now() / 1000).toString(16)
    };
    const sig = key.sign(keccak256(external_json_stable_stringify_default()(setData)));
    return {
      pub_key_X: key.getPublic().getX().toString("hex"),
      pub_key_Y: key.getPublic().getY().toString("hex"),
      set_data: setData,
      signature: Buffer.from((_ref = sig.r.toString(16, 64) + sig.s.toString(16, 64) + ((_sig$recoveryParam = sig.recoveryParam) === null || _sig$recoveryParam === void 0 ? void 0 : _sig$recoveryParam.toString(16).padStart(2, "0").slice(-2))) !== null && _ref !== void 0 ? _ref : "00", "hex").toString("base64")
    };
  }

  generatePubKeyParams(privateKeyHex) {
    const key = ec.keyFromPrivate(privateKeyHex, "hex");
    return {
      pub_key_X: key.getPublic().getX().toString("hex"),
      pub_key_Y: key.getPublic().getY().toString("hex")
    };
  }

  async setMetadata(data, namespace, options) {
    const params = namespace !== null ? MetadataStorageLayer_objectSpread(MetadataStorageLayer_objectSpread({}, data), {}, {
      namespace
    }) : data;
    const metadataResponse = await post("".concat(this.metadataHost, "/set"), params, options, {
      useAPIKey: true
    });
    return metadataResponse.message;
  }

  async getMetadata(pubKey, namespace, options) {
    const params = namespace !== null ? MetadataStorageLayer_objectSpread(MetadataStorageLayer_objectSpread({}, pubKey), {}, {
      namespace
    }) : pubKey;
    const metadataResponse = await post("".concat(this.metadataHost, "/get"), params, options, {
      useAPIKey: true
    });
    return metadataResponse.message;
  }

}

/* harmony default export */ const src_MetadataStorageLayer = (MetadataStorageLayer);
;// CONCATENATED MODULE: external "@toruslabs/eccrypto"
const eccrypto_namespaceObject = require("@toruslabs/eccrypto");
;// CONCATENATED MODULE: ./src/webAuthnShareResolver.ts


const WEBAUTHN_TORUS_SHARE = "webauthn_torus_share";
const WEBAUTHN_DEVICE_SHARE = "webauthn_device_share";
function encParamsHexToBuf(encParamsHex) {
  return {
    iv: Buffer.from(encParamsHex.iv, "hex"),
    ephemPublicKey: Buffer.from(encParamsHex.ephemPublicKey, "hex"),
    ciphertext: Buffer.from(encParamsHex.ciphertext, "hex"),
    mac: Buffer.from(encParamsHex.mac, "hex")
  };
}
function encParamsBufToHex(encParams) {
  return {
    iv: Buffer.from(encParams.iv).toString("hex"),
    ephemPublicKey: Buffer.from(encParams.ephemPublicKey).toString("hex"),
    ciphertext: Buffer.from(encParams.ciphertext).toString("hex"),
    mac: Buffer.from(encParams.mac).toString("hex")
  };
}
async function encryptData(privKeyHex, d) {
  const serializedDec = JSON.stringify(d);
  const serializedBuf = Buffer.from(serializedDec, "utf-8");
  const encParams = await (0,eccrypto_namespaceObject.encrypt)((0,eccrypto_namespaceObject.getPublic)(Buffer.from(privKeyHex, "hex")), serializedBuf);
  const encParamsHex = encParamsBufToHex(encParams);
  const sData = JSON.stringify(encParamsHex);
  return sData;
}
async function decryptData(privKeyHex, d) {
  const encParamsHex = JSON.parse(d);
  const encParams = encParamsHexToBuf(encParamsHex);
  const keyPair = ec.keyFromPrivate(privKeyHex);
  const serializedBuf = await (0,eccrypto_namespaceObject.decrypt)(Buffer.from(keyPair.getPrivate().toString("hex", 64), "hex"), encParams);
  const serializedDec = serializedBuf.toString("utf-8");
  const data = JSON.parse(serializedDec);
  return data;
}
async function getAndDecryptData(m, privKeyHex, namespace) {
  const keyPair = ec.keyFromPrivate(privKeyHex);
  const pubKey = keyPair.getPublic();
  const serializedData = await m.getMetadata({
    pub_key_X: pubKey.getX().toString(16),
    pub_key_Y: pubKey.getY().toString(16)
  }, namespace);

  if (!serializedData) {
    return null;
  }

  const data = await decryptData(privKeyHex, serializedData);
  return data;
}
async function encryptAndSetData(m, privKeyHex, d, namespace) {
  const sData = await encryptData(privKeyHex, d);
  const metadataParams = m.generateMetadataParams(sData, privKeyHex);
  await m.setMetadata(metadataParams, namespace);
}
async function setTorusShare(m, webAuthnPubKey, webAuthnRefHex, subspace, subspaceData) {
  const refKeyPair = ec.keyFromPrivate(webAuthnRefHex);
  const privKey = refKeyPair.getPrivate();
  const pubKey = ec.keyFromPublic({
    x: webAuthnPubKey.pub_key_X,
    y: webAuthnPubKey.pub_key_Y
  });
  const data = await getAndDecryptData(m, webAuthnRefHex, WEBAUTHN_TORUS_SHARE);
  let d = {};
  if (data) d = data;
  const serializedSubspaceData = JSON.stringify(subspaceData);
  const serializedSubspaceDataBuf = Buffer.from(serializedSubspaceData, "utf-8");
  const encSubspaceData = await (0,eccrypto_namespaceObject.encrypt)(Buffer.from(pubKey.getPublic("hex"), "hex"), serializedSubspaceDataBuf);
  const encSubspaceDataHex = encParamsBufToHex(encSubspaceData);
  d[subspace] = encSubspaceDataHex;
  await encryptAndSetData(m, privKey.toString("hex", 64), d, WEBAUTHN_TORUS_SHARE);
}
async function setDeviceShare(m, webAuthnRefHex, subspace, subspaceData) {
  const keyPair = ec.keyFromPrivate(webAuthnRefHex);
  const privKey = keyPair.getPrivate();
  const data = await getAndDecryptData(m, webAuthnRefHex, WEBAUTHN_DEVICE_SHARE);
  let d = {};
  if (data) d = data;
  d[subspace] = subspaceData;
  await encryptAndSetData(m, privKey.toString("hex", 64), d, WEBAUTHN_DEVICE_SHARE);
}
async function getTorusShare(m, webAuthnKeyHex, webAuthnRefHex, subspace) {
  const data = await getAndDecryptData(m, webAuthnRefHex, WEBAUTHN_TORUS_SHARE);
  if (!data) return null;
  const encParamsHex = data[subspace];
  if (!encParamsHex) return null;
  const encParams = encParamsHexToBuf(encParamsHex);
  const keyPair = ec.keyFromPrivate(webAuthnKeyHex);
  const privKey = keyPair.getPrivate();
  const serializedSubspaceDataBuf = await (0,eccrypto_namespaceObject.decrypt)(Buffer.from(privKey.toString("hex", 64), "hex"), encParams);
  const serializedSubspaceData = serializedSubspaceDataBuf.toString("utf-8");
  const subspaceData = JSON.parse(serializedSubspaceData);
  return subspaceData;
}
async function getDeviceShare(m, webAuthnRefHex, subspace) {
  const data = await getAndDecryptData(m, webAuthnRefHex, WEBAUTHN_DEVICE_SHARE);
  if (data) return data[subspace];
  return null;
}
;// CONCATENATED MODULE: ./src/index.ts




})();

module.exports = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=metadataHelpers-node.js.map