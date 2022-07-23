import { CustomChainConfig } from "@web3auth/base";
import { BaseProvider, BaseProviderConfig, BaseProviderState } from "@web3auth/base-provider";
export interface SolanaPrivKeyProviderConfig extends BaseProviderConfig {
    chainConfig: Omit<CustomChainConfig, "chainNamespace">;
}
export interface SolanaPrivKeyProviderState extends BaseProviderState {
    privateKey?: string;
}
export declare class SolanaPrivateKeyProvider extends BaseProvider<BaseProviderConfig, SolanaPrivKeyProviderState, string> {
    constructor({ config, state }: {
        config: SolanaPrivKeyProviderConfig;
        state?: BaseProviderState;
    });
    static getProviderInstance: (params: {
        privKey: string;
        chainConfig: Omit<CustomChainConfig, "chainNamespace">;
    }) => Promise<SolanaPrivateKeyProvider>;
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
