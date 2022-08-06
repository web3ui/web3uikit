import _defineProperty from '@babel/runtime/helpers/defineProperty';
import detectEthereumProvider from '@metamask/detect-provider';
import { BaseAdapter, ADAPTER_NAMESPACES, CHAIN_NAMESPACES, ADAPTER_CATEGORY, WALLET_ADAPTERS, ADAPTER_STATUS, WalletInitializationError, ADAPTER_EVENTS, log, getChainConfig, WalletLoginError } from '@web3auth/base';

class MetamaskAdapter extends BaseAdapter {
  constructor() {
    let adapterOptions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    super();

    _defineProperty(this, "adapterNamespace", ADAPTER_NAMESPACES.EIP155);

    _defineProperty(this, "currentChainNamespace", CHAIN_NAMESPACES.EIP155);

    _defineProperty(this, "type", ADAPTER_CATEGORY.EXTERNAL);

    _defineProperty(this, "name", WALLET_ADAPTERS.METAMASK);

    _defineProperty(this, "status", ADAPTER_STATUS.NOT_READY);

    _defineProperty(this, "rehydrated", false);

    _defineProperty(this, "metamaskProvider", null);

    this.chainConfig = adapterOptions.chainConfig || null;
  }

  get provider() {
    if (this.status === ADAPTER_STATUS.CONNECTED && this.metamaskProvider) {
      return this.metamaskProvider;
    }

    return null;
  }

  set provider(_) {
    throw new Error("Not implemented");
  }

  async init(options) {
    super.checkInitializationRequirements();
    this.metamaskProvider = await detectEthereumProvider({
      mustBeMetaMask: true
    });
    if (!this.metamaskProvider) throw WalletInitializationError.notInstalled("Metamask extension is not installed");
    this.status = ADAPTER_STATUS.READY;
    this.emit(ADAPTER_EVENTS.READY, WALLET_ADAPTERS.METAMASK);

    try {
      log.debug("initializing metamask adapter");

      if (options.autoConnect) {
        this.rehydrated = true;
        await this.connect();
      }
    } catch (error) {
      this.emit(ADAPTER_EVENTS.ERRORED, error);
    }
  }

  setAdapterSettings(_) {}

  async connect() {
    super.checkConnectionRequirements(); // set default to mainnet

    if (!this.chainConfig) this.chainConfig = getChainConfig(CHAIN_NAMESPACES.EIP155, 1);
    this.status = ADAPTER_STATUS.CONNECTING;
    this.emit(ADAPTER_EVENTS.CONNECTING, {
      adapter: WALLET_ADAPTERS.METAMASK
    });
    if (!this.metamaskProvider) throw WalletLoginError.notConnectedError("Not able to connect with metamask");

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

      this.status = ADAPTER_STATUS.CONNECTED;
      if (!this.provider) throw WalletLoginError.notConnectedError("Failed to connect with provider");
      this.provider.once("disconnect", () => {
        // ready to be connected again
        this.disconnect();
      });
      this.emit(ADAPTER_EVENTS.CONNECTED, {
        adapter: WALLET_ADAPTERS.METAMASK,
        reconnected: this.rehydrated
      });
      return this.provider;
    } catch (error) {
      // ready again to be connected
      this.status = ADAPTER_STATUS.READY;
      this.rehydrated = false;
      this.emit(ADAPTER_EVENTS.ERRORED, error);
      throw WalletLoginError.connectionError("Failed to login with metamask wallet");
    }
  }

  async disconnect() {
    var _this$provider;

    let options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
      cleanup: false
    };
    if (this.status !== ADAPTER_STATUS.CONNECTED) throw WalletLoginError.disconnectionError("Not connected with wallet");
    (_this$provider = this.provider) === null || _this$provider === void 0 ? void 0 : _this$provider.removeAllListeners();

    if (options.cleanup) {
      this.status = ADAPTER_STATUS.NOT_READY;
      this.metamaskProvider = null;
    } else {
      // ready to be connected again
      this.status = ADAPTER_STATUS.READY;
    }

    this.rehydrated = false;
    this.emit(ADAPTER_EVENTS.DISCONNECTED);
  }

  async getUserInfo() {
    if (this.status !== ADAPTER_STATUS.CONNECTED) throw WalletLoginError.notConnectedError("Not connected with wallet, Please login/connect first");
    return {};
  }

  async switchChain(chainConfig) {
    if (!this.metamaskProvider) throw WalletLoginError.notConnectedError("Not connected with wallet");

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

export { MetamaskAdapter };
//# sourceMappingURL=metamaskAdapter.esm.js.map
