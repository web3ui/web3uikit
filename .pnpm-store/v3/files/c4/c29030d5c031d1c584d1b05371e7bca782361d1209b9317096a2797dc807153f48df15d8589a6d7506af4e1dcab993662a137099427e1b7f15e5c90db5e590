import { Keypair, Transaction } from "@solana/web3.js";
import { JRPCRequest } from "@toruslabs/openlogin-jrpc";
import nacl from "@toruslabs/tweetnacl-js";
import { SafeEventEmitterProvider, WalletInitializationError } from "@web3auth/base";
import bs58 from "bs58";
import { ethErrors } from "eth-rpc-errors";

import { IProviderHandlers } from "../../rpc/solanaRpcMiddlewares";

export async function getProviderHandlers({
  privKey,
  getProviderEngineProxy,
}: {
  privKey: string;
  getProviderEngineProxy: () => SafeEventEmitterProvider | null;
}): Promise<IProviderHandlers> {
  const keyPairGenerator = (): Keypair => {
    return Keypair.fromSecretKey(Buffer.from(privKey, "hex"));
  };
  if (typeof privKey !== "string") throw WalletInitializationError.invalidParams("privKey must be a string");
  const keyPair = keyPairGenerator();
  const providerHandlers: IProviderHandlers = {
    requestAccounts: async () => {
      return [keyPair.publicKey.toBase58()];
    },
    getAccounts: async () => [keyPair.publicKey.toBase58()],

    getPrivateKey: async () => privKey,
    getSecretKey: async () => bs58.encode(keyPair.secretKey),

    signTransaction: async (req: JRPCRequest<{ message: Transaction }>): Promise<Transaction> => {
      if (!req.params?.message) {
        throw ethErrors.rpc.invalidParams("message");
      }
      const transaction = req.params.message;
      transaction.partialSign(keyPair);
      return transaction;
    },

    signMessage: async (req: JRPCRequest<{ message: Uint8Array }>): Promise<Uint8Array> => {
      if (!req.params?.message) {
        throw ethErrors.rpc.invalidParams("message");
      }
      const signedMsg = nacl.sign.detached(req.params.message, keyPair.secretKey);
      return signedMsg;
    },

    signAndSendTransaction: async (req: JRPCRequest<{ message: Transaction }>): Promise<{ signature: string }> => {
      if (!req.params?.message) {
        throw ethErrors.rpc.invalidParams("message");
      }
      const _providerEngineProxy = getProviderEngineProxy();
      if (!_providerEngineProxy) throw ethErrors.provider.custom({ message: "Provider is not initialized", code: 4902 });

      const transaction = req.params.message;
      transaction.sign(keyPair);

      const sig = await _providerEngineProxy.request<string>({
        method: "sendTransaction",
        params: [bs58.encode(transaction.serialize())],
      });
      return { signature: sig };
    },

    signAllTransactions: async (req: JRPCRequest<{ message: Transaction[] }>): Promise<Transaction[]> => {
      if (!req.params?.message || !req.params?.message.length) {
        throw ethErrors.rpc.invalidParams("message");
      }

      const txns = req.params?.message;
      for (const tx of txns || []) {
        const transaction = tx;
        transaction.partialSign(keyPair);
      }
      return txns;
    },
  };

  return providerHandlers;
}
