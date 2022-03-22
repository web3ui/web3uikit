import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Input from '../../components/Input/Input';
import { iconTypes } from '../Icon/collection';
import { validateRegExp } from '../../utils/const';

export default {
    title: '2.Forms/Input',
    component: Input,
    parameters: {
        actions: {
            handles: ['onChange', 'changed'],
        },
    },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;
const FilledTemplate: ComponentStory<typeof Input> = (args) => (
    <div className="input_filled">
        <Input {...args} />
    </div>
);

export const DefaultInput = Template.bind({});
DefaultInput.args = {
    label: 'Label text',
    name: 'Test text Input',
};

export const InputError = Template.bind({});
InputError.args = {
    label: 'Label text',
    name: 'Test text Input error',
    state: 'error',
    errorMessage: 'Your name must contain your name',
};

export const InputConfirmed = Template.bind({});
InputConfirmed.args = {
    label: 'ok, nice',
    name: 'Test text Input confirmed',
    state: 'confirmed',
};

export const InputPrefix = Template.bind({});
InputPrefix.args = {
    label: 'Label text',
    name: 'Test text Input',
    prefixIcon: iconTypes.server,
};

export const EmailInput = Template.bind({});
EmailInput.args = {
    type: 'email',
    label: 'Your email',
    name: 'Test email Input',
};

export const NumberInput = Template.bind({});
NumberInput.args = {
    type: 'number',
    label: 'how many?',
    name: 'Test number Input',
};

export const TelInput = Template.bind({});
TelInput.args = {
    type: 'tel',
    label: 'whats your number?',
    name: 'Test tel Input',
};

export const PasswordInput = Template.bind({});
PasswordInput.args = {
    type: 'password',
    label: 'enter a password',
    name: 'Test Password Input',
};

export const PrefixCopyableHidableActive = Template.bind({});
PrefixCopyableHidableActive.args = {
    hasCopyButton: true,
    label: 'Label text',
    name: 'Test text Input',
    prefixIcon: iconTypes.server,
    type: 'text',
};

export const PrefixCopyableHidden = Template.bind({});
PrefixCopyableHidden.args = {
    hasCopyButton: true,
    inputHidden: true,
    label: 'Label text',
    name: 'Test text Input',
    prefixIcon: iconTypes.server,
    type: 'text',
    value: 'Test',
};

export const PrefixCopyable = Template.bind({});
PrefixCopyable.args = {
    hasCopyButton: true,
    label: 'Label text',
    name: 'Test text Input',
    prefixIcon: iconTypes.server,
    type: 'text',
};

export const PrefixHidable = Template.bind({});
PrefixHidable.args = {
    label: 'Label text',
    name: 'Test text Input',
    prefixIcon: iconTypes.server,
    type: 'text',
};

export const Prefix = Template.bind({});
Prefix.args = {
    label: 'Label text',
    name: 'Test text Input',
    prefixIcon: iconTypes.server,
    type: 'text',
};

export const Copyable = Template.bind({});
Copyable.args = {
    hasCopyButton: true,
    label: 'Label text',
    name: 'Test text Input',
    type: 'text',
};

export const Hidable = Template.bind({});
Hidable.args = {
    label: 'Label text',
    name: 'Test text Input',
    type: 'text',
};

export const PrefixCopyableHidableDisabled = Template.bind({});
PrefixCopyableHidableDisabled.args = {
    hasCopyButton: true,
    label: 'Label text',
    name: 'Test text Input',
    prefixIcon: iconTypes.server,
    state: 'disabled',
    type: 'text',
};

export const Validation = Template.bind({});
Validation.args = {
    label: 'This is required',
    validation: { required: true },
};

export const ValidateNumberRange = Template.bind({});
ValidateNumberRange.args = {
    label: 'Enter a score between 1 & 5',
    type: 'number',
    validation: {
        numberMin: 1,
        numberMax: 5,
    },
};

export const ValidateValueLength = Template.bind({});
ValidateValueLength.args = {
    label: 'Between 8 and 16 characters',
    type: 'password',
    validation: {
        characterMaxLength: 16,
        characterMinLength: 8,
    },
};

export const ValidateRegExp = Template.bind({});
ValidateRegExp.args = {
    label: 'Valid email only',
    type: 'email',
    validation: {
        regExp: validateRegExp.email,
        regExpInvalidMessage: 'That is not a valid email address',
    },
};

export const InputFilled = Template.bind({});
InputFilled.args = {
    label: 'Filled',
    name: 'Test text Input',
    value: 'This has a default value',
};

export const InputFilledHack = FilledTemplate.bind({});
InputFilledHack.args = {
    label: 'Filled hack just in case',
    name: 'Test text Input',
    placeholder: 'Yeah, you can use placeholder now',
};
