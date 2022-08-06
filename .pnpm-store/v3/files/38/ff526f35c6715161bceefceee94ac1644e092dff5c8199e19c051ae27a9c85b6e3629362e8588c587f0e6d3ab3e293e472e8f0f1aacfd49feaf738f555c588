import { BaseState } from "../interfaces";

export type KeyPair = {
  /**
   * Hex string without 0x prefix
   */
  publicKey: string;
  /**
   * Hex string without 0x prefix
   */
  privateKey: string;
  /**
   * Address of the key pair
   */
  address: string;
};

export interface KeyringControllerState extends BaseState {
  wallets: KeyPair[];
}

export interface IKeyringController {
  /**
   * Returns the addresses of all stored key pairs
   */
  getAccounts(): string[];

  /**
   * Imports a key pair
   * @param privateKey - Hex string without 0x prefix
   */
  importAccount(privateKey: string): string;

  /**
   * Removes a key pair
   * @param address - Address of the key pair
   */
  removeAccount(address: string): void;

  /**
   * Signs a transaction of Type T
   * @param tx - Transaction to sign
   * @param withAddress - account to sign the tx with
   */
  signTransaction<T>(tx: T, withAddress: string): T;
}
