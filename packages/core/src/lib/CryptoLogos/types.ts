export interface CryptoLogoProps {
    /**
     * The background color of the crypto logo
     */
    bgColor?: string;

    /**
     * The name of the blockchain
     */
    chain: chainType;

    /**
     * The size of the component
     */
    size?: sizeType;
}

export type chainType =
    | 'arbitrum'
    | 'avalanche'
    | 'binance'
    | 'coinbase'
    | 'cronos'
    | 'cryptoweb'
    | 'ethereum'
    | 'fantom'
    | 'polygon'
    | 'ronin'
    | 'optimism';

export type sizeType = string | number;
