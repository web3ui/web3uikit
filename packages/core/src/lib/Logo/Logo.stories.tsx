import { ComponentStory, ComponentMeta } from '@storybook/react';

import Logo from '../Logo/Logo';

export default {
    title: '6.Graphic/Logo',
    component: Logo,
} as ComponentMeta<typeof Logo>;

const Template: ComponentStory<typeof Logo> = (args) => <Logo {...args} />;

export const MoralisIcon = Template.bind({});
MoralisIcon.args = {
    theme: 'icon',
};

export const LogoDefaultWhite = Template.bind({});
LogoDefaultWhite.args = {
    theme: 'default',
    color: 'white',
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
    color: 'blue',
};

export const VisaSmall = Template.bind({});
VisaSmall.args = {
    theme: 'visa',
    size: 'small',
    color: 'blue',
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
    color: 'blue',
};

export const AmexSmall = Template.bind({});
AmexSmall.args = {
    theme: 'amex',
    size: 'small',
    color: 'blue',
};

export const DinersRegular = Template.bind({});
DinersRegular.args = {
    theme: 'diners',
    size: 'regular',
};

export const DinersSmall = Template.bind({});
DinersSmall.args = {
    theme: 'diners',
    size: 'small',
};
