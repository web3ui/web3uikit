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
    chain: 'polygon',
    address: '0xfAD8c4D1b26f280Ca7a3F3f05e0fBa1954E69c93',
};
