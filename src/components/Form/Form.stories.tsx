import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Form from './Form';
import { validateRegExp } from '../../utils/const';
import { Button } from '../Button';

export default {
    title: '2.Forms/Form',
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
    onSubmit: (e) => console.log(e),
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

export const LoginForm = Template.bind({});
LoginForm.args = {
    title: 'Login',
    buttonConfig: {
        theme: 'primary',
        text: 'Login',
    },
    data: [
        {
            name: 'Email',
            type: 'email',
            value: '',
            key: 'LOGIN_EMAIL',
            validation: {
                required: true,
            },
        },
        {
            name: 'Password',
            type: 'password',
            key: 'LOGIN_PASSWORD',
            value: '',
            validation: {
                required: true,
            },
        },
    ],
    onSubmit: (e) => console.log(e),
};

export const CreditCardForm = Template.bind({});
CreditCardForm.args = {
    title: 'Credit Card Form',
    id: 'cc-form',
    buttonConfig: {
        onClick: (e) => e.preventDefault,
        theme: 'primary',
    },
    onSubmit: (e) => console.log(e),
    data: [
        {
            name: 'creditCards',
            type: 'radios',
            value: 'Pick a card',
            options: [
                {
                    id: 'marty-mc-fly-visa-id',
                    fingerprint: 'foo-bar-visa',
                    isExpired: false,
                    name: 'Marty McFly',
                    brand: 'visa',
                    lastDigits: '1177',
                    expiresAt: {
                        month: '04',
                        year: '22',
                    },
                },
                {
                    id: 'marty-mc-fly-master-id',
                    fingerprint: 'foo-bar-master',
                    isExpired: false,
                    name: 'Marty McFly',
                    brand: 'mastercard',
                    lastDigits: '1177',
                    expiresAt: {
                        month: '11',
                        year: '24',
                    },
                },
                {
                    id: 'marty-mc-fly-amex-id',
                    fingerprint: 'foo-bar-amex',
                    isExpired: false,
                    name: 'Marty McFly',
                    brand: 'amex',
                    lastDigits: '1177',
                    expiresAt: {
                        month: '11',
                        year: '24',
                    },
                },
                {
                    id: 'marty-mc-fly-diners-id',
                    fingerprint: 'foo-bar-diners',
                    isExpired: false,
                    name: 'Marty McFly',
                    brand: 'diners',
                    lastDigits: '1177',
                    expiresAt: {
                        month: '11',
                        year: '24',
                    },
                },
            ],
        },
    ],
};

export const BirthdayForm = Template.bind({});
BirthdayForm.args = {
    title: 'Test form',
    buttonConfig: {
        onClick: (e) => e.preventDefault,
        theme: 'primary',
    },
    onSubmit: (e) => console.log(e),
    data: [
        {
            name: 'first name',
            type: 'text',
            value: '',
            inputWidth: '100%',
        },
        {
            name: 'please enter your birthday',
            type: 'date',
            value: '',
        },
    ],
};

export const SelectForm = Template.bind({});
SelectForm.args = {
    title: 'Select thing',
    buttonConfig: {
        onClick: (e) => e.preventDefault,
        theme: 'primary',
    },
    onSubmit: (e) => console.log(e),
    data: [
        {
            name: 'Best pie',
            type: 'select',
            value: '',
            selectOptions: [
                { id: 'apple', label: 'Apple Pie' },
                { id: 'black', label: 'Blackberry Pie' },
                { id: 'pump', label: 'Pumpkin Pie' },
            ],
        },
        {
            name: 'Best Zelda',
            type: 'select',
            value: '',
            selectOptions: [
                { id: 'oot', label: 'Ocarina of Time' },
                { id: 'ww', label: 'Wind Waker' },
                { id: 'botw', label: 'Breath of the Wild' },
            ],
        },
    ],
};

export const CustomFooter = Template.bind({});
CustomFooter.args = {
    title: 'Custom Footer',
    customFooter: (
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Button
                icon={'arrowCircleLeft'}
                text={'Cancel Install'}
                theme={'secondary'}
                size="regular"
            />
            <Button
                icon={'arrowCircleRight'}
                text={'Confirm'}
                theme={'primary'}
                type="submit"
                size="regular"
            />
        </div>
    ),
    onSubmit: (e) => console.log(e),
    data: [
        {
            name: 'Best pie',
            type: 'select',
            value: '',
            selectOptions: [
                { id: 'apple', label: 'Apple Pie' },
                { id: 'black', label: 'Blackberry Pie' },
                { id: 'pump', label: 'Pumpkin Pie' },
            ],
        },
        {
            name: 'Best Zelda',
            type: 'select',
            value: '',
            selectOptions: [
                { id: 'oot', label: 'Ocarina of Time' },
                { id: 'ww', label: 'Wind Waker' },
                { id: 'botw', label: 'Breath of the Wild' },
            ],
        },
    ],
};

export const DisabledFrom = Template.bind({});
DisabledFrom.args = {
    title: 'This is a disabled Form',
    buttonConfig: {
        theme: 'primary',
        isLoading: true,
        loadingText: 'Logging In',
        text: 'Login',
    },
    isDisabled: true,
    data: [
        {
            name: 'Email',
            type: 'email',
            value: '',
            key: 'LOGIN_EMAIL',
            validation: {
                required: true,
            },
        },
        {
            name: 'Password',
            type: 'password',
            key: 'LOGIN_PASSWORD',
            value: '',
            validation: {
                required: true,
            },
        },
    ],
    onSubmit: (e) => console.log(e),
};
