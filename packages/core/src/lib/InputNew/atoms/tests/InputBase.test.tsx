import * as stories from '../stories/InputBase.stories';
import { expect, test, vi } from 'vitest';
import { fireEvent } from '@testing-library/react';
import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import { testInputId } from '../values';

const {
    InputBaseDefault,
    InputBaseFocus,
    InputBasePassword,
    InputBaseDisabled,
    InputBaseValidation,
    InputBaseNumber,
} = composeStories(stories);

const testEvent = vi.fn();

test('Renders Input Base', () => {
    render(<InputBaseDefault />);
    const element: HTMLInputElement = screen.getByTestId(testInputId);
    expect(element).not.toBeNull();
    expect(element.id).toBe(InputBaseDefault.args?.id);
});

test('Renders Input Autofocus change & blur', () => {
    render(
        <InputBaseFocus onChange={(e) => testEvent(e.currentTarget.value)} />,
    );
    const element: HTMLInputElement = screen.getByTestId(testInputId);
    expect(element).not.toBeNull();
    // no need to focus() its already in focus
    fireEvent.change(element, { target: { value: 'foo' } });
    expect(testEvent).toHaveBeenCalledWith('foo');
    element.blur();
    expect(testEvent).toHaveBeenCalledWith('foo');
});

test('Renders Input Base Props', () => {
    render(<InputBasePassword />);
    const element: HTMLInputElement = screen.getByTestId(testInputId);
    expect(element).not.toBeNull();
    expect(element.getAttribute('name')).toBe(InputBasePassword.args?.name);
    expect(element.getAttribute('type')).toBe(InputBasePassword.args?.type);
    expect(element.getAttribute('value')).toBe(
        InputBasePassword.args?.defaultValue,
    );
    expect(element.hasAttribute('autoComplete')).toBe(
        InputBasePassword.args?.autoComplete,
    );
});

test('Renders Input disabled & placeholder', () => {
    render(<InputBaseDisabled />);
    const element: HTMLInputElement = screen.getByTestId(testInputId);
    expect(element).not.toBeNull();
    expect(element.getAttribute('placeholder')).toBe(
        InputBaseDisabled.args?.placeholder,
    );
    expect(element.hasAttribute('disabled')).toBe(
        InputBaseDisabled.args?.disabled,
    );
});

test('Renders Input type with min and max', () => {
    render(<InputBaseNumber />);
    const element: HTMLInputElement = screen.getByTestId(testInputId);
    expect(element).not.toBeNull();
    expect(element.getAttribute('type')).toBe(InputBaseNumber.args?.type);
    expect(element.getAttribute('max')).toBe(String(InputBaseNumber.args?.max));
    expect(element.getAttribute('min')).toBe(String(InputBaseNumber.args?.min));
});

test('Renders Input validation', () => {
    render(<InputBaseValidation />);
    const element: HTMLInputElement = screen.getByTestId(testInputId);
    expect(element).not.toBeNull();
    expect(element.getAttribute('maxlength')).toBe(
        String(InputBaseValidation.args?.maxLength),
    );
    expect(element.getAttribute('minlength')).toBe(
        String(InputBaseValidation.args?.minLength),
    );
    expect(element.getAttribute('pattern')).toBe(
        String(InputBaseValidation.args?.pattern),
    );
    expect(element.getAttribute('type')).toBe(InputBaseValidation.args?.type);
    expect(element.hasAttribute('required')).toBe(
        InputBaseValidation.args?.required,
    );
});
