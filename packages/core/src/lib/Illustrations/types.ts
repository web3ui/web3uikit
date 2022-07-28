export const chainState = [
    'arbitrum',
    'avalanche',
    'binance',
    'coinbase',
    'coinbase',
    'cronos',
    'ethereum',
    'fantom',
    'polygon',
] as const;
export type Chain = typeof chainState[number];

export const logoState = [
    'bundle',
    'chest',
    'comingSoon',
    'confirmed',
    'lazyNft',
    'looking',
    'marketplace',
    'pack',
    'servers',
    'token',
] as const;
export type Logo = typeof logoState[number];
export type Size = number | string;

export interface IllustrationProps {
    id?: string;

    /**
     * set logo
     */
    logo: Chain | Logo;

    /**
     * Height of Illustration
     */
    width?: Size;

    /**
     * Width of illustration
     */
    height?: Size;
}
