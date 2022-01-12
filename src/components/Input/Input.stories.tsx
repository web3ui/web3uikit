import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Input from '../../components/Input/Input';
import { Icon } from '../Icon';
import { iconTypes } from '../Icon/collection';

export default {
    title: 'Interaction/Input',
    component: Input,
} as ComponentMeta<typeof Input>;

const testEvent = (event: React.ChangeEvent<HTMLInputElement>) =>
    console.log(event.target);

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const PrefixCopyableHidableActive = Template.bind({});
PrefixCopyableHidableActive.args = {
    copyable: true,
    hidable: true,
    label: 'Label text',
    name: 'Test text Input',
    onChange: testEvent,
    prefix: <Icon svg={iconTypes.server} />,
    state: undefined,
    type: 'text',
};
export const PrefixCopyableHidden = Template.bind({});
PrefixCopyableHidden.args = {
    copyable: true,
    hidable: true,
    inputHidden: true,
    label: 'Label text',
    name: 'Test text Input',
    onChange: testEvent,
    prefix: <Icon svg={iconTypes.server} />,
    state: undefined,
    type: 'text',
    value: 'Test',
};
export const PrefixCopyable = Template.bind({});
PrefixCopyable.args = {
    copyable: true,
    label: 'Label text',
    name: 'Test text Input',
    onChange: testEvent,
    prefix: <Icon svg={iconTypes.server} />,
    state: undefined,
    type: 'text',
};
export const PrefixHidable = Template.bind({});
PrefixHidable.args = {
    hidable: true,
    label: 'Label text',
    name: 'Test text Input',
    onChange: testEvent,
    prefix: <Icon svg={iconTypes.server} />,
    state: undefined,
    type: 'text',
};
export const Prefix = Template.bind({});
Prefix.args = {
    label: 'Label text',
    name: 'Test text Input',
    onChange: testEvent,
    prefix: <Icon svg={iconTypes.server} />,
    state: undefined,
    type: 'text',
};
export const Copyable = Template.bind({});
Copyable.args = {
    copyable: true,
    label: 'Label text',
    name: 'Test text Input',
    onChange: testEvent,
    state: undefined,
    type: 'text',
};
export const Hidable = Template.bind({});
Hidable.args = {
    hidable: true,
    label: 'Label text',
    name: 'Test text Input',
    onChange: testEvent,
    state: undefined,
    type: 'text',
};
export const TextInputPrefix = Template.bind({});
TextInputPrefix.args = {
    onChange: testEvent,
    type: 'text',
    label: 'Label text',
    name: 'Test text Input',
    state: undefined,
    prefix: <Icon svg={iconTypes.server} />,
};

export const TextInput = Template.bind({});
TextInput.args = {
    onChange: testEvent,
    type: 'text',
    label: 'Label text',
    name: 'Test text Input',
    state: undefined,
};

export const TextInputError = Template.bind({});
TextInputError.args = {
    onChange: testEvent,
    type: 'text',
    label: 'Label text',
    name: 'Test text Input error',
    state: 'error',
    errorMessage: 'Your name must contain your name',
};

export const TextInputConfirmed = Template.bind({});
TextInputConfirmed.args = {
    onChange: testEvent,
    type: 'text',
    label: 'ok, nice',
    name: 'Test text Input confirmed',
    state: 'confirmed',
};

export const EmailInput = Template.bind({});
EmailInput.args = {
    onChange: testEvent,
    type: 'email',
    label: 'Label text',
    name: 'Test email Input',
    state: undefined,
};

export const EmailInputError = Template.bind({});
EmailInputError.args = {
    onChange: testEvent,
    type: 'email',
    label: 'something went wrong',
    name: 'Test email Input error',
    state: 'error',
};

export const EmailInputConfirmed = Template.bind({});
EmailInputConfirmed.args = {
    onChange: testEvent,
    type: 'email',
    label: 'ok, nice',
    name: 'Test email Input confirmed',
    state: 'confirmed',
};

export const NumberInput = Template.bind({});
NumberInput.args = {
    onChange: testEvent,
    type: 'number',
    label: 'how many?',
    name: 'Test number Input',
};

export const NumberInputConfirmed = Template.bind({});
NumberInputConfirmed.args = {
    onChange: testEvent,
    type: 'number',
    label: 'a good amount',
    name: 'Test number Input confirmed',
    state: 'confirmed',
};

export const NumberInputError = Template.bind({});
NumberInputError.args = {
    onChange: testEvent,
    type: 'number',
    label: 'maybe too many?',
    name: 'Test number Input error',
    state: 'error',
};

export const TelInput = Template.bind({});
TelInput.args = {
    onChange: testEvent,
    type: 'tel',
    label: 'whats your number?',
    name: 'Test tel Input',
};

export const TelInputConfirmed = Template.bind({});
TelInputConfirmed.args = {
    onChange: testEvent,
    type: 'tel',
    label: 'I like those digits',
    name: 'Test tel Input confirmed',
    state: 'confirmed',
};

export const TelInputError = Template.bind({});
TelInputError.args = {
    onChange: testEvent,
    type: 'tel',
    label: "This telephone number doesn't add up",
    name: 'Test tel Input error',
    state: 'error',
};

export const PasswordInput = Template.bind({});
PasswordInput.args = {
    onChange: testEvent,
    type: 'password',
    label: 'enter a password',
    name: 'Test Password Input',
};

export const PasswordInputConfirmed = Template.bind({});
PasswordInputConfirmed.args = {
    onChange: testEvent,
    type: 'password',
    label: 'good password',
    name: 'Test Password Input confirmed',
    state: 'confirmed',
};

export const PasswordInputError = Template.bind({});
PasswordInputError.args = {
    onChange: testEvent,
    type: 'password',
    label: 'bad password',
    name: 'Test Password Input error',
    state: 'error',
};

export const PrefixCopyableHidableDisabled = Template.bind({});
PrefixCopyableHidableDisabled.args = {
    copyable: true,
    hidable: true,
    label: 'Label text',
    name: 'Test text Input',
    onChange: testEvent,
    prefix: <Icon svg={iconTypes.server} />,
    state: 'disabled',
    type: 'text',
};
