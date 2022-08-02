import { ADAPTER_STATUS_TYPE, UserInfo } from "../adapter/IAdapter";
import { SafeEventEmitterProvider } from "../provider/IProvider";
import { WALLET_ADAPTER_TYPE } from "../wallet";

export interface IWeb3Auth {
  connectedAdapterName: string | null;
  status: ADAPTER_STATUS_TYPE;
  cachedAdapter: string | null;
  provider: SafeEventEmitterProvider | null;
  init(): Promise<void>;
  /**
   * Connect to a specific wallet adapter
   * @param walletName - Key of the walletAdapter to use.
   */
  connectTo<T>(walletName: WALLET_ADAPTER_TYPE, loginParams?: T): Promise<SafeEventEmitterProvider | null>;
  logout(options?: { cleanup: boolean }): Promise<void>;
  getUserInfo(): Promise<Partial<UserInfo>>;
}
