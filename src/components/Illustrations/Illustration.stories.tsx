import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Illustration from './Illustration';

export default {
    title: '6.Graphic/Illustration',
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

export const ComingSoon = Template.bind({});
ComingSoon.args = {
    logo: 'comingSoon',
};

export const Confirmed = Template.bind({});
Confirmed.args = {
    logo: 'confirmed',
};

export const Looking = Template.bind({});
Looking.args = {
    logo: 'looking',
};

export const Servers = Template.bind({});
Servers.args = {
    logo: 'servers',
};

export const Token = Template.bind({});
Token.args = {
    logo: 'token',
};

export const LazyNft = Template.bind({});
LazyNft.args = {
    logo: 'lazyNft',
};

export const Pack = Template.bind({});
Pack.args = {
    logo: 'pack',
};

export const Marketplace = Template.bind({});
Marketplace.args = {
    logo: 'marketplace',
};

export const Chest = Template.bind({});
Chest.args = {
    logo: 'chest',
};

export const Bundle = Template.bind({});
Bundle.args = {
    logo: 'bundle',
};

export const CustomSizing = Template.bind({});
CustomSizing.args = {
    logo: 'comingSoon',
    width: '150px',
    height: '150px',
};
