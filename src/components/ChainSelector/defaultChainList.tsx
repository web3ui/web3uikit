import React from 'react';
import { AvaxLogo, BSCLogo, ETHLogo, PolygonLogo } from './ChainLogos';

export default [
    {
        id: '0x1',
        label: 'Ethereum',
        prefix: <ETHLogo />,
    },
    {
        id: '0x539',
        label: 'Local Chain',
        prefix: <ETHLogo />,
    },
    {
        id: '0x3',
        label: 'Ropsten Testnet',
        prefix: <ETHLogo />,
    },
    {
        id: '0x4',
        label: 'Rinkeby Testnet',
        prefix: <ETHLogo />,
    },
    {
        id: '0x2a',
        label: 'Kovan Testnet',
        prefix: <ETHLogo />,
    },
    {
        id: '0x5',
        label: 'Goerli Testnet',
        prefix: <ETHLogo />,
    },
    {
        id: '0x38',
        label: 'Binance',
        prefix: <BSCLogo />,
    },
    {
        id: '0x61',
        label: 'Smart Chain Testnet',
        prefix: <BSCLogo />,
    },
    {
        id: '0x89',
        label: 'Polygon',
        prefix: <PolygonLogo />,
    },
    {
        id: '0x13881',
        label: 'Mumbai',
        prefix: <PolygonLogo />,
    },
    {
        id: '0xa86a',
        label: 'Avalanche',
        prefix: <AvaxLogo />,
    },
    {
        id: '0xa869',
        label: 'Avalanche Testnet',
        prefix: <AvaxLogo />,
    },
];
