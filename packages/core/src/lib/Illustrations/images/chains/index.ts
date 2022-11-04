import { lazy } from 'react';
import { ILogoImport } from '../../types';
const arbitrum: ILogoImport = {
    name: 'arbitrum',
    component: lazy(() => import('./arbitrum')),
};
const avalanche: ILogoImport = {
    name: 'avalanche',
    component: lazy(() => import('./avalanche')),
};
const binance: ILogoImport = {
    name: 'binance',
    component: lazy(() => import('./binance')),
};
const coinbase: ILogoImport = {
    name: 'coinbase',
    component: lazy(() => import('./coinbase')),
};
const cronos: ILogoImport = {
    name: 'cronos',
    component: lazy(() => import('./cronos')),
};
const ethereum: ILogoImport = {
    name: 'ethereum',
    component: lazy(() => import('./ethereum')),
};
const fantom: ILogoImport = {
    name: 'fantom',
    component: lazy(() => import('./fantom')),
};
const polygon: ILogoImport = {
    name: 'polygon',
    component: lazy(() => import('./polygon')),
};
const ronin: ILogoImport = {
    name: 'ronin',
    component: lazy(() => import('./ronin')),
};

export default {
    arbitrum,
    avalanche,
    binance,
    coinbase,
    cronos,
    ethereum,
    fantom,
    polygon,
    ronin,
};
