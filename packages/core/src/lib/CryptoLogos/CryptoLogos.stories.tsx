import { ComponentStory, ComponentMeta } from '@storybook/react';

import CryptoLogos from './CryptoLogos';

export default {
    title: '6.Graphic/Crypto Logos',
    component: CryptoLogos,
    argTypes: { onClick: { action: 'clicked' } },
} as ComponentMeta<typeof CryptoLogos>;

const Template: ComponentStory<typeof CryptoLogos> = (args) => (
    <CryptoLogos {...args} />
);

export const Ethereum = Template.bind({});
Ethereum.args = {
    chain: 'ethereum',
    size: '48px',
};

export const Binance = Template.bind({});
Binance.args = {
    chain: 'binance',
    size: '48px',
};

export const Polygon = Template.bind({});
Polygon.args = {
    chain: 'polygon',
    size: '48px',
};

export const Avalanche = Template.bind({});
Avalanche.args = {
    chain: 'avalanche',
    size: '48px',
};

export const Fantom = Template.bind({});
Fantom.args = {
    chain: 'fantom',
    size: '48px',
};

export const Arbitrum = Template.bind({});
Arbitrum.args = {
    chain: 'arbitrum',
    size: '48px',
};

export const Cronos = Template.bind({});
Cronos.args = {
    chain: 'cronos',
    size: '48px',
};

export const Crypto = Template.bind({});
Crypto.args = {
    chain: 'cryptoweb',
    size: '48px',
};

export const Coinbase = Template.bind({});
Coinbase.args = {
    chain: 'coinbase',
    size: '48px',
};

export const Ronin = Template.bind({});
Ronin.args = {
    chain: 'ronin',
    size: '48px',
};
