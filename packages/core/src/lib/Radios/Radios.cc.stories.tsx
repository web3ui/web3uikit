import { ComponentMeta, ComponentStory } from '@storybook/react';
import { CreditCard2, Plus } from '@web3uikit/icons';
import { color } from '@web3uikit/styles';
import styled from 'styled-components';

import { Button } from '../Button';
import { Typography } from '../Typography';
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

export const CreditCardSelectorSuffix = Template.bind({});
CreditCardSelectorSuffix.args = {
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
            isRemovable: false,
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
            isRemovable: true,
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
    isRow: true,
    suffix: (
        <div style={{ height: '2rem' }}>
            <Button text="Add new card" theme="primary" />
        </div>
    ),
    title: 'How would you like pay for that?',
};

// For storybook use only
const ButtonStyled = styled.button`
    display: flex;
    gap: 20px;
    align-items: center;
    border: 2px solid rgba(153, 211, 255, 0.5);
    padding: 16px;
    border-radius: 16px;
    width: 584px;
    background: transparent;
    @media screen and (max-width: 600px) {
        width: 300px;
    }
`;

export const CreditCardSmall = Template.bind({});
CreditCardSmall.args = {
    id: 'radios',
    isRow: true,
    items: [
        {
            id: 'marty-mc-fly-visa-id',
            size: 'small',
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
            size: 'small',
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
            size: 'small',
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
            size: 'small',
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
    suffix: (
        <ButtonStyled style={{}} onClick={() => alert('Card Added!')}>
            <Plus fill={color.blue} fontSize={18} />
            <CreditCard2 width={42} height={32} />
            {/* @ts-ignore */}
            <Typography style={{ color: color.blue }} variant="caption14">
                Add payment method
            </Typography>
        </ButtonStyled>
    ),
    title: 'How would you like pay for that?',
};
