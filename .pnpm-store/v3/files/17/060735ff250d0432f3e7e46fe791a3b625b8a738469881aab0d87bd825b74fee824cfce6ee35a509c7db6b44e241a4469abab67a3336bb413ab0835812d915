import { JRPCMiddleware } from "@toruslabs/openlogin-jrpc";
import { CustomChainConfig } from "@web3auth/base";
export declare function createChainIdMiddleware(chainId: string): JRPCMiddleware<unknown, unknown>;
export declare function createProviderConfigMiddleware(providerConfig: Omit<CustomChainConfig, "chainNamespace">): JRPCMiddleware<unknown, unknown>;
export declare function createConfigMiddleware(providerConfig: Omit<CustomChainConfig, "chainNamespace">): JRPCMiddleware<unknown, unknown>;
export declare function createJsonRpcClient(providerConfig: Omit<CustomChainConfig, "chainNamespace">): {
    networkMiddleware: JRPCMiddleware<unknown, unknown>;
    fetchMiddleware: JRPCMiddleware<unknown, unknown>;
};
