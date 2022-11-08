import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Server } from '@web3uikit/icons';
import { Input } from '.';
import { validateRegExp } from '../../utils/const';

export default {
    title: '2.Forms/InputNew',
    component: Input,
    parameters: {
        actions: {
            handles: ['onChange', 'onBlur'],
        },
    },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const InputNew = Template.bind({});
InputNew.args = {
    label: 'New Improved Input',
    placeholder: 'try me',
};
InputNew.storyName = 'Input';

export const InputNumber = Template.bind({});
InputNumber.args = {
    label: 'Score 1 - 10',
    placeholder: '10 out of 10?',
    type: 'number',
    validation: {
        numberMin: 1,
        numberMax: 10,
    },
};
InputNumber.storyName = 'Input Number';

export const InputEmail = Template.bind({});
InputEmail.args = {
    label: 'Enter your email',
    placeholder: 'hello@moralis.io',
    validation: {
        required: true,
        characterMaxLength: 48,
        regExp: validateRegExp.email,
        regExpInvalidMessage: 'That is not a valid email address',
    },
};
InputEmail.storyName = 'Input Email';

export const InputPassword = Template.bind({});
InputPassword.args = {
    label: 'Password',
    type: 'password',
    value: 'moralis123',
    validation: {
        characterMaxLength: 32,
        characterMinLength: 8,
    },
};
InputPassword.storyName = 'Input Password';

export const InputValue = Template.bind({});
InputValue.args = {
    description: 'A value was added for you',
    label: 'New Improved Input',
    value: 'try me',
};
InputValue.storyName = 'Input + Value';

export const InputError = Template.bind({});
InputError.args = {
    errorMessage: 'Your name must contain your name',
    label: 'Add your name',
    name: 'Test text Input error',
    state: 'error',
};
InputError.storyName = 'Input Error';

export const InputConfirmed = Template.bind({});
InputConfirmed.args = {
    label: 'ok, nice',
    name: 'Test text Input confirmed',
    state: 'confirmed',
};
InputConfirmed.storyName = 'Input Confirmed';

export const InputPrefix = Template.bind({});
InputPrefix.args = {
    iconPosition: 'end',
    label: 'Label text',
    name: 'Test text Input',
    prefixIcon: <Server />,
    type: 'text',
};
InputPrefix.storyName = 'Input Icon';

export const InputDisabled = Template.bind({});
InputDisabled.args = {
    disabled: true,
    iconPosition: 'end',
    label: 'Label text',
    name: 'Test text Input',
    prefixIcon: <Server />,
    type: 'password',
    value: 'MoralisToTheMoon',
};
InputDisabled.storyName = 'Input Disabled';
