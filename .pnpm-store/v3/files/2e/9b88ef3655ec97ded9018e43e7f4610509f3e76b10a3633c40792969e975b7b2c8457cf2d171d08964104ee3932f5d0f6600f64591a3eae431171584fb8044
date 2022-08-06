/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 591:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Jx": () => (/* binding */ defaultSolanaDappModalConfig),
/* harmony export */   "K8": () => (/* binding */ defaultSolanaWalletModalConfig),
/* harmony export */   "OW": () => (/* binding */ defaultEvmDappModalConfig),
/* harmony export */   "ql": () => (/* binding */ defaultEvmWalletModalConfig),
/* harmony export */   "ue": () => (/* binding */ defaultOtherModalConfig)
/* harmony export */ });
/* harmony import */ var _web3auth_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(612);
/* harmony import */ var _web3auth_base__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_web3auth_base__WEBPACK_IMPORTED_MODULE_0__);

const defaultSolanaDappModalConfig = {
  chainNamespace: _web3auth_base__WEBPACK_IMPORTED_MODULE_0__.CHAIN_NAMESPACES.SOLANA,
  adapters: {
    [_web3auth_base__WEBPACK_IMPORTED_MODULE_0__.SOLANA_ADAPTERS.TORUS_SOLANA]: {
      label: "Torus Wallet",
      showOnModal: true,
      showOnMobile: true,
      showOnDesktop: true
    },
    [_web3auth_base__WEBPACK_IMPORTED_MODULE_0__.SOLANA_ADAPTERS.OPENLOGIN]: {
      label: "OpenLogin",
      showOnModal: true,
      showOnMobile: true,
      showOnDesktop: true
    },
    [_web3auth_base__WEBPACK_IMPORTED_MODULE_0__.SOLANA_ADAPTERS.PHANTOM]: {
      label: "Phantom",
      showOnModal: true,
      showOnMobile: true,
      showOnDesktop: true
    }
  }
};
const defaultEvmDappModalConfig = {
  chainNamespace: _web3auth_base__WEBPACK_IMPORTED_MODULE_0__.CHAIN_NAMESPACES.EIP155,
  adapters: {
    [_web3auth_base__WEBPACK_IMPORTED_MODULE_0__.EVM_ADAPTERS.TORUS_EVM]: {
      label: "Torus Wallet",
      showOnModal: true,
      showOnMobile: true,
      showOnDesktop: true
    },
    [_web3auth_base__WEBPACK_IMPORTED_MODULE_0__.EVM_ADAPTERS.METAMASK]: {
      label: "MetaMask",
      showOnModal: true,
      showOnMobile: true,
      showOnDesktop: true
    },
    [_web3auth_base__WEBPACK_IMPORTED_MODULE_0__.EVM_ADAPTERS.OPENLOGIN]: {
      label: "OpenLogin",
      showOnModal: true,
      showOnMobile: true,
      showOnDesktop: true
    },
    [_web3auth_base__WEBPACK_IMPORTED_MODULE_0__.EVM_ADAPTERS.WALLET_CONNECT_V1]: {
      label: "Wallet Connect",
      showOnModal: true,
      showOnMobile: true,
      showOnDesktop: true
    }
  }
};
const defaultSolanaWalletModalConfig = {
  chainNamespace: _web3auth_base__WEBPACK_IMPORTED_MODULE_0__.CHAIN_NAMESPACES.SOLANA,
  adapters: {
    [_web3auth_base__WEBPACK_IMPORTED_MODULE_0__.SOLANA_ADAPTERS.OPENLOGIN]: {
      label: "OpenLogin",
      showOnModal: true,
      showOnMobile: true,
      showOnDesktop: true
    }
  }
};
const defaultEvmWalletModalConfig = {
  chainNamespace: _web3auth_base__WEBPACK_IMPORTED_MODULE_0__.CHAIN_NAMESPACES.EIP155,
  adapters: {
    [_web3auth_base__WEBPACK_IMPORTED_MODULE_0__.EVM_ADAPTERS.OPENLOGIN]: {
      label: "OpenLogin",
      showOnModal: true,
      showOnMobile: true,
      showOnDesktop: true
    }
  }
};
const defaultOtherModalConfig = {
  chainNamespace: _web3auth_base__WEBPACK_IMPORTED_MODULE_0__.CHAIN_NAMESPACES.OTHER,
  adapters: {
    [_web3auth_base__WEBPACK_IMPORTED_MODULE_0__.EVM_ADAPTERS.OPENLOGIN]: {
      label: "OpenLogin",
      showOnModal: true,
      showOnMobile: true,
      showOnDesktop: true
    }
  }
};

