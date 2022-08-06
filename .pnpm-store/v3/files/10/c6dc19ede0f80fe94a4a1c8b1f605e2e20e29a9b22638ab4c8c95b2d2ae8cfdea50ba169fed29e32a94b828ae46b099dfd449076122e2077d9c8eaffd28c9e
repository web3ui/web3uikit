import type { IConnector } from "@walletconnect/types";
import { CustomChainConfig } from "@web3auth/base";
import { BaseProvider, BaseProviderConfig, BaseProviderState } from "@web3auth/base-provider";
export interface WalletConnectProviderConfig extends BaseProviderConfig {
    chainConfig: Omit<CustomChainConfig, "chainNamespace">;
}
export interface WalletConnectProviderState extends BaseProviderState {
    accounts: string[];
}
export declare class WalletConnectProvider extends BaseProvider<BaseProviderConfig, WalletConnectProviderState, IConnector> {
    private connector;
    constructor({ config, state, connector }: {
        config: WalletConnectProviderConfig;
        state?: BaseProviderState;
        connector?: IConnector;
    });
    static getProviderInstance: (params: {
        connector: IConnector;
        chainConfig: Omit<CustomChainConfig, "chainNamespace">;
        skipLookupNetwork: boolean;
    }) => Promise<WalletConnectProvider>;
    enable(): Promise<string[]>;
    setupProvider(connector: IConnector): Promise<void>;
    switchChain({ chainId, addChain, lookup }: {
        chainId: string;
        addChain?: boolean;
        lookup?: boolean;
    }): Promise<void>;
    addChain(chainConfig: CustomChainConfig): Promise<void>;
    protected lookupNetwork(connector: IConnector): Promise<string>;
    private setupEngine;
    private onConnectorStateUpdate;
}
