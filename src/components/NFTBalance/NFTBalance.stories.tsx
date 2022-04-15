import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import NFTBalance from './NFTBalance';
import { moralisContext } from '../../decorators';

export default {
    title: '1.Web3/NFT Balance',
    component: NFTBalance,
    decorators: [
        moralisContext,
        (storyFn) => (
            <div style={{ backgroundColor: '#f2f6ff', padding: '64px' }}>
                {storyFn()}
            </div>
        ),
    ],
    parameters: {
        docs: {
            source: {
                excludeDecorators: true,
            },
        },
    },
} as ComponentMeta<typeof NFTBalance>;

const Template: ComponentStory<typeof NFTBalance> = (args) => (
    <NFTBalance {...args} />
);

export const Default = Template.bind({});
Default.args = {
    chain: 'eth',
    address: '0x951Eb8643E48A3B6d6d6AA7706B643AEE9B42f52',
};