/***/ }),

/***/ 510:
/***/ (() => {



/***/ }),

/***/ 683:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "$": () => (/* binding */ Web3Auth)
});

;// CONCATENATED MODULE: external "@babel/runtime/helpers/defineProperty"
const defineProperty_namespaceObject = require("@babel/runtime/helpers/defineProperty");
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty_namespaceObject);
// EXTERNAL MODULE: external "@web3auth/base"
var base_ = __webpack_require__(612);
;// CONCATENATED MODULE: external "@web3auth/core"
const core_namespaceObject = require("@web3auth/core");
;// CONCATENATED MODULE: external "@web3auth/ui"
const ui_namespaceObject = require("@web3auth/ui");
var ui_default = /*#__PURE__*/__webpack_require__.n(ui_namespaceObject);
// EXTERNAL MODULE: ./src/config.ts
var config = __webpack_require__(591);
;// CONCATENATED MODULE: ./src/default.ts


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { defineProperty_default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }


const getDefaultAdapterModule = async params => {
  const {
    name,
    customChainConfig,
    clientId
  } = params;
  if (!Object.values(base_.CHAIN_NAMESPACES).includes(customChainConfig.chainNamespace)) throw new Error("Invalid chainNamespace: ".concat(customChainConfig.chainNamespace));

  const finalChainConfig = _objectSpread(_objectSpread({}, (0,base_.getChainConfig)(customChainConfig.chainNamespace, customChainConfig === null || customChainConfig === void 0 ? void 0 : customChainConfig.chainId)), customChainConfig || {});

  if (name === base_.WALLET_ADAPTERS.TORUS_EVM) {
    const {
      TorusWalletAdapter
    } = await Promise.resolve(/* import() */).then(__webpack_require__.t.bind(__webpack_require__, 546, 23));
    const adapter = new TorusWalletAdapter({
      chainConfig: finalChainConfig
    });
    return adapter;
  } else if (name === base_.WALLET_ADAPTERS.TORUS_SOLANA) {
    const {
      SolanaWalletAdapter
    } = await Promise.resolve(/* import() */).then(__webpack_require__.t.bind(__webpack_require__, 5, 23));
    const adapter = new SolanaWalletAdapter({
      chainConfig: finalChainConfig
    });
    return adapter;
  } else if (name === base_.WALLET_ADAPTERS.METAMASK) {
    const {
      MetamaskAdapter
    } = await Promise.resolve(/* import() */).then(__webpack_require__.t.bind(__webpack_require__, 508, 23));
    const adapter = new MetamaskAdapter({
      chainConfig: finalChainConfig
    });
    return adapter;
  } else if (name === base_.WALLET_ADAPTERS.PHANTOM) {
    const {
      PhantomAdapter
    } = await Promise.resolve(/* import() */).then(__webpack_require__.t.bind(__webpack_require__, 915, 23));
    const adapter = new PhantomAdapter({
      chainConfig: finalChainConfig
    });
    return adapter;
  } else if (name === base_.WALLET_ADAPTERS.WALLET_CONNECT_V1) {
    const {
      WalletConnectV1Adapter
    } = await Promise.resolve(/* import() */).then(__webpack_require__.t.bind(__webpack_require__, 347, 23));
    const adapter = new WalletConnectV1Adapter({
      chainConfig: finalChainConfig
    });
    return adapter;
  } else if (name === base_.WALLET_ADAPTERS.OPENLOGIN) {
    const {
      OpenloginAdapter,
      getOpenloginDefaultOptions
    } = await Promise.resolve(/* import() */).then(__webpack_require__.t.bind(__webpack_require__, 708, 23));
    const defaultOptions = getOpenloginDefaultOptions(customChainConfig.chainNamespace, customChainConfig === null || customChainConfig === void 0 ? void 0 : customChainConfig.chainId);
    const adapter = new OpenloginAdapter(_objectSpread(_objectSpread({}, defaultOptions), {}, {
      chainConfig: _objectSpread(_objectSpread({}, defaultOptions.chainConfig || {}), finalChainConfig),
      adapterSettings: _objectSpread(_objectSpread({}, defaultOptions.adapterSettings), {}, {
        clientId
      })
    }));
    return adapter;
  }

  throw new Error("Invalid wallet adapter name");
};
;// CONCATENATED MODULE: ./src/modalManager.ts


