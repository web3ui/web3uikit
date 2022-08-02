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
  "SolanaWalletAdapter": () => (/* reexport */ SolanaWalletAdapter)
});

;// CONCATENATED MODULE: external "@babel/runtime/helpers/defineProperty"
const defineProperty_namespaceObject = require("@babel/runtime/helpers/defineProperty");
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty_namespaceObject);
;// CONCATENATED MODULE: external "@toruslabs/solana-embed"
const solana_embed_namespaceObject = require("@toruslabs/solana-embed");
var solana_embed_default = /*#__PURE__*/__webpack_require__.n(solana_embed_namespaceObject);
;// CONCATENATED MODULE: external "@web3auth/base"
const base_namespaceObject = require("@web3auth/base");
;// CONCATENATED MODULE: external "@web3auth/solana-provider"
const solana_provider_namespaceObject = require("@web3auth/solana-provider");
;// CONCATENATED MODULE: ./src/solanaWalletAdapter.ts


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { defineProperty_default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }




class SolanaWalletAdapter extends base_namespaceObject.BaseAdapter {
  constructor() {
    let params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    super();

    defineProperty_default()(this, "name", base_namespaceObject.WALLET_ADAPTERS.TORUS_SOLANA);

    defineProperty_default()(this, "adapterNamespace", base_namespaceObject.ADAPTER_NAMESPACES.SOLANA);

    defineProperty_default()(this, "currentChainNamespace", base_namespaceObject.CHAIN_NAMESPACES.SOLANA);

    defineProperty_default()(this, "type", base_namespaceObject.ADAPTER_CATEGORY.EXTERNAL);

    defineProperty_default()(this, "status", base_namespaceObject.ADAPTER_STATUS.NOT_READY);

    defineProperty_default()(this, "torusInstance", null);

    defineProperty_default()(this, "torusWalletOptions", void 0);

    defineProperty_default()(this, "initParams", void 0);

    defineProperty_default()(this, "loginSettings", {});

    defineProperty_default()(this, "solanaProvider", null);

    defineProperty_default()(this, "rehydrated", false);

    this.torusWalletOptions = params.adapterSettings || {};
    this.initParams = params.initParams || {};
    this.loginSettings = params.loginSettings || {};
    this.chainConfig = params.chainConfig || null;
  }

  get provider() {
    if (this.status === base_namespaceObject.ADAPTER_STATUS.CONNECTED && this.solanaProvider) {
      var _this$solanaProvider;

      return ((_this$solanaProvider = this.solanaProvider) === null || _this$solanaProvider === void 0 ? void 0 : _this$solanaProvider.provider) || null;
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
      this.chainConfig = (0,base_namespaceObject.getChainConfig)(base_namespaceObject.CHAIN_NAMESPACES.SOLANA, "0x1");
      const {
        blockExplorer,
        displayName,
        ticker,
        tickerName,
        rpcTarget,
        chainId
      } = this.chainConfig;
      network = {
        chainId,
        rpcTarget,
        blockExplorerUrl: blockExplorer,
        displayName,
        ticker,
        tickerName,
        logo: ""
      };
    } else {
      const {
        chainId,
        blockExplorer,
        displayName,
        rpcTarget,
        ticker,
        tickerName
      } = this.chainConfig;
      network = {
        chainId,
        rpcTarget,
        blockExplorerUrl: blockExplorer,
        displayName,
        tickerName,
        ticker,
        logo: ""
      };
    }

    this.torusInstance = new (solana_embed_default())(this.torusWalletOptions);
    base_namespaceObject.log.debug("initializing torus solana adapter init");
    await this.torusInstance.init(_objectSpread(_objectSpread({
      showTorusButton: false
    }, this.initParams), {}, {
      network
    }));
    this.solanaProvider = new solana_provider_namespaceObject.TorusInjectedProvider({
      config: {
        chainConfig: this.chainConfig
      }
    });
    this.status = base_namespaceObject.ADAPTER_STATUS.READY;
    this.emit(base_namespaceObject.ADAPTER_EVENTS.READY, base_namespaceObject.WALLET_ADAPTERS.TORUS_SOLANA);

    try {
      base_namespaceObject.log.debug("initializing torus solana adapter");

      if (options.autoConnect) {
        this.rehydrated = true;
        await this.connect();
      }
    } catch (error) {
      base_namespaceObject.log.error("Failed to connect with cached torus solana provider", error);
      this.emit(base_namespaceObject.ADAPTER_EVENTS.ERRORED, error);
    }
  }

