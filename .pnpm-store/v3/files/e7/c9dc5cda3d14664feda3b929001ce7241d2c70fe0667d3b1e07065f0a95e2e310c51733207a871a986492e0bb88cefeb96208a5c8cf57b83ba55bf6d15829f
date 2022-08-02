import { SafeEventEmitter } from "@toruslabs/openlogin-jrpc";
import { BaseAdapterConfig, IWalletConnectExtensionAdapter, LoginMethodConfig, WALLET_ADAPTER_TYPE } from "@web3auth/base";

export interface UIConfig {
  appLogo: string;
  version: string;
  adapterListener: SafeEventEmitter;
  theme?: "light" | "dark";
  loginMethodsOrder?: string[];
  displayErrorsOnModal?: boolean;
}

export const LOGIN_MODAL_EVENTS = {
  INIT_EXTERNAL_WALLETS: "INIT_EXTERNAL_WALLETS",
  LOGIN: "LOGIN",
  DISCONNECT: "DISCONNECT",
  MODAL_VISIBILITY: "MODAL_VISIBILITY",
};

export type SocialLoginsConfig = {
  loginMethodsOrder: string[];
  loginMethods: LoginMethodConfig;
  adapter: WALLET_ADAPTER_TYPE;
};

export const MODAL_STATUS = {
  INITIALIZED: "initialized",
  CONNECTED: "connected",
  CONNECTING: "connecting",
  ERRORED: "errored",
};
export type ModalStatusType = typeof MODAL_STATUS[keyof typeof MODAL_STATUS];

export interface ModalState {
  status: ModalStatusType;
  externalWalletsInitialized: boolean;
  hasExternalWallets: boolean;
  externalWalletsVisibility: boolean;
  modalVisibility: boolean;
  modalVisibilityDelayed: boolean;
  postLoadingMessage: string;
  walletConnectUri: string;
  socialLoginsConfig: SocialLoginsConfig;
  externalWalletsConfig: Record<string, BaseAdapterConfig>;
  detailedLoaderAdapter: string;
  showExternalWalletsOnly: boolean;
  wcAdapters: IWalletConnectExtensionAdapter[];
}

export type SocialLoginEventType = { adapter: string; loginParams: { loginProvider: string; login_hint?: string } };
export type ExternalWalletEventType = { adapter: string };
