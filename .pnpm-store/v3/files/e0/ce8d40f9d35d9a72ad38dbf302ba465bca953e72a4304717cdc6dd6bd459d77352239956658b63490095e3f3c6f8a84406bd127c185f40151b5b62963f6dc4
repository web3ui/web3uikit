import { createFetchMiddleware } from "@toruslabs/base-controllers";
import { JRPCEngineEndCallback, JRPCEngineNextCallback, JRPCMiddleware, JRPCRequest, JRPCResponse, mergeMiddleware } from "@toruslabs/openlogin-jrpc";
import { CustomChainConfig } from "@web3auth/base";

export function createChainIdMiddleware(chainId: string): JRPCMiddleware<unknown, unknown> {
  return (req: JRPCRequest<unknown>, res: JRPCResponse<string>, next: JRPCEngineNextCallback, end: JRPCEngineEndCallback) => {
    if (req.method === "solana_chainId") {
      res.result = chainId;
      return end();
    }
    return next();
  };
}

export function createProviderConfigMiddleware(providerConfig: Omit<CustomChainConfig, "chainNamespace">): JRPCMiddleware<unknown, unknown> {
  return (
    req: JRPCRequest<unknown>,
    res: JRPCResponse<Omit<CustomChainConfig, "chainNamespace">>,
    next: JRPCEngineNextCallback,
    end: JRPCEngineEndCallback
  ) => {
    if (req.method === "solana_provider_config") {
      res.result = providerConfig;
      return end();
    }
    return next();
  };
}

export function createConfigMiddleware(providerConfig: Omit<CustomChainConfig, "chainNamespace">): JRPCMiddleware<unknown, unknown> {
  const { chainId } = providerConfig;

  return mergeMiddleware([createChainIdMiddleware(chainId), createProviderConfigMiddleware(providerConfig)]);
}

export function createJsonRpcClient(providerConfig: Omit<CustomChainConfig, "chainNamespace">): {
  networkMiddleware: JRPCMiddleware<unknown, unknown>;
  fetchMiddleware: JRPCMiddleware<unknown, unknown>;
} {
  const { rpcTarget } = providerConfig;
  const fetchMiddleware = createFetchMiddleware({ rpcTarget });
  const networkMiddleware = mergeMiddleware([createConfigMiddleware(providerConfig), fetchMiddleware]);
  return { networkMiddleware, fetchMiddleware };
}
