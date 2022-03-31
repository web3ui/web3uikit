import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Hero from './Hero';
import { Button } from '../Button';
import { iconTypes } from '../Icon/collection';

export default {
    title: '4.UI/Hero',
    component: Hero,
} as ComponentMeta<typeof Hero>;

const Template: ComponentStory<typeof Hero> = (args) => <Hero {...args} />;

export const Demo = Template.bind({});
Demo.args = {
    title: 'web3uiKit, my hero!',
    backgroundURL:
        'https://moralis.io/wp-content/uploads/2021/06/blue-blob-background-2.svg',
};

export const SubTitle = Template.bind({});
SubTitle.args = {
    title: 'you are my hero Ferris',
    backgroundURL:
        'https://moralis.io/wp-content/uploads/2021/06/blue-blob-background-2.svg',
    subTitle:
        "life moves fast, if you don't stop and look around once in a while you might miss it",
};

export const WithChild = Template.bind({});
WithChild.args = {
    title: 'Hero, hero!',
    backgroundURL:
        'https://moralis.io/wp-content/uploads/2021/06/blue-blob-background-2.svg',
    children: <Button text="so PAMP it" theme="primary" />,
};

export const CustomHeight = Template.bind({});
CustomHeight.args = {
    title: '200px height hero',
    backgroundURL:
        'https://moralis.io/wp-content/uploads/2021/06/blue-blob-background-2.svg',
    height: '200px',
};

export const DappHero = Template.bind({});
DappHero.args = {
    title: 'My First Dapp’s Database',
    backgroundURL: 'https://moralis.io/wp-content/uploads/2021/06/blue-blob-background-2.svg',
    height: '176px',
    rounded: '20px',
    align: 'left',
    textColor: '#fff',
    children: <Button text="Access Database" icon={iconTypes.arrowCircleRight} theme="primary" />,
};

export const GradientHero = Template.bind({});
GradientHero.args = {
    title: 'We’ll help with everything you need',
    height: '176px',
    rounded: '20px',
    align: 'left',
    textColor: '#fff',
    linearGradient: 'linear-gradient(113.54deg, rgba(60, 87, 140, 0.5) 14.91%, rgba(70, 86, 169, 0.5) 43.21%, rgba(125, 150, 217, 0.345) 44.27%, rgba(129, 161, 225, 0.185) 55.76%), linear-gradient(151.07deg, #141659 33.25%, #4152A7 98.24%)',
    children: <Button text="Submit a ticket" icon={iconTypes.arrowCircleRight} theme="primary" />,
    customImage: {
        url: 'https://images.pexels.com/photos/9901406/pexels-photo-9901406.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
        styles: {
            width: '126.85px',
            height: '176.61px',
            position: 'absolute',
            right: '84px',
            top: '22px',
        },
    },
};
