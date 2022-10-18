import React, {useState} from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Slider from './Slider';

export default {
    title: '2.Forms/Slider',
    component: Slider,
} as ComponentMeta<typeof Slider>;

const Template: ComponentStory<typeof Slider> = (args) => <Slider {...args} />;



export const Default = Template.bind({});
Default.args = {
    rangeMax: 100,
    rangeMin: 0,
    rangeLabel: 'Storybook Label',
    rangeId: 'one',
    rangeValue: 22,
    disabled: false, 
    
};

export const Step = Template.bind({});
Step.args = {
    rangeMax: 1000,
    rangeMin: 0,
    rangeLabel: 'Stepped Slider',
    rangeValue: 42,
    Step:100
};

export const Disabled = Template.bind({});
Disabled.args = {
    rangeMax: 1000,
    rangeMin: 0,
    rangeLabel: 'Disabled',
    disabled: true,
    rangeValue: 22,
};
