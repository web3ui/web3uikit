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
  "WalletConnectV1Adapter": () => (/* reexport */ WalletConnectV1Adapter)
});

;// CONCATENATED MODULE: external "@babel/runtime/helpers/defineProperty"
const defineProperty_namespaceObject = require("@babel/runtime/helpers/defineProperty");
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty_namespaceObject);
;// CONCATENATED MODULE: external "@walletconnect/client"
const client_namespaceObject = require("@walletconnect/client");
var client_default = /*#__PURE__*/__webpack_require__.n(client_namespaceObject);
;// CONCATENATED MODULE: external "@web3auth/base"
const base_namespaceObject = require("@web3auth/base");
;// CONCATENATED MODULE: external "@web3auth/ethereum-provider"
const ethereum_provider_namespaceObject = require("@web3auth/ethereum-provider");
;// CONCATENATED MODULE: ./src/config.ts

const WALLET_CONNECT_EXTENSION_ADAPTERS = [{
  name: "Rainbow",
  chains: [base_namespaceObject.CHAIN_NAMESPACES.EIP155],
  logo: "https://images.web3auth.io/login-rainbow.svg",
  mobile: {
    native: "rainbow:",
    universal: "https://rnbwapp.com"
  },
  desktop: {
    native: "",
    universal: ""
  }
}, {
  name: "MetaMask",
  chains: [base_namespaceObject.CHAIN_NAMESPACES.EIP155],
  logo: "https://images.web3auth.io/login-metamask.svg",
  mobile: {
    native: "metamask:",
    universal: "https://metamask.app.link"
  },
  desktop: {
    native: "",
    universal: ""
  }
}];
;// CONCATENATED MODULE: ./src/walletConnectV1adapter.ts


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { defineProperty_default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }






class WalletConnectV1Adapter extends base_namespaceObject.BaseAdapter {
  constructor() {
    let options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    super();

    defineProperty_default()(this, "name", base_namespaceObject.WALLET_ADAPTERS.WALLET_CONNECT_V1);

    defineProperty_default()(this, "adapterNamespace", base_namespaceObject.ADAPTER_NAMESPACES.EIP155);

    defineProperty_default()(this, "currentChainNamespace", base_namespaceObject.CHAIN_NAMESPACES.EIP155);

    defineProperty_default()(this, "type", base_namespaceObject.ADAPTER_CATEGORY.EXTERNAL);

    defineProperty_default()(this, "adapterOptions", void 0);

    defineProperty_default()(this, "status", base_namespaceObject.ADAPTER_STATUS.NOT_READY);

    defineProperty_default()(this, "adapterData", {
      uri: "",
      extensionAdapters: WALLET_CONNECT_EXTENSION_ADAPTERS
    });

    defineProperty_default()(this, "connector", null);

    defineProperty_default()(this, "wcProvider", null);

    defineProperty_default()(this, "rehydrated", false);

    this.adapterOptions = _objectSpread({}, options);
    this.chainConfig = options.chainConfig || null;
  }

  get connected() {
    var _this$connector;

    return !!((_this$connector = this.connector) !== null && _this$connector !== void 0 && _this$connector.connected);
  }

  get provider() {
    var _this$wcProvider;

    return ((_this$wcProvider = this.wcProvider) === null || _this$wcProvider === void 0 ? void 0 : _this$wcProvider.provider) || null;
  }

  set provider(_) {
    throw new Error("Not implemented");
  }

  async init() {
    super.checkInitializationRequirements();

    if (!this.chainConfig) {
      this.chainConfig = (0,base_namespaceObject.getChainConfig)(base_namespaceObject.CHAIN_NAMESPACES.EIP155, 1);
    } // Create a connector


    this.connector = this.getWalletConnectInstance();
    this.wcProvider = new ethereum_provider_namespaceObject.WalletConnectProvider({
      config: {
        chainConfig: this.chainConfig
      },
      connector: this.connector
    });
    this.emit(base_namespaceObject.ADAPTER_EVENTS.READY, base_namespaceObject.WALLET_ADAPTERS.WALLET_CONNECT_V1);
    this.status = base_namespaceObject.ADAPTER_STATUS.READY;
    base_namespaceObject.log.debug("initializing wallet connect v1 adapter");

    if (this.connector.connected) {
      this.rehydrated = true;
      await this.onConnectHandler({
        accounts: this.connector.accounts,
        chainId: this.connector.chainId
      });
    }
  }

