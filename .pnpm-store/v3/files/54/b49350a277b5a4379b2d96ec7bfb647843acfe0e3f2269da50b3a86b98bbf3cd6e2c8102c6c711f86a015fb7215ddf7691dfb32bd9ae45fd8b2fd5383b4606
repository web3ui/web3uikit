import _defineProperty from '@babel/runtime/helpers/defineProperty';
import Torus from '@toruslabs/torus-embed';
import { BaseAdapter, WALLET_ADAPTERS, ADAPTER_NAMESPACES, CHAIN_NAMESPACES, ADAPTER_CATEGORY, ADAPTER_STATUS, getChainConfig, log, ADAPTER_EVENTS, WalletInitializationError, Web3AuthError, WalletLoginError } from '@web3auth/base';

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
class TorusWalletAdapter extends BaseAdapter {
  constructor() {
    let params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    super();

    _defineProperty(this, "name", WALLET_ADAPTERS.TORUS_EVM);

    _defineProperty(this, "adapterNamespace", ADAPTER_NAMESPACES.EIP155);

    _defineProperty(this, "currentChainNamespace", CHAIN_NAMESPACES.EIP155);

    _defineProperty(this, "type", ADAPTER_CATEGORY.EXTERNAL);

    _defineProperty(this, "status", ADAPTER_STATUS.NOT_READY);

    _defineProperty(this, "torusInstance", null);

    _defineProperty(this, "torusWalletOptions", void 0);

    _defineProperty(this, "initParams", void 0);

    _defineProperty(this, "loginSettings", {});

    _defineProperty(this, "rehydrated", false);

    this.torusWalletOptions = params.adapterSettings || {};
    this.initParams = params.initParams || {};
    this.loginSettings = params.loginSettings || {};
    this.chainConfig = params.chainConfig || null;
  }

  get provider() {
    if (this.status === ADAPTER_STATUS.CONNECTED && this.torusInstance) {
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
      this.chainConfig = getChainConfig(CHAIN_NAMESPACES.EIP155, 1);
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

    this.torusInstance = new Torus(this.torusWalletOptions);
    log.debug("initializing torus evm adapter init");
    await this.torusInstance.init(_objectSpread(_objectSpread({
      showTorusButton: false
    }, this.initParams), {}, {
      network
    }));
    this.status = ADAPTER_STATUS.READY;
    this.emit(ADAPTER_EVENTS.READY, WALLET_ADAPTERS.TORUS_EVM);

    try {
      log.debug("initializing torus evm adapter");

      if (options.autoConnect) {
        this.rehydrated = true;
        await this.connect();
      }
    } catch (error) {
      log.error("Failed to connect with torus evm provider", error);
      this.emit(ADAPTER_EVENTS.ERRORED, error);
    }
  }

  async connect() {
    super.checkConnectionRequirements();
    if (!this.torusInstance) throw WalletInitializationError.notReady("Torus wallet is not initialized");
    this.status = ADAPTER_STATUS.CONNECTING;
    this.emit(ADAPTER_EVENTS.CONNECTING, {
      adapter: WALLET_ADAPTERS.TORUS_EVM
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
          throw WalletInitializationError.fromCode(5000, "Not connected to correct chainId. Expected: ".concat(this.chainConfig.chainId, ", Current: ").concat(updatedChainID));
        }
      }

      this.status = ADAPTER_STATUS.CONNECTED;
      this.torusInstance.showTorusButton();
      this.emit(ADAPTER_STATUS.CONNECTED, {
        adapter: WALLET_ADAPTERS.TORUS_EVM,
        reconnected: this.rehydrated
      });
      return this.provider;
    } catch (error) {
      // ready again to be connected
      this.status = ADAPTER_STATUS.READY;
      this.rehydrated = false;
      this.emit(ADAPTER_STATUS.ERRORED, error);
      throw error instanceof Web3AuthError ? error : WalletLoginError.connectionError("Failed to login with torus wallet");
    }
  }

  async disconnect() {
    let options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
      cleanup: false
    };
    if (this.status !== ADAPTER_STATUS.CONNECTED) throw WalletLoginError.notConnectedError("Not connected with wallet");
    if (!this.torusInstance) throw WalletInitializationError.notReady("Torus wallet is not initialized");
    await this.torusInstance.logout();
    this.torusInstance.hideTorusButton();

    if (options.cleanup) {
      this.status = ADAPTER_STATUS.NOT_READY;
      this.torusInstance = null;
    } else {
      // ready to be connected again
      this.status = ADAPTER_STATUS.READY;
    }

    this.rehydrated = false;
    this.emit(ADAPTER_EVENTS.DISCONNECTED);
  }

  async getUserInfo() {
    if (this.status !== ADAPTER_STATUS.CONNECTED) throw WalletLoginError.notConnectedError("Not connected with wallet");
    if (!this.torusInstance) throw WalletInitializationError.notReady("Torus wallet is not initialized");
    const userInfo = await this.torusInstance.getUserInfo("");
    return userInfo;
  }

  setAdapterSettings(_) {}

}

export { TorusWalletAdapter };
//# sourceMappingURL=torusEvmAdapter.esm.js.map
