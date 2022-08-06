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
  "Web3AuthCore": () => (/* reexport */ Web3AuthCore)
});

;// CONCATENATED MODULE: external "@babel/runtime/helpers/defineProperty"
const defineProperty_namespaceObject = require("@babel/runtime/helpers/defineProperty");
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty_namespaceObject);
;// CONCATENATED MODULE: external "@toruslabs/openlogin-jrpc"
const openlogin_jrpc_namespaceObject = require("@toruslabs/openlogin-jrpc");
;// CONCATENATED MODULE: external "@web3auth/base"
const base_namespaceObject = require("@web3auth/base");
;// CONCATENATED MODULE: external "@web3auth/base-plugin"
const base_plugin_namespaceObject = require("@web3auth/base-plugin");
;// CONCATENATED MODULE: ./src/core.ts


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { defineProperty_default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }




const ADAPTER_CACHE_KEY = "Web3Auth-cachedAdapter";
class Web3AuthCore extends openlogin_jrpc_namespaceObject.SafeEventEmitter {
  constructor(options) {
    var _options$chainConfig, _options$chainConfig2, _options$chainConfig3, _options$chainConfig4;

    super();

    defineProperty_default()(this, "coreOptions", void 0);

    defineProperty_default()(this, "connectedAdapterName", null);

    defineProperty_default()(this, "status", base_namespaceObject.ADAPTER_STATUS.NOT_READY);

    defineProperty_default()(this, "cachedAdapter", null);

    defineProperty_default()(this, "walletAdapters", {});

    defineProperty_default()(this, "plugins", {});

    defineProperty_default()(this, "storage", "localStorage");

    if (options.enableLogging) base_namespaceObject.log.enableAll();else base_namespaceObject.log.disableAll();
    if (!((_options$chainConfig = options.chainConfig) !== null && _options$chainConfig !== void 0 && _options$chainConfig.chainNamespace) || !Object.values(base_namespaceObject.CHAIN_NAMESPACES).includes((_options$chainConfig2 = options.chainConfig) === null || _options$chainConfig2 === void 0 ? void 0 : _options$chainConfig2.chainNamespace)) throw base_namespaceObject.WalletInitializationError.invalidParams("Please provide a valid chainNamespace in chainConfig");
    if (options.storageKey === "session") this.storage = "sessionStorage";
    this.cachedAdapter = (0,base_namespaceObject.storageAvailable)(this.storage) ? window[this.storage].getItem(ADAPTER_CACHE_KEY) : null;
    this.coreOptions = _objectSpread(_objectSpread({}, options), {}, {
      chainConfig: _objectSpread(_objectSpread({}, (0,base_namespaceObject.getChainConfig)((_options$chainConfig3 = options.chainConfig) === null || _options$chainConfig3 === void 0 ? void 0 : _options$chainConfig3.chainNamespace, (_options$chainConfig4 = options.chainConfig) === null || _options$chainConfig4 === void 0 ? void 0 : _options$chainConfig4.chainId) || {}), options.chainConfig)
    });
    this.subscribeToAdapterEvents = this.subscribeToAdapterEvents.bind(this);
  }

  get provider() {
    if (this.status === base_namespaceObject.ADAPTER_STATUS.CONNECTED && this.connectedAdapterName) {
      const adapter = this.walletAdapters[this.connectedAdapterName];
      return adapter.provider;
    }

    return null;
  }

  set provider(_) {
    throw new Error("Not implemented");
  }

