import { ComponentStory, ComponentMeta } from '@storybook/react';
import Card from './Card';
import React, { useState } from 'react';
import getModuleAnimation from './Animations/animations';
import { Icon, iconTypes } from '../Icon';
import colors from '../../styles/colors';
import { Button } from '../Button';

/**
 * To-do:
 * find correct way of using useArgs with react testing
 */

export default {
    title: '4.UI/Card',
    component: Card,
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => {
    const [isSelected, setIsSelected] = useState(false);
    return (
        <div style={{ width: '250px' }}>
            <Card
                isSelected={isSelected}
                {...args}
                setIsSelected={setIsSelected}
            />
        </div>
    );
};

export const Regular = Template.bind({});
Regular.args = {
    tooltipText: (
        <span style={{ width: 200 }}>
            'Lorem Ipsum Dole met sai souni lokomit anici trenicid'
        </span>
    ),
    children: [<div key={'0'}>{getModuleAnimation(undefined)}</div>],
    title: 'dApp',
    description: 'Click to create a dApp',
    onClick: () => console.log('clicked'),
};

export const RegularSelected = Template.bind({});
RegularSelected.args = {
    tooltipText: 'Lorem Ipsum Dole met sai souni lokomit anici trenicid',
    children: [<div key={'0'}>{getModuleAnimation(undefined)}</div>],
    title: 'dApp',
    isSelected: true,
    description: 'Click to create a dApp',
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
    title: 'Lootbox',
};

export const NftCollection = Template.bind({});
NftCollection.args = {
    tooltipText: 'Create your very own NFT Collection',
    children: [<div key={'0'}>{getModuleAnimation('NFT Collection')}</div>],
    title: 'NFT Collection',
    description: 'Create and publish your own NFT Collection',
};

export const Disabled = Template.bind({});
Disabled.args = {
    tooltipText: 'Create your very own NFT Collection',
    children: [<div key={'0'}>{getModuleAnimation('Lazy NFT')}</div>],
    title: 'NFT Collection',
    isDisabled: true,
};

export const ComingSoon = Template.bind({});
ComingSoon.args = {
    tooltipText: 'Create your very own NFT Collection',
    children: [<div key={'0'}>{getModuleAnimation('Lazy NFT')}</div>],
    title: 'NFT Collection',
    description: 'Coming Soon',
    isDisabled: true,
};

export const ProPlan = Template.bind({});
ProPlan.args = {
    children: [
        <div key={'0'}>
            <p>Pro Plan</p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                <span style={{ fontWeight: 600, color: colors.black }}>
                    $18
                </span>
                <span>per month</span>
            </div>
            <span>Everything in Starter, plus</span>
            <div
                style={{
                    display: 'flex',
                    fontSize: '12px',
                    color: colors.grey,
                }}
            >
                <Icon svg={iconTypes.checkmark} fill="green" />
                Servers never Sleep
            </div>
            <div
                style={{
                    display: 'flex',
                    fontSize: '12px',
                    color: colors.grey,
                }}
            >
                <Icon svg={iconTypes.checkmark} fill="green" />
                More requests
            </div>
            <div
                style={{
                    display: 'flex',
                    fontSize: '12px',
                    color: colors.grey,
                }}
            >
                <Icon svg={iconTypes.checkmark} fill="green" />
                Higher limits
            </div>
            <div
                style={{
                    display: 'flex',
                    fontSize: '12px',
                    color: colors.grey,
                }}
            >
                <Icon svg={iconTypes.checkmark} fill="green" />
                Request auto scaling
            </div>
            <div
                style={{
                    display: 'flex',
                    fontSize: '12px',
                    color: colors.grey,
                }}
            >
                <Icon svg={iconTypes.checkmark} fill="green" />
                Email support
            </div>
            <Button text="Upgrade" theme="primary" isFullWidth />
        </div>,
    ],
};

export const CustomFont = Template.bind({});
CustomFont.args = {
    tooltipText: 'Check this font out!',
    children: [<div key={'0'}>{getModuleAnimation('Lazy NFT')}</div>],
    title: (
        <p style={{ fontFamily: 'Creepster, cursive' }}>
            {'Such a nice font here!'}
        </p>
    ),
    description: (
        <p style={{ fontFamily: 'Creepster, cursive' }}>
            {'Testing out some fancy fonts :)'}
        </p>
    ),
    isDisabled: true,
};
