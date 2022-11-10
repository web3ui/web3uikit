import React from 'react';
import { TChainNames } from '../../interfaces/logo';

export type Chain = TChainNames;

export const logoState = [
    'bundle',
    'chest',
    'comingSoon',
    'confirmed',
    'cryptoweb',
    'discord',
    'documentation',
    'lazyNft',
    'looking',
    'marketplace',
    'pack',
    'servers',
    'token',
    'wizard',
    'data',
    'plugins',
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

export interface ILogoProps {
    height?: Size;
    width?: Size;
}

export interface ILogoImport {
    name: Chain;
    component: React.LazyExoticComponent<React.FC<ILogoProps>>;
}
