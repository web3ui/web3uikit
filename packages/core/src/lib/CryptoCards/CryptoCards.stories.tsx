import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import CryptoCards from '../CryptoCards/CryptoCards';
import { iconTypes } from '../Icon/collection';

export default {
    title: '4.UI/Crypto Cards',
    component: CryptoCards,
    argTypes: { onClick: { action: 'clicked' } },
} as ComponentMeta<typeof CryptoCards>;

const Template: ComponentStory<typeof CryptoCards> = (args) => (
    <CryptoCards {...args} />
);

export const Ethereum = Template.bind({});
Ethereum.args = {
    chain: 'ethereum',
    chainType: 'Network',
    settingsIcon: iconTypes.cog,
    bgColor:
        'linear-gradient(113.54deg, rgba(117, 183, 251, 0.531738) 14.91%, rgba(215, 38, 243, 0.6) 42.57%, rgba(252, 84, 255, 0.336) 45.98%, rgba(209, 103, 255, 0.03) 55.76%), linear-gradient(160.75deg, #AB42CB 41.37%, #45FFFF 98.29%)',
    btnText: 'View Endpoints',
};

export const Binance = Template.bind({});
Binance.args = {
    chain: 'binance',
    chainType: 'Network',
    settingsIcon: iconTypes.cog,
    bgColor:
        'linear-gradient(113.54deg, rgba(217, 166, 54, 0.6) 14.91%, rgba(230, 166, 26, 0.6) 44.27%, rgba(207, 168, 28, 0) 45.98%, rgba(250, 228, 30, 0) 55.76%, rgba(245, 223, 30, 0) 55.76%), linear-gradient(147.17deg, #F5D116 48.73%, #CD9614 98.22%)',
    btnText: 'View Endpoints',
};

export const Polygon = Template.bind({});
Polygon.args = {
    chain: 'polygon',
    chainType: 'Network',
    settingsIcon: iconTypes.cog,
    bgColor:
        'linear-gradient(113.54deg, rgba(103, 58, 194, 0.6) 14.91%, rgba(122, 74, 221, 0.498) 44.27%, rgba(170, 129, 255, 0.222) 45.98%, rgba(209, 103, 255, 0.03) 55.76%), linear-gradient(160.75deg, #7A4ADD 41.37%, #D57BFF 98.29%)',
    btnText: 'View Endpoints',
};

export const Avalanche = Template.bind({});
Avalanche.args = {
    chain: 'avalanche',
    chainType: 'Network',
    settingsIcon: iconTypes.cog,
    bgColor:
        'linear-gradient(113.54deg, rgba(119, 0, 1, 0.5) 14.91%, rgba(216, 43, 44, 0.5) 43.21%, rgba(255, 130, 130, 0.345) 44.27%, rgba(220, 96, 97, 0.185) 55.76%), linear-gradient(151.07deg, #8F0E0F 33.25%, #FA4A4B 98.24%)',
    btnText: 'View Endpoints',
};

export const Fantom = Template.bind({});
Fantom.args = {
    chain: 'fantom',
    chainType: 'Network',
    settingsIcon: iconTypes.cog,
    bgColor:
        'linear-gradient(113.54deg, rgba(117, 183, 251, 0.531738) 14.91%, rgba(10, 41, 255, 0.6) 42.57%, rgba(25, 105, 255, 0.336) 45.98%, rgba(25, 105, 255, 0.03) 55.76%), linear-gradient(160.75deg, #071AFF 41.37%, #45D4FF 98.29%)',
    btnText: 'View Endpoints',
};

export const Arbitrum = Template.bind({});
Arbitrum.args = {
    chain: 'arbitrum',
    chainType: 'Network',
    settingsIcon: iconTypes.cog,
    bgColor:
        'linear-gradient(113.54deg, rgba(60, 87, 140, 0.5) 14.91%, rgba(70, 86, 169, 0.5) 43.21%, rgba(125, 150, 217, 0.345) 44.27%, rgba(129, 161, 225, 0.185) 55.76%), linear-gradient(151.07deg, #141659 33.25%, #4152A7 98.24%)',
    btnText: 'View Endpoints',
};
