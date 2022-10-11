import { ComponentStory, ComponentMeta } from '@storybook/react';
import { LogOut } from '@web3uikit/icons';
import { color } from '@web3uikit/styles';
import PopoverElement from './PopoverElement';

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
    icon: <LogOut fill={color.red40} />,
    iconColor: color.red40,
    text: 'Logout',
    textColor: color.red40,
};
