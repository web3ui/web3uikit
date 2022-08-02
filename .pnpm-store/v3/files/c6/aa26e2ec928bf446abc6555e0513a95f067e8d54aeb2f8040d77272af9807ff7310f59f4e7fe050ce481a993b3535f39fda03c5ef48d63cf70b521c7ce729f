import { Transaction } from "@solana/web3.js";
import { JRPCRequest } from "@toruslabs/openlogin-jrpc";
import { ethErrors } from "eth-rpc-errors";

import { ITorusWalletProvider } from "../../../interface";
import { IProviderHandlers } from "../../../rpc/solanaRpcMiddlewares";

export const getTorusHandlers = (injectedProvider: ITorusWalletProvider): IProviderHandlers => {
  const providerHandlers: IProviderHandlers = {
    requestAccounts: async () => {
      const accounts = await injectedProvider.request<string[]>({
        method: "solana_requestAccounts",
        params: {},
      });
      return accounts;
    },

    getAccounts: async () => {
      const accounts = await injectedProvider.request<string[]>({
        method: "solana_accounts",
        params: {},
      });
      return accounts;
    },

    getPrivateKey: async () => {
      throw ethErrors.rpc.methodNotSupported();
    },
    getSecretKey: async () => {
      throw ethErrors.rpc.methodNotSupported();
    },
    signMessage: async (req: JRPCRequest<{ message: Uint8Array }>): Promise<Uint8Array> => {
      if (!req.params?.message) {
        throw ethErrors.rpc.invalidParams("message");
      }
      const message = await injectedProvider.signMessage(req.params.message);
      return message;
    },

    signTransaction: async (req: JRPCRequest<{ message: Transaction }>): Promise<Transaction> => {
      if (!req.params?.message) {
        throw ethErrors.rpc.invalidParams("message");
      }
      const txMessage = req.params.message;
      const response = await injectedProvider.signTransaction(txMessage);
      return response;
    },

    signAndSendTransaction: async (req: JRPCRequest<{ message: Transaction }>): Promise<{ signature: string }> => {
      if (!req.params?.message) {
        throw ethErrors.rpc.invalidParams("message");
      }
      const txMessage = req.params.message;
      const response = await injectedProvider.sendTransaction(txMessage);
      return { signature: response };
    },

    signAllTransactions: async (req: JRPCRequest<{ message: Transaction[] }>): Promise<Transaction[]> => {
      if (!req.params?.message || !req.params?.message.length) {
        throw ethErrors.rpc.invalidParams("message");
      }
      const transactions = req.params.message;
      const response = await injectedProvider.signAllTransactions(transactions);
      return response;
    },
  };
  return providerHandlers;
};
