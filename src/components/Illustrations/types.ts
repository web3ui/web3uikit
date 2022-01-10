export interface IllustrationProps {
    id?: string;
    logo: chain | logos;

    /**
     * possible sizes are "xs" | "s" | "m" | "l" | "xl"
     */
    size?: size;

    /**
     * set inner color
     */
    fillInline?: string;

    /**
     * set border color
     */
    fillOutline?: string;

    /**
     * Use for ethereum and arbitrum only
     */
    fillInlineLeft?: string;

    /**
     * Use for ethereum and arbitrum only
     */
    fillInlineRight?: string
}

export type size = "xs" | "s" | "m" | "l" | "xl";
export type chain = "ethereum" | "binance" | "polygon" | "arbitrum" | "avalanche" | "fantom";
export type logos = "coming soon" | "confirmed" | "looking" | "servers" | "token" | "lazy nft" | "pack" | "bundle" | "chest" | "marketplace";