import type { OpenloginUserInfo } from "@toruslabs/openlogin";
import { SafeEventEmitter } from "@toruslabs/openlogin-jrpc";
import { AdapterNamespaceType, ChainNamespaceType, CustomChainConfig } from "../chain/IChainInterface";
import { SafeEventEmitterProvider } from "../provider/IProvider";
export declare type UserInfo = OpenloginUserInfo;
export declare const ADAPTER_CATEGORY: {
    readonly EXTERNAL: "external";
    readonly IN_APP: "in_app";
};
export declare type ADAPTER_CATEGORY_TYPE = typeof ADAPTER_CATEGORY[keyof typeof ADAPTER_CATEGORY];
export interface AdapterInitOptions {
    /**
     * Whether to auto connect to the adapter based on redirect mode or saved adapters
     */
    autoConnect?: boolean;
}
export declare const ADAPTER_STATUS: {
    readonly NOT_READY: "not_ready";
    readonly READY: "ready";
    readonly CONNECTING: "connecting";
    readonly CONNECTED: "connected";
    readonly DISCONNECTED: "disconnected";
    readonly ERRORED: "errored";
};
export declare const ADAPTER_EVENTS: {
    readonly ADAPTER_DATA_UPDATED: "adapter_data_updated";
    readonly NOT_READY: "not_ready";
    readonly READY: "ready";
    readonly CONNECTING: "connecting";
    readonly CONNECTED: "connected";
    readonly DISCONNECTED: "disconnected";
    readonly ERRORED: "errored";
};
export declare type ADAPTER_STATUS_TYPE = typeof ADAPTER_STATUS[keyof typeof ADAPTER_STATUS];
export declare type CONNECTED_EVENT_DATA = {
    adapter: string;
    reconnected: boolean;
};
export interface IAdapter<T> extends SafeEventEmitter {
    adapterNamespace: AdapterNamespaceType;
    currentChainNamespace: ChainNamespaceType;
    chainConfigProxy: CustomChainConfig | null;
    type: ADAPTER_CATEGORY_TYPE;
    name: string;
    status: ADAPTER_STATUS_TYPE;
    provider: SafeEventEmitterProvider | null;
    adapterData?: unknown;
    init(options?: AdapterInitOptions): Promise<void>;
    disconnect(options?: {
        cleanup: boolean;
    }): Promise<void>;
    connect(params?: T): Promise<SafeEventEmitterProvider | null>;
    getUserInfo(): Promise<Partial<UserInfo>>;
    setChainConfig(customChainConfig: CustomChainConfig): void;
    setAdapterSettings(adapterSettings: unknown): void;
}
export declare abstract class BaseAdapter<T> extends SafeEventEmitter implements IAdapter<T> {
    adapterData?: unknown;
    protected chainConfig: CustomChainConfig | null;
    abstract adapterNamespace: AdapterNamespaceType;
    abstract currentChainNamespace: ChainNamespaceType;
    abstract type: ADAPTER_CATEGORY_TYPE;
    abstract name: string;
    abstract status: ADAPTER_STATUS_TYPE;
    get chainConfigProxy(): CustomChainConfig | null;
    abstract get provider(): SafeEventEmitterProvider | null;
    setChainConfig(customChainConfig: CustomChainConfig): void;
    setAdapterSettings(_: unknown): void;
    checkConnectionRequirements(): void;
    checkInitializationRequirements(): void;
    updateAdapterData(data: unknown): void;
    abstract init(options?: AdapterInitOptions): Promise<void>;
    abstract connect(params?: T): Promise<SafeEventEmitterProvider | null>;
    abstract disconnect(): Promise<void>;
    abstract getUserInfo(): Promise<Partial<UserInfo>>;
}
export interface BaseAdapterConfig {
    label: string;
    showOnModal?: boolean;
    showOnMobile?: boolean;
    showOnDesktop?: boolean;
}
export declare type LoginMethodConfig = Record<string, {
    /**
     * Display Name. If not provided, we use the default for openlogin app
     */
    name: string;
    /**
     * Description for button. If provided, it renders as a full length button. else, icon button
     */
    description?: string;
    /**
     * Logo to be shown on mouse hover. If not provided, we use the default for openlogin app
     */
    logoHover?: string;
    /**
     * Logo to be shown on dark background (dark theme). If not provided, we use the default for openlogin app
     */
    logoLight?: string;
    /**
     * Logo to be shown on light background (light theme). If not provided, we use the default for openlogin app
     */
    logoDark?: string;
    /**
     * Show login button on the main list
     */
    mainOption?: boolean;
    /**
     * Whether to show the login button on modal or not
     */
    showOnModal?: boolean;
    /**
     * Whether to show the login button on desktop
     */
    showOnDesktop?: boolean;
    /**
     * Whether to show the login button on mobile
     */
    showOnMobile?: boolean;
}>;
export interface IWalletConnectExtensionAdapter {
    name: string;
    chains: ChainNamespaceType[];
    logo: string;
    mobile: {
        native: string;
        universal: string;
    };
    desktop: {
        native: string;
        universal: string;
    };
}
export interface WalletConnectV1Data {
    uri: string;
    extensionAdapters: IWalletConnectExtensionAdapter[];
}
export interface IAdapterDataEvent {
    adapterName: string;
    data: unknown;
}
export interface INetworkSwitchProvider {
    addChain(chainConfig: CustomChainConfig): Promise<void>;
    switchChain(chainId: string): Promise<void>;
}
export interface INetworkSwitch {
    addNetwork(params: {
        chainConfig: CustomChainConfig;
        appOrigin: string;
    }): Promise<boolean>;
    switchNetwork(params: {
        currentChainConfig: CustomChainConfig;
        newChainConfig: Partial<CustomChainConfig>;
        appOrigin: string;
    }): Promise<boolean>;
}
export declare abstract class BaseNetworkSwitch implements INetworkSwitch {
    abstract switchNetwork(params: {
        currentChainConfig: CustomChainConfig;
        newChainConfig: Partial<CustomChainConfig>;
        appOrigin: string;
    }): Promise<boolean>;
    abstract addNetwork(params: {
        chainConfig: CustomChainConfig;
        appOrigin: string;
    }): Promise<boolean>;
}
