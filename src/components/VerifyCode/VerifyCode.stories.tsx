import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import VerifyCode from './VerifyCode';

export default {
    title: '2.Forms/VerifyCode',
    component: VerifyCode,
} as ComponentMeta<typeof VerifyCode>;

const Template: ComponentStory<typeof VerifyCode> = (args) => (
    <VerifyCode {...args} />
);

export const Default = Template.bind({});
