import BaseController from "../BaseController";
import { TransactionConfig, TransactionMeta, TransactionState, TransactionStatus } from "./ITransactionController";
export declare class BaseTransactionStateManager<T> extends BaseController<TransactionConfig, TransactionState<T>> {
    protected getCurrentChainId: () => string;
    constructor({ config, state, getCurrentChainId, }: {
        config?: Partial<TransactionConfig>;
        state?: Partial<TransactionState<T>>;
        getCurrentChainId: () => string;
    });
    getUnapprovedTxList(): Record<string, TransactionMeta<T>>;
    getTransaction(txId: string): TransactionMeta<T>;
    updateTransaction(txMeta: TransactionMeta<T>): void;
    setTxStatusRejected(txId: string): void;
    /**
     * The implementing controller can override this functionality and add custom logic + call super.()
     */
    setTxStatusUnapproved(txId: string): void;
    setTxStatusApproved(txId: string): void;
    setTxStatusSigned(txId: string): void;
    setTxStatusSubmitted(txId: string): void;
    setTxStatusDropped(txId: string): void;
    setTxStatusExpired(txId: string): void;
    setTxStatusConfirmed(txId: string): void;
    setTxStatusFailed(txId: string, error_: Error): void;
    /**
     * Method to determine if the transaction is in a final state
     * @param status - Transaction status
     * @returns boolean if the transaction is in a final state
     */
    isFinalState(status: TransactionStatus): boolean;
    /**
     * Filters out the unapproved transactions from state
     */
    clearUnapprovedTxs(): void;
    /**
     * will append new transactions to old txns.
     */
    _addTransactionsToState(transactions: TransactionMeta<T>[]): void;
    /**
     * will set new txns, override existing if any in state.
     */
    _setTransactionsToState(transactions: TransactionMeta<T>[]): void;
    _deleteTransaction(targetTransactionId: string): void;
    _deleteTransactions(targetTransactionIds: string[]): void;
    protected _setTransactionStatus(txId: string, status: TransactionStatus): void;
}
