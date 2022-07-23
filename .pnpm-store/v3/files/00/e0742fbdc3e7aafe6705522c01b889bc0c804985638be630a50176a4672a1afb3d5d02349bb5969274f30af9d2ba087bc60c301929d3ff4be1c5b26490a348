import { MessageTypes, TypedDataV1, TypedMessage } from "@metamask/eth-sig-util";
import { JRPCRequest } from "@toruslabs/openlogin-jrpc";
import type { IConnector, ITxData } from "@walletconnect/types";
import { ethErrors } from "eth-rpc-errors";

import { IProviderHandlers } from "../../rpc/ethRpcMiddlewares";
import { MessageParams, TransactionParams, TypedMessageParams } from "../../rpc/walletMidddleware";

export function getProviderHandlers({ connector }: { connector: IConnector }): IProviderHandlers {
  return {
    getPrivateKey: async () => {
      throw ethErrors.rpc.methodNotSupported();
    },
    getAccounts: async (_: JRPCRequest<unknown>) => {
      const { accounts } = connector;
      if (accounts && accounts.length) {
        return accounts;
      }
      throw new Error("Failed to get accounts");
    },
    processTransaction: async (txParams: TransactionParams, _: JRPCRequest<unknown>): Promise<string> => {
      const result = await connector.sendTransaction(txParams as ITxData);
      return result;
    },
    processSignTransaction: async (txParams: TransactionParams, _: JRPCRequest<unknown>): Promise<string> => {
      const result = await connector.signTransaction(txParams as ITxData);
      return result;
    },
    processEthSignMessage: async (msgParams: MessageParams<string>, _: JRPCRequest<unknown>): Promise<string> => {
      const result = await connector.signMessage([msgParams.from, msgParams.data]);
      return result;
    },
    processPersonalMessage: async (msgParams: MessageParams<string>, _: JRPCRequest<unknown>): Promise<string> => {
      const result = await connector.signPersonalMessage([msgParams.data, msgParams.from]);
      return result;
    },
    processTypedMessage: async (msgParams: MessageParams<TypedDataV1>, _: JRPCRequest<unknown>): Promise<string> => {
      const result = await connector.signTypedData([msgParams.from, msgParams.data]);
      return result;
    },
    processTypedMessageV3: async (msgParams: TypedMessageParams<TypedMessage<MessageTypes>>): Promise<string> => {
      const result = await connector.signTypedData([msgParams.from, msgParams.data]);
      return result;
    },
    processTypedMessageV4: async (msgParams: TypedMessageParams<TypedMessage<MessageTypes>>): Promise<string> => {
      const result = await connector.signTypedData([msgParams.from, msgParams.data]);
      return result;
    },
    processEncryptionPublicKey: async (_: string): Promise<string> => {
      throw ethErrors.rpc.methodNotSupported();
    },
    processDecryptMessage: (_: MessageParams<string>): string => {
      throw ethErrors.rpc.methodNotSupported();
    },
  };
}
