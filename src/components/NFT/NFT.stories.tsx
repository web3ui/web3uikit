import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import NFT from './NFT';
import { moralisContext } from '../../decorators';

export default {
    title: '1.Web3/NFT',
    component: NFT,
    decorators: [moralisContext],
} as ComponentMeta<typeof NFT>;

const Template: ComponentStory<typeof NFT> = (args) => <NFT {...args} />;

export const Default = Template.bind({});
Default.args = {
    chain: 'polygon',
    address: '0x2953399124f0cbb46d2cbacd8a89cf0599974963',
    tokenId: 1,
};
