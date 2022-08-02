import Torus, { LoginParams, TorusCtorArgs, TorusParams } from "@toruslabs/torus-embed";
import { ADAPTER_CATEGORY_TYPE, ADAPTER_STATUS_TYPE, AdapterInitOptions, AdapterNamespaceType, BaseAdapter, ChainNamespaceType, CustomChainConfig, SafeEventEmitterProvider, UserInfo } from "@web3auth/base";
export interface TorusWalletOptions {
    adapterSettings?: TorusCtorArgs;
    loginSettings?: LoginParams;
    initParams?: Omit<TorusParams, "network">;
    chainConfig?: CustomChainConfig;
}
export declare class TorusWalletAdapter extends BaseAdapter<never> {
    readonly name: string;
    readonly adapterNamespace: AdapterNamespaceType;
    readonly currentChainNamespace: ChainNamespaceType;
    readonly type: ADAPTER_CATEGORY_TYPE;
    status: ADAPTER_STATUS_TYPE;
    torusInstance: Torus | null;
    private torusWalletOptions?;
    private initParams?;
    private loginSettings?;
    private rehydrated;
    constructor(params?: TorusWalletOptions);
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
