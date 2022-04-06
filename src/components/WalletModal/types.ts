import { ConnectButtonProps } from '../ConnectButton/types';
export interface WalletModalProps extends ConnectButtonProps {
    /**
     * an optional chain id of the blockchain that the web3 wallet is connected to
     */
    chainId?: number;

    /**
     * Modal is open if true
     */
    isOpened: boolean;

    /**
     * Set Open state
     */
    setIsOpened: (value: boolean) => void;

    /**
     * an optional response message that will be displayed to the user once their sign-in request is successful
     */
    signingMessage?: string;
}
