import { ComponentStory, ComponentMeta } from '@storybook/react';
import ProgressBar from './ProgressBar';
import React from 'react';
import { color } from '@web3uikit/styles';

export default {
    title: '4.UI/ProgressBar',
    component: ProgressBar,
    argTypes: {},
} as ComponentMeta<typeof ProgressBar>;

const Template: ComponentStory<typeof ProgressBar> = (args) => (
    <ProgressBar {...args} />
);

export const Default = Template.bind({});
Default.args = {
    id: 'uniqueID',
    title: 'Title',
    variant: 'h1',
    titleColor: color.blue70,
    progressBarBgColor: '#1A3656',
    progressBarLineColor:
        'linear-gradient(88.37deg, #0F7FFF 1.38%, #57A5FF 98.62%)',
    value: 2200,
    total: 10000,
    name: 'beans',
    nameColor: '#85B3DB',
};
