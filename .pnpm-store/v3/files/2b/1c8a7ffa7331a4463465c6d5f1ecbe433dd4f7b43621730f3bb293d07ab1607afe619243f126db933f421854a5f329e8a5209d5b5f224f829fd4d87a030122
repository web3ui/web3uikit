/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 822:
/***/ ((module) => {

module.exports = require("@toruslabs/openlogin-ed25519");

/***/ }),

/***/ 41:
/***/ ((module) => {

module.exports = require("@web3auth/ethereum-provider");

/***/ }),

/***/ 448:
/***/ ((module) => {

module.exports = require("@web3auth/solana-provider");

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
/******/ 	/* webpack/runtime/create fake namespace object */
/******/ 	(() => {
/******/ 		var getProto = Object.getPrototypeOf ? (obj) => (Object.getPrototypeOf(obj)) : (obj) => (obj.__proto__);
/******/ 		var leafPrototypes;
/******/ 		// create a fake namespace object
/******/ 		// mode & 1: value is a module id, require it
/******/ 		// mode & 2: merge all properties of value into the ns
/******/ 		// mode & 4: return value when already ns object
/******/ 		// mode & 16: return value when it's Promise-like
/******/ 		// mode & 8|1: behave like require
/******/ 		__webpack_require__.t = function(value, mode) {
/******/ 			if(mode & 1) value = this(value);
/******/ 			if(mode & 8) return value;
/******/ 			if(typeof value === 'object' && value) {
/******/ 				if((mode & 4) && value.__esModule) return value;
/******/ 				if((mode & 16) && typeof value.then === 'function') return value;
/******/ 			}
/******/ 			var ns = Object.create(null);
/******/ 			__webpack_require__.r(ns);
/******/ 			var def = {};
/******/ 			leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
/******/ 			for(var current = mode & 2 && value; typeof current == 'object' && !~leafPrototypes.indexOf(current); current = getProto(current)) {
/******/ 				Object.getOwnPropertyNames(current).forEach((key) => (def[key] = () => (value[key])));
/******/ 			}
/******/ 			def['default'] = () => (value);
/******/ 			__webpack_require__.d(ns, def);
/******/ 			return ns;
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
  "OpenloginAdapter": () => (/* reexport */ OpenloginAdapter),
  "getOpenloginDefaultOptions": () => (/* reexport */ getOpenloginDefaultOptions)
});

;// CONCATENATED MODULE: external "@toruslabs/openlogin"
const openlogin_namespaceObject = require("@toruslabs/openlogin");
var openlogin_default = /*#__PURE__*/__webpack_require__.n(openlogin_namespaceObject);
;// CONCATENATED MODULE: external "@web3auth/base"
const base_namespaceObject = require("@web3auth/base");
;// CONCATENATED MODULE: ./src/config.ts


const getOpenloginDefaultOptions = (chainNamespace, chainId) => {
  return {
    adapterSettings: {
      network: openlogin_namespaceObject.OPENLOGIN_NETWORK.MAINNET,
      clientId: "",
      uxMode: openlogin_namespaceObject.UX_MODE.POPUP
    },
    chainConfig: chainNamespace ? (0,base_namespaceObject.getChainConfig)(chainNamespace, chainId) : null,
    loginSettings: {}
  };
};
;// CONCATENATED MODULE: external "@babel/runtime/helpers/defineProperty"
const defineProperty_namespaceObject = require("@babel/runtime/helpers/defineProperty");
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty_namespaceObject);
;// CONCATENATED MODULE: external "@web3auth/base-provider"
const base_provider_namespaceObject = require("@web3auth/base-provider");
;// CONCATENATED MODULE: external "lodash.merge"
const external_lodash_merge_namespaceObject = require("lodash.merge");
var external_lodash_merge_default = /*#__PURE__*/__webpack_require__.n(external_lodash_merge_namespaceObject);
;// CONCATENATED MODULE: ./src/openloginAdapter.ts


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { defineProperty_default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }






class OpenloginAdapter extends base_namespaceObject.BaseAdapter {
  constructor(params) {
    var _params$chainConfig, _params$chainConfig2, _params$chainConfig3;

    super();

    defineProperty_default()(this, "name", base_namespaceObject.WALLET_ADAPTERS.OPENLOGIN);

    defineProperty_default()(this, "adapterNamespace", base_namespaceObject.ADAPTER_NAMESPACES.MULTICHAIN);

    defineProperty_default()(this, "type", base_namespaceObject.ADAPTER_CATEGORY.IN_APP);

    defineProperty_default()(this, "openloginInstance", null);

    defineProperty_default()(this, "status", base_namespaceObject.ADAPTER_STATUS.NOT_READY);

    defineProperty_default()(this, "currentChainNamespace", base_namespaceObject.CHAIN_NAMESPACES.EIP155);

    defineProperty_default()(this, "openloginOptions", void 0);

    defineProperty_default()(this, "loginSettings", {});

    defineProperty_default()(this, "privKeyProvider", null);

    base_namespaceObject.log.debug("const openlogin adapter", params);
    const defaultOptions = getOpenloginDefaultOptions((_params$chainConfig = params.chainConfig) === null || _params$chainConfig === void 0 ? void 0 : _params$chainConfig.chainNamespace, (_params$chainConfig2 = params.chainConfig) === null || _params$chainConfig2 === void 0 ? void 0 : _params$chainConfig2.chainId);
    this.openloginOptions = _objectSpread(_objectSpread({
      clientId: "",
      network: openlogin_namespaceObject.OPENLOGIN_NETWORK.MAINNET
    }, defaultOptions.adapterSettings), params.adapterSettings || {});
    this.loginSettings = _objectSpread(_objectSpread({}, defaultOptions.loginSettings), params.loginSettings); // if no chainNamespace is passed then chain config should be set before calling init

    if ((_params$chainConfig3 = params.chainConfig) !== null && _params$chainConfig3 !== void 0 && _params$chainConfig3.chainNamespace) {
      var _params$chainConfig4;

      this.currentChainNamespace = (_params$chainConfig4 = params.chainConfig) === null || _params$chainConfig4 === void 0 ? void 0 : _params$chainConfig4.chainNamespace;
      const defaultChainIdConfig = defaultOptions.chainConfig ? defaultOptions.chainConfig : {};
      this.chainConfig = _objectSpread(_objectSpread({}, defaultChainIdConfig), params === null || params === void 0 ? void 0 : params.chainConfig);
      base_namespaceObject.log.debug("const openlogin chainConfig", this.chainConfig);

      if (!this.chainConfig.rpcTarget && params.chainConfig.chainNamespace !== base_namespaceObject.CHAIN_NAMESPACES.OTHER) {
        throw base_namespaceObject.WalletInitializationError.invalidParams("rpcTarget is required in chainConfig");
      }
    }
  }

  get chainConfigProxy() {
    return this.chainConfig ? _objectSpread({}, this.chainConfig) : null;
  }

  get provider() {
    var _this$privKeyProvider;

    return ((_this$privKeyProvider = this.privKeyProvider) === null || _this$privKeyProvider === void 0 ? void 0 : _this$privKeyProvider.provider) || null;
  }

  set provider(_) {
    throw new Error("Not implemented");
  }

  async init(options) {
    var _this$openloginOption;

    super.checkInitializationRequirements();
    if (!((_this$openloginOption = this.openloginOptions) !== null && _this$openloginOption !== void 0 && _this$openloginOption.clientId)) throw base_namespaceObject.WalletInitializationError.invalidParams("clientId is required before openlogin's initialization");
    if (!this.chainConfig) throw base_namespaceObject.WalletInitializationError.invalidParams("chainConfig is required before initialization");
    let isRedirectResult = false;

    if (this.openloginOptions.uxMode === openlogin_namespaceObject.UX_MODE.REDIRECT) {
      const redirectResult = (0,openlogin_namespaceObject.getHashQueryParams)();

      if (Object.keys(redirectResult).length > 0 && redirectResult._pid) {
        isRedirectResult = true;
      }
    }

    this.openloginOptions = _objectSpread(_objectSpread({}, this.openloginOptions), {}, {
      replaceUrlOnRedirect: isRedirectResult
    });
    this.openloginInstance = new (openlogin_default())(this.openloginOptions);
    base_namespaceObject.log.debug("initializing openlogin adapter init");
    await this.openloginInstance.init();
    this.status = base_namespaceObject.ADAPTER_STATUS.READY;
    this.emit(base_namespaceObject.ADAPTER_EVENTS.READY, base_namespaceObject.WALLET_ADAPTERS.OPENLOGIN);

    try {
      base_namespaceObject.log.debug("initializing openlogin adapter"); // connect only if it is redirect result or if connect (adapter is cached/already connected in same session) is true

      if (this.openloginInstance.privKey && (options.autoConnect || isRedirectResult)) {
        await this.connect();
      }
    } catch (error) {
      base_namespaceObject.log.error("Failed to connect with cached openlogin provider", error);
      this.emit("ERRORED", error);
    }
  }

  async connect(params) {
    super.checkConnectionRequirements();
    this.status = base_namespaceObject.ADAPTER_STATUS.CONNECTING;
    this.emit(base_namespaceObject.ADAPTER_EVENTS.CONNECTING, _objectSpread(_objectSpread({}, params), {}, {
      adapter: base_namespaceObject.WALLET_ADAPTERS.OPENLOGIN
    }));

    try {
      await this.connectWithProvider(params);
      return this.provider;
    } catch (error) {
      base_namespaceObject.log.error("Failed to connect with openlogin provider", error); // ready again to be connected

      this.status = base_namespaceObject.ADAPTER_STATUS.READY;
      this.emit(base_namespaceObject.ADAPTER_EVENTS.ERRORED, error);

      if (error !== null && error !== void 0 && error.message.includes("user closed popup")) {
        throw base_namespaceObject.WalletLoginError.popupClosed();
      }

      throw base_namespaceObject.WalletLoginError.connectionError("Failed to login with openlogin");
    }
  }

  async disconnect() {
    let options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
      cleanup: false
    };
    if (this.status !== base_namespaceObject.ADAPTER_STATUS.CONNECTED) throw base_namespaceObject.WalletLoginError.notConnectedError("Not connected with wallet");
    if (!this.openloginInstance) throw base_namespaceObject.WalletInitializationError.notReady("openloginInstance is not ready");
    await this.openloginInstance.logout();

    if (options.cleanup) {
      this.status = base_namespaceObject.ADAPTER_STATUS.NOT_READY;
      this.openloginInstance = null;
      this.privKeyProvider = null;
    } else {
      // ready to be connected again
      this.status = base_namespaceObject.ADAPTER_STATUS.READY;
    }

    this.emit(base_namespaceObject.ADAPTER_EVENTS.DISCONNECTED);
  }

  async getUserInfo() {
    if (this.status !== base_namespaceObject.ADAPTER_STATUS.CONNECTED) throw base_namespaceObject.WalletLoginError.notConnectedError("Not connected with wallet");
    if (!this.openloginInstance) throw base_namespaceObject.WalletInitializationError.notReady("openloginInstance is not ready");
    const userInfo = await this.openloginInstance.getUserInfo();
    return userInfo;
  } // should be called only before initialization.


  setAdapterSettings(adapterSettings) {
    if (this.status === base_namespaceObject.ADAPTER_STATUS.READY) return;
    const defaultOptions = getOpenloginDefaultOptions();
    this.openloginOptions = _objectSpread(_objectSpread(_objectSpread({}, defaultOptions.adapterSettings), this.openloginOptions || {}), adapterSettings);
  } // should be called only before initialization.


  setChainConfig(customChainConfig) {
    super.setChainConfig(customChainConfig);
    this.currentChainNamespace = customChainConfig.chainNamespace;
  }

  async connectWithProvider(params) {
    if (!this.chainConfig) throw base_namespaceObject.WalletInitializationError.invalidParams("chainConfig is required before initialization");
    if (!this.openloginInstance) throw base_namespaceObject.WalletInitializationError.notReady("openloginInstance is not ready");

    if (this.currentChainNamespace === base_namespaceObject.CHAIN_NAMESPACES.SOLANA) {
      const {
        SolanaPrivateKeyProvider
      } = await Promise.resolve(/* import() */).then(__webpack_require__.t.bind(__webpack_require__, 448, 23));
      this.privKeyProvider = new SolanaPrivateKeyProvider({
        config: {
          chainConfig: this.chainConfig
        }
      });
    } else if (this.currentChainNamespace === base_namespaceObject.CHAIN_NAMESPACES.EIP155) {
      const {
        EthereumPrivateKeyProvider
      } = await Promise.resolve(/* import() */).then(__webpack_require__.t.bind(__webpack_require__, 41, 23));
      this.privKeyProvider = new EthereumPrivateKeyProvider({
        config: {
          chainConfig: this.chainConfig
        }
      });
    } else if (this.currentChainNamespace === base_namespaceObject.CHAIN_NAMESPACES.OTHER) {
      this.privKeyProvider = new base_provider_namespaceObject.CommonPrivateKeyProvider();
    } else {
      throw new Error("Invalid chainNamespace: ".concat(this.currentChainNamespace, " found while connecting to wallet"));
    } // if not logged in then login


    if (!this.openloginInstance.privKey && params) {
      var _params$extraLoginOpt;

      if (!this.loginSettings.curve) {
        this.loginSettings.curve = this.currentChainNamespace === base_namespaceObject.CHAIN_NAMESPACES.SOLANA ? openlogin_namespaceObject.SUPPORTED_KEY_CURVES.ED25519 : openlogin_namespaceObject.SUPPORTED_KEY_CURVES.SECP256K1;
      }

      await this.openloginInstance.login(external_lodash_merge_default()(this.loginSettings, {
        loginProvider: params.loginProvider
      }, {
        extraLoginOptions: _objectSpread(_objectSpread({}, params.extraLoginOptions || {}), {}, {
          login_hint: params.login_hint || ((_params$extraLoginOpt = params.extraLoginOptions) === null || _params$extraLoginOpt === void 0 ? void 0 : _params$extraLoginOpt.login_hint)
        })
      }));
    }

    let finalPrivKey = this.openloginInstance.privKey;

    if (finalPrivKey) {
      if (this.currentChainNamespace === base_namespaceObject.CHAIN_NAMESPACES.SOLANA) {
        const {
          getED25519Key
        } = await Promise.resolve(/* import() */).then(__webpack_require__.t.bind(__webpack_require__, 822, 23));
        finalPrivKey = getED25519Key(finalPrivKey).sk.toString("hex");
      }

      await this.privKeyProvider.setupProvider(finalPrivKey);
      this.status = base_namespaceObject.ADAPTER_STATUS.CONNECTED;
      this.emit(base_namespaceObject.ADAPTER_EVENTS.CONNECTED, {
        adapter: base_namespaceObject.WALLET_ADAPTERS.OPENLOGIN,
        reconnected: !params
      });
    }
  }

}
;// CONCATENATED MODULE: ./src/index.ts



})();

module.exports = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=openloginAdapter.cjs.js.map