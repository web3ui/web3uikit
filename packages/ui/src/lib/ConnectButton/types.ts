export interface IConnectWalletProps {
  /**
   * 'Connect Wallet'  by default
   */
  text?: string;

  /**
   * auth type
   */
  authType?: keyof typeof EAuthType;
}

export enum EAuthType {
  walletconnect,
  wc,
  metamask,
}
