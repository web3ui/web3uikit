import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Server } from '@web3uikit/icons';
import { color } from '@web3uikit/styles';
import { Input } from '.';
import { validateRegExp } from '../../utils/const';

export default {
    title: '2.Forms/Input_V2',
    component: Input,
    parameters: {
        actions: {
            handles: ['onChange', 'changed', 'onBlur'],
        },
    },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const DefaultInput = Template.bind({});
DefaultInput.args = {
    label: {
        text: 'Label',
    },
    name: 'Test text Input',
    placeholder: 'Enter here',
    size: 'large',
};

export const DisabledInput = Template.bind({});
DisabledInput.args = {
    label: {
        text: 'Label',
    },
    name: 'Test text Input',
    placeholder: 'Enter here',
    size: 'large',
    disabled: true,
    type: 'address',
};

export const AddressInput = Template.bind({});
AddressInput.args = {
    label: {
        text: 'Enter Address',
    },
    name: 'Address Input',
    placeholder: 'Enter here',
    size: 'regular',
    type: 'address',
    style: {
        width: '80px',
    },
};

export const AddressBlurInput = Template.bind({});
AddressBlurInput.args = {
    label: {
        text: 'Enter Address',
    },
    name: 'Address Input',
    allowClear: true,
    width: '100%',
    size: 'large',
    type: 'address',
    formatter: (str: string) => {
        if (str) {
            return `${str.slice(0, 4)}...${str.slice(str.length - 4)}`;
        }
        return '';
    },
};

export const DefaultInputNumber = Template.bind({});
DefaultInputNumber.args = {
    label: { text: 'Label text' },
    name: 'Test text Input',
    value: 50,
};

export const EmailInput = Template.bind({});
EmailInput.args = {
    type: 'email',
    label: { text: 'Your email' },
    name: 'Test email Input',
};

export const NumberInput = Template.bind({});
NumberInput.args = {
    type: 'number',
    label: { text: 'how many?' },
    name: 'Test number Input',
};

export const TelInput = Template.bind({});
TelInput.args = {
    type: 'tel',
    label: { text: 'whats your number?' },
    name: 'Test tel Input',
};

export const PasswordInput = Template.bind({});
PasswordInput.args = {
    type: 'password',
    label: { text: 'enter a password' },
    name: 'Test Password Input',
};

export const PrefixCopyableHidableActive = Template.bind({});
PrefixCopyableHidableActive.args = {
    allowCopy: true,
    label: { text: 'Label text' },
    name: 'Test text Input',
    leftIcon: <Server />,
    type: 'text',
};

export const PrefixCopyableHidden = Template.bind({});
PrefixCopyableHidden.args = {
    allowCopy: true,
    label: { text: 'Label text' },
    name: 'Test text Input',
    leftIcon: <Server />,
    type: 'password',
    value: 'Test',
    allowClear: true,
};

export const PrefixHidable = Template.bind({});
PrefixHidable.args = {
    label: { text: 'Label text' },
    name: 'Test text Input',
    leftIcon: <Server />,
    type: 'password',
};

export const Prefix = Template.bind({});
Prefix.args = {
    label: { text: 'Label text' },
    name: 'Test text Input',
    leftIcon: <Server />,
    type: 'text',
};

export const Copyable = Template.bind({});
Copyable.args = {
    allowCopy: true,
    label: { text: 'Label text' },
    name: 'Test text Input',
    type: 'text',
};

export const Hidable = Template.bind({});
Hidable.args = {
    label: { text: 'Label text' },
    name: 'Test text Input',
    type: 'password',
};

export const PrefixCopyableHidableDisabled = Template.bind({});
PrefixCopyableHidableDisabled.args = {
    allowCopy: true,
    label: { text: 'Label text' },
    name: 'Test text Input',
    leftIcon: <Server />,
    type: 'password',
    allowClear: true,
};

export const Validation = Template.bind({});
Validation.args = {
    label: { text: 'This is required' },
    validation: { required: true },
    allowClear: true,
};

export const ValidateNumberRange = Template.bind({});
ValidateNumberRange.args = {
    label: { text: 'Enter a score between 1 & 5' },
    type: 'number',
    validation: {
        numberMin: 1,
        numberMax: 5,
    },
    allowClear: true,
};

export const ValidateValueLength = Template.bind({});
ValidateValueLength.args = {
    label: { text: 'Between 8 and 16 characters' },
    type: 'password',
    validation: {
        characterMaxLength: 16,
        characterMinLength: 8,
    },
};

export const ValidateRegExp = Template.bind({});
ValidateRegExp.args = {
    label: { text: 'Valid email only' },
    type: 'email',
    validation: {
        regExp: validateRegExp.email,
        regExpInvalidMessage: 'That is not a valid email address',
    },
};

export const InputFilled = Template.bind({});
InputFilled.args = {
    label: { text: 'Filled' },
    name: 'Test text Input',
    value: 'This has a default value',
};

export const Description = Template.bind({});
Description.args = {
    label: { text: 'Fill me' },
    description: 'this is something you need',
    validation: { required: true },
};
