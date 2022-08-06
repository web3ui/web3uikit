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
  "GetOrSetNonceError": () => (/* reexport */ GetOrSetNonceError),
  "default": () => (/* reexport */ torus),
  "kCombinations": () => (/* reexport */ kCombinations),
  "keccak256": () => (/* reexport */ keccak256),
  "keyAssign": () => (/* reexport */ keyAssign),
  "keyLookup": () => (/* reexport */ keyLookup),
  "thresholdSame": () => (/* reexport */ thresholdSame),
  "waitKeyLookup": () => (/* reexport */ waitKeyLookup)
});

;// CONCATENATED MODULE: external "@babel/runtime/helpers/defineProperty"
const defineProperty_namespaceObject = require("@babel/runtime/helpers/defineProperty");
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty_namespaceObject);
;// CONCATENATED MODULE: external "@toruslabs/eccrypto"
const eccrypto_namespaceObject = require("@toruslabs/eccrypto");
;// CONCATENATED MODULE: external "@toruslabs/http-helpers"
const http_helpers_namespaceObject = require("@toruslabs/http-helpers");
;// CONCATENATED MODULE: external "bn.js"
const external_bn_js_namespaceObject = require("bn.js");
var external_bn_js_default = /*#__PURE__*/__webpack_require__.n(external_bn_js_namespaceObject);
;// CONCATENATED MODULE: external "elliptic"
const external_elliptic_namespaceObject = require("elliptic");
;// CONCATENATED MODULE: external "json-stable-stringify"
const external_json_stable_stringify_namespaceObject = require("json-stable-stringify");
var external_json_stable_stringify_default = /*#__PURE__*/__webpack_require__.n(external_json_stable_stringify_namespaceObject);
;// CONCATENATED MODULE: external "web3-utils"
const external_web3_utils_namespaceObject = require("web3-utils");
;// CONCATENATED MODULE: external "loglevel"
const external_loglevel_namespaceObject = require("loglevel");
var external_loglevel_default = /*#__PURE__*/__webpack_require__.n(external_loglevel_namespaceObject);
;// CONCATENATED MODULE: ./src/loglevel.ts

const log = external_loglevel_default().getLogger("torus.js");
log.disableAll();
/* harmony default export */ const loglevel = (log);
;// CONCATENATED MODULE: ./src/some.ts


function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

class SomeError extends Error {
  constructor(_ref) {
    let {
      errors,
      responses,
      predicate
    } = _ref;
    super("Unable to resolve enough promises.");

    defineProperty_default()(this, "errors", void 0);

    defineProperty_default()(this, "responses", void 0);

    defineProperty_default()(this, "predicate", void 0);

    this.errors = errors;
    this.responses = responses;
    this.predicate = predicate;
  }

}
const Some = (promises, predicate) => new Promise((resolve, reject) => {
  let finishedCount = 0;
  const sharedState = {
    resolved: false
  };
  const errorArr = new Array(promises.length).fill(undefined);
  const resultArr = new Array(promises.length).fill(undefined);
  let predicateError;
  return promises.forEach((x, index) => {
    return x.then(resp => {
      resultArr[index] = resp;
      return undefined;
    }).catch(error => {
      errorArr[index] = error;
    }) // eslint-disable-next-line promise/no-return-in-finally
    .finally(() => {
      if (sharedState.resolved) return;
      return predicate(resultArr.slice(0), sharedState).then(data => {
        sharedState.resolved = true;
        resolve(data);
        return undefined;
      }).catch(error => {
        // log only the last predicate error
        predicateError = error;
      }).finally(() => {
        finishedCount += 1;

        if (finishedCount === promises.length) {
          const errors = Object.values(resultArr.reduce((acc, z) => {
            if (z) {
              var _error$data;

              const {
                id,
                error
              } = z;

              if ((error === null || error === void 0 ? void 0 : (_error$data = error.data) === null || _error$data === void 0 ? void 0 : _error$data.length) > 0) {
                if (error.data.startsWith("Error occurred while verifying params")) acc[id] = capitalizeFirstLetter(error.data);else acc[id] = error.data;
              }
            }

            return acc;
          }, {}));

          if (errors.length > 0) {
            // Format-able errors
            const msg = errors.length > 1 ? `\n${errors.map(it => `• ${it}`).join("\n")}` : errors[0];
            reject(new Error(msg));
          } else {
            var _predicateError;

            reject(new SomeError({
              errors: errorArr,
              responses: resultArr,
              predicate: ((_predicateError = predicateError) === null || _predicateError === void 0 ? void 0 : _predicateError.message) || predicateError
            }));
          }
        }
      });
    });
  });
});
;// CONCATENATED MODULE: external "keccak"
const external_keccak_namespaceObject = require("keccak");
var external_keccak_default = /*#__PURE__*/__webpack_require__.n(external_keccak_namespaceObject);
;// CONCATENATED MODULE: ./src/utils.ts


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { defineProperty_default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }






