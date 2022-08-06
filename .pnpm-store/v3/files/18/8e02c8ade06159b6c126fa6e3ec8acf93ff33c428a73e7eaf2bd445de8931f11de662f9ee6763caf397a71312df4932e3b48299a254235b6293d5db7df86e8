import { ADAPTER_CATEGORY_TYPE, ADAPTER_STATUS_TYPE, AdapterInitOptions, AdapterNamespaceType, BaseAdapter, ChainNamespaceType, CustomChainConfig, SafeEventEmitterProvider, UserInfo } from "@web3auth/base";
import { IPhantomWalletProvider } from "@web3auth/solana-provider";
export interface PhantomAdapterOptions {
    chainConfig?: CustomChainConfig;
}
export declare class PhantomAdapter extends BaseAdapter<void> {
    readonly name: string;
    readonly adapterNamespace: AdapterNamespaceType;
    readonly currentChainNamespace: ChainNamespaceType;
    readonly type: ADAPTER_CATEGORY_TYPE;
    status: ADAPTER_STATUS_TYPE;
    _wallet: IPhantomWalletProvider | null;
    private phantomProvider;
    private rehydrated;
    constructor(options?: PhantomAdapterOptions);
    get isWalletConnected(): boolean;
    get provider(): SafeEventEmitterProvider | null;
    set provider(_: SafeEventEmitterProvider | null);
    setAdapterSettings(_: unknown): void;
    init(options: AdapterInitOptions): Promise<void>;
    connect(): Promise<SafeEventEmitterProvider | null>;
    disconnect(options?: {
        cleanup: boolean;
    }): Promise<void>;
    getUserInfo(): Promise<Partial<UserInfo>>;
    private connectWithProvider;
    private _onDisconnect;
}
