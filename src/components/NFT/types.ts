export interface NFTProps {
    /**
     * set id of NFT Element
     */
    id?: string;

    /**
     * set image url
     */
    img_url: string;

    /**
     * set description of NFT
     */
    description?: string;

    /**
     * set name of NFT
     */
    name: string;

    /**
     * set type of NFT
     */
    type: "ERC721" | "ERC1155";

    /**
     * set token address of NFT
     */
    token_address: string;

    /**
     * set token id of NFT
     */
    token_id: string | number;
}