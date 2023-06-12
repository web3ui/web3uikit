import { ComponentStory, ComponentMeta } from '@storybook/react';
import ButtonOutline from './ButtonOutline';

export default {
    title: '9.NextJS/Button/Outline',
    component: ButtonOutline,
    argTypes: { onClick: { action: 'clicked' } },
} as ComponentMeta<typeof ButtonOutline>;

const Template: ComponentStory<typeof ButtonOutline> = (args) => (
    <ButtonOutline {...args} />
);

export const Outline = Template.bind({});
Outline.args = {
    children: <span>Good to use with NextJS</span>,
};

export const Disabled = Template.bind({});
Disabled.args = {
    children: <span>Good to use with NextJS</span>,
    disabled: true,
};

export const SizeXL = Template.bind({});
SizeXL.args = {
    children: <span>Good to use with NextJS</span>,
    size: 'xl',
};

export const SizeLarge = Template.bind({});
SizeLarge.args = {
    children: <span>Good to use with NextJS</span>,
    size: 'large',
};

export const SizeRegular = Template.bind({});
SizeRegular.args = {
    children: <span>Good to use with NextJS</span>,
    size: 'regular',
};

export const SizeSmall = Template.bind({});
SizeSmall.args = {
    children: <span>Good to use with NextJS</span>,
    size: 'small',
};
