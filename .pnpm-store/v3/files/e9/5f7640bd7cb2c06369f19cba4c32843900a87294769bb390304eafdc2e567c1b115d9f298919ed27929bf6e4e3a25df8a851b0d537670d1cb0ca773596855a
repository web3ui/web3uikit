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
import { IPhantomWalletProvider, PhantomInjectedProvider } from "@web3auth/solana-provider";

import { detectProvider } from "./utils";
export interface PhantomAdapterOptions {
  chainConfig?: CustomChainConfig;
}

export class PhantomAdapter extends BaseAdapter<void> {
  readonly name: string = WALLET_ADAPTERS.PHANTOM;

  readonly adapterNamespace: AdapterNamespaceType = ADAPTER_NAMESPACES.SOLANA;

  readonly currentChainNamespace: ChainNamespaceType = CHAIN_NAMESPACES.SOLANA;

  readonly type: ADAPTER_CATEGORY_TYPE = ADAPTER_CATEGORY.EXTERNAL;

  public status: ADAPTER_STATUS_TYPE = ADAPTER_STATUS.NOT_READY;

  public _wallet: IPhantomWalletProvider | null = null;

  private phantomProvider: PhantomInjectedProvider | null = null;

  private rehydrated = false;

  constructor(options: PhantomAdapterOptions = {}) {
    super();
    this.chainConfig = options.chainConfig || null;
  }

  get isWalletConnected(): boolean {
    return !!(this._wallet?.isConnected && this.status === ADAPTER_STATUS.CONNECTED);
  }

  get provider(): SafeEventEmitterProvider | null {
    return this.phantomProvider?.provider || null;
  }

  set provider(_: SafeEventEmitterProvider | null) {
    throw new Error("Not implemented");
  }

  setAdapterSettings(_: unknown): void {}

  async init(options: AdapterInitOptions): Promise<void> {
    super.checkInitializationRequirements();
    // set chainConfig for mainnet by default if not set
    if (!this.chainConfig) {
      this.chainConfig = getChainConfig(CHAIN_NAMESPACES.SOLANA, "0x1");
    }
    this._wallet = await detectProvider({ interval: 500, count: 3 });
    if (!this._wallet) throw WalletInitializationError.notInstalled();
    this.phantomProvider = new PhantomInjectedProvider({ config: { chainConfig: this.chainConfig as CustomChainConfig } });
    this.status = ADAPTER_STATUS.READY;
    this.emit(ADAPTER_EVENTS.READY, WALLET_ADAPTERS.PHANTOM);

    try {
      log.debug("initializing phantom adapter");
      if (options.autoConnect) {
        this.rehydrated = true;
        await this.connect();
      }
    } catch (error) {
      log.error("Failed to connect with cached phantom provider", error);
      this.emit("ERRORED", error);
    }
  }

  async connect(): Promise<SafeEventEmitterProvider | null> {
    try {
      super.checkConnectionRequirements();
      this.status = ADAPTER_STATUS.CONNECTING;
      this.emit(ADAPTER_EVENTS.CONNECTING, { adapter: WALLET_ADAPTERS.PHANTOM });

      if (!this._wallet) throw WalletInitializationError.notInstalled();
      if (!this._wallet.isConnected) {
        const handleDisconnect = this._wallet._handleDisconnect;
        try {
          await new Promise<SafeEventEmitterProvider | null>((resolve, reject) => {
            const connect = async () => {
              await this.connectWithProvider(this._wallet as IPhantomWalletProvider);
              resolve(this.provider);
            };
            if (!this._wallet) return reject(WalletInitializationError.notInstalled());
            this._wallet.once("connect", connect);
            // Raise an issue on phantom that if window is closed, disconnect event is not fired
            (this._wallet as IPhantomWalletProvider)._handleDisconnect = (...args: unknown[]) => {
              reject(WalletInitializationError.windowClosed());
              return handleDisconnect.apply(this._wallet, args);
            };

            this._wallet.connect().catch((reason: unknown) => {
              reject(reason);
            });
          });
        } catch (error: unknown) {
          if (error instanceof Web3AuthError) throw error;
          throw WalletLoginError.connectionError((error as Error)?.message);
        } finally {
          this._wallet._handleDisconnect = handleDisconnect;
        }
      } else {
        await this.connectWithProvider(this._wallet);
      }

      if (!this._wallet.publicKey) throw WalletLoginError.connectionError();
      this._wallet.on("disconnect", this._onDisconnect);

      return this.provider;
    } catch (error: unknown) {
      // ready again to be connected
      this.status = ADAPTER_STATUS.READY;
      this.rehydrated = false;
      this.emit(ADAPTER_EVENTS.ERRORED, error);
      throw error;
    }
  }

  async disconnect(options: { cleanup: boolean } = { cleanup: false }): Promise<void> {
    if (!this.isWalletConnected) throw WalletLoginError.notConnectedError("Not connected with wallet");
    try {
      await this._wallet?.disconnect();
      if (options.cleanup) {
        this.status = ADAPTER_STATUS.NOT_READY;
        this.phantomProvider = null;
        this._wallet = null;
      }
      this.emit(ADAPTER_EVENTS.DISCONNECTED);
    } catch (error: unknown) {
      this.emit(ADAPTER_EVENTS.ERRORED, WalletLoginError.disconnectionError((error as Error)?.message));
    }
  }

  async getUserInfo(): Promise<Partial<UserInfo>> {
    if (!this.isWalletConnected) throw WalletLoginError.notConnectedError("Not connected with wallet, Please login/connect first");
    return {};
  }

  private async connectWithProvider(injectedProvider: IPhantomWalletProvider): Promise<SafeEventEmitterProvider | null> {
    if (!this.phantomProvider) throw WalletLoginError.connectionError("No phantom provider");
    await this.phantomProvider.setupProvider(injectedProvider);
    this.status = ADAPTER_STATUS.CONNECTED;
    this.emit(ADAPTER_EVENTS.CONNECTED, { adapter: WALLET_ADAPTERS.PHANTOM, reconnected: this.rehydrated } as CONNECTED_EVENT_DATA);
    return this.provider;
  }

  private _onDisconnect = () => {
    if (this._wallet) {
      this._wallet.off("disconnect", this._onDisconnect);
      this.rehydrated = false;
      // ready to be connected again only if it was previously connected and not cleaned up
      this.status = this.status === ADAPTER_STATUS.CONNECTED ? ADAPTER_STATUS.READY : ADAPTER_STATUS.NOT_READY;
      this.emit(ADAPTER_EVENTS.DISCONNECTED);
    }
  };
}