  async connect() {
    super.checkConnectionRequirements();
    if (!this.torusInstance) throw base_namespaceObject.WalletInitializationError.notReady("Torus wallet is not initialized");
    if (!this.solanaProvider) throw base_namespaceObject.WalletInitializationError.notReady("Torus wallet is not initialized");
    this.status = base_namespaceObject.ADAPTER_STATUS.CONNECTING;
    this.emit(base_namespaceObject.ADAPTER_EVENTS.CONNECTING, {
      adapter: base_namespaceObject.WALLET_ADAPTERS.TORUS_SOLANA
    });

    try {
      await this.torusInstance.login(this.loginSettings);

      try {
        const torusInpageProvider = this.torusInstance.provider;
        torusInpageProvider.sendTransaction = this.torusInstance.sendTransaction.bind(this.torusInstance);
        torusInpageProvider.signAllTransactions = this.torusInstance.signAllTransactions.bind(this.torusInstance);
        torusInpageProvider.signMessage = this.torusInstance.signMessage.bind(this.torusInstance);
        torusInpageProvider.signTransaction = this.torusInstance.signTransaction.bind(this.torusInstance);
        await this.solanaProvider.setupProvider(torusInpageProvider);
      } catch (error) {
        // some issue in solana wallet, always connecting to mainnet on init.
        // fallback to change network if not connected to correct one on login.
        if (error instanceof base_namespaceObject.Web3AuthError && error.code === 5010) {
          const {
            chainId,
            blockExplorer,
            displayName,
            rpcTarget,
            ticker,
            tickerName
          } = this.chainConfig;
          const network = {
            chainId,
            rpcTarget,
            blockExplorerUrl: blockExplorer,
            displayName,
            tickerName,
            ticker,
            logo: ""
          };
          await this.torusInstance.setProvider(network);
        } else {
          throw error;
        }
      }

      this.status = base_namespaceObject.ADAPTER_STATUS.CONNECTED;
      this.torusInstance.showTorusButton();
      this.emit(base_namespaceObject.ADAPTER_STATUS.CONNECTED, {
        adapter: base_namespaceObject.WALLET_ADAPTERS.TORUS_SOLANA,
        reconnected: this.rehydrated
      });
      return this.provider;
    } catch (error) {
      // ready again to be connected
      this.status = base_namespaceObject.ADAPTER_STATUS.READY;
      this.rehydrated = false;
      this.emit(base_namespaceObject.ADAPTER_EVENTS.ERRORED, error);
      throw base_namespaceObject.WalletLoginError.connectionError("Failed to login with torus solana wallet");
    }
  }

  async disconnect() {
    let options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
      cleanup: false
    };
    if (this.status !== base_namespaceObject.ADAPTER_STATUS.CONNECTED) throw base_namespaceObject.WalletLoginError.notConnectedError("Not connected with wallet");
    if (!this.torusInstance) throw base_namespaceObject.WalletInitializationError.notReady("Torus wallet is not initialized");
    await this.torusInstance.logout();

    if (options.cleanup) {
      // ready to connect again
      this.status = base_namespaceObject.ADAPTER_STATUS.NOT_READY;
      this.torusInstance = null;
      this.solanaProvider = null;
    } else {
      // ready to connect again
      this.status = base_namespaceObject.ADAPTER_STATUS.READY;
    }

    this.emit(base_namespaceObject.ADAPTER_EVENTS.DISCONNECTED);
  }

  async getUserInfo() {
    if (this.status !== base_namespaceObject.ADAPTER_STATUS.CONNECTED) throw base_namespaceObject.WalletLoginError.notConnectedError("Not connected with wallet");
    if (!this.torusInstance) throw base_namespaceObject.WalletInitializationError.notReady("Torus wallet is not initialized");
    const userInfo = await this.torusInstance.getUserInfo();
    return userInfo;
  }

  setAdapterSettings(_) {}

}
;// CONCATENATED MODULE: ./src/index.ts

module.exports = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=torusSolanaAdapter.cjs.js.map