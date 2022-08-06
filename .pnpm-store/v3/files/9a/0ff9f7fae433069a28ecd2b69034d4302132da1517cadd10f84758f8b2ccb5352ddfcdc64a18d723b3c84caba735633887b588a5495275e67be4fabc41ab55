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
  "BaseProvider": () => (/* reexport */ BaseProvider),
  "CommonPrivateKeyProvider": () => (/* reexport */ CommonPrivateKeyProvider),
  "createRandomId": () => (/* reexport */ createRandomId)
});

;// CONCATENATED MODULE: external "@babel/runtime/helpers/defineProperty"
const defineProperty_namespaceObject = require("@babel/runtime/helpers/defineProperty");
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty_namespaceObject);
;// CONCATENATED MODULE: external "@toruslabs/base-controllers"
const base_controllers_namespaceObject = require("@toruslabs/base-controllers");
;// CONCATENATED MODULE: external "@web3auth/base"
const base_namespaceObject = require("@web3auth/base");
;// CONCATENATED MODULE: external "eth-rpc-errors"
const external_eth_rpc_errors_namespaceObject = require("eth-rpc-errors");
;// CONCATENATED MODULE: ./src/baseProvider.ts


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { defineProperty_default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }




class BaseProvider extends base_controllers_namespaceObject.BaseController {
  // should be Assigned in setupProvider
  constructor(_ref) {
    let {
      config,
      state
    } = _ref;
    super({
      config,
      state
    });

    defineProperty_default()(this, "_providerEngineProxy", null);

    if (!config.chainConfig) throw base_namespaceObject.WalletInitializationError.invalidProviderConfigError("Please provide chainConfig");
    if (!config.chainConfig.chainId) throw base_namespaceObject.WalletInitializationError.invalidProviderConfigError("Please provide chainId inside chainConfig");
    if (!config.chainConfig.rpcTarget) throw base_namespaceObject.WalletInitializationError.invalidProviderConfigError("Please provide rpcTarget inside chainConfig");
    this.defaultState = {
      chainId: "loading"
    };
    this.defaultConfig = {
      chainConfig: config.chainConfig,
      networks: {
        [config.chainConfig.chainId]: config.chainConfig
      }
    };
    super.initialize();
  }

  get provider() {
    return this._providerEngineProxy;
  }

  set provider(_) {
    throw new Error("Method not implemented.");
  }

  addChain(chainConfig) {
    if (!chainConfig.chainId) throw external_eth_rpc_errors_namespaceObject.ethErrors.rpc.invalidParams("chainId is required");
    if (!chainConfig.rpcTarget) throw external_eth_rpc_errors_namespaceObject.ethErrors.rpc.invalidParams("chainId is required");
    this.configure({
      networks: _objectSpread(_objectSpread({}, this.config.networks), {}, {
        [chainConfig.chainId]: chainConfig
      })
    });
  }

  getChainConfig(chainId) {
    var _this$config$networks;

    const chainConfig = (_this$config$networks = this.config.networks) === null || _this$config$networks === void 0 ? void 0 : _this$config$networks[chainId];
    if (!chainConfig) throw external_eth_rpc_errors_namespaceObject.ethErrors.rpc.invalidRequest("Chain ".concat(chainId, " is not supported, please add chainConfig for it"));
    return chainConfig;
  }

  getProviderEngineProxy() {
    return this._providerEngineProxy;
  }

  updateProviderEngineProxy(providerEngineProxy) {
    if (this._providerEngineProxy) {
      this._providerEngineProxy.setTarget(providerEngineProxy);
    } else {
      this._providerEngineProxy = (0,base_controllers_namespaceObject.createEventEmitterProxy)(providerEngineProxy);
    }
  }

}
;// CONCATENATED MODULE: external "@toruslabs/openlogin-jrpc"
const openlogin_jrpc_namespaceObject = require("@toruslabs/openlogin-jrpc");
;// CONCATENATED MODULE: ./src/commonPrivateKeyProvider.ts



class CommonPrivateKeyProvider {
  constructor() {
    defineProperty_default()(this, "_providerEngineProxy", null);
  }

  get provider() {
    return this._providerEngineProxy;
  }

  set provider(_) {
    throw new Error("Method not implemented.");
  }

  addChain(_) {
    throw new Error("Method not implemented.");
  }

  async setupProvider(privKey) {
    const privKeyMiddleware = this.getPrivKeyMiddleware(privKey);
    const engine = new openlogin_jrpc_namespaceObject.JRPCEngine();
    engine.push(privKeyMiddleware);
    const provider = (0,base_controllers_namespaceObject.providerFromEngine)(engine);
    this.updateProviderEngineProxy(provider);
  }

  async switchChain(_) {
    return Promise.resolve();
  }

  getProviderEngineProxy() {
    return this._providerEngineProxy;
  }

  updateProviderEngineProxy(providerEngineProxy) {
    if (this._providerEngineProxy) {
      this._providerEngineProxy.setTarget(providerEngineProxy);
    } else {
      this._providerEngineProxy = (0,base_controllers_namespaceObject.createEventEmitterProxy)(providerEngineProxy);
    }
  }

  getPrivKeyMiddleware(privKey) {
    const middleware = {
      getPrivatekey: async () => {
        return privKey;
      }
    };
    return this.createPrivKeyMiddleware(middleware);
  }

  createPrivKeyMiddleware(_ref) {
    let {
      getPrivatekey
    } = _ref;

    async function getPrivatekeyHandler(_, res) {
      res.result = await getPrivatekey();
    }

    return (0,openlogin_jrpc_namespaceObject.createScaffoldMiddleware)({
      private_key: (0,openlogin_jrpc_namespaceObject.createAsyncMiddleware)(getPrivatekeyHandler)
    });
  }

}

defineProperty_default()(CommonPrivateKeyProvider, "getProviderInstance", async params => {
  const providerFactory = new CommonPrivateKeyProvider();
  await providerFactory.setupProvider(params.privKey);
  return providerFactory;
});
;// CONCATENATED MODULE: external "json-rpc-random-id"
const external_json_rpc_random_id_namespaceObject = require("json-rpc-random-id");
var external_json_rpc_random_id_default = /*#__PURE__*/__webpack_require__.n(external_json_rpc_random_id_namespaceObject);
;// CONCATENATED MODULE: ./src/utils.ts

const createRandomId = external_json_rpc_random_id_default()();
;// CONCATENATED MODULE: ./src/index.ts




module.exports = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=baseProvider.cjs.js.map