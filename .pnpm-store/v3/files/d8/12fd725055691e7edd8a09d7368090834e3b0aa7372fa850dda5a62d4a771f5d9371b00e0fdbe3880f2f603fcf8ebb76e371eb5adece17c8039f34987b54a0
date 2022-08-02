import {
  createAsyncMiddleware,
  createScaffoldMiddleware,
  JRPCMiddleware,
  JRPCRequest,
  JRPCResponse,
  mergeMiddleware,
} from "@toruslabs/openlogin-jrpc";
import { ethErrors } from "eth-rpc-errors";

import { createWalletMiddleware, WalletMiddlewareOptions } from "./walletMidddleware";

export type IProviderHandlers = WalletMiddlewareOptions;
export function createEthMiddleware(providerHandlers: IProviderHandlers): JRPCMiddleware<unknown, unknown> {
  const {
    getAccounts,
    getPrivateKey,
    processTransaction,
    processSignTransaction,
    processEthSignMessage,
    processTypedMessage,
    processTypedMessageV3,
    processTypedMessageV4,
    processPersonalMessage,
    processEncryptionPublicKey,
    processDecryptMessage,
  } = providerHandlers;
  const ethMiddleware = mergeMiddleware([
    createScaffoldMiddleware({
      eth_syncing: false,
    }),
    createWalletMiddleware({
      getAccounts,
      getPrivateKey,
      processTransaction,
      processEthSignMessage,
      processSignTransaction,
      processTypedMessage,
      processTypedMessageV3,
      processTypedMessageV4,
      processPersonalMessage,
      processEncryptionPublicKey,
      processDecryptMessage,
    }),
  ]);
  return ethMiddleware;
}

export interface AddEthereumChainParameter {
  chainId: string; // A 0x-prefixed hexadecimal string
  chainName: string;
  nativeCurrency: {
    name: string;
    symbol: string; // 2-6 characters long
    decimals: 18;
  };
  rpcUrls: string[];
  blockExplorerUrls?: string[];
}

export interface IChainSwitchHandlers {
  addChain: (params: AddEthereumChainParameter) => Promise<void>;
  switchChain: (params: { chainId: string }) => Promise<void>;
}

export function createChainSwitchMiddleware({ addChain, switchChain }: IChainSwitchHandlers): JRPCMiddleware<unknown, unknown> {
  async function addNewChain(req: JRPCRequest<AddEthereumChainParameter[]>, res: JRPCResponse<unknown>): Promise<void> {
    const chainParams = req.params?.length ? req.params[0] : undefined;
    if (!chainParams) throw ethErrors.rpc.invalidParams("Missing chain params");
    if (!chainParams.chainId) throw ethErrors.rpc.invalidParams("Missing chainId in chainParams");
    if (!chainParams.rpcUrls || chainParams.rpcUrls.length === 0) throw ethErrors.rpc.invalidParams("Missing rpcUrls in chainParams");
    if (!chainParams.nativeCurrency) throw ethErrors.rpc.invalidParams("Missing nativeCurrency in chainParams");

    res.result = await addChain(chainParams);
  }
  async function updateChain(req: JRPCRequest<{ chainId: string }[]>, res: JRPCResponse<unknown>): Promise<void> {
    const chainParams = req.params?.length ? req.params[0] : undefined;
    if (!chainParams) throw ethErrors.rpc.invalidParams("Missing chainId");
    res.result = await switchChain(chainParams);
  }

  return createScaffoldMiddleware({
    wallet_addEthereumChain: createAsyncMiddleware(addNewChain),
    wallet_switchEthereumChain: createAsyncMiddleware(updateChain),
  });
}

// #region account middlewares
export interface IAccountHandlers {
  updatePrivatekey: (params: { privateKey: string }) => Promise<void>;
}

export function createAccountMiddleware({ updatePrivatekey }: IAccountHandlers): JRPCMiddleware<unknown, unknown> {
  async function updateAccount(req: JRPCRequest<{ privateKey: string }[]>, res: JRPCResponse<unknown>): Promise<void> {
    const accountParams = req.params?.length ? req.params[0] : undefined;
    if (!accountParams?.privateKey) throw ethErrors.rpc.invalidParams("Missing privateKey");
    res.result = await updatePrivatekey(accountParams);
  }

  return createScaffoldMiddleware({
    wallet_updateAccount: createAsyncMiddleware(updateAccount),
  });
}

// #endregion account middlewares
