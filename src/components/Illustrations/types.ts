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
}
