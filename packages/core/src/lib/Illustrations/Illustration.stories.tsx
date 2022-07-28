import { ComponentMeta, ComponentStory } from '@storybook/react';
import { color } from '@web3uikit/styles';
import Illustration from './Illustration';

export default {
    title: '6.Graphic/Illustration',
    component: Illustration,
} as ComponentMeta<typeof Illustration>;

const Template: ComponentStory<typeof Illustration> = (args) => (
    <Illustration {...args} />
);

const BackgroundColoredTemplate: ComponentStory<typeof Illustration> = (
    args,
) => (
    <div
        style={{
            width: '90vw',
            height: '90vh',
            backgroundColor: `${color.blueSkyDark}`,
        }}
    >
        <Illustration {...args} />
    </div>
);

export const Ethereum = BackgroundColoredTemplate.bind({});
Ethereum.args = {
    logo: 'ethereum',
};

export const Binance = BackgroundColoredTemplate.bind({});
Binance.args = {
    logo: 'binance',
};

export const Polygon = BackgroundColoredTemplate.bind({});
Polygon.args = {
    logo: 'polygon',
};

export const Avalanche = BackgroundColoredTemplate.bind({});
Avalanche.args = {
    logo: 'avalanche',
};

export const Fantom = BackgroundColoredTemplate.bind({});
Fantom.args = {
    logo: 'fantom',
};

export const Arbitrum = BackgroundColoredTemplate.bind({});
Arbitrum.args = {
    logo: 'arbitrum',
};

export const Coinbase = BackgroundColoredTemplate.bind({});
Coinbase.args = {
    logo: 'coinbase',
};

export const Cronos = BackgroundColoredTemplate.bind({});
Cronos.args = {
    logo: 'cronos',
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
