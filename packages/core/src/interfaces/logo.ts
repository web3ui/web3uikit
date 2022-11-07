export const chainLogoData = {
    arbitrum: {
        name: 'arbitrum',
        color: '#003470',
    },
    fantom: {
        name: 'fantom',
        color: '#0F7FFF',
    },
    avalanche: {
        name: 'avalanche',
        color: '#DE0000',
    },
    polygon: {
        name: 'polygon',
        color: '#9B22FF',
    },
    binance: {
        name: 'binance',
        color: '#EBBB00',
    },
    ethereum: {
        name: 'ethereum',
        color: '#396993',
    },
    cronos: {
        name: 'cronos',
        color: '#041836',
    },
    coinbase: {
        name: 'coinbase',
        color: '#333dfb',
    },
    ronin: {
        name: 'ronin',
        color: '#019EC9',
    },
    optimism: {
        name: 'optimism',
        color: '#E95557',
    },
    /* PLOP_INJECT_CHAIN */
} as const;

const logoWalletColors = {
    cryptoweb:
        'linear-gradient(113.54deg, rgba(45, 91, 104, 0.531738) 14.91%, rgba(0, 4, 48, 0.6) 42.57%, rgba(45, 91, 104, 0.336) 45.98%, rgba(0, 4, 48, 0.03) 55.76%), linear-gradient(160.75deg, #000430 41.37%, #223F47 98.29%), linear-gradient(113.54deg, rgba(117, 183, 251, 0.531738) 14.91%, rgba(10, 41, 255, 0.6) 42.57%, rgba(25, 105, 255, 0.336) 45.98%, rgba(25, 105, 255, 0.03) 55.76%), linear-gradient(160.75deg, #071AFF 41.37%, #45D4FF 98.29%)',
};

export type TChainNames = keyof typeof chainLogoData;

export type TWalletNames = keyof typeof logoWalletColors;

export type TLogoNames = TChainNames | TWalletNames;
