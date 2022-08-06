import { IWeb3Auth, SafeEventEmitterProvider, UserInfo } from "@web3auth/base";
export declare const PLUGIN_NAMESPACES: {
    readonly MULTICHAIN: "multichain";
    readonly EIP155: "eip155";
    readonly SOLANA: "solana";
    readonly OTHER: "other";
};
export declare type PluginNamespace = typeof PLUGIN_NAMESPACES[keyof typeof PLUGIN_NAMESPACES];
export interface IPlugin {
    name: string;
    pluginNamespace: PluginNamespace;
    initWithProvider(provider: SafeEventEmitterProvider, userInfo: UserInfo): Promise<void>;
    initWithWeb3Auth(web3auth: IWeb3Auth): Promise<void>;
    connect(): Promise<void>;
    disconnect(): Promise<void>;
}
