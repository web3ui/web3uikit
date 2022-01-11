export const sizeState = ['xs', 's', 'm', 'l', 'xl'] as const;
export type size = typeof sizeState[number];

export const chainState = [
    'ethereum',
    'binance',
    'polygon',
    'arbitrum',
    'avalanche',
    'fantom',
] as const;
export type chain = typeof chainState[number];

export const logoState = [
    'coming soon',
    'confirmed',
    'looking',
    'servers',
    'token',
    'lazy nft',
    'pack',
    'bundle',
    'chest',
    'marketplace',
] as const;
export type logos = typeof logoState[number];

export interface IllustrationProps {
    id?: string;

    /**
     * set logo
     */
    logo: chain | logos;

    /**
     * possible sizes are "xs" , "s" , "m" , "l" , "xl"
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
    fillInlineRight?: string;
}
