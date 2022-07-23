import { createFetchMiddleware } from "@toruslabs/base-controllers";
import { JRPCEngineEndCallback, JRPCEngineNextCallback, JRPCMiddleware, JRPCRequest, JRPCResponse, mergeMiddleware } from "@toruslabs/openlogin-jrpc";
import type { CustomChainConfig } from "@web3auth/base";

export function createChainIdMiddleware(chainId: string): JRPCMiddleware<unknown, unknown> {
  return (req: JRPCRequest<unknown>, res: JRPCResponse<string>, next: JRPCEngineNextCallback, end: JRPCEngineEndCallback) => {
    if (req.method === "eth_chainId") {
      res.result = chainId;
      return end();
    }
    return next();
  };
}

export function createProviderConfigMiddleware(providerConfig: CustomChainConfig): JRPCMiddleware<unknown, unknown> {
  return (req: JRPCRequest<unknown>, res: JRPCResponse<CustomChainConfig>, next: JRPCEngineNextCallback, end: JRPCEngineEndCallback) => {
    if (req.method === "eth_provider_config") {
      res.result = providerConfig;
      return end();
    }
    return next();
  };
}

export function createJsonRpcClient(providerConfig: CustomChainConfig): {
  networkMiddleware: JRPCMiddleware<unknown, unknown>;
  fetchMiddleware: JRPCMiddleware<unknown, unknown>;
} {
  const { chainId, rpcTarget } = providerConfig;
  const fetchMiddleware = createFetchMiddleware({ rpcTarget });
  const networkMiddleware = mergeMiddleware([createChainIdMiddleware(chainId), createProviderConfigMiddleware(providerConfig), fetchMiddleware]);
  return { networkMiddleware, fetchMiddleware };
}
