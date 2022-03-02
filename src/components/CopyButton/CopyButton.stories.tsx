import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import CopyButton from '../CopyButton/CopyButton';
import { Typography } from '../Typography';

export default {
    title: '4.UI/CopyButton',
    component: CopyButton,
} as ComponentMeta<typeof CopyButton>;

const onTestCopy = (e: any) => {
    console.log('event: ', e);
};

const Template: ComponentStory<typeof CopyButton> = (args) => (
    <>
        <Typography>With Love from Developers</Typography>
        <CopyButton {...args} text="With Love from Developers" />
    </>
);

export const CopyButtonDefault = Template.bind({});
CopyButtonDefault.args = { onCopy: onTestCopy };
