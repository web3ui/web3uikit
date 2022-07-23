import type { OpenloginUserInfo } from "@toruslabs/openlogin";
import { SafeEventEmitter } from "@toruslabs/openlogin-jrpc";

import { getChainConfig } from "../chain/config";
import { AdapterNamespaceType, ChainNamespaceType, CustomChainConfig } from "../chain/IChainInterface";
import { WalletInitializationError, WalletLoginError } from "../errors";
import { SafeEventEmitterProvider } from "../provider/IProvider";
import { WALLET_ADAPTERS } from "../wallet";

export type UserInfo = OpenloginUserInfo;

export const ADAPTER_CATEGORY = {
  EXTERNAL: "external",
  IN_APP: "in_app",
} as const;
export type ADAPTER_CATEGORY_TYPE = typeof ADAPTER_CATEGORY[keyof typeof ADAPTER_CATEGORY];

export interface AdapterInitOptions {
  /**
   * Whether to auto connect to the adapter based on redirect mode or saved adapters
   */
  autoConnect?: boolean;
}

export const ADAPTER_STATUS = {
  NOT_READY: "not_ready",
  READY: "ready",
  CONNECTING: "connecting",
  CONNECTED: "connected",
  DISCONNECTED: "disconnected",
  ERRORED: "errored",
} as const;

export const ADAPTER_EVENTS = {
  ...ADAPTER_STATUS,
  ADAPTER_DATA_UPDATED: "adapter_data_updated",
} as const;
export type ADAPTER_STATUS_TYPE = typeof ADAPTER_STATUS[keyof typeof ADAPTER_STATUS];

export type CONNECTED_EVENT_DATA = {
  adapter: string;
  reconnected: boolean;
};
export interface IAdapter<T> extends SafeEventEmitter {
  adapterNamespace: AdapterNamespaceType;
  currentChainNamespace: ChainNamespaceType;
  chainConfigProxy: CustomChainConfig | null;
  type: ADAPTER_CATEGORY_TYPE;
  name: string;
  status: ADAPTER_STATUS_TYPE;
  provider: SafeEventEmitterProvider | null;
  adapterData?: unknown;
  init(options?: AdapterInitOptions): Promise<void>;
  disconnect(options?: { cleanup: boolean }): Promise<void>;
  connect(params?: T): Promise<SafeEventEmitterProvider | null>;
  getUserInfo(): Promise<Partial<UserInfo>>;
  setChainConfig(customChainConfig: CustomChainConfig): void;
  setAdapterSettings(adapterSettings: unknown): void;
}

export abstract class BaseAdapter<T> extends SafeEventEmitter implements IAdapter<T> {
  public adapterData?: unknown = {};

  // should be added in constructor or from setChainConfig function
  // before calling init function.
  protected chainConfig: CustomChainConfig | null = null;

  public abstract adapterNamespace: AdapterNamespaceType;

  public abstract currentChainNamespace: ChainNamespaceType;

  public abstract type: ADAPTER_CATEGORY_TYPE;

  public abstract name: string;

  public abstract status: ADAPTER_STATUS_TYPE;

  get chainConfigProxy(): CustomChainConfig | null {
    return this.chainConfig ? { ...this.chainConfig } : null;
  }

  public abstract get provider(): SafeEventEmitterProvider | null;

  setChainConfig(customChainConfig: CustomChainConfig): void {
    if (this.status === ADAPTER_STATUS.READY) return;
    if (!customChainConfig.chainNamespace) throw WalletInitializationError.notReady("ChainNamespace is required while setting chainConfig");
    const defaultChainConfig = getChainConfig(customChainConfig.chainNamespace, customChainConfig.chainId);
    this.chainConfig = { ...defaultChainConfig, ...customChainConfig };
  }

  setAdapterSettings(_: unknown): void {}

