import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Server } from '@web3uikit/icons';
import { Input } from '.';
import { validateRegExp } from '../../utils/const';

export default {
    title: '2.Forms/InputNew',
    component: Input,
    parameters: {
        actions: {
            handles: ['onBlur', 'onChange', 'onFocus'],
        },
    },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const InputDefault = Template.bind({});
InputDefault.args = {
    label: 'New Improved Input',
    placeholder: 'try me',
};
InputDefault.storyName = 'Input';

export const InputOpen = Template.bind({});
InputOpen.args = {
    label: 'New Improved Input',
    openByDefault: true,
    placeholder: 'try me',
};
InputOpen.storyName = 'Input Open';

export const InputNumber = Template.bind({});
InputNumber.args = {
    label: 'Score 1 - 10',
    placeholder: '10 out of 10?',
    type: 'number',
    validation: {
        min: 1,
        max: 10,
    },
};
InputNumber.storyName = 'Input Number';

export const InputEmail = Template.bind({});
InputEmail.args = {
    label: 'Enter your email',
    placeholder: 'hello@moralis.io',
    type: 'email',
    validation: {
        required: true,
        maxLength: 48,
        minLength: 1,
        pattern: validateRegExp.email,
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
        maxLength: 32,
        minLength: 8,
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

export const InputDisabled = Template.bind({});
InputDisabled.args = {
    disabled: true,
    label: 'Label text',
    name: 'Test text Input',
    type: 'password',
    value: 'MoralisToTheMoon',
};
InputDisabled.storyName = 'Input Disabled';

export const InputSlots = Template.bind({});
InputSlots.args = {
    label: 'New Improved Input',
    placeholder: 'try me',
    type: 'password',
    setLabelMargin: {
        left: '120px',
        right: '120px',
    },
    slots: {
        slotAfter: [
            <Server height={24} width={24}>
                bye
            </Server>,
        ],
        slotBefore: [<button>hi</button>, <span>there</span>],
    },
};
InputSlots.storyName = 'Input Slots';

export const InputCustom = Template.bind({});
InputCustom.args = {
    customInput: (
        <input
            style={{
                border: 'none',
                outline: 'none',
                padding: '18px',
                width: '100%',
            }}
            placeholder="i am a custom input"
        />
    ),
    label: 'Rayyan needs this for Stripe',
    name: 'Test text Input',
    openByDefault: true,
};
InputCustom.storyName = 'Input Custom';
