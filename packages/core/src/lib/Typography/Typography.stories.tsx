import { ComponentStory, ComponentMeta } from '@storybook/react';
import Typography from './Typography';
import React from 'react';

export default {
    title: '4.UI/Typography',
    component: Typography,
} as ComponentMeta<typeof Typography>;

const Template: ComponentStory<typeof Typography> = (args) => (
    <Typography {...args} />
);

export const Heading1 = Template.bind({});
Heading1.args = {
    children: 'Typography H1',
    variant: 'H1',
};

export const Heading2 = Template.bind({});
Heading2.args = {
    children: 'Typography H2',
    variant: 'H2',
};

export const Heading3 = Template.bind({});
Heading3.args = {
    children: 'Typography H3',
    variant: 'H3',
};

export const Heading4 = Template.bind({});
Heading4.args = {
    children: 'Typography H4',
    variant: 'H4',
};

export const Subtitle1 = Template.bind({});
Subtitle1.args = {
    children: 'Typography Subtitle1',
    variant: 'subtitle1',
};

export const Subtitle2 = Template.bind({});
Subtitle2.args = {
    children: 'Typography Subtitle2',
    variant: 'subtitle2',
};

export const Body18 = Template.bind({});
Body18.args = {
    children: 'Typography Body18',
    variant: 'body18',
};

export const Body16 = Template.bind({});
Body16.args = {
    children: 'Typography Body16',
    variant: 'body16',
};

export const Caption14 = Template.bind({});
Caption14.args = {
    children: 'Typography Caption14',
    variant: 'caption14',
};

export const Caption12 = Template.bind({});
Caption12.args = {
    children: 'Typography Caption12',
    variant: 'caption12',
};

export const Caption10 = Template.bind({});
Caption10.args = {
    children: 'Typography Caption10',
    variant: 'caption10',
};

export const CustomFontSize = Template.bind({});
CustomFontSize.args = {
    children: 'This is a custom fontsize',
    fontSize: '32px',
};

export const Copyable = Template.bind({});
Copyable.args = {
    children: 'Copyable Text to clipboard',
    copyable: true,
    variant: 'body18',
};
