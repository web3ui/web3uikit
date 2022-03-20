interface iNetworkConfigs {
    [chain: string]: {
        blockExplorerUrl?: string;
        currencyName?: string;
        chainId?: number;
        chainName?: string;
        currencySymbol: string;
        wrapped?: string;
        rpcUrl?: string;
    };
}

export const networkConfigs: iNetworkConfigs = {
    '0x1': {
        currencySymbol: 'ETH',
        blockExplorerUrl: 'https://etherscan.io/',
        wrapped: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
    },
    '0x3': {
        currencySymbol: 'ETH',
        blockExplorerUrl: 'https://ropsten.etherscan.io/',
    },
    '0x4': {
        currencySymbol: 'ETH',
        blockExplorerUrl: 'https://kovan.etherscan.io/',
    },
    '0x2a': {
        currencySymbol: 'ETH',
        blockExplorerUrl: 'https://rinkeby.etherscan.io/',
    },
    '0x5': {
        currencySymbol: 'ETH',
        blockExplorerUrl: 'https://goerli.etherscan.io/',
    },
    '0x539': {
        chainName: 'Local Chain',
        currencyName: 'ETH',
        currencySymbol: 'ETH',
        rpcUrl: 'http://127.0.0.1:7545',
    },
    '0xa86a': {
        chainId: 43114,
        chainName: 'Avalanche Mainnet',
        currencyName: 'AVAX',
        currencySymbol: 'AVAX',
        rpcUrl: 'https://api.avax.network/ext/bc/C/rpc',
        blockExplorerUrl: 'https://cchain.explorer.avax.network/',
    },
    '0x38': {
        chainId: 56,
        chainName: 'Smart Chain',
        currencyName: 'BNB',
        currencySymbol: 'BNB',
        rpcUrl: 'https://bsc-dataseed.binance.org/',
        blockExplorerUrl: 'https://bscscan.com/',
        wrapped: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
    },
    '0x61': {
        chainId: 97,
        chainName: 'Smart Chain - Testnet',
        currencyName: 'BNB',
        currencySymbol: 'BNB',
        rpcUrl: 'https://data-seed-prebsc-1-s1.binance.org:8545/',
        blockExplorerUrl: 'https://testnet.bscscan.com/',
    },
    '0x89': {
        chainId: 137,
        chainName: 'Polygon Mainnet',
        currencyName: 'MATIC',
        currencySymbol: 'MATIC',
        rpcUrl: 'https://rpc-mainnet.maticvigil.com/',
        blockExplorerUrl: 'https://explorer-mainnet.maticvigil.com/',
        wrapped: '0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270',
    },
    '0x13881': {
        chainId: 80001,
        chainName: 'Mumbai',
        currencyName: 'MATIC',
        currencySymbol: 'MATIC',
        rpcUrl: 'https://rpc-mumbai.matic.today/',
        blockExplorerUrl: 'https://mumbai.polygonscan.com/',
    },
};

export const getNativeByChain = (chain: string) =>
    networkConfigs[chain]?.currencySymbol || 'NATIVE';

export const getChainById = (chain: string) =>
    networkConfigs[chain]?.chainId || null;

export const getExplorer = (chain: string) =>
    networkConfigs[chain]?.blockExplorerUrl;

export const getWrappedNative = (chain: string) =>
    networkConfigs[chain]?.wrapped || null;

type EthChain = 'eth' | '0x1';
type RopstenChain = 'ropsten' | '0x3';
type RinkebyChain = 'rinkeby' | '0x4';
type GoerliChain = 'goerli' | '0x5';
type KovanChain = 'kovan' | '0x2a';
type BscChain = 'bsc' | '0x38';
type BscTestChain = 'bsc testnet' | '0x61';
type PolygonChain = 'polygon' | '0x89';
type MumbaiChain = 'mumbai' | '0x13881';
type FantomChain = 'fantom' | '0xfa';
type AvalancheChain = 'avalanche' | '0xa86a';
type AvalancheTestChain = 'avalanche testnet' | '0xa869';

export type Chain =
    | EthChain
    | RopstenChain
    | RinkebyChain
    | GoerliChain
    | KovanChain
    | BscChain
    | BscTestChain
    | PolygonChain
    | MumbaiChain
    | FantomChain
    | AvalancheChain
    | AvalancheTestChain;

const chainToHex = {
    'eth': '0x1',
    'ropsten': '0x3',
    'rinkeby': '0x4',
    'goerli': '0x5',
    'kovan': '0x2a',
    'bsc': '0x38',
    'bsc testnet': '0x61',
    'polygon': '0x89',
    'mumbai': '0x13881',
    'fantom': '0xfa',
    'avalanche': '0xa86a',
    'avalanche testnet': '0xa869',
    '0x1': '0x1',
    '0x3': '0x3',
    '0x4': '0x4',
    '0x5': '0x5',
    '0x2a': '0x2a',
    '0x38': '0x38',
    '0x61': '0x61',
    '0x89': '0x89',
    '0x13881': '0x13881',
    '0xfa': '0xfa',
    '0xa86a': '0xa86a',
    '0xa869': '0xa869',
};
export const getChainHex = (chain: Chain) => chainToHex[chain];
