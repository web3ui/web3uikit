import { Chain } from '../../web3utils';

export type NFTCardProp = {
    chain: Chain;
    metadata?: string;
    tokenAddress: string;
    tokenId: string;
    tokenUri: string;
};

export interface NFTCollectionProps {
    /**
     * Wallet address of the owner
     */
    address: string;
    /**
     * Chain Id on which NFT is owned
     */
    chain: Chain;
    /**
     * Limit
     */
    limit?: number;
    /**
     * Offset
     */
    offset?: number;
}

export type NFTType = {
    image: string | null;
    name: string | null;
};

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
};