  checkConnectionRequirements(): void {
    // we reconnect without killing existing wallet connect session on calling connect again.
    if (this.name === WALLET_ADAPTERS.WALLET_CONNECT_V1 && this.status === ADAPTER_STATUS.CONNECTING) return;
    else if (this.status === ADAPTER_STATUS.CONNECTING) throw WalletInitializationError.notReady("Already connecting");

    if (this.status === ADAPTER_STATUS.CONNECTED) throw WalletLoginError.connectionError("Already connected");
    if (this.status !== ADAPTER_STATUS.READY) throw WalletLoginError.connectionError("Wallet adapter is not ready yet");
  }

  checkInitializationRequirements(): void {
    if (this.status === ADAPTER_STATUS.NOT_READY) return;
    if (this.status === ADAPTER_STATUS.CONNECTED) throw WalletInitializationError.notReady("Already connected");
    if (this.status === ADAPTER_STATUS.READY) throw WalletInitializationError.notReady("Adapter is already initialized");
  }

  updateAdapterData(data: unknown): void {
    this.adapterData = data;
    this.emit(ADAPTER_EVENTS.ADAPTER_DATA_UPDATED, { adapterName: this.name, data });
  }

  abstract init(options?: AdapterInitOptions): Promise<void>;
  abstract connect(params?: T): Promise<SafeEventEmitterProvider | null>;
  abstract disconnect(): Promise<void>;
  abstract getUserInfo(): Promise<Partial<UserInfo>>;
}

export interface BaseAdapterConfig {
  label: string;
  showOnModal?: boolean;
  showOnMobile?: boolean;
  showOnDesktop?: boolean;
}

export type LoginMethodConfig = Record<
  string,
  {
    /**
     * Display Name. If not provided, we use the default for openlogin app
     */
    name: string;
    /**
     * Description for button. If provided, it renders as a full length button. else, icon button
     */
    description?: string;
    /**
     * Logo to be shown on mouse hover. If not provided, we use the default for openlogin app
     */
    logoHover?: string;
    /**
     * Logo to be shown on dark background (dark theme). If not provided, we use the default for openlogin app
     */
    logoLight?: string;
    /**
     * Logo to be shown on light background (light theme). If not provided, we use the default for openlogin app
     */
    logoDark?: string;
    /**
     * Show login button on the main list
     */
    mainOption?: boolean;
    /**
     * Whether to show the login button on modal or not
     */
    showOnModal?: boolean;
    /**
     * Whether to show the login button on desktop
     */
    showOnDesktop?: boolean;
    /**
     * Whether to show the login button on mobile
     */
    showOnMobile?: boolean;
  }
>;

export interface IWalletConnectExtensionAdapter {
  name: string;
  chains: ChainNamespaceType[];
  logo: string;
  mobile: {
    native: string;
    universal: string;
  };
  desktop: {
    native: string;
    universal: string;
  };
}

export interface WalletConnectV1Data {
  uri: string;
  extensionAdapters: IWalletConnectExtensionAdapter[];
}

export interface IAdapterDataEvent {
  adapterName: string;
  data: unknown;
}

export interface INetworkSwitchProvider {
  addChain(chainConfig: CustomChainConfig): Promise<void>;
  switchChain(chainId: string): Promise<void>;
}
export interface INetworkSwitch {
  addNetwork(params: { chainConfig: CustomChainConfig; appOrigin: string }): Promise<boolean>;
  switchNetwork(params: { currentChainConfig: CustomChainConfig; newChainConfig: Partial<CustomChainConfig>; appOrigin: string }): Promise<boolean>;
}

export abstract class BaseNetworkSwitch implements INetworkSwitch {
  abstract switchNetwork(params: {
    currentChainConfig: CustomChainConfig;
    newChainConfig: Partial<CustomChainConfig>;
    appOrigin: string;
  }): Promise<boolean>;

  abstract addNetwork(params: { chainConfig: CustomChainConfig; appOrigin: string }): Promise<boolean>;
}
