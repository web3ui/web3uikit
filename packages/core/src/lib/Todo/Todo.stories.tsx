import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import Todo from './Todo';

export default {
    title: '4.UI/Todo',
    component: Todo,
    argTypes: {
        onChange: {
            action: 'Todo array',
        },
    },
} as ComponentMeta<typeof Todo>;

const Template: ComponentStory<typeof Todo> = (args) => {
    return <Todo {...args} />;
};

export const DefaultTodo = Template.bind({});
DefaultTodo.args = {
    label: 'Enter IP',
    todos: [],
};

export const WithInitialTodos = Template.bind({});
WithInitialTodos.args = {
    buttonText: 'Add new IP',
    label: 'Enter IP',
    todos: ['192.168. 1.1', '192.168. 1.2', '192.168. 1.3'],
};

export const FullWidthTodos = Template.bind({});
FullWidthTodos.args = {
    buttonText: 'Add new IP',
    fullWidth: true,
    label: 'Enter IP',
    todos: ['192.168. 1.1', '192.168. 1.2', '192.168. 1.3'],
};

export const TodoInputPattern = Template.bind({});
TodoInputPattern.args = {
    buttonText: 'Add new IP',
    fullWidth: true,
    label: 'Enter IP',
    pattern:
        '^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$',
    todos: ['192.168. 1.1', '192.168. 1.2', '192.168. 1.3'],
};
