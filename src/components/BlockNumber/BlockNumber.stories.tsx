import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import BlockNumber from './BlockNumber';

import { moralisContext } from '../../decorators';

export default {
    title: '1.Web3/BlockNumber',
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

const Template: ComponentStory<typeof BlockNumber> = () => <BlockNumber />;

export const Default = Template.bind({});
