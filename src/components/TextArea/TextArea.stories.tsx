import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import TextArea from './TextArea';

export default {
    title: '2.Forms/TextArea',
    component: TextArea,
    parameters: {
        actions: {
            handles: ['onChange', 'changed'],
        },
    },
} as ComponentMeta<typeof TextArea>;

const Template: ComponentStory<typeof TextArea> = (args) => (
    <TextArea {...args} />
);

export const Standard = Template.bind({});
Standard.args = {
    label: 'Standard',
    name: 'Test TextArea Default',
    placeholder: 'Type here field',
};

export const Default = Template.bind({});
Default.args = {
    label: 'Label text',
    name: 'Test TextArea Default',
    placeholder: 'Type here field',
    value: 'Test Value',
};

export const Error = Template.bind({});
Error.args = {
    label: 'Error',
    name: 'Test TextArea error',
    placeholder: 'Type here field',
    state: 'error',
    value: 'Test Value',
};

export const Disabled = Template.bind({});
Disabled.args = {
    label: 'Label text',
    name: 'Test TextArea disabled',
    placeholder: 'Type here field',
    state: 'disabled',
    value: 'Test Value',
};

export const Confirmed = Template.bind({});
Confirmed.args = {
    label: 'Confirmed',
    name: 'Test TextArea confirmed',
    placeholder: 'Type here field',
    state: 'confirmed',
    value: 'Test Value',
};

export const CustomWidth = Template.bind({});
CustomWidth.args = {
    label: 'Standard',
    name: 'Test TextArea Default',
    placeholder: 'Type here field',
    width: '100%',
};
