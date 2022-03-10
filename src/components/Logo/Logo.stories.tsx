import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import Logo from '../Logo/Logo';

export default {
    title: '6.Graphic/Logo',
    component: Logo,
} as ComponentMeta<typeof Logo>;

const Template: ComponentStory<typeof Logo> = (args) => <Logo {...args} />;

export const LogoIconWhite = Template.bind({});
LogoIconWhite.args = {
    theme: 'icon',
    color: 'white',
};

export const LogoIconBlack = Template.bind({});
LogoIconBlack.args = {
    theme: 'icon',
    color: 'black',
};

export const LogoIconBlue = Template.bind({});
LogoIconBlue.args = {
    theme: 'icon',
    color: 'blue',
};

export const LogoDefaultWhite = Template.bind({});
LogoDefaultWhite.args = {
    theme: 'default',
    color: 'white',
};

export const LogoDefaultBlack = Template.bind({});
LogoDefaultBlack.args = {
    theme: 'default',
    color: 'black',
};

export const LogoDefaultBlue = Template.bind({});
LogoDefaultBlue.args = {
    theme: 'default',
    color: 'blue',
};

export const VisaRegular = Template.bind({});
VisaRegular.args = {
    theme: 'visa',
    size: 'regular',
};

export const VisaSmall = Template.bind({});
VisaSmall.args = {
    theme: 'visa',
    size: 'small',
};

export const MastercardRegular = Template.bind({});
MastercardRegular.args = {
    theme: 'mastercard',
    size: 'regular',
};

export const MastercardSmall = Template.bind({});
MastercardSmall.args = {
    theme: 'mastercard',
    size: 'small',
};

export const AmexRegular = Template.bind({});
AmexRegular.args = {
    theme: 'amex',
    size: 'regular',
};

export const AmexSmall = Template.bind({});
AmexSmall.args = {
    theme: 'mastercard',
    size: 'small',
};

export const DinersRegular = Template.bind({});
DinersRegular.args = {
    theme: 'diners',
    size: 'regular',
};

export const DinersSmall = Template.bind({});
DinersSmall.args = {
    theme: 'mastercard',
    size: 'small',
};
