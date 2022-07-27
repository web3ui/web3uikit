import { ComponentStory, ComponentMeta } from '@storybook/react';
import { useState } from 'react';
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
    {
        chainId: '0x1',
        chain: 'Eth',
        name: 'Mainnet',
        network: 'mainnet',
    },
    {
        chainId: '0x89',
        chain: 'Polygon',
        name: 'Mainnet',
        network: 'mainnet',
    },
    {
        chainId: '0x38',
        chain: 'Bsc',
        name: 'Mainnet',
        network: 'mainnet',
    },
    {
        chainId: '0xa86a',
        chain: 'Avax',
        name: 'Mainnet',
        network: 'mainnet',
    },
    {
        chainId: '0xfa',
        chain: 'Fantom',
        name: 'Mainnet',
        network: 'mainnet',
    },
    {
        chainId: '0x19',
        chain: 'Cronos',
        name: 'Mainnet',
        network: 'mainnet',
    },
    {
        chainId: '0x3',
        chain: 'Eth',
        name: 'Ropsten',
        network: 'testnet',
    },
    {
        chainId: '0x5',
        chain: 'Eth',
        name: 'Goerli',
        network: 'testnet',
    },
    {
        chainId: '0x2a',
        chain: 'Eth',
        name: 'Kovan',
        network: 'testnet',
    },
    {
        chainId: '0x13881',
        chain: 'Polygon',
        name: 'Mumbai',
        network: 'testnet',
    },
    {
        chainId: '0x61',
        chain: 'Bsc',
        name: 'Testnet',
        network: 'testnet',
    },
    {
        chainId: '0xa869',
        chain: 'Avax',
        name: 'Testnet',
        network: 'testnet',
    },
    {
        chainId: '0x4',
        chain: 'Eth',
        name: 'Rinkeby',
        network: 'testnet',
    },
    {
        chainId: '0x152',
        chain: 'Cronos',
        name: 'Testnet',
        network: 'testnet',
    },
    {
        chainId: '0x539',
        chain: 'Ganache',
        name: 'LocalDevChain',
        network: 'ganache',
    },
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
