import { render, screen } from '@testing-library/react';
import React from 'react';
import ChainSelector from './ChainSelector';

const providers = [
    { name: 'Mainnet', network: 'mainnet', chainId: '0x1', chain: 'Eth' },
    { name: 'Ropsten', network: 'testnet', chainId: '0x3', chain: 'Eth' },
    { name: 'Goerli', network: 'testnet', chainId: '0x5', chain: 'Eth' },
];

test('renders sucessful', async () => {
    render(
        <ChainSelector
            IsMultipleAllowed={true}
            providers={providers}
            values={[
                {
                    chainId: '0x1',
                },
            ]}
            setValue={console.log}
        />,
    );
    const element = screen.getByTestId('test-chain-selector');
    expect(element).not.toBeNull();
});

test('renders all the cards', async () => {
    const { getByText } = render(
        <ChainSelector
            IsMultipleAllowed={true}
            providers={providers}
            values={[
                {
                    chainId: '0x1',
                },
            ]}
            setValue={console.log}
        />,
    );
    expect(getByText('Mainnet')).toBeDefined();
    expect(getByText('Ropsten')).toBeDefined();
    expect(getByText('Goerli')).toBeDefined();
});

xtest('Batch select/deselect is working', () => {
    // TODO: test select/deselect toggle
    // TODO: test select/deselect all cards
});
