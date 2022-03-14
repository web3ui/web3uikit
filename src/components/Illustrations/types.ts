export const chainState = [
    'ethereum',
    'binance',
    'polygon',
    'arbitrum',
    'avalanche',
    'fantom',
] as const;
export type Chain = typeof chainState[number];

export const logoState = [
    'comingSoon',
    'confirmed',
    'looking',
    'servers',
    'token',
    'lazyNft',
    'pack',
    'bundle',
    'chest',
    'marketplace',
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
