import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import NFTCollection from './NFTCollection';
import { NFTCollectionProps } from './types';
import { moralisContext } from '../../decorators';

export default {
    title: '1.Web3/NFT Collection',
    component: NFTCollection,
    decorators: [moralisContext],
    parameters: {
        docs: {
            source: {
                excludeDecorators: true,
            },
        },
    },
} as ComponentMeta<typeof NFTCollection>;

const Template: ComponentStory<typeof NFTCollection> = (
    args: NFTCollectionProps,
) => <NFTCollection {...args} />;

export const Default = Template.bind({});
Default.args = {
    chain: 'eth',
    address: '0xaba7161a7fb69c88e16ed9f455ce62b791ee4d03',
};
