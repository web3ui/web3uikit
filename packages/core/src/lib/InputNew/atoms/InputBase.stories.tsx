import { ComponentStory, ComponentMeta } from '@storybook/react';
import InputBase from './InputBase';
import { inputBaseTestValues, inputBaseTestValidation } from './values';

const {
    autoComplete,
    autoFocus,
    defaultValue,
    disabled,
    id,
    name,
    placeholder,
    regExp,
    required,
    type,
} = inputBaseTestValues;

const { numberMax, numberMin, characterMaxLength, characterMinLength } =
    inputBaseTestValidation;

export default {
    title: '2.Forms/Input/atoms/InputBase',
    component: InputBase,
    parameters: {
        actions: {
            handles: ['onChange', 'onBlur'],
        },
    },
} as ComponentMeta<typeof InputBase>;

const Template: ComponentStory<typeof InputBase> = (args) => (
    <InputBase {...args} />
);

export const InputBaseDefault = Template.bind({});
InputBaseDefault.args = {
    id: id,
};
InputBaseDefault.storyName = 'Input Base';

export const InputBaseFocus = Template.bind({});
InputBaseFocus.args = {
    autoFocus: autoFocus,
    id: id,
};
InputBaseFocus.storyName = 'Input Autofocus';

export const InputBaseProps = Template.bind({});
InputBaseProps.args = {
    autoComplete: autoComplete,
    defaultValue: defaultValue,
    id: id,
    name: name,
    type: type,
};
InputBaseProps.storyName = 'Input Base Props';

export const InputBaseDisabled = Template.bind({});
InputBaseDisabled.args = {
    disabled: disabled,
    id: id,
    placeholder: placeholder,
};
InputBaseDisabled.storyName = 'Input Base Disabled';

export const InputBaseValidation = Template.bind({});
InputBaseValidation.args = {
    id: id,
    maxLength: characterMaxLength,
    minLength: characterMinLength,
    placeholder: 'max 10 characters',
    regExp: regExp,
    required: required,
    type: 'text',
};
InputBaseValidation.storyName = 'Input Base Validate Text';

export const InputBaseNumber = Template.bind({});
InputBaseNumber.args = {
    id: id,
    max: numberMax,
    min: numberMin,
    placeholder: '0',
    type: 'number',
};
InputBaseNumber.storyName = 'Input Base Validate Number';
