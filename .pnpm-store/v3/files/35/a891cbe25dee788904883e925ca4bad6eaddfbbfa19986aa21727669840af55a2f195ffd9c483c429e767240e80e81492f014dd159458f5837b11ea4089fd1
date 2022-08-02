import _defineProperty from '@babel/runtime/helpers/defineProperty';
import { SafeEventEmitter } from '@toruslabs/openlogin-jrpc';
import { ADAPTER_STATUS, log, CHAIN_NAMESPACES, WalletInitializationError, storageAvailable, getChainConfig, ADAPTER_NAMESPACES, WalletLoginError, ADAPTER_EVENTS } from '@web3auth/base';
import { PLUGIN_NAMESPACES } from '@web3auth/base-plugin';

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
const ADAPTER_CACHE_KEY = "Web3Auth-cachedAdapter";
class Web3AuthCore extends SafeEventEmitter {
  constructor(options) {
    var _options$chainConfig, _options$chainConfig2, _options$chainConfig3, _options$chainConfig4;

    super();

    _defineProperty(this, "coreOptions", void 0);

    _defineProperty(this, "connectedAdapterName", null);

    _defineProperty(this, "status", ADAPTER_STATUS.NOT_READY);

    _defineProperty(this, "cachedAdapter", null);

    _defineProperty(this, "walletAdapters", {});

    _defineProperty(this, "plugins", {});

    _defineProperty(this, "storage", "localStorage");

    if (options.enableLogging) log.enableAll();else log.disableAll();
    if (!((_options$chainConfig = options.chainConfig) !== null && _options$chainConfig !== void 0 && _options$chainConfig.chainNamespace) || !Object.values(CHAIN_NAMESPACES).includes((_options$chainConfig2 = options.chainConfig) === null || _options$chainConfig2 === void 0 ? void 0 : _options$chainConfig2.chainNamespace)) throw WalletInitializationError.invalidParams("Please provide a valid chainNamespace in chainConfig");
    if (options.storageKey === "session") this.storage = "sessionStorage";
    this.cachedAdapter = storageAvailable(this.storage) ? window[this.storage].getItem(ADAPTER_CACHE_KEY) : null;
    this.coreOptions = _objectSpread(_objectSpread({}, options), {}, {
      chainConfig: _objectSpread(_objectSpread({}, getChainConfig((_options$chainConfig3 = options.chainConfig) === null || _options$chainConfig3 === void 0 ? void 0 : _options$chainConfig3.chainNamespace, (_options$chainConfig4 = options.chainConfig) === null || _options$chainConfig4 === void 0 ? void 0 : _options$chainConfig4.chainId) || {}), options.chainConfig)
    });
    this.subscribeToAdapterEvents = this.subscribeToAdapterEvents.bind(this);
  }

