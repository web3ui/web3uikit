import WalletConnect from "@walletconnect/client";
import { ADAPTER_CATEGORY_TYPE, ADAPTER_STATUS_TYPE, AdapterNamespaceType, BaseAdapter, ChainNamespaceType, SafeEventEmitterProvider, UserInfo, WalletConnectV1Data } from "@web3auth/base";
import { WalletConnectV1AdapterOptions } from "./interface";
declare class WalletConnectV1Adapter extends BaseAdapter<void> {
    readonly name: string;
    readonly adapterNamespace: AdapterNamespaceType;
    readonly currentChainNamespace: ChainNamespaceType;
    readonly type: ADAPTER_CATEGORY_TYPE;
    readonly adapterOptions: WalletConnectV1AdapterOptions;
    status: ADAPTER_STATUS_TYPE;
    adapterData: WalletConnectV1Data;
    connector: WalletConnect | null;
    private wcProvider;
    private rehydrated;
    constructor(options?: WalletConnectV1AdapterOptions);
    get connected(): boolean;
    get provider(): SafeEventEmitterProvider | null;
    set provider(_: SafeEventEmitterProvider | null);
    init(): Promise<void>;
    connect(): Promise<SafeEventEmitterProvider | null>;
    getUserInfo(): Promise<Partial<UserInfo>>;
    disconnect(options?: {
        cleanup: boolean;
    }): Promise<void>;
    private addChain;
    private switchChain;
    private createNewSession;
    private onConnectHandler;
    private subscribeEvents;
    private getWalletConnectInstance;
}
export { WalletConnectV1Adapter };
