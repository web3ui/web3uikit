import { SafeEventEmitterProvider } from "@toruslabs/base-controllers";
import { CustomChainConfig } from "@web3auth/base";
import { IBaseProvider } from "./IBaseProvider";
export declare class CommonPrivateKeyProvider implements IBaseProvider<string> {
    _providerEngineProxy: SafeEventEmitterProvider | null;
    get provider(): SafeEventEmitterProvider | null;
    set provider(_: SafeEventEmitterProvider | null);
    static getProviderInstance: (params: {
        privKey: string;
    }) => Promise<CommonPrivateKeyProvider>;
    addChain(_: CustomChainConfig): void;
    setupProvider(privKey: string): Promise<void>;
    switchChain(_: {
        chainId: string;
    }): Promise<void>;
    protected getProviderEngineProxy(): SafeEventEmitterProvider | null;
    protected updateProviderEngineProxy(providerEngineProxy: SafeEventEmitterProvider): void;
    private getPrivKeyMiddleware;
    private createPrivKeyMiddleware;
}