  async init() {
    const initPromises = Object.keys(this.walletAdapters).map(adapterName => {
      this.subscribeToAdapterEvents(this.walletAdapters[adapterName]); // if adapter doesn't have any chain config yet thn set it based on provided namespace and chainId.
      // if no chainNamespace or chainId is being provided, it will connect with mainnet.

      if (!this.walletAdapters[adapterName].chainConfigProxy) {
        const providedChainConfig = this.coreOptions.chainConfig;
        if (!providedChainConfig.chainNamespace) throw base_namespaceObject.WalletInitializationError.invalidParams("Please provide chainNamespace in chainConfig");

        const chainConfig = _objectSpread(_objectSpread({}, (0,base_namespaceObject.getChainConfig)(providedChainConfig.chainNamespace, providedChainConfig.chainId)), providedChainConfig);

        this.walletAdapters[adapterName].setChainConfig(chainConfig);
      }

      return this.walletAdapters[adapterName].init({
        autoConnect: this.cachedAdapter === adapterName
      }).catch(e => base_namespaceObject.log.error(e));
    });
    this.status = base_namespaceObject.ADAPTER_STATUS.READY;
    await Promise.all(initPromises);
  }

  configureAdapter(adapter) {
    this.checkInitRequirements();
    const providedChainConfig = this.coreOptions.chainConfig;
    if (!providedChainConfig.chainNamespace) throw base_namespaceObject.WalletInitializationError.invalidParams("Please provide chainNamespace in chainConfig");
    const adapterAlreadyExists = this.walletAdapters[adapter.name];
    if (adapterAlreadyExists) throw base_namespaceObject.WalletInitializationError.duplicateAdapterError("Wallet adapter for ".concat(adapter.name, " already exists"));
    if (adapter.adapterNamespace !== base_namespaceObject.ADAPTER_NAMESPACES.MULTICHAIN && adapter.adapterNamespace !== providedChainConfig.chainNamespace) throw base_namespaceObject.WalletInitializationError.incompatibleChainNameSpace("This wallet adapter belongs to ".concat(adapter.adapterNamespace, " which is incompatible with currently used namespace: ").concat(providedChainConfig.chainNamespace));

    if (adapter.adapterNamespace === base_namespaceObject.ADAPTER_NAMESPACES.MULTICHAIN && adapter.currentChainNamespace && providedChainConfig.chainNamespace !== adapter.currentChainNamespace) {
      // chainConfig checks are already validated in constructor so using typecast is safe here.
      adapter.setChainConfig(providedChainConfig);
    }

    this.walletAdapters[adapter.name] = adapter;
    return this;
  }

  clearCache() {
    if (!(0,base_namespaceObject.storageAvailable)(this.storage)) return;
    window[this.storage].removeItem(ADAPTER_CACHE_KEY);
    this.cachedAdapter = null;
  }
  /**
   * Connect to a specific wallet adapter
   * @param walletName - Key of the walletAdapter to use.
   */


  async connectTo(walletName, loginParams) {
    if (!this.walletAdapters[walletName]) throw base_namespaceObject.WalletInitializationError.notFound("Please add wallet adapter for ".concat(walletName, " wallet, before connecting"));
    const provider = await this.walletAdapters[walletName].connect(loginParams);
    return provider;
  }

