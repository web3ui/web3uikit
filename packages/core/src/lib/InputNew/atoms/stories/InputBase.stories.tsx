import { ComponentStory, ComponentMeta } from '@storybook/react';
import InputBase from '../InputBase';
import { testInputId } from '../values';
import { validateRegExp } from '../../../../utils/const';

export default {
    title: '2.Forms/InputNew/atoms/InputBase',
    component: InputBase,
    parameters: {
        actions: {
            handles: ['onChange', 'onBlur'],
        },
    },
} as ComponentMeta<typeof InputBase>;

const Template: ComponentStory<typeof InputBase> = (args) => (
    <InputBase {...args} testid={testInputId} />
);

export const InputBaseDefault = Template.bind({});
InputBaseDefault.args = {
    id: 'input-base',
};
InputBaseDefault.storyName = 'Input Base';

export const InputBaseFocus = Template.bind({});
InputBaseFocus.args = {
    autoFocus: true,
    id: 'input-base',
};
InputBaseFocus.storyName = 'Input Autofocus';

export const InputBasePassword = Template.bind({});
InputBasePassword.args = {
    autoComplete: true,
    defaultValue: 'default value',
    id: 'input-base',
    name: 'input base',
    type: 'password',
};
InputBasePassword.storyName = 'Input Password';

export const InputBaseDisabled = Template.bind({});
InputBaseDisabled.args = {
    disabled: true,
    id: 'input-base',
    placeholder: 'Placeholder text',
};
InputBaseDisabled.storyName = 'Input Disabled';

export const InputBaseValidation = Template.bind({});
InputBaseValidation.args = {
    id: 'input-base',
    maxLength: 10,
    minLength: 0,
    placeholder: 'max 10 characters',
    pattern: validateRegExp.lettersOnly,
    required: true,
    type: 'text',
};
InputBaseValidation.storyName = 'Input Validate Text';

export const InputBaseNumber = Template.bind({});
InputBaseNumber.args = {
    id: 'input-base',
    max: 10,
    min: 0,
    placeholder: '0',
    type: 'number',
};
InputBaseNumber.storyName = 'Input Validate Number';
