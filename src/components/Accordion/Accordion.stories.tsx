import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Accordion from './Accordion';
import { NewComp } from '../NewComp';

export default {
    title: '3.Layout/Accordion',
    component: Accordion,
} as ComponentMeta<typeof Accordion>;

const Template: ComponentStory<typeof Accordion> = (args) => (
    <Accordion {...args} />
);

export const FullDemo = Template.bind({});
FullDemo.args = {
    children: [<NewComp key={'unique-id'} textOn="hello" textOff="bye!" />],
    isExpanded: false,
    hasLockIcon: true,
    id: 'accordion',
    subTitle: 'the sub title',
    tagText: 'Tag!',
    theme: 'blue',
    title: 'Accordion',
};

export const Default = Template.bind({});
Default.args = {
    children: [<NewComp key={'unique-id'} textOn="hello" textOff="bye!" />],
    id: 'accordion',
    title: 'Accordion',
};

export const HasSubtitle = Template.bind({});
HasSubtitle.args = {
    children: [<NewComp key={'unique-id'} textOn="hello" textOff="bye!" />],
    id: 'accordion',
    subTitle: 'the sub title',
    title: 'Accordion Title',
};

export const HasTag = Template.bind({});
HasTag.args = {
    children: [<NewComp key={'unique-id'} textOn="hello" textOff="bye!" />],
    id: 'accordion',
    tagText: 'Tag!',
    title: 'Accordion Title',
};

export const HasIcon = Template.bind({});
HasIcon.args = {
    children: [<NewComp key={'unique-id'} textOn="hello" textOff="bye!" />],
    id: 'accordion',
    tagText: 'Tag!',
    title: 'Accordion Title',
};

export const Expanded = Template.bind({});
Expanded.args = {
    children: [<NewComp key={'unique-id'} textOn="hello" textOff="bye!" />],
    id: 'accordion',
    isExpanded: true,
    title: 'Expanded by default',
};

export const ThemeRed = Template.bind({});
ThemeRed.args = {
    children: [<NewComp key={'unique-id'} textOn="hello" textOff="bye!" />],
    id: 'accordion',
    theme: 'red',
    title: 'Theme is red',
};

export const ThemeYellow = Template.bind({});
ThemeYellow.args = {
    children: [<NewComp key={'unique-id'} textOn="hello" textOff="bye!" />],
    id: 'accordion',
    theme: 'yellow',
    title: 'Theme is yellow',
};

export const ThemeGreen = Template.bind({});
ThemeGreen.args = {
    children: [<NewComp key={'unique-id'} textOn="hello" textOff="bye!" />],
    id: 'accordion',
    theme: 'green',
    title: 'Theme is green',
};
