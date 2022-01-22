import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import color from '../../styles/colors';
import Loading from './Loading';

export default {
    title: 'UI/Loading',
    component: Loading,
} as ComponentMeta<typeof Loading>;

const Template: ComponentStory<typeof Loading> = (args) => (
    <Loading {...args} />
);

export const Spinner = Template.bind({});
Spinner.args = {};

export const CustomSizeSpinner = Template.bind({});
CustomSizeSpinner.args = {
    size: 90,
};

export const CustomRingColors = Template.bind({});
CustomRingColors.args = {
    ringColor: color.green,
    ballColor: color.yellowDark,
};
