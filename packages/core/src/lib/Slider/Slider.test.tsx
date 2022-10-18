import Slider from './Slider';
import * as stories from './Slider.stories';
import { composeStories } from '@storybook/testing-react';
import { test, expect, describe, vi } from 'vitest';
import { cleanup, render, screen, fireEvent } from '@testing-library/react';

const { Default, Step, Disabled } = composeStories(stories);

let container: HTMLDivElement;
const testEvent = vi.fn();
const testRangeId = 'test';
const testRangeMin = 0;
const testRangeMax = 100;
const testDisValue = true;
const baseTestValue = 22;
const testInputId = 'test-slider-input';
const testDivId = 'test-slider';
const testStepValue = 100;

test('Slider onChange event is called', async () => {
    render(
        <Slider
            min={testRangeMin}
            max={testRangeMax}
            id={testRangeId}
            value={baseTestValue}
            onChange={(currVal) => testEvent(currVal)}
        />,
    );
    const div: HTMLDivElement = screen.getByTestId(testDivId);
    const input: HTMLInputElement = screen.getByTestId(testInputId);

    expect(div.classList.contains('filled')).toBeFalsy;
    expect(div.classList.contains('empty')).toBeTruthy;
    expect(Number(input.value)).toBe(22);

    input.focus();
    fireEvent.change(input, { target: { value: 42 } });
    expect(testEvent).toHaveBeenCalled();
});

describe('Slider - Default', () => {
    beforeEach(() => {
        container = document.createElement('div');

        render(
            <Default
                value={baseTestValue}
                onChange={(currVal) => testEvent(currVal)}
            />,
            {
                container: document.body.appendChild(container),
            },
        );
    });

    afterEach(() => {
        cleanup();
    });

    it('renders the component', () => {
        const input: HTMLInputElement | null = container.querySelector(
            `[data-testid="${testInputId}"]`,
        );
        expect(input).not.toBeNull();
    });

    it('renders input with the rangeValue passed', () => {
        const input: HTMLInputElement | null = container.querySelector(
            `[data-testid="${testInputId}"]`,
        );
        expect(input).not.toBeNull();
        input && expect(Number(input.value)).toBe(baseTestValue);
    });

    it('renders the correct type of input', () => {
        const input: HTMLInputElement | null = container.querySelector(
            `[data-testid="${testInputId}"]`,
        );
        expect(input).not.toBeNull();
        input && expect(input.type).toBe('range');
    });
});

describe('Slider - Step', () => {
    beforeEach(() => {
        container = document.createElement('div');

        render(
            <Step
                value={baseTestValue}
                onChange={(currVal) => testEvent(currVal)}
            />,
            {
                container: document.body.appendChild(container),
            },
        );
    });

    afterEach(() => {
        cleanup();
    });

    it('renders the component', () => {
        const input: HTMLInputElement | null = container.querySelector(
            `[data-testid="${testInputId}"]`,
        );
        expect(input).not.toBeNull();
    });

    it('renders the component with step value passed', () => {
        const input: HTMLInputElement | null = container.querySelector(
            `[data-testid="${testInputId}"]`,
        );
        expect(input?.step).not.toBeNull();
        expect(input?.step).toBe(testStepValue.toString());
    });
});

describe('Slider - Disabled', () => {
    beforeEach(() => {
        container = document.createElement('div');

        render(<Disabled onChange={(currVal) => testEvent(currVal)} />, {
            container: document.body.appendChild(container),
        });
    });

    afterEach(() => {
        cleanup();
    });

    it('renders the component', () => {
        const input: HTMLInputElement | null = container.querySelector(
            `[data-testid="${testInputId}"]`,
        );
        expect(input).not.toBeNull();
    });

    it('renders the component with disabled bool passed', () => {
        const input: HTMLInputElement | null = container.querySelector(
            `[data-testid="${testInputId}"]`,
        );
        expect(input?.disabled).not.toBeNull();
        expect(input?.disabled).toBe(testDisValue);
    });
});
