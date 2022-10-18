import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Slider from './Slider';
import { useArgs } from '@storybook/addons';
import { action } from '@storybook/addon-actions';
import { color } from '@web3uikit/styles';

export default {
    title: '2.Forms/Slider',
    component: Slider,
} as ComponentMeta<typeof Slider>;

const Template: ComponentStory<typeof Slider> = (args) => {
    const [_, updateArgs] = useArgs();
    const handleChange = (val: string) => {
        action('value changed=> ')(val);
        updateArgs({ value: val });
    };
    return <Slider {...args} onChange={handleChange} />;
};

export const Default = Template.bind({});
Default.args = {
    max: 100,
    min: 0,
    id: 'one',
    value: 22,
    disabled: false,
    labelBgColor: color.blue30,
    bgColor: color.blue70,
    handleLabel: (val) => val + 'M',
};

export const Step = Template.bind({});
Step.args = {
    max: 1000,
    min: 0,
    value: 42,
    step: 100,
};

export const Disabled = Template.bind({});
Disabled.args = {
    max: 1000,
    min: 0,
    disabled: true,
    value: 22,
};
