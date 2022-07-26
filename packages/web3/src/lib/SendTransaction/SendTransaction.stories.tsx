import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import SendTransaction from './SendTransaction';
import { NotificationProvider } from '@web3uikit/core';
import { moralisContext } from '../../web3utils/decorators';
import { contractData } from './example/contractData';

export default {
    title: '1.Web3/SendTransaction',
    decorators: [moralisContext],
    component: SendTransaction,
} as ComponentMeta<typeof SendTransaction>;

const Template: ComponentStory<typeof SendTransaction> = (args) => (
    <NotificationProvider>
        <SendTransaction {...args} />
    </NotificationProvider>
);

export const ExamplePurchaseCandy = Template.bind({});
ExamplePurchaseCandy.args = {
    chainId: '0x4',
    contractOptions: {
        abi: contractData['abi'],
        contractAddress: contractData['contractAddress'],
        functionName: 'purchaseCandy',
        params: {
            _amount: 1,
        },
        msgValue: 1000000000000000000,
    },
    buttonConfig: {
        text: 'Purchase Candy',
        theme: 'primary',
    },
};
