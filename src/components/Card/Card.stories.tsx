import { ComponentStory, ComponentMeta } from '@storybook/react';
import Card from './Card';
import React from 'react';
import getModuleAnimation from './Animations/animations';

export default {
    title: 'UI/Card',
    component: Card,
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => {
    return (
        <div style={{ width: '250px' }}>
            <Card key={'0'} {...args} />
        </div>
    );
};

export const Regular = Template.bind({});
Regular.args = {
    tooltipText: 'Lorem Ipsum Dole met sai souni lokomit anici trenicid',
    children: [<div key={'0'}>{getModuleAnimation(undefined)}</div>],
    title: 'Server',
    description: 'Click to create a server',
};

export const RegularSelected = Template.bind({});
RegularSelected.args = {
    tooltipText: 'Lorem Ipsum Dole met sai souni lokomit anici trenicid',
    children: [<div key={'0'}>{getModuleAnimation(undefined)}</div>],
    title: 'Server',
    selected: true,
    description: 'Click to create a server',
};

export const NftMarketplace = Template.bind({});
NftMarketplace.args = {
    tooltipText: 'Create and earn money from your own NFT Marketplace',
    children: [<div key={'0'}>{getModuleAnimation('NFT Marketplace')}</div>],
    title: 'NFT Marketplace',
    description: 'Create your own NFT Marketplace',
};

export const Bundle = Template.bind({});
Bundle.args = {
    tooltipText: 'Coming soon',
    children: [<div key={'0'}>{getModuleAnimation('Bundle')}</div>],
    title: 'Bundle',
};

export const LazyNFT = Template.bind({});
LazyNFT.args = {
    tooltipText: 'Coming soon',
    children: [<div key={'0'}>{getModuleAnimation('Lazy NFT')}</div>],
    title: 'Lazy NFT',
};

export const Token = Template.bind({});
Token.args = {
    tooltipText: 'Create your own ERC20 Token',
    children: [<div key={'0'}>{getModuleAnimation('Token')}</div>],
    title: 'ERC20-Token',
    description: 'Create your own cryptocurrency / token',
};

export const Pack = Template.bind({});
Pack.args = {
    tooltipText: 'Coming soon',
    children: [<div key={'0'}>{getModuleAnimation('Pack')}</div>],
    title: 'NFT Collection',
};

export const NftCollection = Template.bind({});
NftCollection.args = {
    tooltipText: 'Create your very own NFT Collection',
    children: [<div key={'0'}>{getModuleAnimation('NFT Collection')}</div>],
    title: 'NFT Collection',
    description: 'Create and publish your own NFT Collection',
};
