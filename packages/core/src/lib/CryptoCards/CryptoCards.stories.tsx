import { ComponentStory, ComponentMeta } from '@storybook/react';
import CryptoCards from '../CryptoCards/CryptoCards';
import { chainLogoData } from '../../interfaces/logo';

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
    bgColor: chainLogoData['ethereum'].color,
    btnText: 'View Endpoints',
};

export const Binance = Template.bind({});
Binance.args = {
    chain: 'binance',
    chainType: 'Network',
    bgColor: chainLogoData['binance'].color,
    btnText: 'View Endpoints',
};

export const Polygon = Template.bind({});
Polygon.args = {
    chain: 'polygon',
    chainType: 'Network',
    bgColor: chainLogoData['polygon'].color,
    btnText: 'View Endpoints',
};

export const Avalanche = Template.bind({});
Avalanche.args = {
    chain: 'avalanche',
    chainType: 'Network',
    bgColor: chainLogoData['avalanche'].color,
    btnText: 'View Endpoints',
};

export const Fantom = Template.bind({});
Fantom.args = {
    chain: 'fantom',
    chainType: 'Network',
    bgColor: chainLogoData['fantom'].color,
    btnText: 'View Endpoints',
};

export const Arbitrum = Template.bind({});
Arbitrum.args = {
    chain: 'arbitrum',
    chainType: 'Network',
    bgColor: chainLogoData['arbitrum'].color,
    btnText: 'View Endpoints',
};

export const Cronos = Template.bind({});
Cronos.args = {
    chain: 'cronos',
    chainType: 'Network',
    bgColor: chainLogoData['cronos'].color,
    btnText: 'View Endpoints',
};
export const Coinbase = Template.bind({});
Coinbase.args = {
    chain: 'coinbase',
    chainType: 'Network',
    bgColor: chainLogoData['coinbase'].color,
    btnText: 'View Endpoints',
};
export const Ronin = Template.bind({});
Ronin.args = {
    chain: 'ronin',
    chainType: 'Network',
    bgColor: chainLogoData['ronin'].color,
    btnText: 'View Endpoints',
};

export const Optimism = Template.bind({});
Optimism.args = {
    chain: 'optimism',
    chainType: 'Network',
    bgColor: chainLogoData['optimism'].color,
    btnText: 'View Endpoints',
};

/* PLOP_INJECT_CHAIN */
