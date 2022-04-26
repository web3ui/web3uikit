import { ConnectButtonProps } from '../ConnectButton/types';
export interface WalletModalProps extends ConnectButtonProps {
    /**
     * Set Text of the WalletModal
     */
    customText?: string;

    /**
     * Modal is open if true
     */
    isOpened: boolean;

    /**
     * Set Open state
     */
    setIsOpened: (value: boolean) => void;
}
