import type { Transaction } from "@solana/web3.js";
import type { SafeEventEmitter } from "@toruslabs/openlogin-jrpc";
import { RequestArguments } from "@web3auth/base";

import { InjectedProvider } from "./providers";

export interface ISolanaWallet {
  publicKey?: { toBytes(): Uint8Array };
  signAndSendTransaction(transaction: Transaction): Promise<{ signature: string }>;
  signTransaction?(transaction: Transaction): Promise<Transaction>;
  signAllTransactions?(transactions: Transaction[]): Promise<Transaction[]>;
  signMessage(message: Uint8Array): Promise<Uint8Array>;
  request<T>(args: RequestArguments): Promise<T>;
}

export interface IPhantomWalletProvider extends SafeEventEmitter {
  isConnected: boolean;
  publicKey?: { toBytes(): Uint8Array };
  signAndSendTransaction(transaction: Transaction): Promise<{ signature: string }>;
  signTransaction?(transaction: Transaction): Promise<Transaction>;
  signAllTransactions?(transactions: Transaction[]): Promise<Transaction[]>;
  signMessage(message: Uint8Array): Promise<Uint8Array>;
  request<T>(args: RequestArguments): Promise<T>;
  _handleDisconnect(...args: unknown[]): void;
  connect(): Promise<void>;
  disconnect(): Promise<void>;
}

export interface IBaseWalletProvider {
  publicKey?: { toBytes(): Uint8Array };
  signMessage?(message: Uint8Array): Promise<Uint8Array>;
  signTransaction?(transaction: Transaction): Promise<Transaction>;
  signAllTransactions?(transactions: Transaction[]): Promise<Transaction[]>;
  signAndSendTransaction?(transaction: Transaction): Promise<{ signature: string }>;
}

export interface ISlopeProvider extends SafeEventEmitter {
  connect(): Promise<{
    msg: string;
    data: {
      publicKey?: string;
    };
  }>;
  disconnect(): Promise<{ msg: string }>;
  signTransaction(message: string): Promise<{
    msg: string;
    data: {
      publicKey?: string;
      signature?: string;
    };
  }>;
  signAllTransactions(messages: string[]): Promise<{
    msg: string;
    data: {
      publicKey?: string;
      signatures?: string[];
    };
  }>;
  signMessage(message: Uint8Array): Promise<{ data: { signature: string } }>;
}

export interface ITorusWalletProvider extends InjectedProvider {
  sendTransaction(transaction: Transaction): Promise<string>;
  signTransaction(transaction: Transaction): Promise<Transaction>;
  signAllTransactions(transactions: Transaction[]): Promise<Transaction[]>;
  signMessage(data: Uint8Array): Promise<Uint8Array>;
}
