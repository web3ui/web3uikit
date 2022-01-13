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

export const Alive = Template.bind({});
Alive.args = {
    name: "My Server",
    network: "Mainnet",
    onDelete: () => alert('deleting server ...'),
    onWakeUp: () => alert('waking up ...'),
    onUpdate: () => alert('updating server'),
    onSettings: () => alert('routing to settings'),
    onRestart: () => alert('restarting server ...'),
    onDapp: () => alert('routing to dApp'),
    onDatabase: () => alert('routing to database'),
    dataUsed: "1000",
    numOfUser: "235,232",
    isSleeping: false,
    version: "v.0.1.5"
};

export const Sleeping = Template.bind({});
Sleeping.args = {
    name: "My Server",
    network: "Mainnet",
    onDelete: () => alert('deleting server ...'),
    onWakeUp: () => alert('waking up ...'),
    onUpdate: () => alert('updating server'),
    onSettings: () => alert('routing to settings'),
    onRestart: () => alert('restarting server ...'),
    onDapp: () => alert('routing to dApp'),
    onDatabase: () => alert('routing to database'),
    dataUsed: "1000",
    numOfUser: "235,232",
    isSleeping: true,
    version: "v.1.2.5"
};

export const Revive = Template.bind({});
Revive.args = {
    name: "My Server",
    network: "Mainnet",
    onDelete: () => alert('deleting server ...'),
    onWakeUp: () => alert('waking up ...'),
    onUpdate: () => alert('updating server ...'),
    onSettings: () => alert('routing to settings ...'),
    onRestart: () => alert('restarting server ...'),
    onRevive: () => alert('reviving server ...'),
    onDapp: () => alert('routing to dApp ...'),
    onDatabase: () => alert('routing to database ...'),
    dataUsed: "1000",
    numOfUser: "235,232",
    canRevive: true,
    version: "v.1.2.5"
};
