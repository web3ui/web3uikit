import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import NativeBalance from './NativeBalance';
import { NativeBalanceProps } from './types';

export default {
    title: 'Web3/NativeBalance',
    component: NativeBalance,
} as ComponentMeta<typeof NativeBalance>;

const Template: ComponentStory<typeof NativeBalance> = (
    args: NativeBalanceProps,
) => <NativeBalance {...args} />;

export const Default = Template.bind({});
