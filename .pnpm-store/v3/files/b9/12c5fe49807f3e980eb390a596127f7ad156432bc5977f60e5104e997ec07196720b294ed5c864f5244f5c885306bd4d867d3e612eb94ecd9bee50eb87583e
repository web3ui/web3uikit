import { JRPCMiddleware } from "@toruslabs/openlogin-jrpc";
import { ICommunicationProviderHandlers, Ihandler } from "./IEmbedController";
export declare function createChangeProviderMiddlewareMiddleware({ changeProvider, }: {
    changeProvider: ICommunicationProviderHandlers["changeProvider"];
}): JRPCMiddleware<unknown, unknown>;
export declare function createTopupMiddleware({ topup }: {
    topup: ICommunicationProviderHandlers["topup"];
}): JRPCMiddleware<unknown, unknown>;
export declare function createGenericJRPCMiddleware<T>(targetMethod: string, handler: (req: Ihandler<T>) => Promise<unknown>): JRPCMiddleware<unknown, unknown>;
export declare function createCommunicationMiddleware(providerHandlers: ICommunicationProviderHandlers): JRPCMiddleware<unknown, unknown>;
