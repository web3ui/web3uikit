import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import ServerInfo from './ServerInfo';


export default {
    title: 'UI/ServerInfo',
    component: ServerInfo,
} as ComponentMeta<typeof ServerInfo>;

const Template: ComponentStory<typeof ServerInfo> = (args) => (
    <ServerInfo {...args} />
);

export const Regular = Template.bind({});
Regular.args = {
    name: "My Server",
    network: "Mainnet",
    isSleeping: false,
    version: "v.0.1.5"
};
