import { ConnectButtonProps } from '../ConnectButton/types';
export interface WalletModalProps extends ConnectButtonProps {
    /**
     * Modal is open if true
     */
    isOpened: boolean;

    /**
     * Set Open state
     */
    setIsOpened: (value: boolean) => void;
}
