/* eslint-disable new-cap */
import ReactDOM from 'react-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import { composeStories } from '@storybook/testing-react';
import * as stories from './Input.stories';
import color from '../../styles/colors';
import React from 'react';
import rgbToHex from '../../utils/rgbToHex';
import Input from './Input';

const {
    EmailInput,
    NumberInput,
    PasswordInput,
    PrefixCopyableHidden,
    TelInput,
    DefaultInput,
    InputConfirmed,
    InputError,
    Validation,
    ValidateNumberRange,
    ValidateValueLength,
} = composeStories(stories);

let container: HTMLDivElement;
const testValue = '';
const testPlaceholder = '';
const testInputId = 'test-input';
const testLabelId = 'test-label';
const testDivId = 'test-div';
const testEvent = jest.fn();

test("should conditionally render 'empty / filled' className", () => {
    render(<Input />);
    const div: HTMLDivElement = screen.getByTestId(testDivId);
    const input: HTMLInputElement = screen.getByTestId(testInputId);

    expect(div.classList.contains('filled')).toBeFalsy;
    expect(div.classList.contains('empty')).toBeTruthy;

    input.focus();
    fireEvent.change(input, { target: { value: 'foo' } });

    expect(input.value).toBe('foo');
    expect(div.classList.contains('filled')).toBeTruthy;
    expect(div.classList.contains('empty')).toBeFalsy;
});

test('onChange event is returned, testEvent => event.target', () => {
    render(<Input onChange={(e) => testEvent(e.target)} />);
    const div: HTMLDivElement = screen.getByTestId(testDivId);
    const input: HTMLInputElement = screen.getByTestId(testInputId);

    expect(div.classList.contains('filled')).toBeFalsy;
    expect(div.classList.contains('empty')).toBeTruthy;

    input.focus();
    fireEvent.change(input, { target: { value: 'foo' } });

    expect(input.value).toBe('foo');
    expect(testEvent).toHaveBeenCalledWith(input);
});

describe('Input - Text', () => {
    const testLabel = DefaultInput?.args?.label;
    const testName = DefaultInput?.args?.name;

    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
        ReactDOM.render(
            <DefaultInput
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                    testEvent(event.target)
                }
            />,
            container,
        );
    });
    afterEach(() => {
        document.body.removeChild(container);
        container.remove();
    });

    it('renders the component', () => {
        const input: HTMLInputElement | null = container.querySelector(
            `[data-testid="${testInputId}"]`,
        );
        expect(input).not.toBeNull();
    });

    it('renders input with the value and placeholder passed', () => {
        const input: HTMLInputElement | null = container.querySelector(
            `[data-testid="${testInputId}"]`,
        );
        expect(input).not.toBeNull();
        input && expect(input.value).toBe(testValue);
        input && expect(input.placeholder).toBe(testPlaceholder);
    });

    it('renders the correct type of input', () => {
        const input: HTMLInputElement | null = container.querySelector(
            `[data-testid="${testInputId}"]`,
        );
        expect(input).not.toBeNull();
        input && expect(input.type).toBe('text');
    });

    it('renders input with the name passed', () => {
        const input: HTMLInputElement | null = container.querySelector(
            `[data-testid="${testInputId}"]`,
        );
        expect(input).not.toBeNull();
        input && expect(input.name).toBe(testName);
    });

    it('renders input correct colors', () => {
        const input: HTMLInputElement | null = container.querySelector(
            `[data-testid="${testDivId}"]`,
        );
        const styles = input && getComputedStyle(input);
        expect(rgbToHex(styles?.outlineColor).toUpperCase()).toBe(
            color.greyLight,
        );
    });

    it('renders label text', () => {
        const label = container.querySelector(`[data-testid="${testLabelId}"]`);
        expect(label).not.toBeNull();
        expect(label?.textContent).toBe(testLabel);
    });
});

