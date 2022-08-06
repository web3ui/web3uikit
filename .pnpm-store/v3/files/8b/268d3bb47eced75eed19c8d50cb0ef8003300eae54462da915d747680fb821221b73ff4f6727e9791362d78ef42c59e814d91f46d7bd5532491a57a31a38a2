import { Connection, Transaction } from "@solana/web3.js";
import type Solflare from "@solflare-wallet/sdk";
import { JRPCRequest } from "@toruslabs/openlogin-jrpc";
import { CustomChainConfig, SafeEventEmitterProvider } from "@web3auth/base";
import { ethErrors } from "eth-rpc-errors";

import { IBaseWalletProvider } from "../../../interface";
import { IProviderHandlers } from "../../../rpc/solanaRpcMiddlewares";
import { getBaseProviderHandlers } from "../base/providerHandlers";

export const getSolflareHandlers = (injectedProvider: Solflare, getProviderEngineProxy: () => SafeEventEmitterProvider): IProviderHandlers => {
  const solflareProviderHandlers = getBaseProviderHandlers(injectedProvider as IBaseWalletProvider);
  solflareProviderHandlers.signAndSendTransaction = async (req: JRPCRequest<{ message: Transaction }>): Promise<{ signature: string }> => {
    const provider = getProviderEngineProxy();
    if (!provider) throw ethErrors.provider.custom({ message: "Provider is not initialized", code: 4902 });
    const transaction = await injectedProvider.signTransaction(req.params.message);
    const chainConfig = (await provider.request<CustomChainConfig>({ method: "solana_provider_config", params: [] })) as CustomChainConfig;
    const conn = new Connection(chainConfig.rpcTarget);
    const res = await conn.sendRawTransaction(transaction.serialize());
    return { signature: res };
  };
  return solflareProviderHandlers;
};
