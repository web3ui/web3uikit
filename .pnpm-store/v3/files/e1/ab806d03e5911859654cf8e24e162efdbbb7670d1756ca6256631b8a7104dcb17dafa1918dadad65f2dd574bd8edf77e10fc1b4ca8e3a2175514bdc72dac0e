import { BaseConfig, BaseController, BaseState, SafeEventEmitterProvider } from "@toruslabs/base-controllers";
import { CustomChainConfig } from "@web3auth/base";
import { IBaseProvider } from "./IBaseProvider";
export interface BaseProviderState extends BaseState {
    chainId: string;
}
export interface BaseProviderConfig extends BaseConfig {
    chainConfig: Partial<CustomChainConfig>;
    networks?: Record<string, CustomChainConfig>;
    skipLookupNetwork?: boolean;
}
export declare abstract class BaseProvider<C extends BaseProviderConfig, S extends BaseProviderState, P> extends BaseController<C, S> implements IBaseProvider<P> {
    _providerEngineProxy: SafeEventEmitterProvider | null;
    constructor({ config, state }: {
        config: C;
        state?: S;
    });
    get provider(): SafeEventEmitterProvider | null;
    set provider(_: SafeEventEmitterProvider | null);
    addChain(chainConfig: CustomChainConfig): void;
    getChainConfig(chainId: string): CustomChainConfig | null;
    protected getProviderEngineProxy(): SafeEventEmitterProvider | null;
    protected updateProviderEngineProxy(providerEngineProxy: SafeEventEmitterProvider): void;
    abstract setupProvider(provider: P): Promise<void>;
    abstract switchChain(params: {
        chainId: string;
    }): Promise<void>;
    protected abstract lookupNetwork(provider?: P): Promise<string | void>;
}
