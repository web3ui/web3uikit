import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import colors from '../../styles/colors';
import PopoverElement from './PopoverElement';
import { iconTypes } from '../Icon/collection';

export default {
    title: '5.Popup/Popover Element',
    component: PopoverElement,
    argTypes: { onClick: { action: 'clicked' } },
} as ComponentMeta<typeof PopoverElement>;

const Template: ComponentStory<typeof PopoverElement> = (args) => (
    <PopoverElement {...args} />
);

export const Default = Template.bind({});
Default.args = {};

export const Logout = Template.bind({});
Logout.args = {
    icon: iconTypes.logOut,
    iconColor: colors.red,
    text: 'Logout',
    textColor: colors.red,
};
