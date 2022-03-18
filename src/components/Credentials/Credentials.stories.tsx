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

export const WithHeaderAndIcon = Template.bind({});
WithHeaderAndIcon.args = {
    icon: 'windows',
    headerText: 'CLI API Key:',
    text: 'https://xj5hyiafwkhn.moralis.io:2053/servers',
};

export const WithHeader = Template.bind({});
WithHeader.args = {
    headerText: 'CLI API Key:',
    text: 'https://xj5hyiafwkhn.moralis.io:2053/servers',
};

export const WithCustomWidth = Template.bind({});
WithCustomWidth.args = {
    icon: 'windows',
    headerText: 'CLI API Key:',
    text: 'https://xj5hyiafwkhn.moralis.io:2053/servers',
    width: '700px',
};

export const OneLine = Template.bind({});
OneLine.args = {
    text: 'https://xj5hyiafwkhn.moralis.io:2053/servers',
};
