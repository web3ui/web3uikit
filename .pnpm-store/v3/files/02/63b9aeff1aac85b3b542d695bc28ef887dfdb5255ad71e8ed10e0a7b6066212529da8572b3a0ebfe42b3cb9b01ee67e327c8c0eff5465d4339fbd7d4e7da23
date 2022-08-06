import { JRPCRequest } from "@toruslabs/openlogin-jrpc";

import { BaseConfig, BaseState } from "../interfaces";

/**
 * The status of the transaction. Each status represents the state of the transaction internally
 * in the wallet. Some of these correspond with the state of the transaction on the network, but
 * some are wallet-specific.
 */

export enum TransactionStatus {
  approved = "approved",
  cancelled = "cancelled",
  confirmed = "confirmed",
  failed = "failed",
  finalized = "finalized",
  processed = "processed",
  rejected = "rejected",
  signed = "signed",
  submitted = "submitted",
  unapproved = "unapproved",
  dropped = "dropped",
  expired = "expired",
}

export const TRANSACTION_TYPES = {
  CONTRACT_INTERACTION: "contractInteraction",
  DEPLOY_CONTRACT: "contractDeployment",
  WASM_BASED_DEPLOY: "wasmBasedDeploy",
  STANDARD_TRANSACTION: "transaction",
  STANDARD_PAYMENT_TRANSACTION: "payment_transaction", // specific to chains like solana and casper
};

export type TRANSACTION_TYPE = typeof TRANSACTION_TYPES[keyof typeof TRANSACTION_TYPES];

export const TX_EVENTS = {
  TX_WARNING: "tx:warning",
  TX_ERROR: "tx:error",
  TX_FAILED: "tx:failed",
  TX_CONFIRMED: "tx:confirmed",
  TX_DROPPED: "tx:dropped",
  TX_EXPIRED: "tx:expired",
  TX_STATUS_UPDATE: "tx:status_update",
  TX_UNAPPROVED: "tx:unapproved",
};

export interface TransactionMeta<T> {
  id: string;
  transaction: T;
  transactionType: TRANSACTION_TYPE;
  dappSuggestedTransaction: Partial<T>;
  chainId: string;
  origin: string;
  time: number;
  status: TransactionStatus;
  updated_at?: string; // iso date string
  transactionHash?: string;
  rawTransaction?: string;
  txReceipt?: unknown;
  error?: Error;
  warning?: {
    error?: string;
    message?: string;
  };
}

export type BASE_TX_EVENT_TYPE = {
  txId: string;
};

export type TX_ERROR_EVENT_TYPE = BASE_TX_EVENT_TYPE & {
  error: Error;
};

export type TX_FAILED_EVENT_TYPE = BASE_TX_EVENT_TYPE & {
  error: Error;
};

export type TX_EXPIRED_EVENT_TYPE = BASE_TX_EVENT_TYPE;

export type TX_WARNING_EVENT_TYPE<T> = BASE_TX_EVENT_TYPE & {
  txMeta: TransactionMeta<T>;
};

export type TX_CONFIRMED_EVENT_TYPE = BASE_TX_EVENT_TYPE & {
  txReceipt: unknown;
};

export type TX_DROPPED_EVENT_TYPE = BASE_TX_EVENT_TYPE;

export type TX_STATUS_UPDATE_EVENT_TYPE = BASE_TX_EVENT_TYPE & {
  status: TransactionStatus;
};

export type TX_FINISHED_EVENT_TYPE<T> = BASE_TX_EVENT_TYPE & {
  txMeta: TransactionMeta<T>;
};

/**
 * Transaction controller configuration
 */
export interface TransactionConfig extends BaseConfig {
  txHistoryLimit: number;
}

/**
 * Transaction controller state
 */
export interface TransactionState<T> extends BaseState {
  /**
   * Transactions by key (id) value (TxMeta)
   */
  transactions: Record<string, TransactionMeta<T>>; // all transactions (unapprroved and all others)
  unapprovedTxs?: Record<string, TransactionMeta<T>>; // only unapproved
  currentNetworkTxsList?: TransactionMeta<T>[];
}

/**
 * Result
 *
 * result - Promise resolving to a new transaction hash
 * transactionMeta - Meta information about this new transaction
 */
export interface Result<T> {
  result: Promise<string>;
  transactionMeta: TransactionMeta<T>;
}

export interface ITransactionController<T> {
  /**
   * Add a new unapproved transaction to state.
   * @param transaction - Transaction object to add
   * @returns - Object containing a promise resolving to the transaction hash if approved
   */
  addTransaction(transaction: T, req: JRPCRequest<T & { windowId?: string }> & { origin: string }): Promise<Result<T>>;

  /**
   * Approves a transaction and updates it's status in state.
   *
   * @param transactionID - ID of the transaction to approve
   * @returns - Promise resolving when this operation completes
   */
  approveTransaction(transactionID: string): Promise<void>;

  /**
   * Cancels a transaction based on its ID by setting its status to "rejected"
   *
   * @param transactionID - ID of the transaction to cancel
   */
  cancelTransaction?(transactionID: string): Promise<void>;
}

export interface ITransactionStateManager<T> {
  addTransactionToState(txMeta: TransactionMeta<T>): TransactionMeta<T>;

  wipeTransactions(address: string): void;

  getTransactions(args: {
    searchCriteria?: Record<string, (val: unknown) => boolean> | Record<string, unknown>;
    initialList?: TransactionMeta<T>[];
    filterToCurrentNetwork?: boolean;
  }): TransactionMeta<T>[];
  getApprovedTransactions(address?: string): TransactionMeta<T>[];
  getPendingTransactions(address?: string): TransactionMeta<T>[];
  getConfirmedTransactions(address?: string): TransactionMeta<T>[];
}
