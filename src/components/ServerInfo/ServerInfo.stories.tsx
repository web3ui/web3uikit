import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import ServerInfo from './ServerInfo';
import { iconTypes } from '../Icon/collection'
import { Widget } from '../Widget';


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
    isSleeping: false,
    version: "v.0.1.5",
    widgets: [
        <Widget key={0} description="Mainnet" icon={iconTypes.network} title={"Environment"} />,
        <Widget key={1} description="2425" title={"Data used"} />,
        <Widget key={2} description="12,152" title={"Number of users"} />
    ]
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
    canRevive: true,
    version: "v.1.2.5"
};
