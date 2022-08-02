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
  "TorusWalletAdapter": () => (/* reexport */ TorusWalletAdapter)
});

;// CONCATENATED MODULE: external "@babel/runtime/helpers/defineProperty"
const defineProperty_namespaceObject = require("@babel/runtime/helpers/defineProperty");
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty_namespaceObject);
;// CONCATENATED MODULE: external "@toruslabs/torus-embed"
const torus_embed_namespaceObject = require("@toruslabs/torus-embed");
var torus_embed_default = /*#__PURE__*/__webpack_require__.n(torus_embed_namespaceObject);
;// CONCATENATED MODULE: external "@web3auth/base"
const base_namespaceObject = require("@web3auth/base");
;// CONCATENATED MODULE: ./src/torusWalletAdapter.ts


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { defineProperty_default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }



class TorusWalletAdapter extends base_namespaceObject.BaseAdapter {
  constructor() {
    let params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    super();

    defineProperty_default()(this, "name", base_namespaceObject.WALLET_ADAPTERS.TORUS_EVM);

    defineProperty_default()(this, "adapterNamespace", base_namespaceObject.ADAPTER_NAMESPACES.EIP155);

    defineProperty_default()(this, "currentChainNamespace", base_namespaceObject.CHAIN_NAMESPACES.EIP155);

    defineProperty_default()(this, "type", base_namespaceObject.ADAPTER_CATEGORY.EXTERNAL);

    defineProperty_default()(this, "status", base_namespaceObject.ADAPTER_STATUS.NOT_READY);

    defineProperty_default()(this, "torusInstance", null);

    defineProperty_default()(this, "torusWalletOptions", void 0);

    defineProperty_default()(this, "initParams", void 0);

    defineProperty_default()(this, "loginSettings", {});

    defineProperty_default()(this, "rehydrated", false);

    this.torusWalletOptions = params.adapterSettings || {};
    this.initParams = params.initParams || {};
    this.loginSettings = params.loginSettings || {};
    this.chainConfig = params.chainConfig || null;
  }

  get provider() {
    if (this.status === base_namespaceObject.ADAPTER_STATUS.CONNECTED && this.torusInstance) {
      return this.torusInstance.provider;
    }

    return null;
  }

  set provider(_) {
    throw new Error("Not implemented");
  }

  async init(options) {
    super.checkInitializationRequirements(); // set chainConfig for mainnet by default if not set

    let network;

    if (!this.chainConfig) {
      this.chainConfig = (0,base_namespaceObject.getChainConfig)(base_namespaceObject.CHAIN_NAMESPACES.EIP155, 1);
      const {
        blockExplorer,
        displayName
      } = this.chainConfig;
      network = {
        chainId: 1,
        host: "mainnet",
        blockExplorer,
        networkName: displayName
      };
    } else {
      const {
        chainId,
        blockExplorer,
        displayName,
        rpcTarget
      } = this.chainConfig;
      network = {
        chainId: parseInt(chainId, 16),
        host: rpcTarget,
        blockExplorer,
        networkName: displayName
      };
    }

    this.torusInstance = new (torus_embed_default())(this.torusWalletOptions);
    base_namespaceObject.log.debug("initializing torus evm adapter init");
    await this.torusInstance.init(_objectSpread(_objectSpread({
      showTorusButton: false
    }, this.initParams), {}, {
      network
    }));
    this.status = base_namespaceObject.ADAPTER_STATUS.READY;
    this.emit(base_namespaceObject.ADAPTER_EVENTS.READY, base_namespaceObject.WALLET_ADAPTERS.TORUS_EVM);

    try {
      base_namespaceObject.log.debug("initializing torus evm adapter");

      if (options.autoConnect) {
        this.rehydrated = true;
        await this.connect();
      }
    } catch (error) {
      base_namespaceObject.log.error("Failed to connect with torus evm provider", error);
      this.emit(base_namespaceObject.ADAPTER_EVENTS.ERRORED, error);
    }
  }

