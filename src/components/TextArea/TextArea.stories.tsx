import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import TextArea from './TextArea';

export default {
    title: 'Interaction/TextArea',
    component: TextArea,
} as ComponentMeta<typeof TextArea>;

// const testEvent = (event: React.ChangeEvent<HTMLInputElement>) =>
// 	console.log(event.target);

const Template: ComponentStory<typeof TextArea> = (args) => (
    <TextArea {...args} />
);

export const One = Template.bind({});
One.args = {
    id: 'TextArea',
    label: 'Label text',
    placeholder: 'Type here',
};
