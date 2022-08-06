/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "URLWithHashParams": () => (/* reexport */ URLWithHashParams),
  "base64toJSON": () => (/* reexport */ base64toJSON),
  "base64url": () => (/* reexport */ base64url),
  "jsonToBase64": () => (/* reexport */ jsonToBase64),
  "keccak": () => (/* reexport */ keccak),
  "keccak256": () => (/* reexport */ keccak256),
  "randomId": () => (/* reexport */ randomId),
  "safeatob": () => (/* reexport */ safeatob),
  "safebtoa": () => (/* reexport */ safebtoa)
});

;// CONCATENATED MODULE: external "randombytes"
const external_randombytes_namespaceObject = require("randombytes");
var external_randombytes_default = /*#__PURE__*/__webpack_require__.n(external_randombytes_namespaceObject);
;// CONCATENATED MODULE: ./src/randomId.ts

const randomId = () => external_randombytes_default()(32).toString("hex");
;// CONCATENATED MODULE: external "@babel/runtime/helpers/defineProperty"
const defineProperty_namespaceObject = require("@babel/runtime/helpers/defineProperty");
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty_namespaceObject);
;// CONCATENATED MODULE: ./src/url.ts

class URLWithHashParams extends URL {
  constructor() {
    super(...arguments);

    defineProperty_default()(this, "hashParams", new URLSearchParams());
  }

  toString() {
    this.hash = this.hashParams.toString();
    return super.toString.call(this);
  }

}
;// CONCATENATED MODULE: external "base64url"
const external_base64url_namespaceObject = require("base64url");
var external_base64url_default = /*#__PURE__*/__webpack_require__.n(external_base64url_namespaceObject);
;// CONCATENATED MODULE: external "keccak"
const external_keccak_namespaceObject = require("keccak");
var external_keccak_default = /*#__PURE__*/__webpack_require__.n(external_keccak_namespaceObject);
;// CONCATENATED MODULE: ./src/utils.ts


const base64url = (external_base64url_default());
function safebtoa(str) {
  return base64url.encode(str);
}
function safeatob(str) {
  // Going backwards: from bytestream, to percent-encoding, to original string.
  return base64url.decode(str);
}
const keccak = (external_keccak_default());
function base64toJSON(b64str) {
  return JSON.parse(base64url.decode(b64str));
}
function jsonToBase64(json) {
  return base64url.encode(JSON.stringify(json));
}
function keccak256(str) {
  let input = str;

  if (typeof str === "string" && str.slice(0, 2) === "0x" && str.length === 66) {
    input = Buffer.from(str.slice(2), "hex");
  }

  const data = "0x".concat(keccak("keccak256").update(input).digest("hex").padStart(64, "0"));
  return data;
}
;// CONCATENATED MODULE: ./src/index.ts



module.exports = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=openloginUtils.cjs.js.map