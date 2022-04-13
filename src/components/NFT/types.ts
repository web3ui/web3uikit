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
    tokenId: string;

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

/**
 * NFT-Metadata-Standard: https://docs.opensea.io/docs/metadata-standards
 */
export type TNFTMetadata = {
    animation_url?: string;
    attributes?: Array<any>;
    background_color?: string;
    description?: string;
    image?: string;
    image_url?: string;
    name?: string;
    traits?: Array<any>;
    youtube_url?: string;
};
