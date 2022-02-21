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
    title: 'you are my hero Ferris',
    backgroundURL: '/Users/bill/Desktop/bill/backgrounds',
};

export const SubTitle = Template.bind({});
SubTitle.args = {
    title: 'you are my hero Ferris',
    backgroundURL: '/Users/bill/Desktop/bill/backgrounds',
    subTitle:
        "life moves fast, if you don't stop and look around once in a while you might miss it",
};

export const WithChild = Template.bind({});
WithChild.args = {
    title: 'Hero, hero!',
    backgroundURL: '/Users/bill/Desktop/bill/backgrounds',
    children: <Button text="so PAMP it" theme="primary" />,
};

export const CustomHeight = Template.bind({});
CustomHeight.args = {
    title: '300px height hero',
    backgroundURL: '/Users/bill/Desktop/bill/backgrounds',
    height: '300px',
};
