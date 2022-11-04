import * as stories from '../InputBase.stories';
import { expect, test, vi } from 'vitest';
import { fireEvent } from '@testing-library/react';
import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import { inputBaseTestValues } from '../values';

const {
    autoComplete,
    defaultValue,
    disabled,
    name,
    placeholder,
    required,
    testId,
    type,
} = inputBaseTestValues;

const {
    InputBaseDefault,
    InputBaseDisabled,
    InputBaseFocus,
    InputBaseProps,
    InputBaseNumber,
    InputBaseValidation,
} = composeStories(stories);

const testEvent = vi.fn();

test('Renders Input Base', () => {
    render(<InputBaseDefault />);
    const element: HTMLInputElement = screen.getByTestId(testId);
    expect(element).not.toBeNull();
    expect(element.id).toBe(InputBaseDefault.args?.id);
});

test('Renders Input Autofocus change & blur', () => {
    render(
        <InputBaseFocus onChange={(e) => testEvent(e.currentTarget.value)} />,
    );
    const element: HTMLInputElement = screen.getByTestId(testId);
    expect(element).not.toBeNull();
    // no need to focus() its already in focus
    fireEvent.change(element, { target: { value: 'foo' } });
    expect(testEvent).toHaveBeenCalledWith('foo');
    element.blur();
    expect(testEvent).toHaveBeenCalledWith('foo');
});

test('Renders Input Base Props', () => {
    render(<InputBaseProps />);
    const element: HTMLInputElement = screen.getByTestId(testId);
    expect(element).not.toBeNull();
    expect(element.getAttribute('name')).toBe(name);
    expect(element.getAttribute('type')).toBe(type);
    expect(element.getAttribute('value')).toBe(defaultValue);
    expect(element.hasAttribute('autoComplete')).toBe(autoComplete);
});

test('Renders Input disabled & placeholder', () => {
    render(<InputBaseDisabled />);
    const element: HTMLInputElement = screen.getByTestId(testId);
    expect(element).not.toBeNull();
    expect(element.getAttribute('placeholder')).toBe(placeholder);
    expect(element.hasAttribute('disabled')).toBe(disabled);
});

test('Renders Input type with min and max', () => {
    render(<InputBaseNumber />);
    const element: HTMLInputElement = screen.getByTestId(testId);
    expect(element).not.toBeNull();
    expect(element.getAttribute('type')).toBe(InputBaseNumber.args?.type);
    expect(element.getAttribute('max')).toBe(String(InputBaseNumber.args?.max));
    expect(element.getAttribute('min')).toBe(String(InputBaseNumber.args?.min));
});

test('Renders Input validation', () => {
    render(<InputBaseValidation />);
    const element: HTMLInputElement = screen.getByTestId(testId);
    expect(element).not.toBeNull();
    expect(element.getAttribute('maxlength')).toBe(
        String(InputBaseValidation.args?.maxLength),
    );
    expect(element.getAttribute('minlength')).toBe(
        String(InputBaseValidation.args?.minLength),
    );
    expect(element.getAttribute('pattern')).toBe(
        String(InputBaseValidation.args?.regExp),
    );
    expect(element.getAttribute('type')).toBe(InputBaseValidation.args?.type);
    expect(element.hasAttribute('required')).toBe(required);
});
