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
  "getED25519Key": () => (/* reexport */ getED25519Key)
});

;// CONCATENATED MODULE: external "@toruslabs/tweetnacl-js"
const tweetnacl_js_namespaceObject = require("@toruslabs/tweetnacl-js");
var tweetnacl_js_default = /*#__PURE__*/__webpack_require__.n(tweetnacl_js_namespaceObject);
;// CONCATENATED MODULE: ./src/utils.ts

const l = (tweetnacl_js_default()).lowlevel;
function getED25519Key(privateKey) {
  let privKey;

  if (typeof privateKey === "string") {
    privKey = Buffer.from(privateKey, "hex");
  } else {
    privKey = privateKey;
  } // Implementation copied from tweetnacl


  const d = new Uint8Array(64);
  const p = [l.gf(), l.gf(), l.gf(), l.gf()];
  const sk = new Uint8Array([...new Uint8Array(privKey), ...new Uint8Array(32)]);
  const pk = new Uint8Array(32);
  l.crypto_hash(d, sk, 32);
  d[0] &= 248;
  d[31] &= 127;
  d[31] |= 64;
  l.scalarbase(p, d);
  l.pack(pk, p);

  for (let i = 0; i < 32; i += 1) sk[i + 32] = pk[i];

  return {
    sk: Buffer.from(sk),
    pk: Buffer.from(pk)
  };
}
;// CONCATENATED MODULE: ./src/index.ts

module.exports = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=openloginEd25519.cjs.js.map