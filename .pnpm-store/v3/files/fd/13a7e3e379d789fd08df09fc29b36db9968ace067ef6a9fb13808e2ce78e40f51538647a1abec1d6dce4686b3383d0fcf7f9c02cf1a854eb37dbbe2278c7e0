import OpenLogin, { LoginParams, OpenLoginOptions } from "@toruslabs/openlogin";
import { ADAPTER_CATEGORY_TYPE, ADAPTER_STATUS_TYPE, AdapterInitOptions, AdapterNamespaceType, BaseAdapter, ChainNamespaceType, CustomChainConfig, SafeEventEmitterProvider, UserInfo } from "@web3auth/base";
import type { OpenloginAdapterOptions } from "./interface";
export declare type OpenloginLoginParams = LoginParams & {
    login_hint?: string;
};
export declare class OpenloginAdapter extends BaseAdapter<OpenloginLoginParams> {
    readonly name: string;
    readonly adapterNamespace: AdapterNamespaceType;
    readonly type: ADAPTER_CATEGORY_TYPE;
    openloginInstance: OpenLogin | null;
    status: ADAPTER_STATUS_TYPE;
    currentChainNamespace: ChainNamespaceType;
    private openloginOptions;
    private loginSettings;
    private privKeyProvider;
    constructor(params: OpenloginAdapterOptions);
    get chainConfigProxy(): CustomChainConfig | null;
    get provider(): SafeEventEmitterProvider | null;
    set provider(_: SafeEventEmitterProvider | null);
    init(options: AdapterInitOptions): Promise<void>;
    connect(params?: OpenloginLoginParams): Promise<SafeEventEmitterProvider | null>;
    disconnect(options?: {
        cleanup: boolean;
    }): Promise<void>;
    getUserInfo(): Promise<Partial<UserInfo>>;
    setAdapterSettings(adapterSettings: OpenLoginOptions): void;
    setChainConfig(customChainConfig: CustomChainConfig): void;
    private connectWithProvider;
}
