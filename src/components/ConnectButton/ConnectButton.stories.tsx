import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ConnectButton from './ConnectButton';
import { moralisContext } from '../../decorators';

export default {
    title: 'Web3/ConnectButton',
    component: ConnectButton,
    decorators: [moralisContext],
} as ComponentMeta<typeof ConnectButton>;

const Template: ComponentStory<typeof ConnectButton> = (args) => (
    <ConnectButton {...args} />
);

export const Default = Template.bind({});