describe('Input - Text Error', () => {
    const testLabel = InputError?.args?.label;
    const testName = InputError?.args?.name;

    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
        ReactDOM.render(
            <InputError
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                    testEvent(event.target)
                }
            />,
            container,
        );
    });
    afterEach(() => {
        document.body.removeChild(container);
        container.remove();
    });

    it('renders the component', () => {
        const input: HTMLInputElement | null = container.querySelector(
            `[data-testid="${testInputId}"]`,
        );
        expect(input).not.toBeNull();
    });

    it('renders input with the value and placeholder passed', () => {
        const input: HTMLInputElement | null = container.querySelector(
            `[data-testid="${testInputId}"]`,
        );
        expect(input).not.toBeNull();
        input && expect(input.value).toBe(testValue);
        input && expect(input.placeholder).toBe(testPlaceholder);
    });

    it('renders the correct type of input', () => {
        const input: HTMLInputElement | null = container.querySelector(
            `[data-testid="${testInputId}"]`,
        );
        expect(input).not.toBeNull();
        input && expect(input.type).toBe('text');
    });

    it('renders input with the name passed', () => {
        const input: HTMLInputElement | null = container.querySelector(
            `[data-testid="${testInputId}"]`,
        );
        expect(input).not.toBeNull();
        input && expect(input.name).toBe(testName);
    });

    it('renders input correct colors', () => {
        const input: HTMLInputElement | null = container.querySelector(
            `[data-testid="${testDivId}"]`,
        );
        const styles = input && getComputedStyle(input);
        expect(rgbToHex(styles?.outlineColor).toUpperCase()).toBe(color.red);
    });

    it('renders label text', () => {
        const label = container.querySelector(`[data-testid="${testLabelId}"]`);
        expect(label).not.toBeNull();
        expect(label?.textContent).toBe(testLabel);
    });
});

describe('Input - Text Confirmed', () => {
    const testLabel = InputConfirmed?.args?.label;
    const testName = InputConfirmed?.args?.name;

    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
        ReactDOM.render(
            <InputConfirmed
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                    testEvent(event.target)
                }
            />,
            container,
        );
    });
    afterEach(() => {
        document.body.removeChild(container);
        container.remove();
    });

    it('renders the component', () => {
        const input: HTMLInputElement | null = container.querySelector(
            `[data-testid="${testInputId}"]`,
        );
        expect(input).not.toBeNull();
    });

    it('renders input with the value and placeholder passed', () => {
        const input: HTMLInputElement | null = container.querySelector(
            `[data-testid="${testInputId}"]`,
        );
        expect(input).not.toBeNull();
        input && expect(input.value).toBe(testValue);
        input && expect(input.placeholder).toBe(testPlaceholder);
    });

    it('renders the correct type of input', () => {
        const input: HTMLInputElement | null = container.querySelector(
            `[data-testid="${testInputId}"]`,
        );
        expect(input).not.toBeNull();
        input && expect(input.type).toBe('text');
    });

    it('renders input with the name passed', () => {
        const input: HTMLInputElement | null = container.querySelector(
            `[data-testid="${testInputId}"]`,
        );
        expect(input).not.toBeNull();
        input && expect(input.name).toBe(testName);
    });

    it('renders input correct colors', () => {
        const input: HTMLInputElement | null = container.querySelector(
            `[data-testid="${testDivId}"]`,
        );
        const styles = input && getComputedStyle(input);
        expect(rgbToHex(styles?.outlineColor).toUpperCase()).toBe(color.green);
    });

    it('renders label text', () => {
        const label = container.querySelector(`[data-testid="${testLabelId}"]`);
        expect(label).not.toBeNull();
        expect(label?.textContent).toBe(testLabel);
    });
});

