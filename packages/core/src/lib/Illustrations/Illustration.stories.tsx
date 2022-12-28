import { ComponentMeta, ComponentStory } from '@storybook/react';
import { color } from '@web3uikit/styles';
import Illustration from './Illustration';

const mainStory = {
    title: '6.Graphic/Illustration',
    component: Illustration,
} as ComponentMeta<typeof Illustration>;
export default mainStory;

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
            backgroundColor: `${color.navy80}`,
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

export const Ronin = BackgroundColoredTemplate.bind({});
Ronin.args = {
    logo: 'ronin',
};
export const Optimism = BackgroundColoredTemplate.bind({});
Optimism.args = {
    logo: 'optimism',
};

/* PLOP_INJECT_CHAIN */
export const Palm = BackgroundColoredTemplate.bind({});
Palm.args = {
    logo: 'palm',
};

export const Crypto = BackgroundColoredTemplate.bind({});
Crypto.args = {
    logo: 'cryptoweb',
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

export const Documentation = Template.bind({});
Documentation.args = {
    logo: 'documentation',
};

export const Discord = Template.bind({});
Discord.args = {
    logo: 'discord',
};

export const Wizard = Template.bind({});
Wizard.args = {
    logo: 'wizard',
};

export const Plugins = Template.bind({});
Plugins.args = {
    logo: 'plugins',
};

export const Data = Template.bind({});
Data.args = {
    logo: 'data',
};

export const BeanBoyFront = Template.bind({});
BeanBoyFront.args = {
    logo: 'beanBoyFront',
};

export const BeanBoyUpLeft = Template.bind({});
BeanBoyUpLeft.args = {
    logo: 'beanBoyUpLeft',
};

export const BeanBoyStepOne = Template.bind({});
BeanBoyStepOne.args = {
    logo: 'beanBoyStepOne',
};

export const BeanBoyStepTwo = Template.bind({});
BeanBoyStepTwo.args = {
    logo: 'beanBoyStepTwo',
};

export const BeanBoyStepThree = Template.bind({});
BeanBoyStepThree.args = {
    logo: 'beanBoyStepThree',
};

export const BeanBoyStepFour = Template.bind({});
BeanBoyStepFour.args = {
    logo: 'beanBoyStepFour',
};

export const BeanBoyStepFive = Template.bind({});
BeanBoyStepFive.args = {
    logo: 'beanBoyStepFive',
};

export const Wallet = Template.bind({});
Wallet.args = {
    logo: 'wallet',
};

export const Cat = Template.bind({});
Cat.args = {
    logo: 'cat',
};

export const BinaryTriangle = Template.bind({});
BinaryTriangle.args = {
    logo: 'binaryTriangle',
};

export const Checklist = Template.bind({});
Checklist.args = {
    logo: 'checklist',
};
