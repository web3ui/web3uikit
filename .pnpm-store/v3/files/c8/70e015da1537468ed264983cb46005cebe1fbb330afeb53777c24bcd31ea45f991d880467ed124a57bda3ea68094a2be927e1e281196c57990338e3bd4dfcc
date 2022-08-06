import BaseController from "../BaseController";
import type { BaseConfig } from "../interfaces";
import { SafeEventEmitterProvider } from "../Network/INetworkController";
import { BaseEmbedControllerState, ICommunicationProviderHandlers } from "./IEmbedController";
export declare class BaseEmbedController<C extends BaseConfig, S extends BaseEmbedControllerState> extends BaseController<C, S> {
    _communicationProviderProxy: SafeEventEmitterProvider;
    constructor({ config, state }: {
        config: Partial<C>;
        state?: Partial<S>;
    });
    /**
     * Called by orchestrator once while initializing the class
     * @param handlers - JRPC handlers for provider
     * @returns - provider - Returns the providerProxy
     */
    initializeProvider(handlers: ICommunicationProviderHandlers): void;
    private setCommunicationProvider;
}
