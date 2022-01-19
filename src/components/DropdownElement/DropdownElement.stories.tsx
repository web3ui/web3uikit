import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import colors from '../../styles/colors';
import DropdownElement from '../DropdownElement/DropdownElement';
import { iconTypes } from '../Icon/collection';

export default {
    title: 'UI/Dropdown Element',
    component: DropdownElement,
    argTypes: { onClick: { action: 'clicked' } },
} as ComponentMeta<typeof DropdownElement>;

const Template: ComponentStory<typeof DropdownElement> = (args) => (
    <DropdownElement {...args} />
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
