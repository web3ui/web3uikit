import { ComponentStory, ComponentMeta } from '@storybook/react';
import CreditCard from './CreditCard';
import React from 'react';

export default {
    title: '4.UI/CreditCard',
    component: CreditCard,
} as ComponentMeta<typeof CreditCard>;

const Template: ComponentStory<typeof CreditCard> = (args) => {
    return <CreditCard {...args} />;
};

export const Visa = Template.bind({});
Visa.args = {
    id: 'marty-mc-fly-cc-id',
    fingerprint: 'foo-bar-visa',
    isExpired: false,
    name: 'Marty McFly',
    brand: 'visa',
    lastDigits: '1177',
    expiresAt: {
        month: '04',
        year: '22',
    },
};

export const VisaExpired = Template.bind({});
VisaExpired.args = {
    id: 'marty-mc-fly-cc-id',
    fingerprint: 'foo-bar-visa',
    isExpired: true,
    name: 'Marty McFly',
    brand: 'visa',
    lastDigits: '1177',
    expiresAt: {
        month: '11',
        year: '21',
    },
};

export const MasterCard = Template.bind({});
MasterCard.args = {
    id: 'marty-mc-fly-cc-id',
    fingerprint: 'foo-bar-master',
    isExpired: false,
    name: 'Marty McFly',
    brand: 'mastercard',
    lastDigits: '1177',
    expiresAt: {
        month: '11',
        year: '24',
    },
};

export const MasterCardExpired = Template.bind({});
MasterCardExpired.args = {
    id: 'marty-mc-fly-cc-id',
    fingerprint: 'foo-bar-master',
    isExpired: true,
    name: 'Marty McFly',
    brand: 'mastercard',
    lastDigits: '1177',
    expiresAt: {
        month: '11',
        year: '21',
    },
};

export const Amex = Template.bind({});
Amex.args = {
    id: 'marty-mc-fly-cc-id',
    fingerprint: 'foo-bar-amex',
    isExpired: false,
    name: 'Marty McFly',
    brand: 'amex',
    lastDigits: '1177',
    expiresAt: {
        month: '11',
        year: '24',
    },
};

export const AmexExpired = Template.bind({});
AmexExpired.args = {
    id: 'marty-mc-fly-cc-id',
    fingerprint: 'foo-bar-amex',
    isExpired: true,
    name: 'Marty McFly',
    brand: 'amex',
    lastDigits: '1177',
    expiresAt: {
        month: '11',
        year: '21',
    },
};

export const Diners = Template.bind({});
Diners.args = {
    id: 'marty-mc-fly-cc-id',
    fingerprint: 'foo-bar-diners',
    isExpired: false,
    name: 'Marty McFly',
    brand: 'diners',
    lastDigits: '1177',
    expiresAt: {
        month: '11',
        year: '24',
    },
};

export const DinersExpired = Template.bind({});
DinersExpired.args = {
    id: 'marty-mc-fly-cc-id',
    fingerprint: 'foo-bar-diners',
    isExpired: true,
    name: 'Marty McFly',
    brand: 'diners',
    lastDigits: '1177',
    expiresAt: {
        month: '11',
        year: '21',
    },
};
