import { composeStories } from '@storybook/testing-react';
import { screen } from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom';
import * as stories from './Todo.stories';

const {
    DefaultTodo, WithInitialTodos, FullWidthTodos
} = composeStories(stories);

const todoTestId = 'test-todo';
const todoLabelId = 'test-label';
const todoButtonId = 'test-button';
const todoContentId = 'test-todo_content';

let container: HTMLDivElement;

export const testCompId = 'test-new-comp';

describe('Todos - Default', () => {
    const labelText = DefaultTodo.args?.label;

    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
        ReactDOM.render(<DefaultTodo label={labelText} />, container);
    });
    afterEach(() => {
        document.body.removeChild(container);
        container.remove();
    });

    it('renders the component', () => {
        const element = container.querySelector(
            `[data-testid="${todoTestId}"]`,
        );
        expect(element).not.toBeNull();
    });

    it('renders label text correctly', () => {
        const element = container.querySelector(
            `[data-testid="${todoLabelId}"]`,
        );
        expect(element?.textContent).toBe(labelText);
    });
});

describe('Todos - WithInitialTodos', () => {
    const labelText = WithInitialTodos.args?.label;
    const todos = WithInitialTodos.args?.todos;
    const buttonText = WithInitialTodos.args?.buttonText;

    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
        ReactDOM.render(
            <WithInitialTodos
                label={labelText}
                todos={todos}
                buttonText={buttonText}
            />,
            container,
        );
    });
    afterEach(() => {
        document.body.removeChild(container);
        container.remove();
    });

    it('renders the component', () => {
        const element = container.querySelector(
            `[data-testid="${todoTestId}"]`,
        );
        expect(element).not.toBeNull();
    });

    it('renders label text correctly', () => {
        const element = container.querySelector(
            `[data-testid="${todoLabelId}"]`,
        );
        expect(element?.textContent).toBe(labelText);
    });

    it('renders button text correctly', () => {
        const element = container.querySelector(
            `[data-testid="${todoButtonId}"]`,
        );
        expect(element?.textContent).toContain(buttonText);
    });

    it('renders passed todos data correctly', async () => {
        const elements = await screen.findAllByTestId('test-tag-id');

        expect(elements.length).toBe(todos?.length);
    });
});

describe('Todos - FullWidthTodos', () => {
    const labelText = FullWidthTodos.args?.label;
    const todos = FullWidthTodos.args?.todos;
    const buttonText = FullWidthTodos.args?.buttonText;
    const fullWidth = FullWidthTodos.args?.fullWidth;

    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
        ReactDOM.render(
            <FullWidthTodos
                todos={todos}
                label={labelText}
                fullWidth={fullWidth}
                buttonText={buttonText}
            />,
            container,
        );
    });
    afterEach(() => {
        document.body.removeChild(container);
        container.remove();
    });

    it('renders the component', () => {
        const element = container.querySelector(
            `[data-testid="${todoTestId}"]`,
        );
        expect(element).not.toBeNull();
    });

    it('renders label text correctly', () => {
        const element = container.querySelector(
            `[data-testid="${todoLabelId}"]`,
        );
        expect(element?.textContent).toBe(labelText);
    });

    it('renders button text correctly', () => {
        const element = container.querySelector(
            `[data-testid="${todoButtonId}"]`,
        );
        expect(element?.textContent).toContain(buttonText);
    });

    it('renders passed todos data correctly', async () => {
        const elements = await screen.findAllByTestId('test-tag-id');

        expect(elements.length).toBe(todos?.length);
    });

    it('renders todos content with full width', async () => {
        const todoContent = screen.getByTestId(todoContentId);

        const styles = todoContent && (getComputedStyle(todoContent) as any);
        const flexDirection = styles?._values?.['flex-direction'];

        expect(flexDirection).toBe('column');
    });
});