class GetOrSetNonceError extends Error {}
const kCombinations = (s, k) => {
  let set = s;

  if (typeof set === "number") {
    set = Array.from({
      length: set
    }, (_, i) => i);
  }

  if (k > set.length || k <= 0) {
    return [];
  }

  if (k === set.length) {
    return [set];
  }

  if (k === 1) {
    return set.reduce((acc, cur) => [...acc, [cur]], []);
  }

  const combs = [];
  let tailCombs = [];

  for (let i = 0; i <= set.length - k + 1; i += 1) {
    tailCombs = kCombinations(set.slice(i + 1), k - 1);

    for (let j = 0; j < tailCombs.length; j += 1) {
      combs.push([set[i], ...tailCombs[j]]);
    }
  }

  return combs;
};
const thresholdSame = (arr, t) => {
  const hashMap = {};

  for (let i = 0; i < arr.length; i += 1) {
    const str = external_json_stable_stringify_default()(arr[i]);
    hashMap[str] = hashMap[str] ? hashMap[str] + 1 : 1;

    if (hashMap[str] === t) {
      return arr[i];
    }
  }

  return undefined;
};
const keyLookup = async (endpoints, verifier, verifierId) => {
  const lookupPromises = endpoints.map(x => (0,http_helpers_namespaceObject.post)(x, (0,http_helpers_namespaceObject.generateJsonRPCObject)("VerifierLookupRequest", {
    verifier,
    verifier_id: verifierId.toString()
  })).catch(err => loglevel.error("lookup request failed", err)));
  return Some(lookupPromises, lookupResults => {
    const lookupShares = lookupResults.filter(x1 => x1);
    const errorResult = thresholdSame(lookupShares.map(x2 => x2 && x2.error), ~~(endpoints.length / 2) + 1);
    const keyResult = thresholdSame(lookupShares.map(x3 => x3 && x3.result), ~~(endpoints.length / 2) + 1);

    if (keyResult || errorResult) {
      return Promise.resolve({
        keyResult,
        errorResult
      });
    }

    return Promise.reject(new Error(`invalid results ${JSON.stringify(lookupResults)}`));
  });
};
const waitKeyLookup = (endpoints, verifier, verifierId, timeout) => new Promise((resolve, reject) => {
  setTimeout(() => {
    keyLookup(endpoints, verifier, verifierId).then(resolve).catch(reject);
  }, timeout);
});
const keyAssign = async _ref => {
  let {
    endpoints,
    torusNodePubs,
    lastPoint,
    firstPoint,
    verifier,
    verifierId,
    signerHost,
    network
  } = _ref;
  let nodeNum;
  let initialPoint;

  if (lastPoint === undefined) {
    nodeNum = Math.floor(Math.random() * endpoints.length);
    initialPoint = nodeNum;
  } else {
    nodeNum = lastPoint % endpoints.length;
  }

  if (nodeNum === firstPoint) throw new Error("Looped through all");
  if (firstPoint !== undefined) initialPoint = firstPoint;
  const data = (0,http_helpers_namespaceObject.generateJsonRPCObject)("KeyAssign", {
    verifier,
    verifier_id: verifierId.toString()
  });

  try {
    const signedData = await (0,http_helpers_namespaceObject.post)(signerHost, data, {
      headers: {
        pubKeyX: torusNodePubs[nodeNum].X,
        pubKeyY: torusNodePubs[nodeNum].Y,
        network
      }
    }, {
      useAPIKey: true
    });
    return await (0,http_helpers_namespaceObject.post)(endpoints[nodeNum], _objectSpread(_objectSpread({}, data), signedData), {
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      }
    });
  } catch (error) {
    loglevel.error(error);
    const acceptedErrorMsgs = [// Slow node
    "Timed out", // Happens when the node is not reachable (dns issue etc)
    "TypeError: Failed to fetch", // All except iOS and Firefox
    "TypeError: cancelled", // iOS
    "TypeError: NetworkError when attempting to fetch resource." // Firefox
    ];
    if (acceptedErrorMsgs.includes(error.message)) return keyAssign({
      endpoints,
      torusNodePubs,
      lastPoint: nodeNum + 1,
      firstPoint: initialPoint,
      verifier,
      verifierId,
      signerHost,
      network
    });
    throw new Error(`Sorry, the Torus Network that powers Web3Auth is currently very busy.
    We will generate your key in time. Pls try again later. \n
    ${error.message || ""}`);
  }
};
function keccak256(a) {
  const hash = external_keccak_default()("keccak256").update(a).digest().toString("hex");
  return `0x${hash}`;
}
;// CONCATENATED MODULE: ./src/torus.ts


