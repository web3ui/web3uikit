import { Chain } from '../../web3utils';

export interface INFTProps {
    /**
     * Address of the NFT Collection
     */
    address: string;

    /**
     * Blockchain of NFT
     */
    chain: Chain;

    /**
     * Token Id of NFT;
     */
    tokenId: string | number;

    /**
     * set if metadata should be fetched
     */
    fetchMetadata?: boolean;

    /**
     * Set name of NFT
     */
    name?: string;

    /**
     * set metadata of NFT
     */
    metadata?: TNFTMetadata | undefined;
}

export type TNFTMetadata = {
    animation_url?: string;
    attributes?: { [key: string]: string }[];
    description?: string;
    image?: string;
    image_url?: string;
    name?: string;
    traits?: { [key: string]: string }[];
};
