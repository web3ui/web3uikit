import { iconTypes } from '../Icon/collection';

export interface CryptoCardProps {
    /**
     * A function that will be called if the button is clicked
     */
    buttonClickEvent?: () => void;

    /**
     * The name of the blockchain
     */
    chain: string;

    /**
     * The type of the chain / a subtitle below the chain name
     */
    chainType: string;

    /**
     * The chain logo
     */
    chainLogo: string;

    /**
     * The background color of the crypto card
     */
    bgColor: string;

    /**
     * The type of settings icon
     */
    settingsIcon?: iconTypes;

    /**
     * The color assigned to the settings icon
     */
    settingsColor?: string;

    /**
     * The text shown in the button
     */
    btnText?: string;
}
