import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import Todo from './Todo';
import type { TodoState } from './types';

export default {
    title: '4.UI/Todo',
    component: Todo,
} as ComponentMeta<typeof Todo>;

const Template: ComponentStory<typeof Todo> = (args) => <Todo {...args} />;

export const DefaultTodo = Template.bind({});
DefaultTodo.args = {
    todos: [],
    label: 'Enter IP',
};

export const WithInitialTodos = Template.bind({});
WithInitialTodos.args = {
    todos: [
        { id: 1, text: '192.168. 1.1' },
        { id: 2, text: '192.168. 1.1' },
        { id: 3, text: '192.168. 1.1' },
    ] as TodoState[],
    label: 'Enter IP',
    buttonText: 'Add new IP',
};

export const FullWidthTodos = Template.bind({});
FullWidthTodos.args = {
    todos: [
        { id: 1, text: '192.168. 1.1' },
        { id: 2, text: '192.168. 1.1' },
        { id: 3, text: '192.168. 1.1' },
    ] as TodoState[],
    buttonText: 'Add new IP',
    fullWidth: true,
    label: 'Enter IP',
};

export const TodoInputPattern = Template.bind({});
TodoInputPattern.args = {
    todos: [
        { id: 1, text: '192.168. 1.1' },
        { id: 2, text: '192.168. 1.1' },
        { id: 3, text: '192.168. 1.1' },
    ] as TodoState[],
    buttonText: 'Add new IP',
    fullWidth: true,
    label: 'Enter IP',
    pattern: '/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/',
};
