import _defineProperty from '@babel/runtime/helpers/defineProperty';
import Torus from '@toruslabs/solana-embed';
import { BaseAdapter, WALLET_ADAPTERS, ADAPTER_NAMESPACES, CHAIN_NAMESPACES, ADAPTER_CATEGORY, ADAPTER_STATUS, getChainConfig, log, ADAPTER_EVENTS, WalletInitializationError, Web3AuthError, WalletLoginError } from '@web3auth/base';
import { TorusInjectedProvider } from '@web3auth/solana-provider';

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
class SolanaWalletAdapter extends BaseAdapter {
  constructor() {
    let params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    super();

    _defineProperty(this, "name", WALLET_ADAPTERS.TORUS_SOLANA);

    _defineProperty(this, "adapterNamespace", ADAPTER_NAMESPACES.SOLANA);

    _defineProperty(this, "currentChainNamespace", CHAIN_NAMESPACES.SOLANA);

    _defineProperty(this, "type", ADAPTER_CATEGORY.EXTERNAL);

    _defineProperty(this, "status", ADAPTER_STATUS.NOT_READY);

    _defineProperty(this, "torusInstance", null);

    _defineProperty(this, "torusWalletOptions", void 0);

    _defineProperty(this, "initParams", void 0);

    _defineProperty(this, "loginSettings", {});

    _defineProperty(this, "solanaProvider", null);

    _defineProperty(this, "rehydrated", false);

    this.torusWalletOptions = params.adapterSettings || {};
    this.initParams = params.initParams || {};
    this.loginSettings = params.loginSettings || {};
    this.chainConfig = params.chainConfig || null;
  }

  get provider() {
    if (this.status === ADAPTER_STATUS.CONNECTED && this.solanaProvider) {
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
      this.chainConfig = getChainConfig(CHAIN_NAMESPACES.SOLANA, "0x1");
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

    this.torusInstance = new Torus(this.torusWalletOptions);
    log.debug("initializing torus solana adapter init");
    await this.torusInstance.init(_objectSpread(_objectSpread({
      showTorusButton: false
    }, this.initParams), {}, {
      network
    }));
    this.solanaProvider = new TorusInjectedProvider({
      config: {
        chainConfig: this.chainConfig
      }
    });
    this.status = ADAPTER_STATUS.READY;
    this.emit(ADAPTER_EVENTS.READY, WALLET_ADAPTERS.TORUS_SOLANA);

    try {
      log.debug("initializing torus solana adapter");

      if (options.autoConnect) {
        this.rehydrated = true;
        await this.connect();
      }
    } catch (error) {
      log.error("Failed to connect with cached torus solana provider", error);
      this.emit(ADAPTER_EVENTS.ERRORED, error);
    }
  }

  async connect() {
    super.checkConnectionRequirements();
    if (!this.torusInstance) throw WalletInitializationError.notReady("Torus wallet is not initialized");
    if (!this.solanaProvider) throw WalletInitializationError.notReady("Torus wallet is not initialized");
    this.status = ADAPTER_STATUS.CONNECTING;
    this.emit(ADAPTER_EVENTS.CONNECTING, {
      adapter: WALLET_ADAPTERS.TORUS_SOLANA
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
        if (error instanceof Web3AuthError && error.code === 5010) {
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

      this.status = ADAPTER_STATUS.CONNECTED;
      this.torusInstance.showTorusButton();
      this.emit(ADAPTER_STATUS.CONNECTED, {
        adapter: WALLET_ADAPTERS.TORUS_SOLANA,
        reconnected: this.rehydrated
      });
      return this.provider;
    } catch (error) {
      // ready again to be connected
      this.status = ADAPTER_STATUS.READY;
      this.rehydrated = false;
      this.emit(ADAPTER_EVENTS.ERRORED, error);
      throw WalletLoginError.connectionError("Failed to login with torus solana wallet");
    }
  }

  async disconnect() {
    let options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
      cleanup: false
    };
    if (this.status !== ADAPTER_STATUS.CONNECTED) throw WalletLoginError.notConnectedError("Not connected with wallet");
    if (!this.torusInstance) throw WalletInitializationError.notReady("Torus wallet is not initialized");
    await this.torusInstance.logout();

    if (options.cleanup) {
      // ready to connect again
      this.status = ADAPTER_STATUS.NOT_READY;
      this.torusInstance = null;
      this.solanaProvider = null;
    } else {
      // ready to connect again
      this.status = ADAPTER_STATUS.READY;
    }

    this.emit(ADAPTER_EVENTS.DISCONNECTED);
  }

  async getUserInfo() {
    if (this.status !== ADAPTER_STATUS.CONNECTED) throw WalletLoginError.notConnectedError("Not connected with wallet");
    if (!this.torusInstance) throw WalletInitializationError.notReady("Torus wallet is not initialized");
    const userInfo = await this.torusInstance.getUserInfo();
    return userInfo;
  }

  setAdapterSettings(_) {}

}

export { SolanaWalletAdapter };
//# sourceMappingURL=torusSolanaAdapter.esm.js.map