  async connect() {
    super.checkConnectionRequirements();
    if (!this.connector) throw base_namespaceObject.WalletInitializationError.notReady("Wallet adapter is not ready yet");

    if (this.connected) {
      await this.onConnectHandler({
        accounts: this.connector.accounts,
        chainId: this.connector.chainId
      });
      return this.provider;
    }

    if (this.status !== base_namespaceObject.ADAPTER_STATUS.CONNECTING) {
      var _this$adapterOptions$;

      // for wallet connect qr code modal we have to create a new connector, coz wallet connect internally does not open
      // modal again on existing instance if connection is pending.
      if ((_this$adapterOptions$ = this.adapterOptions.adapterSettings) !== null && _this$adapterOptions$ !== void 0 && _this$adapterOptions$.qrcodeModal) {
        var _this$adapterOptions$2;

        this.connector = this.getWalletConnectInstance();
        this.wcProvider = new ethereum_provider_namespaceObject.WalletConnectProvider({
          config: {
            chainConfig: this.chainConfig,
            // network switching can be skipped with custom ui
            skipLookupNetwork: (_this$adapterOptions$2 = this.adapterOptions.adapterSettings) === null || _this$adapterOptions$2 === void 0 ? void 0 : _this$adapterOptions$2.skipNetworkSwitching
          },
          connector: this.connector
        });
      }

      await this.createNewSession();
      this.status = base_namespaceObject.ADAPTER_STATUS.CONNECTING;
      this.emit(base_namespaceObject.ADAPTER_EVENTS.CONNECTING, {
        adapter: base_namespaceObject.WALLET_ADAPTERS.WALLET_CONNECT_V1
      });
    }

    return new Promise((resolve, reject) => {
      if (!this.connector) return reject(base_namespaceObject.WalletInitializationError.notReady("Wallet adapter is not ready yet")); // for wallet connect default modal.

      this.connector.on("modal_closed", async () => {
        this.status = base_namespaceObject.ADAPTER_STATUS.READY;
        this.emit(base_namespaceObject.ADAPTER_EVENTS.READY, base_namespaceObject.WALLET_ADAPTERS.WALLET_CONNECT_V1);
        return reject(new Error("User closed modal"));
      });

      try {
        // Subscribe to session connection
        this.connector.on("connect", async (error, payload) => {
          if (error) {
            this.emit(base_namespaceObject.ADAPTER_EVENTS.ERRORED, error);
          }

          base_namespaceObject.log.debug("connected event emitted by web3auth");
          await this.onConnectHandler(payload.params[0]);
          return resolve(this.provider);
        });
      } catch (error) {
        base_namespaceObject.log.error("Wallet connect v1 adapter error while connecting", error); // ready again to be connected

        this.status = base_namespaceObject.ADAPTER_STATUS.READY;
        this.rehydrated = true;
        this.emit(base_namespaceObject.ADAPTER_EVENTS.ERRORED, error);
        reject(error instanceof base_namespaceObject.Web3AuthError ? error : base_namespaceObject.WalletLoginError.connectionError("Failed to login with wallet connect: ".concat((error === null || error === void 0 ? void 0 : error.message) || "")));
      }
    });
  }

  async getUserInfo() {
    if (!this.connected) throw base_namespaceObject.WalletLoginError.notConnectedError("Not connected with wallet, Please login/connect first");
    return {};
  }

