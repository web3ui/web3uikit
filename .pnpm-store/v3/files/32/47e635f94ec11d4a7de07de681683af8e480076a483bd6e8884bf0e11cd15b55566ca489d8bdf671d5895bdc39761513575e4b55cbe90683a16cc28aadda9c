import { CustomChainConfig } from "@web3auth/base";
import { BaseProvider, BaseProviderConfig, BaseProviderState } from "@web3auth/base-provider";
export interface EthereumPrivKeyProviderConfig extends BaseProviderConfig {
    chainConfig: Omit<CustomChainConfig, "chainNamespace">;
}
export interface EthereumPrivKeyProviderState extends BaseProviderState {
    privateKey?: string;
}
export declare class EthereumPrivateKeyProvider extends BaseProvider<BaseProviderConfig, EthereumPrivKeyProviderState, string> {
    constructor({ config, state }: {
        config: EthereumPrivKeyProviderConfig;
        state?: EthereumPrivKeyProviderState;
    });
    static getProviderInstance: (params: {
        privKey: string;
        chainConfig: Omit<CustomChainConfig, "chainNamespace">;
    }) => Promise<EthereumPrivateKeyProvider>;
    enable(): Promise<string[]>;
    setupProvider(privKey: string): Promise<void>;
    updateAccount(params: {
        privateKey: string;
    }): Promise<void>;
    switchChain(params: {
        chainId: string;
    }): Promise<void>;
    protected lookupNetwork(): Promise<string>;
    private getChainSwitchMiddleware;
    private getAccountMiddleware;
}
