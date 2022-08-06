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
  "MetamaskAdapter": () => (/* reexport */ MetamaskAdapter)
});

;// CONCATENATED MODULE: external "@babel/runtime/helpers/defineProperty"
const defineProperty_namespaceObject = require("@babel/runtime/helpers/defineProperty");
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty_namespaceObject);
;// CONCATENATED MODULE: external "@metamask/detect-provider"
const detect_provider_namespaceObject = require("@metamask/detect-provider");
var detect_provider_default = /*#__PURE__*/__webpack_require__.n(detect_provider_namespaceObject);
;// CONCATENATED MODULE: external "@web3auth/base"
const base_namespaceObject = require("@web3auth/base");
;// CONCATENATED MODULE: ./src/metamaskAdapter.ts




class MetamaskAdapter extends base_namespaceObject.BaseAdapter {
  constructor() {
    let adapterOptions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    super();

    defineProperty_default()(this, "adapterNamespace", base_namespaceObject.ADAPTER_NAMESPACES.EIP155);

    defineProperty_default()(this, "currentChainNamespace", base_namespaceObject.CHAIN_NAMESPACES.EIP155);

    defineProperty_default()(this, "type", base_namespaceObject.ADAPTER_CATEGORY.EXTERNAL);

    defineProperty_default()(this, "name", base_namespaceObject.WALLET_ADAPTERS.METAMASK);

    defineProperty_default()(this, "status", base_namespaceObject.ADAPTER_STATUS.NOT_READY);

    defineProperty_default()(this, "rehydrated", false);

    defineProperty_default()(this, "metamaskProvider", null);

    this.chainConfig = adapterOptions.chainConfig || null;
  }

  get provider() {
    if (this.status === base_namespaceObject.ADAPTER_STATUS.CONNECTED && this.metamaskProvider) {
      return this.metamaskProvider;
    }

    return null;
  }

  set provider(_) {
    throw new Error("Not implemented");
  }

  async init(options) {
    super.checkInitializationRequirements();
    this.metamaskProvider = await detect_provider_default()({
      mustBeMetaMask: true
    });
    if (!this.metamaskProvider) throw base_namespaceObject.WalletInitializationError.notInstalled("Metamask extension is not installed");
    this.status = base_namespaceObject.ADAPTER_STATUS.READY;
    this.emit(base_namespaceObject.ADAPTER_EVENTS.READY, base_namespaceObject.WALLET_ADAPTERS.METAMASK);

    try {
      base_namespaceObject.log.debug("initializing metamask adapter");

      if (options.autoConnect) {
        this.rehydrated = true;
        await this.connect();
      }
    } catch (error) {
      this.emit(base_namespaceObject.ADAPTER_EVENTS.ERRORED, error);
    }
  }

  setAdapterSettings(_) {}

  async connect() {
    super.checkConnectionRequirements(); // set default to mainnet

    if (!this.chainConfig) this.chainConfig = (0,base_namespaceObject.getChainConfig)(base_namespaceObject.CHAIN_NAMESPACES.EIP155, 1);
    this.status = base_namespaceObject.ADAPTER_STATUS.CONNECTING;
    this.emit(base_namespaceObject.ADAPTER_EVENTS.CONNECTING, {
      adapter: base_namespaceObject.WALLET_ADAPTERS.METAMASK
    });
    if (!this.metamaskProvider) throw base_namespaceObject.WalletLoginError.notConnectedError("Not able to connect with metamask");

    try {
      await this.metamaskProvider.request({
        method: "eth_requestAccounts"
      });
      const {
        chainId
      } = this.metamaskProvider;

      if (chainId !== this.chainConfig.chainId) {
        await this.switchChain(this.chainConfig);
      }

      this.status = base_namespaceObject.ADAPTER_STATUS.CONNECTED;
      if (!this.provider) throw base_namespaceObject.WalletLoginError.notConnectedError("Failed to connect with provider");
      this.provider.once("disconnect", () => {
        // ready to be connected again
        this.disconnect();
      });
      this.emit(base_namespaceObject.ADAPTER_EVENTS.CONNECTED, {
        adapter: base_namespaceObject.WALLET_ADAPTERS.METAMASK,
        reconnected: this.rehydrated
      });
      return this.provider;
    } catch (error) {
      // ready again to be connected
      this.status = base_namespaceObject.ADAPTER_STATUS.READY;
      this.rehydrated = false;
      this.emit(base_namespaceObject.ADAPTER_EVENTS.ERRORED, error);
      throw base_namespaceObject.WalletLoginError.connectionError("Failed to login with metamask wallet");
    }
  }

  async disconnect() {
    var _this$provider;

    let options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
      cleanup: false
    };
    if (this.status !== base_namespaceObject.ADAPTER_STATUS.CONNECTED) throw base_namespaceObject.WalletLoginError.disconnectionError("Not connected with wallet");
    (_this$provider = this.provider) === null || _this$provider === void 0 ? void 0 : _this$provider.removeAllListeners();

    if (options.cleanup) {
      this.status = base_namespaceObject.ADAPTER_STATUS.NOT_READY;
      this.metamaskProvider = null;
    } else {
      // ready to be connected again
      this.status = base_namespaceObject.ADAPTER_STATUS.READY;
    }

    this.rehydrated = false;
    this.emit(base_namespaceObject.ADAPTER_EVENTS.DISCONNECTED);
  }

  async getUserInfo() {
    if (this.status !== base_namespaceObject.ADAPTER_STATUS.CONNECTED) throw base_namespaceObject.WalletLoginError.notConnectedError("Not connected with wallet, Please login/connect first");
    return {};
  }

  async switchChain(chainConfig) {
    if (!this.metamaskProvider) throw base_namespaceObject.WalletLoginError.notConnectedError("Not connected with wallet");

    try {
      await this.metamaskProvider.request({
        method: "wallet_switchEthereumChain",
        params: [{
          chainId: chainConfig.chainId
        }]
      });
    } catch (switchError) {
      // This error code indicates that the chain has not been added to MetaMask.
      if (switchError.code === 4902) {
        await this.metamaskProvider.request({
          method: "wallet_addEthereumChain",
          params: [{
            chainId: chainConfig.chainId,
            chainName: chainConfig.displayName,
            rpcUrls: [chainConfig.rpcTarget]
          }]
        });
      } else {
        throw switchError;
      }
    }
  }

}


;// CONCATENATED MODULE: ./src/index.ts

module.exports = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=metamaskAdapter.cjs.js.map