  get provider() {
    if (this.status === ADAPTER_STATUS.CONNECTED && this.connectedAdapterName) {
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
        if (!providedChainConfig.chainNamespace) throw WalletInitializationError.invalidParams("Please provide chainNamespace in chainConfig");

        const chainConfig = _objectSpread(_objectSpread({}, getChainConfig(providedChainConfig.chainNamespace, providedChainConfig.chainId)), providedChainConfig);

        this.walletAdapters[adapterName].setChainConfig(chainConfig);
      }

      return this.walletAdapters[adapterName].init({
        autoConnect: this.cachedAdapter === adapterName
      }).catch(e => log.error(e));
    });
    this.status = ADAPTER_STATUS.READY;
    await Promise.all(initPromises);
  }

  configureAdapter(adapter) {
    this.checkInitRequirements();
    const providedChainConfig = this.coreOptions.chainConfig;
    if (!providedChainConfig.chainNamespace) throw WalletInitializationError.invalidParams("Please provide chainNamespace in chainConfig");
    const adapterAlreadyExists = this.walletAdapters[adapter.name];
    if (adapterAlreadyExists) throw WalletInitializationError.duplicateAdapterError("Wallet adapter for ".concat(adapter.name, " already exists"));
    if (adapter.adapterNamespace !== ADAPTER_NAMESPACES.MULTICHAIN && adapter.adapterNamespace !== providedChainConfig.chainNamespace) throw WalletInitializationError.incompatibleChainNameSpace("This wallet adapter belongs to ".concat(adapter.adapterNamespace, " which is incompatible with currently used namespace: ").concat(providedChainConfig.chainNamespace));

    if (adapter.adapterNamespace === ADAPTER_NAMESPACES.MULTICHAIN && adapter.currentChainNamespace && providedChainConfig.chainNamespace !== adapter.currentChainNamespace) {
      // chainConfig checks are already validated in constructor so using typecast is safe here.
      adapter.setChainConfig(providedChainConfig);
    }

    this.walletAdapters[adapter.name] = adapter;
    return this;
  }

  clearCache() {
    if (!storageAvailable(this.storage)) return;
    window[this.storage].removeItem(ADAPTER_CACHE_KEY);
    this.cachedAdapter = null;
  }
  /**
   * Connect to a specific wallet adapter
   * @param walletName - Key of the walletAdapter to use.
   */


  async connectTo(walletName, loginParams) {
    if (!this.walletAdapters[walletName]) throw WalletInitializationError.notFound("Please add wallet adapter for ".concat(walletName, " wallet, before connecting"));
    const provider = await this.walletAdapters[walletName].connect(loginParams);
    return provider;
  }

  async logout() {
    let options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
      cleanup: false
    };
    if (this.status !== ADAPTER_STATUS.CONNECTED || !this.connectedAdapterName) throw WalletLoginError.notConnectedError("No wallet is connected");
    await this.walletAdapters[this.connectedAdapterName].disconnect(options);
  }

  async getUserInfo() {
    log.debug("Getting user info", this.status, this.connectedAdapterName);
    if (this.status !== ADAPTER_STATUS.CONNECTED || !this.connectedAdapterName) throw WalletLoginError.notConnectedError("No wallet is connected");
    return this.walletAdapters[this.connectedAdapterName].getUserInfo();
  }

  async addPlugin(plugin) {
    if (this.plugins[plugin.name]) throw new Error("Plugin ".concat(plugin.name, " already exist"));
    if (plugin.pluginNamespace !== PLUGIN_NAMESPACES.MULTICHAIN && plugin.pluginNamespace !== this.coreOptions.chainConfig.chainNamespace) throw new Error("This plugin belongs to ".concat(plugin.pluginNamespace, " namespace which is incompatible with currently used namespace: ").concat(this.coreOptions.chainConfig.chainNamespace));
    this.plugins[plugin.name] = plugin;
    await plugin.initWithWeb3Auth(this);
    return this;
  }

  subscribeToAdapterEvents(walletAdapter) {
    walletAdapter.on(ADAPTER_EVENTS.CONNECTED, async data => {
      this.status = ADAPTER_STATUS.CONNECTED;
      this.connectedAdapterName = data.adapter;
      this.cacheWallet(data.adapter);
      log.debug("connected", this.status, this.connectedAdapterName);
      await Promise.all(Object.values(this.plugins).map(plugin => {
        return plugin.connect().catch(error => {
          // swallow error if connector adapter doesn't supports this plugin.
          if (error.code === 5211) {
            return;
          } // throw error;


          log.error(error);
        });
      }));
      this.emit(ADAPTER_EVENTS.CONNECTED, _objectSpread({}, data));
    });
    walletAdapter.on(ADAPTER_EVENTS.DISCONNECTED, async data => {
      // get back to ready state for rehydrating.
      this.status = ADAPTER_STATUS.READY;

      if (storageAvailable(this.storage)) {
        const cachedAdapter = window[this.storage].getItem(ADAPTER_CACHE_KEY);

        if (this.connectedAdapterName === cachedAdapter) {
          this.clearCache();
        }
      }

      log.debug("disconnected", this.status, this.connectedAdapterName);
      await Promise.all(Object.values(this.plugins).map(plugin => {
        return plugin.disconnect().catch(error => {
          // swallow error if adapter doesn't supports this plugin.
          if (error.code === 5211) {
            return;
          } // throw error;


          log.error(error);
        });
      }));
      this.connectedAdapterName = null;
      this.emit(ADAPTER_EVENTS.DISCONNECTED, data);
    });
    walletAdapter.on(ADAPTER_EVENTS.CONNECTING, data => {
      this.status = ADAPTER_STATUS.CONNECTING;
      this.emit(ADAPTER_EVENTS.CONNECTING, data);
      log.debug("connecting", this.status, this.connectedAdapterName);
    });
    walletAdapter.on(ADAPTER_EVENTS.ERRORED, data => {
      this.status = ADAPTER_STATUS.ERRORED;
      this.clearCache();
      this.emit(ADAPTER_EVENTS.ERRORED, data);
      log.debug("errored", this.status, this.connectedAdapterName);
    });
    walletAdapter.on(ADAPTER_EVENTS.ADAPTER_DATA_UPDATED, data => {
      log.debug("adapter data updated", data);
      this.emit(ADAPTER_EVENTS.ADAPTER_DATA_UPDATED, data);
    });
  }

  checkInitRequirements() {
    if (this.status === ADAPTER_STATUS.CONNECTING) throw WalletInitializationError.notReady("Already pending connection");
    if (this.status === ADAPTER_STATUS.CONNECTED) throw WalletInitializationError.notReady("Already connected");
    if (this.status === ADAPTER_STATUS.READY) throw WalletInitializationError.notReady("Adapter is already initialized");
  }

  cacheWallet(walletName) {
    if (!storageAvailable(this.storage)) return;
    window[this.storage].setItem(ADAPTER_CACHE_KEY, walletName);
    this.cachedAdapter = walletName;
  }

}

export { Web3AuthCore };
//# sourceMappingURL=core.esm.js.map