function torus_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function torus_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? torus_ownKeys(Object(source), !0).forEach(function (key) { defineProperty_default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : torus_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }









 // Implement threshold logic wrappers around public APIs
// of Torus nodes to handle malicious node responses

class Torus {
  constructor() {
    let {
      enableOneKey = false,
      metadataHost = "https://metadata.tor.us",
      allowHost = "https://signer.tor.us/api/allow",
      signerHost = "https://signer.tor.us/api/sign",
      serverTimeOffset = 0,
      network = "mainnet"
    } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    defineProperty_default()(this, "metadataHost", void 0);

    defineProperty_default()(this, "allowHost", void 0);

    defineProperty_default()(this, "serverTimeOffset", void 0);

    defineProperty_default()(this, "enableOneKey", void 0);

    defineProperty_default()(this, "signerHost", void 0);

    defineProperty_default()(this, "network", void 0);

    defineProperty_default()(this, "ec", void 0);

    this.ec = new external_elliptic_namespaceObject.ec("secp256k1");
    this.metadataHost = metadataHost;
    this.allowHost = allowHost;
    this.enableOneKey = enableOneKey;
    this.serverTimeOffset = serverTimeOffset || 0; // ms

    this.signerHost = signerHost;
    this.network = network;
  }

  static enableLogging() {
    let v = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
    if (v) loglevel.enableAll();else loglevel.disableAll();
  }

  static setAPIKey(apiKey) {
    (0,http_helpers_namespaceObject.setAPIKey)(apiKey);
  }

  static setEmbedHost(embedHost) {
    (0,http_helpers_namespaceObject.setEmbedHost)(embedHost);
  }

  static isGetOrSetNonceError(err) {
    return err instanceof GetOrSetNonceError;
  }
  /**
   * Note: use this function only for openlogin tkey account lookups.
   */


  async getUserTypeAndAddress(endpoints, torusNodePubs, _ref) {
    let {
      verifier,
      verifierId
    } = _ref;
    let doesKeyAssign = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
    const {
      keyResult,
      errorResult
    } = (await keyLookup(endpoints, verifier, verifierId)) || {};
    let isNewKey = false;
    let finalKeyResult;

    if (errorResult && JSON.stringify(errorResult).includes("Verifier + VerifierID has not yet been assigned")) {
      if (!doesKeyAssign) {
        throw new Error("Verifier + VerifierID has not yet been assigned");
      }

      await keyAssign({
        endpoints,
        torusNodePubs,
        lastPoint: undefined,
        firstPoint: undefined,
        verifier,
        verifierId,
        signerHost: this.signerHost,
        network: this.network
      });
      const assignResult = await waitKeyLookup(endpoints, verifier, verifierId, 1000);
      finalKeyResult = assignResult === null || assignResult === void 0 ? void 0 : assignResult.keyResult;
      isNewKey = true;
    } else if (keyResult) {
      finalKeyResult = keyResult;
    } else {
      throw new Error(`node results do not match at first lookup ${JSON.stringify(keyResult || {})}, ${JSON.stringify(errorResult || {})}`);
    }

    if (finalKeyResult) {
      const {
        pub_key_X: X,
        pub_key_Y: Y
      } = finalKeyResult.keys[0];
      let nonceResult;
      let nonce;
      let modifiedPubKey;

      try {
        nonceResult = await this.getOrSetNonce(X, Y, undefined, !isNewKey);
        nonce = new (external_bn_js_default())(nonceResult.nonce || "0", 16);
      } catch {
        throw new GetOrSetNonceError();
      }

      if (nonceResult.typeOfUser === "v1") {
        modifiedPubKey = this.ec.keyFromPublic({
          x: X,
          y: Y
        }).getPublic().add(this.ec.keyFromPrivate(nonce.toString(16)).getPublic());
      } else if (nonceResult.typeOfUser === "v2") {
        modifiedPubKey = this.ec.keyFromPublic({
          x: X,
          y: Y
        }).getPublic().add(this.ec.keyFromPublic({
          x: nonceResult.pubNonce.x,
          y: nonceResult.pubNonce.y
        }).getPublic());
      } else {
        throw new Error("getOrSetNonce should always return typeOfUser.");
      }

      const finalX = modifiedPubKey.getX().toString(16);
      const finalY = modifiedPubKey.getY().toString(16);
      const address = this.generateAddressFromPubKey(modifiedPubKey.getX(), modifiedPubKey.getY());
      if (nonceResult.typeOfUser === "v1") return {
        typeOfUser: nonceResult.typeOfUser,
        nonce,
        X: finalX,
        Y: finalY,
        address
      };else if (nonceResult.typeOfUser === "v2") {
        return {
          typeOfUser: nonceResult.typeOfUser,
          nonce,
          pubNonce: nonceResult.pubNonce,
          upgraded: nonceResult.upgraded,
          X: finalX,
          Y: finalY,
          address
        };
      }
    }

    throw new Error(`node results do not match at final lookup ${JSON.stringify(keyResult || {})}, ${JSON.stringify(errorResult || {})}`);
  }

  async setCustomKey(_ref2) {
    let {
      privKeyHex,
      metadataNonce,
      torusKeyHex,
      customKeyHex
    } = _ref2;
    let torusKey;

    if (torusKeyHex) {
      torusKey = new (external_bn_js_default())(torusKeyHex, 16);
    } else {
      const privKey = new (external_bn_js_default())(privKeyHex, 16);
      torusKey = privKey.sub(metadataNonce).umod(this.ec.curve.n);
    }

    const customKey = new (external_bn_js_default())(customKeyHex, 16);
    const newMetadataNonce = customKey.sub(torusKey).umod(this.ec.curve.n);
    const data = this.generateMetadataParams(newMetadataNonce.toString(16), torusKey);
    await this.setMetadata(data);
  }

  async retrieveShares(endpoints, indexes, verifier, verifierParams, idToken) {
    let extraParams = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : {};
    const promiseArr = [];
    await (0,http_helpers_namespaceObject.get)(this.allowHost, {
      headers: {
        verifier,
        verifier_id: verifierParams.verifier_id,
        network: this.network
      }
    }, {
      useAPIKey: true
    });
    /*
      CommitmentRequestParams struct {
        MessagePrefix      string `json:"messageprefix"`
        TokenCommitment    string `json:"tokencommitment"`
        TempPubX           string `json:"temppubx"`
        TempPubY           string `json:"temppuby"`
        VerifierIdentifier string `json:"verifieridentifier"`
      } 
      */
    // generate temporary private and public key that is used to secure receive shares

    const tmpKey = (0,eccrypto_namespaceObject.generatePrivate)();
    const pubKey = (0,eccrypto_namespaceObject.getPublic)(tmpKey).toString("hex");
    const pubKeyX = pubKey.slice(2, 66);
    const pubKeyY = pubKey.slice(66);
    const tokenCommitment = keccak256(idToken); // make commitment requests to endpoints

    for (let i = 0; i < endpoints.length; i += 1) {
      const p = (0,http_helpers_namespaceObject.post)(endpoints[i], (0,http_helpers_namespaceObject.generateJsonRPCObject)("CommitmentRequest", {
        messageprefix: "mug00",
        tokencommitment: tokenCommitment.slice(2),
        temppubx: pubKeyX,
        temppuby: pubKeyY,
        verifieridentifier: verifier
      })).catch(err => {
        loglevel.error("commitment", err);
      });
      promiseArr.push(p);
    }
    /*
      ShareRequestParams struct {
        Item []bijson.RawMessage `json:"item"`
      }
      ShareRequestItem struct {
        IDToken            string          `json:"idtoken"`
        NodeSignatures     []NodeSignature `json:"nodesignatures"`
        VerifierIdentifier string          `json:"verifieridentifier"`
      }
      NodeSignature struct {
        Signature   string
        Data        string
        NodePubKeyX string
        NodePubKeyY string
      }
      CommitmentRequestResult struct {
        Signature string `json:"signature"`
        Data      string `json:"data"`
        NodePubX  string `json:"nodepubx"`
        NodePubY  string `json:"nodepuby"`
      }
      */
    // send share request once k + t number of commitment requests have completed


    return Some(promiseArr, resultArr => {
      const completedRequests = resultArr.filter(x => {
        if (!x || typeof x !== "object") {
          return false;
        }

        if (x.error) {
          return false;
        }

        return true;
      });

      if (completedRequests.length >= ~~(endpoints.length / 4) * 3 + 1) {
        return Promise.resolve(resultArr);
      }

      return Promise.reject(new Error(`invalid ${JSON.stringify(resultArr)}`));
    }).then(responses => {
      const promiseArrRequest = [];
      const nodeSigs = [];

      for (let i = 0; i < responses.length; i += 1) {
        if (responses[i]) nodeSigs.push(responses[i].result);
      }

      for (let i = 0; i < endpoints.length; i += 1) {
        // eslint-disable-next-line promise/no-nesting
        const p = (0,http_helpers_namespaceObject.post)(endpoints[i], (0,http_helpers_namespaceObject.generateJsonRPCObject)("ShareRequest", {
          encrypted: "yes",
          item: [torus_objectSpread(torus_objectSpread({}, verifierParams), {}, {
            idtoken: idToken,
            nodesignatures: nodeSigs,
            verifieridentifier: verifier
          }, extraParams)]
        })).catch(err => loglevel.error("share req", err));
        promiseArrRequest.push(p);
      }

      return Some(promiseArrRequest, async (shareResponses, sharedState) => {
        /*
            ShareRequestResult struct {
              Keys []KeyAssignment
            }
                    / KeyAssignmentPublic -
            type KeyAssignmentPublic struct {
              Index     big.Int
              PublicKey common.Point
              Threshold int
              Verifiers map[string][]string // Verifier => VerifierID
            }
             // KeyAssignment -
            type KeyAssignment struct {
              KeyAssignmentPublic
              Share big.Int // Or Si
            }
          */
        // check if threshold number of nodes have returned the same user public key
        const completedRequests = shareResponses.filter(x => x);
        const thresholdPublicKey = thresholdSame(shareResponses.map(x => x && x.result && x.result.keys[0].PublicKey), ~~(endpoints.length / 2) + 1); // optimistically run lagrange interpolation once threshold number of shares have been received
        // this is matched against the user public key to ensure that shares are consistent

        if (completedRequests.length >= ~~(endpoints.length / 2) + 1 && thresholdPublicKey) {
          const sharePromises = [];
          const nodeIndexes = [];

          for (let i = 0; i < shareResponses.length; i += 1) {
            var _currentShareResponse, _currentShareResponse2;

            const currentShareResponse = shareResponses[i];

            if ((currentShareResponse === null || currentShareResponse === void 0 ? void 0 : (_currentShareResponse = currentShareResponse.result) === null || _currentShareResponse === void 0 ? void 0 : (_currentShareResponse2 = _currentShareResponse.keys) === null || _currentShareResponse2 === void 0 ? void 0 : _currentShareResponse2.length) > 0) {
              currentShareResponse.result.keys.sort((a, b) => new (external_bn_js_default())(a.Index, 16).cmp(new (external_bn_js_default())(b.Index, 16)));
              const firstKey = currentShareResponse.result.keys[0];

              if (firstKey.Metadata) {
                const metadata = {
                  ephemPublicKey: Buffer.from(firstKey.Metadata.ephemPublicKey, "hex"),
                  iv: Buffer.from(firstKey.Metadata.iv, "hex"),
                  mac: Buffer.from(firstKey.Metadata.mac, "hex") // mode: Buffer.from(firstKey.Metadata.mode, "hex"),

                };
                sharePromises.push( // eslint-disable-next-line promise/no-nesting
                (0,eccrypto_namespaceObject.decrypt)(tmpKey, torus_objectSpread(torus_objectSpread({}, metadata), {}, {
                  ciphertext: Buffer.from(Buffer.from(firstKey.Share, "base64").toString("binary").padStart(64, "0"), "hex")
                })).catch(err => loglevel.debug("share decryption", err)));
              } else {
                sharePromises.push(Promise.resolve(Buffer.from(firstKey.Share.padStart(64, "0"), "hex")));
              }
            } else {
              sharePromises.push(Promise.resolve(undefined));
            }

            nodeIndexes.push(new (external_bn_js_default())(indexes[i], 16));
          }

          const sharesResolved = await Promise.all(sharePromises);
          if (sharedState.resolved) return undefined;
          const decryptedShares = sharesResolved.reduce((acc, curr, index) => {
            if (curr) acc.push({
              index: nodeIndexes[index],
              value: new (external_bn_js_default())(curr)
            });
            return acc;
          }, []); // run lagrange interpolation on all subsets, faster in the optimistic scenario than berlekamp-welch due to early exit

          const allCombis = kCombinations(decryptedShares.length, ~~(endpoints.length / 2) + 1);
          let privateKey = null;

          for (let j = 0; j < allCombis.length; j += 1) {
            const currentCombi = allCombis[j];
            const currentCombiShares = decryptedShares.filter((v, index) => currentCombi.includes(index));
            const shares = currentCombiShares.map(x => x.value);
            const indices = currentCombiShares.map(x => x.index);
            const derivedPrivateKey = this.lagrangeInterpolation(shares, indices);
            if (!derivedPrivateKey) continue;
            const decryptedPubKey = (0,eccrypto_namespaceObject.getPublic)(Buffer.from(derivedPrivateKey.toString(16, 64), "hex")).toString("hex");
            const decryptedPubKeyX = decryptedPubKey.slice(2, 66);
            const decryptedPubKeyY = decryptedPubKey.slice(66);

            if (new (external_bn_js_default())(decryptedPubKeyX, 16).cmp(new (external_bn_js_default())(thresholdPublicKey.X, 16)) === 0 && new (external_bn_js_default())(decryptedPubKeyY, 16).cmp(new (external_bn_js_default())(thresholdPublicKey.Y, 16)) === 0) {
              privateKey = derivedPrivateKey;
              break;
            }
          }

          if (privateKey === undefined || privateKey === null) {
            throw new Error("could not derive private key");
          }

          return privateKey;
        }

        throw new Error("invalid");
      });
    }).then(async returnedKey => {
      let privateKey = returnedKey;
      if (!privateKey) throw new Error("Invalid private key returned");
      const decryptedPubKey = (0,eccrypto_namespaceObject.getPublic)(Buffer.from(privateKey.toString(16, 64), "hex")).toString("hex");
      const decryptedPubKeyX = decryptedPubKey.slice(2, 66);
      const decryptedPubKeyY = decryptedPubKey.slice(66);
      let metadataNonce;

      if (this.enableOneKey) {
        const {
          nonce
        } = await this.getNonce(decryptedPubKeyX, decryptedPubKeyY, privateKey);
        metadataNonce = new (external_bn_js_default())(nonce || "0", 16);
      } else {
        metadataNonce = await this.getMetadata({
          pub_key_X: decryptedPubKeyX,
          pub_key_Y: decryptedPubKeyY
        });
      }

      loglevel.debug("> torus.js/retrieveShares", {
        privKey: privateKey.toString(16),
        metadataNonce: metadataNonce.toString(16)
      });
      privateKey = privateKey.add(metadataNonce).umod(this.ec.curve.n);
      const ethAddress = this.generateAddressFromPrivKey(privateKey);
      loglevel.debug("> torus.js/retrieveShares", {
        ethAddress,
        privKey: privateKey.toString(16)
      }); // return reconstructed private key and ethereum address

      return {
        ethAddress,
        privKey: privateKey.toString("hex", 64),
        metadataNonce
      };
    });
  }

  async getMetadata(data) {
    let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    try {
      const metadataResponse = await (0,http_helpers_namespaceObject.post)(`${this.metadataHost}/get`, data, options, {
        useAPIKey: true
      });

      if (!metadataResponse || !metadataResponse.message) {
        return new (external_bn_js_default())(0);
      }

      return new (external_bn_js_default())(metadataResponse.message, 16); // nonce
    } catch (error) {
      loglevel.error("get metadata error", error);
      return new (external_bn_js_default())(0);
    }
  }

  generateMetadataParams(message, privateKey) {
    const key = this.ec.keyFromPrivate(privateKey.toString("hex", 64));
    const setData = {
      data: message,
      timestamp: new (external_bn_js_default())(~~(this.serverTimeOffset + Date.now() / 1000)).toString(16)
    };
    const sig = key.sign(keccak256(external_json_stable_stringify_default()(setData)).slice(2));
    return {
      pub_key_X: key.getPublic().getX().toString("hex"),
      pub_key_Y: key.getPublic().getY().toString("hex"),
      set_data: setData,
      signature: Buffer.from(sig.r.toString(16, 64) + sig.s.toString(16, 64) + new (external_bn_js_default())("").toString(16, 2), "hex").toString("base64")
    };
  }

  async setMetadata(data) {
    let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    try {
      const metadataResponse = await (0,http_helpers_namespaceObject.post)(`${this.metadataHost}/set`, data, options, {
        useAPIKey: true
      });
      return metadataResponse.message; // IPFS hash
    } catch (error) {
      loglevel.error("set metadata error", error);
      return "";
    }
  }

  lagrangeInterpolation(shares, nodeIndex) {
    if (shares.length !== nodeIndex.length) {
      return null;
    }

    let secret = new (external_bn_js_default())(0);

    for (let i = 0; i < shares.length; i += 1) {
      let upper = new (external_bn_js_default())(1);
      let lower = new (external_bn_js_default())(1);

      for (let j = 0; j < shares.length; j += 1) {
        if (i !== j) {
          upper = upper.mul(nodeIndex[j].neg());
          upper = upper.umod(this.ec.curve.n);
          let temp = nodeIndex[i].sub(nodeIndex[j]);
          temp = temp.umod(this.ec.curve.n);
          lower = lower.mul(temp).umod(this.ec.curve.n);
        }
      }

      let delta = upper.mul(lower.invm(this.ec.curve.n)).umod(this.ec.curve.n);
      delta = delta.mul(shares[i]).umod(this.ec.curve.n);
      secret = secret.add(delta);
    }

    return secret.umod(this.ec.curve.n);
  }

  generateAddressFromPrivKey(privateKey) {
    const key = this.ec.keyFromPrivate(privateKey.toString("hex", 64), "hex");
    const publicKey = key.getPublic().encode("hex", false).slice(2);
    loglevel.info(publicKey, "public key");
    const ethAddressLower = `0x${keccak256(Buffer.from(publicKey, "hex")).slice(64 - 38)}`;
    return (0,external_web3_utils_namespaceObject.toChecksumAddress)(ethAddressLower);
  }

  generateAddressFromPubKey(publicKeyX, publicKeyY) {
    const key = this.ec.keyFromPublic({
      x: publicKeyX.toString("hex", 64),
      y: publicKeyY.toString("hex", 64)
    });
    const publicKey = key.getPublic().encode("hex", false).slice(2);
    loglevel.info(key.getPublic().encode("hex", false), "public key");
    const ethAddressLower = `0x${keccak256(Buffer.from(publicKey, "hex")).slice(64 - 38)}`;
    return (0,external_web3_utils_namespaceObject.toChecksumAddress)(ethAddressLower);
  }
  /**
   * Note: use this function only with custom auth, don't use to lookup openlogin accounts.
   */


  async getPublicAddress(endpoints, torusNodePubs, _ref3) {
    let {
      verifier,
      verifierId
    } = _ref3;
    let isExtended = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
    loglevel.debug("> torus.js/getPublicAddress", {
      endpoints,
      torusNodePubs,
      verifier,
      verifierId,
      isExtended
    });
    let finalKeyResult;
    let isNewKey = false;
    const {
      keyResult,
      errorResult
    } = (await keyLookup(endpoints, verifier, verifierId)) || {};

    if (errorResult && JSON.stringify(errorResult).includes("Verifier not supported")) {
      // change error msg
      throw new Error(`Verifier not supported. Check if you: \n
      1. Are on the right network (Torus testnet/mainnet) \n
      2. Have setup a verifier on dashboard.web3auth.io?`);
    } else if (errorResult && JSON.stringify(errorResult).includes("Verifier + VerifierID has not yet been assigned")) {
      await keyAssign({
        endpoints,
        torusNodePubs,
        lastPoint: undefined,
        firstPoint: undefined,
        verifier,
        verifierId,
        signerHost: this.signerHost,
        network: this.network
      });
      const assignResult = await waitKeyLookup(endpoints, verifier, verifierId, 1000);
      finalKeyResult = assignResult === null || assignResult === void 0 ? void 0 : assignResult.keyResult;
      isNewKey = true;
    } else if (keyResult) {
      finalKeyResult = keyResult;
    } else {
      throw new Error(`node results do not match at first lookup ${JSON.stringify(keyResult || {})}, ${JSON.stringify(errorResult || {})}`);
    }

    loglevel.debug("> torus.js/getPublicAddress", {
      finalKeyResult,
      isNewKey
    });

    if (finalKeyResult) {
      var _nonce;

      let {
        pub_key_X: X,
        pub_key_Y: Y
      } = finalKeyResult.keys[0];
      let nonceResult;
      let nonce;
      let modifiedPubKey;
      let typeOfUser;
      let pubNonce;

      if (this.enableOneKey) {
        try {
          nonceResult = await this.getOrSetNonce(X, Y, undefined, !isNewKey);
          nonce = new (external_bn_js_default())(nonceResult.nonce || "0", 16);
          typeOfUser = nonceResult.typeOfUser;
        } catch {
          throw new GetOrSetNonceError();
        }

        if (nonceResult.typeOfUser === "v1") {
          modifiedPubKey = this.ec.keyFromPublic({
            x: X,
            y: Y
          }).getPublic().add(this.ec.keyFromPrivate(nonce.toString(16)).getPublic());
        } else if (nonceResult.typeOfUser === "v2") {
          if (nonceResult.upgraded) {
            // OneKey is upgraded to 2/n, returned address is address of Torus key (postbox key), not tKey
            modifiedPubKey = this.ec.keyFromPublic({
              x: X,
              y: Y
            }).getPublic();
          } else {
            modifiedPubKey = this.ec.keyFromPublic({
              x: X,
              y: Y
            }).getPublic().add(this.ec.keyFromPublic({
              x: nonceResult.pubNonce.x,
              y: nonceResult.pubNonce.y
            }).getPublic());
            pubNonce = nonceResult.pubNonce;
          }
        } else {
          throw new Error("getOrSetNonce should always return typeOfUser.");
        }
      } else {
        typeOfUser = "v1";
        nonce = await this.getMetadata({
          pub_key_X: X,
          pub_key_Y: Y
        });
        modifiedPubKey = this.ec.keyFromPublic({
          x: X,
          y: Y
        }).getPublic().add(this.ec.keyFromPrivate(nonce.toString(16)).getPublic());
      }

      X = modifiedPubKey.getX().toString(16);
      Y = modifiedPubKey.getY().toString(16);
      const address = this.generateAddressFromPubKey(modifiedPubKey.getX(), modifiedPubKey.getY());
      loglevel.debug("> torus.js/getPublicAddress", {
        X,
        Y,
        address,
        typeOfUser,
        nonce: (_nonce = nonce) === null || _nonce === void 0 ? void 0 : _nonce.toString(16),
        pubNonce
      });
      if (!isExtended) return address;
      return {
        typeOfUser,
        address,
        X,
        Y,
        metadataNonce: nonce,
        pubNonce
      };
    }

    throw new Error(`node results do not match at final lookup ${JSON.stringify(keyResult || {})}, ${JSON.stringify(errorResult || {})}`);
  }
  /**
   * Internal functions for OneKey (OpenLogin v2), only call these functions if you know what you're doing
   */


  async getOrSetNonce(X, Y, privKey) {
    let getOnly = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
    let data;
    const msg = getOnly ? "getNonce" : "getOrSetNonce";

    if (privKey) {
      data = this.generateMetadataParams(msg, privKey);
    } else {
      data = {
        pub_key_X: X,
        pub_key_Y: Y,
        set_data: {
          data: msg
        }
      };
    }

    return (0,http_helpers_namespaceObject.post)(`${this.metadataHost}/get_or_set_nonce`, data, undefined, {
      useAPIKey: true
    });
  }

  async getNonce(X, Y, privKey) {
    return this.getOrSetNonce(X, Y, privKey, true);
  }

  getPostboxKeyFrom1OutOf1(privKey, nonce) {
    const privKeyBN = new (external_bn_js_default())(privKey, 16);
    const nonceBN = new (external_bn_js_default())(nonce, 16);
    return privKeyBN.sub(nonceBN).umod(this.ec.curve.n).toString("hex");
  }

}

/* harmony default export */ const torus = (Torus);
;// CONCATENATED MODULE: ./src/index.ts



module.exports = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=torusUtils.cjs.js.map