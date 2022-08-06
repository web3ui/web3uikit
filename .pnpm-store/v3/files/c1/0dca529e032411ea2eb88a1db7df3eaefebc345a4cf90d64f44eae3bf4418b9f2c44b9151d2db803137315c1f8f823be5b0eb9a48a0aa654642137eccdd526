import type { Transaction } from "@solana/web3.js";
import { JRPCMiddleware, JRPCRequest } from "@toruslabs/openlogin-jrpc";
export interface IProviderHandlers {
    requestAccounts: (req: JRPCRequest<unknown>) => Promise<string[]>;
    getAccounts: (req: JRPCRequest<unknown>) => Promise<string[]>;
    getPrivateKey: (req: JRPCRequest<unknown>) => Promise<string>;
    signTransaction: (req: JRPCRequest<{
        message: Transaction;
    }>) => Promise<Transaction>;
    signAllTransactions: (req: JRPCRequest<{
        message: Transaction[];
    }>) => Promise<Transaction[]>;
    signAndSendTransaction: (req: JRPCRequest<{
        message: Transaction;
    }>) => Promise<{
        signature: string;
    }>;
    getSecretKey: (req: JRPCRequest<unknown>) => Promise<string>;
    signMessage: (req: JRPCRequest<{
        message: Uint8Array;
    }>) => Promise<Uint8Array>;
}
export declare function createGetAccountsMiddleware({ getAccounts }: {
    getAccounts: IProviderHandlers["getAccounts"];
}): JRPCMiddleware<unknown, unknown>;
export declare function createRequestAccountsMiddleware({ requestAccounts, }: {
    requestAccounts: IProviderHandlers["requestAccounts"];
}): JRPCMiddleware<unknown, unknown>;
export declare function createGenericJRPCMiddleware<T, U>(targetMethod: string, handler: (req: JRPCRequest<T>) => Promise<U>): JRPCMiddleware<unknown, unknown>;
export declare function createSolanaMiddleware(providerHandlers: IProviderHandlers): JRPCMiddleware<unknown, unknown>;
export interface AddSolanaChainParameter {
    chainId: string;
    chainName: string;
    nativeCurrency: {
        name: string;
        symbol: string;
        decimals: 18;
    };
    rpcUrls: string[];
    blockExplorerUrls?: string[];
}
export interface IChainSwitchHandlers {
    addNewChainConfig: (req: JRPCRequest<AddSolanaChainParameter>) => Promise<void>;
    switchSolanaChain: (req: JRPCRequest<{
        chainId: string;
    }>) => Promise<void>;
}
export declare function createChainSwitchMiddleware({ addNewChainConfig, switchSolanaChain }: IChainSwitchHandlers): JRPCMiddleware<unknown, unknown>;
export interface IAccountHandlers {
    updatePrivatekey: (req: JRPCRequest<{
        privateKey: string;
    }>) => Promise<void>;
}
export declare function createAccountMiddleware({ updatePrivatekey }: IAccountHandlers): JRPCMiddleware<unknown, unknown>;
