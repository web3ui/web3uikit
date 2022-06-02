import { composeStories } from '@storybook/testing-react';
import { render, screen } from '@testing-library/react';
import React from 'react';
import * as stories from './Todo.stories';

const { DefaultTodo, WithInitialTodos, FullWidthTodos } =
    composeStories(stories);

const todoTestId = 'test-todo';
const todoLabelId = 'test-label';
const todoButtonId = 'test-button';
const todoElementId = 'test-tag-id';
const todoContentId = 'test-todo_content';

export const testCompId = 'test-new-comp';

test('DefaultTodo', async () => {
    const labelText = DefaultTodo.args?.label;
    render(<DefaultTodo label={labelText} />);

    const element = screen.getByTestId(todoTestId);
    expect(element).not.toBeNull();

    const labelElement = screen.getByTestId(todoLabelId);
    expect(labelElement?.textContent).toContain(labelText);
});

test('WithInitialTodos', async () => {
    const labelText = WithInitialTodos.args?.label;
    const todos = WithInitialTodos.args?.todos;
    const buttonText = WithInitialTodos.args?.buttonText;

    render(
        <WithInitialTodos
            label={labelText}
            todos={todos}
            buttonText={buttonText}
        />,
    );

    const element = screen.getByTestId(todoTestId);
    expect(element).not.toBeNull();

    const labelElement = screen.getByTestId(todoLabelId);
    expect(labelElement?.textContent).toContain(labelText);

    const buttonElement = screen.getByTestId(todoButtonId);
    expect(buttonElement?.textContent).toContain(buttonText);

    const todoElement = await screen.findAllByTestId(todoElementId);
    expect(todoElement?.length).toBe(todos?.length);
});

test('FullWidthTodos', async () => {
    const labelText = FullWidthTodos.args?.label;
    const todos = FullWidthTodos.args?.todos;
    const buttonText = FullWidthTodos.args?.buttonText;
    const fullWidth = FullWidthTodos.args?.fullWidth;

    render(
        <FullWidthTodos
            label={labelText}
            todos={todos}
            buttonText={buttonText}
            fullWidth={fullWidth}
        />,
    );

    const element = screen.getByTestId(todoTestId);
    expect(element).not.toBeNull();

    const labelElement = screen.getByTestId(todoLabelId);
    expect(labelElement?.textContent).toContain(labelText);

    const buttonElement = screen.getByTestId(todoButtonId);
    expect(buttonElement?.textContent).toContain(buttonText);

    const todoElement = await screen.findAllByTestId(todoElementId);
    expect(todoElement?.length).toBe(todos?.length);

    const todoContent = screen.getByTestId(todoContentId);
    const styles = todoContent && (getComputedStyle(todoContent) as any);
    const flexDirection = styles?._values?.['flex-direction'];

    expect(flexDirection).toBe('column');
});
