import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import Todo from './Todo';

export default {
    title: '4.UI/Todo',
    component: Todo,
} as ComponentMeta<typeof Todo>;

const Template: ComponentStory<typeof Todo> = (args) => (
    <Todo {...args} />
);

export const Default = Template.bind({});
Default.args = {

};
