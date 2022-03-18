import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import { Credentials } from '.';

export default {
    title: '2.Forms/Credentials',
    component: Credentials,
} as ComponentMeta<typeof Credentials>;

const Template: ComponentStory<typeof Credentials> = (args) => (
    <Credentials {...args} />
);

export const WithTitleAndIcon = Template.bind({});
WithTitleAndIcon.args = {
    icon: 'windows',
    title: 'CLI API Key:',
    text: 'https://xj5hyiafwkhn.moralis.io:2053/servers',
};

export const WithTitle = Template.bind({});
WithTitle.args = {
    title: 'CLI API Key:',
    text: 'https://xj5hyiafwkhn.moralis.io:2053/servers',
};

export const WithCustomWidth = Template.bind({});
WithCustomWidth.args = {
    icon: 'windows',
    title: 'CLI API Key:',
    text: 'https://xj5hyiafwkhn.moralis.io:2053/servers',
    width: '700px',
};

export const OneLine = Template.bind({});
OneLine.args = {
    text: 'https://xj5hyiafwkhn.moralis.io:2053/servers',
};
