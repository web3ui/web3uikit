import { ADAPTER_CATEGORY_TYPE, ADAPTER_STATUS_TYPE, AdapterInitOptions, AdapterNamespaceType, BaseAdapter, ChainNamespaceType, CustomChainConfig, SafeEventEmitterProvider, UserInfo } from "@web3auth/base";
export interface MetamaskAdapterOptions {
    chainConfig?: CustomChainConfig;
}
declare class MetamaskAdapter extends BaseAdapter<void> {
    readonly adapterNamespace: AdapterNamespaceType;
    readonly currentChainNamespace: ChainNamespaceType;
    readonly type: ADAPTER_CATEGORY_TYPE;
    readonly name: string;
    status: ADAPTER_STATUS_TYPE;
    private rehydrated;
    private metamaskProvider;
    constructor(adapterOptions?: MetamaskAdapterOptions);
    get provider(): SafeEventEmitterProvider | null;
    set provider(_: SafeEventEmitterProvider | null);
    init(options: AdapterInitOptions): Promise<void>;
    setAdapterSettings(_: unknown): void;
    connect(): Promise<SafeEventEmitterProvider | null>;
    disconnect(options?: {
        cleanup: boolean;
    }): Promise<void>;
    getUserInfo(): Promise<Partial<UserInfo>>;
    private switchChain;
}
export { MetamaskAdapter };