describe('Input - Number', () => {
    const testLabel = NumberInput?.args?.label;
    const testName = NumberInput?.args?.name;
    const testType = NumberInput?.args?.type;

    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
        ReactDOM.render(
            <NumberInput
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                    testEvent(event.target)
                }
            />,
            container,
        );
    });
    afterEach(() => {
        document.body.removeChild(container);
        container.remove();
    });

    it('renders the component', () => {
        const input: HTMLInputElement | null = container.querySelector(
            `[data-testid="${testInputId}"]`,
        );
        expect(input).not.toBeNull();
    });

    it('renders input with the value and placeholder passed', () => {
        const input: HTMLInputElement | null = container.querySelector(
            `[data-testid="${testInputId}"]`,
        );
        expect(input).not.toBeNull();
        input && expect(input.value).toBe(testValue);
        input && expect(input.placeholder).toBe(testPlaceholder);
    });

    it('renders the correct type of input', () => {
        const input: HTMLInputElement | null = container.querySelector(
            `[data-testid="${testInputId}"]`,
        );
        expect(input).not.toBeNull();
        input && expect(input.type).toBe(testType);
    });

    it('renders input with the name passed', () => {
        const input: HTMLInputElement | null = container.querySelector(
            `[data-testid="${testInputId}"]`,
        );
        expect(input).not.toBeNull();
        input && expect(input.name).toBe(testName);
    });

    it('renders input correct colors', () => {
        const input: HTMLInputElement | null = container.querySelector(
            `[data-testid="${testDivId}"]`,
        );
        const styles = input && getComputedStyle(input);
        expect(rgbToHex(styles?.outlineColor).toUpperCase()).toBe(
            color.greyLight,
        );
    });

    it('renders label text', () => {
        const label = container.querySelector(`[data-testid="${testLabelId}"]`);
        expect(label).not.toBeNull();
        expect(label?.textContent).toBe(testLabel);
    });

    it('number input wont return letters', () => {
        const input: HTMLInputElement | null = container.querySelector(
            `[data-testid="${testInputId}"]`,
        );
        expect(input).not.toBeNull();
        input?.focus();
        input && fireEvent.change(input, { target: { value: 'foo' } });
        input && expect(input.value).toBe('');
    });
});

describe('Input - Password', () => {
    const testLabel = PasswordInput?.args?.label;
    const testName = PasswordInput?.args?.name;

    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
        ReactDOM.render(
            <PasswordInput
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                    testEvent(event.target)
                }
            />,
            container,
        );
    });
    afterEach(() => {
        document.body.removeChild(container);
        container.remove();
    });

    it('renders the component', () => {
        const input: HTMLInputElement | null = container.querySelector(
            `[data-testid="${testInputId}"]`,
        );
        expect(input).not.toBeNull();
    });

    it('renders input with the value and placeholder passed', () => {
        const input: HTMLInputElement | null = container.querySelector(
            `[data-testid="${testInputId}"]`,
        );
        expect(input).not.toBeNull();
        input && expect(input.value).toBe(testValue);
        input && expect(input.placeholder).toBe(testPlaceholder);
    });

    it('renders the correct type of input', () => {
        const input: HTMLInputElement | null = container.querySelector(
            `[data-testid="${testInputId}"]`,
        );
        expect(input).not.toBeNull();
        input && expect(input.type).toBe('text');
    });

    it('renders input with the name passed', () => {
        const input: HTMLInputElement | null = container.querySelector(
            `[data-testid="${testInputId}"]`,
        );
        expect(input).not.toBeNull();
        input && expect(input.name).toBe(testName);
    });

    it('renders input correct colors', () => {
        const input: HTMLInputElement | null = container.querySelector(
            `[data-testid="${testDivId}"]`,
        );
        const styles = input && getComputedStyle(input);
        expect(rgbToHex(styles?.outlineColor).toUpperCase()).toBe(
            color.greyLight,
        );
    });

    it('renders label text', () => {
        const label = container.querySelector(`[data-testid="${testLabelId}"]`);
        expect(label).not.toBeNull();
        expect(label?.textContent).toBe(testLabel);
    });
});

