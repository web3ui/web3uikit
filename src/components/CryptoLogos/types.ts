export interface CryptoLogoProps {
    /**
     * The name of the blockchain
     */
    chain: chainType;

    /**
     * The size of the component
     */
    size?: sizeType;

    /**
     * The background color of the crypto logo
     */
    bgColor?: string;
}

export type chainType =
    | 'arbitrum'
    | 'avalanche'
    | 'binance'
    | 'ethereum'
    | 'fantom'
    | 'polygon';

export type sizeType = string | number;
