import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import NFT from './NFT';
import { moralisContext } from '../../decorators';

export default {
    title: '1.Web3/NFT',
    component: NFT,
    decorators: [moralisContext],
} as ComponentMeta<typeof NFT>;

const Template: ComponentStory<typeof NFT> = (args) => (
    <div style={{ backgroundColor: '#f2f6ff', padding: '64px' }}>
        <NFT {...args} />
    </div>
);

export const CryptoPunk01 = Template.bind({});
CryptoPunk01.args = {
    chain: 'eth',
    address: '0xb47e3cd837dDF8e4c57F05d70Ab865de6e193BBB',
    tokenId: 1,
    fetchMetadata: true,
};
