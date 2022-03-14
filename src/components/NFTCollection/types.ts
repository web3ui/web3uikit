type chain =
    | '0x1'
    | '0x13881'
    | '0x2a'
    | '0x3'
    | '0x38'
    | '0x4'
    | '0x5'
    | '0x61'
    | '0x89'
    | '0xa869'
    | '0xa86a'
    | '0xfa'
    | 'avalanche testnet'
    | 'avalanche'
    | 'bsc testnet'
    | 'bsc'
    | 'eth'
    | 'fantom'
    | 'goerli'
    | 'kovan'
    | 'mumbai'
    | 'polygon'
    | 'rinkeby'
    | 'ropsten';

export interface NFTCollectionProps {
    /**
     * Wallet address of the owner
     */
    address: string;
    /**
     * Chain Id on which NFT is owned
     */
    chainId: chain;
}

export type ResultType = {
    amount?: string | undefined;
    block_number: string;
    block_number_minted: string;
    contract_type: string;
    metadata?: string | undefined;
    name: string;
    owner_of: string;
    symbol: string;
    synced_at?: string | undefined;
    token_address: string;
    token_id: string;
    token_uri?: string | undefined;
}[];

export type NFTCardProp = {
    token_uri: string;
};

export type NFTType = {
    image: string;
    name: string;
};