  async connect() {
    super.checkConnectionRequirements();
    if (!this.torusInstance) throw base_namespaceObject.WalletInitializationError.notReady("Torus wallet is not initialized");
    this.status = base_namespaceObject.ADAPTER_STATUS.CONNECTING;
    this.emit(base_namespaceObject.ADAPTER_EVENTS.CONNECTING, {
      adapter: base_namespaceObject.WALLET_ADAPTERS.TORUS_EVM
    });

    try {
      await this.torusInstance.login(this.loginSettings);
      const {
        chainId
      } = this.torusInstance.provider;

      if (chainId && parseInt(chainId) !== parseInt(this.chainConfig.chainId, 16)) {
        const {
          chainId: _chainId,
          blockExplorer,
          displayName,
          rpcTarget,
          ticker,
          tickerName
        } = this.chainConfig;
        const network = {
          chainId: _chainId,
          host: rpcTarget,
          blockExplorerUrl: blockExplorer,
          networkName: displayName,
          tickerName,
          ticker,
          logo: ""
        }; // in some cases when user manually switches chain and relogin then adapter will not connect to initially passed
        // chainConfig but will connect to the one that user switched to.
        // So here trying to switch network to the one that was initially passed in chainConfig.

        await this.torusInstance.setProvider(_objectSpread({}, network));
        const updatedChainID = await this.torusInstance.ethereum.request({
          method: "eth_chainId"
        });

        if (updatedChainID && parseInt(updatedChainID) !== parseInt(this.chainConfig.chainId, 16)) {
          throw base_namespaceObject.WalletInitializationError.fromCode(5000, "Not connected to correct chainId. Expected: ".concat(this.chainConfig.chainId, ", Current: ").concat(updatedChainID));
        }
      }

      this.status = base_namespaceObject.ADAPTER_STATUS.CONNECTED;
      this.torusInstance.showTorusButton();
      this.emit(base_namespaceObject.ADAPTER_STATUS.CONNECTED, {
        adapter: base_namespaceObject.WALLET_ADAPTERS.TORUS_EVM,
        reconnected: this.rehydrated
      });
      return this.provider;
    } catch (error) {
      // ready again to be connected
      this.status = base_namespaceObject.ADAPTER_STATUS.READY;
      this.rehydrated = false;
      this.emit(base_namespaceObject.ADAPTER_STATUS.ERRORED, error);
      throw error instanceof base_namespaceObject.Web3AuthError ? error : base_namespaceObject.WalletLoginError.connectionError("Failed to login with torus wallet");
    }
  }

  async disconnect() {
    let options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
      cleanup: false
    };
    if (this.status !== base_namespaceObject.ADAPTER_STATUS.CONNECTED) throw base_namespaceObject.WalletLoginError.notConnectedError("Not connected with wallet");
    if (!this.torusInstance) throw base_namespaceObject.WalletInitializationError.notReady("Torus wallet is not initialized");
    await this.torusInstance.logout();
    this.torusInstance.hideTorusButton();

    if (options.cleanup) {
      this.status = base_namespaceObject.ADAPTER_STATUS.NOT_READY;
      this.torusInstance = null;
    } else {
      // ready to be connected again
      this.status = base_namespaceObject.ADAPTER_STATUS.READY;
    }

    this.rehydrated = false;
    this.emit(base_namespaceObject.ADAPTER_EVENTS.DISCONNECTED);
  }

  async getUserInfo() {
    if (this.status !== base_namespaceObject.ADAPTER_STATUS.CONNECTED) throw base_namespaceObject.WalletLoginError.notConnectedError("Not connected with wallet");
    if (!this.torusInstance) throw base_namespaceObject.WalletInitializationError.notReady("Torus wallet is not initialized");
    const userInfo = await this.torusInstance.getUserInfo("");
    return userInfo;
  }

  setAdapterSettings(_) {}

}
;// CONCATENATED MODULE: ./src/index.ts

module.exports = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=torusEvmAdapter.cjs.js.map