  async logout() {
    let options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
      cleanup: false
    };
    if (this.status !== base_namespaceObject.ADAPTER_STATUS.CONNECTED || !this.connectedAdapterName) throw base_namespaceObject.WalletLoginError.notConnectedError("No wallet is connected");
    await this.walletAdapters[this.connectedAdapterName].disconnect(options);
  }

  async getUserInfo() {
    base_namespaceObject.log.debug("Getting user info", this.status, this.connectedAdapterName);
    if (this.status !== base_namespaceObject.ADAPTER_STATUS.CONNECTED || !this.connectedAdapterName) throw base_namespaceObject.WalletLoginError.notConnectedError("No wallet is connected");
    return this.walletAdapters[this.connectedAdapterName].getUserInfo();
  }

  async addPlugin(plugin) {
    if (this.plugins[plugin.name]) throw new Error("Plugin ".concat(plugin.name, " already exist"));
    if (plugin.pluginNamespace !== base_plugin_namespaceObject.PLUGIN_NAMESPACES.MULTICHAIN && plugin.pluginNamespace !== this.coreOptions.chainConfig.chainNamespace) throw new Error("This plugin belongs to ".concat(plugin.pluginNamespace, " namespace which is incompatible with currently used namespace: ").concat(this.coreOptions.chainConfig.chainNamespace));
    this.plugins[plugin.name] = plugin;
    await plugin.initWithWeb3Auth(this);
    return this;
  }

  subscribeToAdapterEvents(walletAdapter) {
    walletAdapter.on(base_namespaceObject.ADAPTER_EVENTS.CONNECTED, async data => {
      this.status = base_namespaceObject.ADAPTER_STATUS.CONNECTED;
      this.connectedAdapterName = data.adapter;
      this.cacheWallet(data.adapter);
      base_namespaceObject.log.debug("connected", this.status, this.connectedAdapterName);
      await Promise.all(Object.values(this.plugins).map(plugin => {
        return plugin.connect().catch(error => {
          // swallow error if connector adapter doesn't supports this plugin.
          if (error.code === 5211) {
            return;
          } // throw error;


          base_namespaceObject.log.error(error);
        });
      }));
      this.emit(base_namespaceObject.ADAPTER_EVENTS.CONNECTED, _objectSpread({}, data));
    });
    walletAdapter.on(base_namespaceObject.ADAPTER_EVENTS.DISCONNECTED, async data => {
      // get back to ready state for rehydrating.
      this.status = base_namespaceObject.ADAPTER_STATUS.READY;

      if ((0,base_namespaceObject.storageAvailable)(this.storage)) {
        const cachedAdapter = window[this.storage].getItem(ADAPTER_CACHE_KEY);

        if (this.connectedAdapterName === cachedAdapter) {
          this.clearCache();
        }
      }

      base_namespaceObject.log.debug("disconnected", this.status, this.connectedAdapterName);
      await Promise.all(Object.values(this.plugins).map(plugin => {
        return plugin.disconnect().catch(error => {
          // swallow error if adapter doesn't supports this plugin.
          if (error.code === 5211) {
            return;
          } // throw error;


          base_namespaceObject.log.error(error);
        });
      }));
      this.connectedAdapterName = null;
      this.emit(base_namespaceObject.ADAPTER_EVENTS.DISCONNECTED, data);
    });
    walletAdapter.on(base_namespaceObject.ADAPTER_EVENTS.CONNECTING, data => {
      this.status = base_namespaceObject.ADAPTER_STATUS.CONNECTING;
      this.emit(base_namespaceObject.ADAPTER_EVENTS.CONNECTING, data);
      base_namespaceObject.log.debug("connecting", this.status, this.connectedAdapterName);
    });
    walletAdapter.on(base_namespaceObject.ADAPTER_EVENTS.ERRORED, data => {
      this.status = base_namespaceObject.ADAPTER_STATUS.ERRORED;
      this.clearCache();
      this.emit(base_namespaceObject.ADAPTER_EVENTS.ERRORED, data);
      base_namespaceObject.log.debug("errored", this.status, this.connectedAdapterName);
    });
    walletAdapter.on(base_namespaceObject.ADAPTER_EVENTS.ADAPTER_DATA_UPDATED, data => {
      base_namespaceObject.log.debug("adapter data updated", data);
      this.emit(base_namespaceObject.ADAPTER_EVENTS.ADAPTER_DATA_UPDATED, data);
    });
  }

  checkInitRequirements() {
    if (this.status === base_namespaceObject.ADAPTER_STATUS.CONNECTING) throw base_namespaceObject.WalletInitializationError.notReady("Already pending connection");
    if (this.status === base_namespaceObject.ADAPTER_STATUS.CONNECTED) throw base_namespaceObject.WalletInitializationError.notReady("Already connected");
    if (this.status === base_namespaceObject.ADAPTER_STATUS.READY) throw base_namespaceObject.WalletInitializationError.notReady("Adapter is already initialized");
  }

  cacheWallet(walletName) {
    if (!(0,base_namespaceObject.storageAvailable)(this.storage)) return;
    window[this.storage].setItem(ADAPTER_CACHE_KEY, walletName);
    this.cachedAdapter = walletName;
  }

}
;// CONCATENATED MODULE: ./src/index.ts

module.exports = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=core.cjs.js.map