describe('Input - Email', () => {
    const testLabel = EmailInput?.args?.label;
    const testName = EmailInput?.args?.name;
    const testType = EmailInput?.args?.type;

    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
        ReactDOM.render(
            <EmailInput
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                    testEvent(event.target)
                }
            />,
            container,
        );
    });
    afterEach(() => {
        document.body.removeChild(container);
        container.remove();
    });

    it('renders the component', () => {
        const input: HTMLInputElement | null = container.querySelector(
            `[data-testid="${testInputId}"]`,
        );
        expect(input).not.toBeNull();
    });

    it('renders input with the value and placeholder passed', () => {
        const input: HTMLInputElement | null = container.querySelector(
            `[data-testid="${testInputId}"]`,
        );
        expect(input).not.toBeNull();
        input && expect(input.value).toBe(testValue);
        input && expect(input.placeholder).toBe(testPlaceholder);
    });

    it('renders the correct type of input', () => {
        const input: HTMLInputElement | null = container.querySelector(
            `[data-testid="${testInputId}"]`,
        );
        expect(input).not.toBeNull();
        input && expect(input.type).toBe(testType);
    });

    it('renders input with the name passed', () => {
        const input: HTMLInputElement | null = container.querySelector(
            `[data-testid="${testInputId}"]`,
        );
        expect(input).not.toBeNull();
        input && expect(input.name).toBe(testName);
    });

    it('renders input correct colors', () => {
        const input: HTMLInputElement | null = container.querySelector(
            `[data-testid="${testDivId}"]`,
        );
        const styles = input && getComputedStyle(input);
        expect(rgbToHex(styles?.outlineColor).toUpperCase()).toBe(
            color.greyLight,
        );
    });

    it('renders label text', () => {
        const label = container.querySelector(`[data-testid="${testLabelId}"]`);
        expect(label).not.toBeNull();
        expect(label?.textContent).toBe(testLabel);
    });
});

describe('Input - Tel', () => {
    const testLabel = TelInput?.args?.label;
    const testName = TelInput?.args?.name;
    const testType = TelInput?.args?.type;

    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
        ReactDOM.render(
            <TelInput
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                    testEvent(event.target)
                }
            />,
            container,
        );
    });
    afterEach(() => {
        document.body.removeChild(container);
        container.remove();
    });

    it('renders the component', () => {
        const input: HTMLInputElement | null = container.querySelector(
            `[data-testid="${testInputId}"]`,
        );
        expect(input).not.toBeNull();
    });

    it('renders input with the value and placeholder passed', () => {
        const input: HTMLInputElement | null = container.querySelector(
            `[data-testid="${testInputId}"]`,
        );
        expect(input).not.toBeNull();
        input && expect(input.value).toBe(testValue);
        input && expect(input.placeholder).toBe(testPlaceholder);
    });

    it('renders the correct type of input', () => {
        const input: HTMLInputElement | null = container.querySelector(
            `[data-testid="${testInputId}"]`,
        );
        expect(input).not.toBeNull();
        input && expect(input.type).toBe(testType);
    });

    it('renders input with the name passed', () => {
        const input: HTMLInputElement | null = container.querySelector(
            `[data-testid="${testInputId}"]`,
        );
        expect(input).not.toBeNull();
        input && expect(input.name).toBe(testName);
    });

    it('renders input correct colors', () => {
        const input: HTMLInputElement | null = container.querySelector(
            `[data-testid="${testDivId}"]`,
        );
        const styles = input && getComputedStyle(input);
        expect(rgbToHex(styles?.outlineColor).toUpperCase()).toBe(
            color.greyLight,
        );
    });

    it('renders label text', () => {
        const label = container.querySelector(`[data-testid="${testLabelId}"]`);
        expect(label).not.toBeNull();
        expect(label?.textContent).toBe(testLabel);
    });
});

