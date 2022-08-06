import Torus, { LoginParams, NetworkInterface, TorusCtorArgs, TorusParams } from "@toruslabs/torus-embed";
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
  Web3AuthError,
} from "@web3auth/base";

export interface TorusWalletOptions {
  adapterSettings?: TorusCtorArgs;
  loginSettings?: LoginParams;
  initParams?: Omit<TorusParams, "network">;
  chainConfig?: CustomChainConfig;
}

export class TorusWalletAdapter extends BaseAdapter<never> {
  readonly name: string = WALLET_ADAPTERS.TORUS_EVM;

  readonly adapterNamespace: AdapterNamespaceType = ADAPTER_NAMESPACES.EIP155;

  readonly currentChainNamespace: ChainNamespaceType = CHAIN_NAMESPACES.EIP155;

  readonly type: ADAPTER_CATEGORY_TYPE = ADAPTER_CATEGORY.EXTERNAL;

  public status: ADAPTER_STATUS_TYPE = ADAPTER_STATUS.NOT_READY;

  public torusInstance: Torus | null = null;

  private torusWalletOptions?: TorusCtorArgs;

  private initParams?: TorusParams;

  private loginSettings?: LoginParams = {};

  private rehydrated = false;

  constructor(params: TorusWalletOptions = {}) {
    super();
    this.torusWalletOptions = params.adapterSettings || {};
    this.initParams = params.initParams || {};
    this.loginSettings = params.loginSettings || {};
    this.chainConfig = params.chainConfig || null;
  }

  get provider(): SafeEventEmitterProvider | null {
    if (this.status === ADAPTER_STATUS.CONNECTED && this.torusInstance) {
      return this.torusInstance.provider as unknown as SafeEventEmitterProvider;
    }
    return null;
  }

  set provider(_: SafeEventEmitterProvider | null) {
    throw new Error("Not implemented");
  }

  async init(options: AdapterInitOptions): Promise<void> {
    super.checkInitializationRequirements();
    // set chainConfig for mainnet by default if not set
    let network: NetworkInterface;
    if (!this.chainConfig) {
      this.chainConfig = getChainConfig(CHAIN_NAMESPACES.EIP155, 1);
      const { blockExplorer, displayName } = this.chainConfig as CustomChainConfig;
      network = { chainId: 1, host: "mainnet", blockExplorer, networkName: displayName };
    } else {
      const { chainId, blockExplorer, displayName, rpcTarget } = this.chainConfig as CustomChainConfig;
      network = { chainId: parseInt(chainId as string, 16), host: rpcTarget, blockExplorer, networkName: displayName };
    }
    this.torusInstance = new Torus(this.torusWalletOptions);
    log.debug("initializing torus evm adapter init");
    await this.torusInstance.init({
      showTorusButton: false,
      ...this.initParams,
      network,
    });
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

  async connect(): Promise<SafeEventEmitterProvider | null> {
    super.checkConnectionRequirements();
    if (!this.torusInstance) throw WalletInitializationError.notReady("Torus wallet is not initialized");
    this.status = ADAPTER_STATUS.CONNECTING;
    this.emit(ADAPTER_EVENTS.CONNECTING, { adapter: WALLET_ADAPTERS.TORUS_EVM });
    try {
      await this.torusInstance.login(this.loginSettings);
      const { chainId } = this.torusInstance.provider;
      if (chainId && parseInt(chainId) !== parseInt((this.chainConfig as CustomChainConfig).chainId, 16)) {
        const { chainId: _chainId, blockExplorer, displayName, rpcTarget, ticker, tickerName } = this.chainConfig as CustomChainConfig;
        const network = {
          chainId: _chainId,
          host: rpcTarget,
          blockExplorerUrl: blockExplorer,
          networkName: displayName,
          tickerName,
          ticker,
          logo: "",
        };
        // in some cases when user manually switches chain and relogin then adapter will not connect to initially passed
        // chainConfig but will connect to the one that user switched to.
        // So here trying to switch network to the one that was initially passed in chainConfig.
        await this.torusInstance.setProvider({
          ...network,
        });
        const updatedChainID = await this.torusInstance.ethereum.request<string>({ method: "eth_chainId" });
        if (updatedChainID && parseInt(updatedChainID) !== parseInt((this.chainConfig as CustomChainConfig).chainId, 16)) {
          throw WalletInitializationError.fromCode(
            5000,
            `Not connected to correct chainId. Expected: ${(this.chainConfig as CustomChainConfig).chainId}, Current: ${updatedChainID}`
          );
        }
      }
      this.status = ADAPTER_STATUS.CONNECTED;
      this.torusInstance.showTorusButton();
      this.emit(ADAPTER_STATUS.CONNECTED, { adapter: WALLET_ADAPTERS.TORUS_EVM, reconnected: this.rehydrated } as CONNECTED_EVENT_DATA);
      return this.provider;
    } catch (error) {
      // ready again to be connected
      this.status = ADAPTER_STATUS.READY;
      this.rehydrated = false;
      this.emit(ADAPTER_STATUS.ERRORED, error);
      throw error instanceof Web3AuthError ? error : WalletLoginError.connectionError("Failed to login with torus wallet");
    }
  }

  async disconnect(options: { cleanup: boolean } = { cleanup: false }): Promise<void> {
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

  async getUserInfo(): Promise<Partial<UserInfo>> {
    if (this.status !== ADAPTER_STATUS.CONNECTED) throw WalletLoginError.notConnectedError("Not connected with wallet");
    if (!this.torusInstance) throw WalletInitializationError.notReady("Torus wallet is not initialized");
    const userInfo = await this.torusInstance.getUserInfo("");
    return userInfo;
  }

  setAdapterSettings(_: unknown): void {}
}
