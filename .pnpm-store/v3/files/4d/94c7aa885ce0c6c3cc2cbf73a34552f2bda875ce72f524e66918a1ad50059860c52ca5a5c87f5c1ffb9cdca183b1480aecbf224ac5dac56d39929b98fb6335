import { JRPCMiddleware } from "@toruslabs/openlogin-jrpc";
import { BaseProvider, BaseProviderConfig, BaseProviderState } from "@web3auth/base-provider";
import { IProviderHandlers } from "../../../rpc/solanaRpcMiddlewares";
export declare abstract class BaseInjectedProvider<P> extends BaseProvider<BaseProviderConfig, BaseProviderState, P> {
    constructor({ config, state }: {
        config: BaseProviderConfig;
        state?: BaseProviderState;
    });
    switchChain(_: {
        chainId: string;
    }): Promise<void>;
    setupProvider(injectedProvider: P): Promise<void>;
    protected lookupNetwork(): Promise<string>;
    protected getInjectedProviderProxy(_: P): JRPCMiddleware<unknown, unknown>;
    protected abstract getProviderHandlers(injectedProvider: P): IProviderHandlers;
}
