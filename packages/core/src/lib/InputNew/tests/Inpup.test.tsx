import * as stories from '../Input.stories';
import { expect, test, vi } from 'vitest';
import { act, fireEvent, render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';

const inputWrapDivId = 'test-input';
const inputTestId = 'test-input-input';
const labelTestId = 'test-input-label';
const feedbackTestId = 'test-input-feedback';

const {
    InputDefault,
    InputEmail,
    InputError,
    InputNumber,
    InputOpen,
    InputValue,
} = composeStories(stories);

const testBlurEvent = vi.fn();
const testChangeEvent = vi.fn();
const testFocusEvent = vi.fn();

test('Renders Input', () => {
    act(() => {
        render(<InputDefault />);
    });
    const element: HTMLDivElement = screen.getByTestId(inputWrapDivId);
    const input: HTMLInputElement = screen.getByTestId(inputTestId);
    const label: HTMLLabelElement = screen.getByTestId(labelTestId);
    expect(element).not.toBeNull();
    expect(element.classList.contains('blank')).toBe(true);
    expect(element.classList.contains('filled')).toBe(
        Boolean(InputDefault.args?.openByDefault),
    );
    expect(input.value).toBe('');
    expect(input.placeholder).toBe(InputDefault.args?.placeholder);
    expect(label.textContent).toBe(InputDefault.args?.label);
});

test('Input blur event', () => {
    act(() => {
        render(
            <InputDefault
                autoFocus={true}
                onBlur={(e) => testBlurEvent(e.target.value)}
            />,
        );
    });
    const element: HTMLDivElement = screen.getByTestId(inputWrapDivId);
    const input: HTMLInputElement = screen.getByTestId(inputTestId);
    expect(element.classList.contains('focus')).toBe(true);
    input.blur();
    expect(testBlurEvent).toHaveBeenCalled();
});

test('Input change event', () => {
    act(() => {
        render(
            <InputDefault onChange={(e) => testChangeEvent(e.target.value)} />,
        );
    });
    const element: HTMLDivElement = screen.getByTestId(inputWrapDivId);
    const input: HTMLInputElement = screen.getByTestId(inputTestId);
    expect(element.classList.contains('blank')).toBe(true);
    input.focus();
    fireEvent.change(input, { target: { value: 'foo' } });
    expect(testChangeEvent).toHaveBeenCalledWith('foo');
});

test('Input focus event', () => {
    act(() => {
        render(
            <InputDefault onFocus={(e) => testFocusEvent(e.target.value)} />,
        );
    });
    const element: HTMLDivElement = screen.getByTestId(inputWrapDivId);
    const input: HTMLInputElement = screen.getByTestId(inputTestId);
    expect(element.classList.contains('blur')).toBe(true);
    input.focus();
    expect(testFocusEvent).toHaveBeenCalled();
});

test('Renders InputOpen Style Class', () => {
    act(() => {
        render(<InputOpen />);
    });
    const element: HTMLDivElement = screen.getByTestId(inputWrapDivId);
    expect(element.classList.contains('filled')).toBe(
        InputOpen.args?.openByDefault,
    );
});

test('Renders Number Input with validation', () => {
    act(() => {
        render(<InputNumber />);
    });
    const input: HTMLInputElement = screen.getByTestId(inputTestId);
    expect(input.type).toBe(InputNumber.args?.type);
    expect(input.max).toBe(String(InputNumber.args?.validation?.max));
    expect(input.min).toBe(String(InputNumber.args?.validation?.min));
});

test('Renders Email Input with validation', () => {
    act(() => {
        render(<InputEmail />);
    });
    const input: HTMLInputElement = screen.getByTestId(inputTestId);
    expect(input.type).toBe(InputEmail.args?.type);
    expect(input.required).toBe(InputEmail.args?.validation?.required);
    expect(input.maxLength).toBe(InputEmail.args?.validation?.maxLength);
    expect(input.minLength).toBe(InputEmail.args?.validation?.minLength);
    expect(input.pattern).toBe(InputEmail.args?.validation?.pattern);
});

test('Renders Input with value', () => {
    act(() => {
        render(<InputValue />);
    });
    const element: HTMLDivElement = screen.getByTestId(inputWrapDivId);
    const input: HTMLInputElement = screen.getByTestId(inputTestId);
    expect(input.value).toBe(InputValue.args?.value);
    expect(element.classList.contains('filled')).toBe(
        Boolean(InputValue.args?.value),
    );
});

test('Renders Input Error', () => {
    act(() => {
        render(<InputError />);
    });
    const feedback: HTMLDivElement = screen.getByTestId(feedbackTestId);
    expect(feedback).not.toBeNull();
    expect(feedback.textContent).toBe(InputError.args?.errorMessage);
});
