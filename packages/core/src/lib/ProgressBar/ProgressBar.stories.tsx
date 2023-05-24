import { ComponentStory, ComponentMeta } from '@storybook/react';
import ProgressBar from './ProgressBar';
import { color } from '@web3uikit/styles';
import { Typography } from '../Typography';

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
    showInfo: false,
    total: 10000,
    value: 2200,
};

export const Custom = Template.bind({});
Custom.args = {
    id: 'uniqueID',
    name: 'beans',
    nameColor: '#85B3DB',
    progressBarBgColor: color.blue60,
    progressBarLineColor:
        'linear-gradient(88.37deg, #0F7FFF 1.38%, #57A5FF 98.62%)',
    showInfo: true,
    title: 'Headline',
    titleColor: color.blue70,
    total: 10000,
    value: 2200,
};
