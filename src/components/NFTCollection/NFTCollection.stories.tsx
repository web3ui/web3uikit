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
    chainId: 'eth',
    address: '0x77c2783e24e397f14628b2ea56a6d967c62f9a36',
};
