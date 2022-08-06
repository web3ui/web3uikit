import { omitBy, pickBy } from "lodash";

import BaseController from "../BaseController";
import { transactionMatchesNetwork } from "../utils";
import {
  TransactionConfig,
  TransactionMeta,
  TransactionState,
  TransactionStatus,
  TX_EVENTS,
  TX_STATUS_UPDATE_EVENT_TYPE,
} from "./ITransactionController";

export class BaseTransactionStateManager<T> extends BaseController<TransactionConfig, TransactionState<T>> {
  protected getCurrentChainId: () => string;

  constructor({
    config,
    state,
    getCurrentChainId,
  }: {
    config?: Partial<TransactionConfig>;
    state?: Partial<TransactionState<T>>;
    getCurrentChainId: () => string;
  }) {
    super({ config, state });
    this.defaultConfig = {
      txHistoryLimit: 40,
    };
    this.defaultState = {
      transactions: {},
      unapprovedTxs: {},
      currentNetworkTxsList: [],
    };
    this.initialize();
    this.getCurrentChainId = getCurrentChainId;
  }

  getUnapprovedTxList(): Record<string, TransactionMeta<T>> {
    const chainId = this.getCurrentChainId();
    return pickBy(
      this.state.transactions,
      (transaction) => transaction.status === TransactionStatus.unapproved && transactionMatchesNetwork<T>(transaction, chainId)
    );
  }

  getTransaction(txId: string): TransactionMeta<T> {
    const { transactions } = this.state;
    return transactions[txId];
  }

  updateTransaction(txMeta: TransactionMeta<T>): void {
    // commit txMeta to state
    const txId = txMeta.id;
    txMeta.updated_at = new Date().toISOString();
    this.update({
      transactions: {
        ...this.state.transactions,
        [txId]: txMeta,
      },
    });
  }

  setTxStatusRejected(txId: string): void {
    this._setTransactionStatus(txId, TransactionStatus.rejected);
    this._deleteTransaction(txId);
  }

  /**
   * The implementing controller can override this functionality and add custom logic + call super.()
   */
  setTxStatusUnapproved(txId: string): void {
    this._setTransactionStatus(txId, TransactionStatus.unapproved);
  }

  setTxStatusApproved(txId: string): void {
    this._setTransactionStatus(txId, TransactionStatus.approved);
  }

  setTxStatusSigned(txId: string): void {
    this._setTransactionStatus(txId, TransactionStatus.signed);
  }

  setTxStatusSubmitted(txId: string): void {
    this._setTransactionStatus(txId, TransactionStatus.submitted);
  }

  setTxStatusDropped(txId: string): void {
    this._setTransactionStatus(txId, TransactionStatus.dropped);
  }

  setTxStatusExpired(txId: string): void {
    this._setTransactionStatus(txId, TransactionStatus.expired);
  }

  setTxStatusConfirmed(txId: string): void {
    this._setTransactionStatus(txId, TransactionStatus.confirmed);
  }

  setTxStatusFailed(txId: string, error_: Error): void {
    const error = !error_ ? new Error("Internal torus failure") : error_;

    const txMeta = this.getTransaction(txId);
    txMeta.error = error;
    this.updateTransaction(txMeta);
    this._setTransactionStatus(txId, TransactionStatus.failed);
  }

  /**
   * Method to determine if the transaction is in a final state
   * @param status - Transaction status
   * @returns boolean if the transaction is in a final state
   */
  isFinalState(status: TransactionStatus): boolean {
    return (
      status === TransactionStatus.rejected ||
      status === TransactionStatus.submitted ||
      status === TransactionStatus.confirmed ||
      status === TransactionStatus.failed ||
      status === TransactionStatus.cancelled ||
      status === TransactionStatus.expired
    );
  }

  /**
   * Filters out the unapproved transactions from state
   */
  clearUnapprovedTxs(): void {
    this.update({
      transactions: omitBy(this.state.transactions, (transaction: TransactionMeta<T>) => transaction.status === TransactionStatus.unapproved),
    });
  }

  /**
   * will append new transactions to old txns.
   */
  _addTransactionsToState(transactions: TransactionMeta<T>[]): void {
    this.update({
      transactions: transactions.reduce((result: Record<string, TransactionMeta<T>>, newTx: TransactionMeta<T>) => {
        result[newTx.id] = newTx;
        return result;
      }, this.state.transactions),
    });
  }

  /**
   * will set new txns, override existing if any in state.
   */
  _setTransactionsToState(transactions: TransactionMeta<T>[]): void {
    this.update({
      transactions: transactions.reduce((result: Record<string, TransactionMeta<T>>, newTx: TransactionMeta<T>) => {
        result[newTx.id] = newTx;
        return result;
      }, {}),
    });
  }

  _deleteTransaction(targetTransactionId: string): void {
    const { transactions } = this.state;
    delete transactions[targetTransactionId];
    this.update({
      transactions,
    });
  }

  _deleteTransactions(targetTransactionIds: string[]): void {
    const { transactions } = this.state;
    targetTransactionIds.forEach((transactionId) => {
      delete transactions[transactionId];
    });
    this.update({
      transactions,
    });
  }

  protected _setTransactionStatus(txId: string, status: TransactionStatus): void {
    const txMeta = this.getTransaction(txId);
    if (!txMeta) {
      return;
    }
    txMeta.status = status;
    // only updating status so no validation required on txn.
    this.updateTransaction(txMeta);
    this.emit(TX_EVENTS.TX_STATUS_UPDATE, { txId, status } as TX_STATUS_UPDATE_EVENT_TYPE);
    if (this.isFinalState(status)) {
      this.emit(`${txMeta.id}:finished`, txMeta);
    } else {
      this.emit(`${txMeta.id}:${status}`, txId);
    }
  }
}
