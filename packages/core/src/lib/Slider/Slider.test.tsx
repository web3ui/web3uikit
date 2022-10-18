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
const testInputId = 'test-input-input';
const testLabelId = 'test-input-label';
const testDivId = 'test-input';
const testStepValue = 100;

test('onChange event is returned, testEvent => event.target', () => {
    render(
        <Slider
            rangeMin={testRangeMin}
            rangeMax={testRangeMax}
            rangeId={testRangeId}
            onChanges={(e) => testEvent(e.target)}
        />,
    );
    const div: HTMLDivElement = screen.getByTestId(testDivId);
    const input: HTMLInputElement = screen.getByTestId(testInputId);

    expect(div.classList.contains('filled')).toBeFalsy;
    expect(div.classList.contains('empty')).toBeTruthy;

    input.focus();
    fireEvent.change(input, { target: { value: 22 } });

    expect(Number(input.value)).toBe(22);
    expect(testEvent).toHaveBeenCalledWith(input);
});

describe('Slider - Default', () => {
    const testLabel = Default?.args?.rangeLabel;

    beforeEach(() => {
        container = document.createElement('div');

        render(
            <Default
                onChanges={(event: React.ChangeEvent<HTMLInputElement>) =>
                    testEvent(event.target)
                }
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

    it('renders label text', () => {
        const label = container.querySelector(`[data-testid="${testLabelId}"]`);
        expect(label).not.toBeNull();
        expect(label?.textContent).toBe(testLabel);
    });
});

describe('Slider - Step', () => {
    const testLabel = Default?.args?.rangeLabel;

    beforeEach(() => {
        container = document.createElement('div');

        render(
            <Step
                onChanges={(event: React.ChangeEvent<HTMLInputElement>) =>
                    testEvent(event.target)
                }
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

describe('Slider - Step', () => {
    const testLabel = Default?.args?.rangeLabel;

    beforeEach(() => {
        container = document.createElement('div');

        render(
            <Disabled
                onChanges={(event: React.ChangeEvent<HTMLInputElement>) =>
                    testEvent(event.target)
                }
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

    it('renders the component with disabled bool passed', () => {
        const input: HTMLInputElement | null = container.querySelector(
            `[data-testid="${testInputId}"]`,
        );
        expect(input?.disabled).not.toBeNull();
        expect(input?.disabled).toBe(testDisValue);
    });
});
