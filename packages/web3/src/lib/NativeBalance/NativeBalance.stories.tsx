import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import NativeBalance from './NativeBalance';
import { NativeBalanceProps } from './types';
import { moralisContext } from '../../web3utils/decorators';

export default {
    title: '1.Web3-Parse/NativeBalance',
    component: NativeBalance,
    decorators: [moralisContext],
    parameters: {
        docs: {
            source: {
                excludeDecorators: true,
            },
        },
    },
} as ComponentMeta<typeof NativeBalance>;

const Template: ComponentStory<typeof NativeBalance> = (
    args: NativeBalanceProps,
) => <NativeBalance {...args} />;

export const Default = Template.bind({});
