import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import TextArea from './TextArea';

export default {
    title: 'Interaction/TextArea',
    component: TextArea,
} as ComponentMeta<typeof TextArea>;

// const testEvent = (event: React.ChangeEvent<HTMLTextAreaElement>) =>
//     console.log(event.target);

// const Template: ComponentStory<typeof TextArea> = (args) => (
//     <TextArea {...args} />
// );


const testEvent = (event: React.ChangeEvent<HTMLTextAreaElement>) =>
    console.log(event.target);

const Template: ComponentStory<typeof TextArea> = (args) => <TextArea {...args} />;

export const Default = Template.bind({});
Default.args = {
    onChange: testEvent,
    label: 'Label text',
    name: 'Test TextArea Default',
    placeholder: 'Type here',
    state: undefined,
};

export const Error = Template.bind({});
Error.args = {
    onChange: testEvent,
    label: 'Error',
    name: 'Test TextArea error',
    state: 'error',
};

export const TextTextAreaConfirmed = Template.bind({});
TextTextAreaConfirmed.args = {
    onChange: testEvent,
    label: 'Confirmed',
    name: 'Test TextArea confirmed',
    state: 'confirmed',
};