describe('PrefixCopyableHidden - Text', () => {
    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
        ReactDOM.render(<PrefixCopyableHidden />, container);
    });
    afterEach(() => {
        document.body.removeChild(container);
        container.remove();
    });

    it('renders the hidden value', () => {
        const input: HTMLInputElement | null = container.querySelector(
            `[data-testid="${testInputId}"]`,
        );
        expect(input?.type).toBe('text');
    });
});

describe('Validation - Required', () => {
    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
        ReactDOM.render(<Validation />, container);
    });
    afterEach(() => {
        document.body.removeChild(container);
        container.remove();
    });

    it('renders the required attribute', () => {
        const input: HTMLInputElement | null = container.querySelector(
            `[data-testid="${testInputId}"]`,
        );
        expect(input).toHaveAttribute('required');
    });

    it('validates a required input', async () => {
        const input: HTMLInputElement | null = container.querySelector(
            `[data-testid="${testInputId}"]`,
        );
        expect(input).not.toBeNull();

        input?.focus();
        input && fireEvent.change(input, { target: { value: '' } });
        input?.blur();

        expect(input?.checkValidity()).toBeFalsy;
    });
});

describe('Validation - Number Range', () => {
    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
        ReactDOM.render(<ValidateNumberRange />, container);
    });
    afterEach(() => {
        document.body.removeChild(container);
        container.remove();
    });

    it('renders HTML validation attributes', () => {
        const input: HTMLInputElement | null = container.querySelector(
            `[data-testid="${testInputId}"]`,
        );
        expect(input).toHaveAttribute('min');
        expect(input).toHaveAttribute('max');
    });

    it('validates a the valid input', async () => {
        const goodValue =
            Number(ValidateNumberRange?.args?.validation?.numberMax) - 1;
        const input: HTMLInputElement | null = container.querySelector(
            `[data-testid="${testInputId}"]`,
        );
        expect(input).not.toBeNull();

        input?.focus();
        input && fireEvent.change(input, { target: { value: `${goodValue}` } });
        input?.blur();

        expect(input?.checkValidity()).toBeTruthy;
    });

    it('validates a the non valid input', async () => {
        const badValue =
            Number(ValidateNumberRange?.args?.validation?.numberMax) + 1;
        const input: HTMLInputElement | null = container.querySelector(
            `[data-testid="${testInputId}"]`,
        );
        expect(input).not.toBeNull();

        input?.focus();
        input && fireEvent.change(input, { target: { value: `${badValue}` } });
        input?.blur();

        expect(input?.checkValidity()).toBeFalsy;
    });
});

describe('Validation - Character length Range', () => {
    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
        ReactDOM.render(<ValidateValueLength />, container);
    });
    afterEach(() => {
        document.body.removeChild(container);
        container.remove();
    });

    it('renders HTML validation attributes', () => {
        const input: HTMLInputElement | null = container.querySelector(
            `[data-testid="${testInputId}"]`,
        );
        expect(input).toHaveAttribute('maxlength');
        expect(input).toHaveAttribute('minlength');
    });

    it('validates a the valid input', async () => {
        const goodValue = '123456789';
        const input: HTMLInputElement | null = container.querySelector(
            `[data-testid="${testInputId}"]`,
        );
        expect(input).not.toBeNull();

        input?.focus();
        input && fireEvent.change(input, { target: { value: `${goodValue}` } });
        input?.blur();

        expect(input?.checkValidity()).toBeTruthy;
    });

    it('validates a the non valid input', async () => {
        const badValue = '123';
        const input: HTMLInputElement | null = container.querySelector(
            `[data-testid="${testInputId}"]`,
        );
        expect(input).not.toBeNull();

        input?.focus();
        input && fireEvent.change(input, { target: { value: `${badValue}` } });
        input?.blur();

        expect(input?.checkValidity()).toBeFalsy;
    });
});
