import { BaseProvider, BaseProviderConfig, BaseProviderState } from "@web3auth/base-provider";
import { ITorusWalletProvider } from "../../../interface";
export declare class TorusInjectedProvider extends BaseProvider<BaseProviderConfig, BaseProviderState, ITorusWalletProvider> {
    constructor({ config, state }: {
        config: BaseProviderConfig;
        state?: BaseProviderState;
    });
    switchChain(_: {
        chainId: string;
    }): Promise<void>;
    setupProvider(injectedProvider: ITorusWalletProvider): Promise<void>;
    protected lookupNetwork(): Promise<string>;
    private setupEngine;
    private handleInjectedProviderUpdate;
}
