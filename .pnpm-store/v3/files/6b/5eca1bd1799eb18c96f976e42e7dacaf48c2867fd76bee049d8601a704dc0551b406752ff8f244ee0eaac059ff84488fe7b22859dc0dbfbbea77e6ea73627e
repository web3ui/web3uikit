import { JRPCMiddleware } from "@toruslabs/openlogin-jrpc";
import type { CustomChainConfig } from "@web3auth/base";
export declare function createChainIdMiddleware(chainId: string): JRPCMiddleware<unknown, unknown>;
export declare function createProviderConfigMiddleware(providerConfig: CustomChainConfig): JRPCMiddleware<unknown, unknown>;
export declare function createJsonRpcClient(providerConfig: CustomChainConfig): {
    networkMiddleware: JRPCMiddleware<unknown, unknown>;
    fetchMiddleware: JRPCMiddleware<unknown, unknown>;
};
