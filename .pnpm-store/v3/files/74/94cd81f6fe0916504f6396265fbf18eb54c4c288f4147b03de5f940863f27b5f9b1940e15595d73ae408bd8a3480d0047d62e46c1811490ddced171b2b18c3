import type { IWalletConnectOptions } from "@walletconnect/types";
import { CustomChainConfig, INetworkSwitch } from "@web3auth/base";

interface IAdapterSettings extends IWalletConnectOptions {
  skipNetworkSwitching?: boolean;
  networkSwitchModal?: INetworkSwitch;
}
export interface WalletConnectV1AdapterOptions {
  adapterSettings?: IAdapterSettings;
  chainConfig?: CustomChainConfig;
}