function modalManager_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function modalManager_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? modalManager_ownKeys(Object(source), !0).forEach(function (key) { defineProperty_default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : modalManager_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }






class Web3Auth extends core_namespaceObject.Web3AuthCore {
  constructor(options) {
    var _this$options$uiConfi, _this$options$uiConfi2;

    super(options);

    defineProperty_default()(this, "loginModal", void 0);

    defineProperty_default()(this, "options", void 0);

    defineProperty_default()(this, "modalConfig", config/* defaultEvmDappModalConfig */.OW);

    this.options = modalManager_objectSpread({}, options);
    const providedChainConfig = this.options.chainConfig;

    if (providedChainConfig.chainNamespace === base_.CHAIN_NAMESPACES.SOLANA) {
      if (options.authMode === "WALLET") {
        // default config for solana wallet modal
        this.modalConfig = config/* defaultSolanaWalletModalConfig */.K8;
      } else {
        // default config for solana dapp modal
        this.modalConfig = config/* defaultSolanaDappModalConfig */.Jx;
      }
    } else if (providedChainConfig.chainNamespace === base_.CHAIN_NAMESPACES.EIP155) {
      if (options.authMode === "WALLET") {
        // default config for evm wallet modal
        this.modalConfig = config/* defaultEvmWalletModalConfig */.ql;
      } else {
        // default config for evm dapp modal
        this.modalConfig = config/* defaultEvmDappModalConfig */.OW;
      }
    } else if (providedChainConfig.chainNamespace === base_.CHAIN_NAMESPACES.OTHER) {
      this.modalConfig = config/* defaultOtherModalConfig */.ue;
    } else {
      throw new Error("Invalid chainNamespace provided: ".concat(providedChainConfig.chainNamespace));
    }

    this.loginModal = new (ui_default())({
      theme: (_this$options$uiConfi = this.options.uiConfig) === null || _this$options$uiConfi === void 0 ? void 0 : _this$options$uiConfi.theme,
      appLogo: ((_this$options$uiConfi2 = this.options.uiConfig) === null || _this$options$uiConfi2 === void 0 ? void 0 : _this$options$uiConfi2.appLogo) || "",
      version: "",
      adapterListener: this,
      displayErrorsOnModal: this.options.displayErrorsOnModal
    });
    this.subscribeToLoginModalEvents();
  }

  async initModal(params) {
    super.checkInitRequirements();
    await this.loginModal.initModal();
    const providedChainConfig = this.options.chainConfig; // merge default adapters with the custom configured adapters.

    const allAdapters = [...new Set([...Object.keys(this.modalConfig.adapters || {}), ...Object.keys(this.walletAdapters)])];
    const adapterConfigurationPromises = allAdapters.map(async adapterName => {
      var _this$modalConfig$ada, _params$modalConfig, _this$modalConfig$ada2, _this$modalConfig$ada3;

      // start with the default config of adapter.
      let adapterConfig = ((_this$modalConfig$ada = this.modalConfig.adapters) === null || _this$modalConfig$ada === void 0 ? void 0 : _this$modalConfig$ada[adapterName]) || {
        label: adapterName,
        showOnModal: true,
        showOnMobile: true,
        showOnDesktop: true
      }; // override the default config of adapter if some config is being provided by the user.

      if (params !== null && params !== void 0 && (_params$modalConfig = params.modalConfig) !== null && _params$modalConfig !== void 0 && _params$modalConfig[adapterName]) {
        adapterConfig = modalManager_objectSpread(modalManager_objectSpread({}, adapterConfig), params.modalConfig[adapterName]);
      }

      this.modalConfig.adapters[adapterName] = adapterConfig; // check if adapter is configured/added by user and exist in walletAdapters map.

      const adapter = this.walletAdapters[adapterName];
      base_.log.debug("adapter config", adapterName, (_this$modalConfig$ada2 = this.modalConfig.adapters) === null || _this$modalConfig$ada2 === void 0 ? void 0 : _this$modalConfig$ada2[adapterName].showOnModal, adapter); // if adapter is not custom configured then check if it is available in default adapters.
      // and if adapter is not hidden by user

      if (!adapter && (_this$modalConfig$ada3 = this.modalConfig.adapters) !== null && _this$modalConfig$ada3 !== void 0 && _this$modalConfig$ada3[adapterName].showOnModal) {
        // if adapter is not configured and some default configuration is available, use it.
        const ad = await getDefaultAdapterModule({
          name: adapterName,
          customChainConfig: this.options.chainConfig,
          clientId: this.options.clientId
        });
        this.walletAdapters[adapterName] = ad;
        return adapterName;
      } else if ((adapter === null || adapter === void 0 ? void 0 : adapter.type) === base_.ADAPTER_CATEGORY.IN_APP || (adapter === null || adapter === void 0 ? void 0 : adapter.type) === base_.ADAPTER_CATEGORY.EXTERNAL || adapterName === this.cachedAdapter) {
        var _this$modalConfig$ada4;

        if (!((_this$modalConfig$ada4 = this.modalConfig.adapters) !== null && _this$modalConfig$ada4 !== void 0 && _this$modalConfig$ada4[adapterName].showOnModal)) return; // add client id to openlogin adapter, same web3auth client id can be used in openlogin.
        // this id is being overridden if user is also passing client id in openlogin's adapter constructor.

        if (adapterName === base_.WALLET_ADAPTERS.OPENLOGIN) {
          this.walletAdapters[adapterName].setAdapterSettings({
            clientId: this.options.clientId
          });
        } // if adapter doesn't have any chainConfig then we will set the chainConfig based of passed chainNamespace
        // and chainNamespace.


        if (!adapter.chainConfigProxy) {
          var _this$coreOptions$cha;

          const chainConfig = modalManager_objectSpread(modalManager_objectSpread({}, (0,base_.getChainConfig)(providedChainConfig.chainNamespace, (_this$coreOptions$cha = this.coreOptions.chainConfig) === null || _this$coreOptions$cha === void 0 ? void 0 : _this$coreOptions$cha.chainId)), this.coreOptions.chainConfig);

          this.walletAdapters[adapterName].setChainConfig(chainConfig);
        }

        return adapterName;
      }
    });
    const adapterNames = await Promise.all(adapterConfigurationPromises);
    const hasInAppWallets = Object.values(this.walletAdapters).some(adapter => {
      var _adapter$name;

      if (adapter.type !== base_.ADAPTER_CATEGORY.IN_APP) return false;
      if (this.modalConfig.adapters[adapter.name].showOnModal !== true) return false;
      if (!this.modalConfig.adapters[adapter.name].loginMethods) return true;
      const mergedLoginMethods = (0,ui_namespaceObject.getAdapterSocialLogins)(adapter.name, this.walletAdapters[adapter.name], (_adapter$name = this.modalConfig.adapters[adapter.name]) === null || _adapter$name === void 0 ? void 0 : _adapter$name.loginMethods);
      if (Object.values(mergedLoginMethods).some(method => method.showOnModal)) return true;
      return false;
    });
    base_.log.debug(hasInAppWallets, this.walletAdapters, "hasInAppWallets"); // Now, initialize the adapters.

    const initPromises = adapterNames.map(async adapterName => {
      if (!adapterName) return;

      try {
        const adapter = this.walletAdapters[adapterName]; // only initialize a external adapter here if it is a cached adapter.

        if (this.cachedAdapter !== adapterName && adapter.type === base_.ADAPTER_CATEGORY.EXTERNAL) {
          return;
        } // in-app wallets or cached wallet (being connected or already connected) are initialized first.
        // if adapter is configured thn only initialize in app or cached adapter.
        // external wallets are initialized on INIT_EXTERNAL_WALLET event.


        this.subscribeToAdapterEvents(adapter);
        if (adapter.status === base_.ADAPTER_STATUS.NOT_READY) await adapter.init({
          autoConnect: this.cachedAdapter === adapterName
        }); // note: not adding cachedWallet to modal if it is external wallet.
        // adding it later if no in-app wallets are available.

        if (adapter.type === base_.ADAPTER_CATEGORY.IN_APP) {
          this.initializeInAppWallet(adapterName);
        }
      } catch (error) {
        base_.log.error(error, "error while initializing adapter");
      }
    });
    this.status = base_.ADAPTER_STATUS.READY;
    await Promise.all(initPromises);
    const hasExternalWallets = allAdapters.some(adapterName => {
      var _this$walletAdapters$, _this$modalConfig$ada5;

      return ((_this$walletAdapters$ = this.walletAdapters[adapterName]) === null || _this$walletAdapters$ === void 0 ? void 0 : _this$walletAdapters$.type) === base_.ADAPTER_CATEGORY.EXTERNAL && ((_this$modalConfig$ada5 = this.modalConfig.adapters) === null || _this$modalConfig$ada5 === void 0 ? void 0 : _this$modalConfig$ada5[adapterName].showOnModal);
    });

    if (hasExternalWallets) {
      this.loginModal.initExternalWalletContainer();
    } // variable to check if we have any in app wallets
    // currently all default in app and external wallets can be hidden or shown based on config.


    if (!hasInAppWallets && hasExternalWallets) {
      // if no in app wallet is available then initialize external wallets in modal
      await this.initExternalWalletAdapters(false, {
        showExternalWalletsOnly: true
      });
    }
  }

  async connect() {
    // if (!this.loginModal.initialized) throw new Error("Login modal is not initialized");
    // if already connected return provider
    if (this.provider) return this.provider;
    this.loginModal.open();
    return new Promise((resolve, reject) => {
      this.once(base_.ADAPTER_EVENTS.CONNECTED, () => {
        return resolve(this.provider);
      });
      this.once(base_.ADAPTER_EVENTS.ERRORED, err => {
        return reject(err);
      });
    });
  }

  async initExternalWalletAdapters(externalWalletsInitialized, options) {
    if (externalWalletsInitialized) return;
    const adaptersConfig = {};
    const adaptersData = {};
    const adapterPromises = Object.keys(this.walletAdapters).map(async adapterName => {
      try {
        const adapter = this.walletAdapters[adapterName];

        if ((adapter === null || adapter === void 0 ? void 0 : adapter.type) === base_.ADAPTER_CATEGORY.EXTERNAL) {
          base_.log.debug("init external wallet", this.cachedAdapter, adapterName);
          this.subscribeToAdapterEvents(adapter); // we are not initializing cached adapter here as it is already being initialized in initModal before.

          if (this.cachedAdapter === adapterName) {
            return;
          }

          if (adapter.status === base_.ADAPTER_STATUS.NOT_READY) await adapter.init({
            autoConnect: this.cachedAdapter === adapterName
          });
          adaptersConfig[adapterName] = this.modalConfig.adapters[adapterName];
          adaptersData[adapterName] = adapter.adapterData || {};
          return adapterName;
        }
      } catch (error) {
        base_.log.error(error, "error while initializing adapter");
      }
    });
    const adapterInitResults = await Promise.all(adapterPromises);
    const finalAdaptersConfig = {};
    adapterInitResults.forEach(result => {
      if (result) {
        finalAdaptersConfig[result] = adaptersConfig[result];
      }
    });
    this.loginModal.addWalletLogins(finalAdaptersConfig, {
      showExternalWalletsOnly: !!(options !== null && options !== void 0 && options.showExternalWalletsOnly)
    });
  }

  initializeInAppWallet(adapterName) {
    base_.log.info("adapterInitResults", adapterName);

    if (this.walletAdapters[adapterName].type === base_.ADAPTER_CATEGORY.IN_APP) {
      var _adapterName, _this$options$uiConfi3;

      this.loginModal.addSocialLogins(adapterName, (0,ui_namespaceObject.getAdapterSocialLogins)(adapterName, this.walletAdapters[adapterName], (_adapterName = this.modalConfig.adapters[adapterName]) === null || _adapterName === void 0 ? void 0 : _adapterName.loginMethods), ((_this$options$uiConfi3 = this.options.uiConfig) === null || _this$options$uiConfi3 === void 0 ? void 0 : _this$options$uiConfi3.loginMethodsOrder) || ui_namespaceObject.OPENLOGIN_PROVIDERS);
    }
  }

  subscribeToLoginModalEvents() {
    this.loginModal.on(ui_namespaceObject.LOGIN_MODAL_EVENTS.LOGIN, async params => {
      try {
        await this.connectTo(params.adapter, params.loginParams);
      } catch (error) {
        base_.log.error("Error while connecting to adapter: ".concat(params.adapter), error);
      }
    });
    this.loginModal.on(ui_namespaceObject.LOGIN_MODAL_EVENTS.INIT_EXTERNAL_WALLETS, async params => {
      await this.initExternalWalletAdapters(params.externalWalletsInitialized);
    });
    this.loginModal.on(ui_namespaceObject.LOGIN_MODAL_EVENTS.DISCONNECT, async () => {
      try {
        await this.logout();
      } catch (error) {
        base_.log.error("Error while disconnecting", error);
      }
    });
    this.loginModal.on(ui_namespaceObject.LOGIN_MODAL_EVENTS.MODAL_VISIBILITY, async visibility => {
      var _this$walletAdapters$2;

      base_.log.debug("is login modal visible", visibility);
      this.emit(ui_namespaceObject.LOGIN_MODAL_EVENTS.MODAL_VISIBILITY, visibility);
      const walletConnectStatus = (_this$walletAdapters$2 = this.walletAdapters[base_.WALLET_ADAPTERS.WALLET_CONNECT_V1]) === null || _this$walletAdapters$2 === void 0 ? void 0 : _this$walletAdapters$2.status;

      if (visibility && walletConnectStatus === base_.ADAPTER_STATUS.READY) {
        // refreshing session for wallet connect whenever modal is opened.
        try {
          this.walletAdapters[base_.WALLET_ADAPTERS.WALLET_CONNECT_V1].connect();
        } catch (error) {
          base_.log.error("Error while disconnecting to wallet connect in core", error);
        }
      }
    });
  }

}

/***/ }),

