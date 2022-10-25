import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import BlockNumber from './BlockNumber';
import { moralisContext } from '../../web3utils/decorators';

export default {
    title: '1.Web3-Parse/BlockNumber',
    component: BlockNumber,
    decorators: [moralisContext],
    parameters: {
        docs: {
            source: {
                excludeDecorators: true,
            },
        },
    },
} as ComponentMeta<typeof BlockNumber>;

const Template: ComponentStory<typeof BlockNumber> = (args) => (
    <BlockNumber {...args} />
);

export const Default = Template.bind({});
