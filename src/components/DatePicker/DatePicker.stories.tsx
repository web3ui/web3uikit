import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import DatePicker from './DatePicker';

export default {
    title: '2.Forms/DatePicker',
    component: DatePicker,
    argTypes: { onChange: { action: 'changed' } },
} as ComponentMeta<typeof DatePicker>;

const Template: ComponentStory<typeof DatePicker> = (args) => (
    <DatePicker {...args} />
);

export const Demo = Template.bind({});
Demo.args = {
    id: 'date-picker',
};

export const Month = Template.bind({});
Month.args = {
    id: 'date-picker',
    type: 'month',
};

export const WithLabel = Template.bind({});
WithLabel.args = {
    id: 'date-picker',
    label: 'hi there hows things',
};

export const StaticDate = Template.bind({});
StaticDate.args = {
    id: 'date-picker',
    value: '1999-12-31',
};

export const Validation = Template.bind({});
Validation.args = {
    id: 'date-picker',
    value: '',
    validation: {
        required: true,
        min: '2000-01-01',
        max: '2050-12-31',
    },
};
