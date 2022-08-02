import { SafeEventEmitter } from "@toruslabs/openlogin-jrpc";
import {
  ADAPTER_EVENTS,
  ADAPTER_NAMESPACES,
  ADAPTER_STATUS,
  ADAPTER_STATUS_TYPE,
  CHAIN_NAMESPACES,
  CONNECTED_EVENT_DATA,
  CustomChainConfig,
  getChainConfig,
  IAdapter,
  IWeb3Auth,
  log,
  SafeEventEmitterProvider,
  storageAvailable,
  UserInfo,
  WALLET_ADAPTER_TYPE,
  WalletInitializationError,
  WalletLoginError,
  Web3AuthError,
} from "@web3auth/base";
import { IPlugin, PLUGIN_NAMESPACES } from "@web3auth/base-plugin";

export interface Web3AuthCoreOptions {
  /**
   * custom chain configuration for chainNamespace
   *
   * @defaultValue mainnet config of provided chainNamespace
   */
  chainConfig: Partial<CustomChainConfig> & Pick<CustomChainConfig, "chainNamespace">;

  /**
   * setting to true will enable logs
   *
   * @defaultValue false
   */
  enableLogging?: boolean;
  /**
   * setting to "local" will persist social login session accross browser tabs.
   *
   * @defaultValue "local"
   */
  storageKey?: "session" | "local";
}

const ADAPTER_CACHE_KEY = "Web3Auth-cachedAdapter";
export class Web3AuthCore extends SafeEventEmitter implements IWeb3Auth {
  readonly coreOptions: Web3AuthCoreOptions;

  public connectedAdapterName: string | null = null;

  public status: ADAPTER_STATUS_TYPE = ADAPTER_STATUS.NOT_READY;

  public cachedAdapter: string | null = null;

  protected walletAdapters: Record<string, IAdapter<unknown>> = {};

  private plugins: Record<string, IPlugin> = {};

  private storage: "sessionStorage" | "localStorage" = "localStorage";

  constructor(options: Web3AuthCoreOptions) {
    super();
    if (options.enableLogging) log.enableAll();
    else log.disableAll();
    if (!options.chainConfig?.chainNamespace || !Object.values(CHAIN_NAMESPACES).includes(options.chainConfig?.chainNamespace))
      throw WalletInitializationError.invalidParams("Please provide a valid chainNamespace in chainConfig");
    if (options.storageKey === "session") this.storage = "sessionStorage";
    this.cachedAdapter = storageAvailable(this.storage) ? window[this.storage].getItem(ADAPTER_CACHE_KEY) : null;

    this.coreOptions = {
      ...options,
      chainConfig: {
        ...(getChainConfig(options.chainConfig?.chainNamespace, options.chainConfig?.chainId) || {}),
        ...options.chainConfig,
      },
    };
    this.subscribeToAdapterEvents = this.subscribeToAdapterEvents.bind(this);
  }

  get provider(): SafeEventEmitterProvider | null {
    if (this.status === ADAPTER_STATUS.CONNECTED && this.connectedAdapterName) {
      const adapter = this.walletAdapters[this.connectedAdapterName];
      return adapter.provider;
    }
    return null;
  }

  set provider(_: SafeEventEmitterProvider | null) {
    throw new Error("Not implemented");
  }

  public async init(): Promise<void> {
    const initPromises = Object.keys(this.walletAdapters).map((adapterName) => {
      this.subscribeToAdapterEvents(this.walletAdapters[adapterName]);
      // if adapter doesn't have any chain config yet thn set it based on provided namespace and chainId.
      // if no chainNamespace or chainId is being provided, it will connect with mainnet.
      if (!this.walletAdapters[adapterName].chainConfigProxy) {
        const providedChainConfig = this.coreOptions.chainConfig;
        if (!providedChainConfig.chainNamespace) throw WalletInitializationError.invalidParams("Please provide chainNamespace in chainConfig");
        const chainConfig = {
          ...getChainConfig(providedChainConfig.chainNamespace, providedChainConfig.chainId),
          ...providedChainConfig,
        } as CustomChainConfig;
        this.walletAdapters[adapterName].setChainConfig(chainConfig);
      }
      return this.walletAdapters[adapterName].init({ autoConnect: this.cachedAdapter === adapterName }).catch((e) => log.error(e));
    });
    this.status = ADAPTER_STATUS.READY;
    await Promise.all(initPromises);
  }

  public configureAdapter(adapter: IAdapter<unknown>): Web3AuthCore {
    this.checkInitRequirements();
    const providedChainConfig = this.coreOptions.chainConfig;

    if (!providedChainConfig.chainNamespace) throw WalletInitializationError.invalidParams("Please provide chainNamespace in chainConfig");

    const adapterAlreadyExists = this.walletAdapters[adapter.name];
    if (adapterAlreadyExists) throw WalletInitializationError.duplicateAdapterError(`Wallet adapter for ${adapter.name} already exists`);
    if (adapter.adapterNamespace !== ADAPTER_NAMESPACES.MULTICHAIN && adapter.adapterNamespace !== providedChainConfig.chainNamespace)
      throw WalletInitializationError.incompatibleChainNameSpace(
        `This wallet adapter belongs to ${adapter.adapterNamespace} which is incompatible with currently used namespace: ${providedChainConfig.chainNamespace}`
      );

    if (
      adapter.adapterNamespace === ADAPTER_NAMESPACES.MULTICHAIN &&
      adapter.currentChainNamespace &&
      providedChainConfig.chainNamespace !== adapter.currentChainNamespace
    ) {
      // chainConfig checks are already validated in constructor so using typecast is safe here.
      adapter.setChainConfig(providedChainConfig as CustomChainConfig);
    }

    this.walletAdapters[adapter.name] = adapter;
    return this;
  }

