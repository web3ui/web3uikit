import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Illustration from './Illustration';

export default {
    title: 'UI/Illustration',
    component: Illustration,
} as ComponentMeta<typeof Illustration>;

const Template: ComponentStory<typeof Illustration> = (args) => (
    <Illustration {...args} />
);

export const Ethereum = Template.bind({});
Ethereum.args = {
    logo: 'ethereum',
};

export const Binance = Template.bind({});
Binance.args = {
    logo: 'binance',
};

export const Polygon = Template.bind({});
Polygon.args = {
    logo: 'polygon',
};

export const Avalanche = Template.bind({});
Avalanche.args = {
    logo: 'avalanche',
};

export const Fantom = Template.bind({});
Fantom.args = {
    logo: 'fantom',
};

export const Arbitrum = Template.bind({});
Arbitrum.args = {
    logo: 'arbitrum',
};
