import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Hero from './Hero';
import { Button } from '../Button';

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
