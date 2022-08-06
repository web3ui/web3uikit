import Torus, { NetworkInterface, TorusCtorArgs, TorusLoginParams, TorusParams } from "@toruslabs/solana-embed";
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
import { ITorusWalletProvider, TorusInjectedProvider } from "@web3auth/solana-provider";

export interface SolanaWalletOptions {
  adapterSettings?: TorusCtorArgs;
  loginSettings?: TorusLoginParams;
  initParams?: Omit<TorusParams, "network">;
  chainConfig?: CustomChainConfig;
}

export class SolanaWalletAdapter extends BaseAdapter<void> {
  readonly name: string = WALLET_ADAPTERS.TORUS_SOLANA;

  readonly adapterNamespace: AdapterNamespaceType = ADAPTER_NAMESPACES.SOLANA;

  readonly currentChainNamespace: ChainNamespaceType = CHAIN_NAMESPACES.SOLANA;

  readonly type: ADAPTER_CATEGORY_TYPE = ADAPTER_CATEGORY.EXTERNAL;

  public status: ADAPTER_STATUS_TYPE = ADAPTER_STATUS.NOT_READY;

  public torusInstance: Torus | null = null;

  private torusWalletOptions?: TorusCtorArgs;

  private initParams?: TorusParams;

  private loginSettings?: TorusLoginParams = {};

  private solanaProvider: TorusInjectedProvider | null = null;

  private rehydrated = false;

  constructor(params: SolanaWalletOptions = {}) {
    super();
    this.torusWalletOptions = params.adapterSettings || {};
    this.initParams = params.initParams || {};
    this.loginSettings = params.loginSettings || {};
    this.chainConfig = params.chainConfig || null;
  }

  get provider(): SafeEventEmitterProvider | null {
    if (this.status === ADAPTER_STATUS.CONNECTED && this.solanaProvider) {
      return this.solanaProvider?.provider || null;
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
      this.chainConfig = getChainConfig(CHAIN_NAMESPACES.SOLANA, "0x1");
      const { blockExplorer, displayName, ticker, tickerName, rpcTarget, chainId } = this.chainConfig as CustomChainConfig;
      network = { chainId, rpcTarget, blockExplorerUrl: blockExplorer, displayName, ticker, tickerName, logo: "" };
    } else {
      const { chainId, blockExplorer, displayName, rpcTarget, ticker, tickerName } = this.chainConfig as CustomChainConfig;
      network = { chainId, rpcTarget, blockExplorerUrl: blockExplorer, displayName, tickerName, ticker, logo: "" };
    }
    this.torusInstance = new Torus(this.torusWalletOptions);
    log.debug("initializing torus solana adapter init");
    await this.torusInstance.init({ showTorusButton: false, ...this.initParams, network });

    this.solanaProvider = new TorusInjectedProvider({
      config: {
        chainConfig: this.chainConfig as CustomChainConfig,
      },
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

  async connect(): Promise<SafeEventEmitterProvider | null> {
    super.checkConnectionRequirements();
    if (!this.torusInstance) throw WalletInitializationError.notReady("Torus wallet is not initialized");
    if (!this.solanaProvider) throw WalletInitializationError.notReady("Torus wallet is not initialized");
    this.status = ADAPTER_STATUS.CONNECTING;
    this.emit(ADAPTER_EVENTS.CONNECTING, { adapter: WALLET_ADAPTERS.TORUS_SOLANA });
    try {
      await this.torusInstance.login(this.loginSettings);
      try {
        const torusInpageProvider = this.torusInstance.provider as unknown as ITorusWalletProvider;
        torusInpageProvider.sendTransaction = this.torusInstance.sendTransaction.bind(this.torusInstance);
        torusInpageProvider.signAllTransactions = this.torusInstance.signAllTransactions.bind(this.torusInstance);
        torusInpageProvider.signMessage = this.torusInstance.signMessage.bind(this.torusInstance);
        torusInpageProvider.signTransaction = this.torusInstance.signTransaction.bind(this.torusInstance);
        await this.solanaProvider.setupProvider(torusInpageProvider);
      } catch (error: unknown) {
        // some issue in solana wallet, always connecting to mainnet on init.
        // fallback to change network if not connected to correct one on login.
        if (error instanceof Web3AuthError && error.code === 5010) {
          const { chainId, blockExplorer, displayName, rpcTarget, ticker, tickerName } = this.chainConfig as CustomChainConfig;
          const network = { chainId, rpcTarget, blockExplorerUrl: blockExplorer, displayName, tickerName, ticker, logo: "" };
          await this.torusInstance.setProvider(network);
        } else {
          throw error;
        }
      }
      this.status = ADAPTER_STATUS.CONNECTED;
      this.torusInstance.showTorusButton();
      this.emit(ADAPTER_STATUS.CONNECTED, { adapter: WALLET_ADAPTERS.TORUS_SOLANA, reconnected: this.rehydrated } as CONNECTED_EVENT_DATA);
      return this.provider;
    } catch (error) {
      // ready again to be connected
      this.status = ADAPTER_STATUS.READY;
      this.rehydrated = false;
      this.emit(ADAPTER_EVENTS.ERRORED, error);
      throw WalletLoginError.connectionError("Failed to login with torus solana wallet");
    }
  }

  async disconnect(options: { cleanup: boolean } = { cleanup: false }): Promise<void> {
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

  async getUserInfo(): Promise<Partial<UserInfo>> {
    if (this.status !== ADAPTER_STATUS.CONNECTED) throw WalletLoginError.notConnectedError("Not connected with wallet");
    if (!this.torusInstance) throw WalletInitializationError.notReady("Torus wallet is not initialized");
    const userInfo = await this.torusInstance.getUserInfo();
    return userInfo;
  }

  setAdapterSettings(_: unknown): void {}
}
