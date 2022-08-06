import type SolletWallet from "@project-serum/sol-wallet-adapter";
import { Connection, Transaction } from "@solana/web3.js";
import { JRPCRequest } from "@toruslabs/openlogin-jrpc";
import { CustomChainConfig, SafeEventEmitterProvider } from "@web3auth/base";
import { ethErrors } from "eth-rpc-errors";

import { IBaseWalletProvider } from "../../../interface";
import { IProviderHandlers } from "../../../rpc/solanaRpcMiddlewares";
import { getBaseProviderHandlers } from "../base/providerHandlers";

export const getSolletHandlers = (injectedProvider: SolletWallet, getProviderEngineProxy: () => SafeEventEmitterProvider): IProviderHandlers => {
  const providerHandlers = getBaseProviderHandlers(injectedProvider as IBaseWalletProvider);
  providerHandlers.signMessage = async (req: JRPCRequest<{ message: Uint8Array }>): Promise<Uint8Array> => {
    const { signature } = await injectedProvider.sign(req.params.message, "utf8");
    return signature;
  };
  providerHandlers.signAndSendTransaction = async (req: JRPCRequest<{ message: Transaction }>): Promise<{ signature: string }> => {
    const provider = getProviderEngineProxy();
    if (!provider) throw ethErrors.provider.custom({ message: "Provider is not initialized", code: 4902 });
    const transaction = await injectedProvider.signTransaction(req.params.message);
    const chainConfig = (await provider.request<CustomChainConfig>({ method: "solana_provider_config", params: [] })) as CustomChainConfig;
    const conn = new Connection(chainConfig.rpcTarget);
    const res = await conn.sendRawTransaction(transaction.serialize());
    return { signature: res };
  };
  return providerHandlers;
};
