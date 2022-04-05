import { ComponentStory, ComponentMeta } from '@storybook/react';
import React, { useState } from 'react';
import ChainSelector from './ChainSelector';
import { DappConfig } from './types';

export default {
    title: '4.UI/ChainSelect',
    component: ChainSelector,
} as ComponentMeta<typeof ChainSelector>;

const Template: ComponentStory<typeof ChainSelector> = (args) => {
    const [values, setValue] = useState<DappConfig[]>([
        {
            chainId: '0x1',
        },
    ]);
    return <ChainSelector {...{ ...args, setValue, values }} />;
};

const providers = [
    { name: 'Mainnet', network: 'mainnet', chainId: '0x1', chain: 'Eth' },
    { name: 'Ropsten', network: 'testnet', chainId: '0x3', chain: 'Eth' },
    { name: 'Goerli', network: 'testnet', chainId: '0x5', chain: 'Eth' },
    { name: 'Kovan', network: 'testnet', chainId: '0x2a', chain: 'Eth' },
    {
        name: 'LocalDevChain',
        network: 'localdevchain',
        chainId: '0x539',
        chain: 'Eth',
    },
    { name: 'Mainnet', network: 'mainnet', chainId: '0x89', chain: 'Polygon' },
    {
        name: 'Mumbai',
        network: 'testnet',
        chainId: '0x13881',
        chain: 'Polygon',
    },
    { name: 'Mainnet', network: 'mainnet', chainId: '0x38', chain: 'Bsc' },
    { name: 'Testnet', network: 'testnet', chainId: '0x61', chain: 'Bsc' },
    { name: 'Mainnet', network: 'mainnet', chainId: '0xa86a', chain: 'Avax' },
];

export const EthMainnetSelected = Template.bind({});
EthMainnetSelected.args = {
    IsMultipleAllowed: true,
    providers,
};

export const WithCompatibilityCheck = Template.bind({});
WithCompatibilityCheck.args = {
    IsMultipleAllowed: true,
    providers,
    isCompatibilityChecked: true,
};
