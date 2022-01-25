import { ComponentStory, ComponentMeta } from '@storybook/react';
import CreditCard from './CreditCard';
import React from 'react';

export default {
    title: 'UI/CreditCard',
    component: CreditCard,
} as ComponentMeta<typeof CreditCard>;

const Template: ComponentStory<typeof CreditCard> = (args) => {
    return <CreditCard {...args} />;
};

export const Mastercard = Template.bind({});
Mastercard.args = {
    id: 'marty-mc-fly-cc-id',
    isExpired: false,
    name: 'Marty McFly',
    type: 'visa',
    lastDigits: '1177',
    expiresAt: {
        month: '04',
        year: '22',
    },
};

export const MastercardExpired = Template.bind({});
MastercardExpired.args = {
    id: 'marty-mc-fly-cc-id',
    isExpired: true,
    name: 'Marty McFly',
    type: 'mastercard',
    lastDigits: '1177',
    expiresAt: {
        month: '11',
        year: '21',
    },
};
