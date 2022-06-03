import { IConnectWalletProps } from "../ConnectButton/types";
export interface WalletModalProps extends IConnectWalletProps {
  /**
   * Modal is open if true
   */
  isOpened: boolean;

  /**
   * Set Open state
   */
  setIsOpened: (value: boolean) => void;
}
