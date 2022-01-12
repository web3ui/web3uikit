import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Select from './Select';

export default {
    title: 'Interaction/Select',
    component: Select,
} as ComponentMeta<typeof Select>;

const testEvent = (event: React.ChangeEvent<HTMLInputElement>) =>
    console.log(event.target);

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

const onTestOptionChange = (e: any) => {
    console.log(e)
}

export const Regular = Template.bind({});
Regular.args = {
    options: [
        {
            label: "Polygon",
            value: "polygon"
        },
        {
            label: "Ethereum",
            value: "eth"
        },
        {
            label: "Binance",
            value: "bsc"
        },
        {
            label: "Avalanche",
            value: "avax"
        }
    ],
    // onOptionChange: onTestOptionChange,
    label: "Label Text"
};