import { iconTypes } from '../Icon/collection';

export interface CryptoCardProps {
    /**
     * A function that will be called if the button is clicked
     */
    onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;

    /**
     * The name of the blockchain
     */
    chain:
        | 'Arbitrum'
        | 'Avalanche'
        | 'Binance'
        | 'Ethereum'
        | 'Fantom'
        | 'Polygon';

    /**
     * The type of the chain / a subtitle below the chain name
     */
    chainType: string;

    /**
     * The background color of the crypto card
     */
    bgColor: string;

    /**
     * The type of settings icon
     */
    settingsIcon?: iconTypes;

    /**
     * The text shown in the button
     */
    btnText?: string;
}
