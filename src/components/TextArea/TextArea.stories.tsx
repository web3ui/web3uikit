import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import TextArea from './TextArea';

export default {
    title: 'Interaction/TextArea',
    component: TextArea,
} as ComponentMeta<typeof TextArea>;

const testEvent = (event: React.ChangeEvent<HTMLTextAreaElement>) =>
    console.log(event.target);

const Template: ComponentStory<typeof TextArea> = (args) => (
    <TextArea {...args} />
);

export const Default = Template.bind({});
Default.args = {
    onChange: testEvent,
    label: 'Label text',
    name: 'Test TextArea Default',
    placeholder: 'Type here field',
    state: undefined,
    value: 'Test Value',
};

export const Error = Template.bind({});
Error.args = {
    onChange: testEvent,
    label: 'Error',
    name: 'Test TextArea error',
    placeholder: 'Type here field',
    state: 'error',
    value: 'Test Value',
};

export const Disabled = Template.bind({});
Disabled.args = {
    onChange: testEvent,
    label: 'Label text',
    name: 'Test TextArea disabled',
    placeholder: 'Type here field',
    state: 'disabled',
    value: 'Test Value',
};

export const Confirmed = Template.bind({});
Confirmed.args = {
    onChange: testEvent,
    label: 'Confirmed',
    name: 'Test TextArea confirmed',
    placeholder: 'Type here field',
    state: 'confirmed',
    value: 'Test Value',
};
