import { CHAIN_NAMESPACES, SOLANA_ADAPTERS, EVM_ADAPTERS, getChainConfig, WALLET_ADAPTERS, log, ADAPTER_CATEGORY, ADAPTER_STATUS, ADAPTER_EVENTS } from '@web3auth/base';
import _defineProperty from '@babel/runtime/helpers/defineProperty';
import { Web3AuthCore } from '@web3auth/core';
import LoginModal, { getAdapterSocialLogins, OPENLOGIN_PROVIDERS, LOGIN_MODAL_EVENTS } from '@web3auth/ui';

const defaultSolanaDappModalConfig = {
  chainNamespace: CHAIN_NAMESPACES.SOLANA,
  adapters: {
    [SOLANA_ADAPTERS.TORUS_SOLANA]: {
      label: "Torus Wallet",
      showOnModal: true,
      showOnMobile: true,
      showOnDesktop: true
    },
    [SOLANA_ADAPTERS.OPENLOGIN]: {
      label: "OpenLogin",
      showOnModal: true,
      showOnMobile: true,
      showOnDesktop: true
    },
    [SOLANA_ADAPTERS.PHANTOM]: {
      label: "Phantom",
      showOnModal: true,
      showOnMobile: true,
      showOnDesktop: true
    }
  }
};
const defaultEvmDappModalConfig = {
  chainNamespace: CHAIN_NAMESPACES.EIP155,
  adapters: {
    [EVM_ADAPTERS.TORUS_EVM]: {
      label: "Torus Wallet",
      showOnModal: true,
      showOnMobile: true,
      showOnDesktop: true
    },
    [EVM_ADAPTERS.METAMASK]: {
      label: "MetaMask",
      showOnModal: true,
      showOnMobile: true,
      showOnDesktop: true
    },
    [EVM_ADAPTERS.OPENLOGIN]: {
      label: "OpenLogin",
      showOnModal: true,
      showOnMobile: true,
      showOnDesktop: true
    },
    [EVM_ADAPTERS.WALLET_CONNECT_V1]: {
      label: "Wallet Connect",
      showOnModal: true,
      showOnMobile: true,
      showOnDesktop: true
    }
  }
};
const defaultSolanaWalletModalConfig = {
  chainNamespace: CHAIN_NAMESPACES.SOLANA,
  adapters: {
    [SOLANA_ADAPTERS.OPENLOGIN]: {
      label: "OpenLogin",
      showOnModal: true,
      showOnMobile: true,
      showOnDesktop: true
    }
  }
};
const defaultEvmWalletModalConfig = {
  chainNamespace: CHAIN_NAMESPACES.EIP155,
  adapters: {
    [EVM_ADAPTERS.OPENLOGIN]: {
      label: "OpenLogin",
      showOnModal: true,
      showOnMobile: true,
      showOnDesktop: true
    }
  }
};
const defaultOtherModalConfig = {
  chainNamespace: CHAIN_NAMESPACES.OTHER,
  adapters: {
    [EVM_ADAPTERS.OPENLOGIN]: {
      label: "OpenLogin",
      showOnModal: true,
      showOnMobile: true,
      showOnDesktop: true
    }
  }
};

