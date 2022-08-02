import { BaseConfig, BaseState, IController } from "../interfaces";

export interface IAccountTrackerController<C, S> extends IController<C, S> {
  /**
   * Syncs accounts from preferences controller
   */
  syncAccounts(): void;

  /**
   * Refreshes the balances of all accounts
   */
  refresh(): Promise<void>;
}

export interface AccountTrackerConfig<T> extends BaseConfig {
  _currentBlock?: T;
}

/**
 * Account information object
 */
export interface AccountInformation {
  /**
   * Hex string of an account balance in wei (base unit)
   */
  balance: string;
  /**
   * Optional parameter - used to cache values
   */
  cacheIndexes?: Array<{
    chainId: string;
    index: string;
  }>;
}

/**
 * Account tracker controller state
 */
export interface AccountTrackerState extends BaseState {
  /**
   * Map of addresses to account information
   */
  accounts: { [address: string]: AccountInformation }; // address here is public key
}
