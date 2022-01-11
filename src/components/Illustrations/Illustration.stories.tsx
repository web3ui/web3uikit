import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Illustration from './Illustration';
import colors from '../../styles/colors';
export default {
    title: 'UI/Illustration',
    component: Illustration,
} as ComponentMeta<typeof Illustration>;

const Template: ComponentStory<typeof Illustration> = (args) => (
    <Illustration {...args} />
);

const ethColors = {
    fillOutline: `${colors.blueDark2}`,
    fillInlineLeft: `${colors.white}`,
    fillInlineRight: `´${colors.grey}`,
};

const bscColors = {
    fillOutline: `${colors.blueDark2}`,
    fillInlineLeft: `${colors.yellow}`,
    fillInlineRight: `${colors.yellow}`,
};

export const EthereumXS = Template.bind({});
EthereumXS.args = {
    logo: 'ethereum',
    size: 'xs',
    ...ethColors,
};

export const EthereumS = Template.bind({});
EthereumS.args = {
    logo: 'ethereum',
    size: 's',
    ...ethColors,
};

export const EthereumM = Template.bind({});
EthereumM.args = {
    logo: 'ethereum',
    size: 'm',
    ...ethColors,
};

export const EthereumL = Template.bind({});
EthereumL.args = {
    logo: 'ethereum',
    size: 'l',
    ...ethColors,
};

export const EthereumXL = Template.bind({});
EthereumXL.args = {
    logo: 'ethereum',
    size: 'xl',
    ...ethColors,
};

export const BinanceXS = Template.bind({});
BinanceXS.args = {
    logo: 'binance',
    size: 'xs',
    ...bscColors,
};

export const BinanceS = Template.bind({});
BinanceS.args = {
    logo: 'binance',
    size: 's',
    ...bscColors,
};

export const BinanceM = Template.bind({});
BinanceM.args = {
    logo: 'binance',
    size: 'm',
    ...bscColors,
};

export const BinanceL = Template.bind({});
BinanceL.args = {
    logo: 'binance',
    size: 'l',
    ...bscColors,
};

export const BinanceXL = Template.bind({});
BinanceXL.args = {
    logo: 'binance',
    size: 'xl',
    ...bscColors,
};

export const PolygonXS = Template.bind({});
PolygonXS.args = {
    logo: 'polygon',
    size: 'xs',
};
export const PolygonS = Template.bind({});
PolygonS.args = {
    logo: 'polygon',
    size: 's',
};

export const PolygonM = Template.bind({});
PolygonM.args = {
    logo: 'polygon',
    size: 'm',
};

export const PolygonL = Template.bind({});
PolygonL.args = {
    logo: 'polygon',
    size: 'l',
};

export const PolygonXL = Template.bind({});
PolygonXL.args = {
    logo: 'polygon',
    size: 'xl',
};

export const AvalancheXS = Template.bind({});
AvalancheXS.args = {
    logo: 'avalanche',
    size: 'xs',
};

export const AvalancheS = Template.bind({});
AvalancheS.args = {
    logo: 'avalanche',
    size: 's',
};

export const AvalancheM = Template.bind({});
AvalancheM.args = {
    logo: 'avalanche',
    size: 'm',
};

export const AvalancheL = Template.bind({});
AvalancheL.args = {
    logo: 'avalanche',
    size: 'l',
};
export const AvalancheXL = Template.bind({});
AvalancheXL.args = {
    logo: 'avalanche',
    size: 'xl',
};

export const FantomXS = Template.bind({});
FantomXS.args = {
    logo: 'fantom',
    size: 'xs',
};

export const FantomS = Template.bind({});
FantomS.args = {
    logo: 'fantom',
    size: 's',
};

export const FantomM = Template.bind({});
FantomM.args = {
    logo: 'fantom',
    size: 'm',
};

export const FantomL = Template.bind({});
FantomL.args = {
    logo: 'fantom',
    size: 'l',
};

export const FantomXL = Template.bind({});
FantomXL.args = {
    logo: 'fantom',
    size: 'xl',
};

export const ArbitrumXS = Template.bind({});
ArbitrumXS.args = {
    logo: 'arbitrum',
    size: 'xs',
};

export const ArbitrumS = Template.bind({});
ArbitrumS.args = {
    logo: 'arbitrum',
    size: 's',
};

export const ArbitrumM = Template.bind({});
ArbitrumM.args = {
    logo: 'arbitrum',
    size: 'm',
};

export const ArbitrumL = Template.bind({});
ArbitrumL.args = {
    logo: 'arbitrum',
    size: 'l',
};

export const ArbitrumXL = Template.bind({});
ArbitrumXL.args = {
    logo: 'arbitrum',
    size: 'xl',
};
