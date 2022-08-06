import detectEthereumProvider from "@metamask/detect-provider";
import {
  ADAPTER_CATEGORY,
  ADAPTER_CATEGORY_TYPE,
  ADAPTER_EVENTS,
  ADAPTER_NAMESPACES,
  ADAPTER_STATUS,
  ADAPTER_STATUS_TYPE,
  AdapterInitOptions,
  AdapterNamespaceType,
  BaseAdapter,
  CHAIN_NAMESPACES,
  ChainNamespaceType,
  CONNECTED_EVENT_DATA,
  CustomChainConfig,
  getChainConfig,
  log,
  SafeEventEmitterProvider,
  UserInfo,
  WALLET_ADAPTERS,
  WalletInitializationError,
  WalletLoginError,
} from "@web3auth/base";

interface EthereumProvider extends SafeEventEmitterProvider {
  isMetaMask?: boolean;
  isConnected: () => boolean;
  chainId: string;
}
export interface MetamaskAdapterOptions {
  chainConfig?: CustomChainConfig;
}

class MetamaskAdapter extends BaseAdapter<void> {
  readonly adapterNamespace: AdapterNamespaceType = ADAPTER_NAMESPACES.EIP155;

  readonly currentChainNamespace: ChainNamespaceType = CHAIN_NAMESPACES.EIP155;

  readonly type: ADAPTER_CATEGORY_TYPE = ADAPTER_CATEGORY.EXTERNAL;

  readonly name: string = WALLET_ADAPTERS.METAMASK;

  public status: ADAPTER_STATUS_TYPE = ADAPTER_STATUS.NOT_READY;

  private rehydrated = false;

  private metamaskProvider: EthereumProvider | null = null;

  constructor(adapterOptions: MetamaskAdapterOptions = {}) {
    super();
    this.chainConfig = adapterOptions.chainConfig || null;
  }

  get provider(): SafeEventEmitterProvider | null {
    if (this.status === ADAPTER_STATUS.CONNECTED && this.metamaskProvider) {
      return this.metamaskProvider as SafeEventEmitterProvider;
    }
    return null;
  }

  set provider(_: SafeEventEmitterProvider | null) {
    throw new Error("Not implemented");
  }

  async init(options: AdapterInitOptions): Promise<void> {
    super.checkInitializationRequirements();
    this.metamaskProvider = (await detectEthereumProvider({ mustBeMetaMask: true })) as EthereumProvider;
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

  setAdapterSettings(_: unknown): void {}

  async connect(): Promise<SafeEventEmitterProvider | null> {
    super.checkConnectionRequirements();
    // set default to mainnet
    if (!this.chainConfig) this.chainConfig = getChainConfig(CHAIN_NAMESPACES.EIP155, 1);

    this.status = ADAPTER_STATUS.CONNECTING;
    this.emit(ADAPTER_EVENTS.CONNECTING, { adapter: WALLET_ADAPTERS.METAMASK });
    if (!this.metamaskProvider) throw WalletLoginError.notConnectedError("Not able to connect with metamask");
    try {
      await this.metamaskProvider.request({ method: "eth_requestAccounts" });
      const { chainId } = this.metamaskProvider;
      if (chainId !== (this.chainConfig as CustomChainConfig).chainId) {
        await this.switchChain(this.chainConfig as CustomChainConfig);
      }
      this.status = ADAPTER_STATUS.CONNECTED;
      if (!this.provider) throw WalletLoginError.notConnectedError("Failed to connect with provider");
      this.provider.once("disconnect", () => {
        // ready to be connected again
        this.disconnect();
      });
      this.emit(ADAPTER_EVENTS.CONNECTED, { adapter: WALLET_ADAPTERS.METAMASK, reconnected: this.rehydrated } as CONNECTED_EVENT_DATA);
      return this.provider;
    } catch (error) {
      // ready again to be connected
      this.status = ADAPTER_STATUS.READY;
      this.rehydrated = false;
      this.emit(ADAPTER_EVENTS.ERRORED, error);
      throw WalletLoginError.connectionError("Failed to login with metamask wallet");
    }
  }

  async disconnect(options: { cleanup: boolean } = { cleanup: false }): Promise<void> {
    if (this.status !== ADAPTER_STATUS.CONNECTED) throw WalletLoginError.disconnectionError("Not connected with wallet");
    this.provider?.removeAllListeners();
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

  async getUserInfo(): Promise<Partial<UserInfo>> {
    if (this.status !== ADAPTER_STATUS.CONNECTED) throw WalletLoginError.notConnectedError("Not connected with wallet, Please login/connect first");
    return {};
  }

  private async switchChain(chainConfig: CustomChainConfig): Promise<void> {
    if (!this.metamaskProvider) throw WalletLoginError.notConnectedError("Not connected with wallet");
    try {
      await this.metamaskProvider.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: chainConfig.chainId }],
      });
    } catch (switchError: unknown) {
      // This error code indicates that the chain has not been added to MetaMask.
      if ((switchError as { code: number }).code === 4902) {
        await this.metamaskProvider.request({
          method: "wallet_addEthereumChain",
          params: [{ chainId: chainConfig.chainId, chainName: chainConfig.displayName, rpcUrls: [chainConfig.rpcTarget] }],
        });
      } else {
        throw switchError;
      }
    }
  }
}

export { MetamaskAdapter };