/***/ 612:
/***/ ((module) => {

"use strict";
module.exports = require("@web3auth/base");

/***/ }),

/***/ 508:
/***/ ((module) => {

"use strict";
module.exports = require("@web3auth/metamask-adapter");

/***/ }),

/***/ 708:
/***/ ((module) => {

"use strict";
module.exports = require("@web3auth/openlogin-adapter");

/***/ }),

/***/ 915:
/***/ ((module) => {

"use strict";
module.exports = require("@web3auth/phantom-adapter");

/***/ }),

/***/ 546:
/***/ ((module) => {

"use strict";
module.exports = require("@web3auth/torus-evm-adapter");

/***/ }),

/***/ 5:
/***/ ((module) => {

"use strict";
module.exports = require("@web3auth/torus-solana-adapter");

/***/ }),

/***/ 347:
/***/ ((module) => {

"use strict";
module.exports = require("@web3auth/wallet-connect-v1-adapter");

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
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Web3Auth": () => (/* reexport safe */ _modalManager__WEBPACK_IMPORTED_MODULE_2__.$),
/* harmony export */   "defaultEvmDappModalConfig": () => (/* reexport safe */ _config__WEBPACK_IMPORTED_MODULE_0__.OW),
/* harmony export */   "defaultEvmWalletModalConfig": () => (/* reexport safe */ _config__WEBPACK_IMPORTED_MODULE_0__.ql),
/* harmony export */   "defaultOtherModalConfig": () => (/* reexport safe */ _config__WEBPACK_IMPORTED_MODULE_0__.ue),
/* harmony export */   "defaultSolanaDappModalConfig": () => (/* reexport safe */ _config__WEBPACK_IMPORTED_MODULE_0__.Jx),
/* harmony export */   "defaultSolanaWalletModalConfig": () => (/* reexport safe */ _config__WEBPACK_IMPORTED_MODULE_0__.K8)
/* harmony export */ });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(591);
/* harmony import */ var _interface__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(510);
/* harmony import */ var _interface__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_interface__WEBPACK_IMPORTED_MODULE_1__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _interface__WEBPACK_IMPORTED_MODULE_1__) if(["default","defaultEvmDappModalConfig","defaultEvmWalletModalConfig","defaultOtherModalConfig","defaultSolanaDappModalConfig","defaultSolanaWalletModalConfig"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _interface__WEBPACK_IMPORTED_MODULE_1__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _modalManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(683);



})();

module.exports = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=web3auth.cjs.js.map