  public clearCache() {
    if (!storageAvailable(this.storage)) return;
    window[this.storage].removeItem(ADAPTER_CACHE_KEY);
    this.cachedAdapter = null;
  }

  /**
   * Connect to a specific wallet adapter
   * @param walletName - Key of the walletAdapter to use.
   */
  async connectTo<T>(walletName: WALLET_ADAPTER_TYPE, loginParams?: T): Promise<SafeEventEmitterProvider | null> {
    if (!this.walletAdapters[walletName])
      throw WalletInitializationError.notFound(`Please add wallet adapter for ${walletName} wallet, before connecting`);
    const provider = await this.walletAdapters[walletName].connect(loginParams);
    return provider;
  }

  async logout(options: { cleanup: boolean } = { cleanup: false }): Promise<void> {
    if (this.status !== ADAPTER_STATUS.CONNECTED || !this.connectedAdapterName) throw WalletLoginError.notConnectedError(`No wallet is connected`);
    await this.walletAdapters[this.connectedAdapterName].disconnect(options);
  }

  async getUserInfo(): Promise<Partial<UserInfo>> {
    log.debug("Getting user info", this.status, this.connectedAdapterName);
    if (this.status !== ADAPTER_STATUS.CONNECTED || !this.connectedAdapterName) throw WalletLoginError.notConnectedError(`No wallet is connected`);
    return this.walletAdapters[this.connectedAdapterName].getUserInfo();
  }

  public async addPlugin(plugin: IPlugin): Promise<IWeb3Auth> {
    if (this.plugins[plugin.name]) throw new Error(`Plugin ${plugin.name} already exist`);
    if (plugin.pluginNamespace !== PLUGIN_NAMESPACES.MULTICHAIN && plugin.pluginNamespace !== this.coreOptions.chainConfig.chainNamespace)
      throw new Error(
        `This plugin belongs to ${plugin.pluginNamespace} namespace which is incompatible with currently used namespace: ${this.coreOptions.chainConfig.chainNamespace}`
      );

    this.plugins[plugin.name] = plugin;
    await plugin.initWithWeb3Auth(this);
    return this;
  }

  protected subscribeToAdapterEvents(walletAdapter: IAdapter<unknown>): void {
    walletAdapter.on(ADAPTER_EVENTS.CONNECTED, async (data: CONNECTED_EVENT_DATA) => {
      this.status = ADAPTER_STATUS.CONNECTED;
      this.connectedAdapterName = data.adapter;
      this.cacheWallet(data.adapter);
      log.debug("connected", this.status, this.connectedAdapterName);
      await Promise.all(
        Object.values(this.plugins).map((plugin) => {
          return plugin.connect().catch((error: Web3AuthError) => {
            // swallow error if connector adapter doesn't supports this plugin.
            if (error.code === 5211) {
              return;
            }
            // throw error;
            log.error(error);
          });
        })
      );
      this.emit(ADAPTER_EVENTS.CONNECTED, { ...data } as CONNECTED_EVENT_DATA);
    });

    walletAdapter.on(ADAPTER_EVENTS.DISCONNECTED, async (data) => {
      // get back to ready state for rehydrating.
      this.status = ADAPTER_STATUS.READY;
      if (storageAvailable(this.storage)) {
        const cachedAdapter = window[this.storage].getItem(ADAPTER_CACHE_KEY);
        if (this.connectedAdapterName === cachedAdapter) {
          this.clearCache();
        }
      }

      log.debug("disconnected", this.status, this.connectedAdapterName);
      await Promise.all(
        Object.values(this.plugins).map((plugin) => {
          return plugin.disconnect().catch((error: Web3AuthError) => {
            // swallow error if adapter doesn't supports this plugin.
            if (error.code === 5211) {
              return;
            }
            // throw error;
            log.error(error);
          });
        })
      );
      this.connectedAdapterName = null;
      this.emit(ADAPTER_EVENTS.DISCONNECTED, data);
    });
    walletAdapter.on(ADAPTER_EVENTS.CONNECTING, (data) => {
      this.status = ADAPTER_STATUS.CONNECTING;
      this.emit(ADAPTER_EVENTS.CONNECTING, data);
      log.debug("connecting", this.status, this.connectedAdapterName);
    });
    walletAdapter.on(ADAPTER_EVENTS.ERRORED, (data) => {
      this.status = ADAPTER_STATUS.ERRORED;
      this.clearCache();
      this.emit(ADAPTER_EVENTS.ERRORED, data);
      log.debug("errored", this.status, this.connectedAdapterName);
    });

    walletAdapter.on(ADAPTER_EVENTS.ADAPTER_DATA_UPDATED, (data) => {
      log.debug("adapter data updated", data);
      this.emit(ADAPTER_EVENTS.ADAPTER_DATA_UPDATED, data);
    });
  }

  protected checkInitRequirements(): void {
    if (this.status === ADAPTER_STATUS.CONNECTING) throw WalletInitializationError.notReady("Already pending connection");
    if (this.status === ADAPTER_STATUS.CONNECTED) throw WalletInitializationError.notReady("Already connected");
    if (this.status === ADAPTER_STATUS.READY) throw WalletInitializationError.notReady("Adapter is already initialized");
  }

  private cacheWallet(walletName: string) {
    if (!storageAvailable(this.storage)) return;
    window[this.storage].setItem(ADAPTER_CACHE_KEY, walletName);
    this.cachedAdapter = walletName;
  }
}
