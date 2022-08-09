import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { SendTransaction as STButton } from './SendTransaction';
import { moralisContext } from '../../web3utils/decorators';
import { contractData } from './example/contractData';
import { NotificationProvider, useNotification } from '@web3uikit/core';

const CustomDocs = `
// NOTE: Remember to wrap your App with 'NotificationProvider' and 'MoralisProvider'
// contractData - contains your contract abi and deployed contract address

const dispatch = useNotification();
<SendTransaction 
    chainId= '0x4'
    contractOptions= {{
        abi: contractData['abi'],
        contractAddress: contractData['contractAddress'],
        functionName: 'purchaseCandy',
        params: {
            _amount: 1,
        },
        msgValue: 1000000000000000000,
    }}
    buttonConfig= {{
        text: 'Purchase Candy',
        theme: 'primary',
    }}
    notificationConfig={{ dispatch }}
/>
`;

export default {
    title: '1.Web3/SendTransaction',
    decorators: [moralisContext],
    parameters: {
        docs: {
            source: {
                excludeDecorators: true,
                code: CustomDocs,
                language: 'js',
                type: 'auto',
            },
        },
    },
    component: STButton,
} as ComponentMeta<typeof STButton>;

const Template: ComponentStory<typeof STButton> = (args) => {
    const SendTransaction = (props: any) => {
        const dispatch = useNotification();
        return <STButton {...props} notificationConfig={{ dispatch }} />;
    };
    return (
        <NotificationProvider>
            <SendTransaction {...args} />
        </NotificationProvider>
    );
};

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
    //@ts-ignore
    notificationConfig: {},
};
