import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import { HideButton } from '.';

export default {
    title: '4.UI/HideButton',
    component: HideButton,
    argTypes: { onToggle: { action: 'toggled' } },
} as ComponentMeta<typeof HideButton>;

const Template: ComponentStory<typeof HideButton> = (args) => (
    <HideButton {...args} />
);

export const Default = Template.bind({});
Default.args = {};

export const HiddenState = Template.bind({});
HiddenState.args = { isHidden: true };
