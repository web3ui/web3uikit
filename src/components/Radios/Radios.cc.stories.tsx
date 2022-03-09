import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Radios from './Radios';

export default {
    title: '2.Forms/CreditCard',
    component: Radios,
    parameters: {
        actions: {
            handles: ['onChange', 'changed'],
        },
    },
} as ComponentMeta<typeof Radios>;

const Template: ComponentStory<typeof Radios> = (args) => <Radios {...args} />;

export const CreditCardSelector = Template.bind({});
CreditCardSelector.args = {
    id: 'radios',
    items: [
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
            id: 'marty-mc-fly-amex-id',
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
    title: 'How would you like pay for that?',
};
