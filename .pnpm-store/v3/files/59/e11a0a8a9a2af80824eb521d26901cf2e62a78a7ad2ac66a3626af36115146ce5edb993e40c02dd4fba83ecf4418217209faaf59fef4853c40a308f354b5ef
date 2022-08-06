import Torus, { TorusCtorArgs, TorusLoginParams, TorusParams } from "@toruslabs/solana-embed";
import { ADAPTER_CATEGORY_TYPE, ADAPTER_STATUS_TYPE, AdapterInitOptions, AdapterNamespaceType, BaseAdapter, ChainNamespaceType, CustomChainConfig, SafeEventEmitterProvider, UserInfo } from "@web3auth/base";
export interface SolanaWalletOptions {
    adapterSettings?: TorusCtorArgs;
    loginSettings?: TorusLoginParams;
    initParams?: Omit<TorusParams, "network">;
    chainConfig?: CustomChainConfig;
}
export declare class SolanaWalletAdapter extends BaseAdapter<void> {
    readonly name: string;
    readonly adapterNamespace: AdapterNamespaceType;
    readonly currentChainNamespace: ChainNamespaceType;
    readonly type: ADAPTER_CATEGORY_TYPE;
    status: ADAPTER_STATUS_TYPE;
    torusInstance: Torus | null;
    private torusWalletOptions?;
    private initParams?;
    private loginSettings?;
    private solanaProvider;
    private rehydrated;
    constructor(params?: SolanaWalletOptions);
    get provider(): SafeEventEmitterProvider | null;
    set provider(_: SafeEventEmitterProvider | null);
    init(options: AdapterInitOptions): Promise<void>;
    connect(): Promise<SafeEventEmitterProvider | null>;
    disconnect(options?: {
        cleanup: boolean;
    }): Promise<void>;
    getUserInfo(): Promise<Partial<UserInfo>>;
    setAdapterSettings(_: unknown): void;
}
