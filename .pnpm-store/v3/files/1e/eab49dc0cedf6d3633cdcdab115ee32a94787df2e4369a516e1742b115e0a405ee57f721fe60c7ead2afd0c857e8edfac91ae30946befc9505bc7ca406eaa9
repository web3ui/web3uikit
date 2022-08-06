import { SafeEventEmitter } from "@toruslabs/openlogin-jrpc";
import { ADAPTER_STATUS_TYPE, CustomChainConfig, IAdapter, IWeb3Auth, SafeEventEmitterProvider, UserInfo, WALLET_ADAPTER_TYPE } from "@web3auth/base";
import { IPlugin } from "@web3auth/base-plugin";
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
export declare class Web3AuthCore extends SafeEventEmitter implements IWeb3Auth {
    readonly coreOptions: Web3AuthCoreOptions;
    connectedAdapterName: string | null;
    status: ADAPTER_STATUS_TYPE;
    cachedAdapter: string | null;
    protected walletAdapters: Record<string, IAdapter<unknown>>;
    private plugins;
    private storage;
    constructor(options: Web3AuthCoreOptions);
    get provider(): SafeEventEmitterProvider | null;
    set provider(_: SafeEventEmitterProvider | null);
    init(): Promise<void>;
    configureAdapter(adapter: IAdapter<unknown>): Web3AuthCore;
    clearCache(): void;
    /**
     * Connect to a specific wallet adapter
     * @param walletName - Key of the walletAdapter to use.
     */
    connectTo<T>(walletName: WALLET_ADAPTER_TYPE, loginParams?: T): Promise<SafeEventEmitterProvider | null>;
    logout(options?: {
        cleanup: boolean;
    }): Promise<void>;
    getUserInfo(): Promise<Partial<UserInfo>>;
    addPlugin(plugin: IPlugin): Promise<IWeb3Auth>;
    protected subscribeToAdapterEvents(walletAdapter: IAdapter<unknown>): void;
    protected checkInitRequirements(): void;
    private cacheWallet;
}
