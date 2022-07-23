import { Transaction } from "@solana/web3.js";
import { RequestArguments, SafeEventEmitterProvider } from "@web3auth/base";
import { ISolanaWallet } from "./interface";
export declare class SolanaWallet implements ISolanaWallet {
    provider: SafeEventEmitterProvider;
    constructor(provider: SafeEventEmitterProvider);
    requestAccounts(): Promise<string[]>;
    signAndSendTransaction(transaction: Transaction): Promise<{
        signature: string;
    }>;
    signTransaction(transaction: Transaction): Promise<Transaction>;
    signAllTransactions(transactions: Transaction[]): Promise<Transaction[]>;
    signMessage(data: Uint8Array): Promise<Uint8Array>;
    request<T>(args: RequestArguments): Promise<T>;
}