function ownKeys$1(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$1(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$1(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$1(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
const getDefaultAdapterModule = async params => {
  const {
    name,
    customChainConfig,
    clientId
  } = params;
  if (!Object.values(CHAIN_NAMESPACES).includes(customChainConfig.chainNamespace)) throw new Error("Invalid chainNamespace: ".concat(customChainConfig.chainNamespace));

  const finalChainConfig = _objectSpread$1(_objectSpread$1({}, getChainConfig(customChainConfig.chainNamespace, customChainConfig === null || customChainConfig === void 0 ? void 0 : customChainConfig.chainId)), customChainConfig || {});

  if (name === WALLET_ADAPTERS.TORUS_EVM) {
    const {
      TorusWalletAdapter
    } = await import('@web3auth/torus-evm-adapter');
    const adapter = new TorusWalletAdapter({
      chainConfig: finalChainConfig
    });
    return adapter;
  } else if (name === WALLET_ADAPTERS.TORUS_SOLANA) {
    const {
      SolanaWalletAdapter
    } = await import('@web3auth/torus-solana-adapter');
    const adapter = new SolanaWalletAdapter({
      chainConfig: finalChainConfig
    });
    return adapter;
  } else if (name === WALLET_ADAPTERS.METAMASK) {
    const {
      MetamaskAdapter
    } = await import('@web3auth/metamask-adapter');
    const adapter = new MetamaskAdapter({
      chainConfig: finalChainConfig
    });
    return adapter;
  } else if (name === WALLET_ADAPTERS.PHANTOM) {
    const {
      PhantomAdapter
    } = await import('@web3auth/phantom-adapter');
    const adapter = new PhantomAdapter({
      chainConfig: finalChainConfig
    });
    return adapter;
  } else if (name === WALLET_ADAPTERS.WALLET_CONNECT_V1) {
    const {
      WalletConnectV1Adapter
    } = await import('@web3auth/wallet-connect-v1-adapter');
    const adapter = new WalletConnectV1Adapter({
      chainConfig: finalChainConfig
    });
    return adapter;
  } else if (name === WALLET_ADAPTERS.OPENLOGIN) {
    const {
      OpenloginAdapter,
      getOpenloginDefaultOptions
    } = await import('@web3auth/openlogin-adapter');
    const defaultOptions = getOpenloginDefaultOptions(customChainConfig.chainNamespace, customChainConfig === null || customChainConfig === void 0 ? void 0 : customChainConfig.chainId);
    const adapter = new OpenloginAdapter(_objectSpread$1(_objectSpread$1({}, defaultOptions), {}, {
      chainConfig: _objectSpread$1(_objectSpread$1({}, defaultOptions.chainConfig || {}), finalChainConfig),
      adapterSettings: _objectSpread$1(_objectSpread$1({}, defaultOptions.adapterSettings), {}, {
        clientId
      })
    }));
    return adapter;
  }

  throw new Error("Invalid wallet adapter name");
};

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
class Web3Auth extends Web3AuthCore {
  constructor(options) {
    var _this$options$uiConfi, _this$options$uiConfi2;

    super(options);

    _defineProperty(this, "loginModal", void 0);

    _defineProperty(this, "options", void 0);

    _defineProperty(this, "modalConfig", defaultEvmDappModalConfig);

    this.options = _objectSpread({}, options);
    const providedChainConfig = this.options.chainConfig;

    if (providedChainConfig.chainNamespace === CHAIN_NAMESPACES.SOLANA) {
      if (options.authMode === "WALLET") {
        // default config for solana wallet modal
        this.modalConfig = defaultSolanaWalletModalConfig;
      } else {
        // default config for solana dapp modal
        this.modalConfig = defaultSolanaDappModalConfig;
      }
    } else if (providedChainConfig.chainNamespace === CHAIN_NAMESPACES.EIP155) {
      if (options.authMode === "WALLET") {
        // default config for evm wallet modal
        this.modalConfig = defaultEvmWalletModalConfig;
      } else {
        // default config for evm dapp modal
        this.modalConfig = defaultEvmDappModalConfig;
      }
    } else if (providedChainConfig.chainNamespace === CHAIN_NAMESPACES.OTHER) {
      this.modalConfig = defaultOtherModalConfig;
    } else {
      throw new Error("Invalid chainNamespace provided: ".concat(providedChainConfig.chainNamespace));
    }

    this.loginModal = new LoginModal({
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
        adapterConfig = _objectSpread(_objectSpread({}, adapterConfig), params.modalConfig[adapterName]);
      }

      this.modalConfig.adapters[adapterName] = adapterConfig; // check if adapter is configured/added by user and exist in walletAdapters map.

      const adapter = this.walletAdapters[adapterName];
      log.debug("adapter config", adapterName, (_this$modalConfig$ada2 = this.modalConfig.adapters) === null || _this$modalConfig$ada2 === void 0 ? void 0 : _this$modalConfig$ada2[adapterName].showOnModal, adapter); // if adapter is not custom configured then check if it is available in default adapters.
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
      } else if ((adapter === null || adapter === void 0 ? void 0 : adapter.type) === ADAPTER_CATEGORY.IN_APP || (adapter === null || adapter === void 0 ? void 0 : adapter.type) === ADAPTER_CATEGORY.EXTERNAL || adapterName === this.cachedAdapter) {
        var _this$modalConfig$ada4;

        if (!((_this$modalConfig$ada4 = this.modalConfig.adapters) !== null && _this$modalConfig$ada4 !== void 0 && _this$modalConfig$ada4[adapterName].showOnModal)) return; // add client id to openlogin adapter, same web3auth client id can be used in openlogin.
        // this id is being overridden if user is also passing client id in openlogin's adapter constructor.

        if (adapterName === WALLET_ADAPTERS.OPENLOGIN) {
          this.walletAdapters[adapterName].setAdapterSettings({
            clientId: this.options.clientId
          });
        } // if adapter doesn't have any chainConfig then we will set the chainConfig based of passed chainNamespace
        // and chainNamespace.


        if (!adapter.chainConfigProxy) {
          var _this$coreOptions$cha;

          const chainConfig = _objectSpread(_objectSpread({}, getChainConfig(providedChainConfig.chainNamespace, (_this$coreOptions$cha = this.coreOptions.chainConfig) === null || _this$coreOptions$cha === void 0 ? void 0 : _this$coreOptions$cha.chainId)), this.coreOptions.chainConfig);

          this.walletAdapters[adapterName].setChainConfig(chainConfig);
        }

        return adapterName;
      }
    });
    const adapterNames = await Promise.all(adapterConfigurationPromises);
    const hasInAppWallets = Object.values(this.walletAdapters).some(adapter => {
      var _this$modalConfig$ada5;

      if (adapter.type !== ADAPTER_CATEGORY.IN_APP) return false;
      if (this.modalConfig.adapters[adapter.name].showOnModal !== true) return false;
      if (!this.modalConfig.adapters[adapter.name].loginMethods) return true;
      const mergedLoginMethods = getAdapterSocialLogins(adapter.name, this.walletAdapters[adapter.name], (_this$modalConfig$ada5 = this.modalConfig.adapters[adapter.name]) === null || _this$modalConfig$ada5 === void 0 ? void 0 : _this$modalConfig$ada5.loginMethods);
      if (Object.values(mergedLoginMethods).some(method => method.showOnModal)) return true;
      return false;
    });
    log.debug(hasInAppWallets, this.walletAdapters, "hasInAppWallets"); // Now, initialize the adapters.

    const initPromises = adapterNames.map(async adapterName => {
      if (!adapterName) return;

      try {
        const adapter = this.walletAdapters[adapterName]; // only initialize a external adapter here if it is a cached adapter.

        if (this.cachedAdapter !== adapterName && adapter.type === ADAPTER_CATEGORY.EXTERNAL) {
          return;
        } // in-app wallets or cached wallet (being connected or already connected) are initialized first.
        // if adapter is configured thn only initialize in app or cached adapter.
        // external wallets are initialized on INIT_EXTERNAL_WALLET event.


        this.subscribeToAdapterEvents(adapter);
        if (adapter.status === ADAPTER_STATUS.NOT_READY) await adapter.init({
          autoConnect: this.cachedAdapter === adapterName
        }); // note: not adding cachedWallet to modal if it is external wallet.
        // adding it later if no in-app wallets are available.

        if (adapter.type === ADAPTER_CATEGORY.IN_APP) {
          this.initializeInAppWallet(adapterName);
        }
      } catch (error) {
        log.error(error, "error while initializing adapter");
      }
    });
    this.status = ADAPTER_STATUS.READY;
    await Promise.all(initPromises);
    const hasExternalWallets = allAdapters.some(adapterName => {
      var _this$walletAdapters$, _this$modalConfig$ada6;

      return ((_this$walletAdapters$ = this.walletAdapters[adapterName]) === null || _this$walletAdapters$ === void 0 ? void 0 : _this$walletAdapters$.type) === ADAPTER_CATEGORY.EXTERNAL && ((_this$modalConfig$ada6 = this.modalConfig.adapters) === null || _this$modalConfig$ada6 === void 0 ? void 0 : _this$modalConfig$ada6[adapterName].showOnModal);
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
      this.once(ADAPTER_EVENTS.CONNECTED, () => {
        return resolve(this.provider);
      });
      this.once(ADAPTER_EVENTS.ERRORED, err => {
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

        if ((adapter === null || adapter === void 0 ? void 0 : adapter.type) === ADAPTER_CATEGORY.EXTERNAL) {
          log.debug("init external wallet", this.cachedAdapter, adapterName);
          this.subscribeToAdapterEvents(adapter); // we are not initializing cached adapter here as it is already being initialized in initModal before.

          if (this.cachedAdapter === adapterName) {
            return;
          }

          if (adapter.status === ADAPTER_STATUS.NOT_READY) await adapter.init({
            autoConnect: this.cachedAdapter === adapterName
          });
          adaptersConfig[adapterName] = this.modalConfig.adapters[adapterName];
          adaptersData[adapterName] = adapter.adapterData || {};
          return adapterName;
        }
      } catch (error) {
        log.error(error, "error while initializing adapter");
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
    log.info("adapterInitResults", adapterName);

    if (this.walletAdapters[adapterName].type === ADAPTER_CATEGORY.IN_APP) {
      var _this$modalConfig$ada7, _this$options$uiConfi3;

      this.loginModal.addSocialLogins(adapterName, getAdapterSocialLogins(adapterName, this.walletAdapters[adapterName], (_this$modalConfig$ada7 = this.modalConfig.adapters[adapterName]) === null || _this$modalConfig$ada7 === void 0 ? void 0 : _this$modalConfig$ada7.loginMethods), ((_this$options$uiConfi3 = this.options.uiConfig) === null || _this$options$uiConfi3 === void 0 ? void 0 : _this$options$uiConfi3.loginMethodsOrder) || OPENLOGIN_PROVIDERS);
    }
  }

  subscribeToLoginModalEvents() {
    this.loginModal.on(LOGIN_MODAL_EVENTS.LOGIN, async params => {
      try {
        await this.connectTo(params.adapter, params.loginParams);
      } catch (error) {
        log.error("Error while connecting to adapter: ".concat(params.adapter), error);
      }
    });
    this.loginModal.on(LOGIN_MODAL_EVENTS.INIT_EXTERNAL_WALLETS, async params => {
      await this.initExternalWalletAdapters(params.externalWalletsInitialized);
    });
    this.loginModal.on(LOGIN_MODAL_EVENTS.DISCONNECT, async () => {
      try {
        await this.logout();
      } catch (error) {
        log.error("Error while disconnecting", error);
      }
    });
    this.loginModal.on(LOGIN_MODAL_EVENTS.MODAL_VISIBILITY, async visibility => {
      var _this$walletAdapters$2;

      log.debug("is login modal visible", visibility);
      this.emit(LOGIN_MODAL_EVENTS.MODAL_VISIBILITY, visibility);
      const walletConnectStatus = (_this$walletAdapters$2 = this.walletAdapters[WALLET_ADAPTERS.WALLET_CONNECT_V1]) === null || _this$walletAdapters$2 === void 0 ? void 0 : _this$walletAdapters$2.status;

      if (visibility && walletConnectStatus === ADAPTER_STATUS.READY) {
        // refreshing session for wallet connect whenever modal is opened.
        try {
          this.walletAdapters[WALLET_ADAPTERS.WALLET_CONNECT_V1].connect();
        } catch (error) {
          log.error("Error while disconnecting to wallet connect in core", error);
        }
      }
    });
  }

}

export { Web3Auth, defaultEvmDappModalConfig, defaultEvmWalletModalConfig, defaultOtherModalConfig, defaultSolanaDappModalConfig, defaultSolanaWalletModalConfig };
//# sourceMappingURL=web3auth.esm.js.map
