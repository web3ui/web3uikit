import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Form from './Form';
import { validateRegExp } from '../../utils/const';

export default {
    title: 'Interaction/Form',
    component: Form,
} as ComponentMeta<typeof Form>;

const Template: ComponentStory<typeof Form> = (args) => <Form {...args} />;

export const DemoForm = Template.bind({});
DemoForm.args = {
    title: 'Test form',
    buttonConfig: {
        onClick: (e) => e.preventDefault,
        theme: 'primary',
    },
    data: [
        {
            name: 'first name',
            type: 'text',
            value: '',
            inputWidth: '100%',
        },
        {
            name: 'your email',
            type: 'email',
            value: '',
            inputWidth: '100%',
            validation: {
                required: true,
                regExp: validateRegExp.email,
            },
        },
        {
            name: 'your digits',
            type: 'tel',
            value: '',
            validation: {
                required: true,
                regExp: validateRegExp.telephoneNumber,
                regExpInvalidMessage: 'Who ya gonna call?',
            },
        },
        {
            name: 'your password',
            type: 'password',
            value: '',
            validation: {
                required: true,
                characterMinLength: 6,
                characterMaxLength: 20,
            },
        },
        {
            name: 'Rate our form? 1-10',
            type: 'number',
            value: '',
            validation: {
                required: true,
                numberMin: 1,
                numberMax: 10,
            },
        },
        {
            name: 'pizza fav',
            type: 'box',
            value: 'what toppings do you like?',
            options: ['pineapple', 'peppers', 'chillies'],
        },
        {
            name: 'Morning checklist',
            type: 'switch',
            value: 'Check list',
            options: ['say GM', 'make coffee', 'build killer web3uiKit'],
            validation: { required: true },
        },
        {
            name: 'pokemon',
            type: 'radios',
            value: "who's that pokemon?",
            options: ['charmander', 'squirtle', 'bulbasaur'],
        },
        {
            name: 'Any more comments?',
            type: 'textarea',
            value: '',
            inputWidth: '100%',
            validation: { required: true },
        },
    ],
};
