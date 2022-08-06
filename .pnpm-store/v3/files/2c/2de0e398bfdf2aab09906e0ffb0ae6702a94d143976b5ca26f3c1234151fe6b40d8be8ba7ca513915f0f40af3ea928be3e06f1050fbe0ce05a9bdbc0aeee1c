import { Transaction } from "@solana/web3.js";
import { RequestArguments, SafeEventEmitterProvider } from "@web3auth/base";

import { ISolanaWallet } from "./interface";

export class SolanaWallet implements ISolanaWallet {
  public provider: SafeEventEmitterProvider;

  constructor(provider: SafeEventEmitterProvider) {
    this.provider = provider;
  }

  public async requestAccounts(): Promise<string[]> {
    const accounts = await this.provider.request<string[]>({
      method: "requestAccounts",
      params: {},
    });
    return accounts;
  }

  public async signAndSendTransaction(transaction: Transaction): Promise<{ signature: string }> {
    const { signature } = await this.provider.request<{ signature: string }>({
      method: "signAndSendTransaction",
      params: {
        message: transaction,
      },
    });
    return { signature };
  }

  public async signTransaction(transaction: Transaction): Promise<Transaction> {
    const signedTransaction = (await this.provider.request({
      method: "signTransaction",
      params: {
        message: transaction,
      },
    })) as Transaction;
    return signedTransaction;
  }

  public async signAllTransactions(transactions: Transaction[]): Promise<Transaction[]> {
    const signedTransactions = (await this.provider.request({
      method: "signAllTransactions",
      params: {
        message: transactions,
      },
    })) as Transaction[];
    return signedTransactions;
  }

  public async signMessage(data: Uint8Array): Promise<Uint8Array> {
    const response = await this.provider.request<Uint8Array>({
      method: "signMessage",
      params: {
        message: data,
      },
    });
    return response as Uint8Array;
  }

  public async request<T>(args: RequestArguments): Promise<T> {
    const result = await this.provider.request<T>(args);
    return result as T;
  }
}