  async disconnect() {
    let options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
      cleanup: false
    };
    const {
      cleanup
    } = options;
    if (!this.connector || !this.connected) throw base_namespaceObject.WalletLoginError.notConnectedError("Not connected with wallet");
    await this.connector.killSession();
    this.rehydrated = false;

    if (cleanup) {
      this.connector = null;
      this.status = base_namespaceObject.ADAPTER_STATUS.NOT_READY;
      this.wcProvider = null;
    } else {
      // ready to connect again
      this.status = base_namespaceObject.ADAPTER_STATUS.READY;
    }

    this.emit(base_namespaceObject.ADAPTER_EVENTS.DISCONNECTED);
  }

  async addChain(chainConfig) {
    try {
      var _this$adapterOptions$3;

      if (!this.wcProvider) throw base_namespaceObject.WalletInitializationError.notReady("Wallet adapter is not ready yet");
      const networkSwitch = (_this$adapterOptions$3 = this.adapterOptions.adapterSettings) === null || _this$adapterOptions$3 === void 0 ? void 0 : _this$adapterOptions$3.networkSwitchModal;

      if (networkSwitch) {
        await networkSwitch.addNetwork({
          chainConfig,
          appOrigin: window.location.hostname
        });
      }

      await this.wcProvider.addChain(chainConfig);
    } catch (error) {
      base_namespaceObject.log.error(error);
    }
  }

  async switchChain(connectedChainConfig, chainConfig) {
    var _this$adapterOptions$4;

    if (!this.wcProvider) throw base_namespaceObject.WalletInitializationError.notReady("Wallet adapter is not ready yet");
    const networkSwitch = (_this$adapterOptions$4 = this.adapterOptions.adapterSettings) === null || _this$adapterOptions$4 === void 0 ? void 0 : _this$adapterOptions$4.networkSwitchModal;

    if (networkSwitch) {
      await networkSwitch.switchNetwork({
        currentChainConfig: chainConfig,
        newChainConfig: connectedChainConfig,
        appOrigin: window.location.hostname
      });
    }

    await this.wcProvider.switchChain({
      chainId: chainConfig.chainId,
      lookup: false,
      addChain: false
    });
  }

  async createNewSession() {
    var _this$adapterOptions, _this$adapterOptions$5;

    let opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
      forceNewSession: false
    };
    if (!this.connector) throw base_namespaceObject.WalletInitializationError.notReady("Wallet adapter is not ready yet");

    if (opts.forceNewSession && this.connector.pending) {
      await this.connector.killSession();
    } // for wallet connect qr modal


    if ((_this$adapterOptions = this.adapterOptions) !== null && _this$adapterOptions !== void 0 && (_this$adapterOptions$5 = _this$adapterOptions.adapterSettings) !== null && _this$adapterOptions$5 !== void 0 && _this$adapterOptions$5.qrcodeModal) {
      var _this$chainConfig;

      await this.connector.createSession({
        chainId: parseInt(((_this$chainConfig = this.chainConfig) === null || _this$chainConfig === void 0 ? void 0 : _this$chainConfig.chainId) || "0x1", 16)
      });
      return;
    } // for web3auth qr code modal


    return new Promise((resolve, reject) => {
      var _this$chainConfig2;

      if (!this.connector) return reject(base_namespaceObject.WalletInitializationError.notReady("Wallet adapter is not ready yet"));
      base_namespaceObject.log.debug("creating new session for web3auth wallet connect");
      this.connector.on("display_uri", async (err, payload) => {
        var _this$connector2;

        if (err) {
          this.emit(base_namespaceObject.ADAPTER_EVENTS.ERRORED, base_namespaceObject.WalletLoginError.connectionError("Failed to display wallet connect qr code"));
          return reject(err);
        }

        const uri = payload.params[0];
        this.updateAdapterData({
          uri,
          extensionAdapters: WALLET_CONNECT_EXTENSION_ADAPTERS
        });
        (_this$connector2 = this.connector) === null || _this$connector2 === void 0 ? void 0 : _this$connector2.off("display_uri");
        return resolve();
      });
      this.connector.createSession({
        chainId: parseInt(((_this$chainConfig2 = this.chainConfig) === null || _this$chainConfig2 === void 0 ? void 0 : _this$chainConfig2.chainId) || "0x1", 16)
      }).catch(error => {
        base_namespaceObject.log.error("error while creating new wallet connect session", error);
        this.emit(base_namespaceObject.ADAPTER_EVENTS.ERRORED, error);
        return reject(error);
      });
    });
  }

  async onConnectHandler(params) {
    if (!this.connector || !this.wcProvider) throw base_namespaceObject.WalletInitializationError.notReady("Wallet adapter is not ready yet");
    if (!this.chainConfig) throw base_namespaceObject.WalletInitializationError.invalidParams("Chain config is not set");
    const {
      chainId
    } = params;
    base_namespaceObject.log.debug("connected chainId in hex");

    if (chainId !== parseInt(this.chainConfig.chainId, 16)) {
      var _this$adapterOptions$6, _this$adapterOptions2, _this$adapterOptions3;

      const connectedChainConfig = (0,base_namespaceObject.getChainConfig)(base_namespaceObject.CHAIN_NAMESPACES.EIP155, chainId) || {
        chainId: "0x".concat(chainId.toString(16)),
        displayName: "Unknown Network"
      };
      const isCustomUi = (_this$adapterOptions$6 = this.adapterOptions.adapterSettings) === null || _this$adapterOptions$6 === void 0 ? void 0 : _this$adapterOptions$6.qrcodeModal; // skipping network is not allowed in default ui. We are use network switching modal for default ui.

      if (!isCustomUi || isCustomUi && !((_this$adapterOptions2 = this.adapterOptions) !== null && _this$adapterOptions2 !== void 0 && (_this$adapterOptions3 = _this$adapterOptions2.adapterSettings) !== null && _this$adapterOptions3 !== void 0 && _this$adapterOptions3.skipNetworkSwitching)) {
        try {
          await this.addChain(this.chainConfig);
          await this.switchChain(connectedChainConfig, this.chainConfig);
          this.connector = this.getWalletConnectInstance();
        } catch (error) {
          base_namespaceObject.log.error("error while chain switching", error); // we need to create a new session since old session is already used and
          // user needs to login again with correct chain with new qr code.

          await this.createNewSession({
            forceNewSession: true
          });
          this.emit(base_namespaceObject.ADAPTER_EVENTS.ERRORED, base_namespaceObject.WalletInitializationError.fromCode(5000, "Not connected to correct network. Expected: ".concat(this.chainConfig.displayName, ", Current: ").concat((connectedChainConfig === null || connectedChainConfig === void 0 ? void 0 : connectedChainConfig.displayName) || chainId, ", Please switch to correct network from wallet")));
          this.status = base_namespaceObject.ADAPTER_STATUS.READY;
          this.rehydrated = true;
          return;
        }
      }
    }

    await this.wcProvider.setupProvider(this.connector);
    this.subscribeEvents(this.connector);
    this.status = base_namespaceObject.ADAPTER_STATUS.CONNECTED;
    this.emit(base_namespaceObject.ADAPTER_EVENTS.CONNECTED, {
      adapter: base_namespaceObject.WALLET_ADAPTERS.WALLET_CONNECT_V1,
      reconnected: this.rehydrated
    });
  }

  subscribeEvents(connector) {
    connector.on("session_update", async error => {
      if (error) {
        this.emit(base_namespaceObject.ADAPTER_EVENTS.ERRORED, error);
      }
    });
  }

  getWalletConnectInstance() {
    const walletConnectOptions = this.adapterOptions.adapterSettings || {};
    walletConnectOptions.bridge = walletConnectOptions.bridge || "https://bridge.walletconnect.org"; // Create a connector

    return new (client_default())(walletConnectOptions);
  }

}


;// CONCATENATED MODULE: ./src/index.ts


module.exports = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=walletConnectV1Adapter.cjs.js.map