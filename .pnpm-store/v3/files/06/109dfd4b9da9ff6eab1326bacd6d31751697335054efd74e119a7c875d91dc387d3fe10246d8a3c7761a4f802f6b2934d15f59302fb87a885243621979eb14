import { Connection, PublicKey, Transaction } from "@solana/web3.js";
import { JRPCRequest } from "@toruslabs/openlogin-jrpc";
import { CustomChainConfig, SafeEventEmitterProvider } from "@web3auth/base";
import bs58 from "bs58";
import { ethErrors } from "eth-rpc-errors";

import { ISlopeProvider } from "../../../interface";
import { IProviderHandlers } from "../../../rpc/solanaRpcMiddlewares";

export const getSlopeHandlers = (injectedProvider: ISlopeProvider, getProviderEngineProxy: () => SafeEventEmitterProvider): IProviderHandlers => {
  const providerHandlers: IProviderHandlers = {
    requestAccounts: async () => {
      const { data } = await injectedProvider.connect();
      return [data.publicKey];
    },
    getAccounts: async () => {
      const { data } = await injectedProvider.connect();
      return [data.publicKey];
    },
    getPrivateKey: async () => {
      throw ethErrors.rpc.methodNotSupported();
    },
    getSecretKey: async () => {
      throw ethErrors.rpc.methodNotSupported();
    },
    signTransaction: async (req: JRPCRequest<{ message: Transaction }>): Promise<Transaction> => {
      const txMessage = req.params.message;
      if (!txMessage) throw ethErrors.rpc.invalidRequest({ message: "Invalid transaction message" });
      const { data } = await injectedProvider.signTransaction(bs58.encode(txMessage.serializeMessage()));
      if (!data.publicKey || !data.signature) throw new Error("Invalid signature from slope wallet");
      const publicKey = new PublicKey(data.publicKey);
      const signature = bs58.decode(data.signature);
      txMessage.addSignature(publicKey, signature);
      return txMessage;
    },
    signMessage: async (req: JRPCRequest<{ message: Uint8Array }>): Promise<Uint8Array> => {
      const response = await injectedProvider.signMessage(req.params.message);
      return bs58.decode(response.data.signature);
    },
    signAndSendTransaction: async (req: JRPCRequest<{ message: Transaction }>): Promise<{ signature: string }> => {
      const provider = getProviderEngineProxy();
      if (!provider) throw ethErrors.provider.custom({ message: "Provider is not initialized", code: 4902 });
      const txMessage = req.params.message;
      if (!txMessage) throw ethErrors.rpc.invalidRequest({ message: "Invalid transaction message" });
      const { data } = await injectedProvider.signTransaction(bs58.encode(txMessage.serializeMessage()));
      if (!data.publicKey || !data.signature) throw new Error("Invalid signature from slope wallet");
      const publicKey = new PublicKey(data.publicKey);
      const signature = bs58.decode(data.signature);
      txMessage.addSignature(publicKey, signature);
      const chainConfig = (await provider.request<CustomChainConfig>({ method: "solana_provider_config", params: [] })) as CustomChainConfig;
      const conn = new Connection(chainConfig.rpcTarget);
      const res = await conn.sendRawTransaction(txMessage.serialize());
      return { signature: res };
    },
    signAllTransactions: async (req: JRPCRequest<{ message: Transaction[] }>): Promise<Transaction[]> => {
      if (!req.params?.message || !req.params?.message.length) {
        throw ethErrors.rpc.invalidParams("message");
      }

      const allTxns = req.params.message;
      const { length } = allTxns;

      const unsignedTx = [];

      for (let i = 0; i < length; i++) {
        unsignedTx.push(bs58.encode(req.params.message[i].serializeMessage()));
      }
      const { msg, data } = await injectedProvider.signAllTransactions(unsignedTx);

      if (!data.publicKey || data.signatures?.length !== length) throw new Error(msg);

      const publicKey = new PublicKey(data.publicKey);

      for (let i = 0; i < length; i++) {
        const signature = bs58.decode(data.signatures[i]);
        allTxns[i].addSignature(publicKey, signature);
      }

      return allTxns;
    },
  };
  return providerHandlers;
};
