import { lazy } from 'react';
import { ILogoImport } from '../../types';

const arbitrumLogo: ILogoImport = {
    name: 'arbitrum',
    component: lazy(() => import('./arbitrum')),
};
const avalancheLogo: ILogoImport = {
    name: 'avalanche',
    component: lazy(() => import('./avalanche')),
};
const binanceLogo: ILogoImport = {
    name: 'binance',
    component: lazy(() => import('./binance')),
};
const coinbaseLogo: ILogoImport = {
    name: 'coinbase',
    component: lazy(() => import('./coinbase')),
};
const cronosLogo: ILogoImport = {
    name: 'cronos',
    component: lazy(() => import('./cronos')),
};
const ethereumLogo: ILogoImport = {
    name: 'ethereum',
    component: lazy(() => import('./ethereum')),
};
const fantomLogo: ILogoImport = {
    name: 'fantom',
    component: lazy(() => import('./fantom')),
};
const polygonLogo: ILogoImport = {
    name: 'polygon',
    component: lazy(() => import('./polygon')),
};
const roninLogo: ILogoImport = {
    name: 'ronin',
    component: lazy(() => import('./ronin')),
};
const optimismLogo: ILogoImport = {
    name: 'optimism',
    component: lazy(() => import('./optimism')),
};
/* PLOP_INJECT_CHAIN_1 */
const baseLogo: ILogoImport = {
    name: 'base',
    component: lazy(() => import('./base')),
};

const gnosisLogo: ILogoImport = {
    name: 'gnosis',
    component: lazy(() => import('./gnosis')),
};

const harmonyLogo: ILogoImport = {
    name: 'harmony',
    component: lazy(() => import('./harmony')),
};

const pulsechainLogo: ILogoImport = {
    name: 'pulsechain',
    component: lazy(() => import('./pulsechain')),
};

const aptosLogo: ILogoImport = {
    name: 'aptos',
    component: lazy(() => import('./aptos')),
};

const palmLogo: ILogoImport = {
    name: 'palm',
    component: lazy(() => import('./palm')),
};


export default {
    arbitrumLogo,
    avalancheLogo,
    binanceLogo,
    coinbaseLogo,
    cronosLogo,
    ethereumLogo,
    fantomLogo,
    polygonLogo,
    roninLogo,
    optimismLogo,
    /* PLOP_INJECT_CHAIN_2 */
    baseLogo,
    gnosisLogo,
    harmonyLogo,
    pulsechainLogo,
    aptosLogo,
    palmLogo,
};
