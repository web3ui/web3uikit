import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Checkbox from './Checkbox';

export default {
    title: '2.Forms/Checkbox & Switch',
    component: Checkbox,
    parameters: {
        actions: {
            handles: ['onChange', 'changed', 'onBlur'],
        },
    },
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => (
    <Checkbox {...args} />
);

export const Box = Template.bind({});
Box.args = {
    label: 'Can I tick it?',
    name: 'Test checkbox input',
    id: 'test-checkbox',
};

export const BoxOnByDefault = Template.bind({});
BoxOnByDefault.args = {
    checked: true,
    label: 'Can I tick it?',
    name: 'Test checkbox input',
    id: 'test-checkbox',
};

export const BoxDisabled = Template.bind({});
BoxDisabled.args = {
    disabled: true,
    label: "You can't tick this",
    name: 'Test checkbox input',
    id: 'test-checkbox',
};

export const Switch = Template.bind({});
Switch.args = {
    label: 'Switch it up',
    name: 'Test switch input',
    id: 'test-switch',
    layout: 'switch',
};

export const SwitchOnByDefault = Template.bind({});
SwitchOnByDefault.args = {
    checked: true,
    label: 'Switch it up',
    name: 'Test switch input',
    id: 'test-switch',
    layout: 'switch',
};

export const SwitchDisabled = Template.bind({});
SwitchDisabled.args = {
    disabled: true,
    label: 'No switching for you',
    name: 'Test switch input',
    id: 'test-switch',
    layout: 'switch',
};

export const SwitchingText = Template.bind({});
SwitchingText.args = {
    label: 'Opt in here',
    labelWhenChecked: 'Ok you are in',
    checked: undefined,
    name: 'Test switch input',
    id: 'test-switch',
    layout: 'switch',
};

export const CustomLabel = Template.bind({});
CustomLabel.args = {
    label: (
        <div>
            This is Checkbox with custom label{' '}
            <a href="https://ih1.redbubble.net/image.968162104.1958/st,small,507x507-pad,600x600,f8f8f8.jpg">
                Click
            </a>
        </div>
    ),
    name: 'Test checkbox input',
    id: 'test-checkbox',
};
