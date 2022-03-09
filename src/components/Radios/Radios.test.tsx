import React from 'react';
import ReactDOM from 'react-dom';
import { fireEvent } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import * as stories from './Radios.stories';

const { RadioGroup, RadioGroupWithoutTitle, RadiosWithLongText } =
    composeStories(stories);

let container: HTMLDivElement;
const testFieldsetId = 'test-fieldset';
const testLegendId = 'test-legend';
const testLabelId = 'test-label';
const testInputId = 'test-input';
const testEvent = jest.fn();

describe('Radios - RadioGroup', () => {
    const testTitle = RadioGroup?.args?.title;
    const testId = RadioGroup?.args?.id;
    const testItems = RadioGroup?.args?.items && [...RadioGroup.args.items];

    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
        ReactDOM.render(
            <RadioGroup
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
        const element: HTMLFieldSetElement | null = container.querySelector(
            `[data-testid="${testFieldsetId}"]`,
        );
        expect(element).not.toBeNull();
    });

    it('renders a formatted ID', () => {
        const element: HTMLFieldSetElement | null = container.querySelector(
            `[data-testid="${testFieldsetId}"]`,
        );
        const formattedID = testId && testId.replace(/\s/g, '-');
        expect(element?.id).toBe(formattedID);
    });

    it('renders the title', () => {
        const element: HTMLLegendElement | null = container.querySelector(
            `[data-testid="${testLegendId}"]`,
        );
        expect(element).not.toBeNull();
        expect(element?.textContent).toBe(testTitle);
    });

    it('renders the correct amount of radio inputs', () => {
        const elements = container.querySelectorAll('input');
        expect(elements.length).toBe(testItems?.length);
    });

    it('renders the each input correctly', () => {
        const elements = container.querySelectorAll('input');
        testItems &&
            elements.forEach((input: HTMLInputElement, i) =>
                expect(input?.value).toBe(String(i)),
            );
    });

    it('renders the correct label for each input', () => {
        const elements = container.querySelectorAll('label');
        testItems &&
            elements.forEach((label: HTMLLabelElement, i) =>
                expect(label?.textContent).toBe(testItems[i]),
            );
    });

    it('When the label is clicked the input is checked to render new styles', () => {
        const element: HTMLLabelElement | null = container.querySelector(
            `[data-testid="${testLabelId}-0"]`,
        );
        expect(element).not.toBeNull();
        element && fireEvent.click(element);

        const input: HTMLInputElement | null = container.querySelector(
            `[data-testid="${testInputId}-0"]`,
        );
        expect(input?.checked).toBeTruthy();
    });

    it('When the label is clicked the checked input is returned', () => {
        const element: HTMLLabelElement | null = container.querySelector(
            `[data-testid="${testLabelId}-0"]`,
        );
        expect(element).not.toBeNull();
        element && fireEvent.click(element);

        const input: HTMLInputElement | null = container.querySelector(
            `[data-testid="${testInputId}-0"]`,
        );
        expect(testEvent).toHaveBeenCalledWith(input);
    });
});

describe('Radios - RadioGroupWithoutTitle', () => {
    const testId = RadioGroupWithoutTitle?.args?.id;
    const testItems = RadioGroupWithoutTitle?.args?.items && [
        ...RadioGroupWithoutTitle.args.items,
    ];

    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
        ReactDOM.render(
            <RadioGroupWithoutTitle
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
        const element: HTMLFieldSetElement | null = container.querySelector(
            `[data-testid="${testFieldsetId}"]`,
        );
        expect(element).not.toBeNull();
    });

    it('renders a formatted ID', () => {
        const element: HTMLFieldSetElement | null = container.querySelector(
            `[data-testid="${testFieldsetId}"]`,
        );
        const formattedID = testId && testId.replace(/\s/g, '-');
        expect(element?.id).toBe(formattedID);
    });

    it('renders no title', () => {
        const element: HTMLLegendElement | null = container.querySelector(
            `[data-testid="${testLegendId}"]`,
        );
        expect(element).toBeNull();
    });

    it('renders the correct amount of radio inputs', () => {
        const elements = container.querySelectorAll('input');
        expect(elements.length).toBe(testItems?.length);
    });

    it('renders the each input correctly', () => {
        const elements = container.querySelectorAll('input');
        testItems &&
            elements.forEach((input: HTMLInputElement, i) =>
                expect(input?.value).toBe(String(i)),
            );
    });

    it('renders the correct label for each input', () => {
        const elements = container.querySelectorAll('label');
        testItems &&
            elements.forEach((label: HTMLLabelElement, i) =>
                expect(label?.textContent).toBe(testItems[i]),
            );
    });

    it('When the label is clicked the input is checked to render new styles', () => {
        const element: HTMLLabelElement | null = container.querySelector(
            `[data-testid="${testLabelId}-0"]`,
        );
        expect(element).not.toBeNull();
        element && fireEvent.click(element);

        const input: HTMLInputElement | null = container.querySelector(
            `[data-testid="${testInputId}-0"]`,
        );
        expect(input?.checked).toBeTruthy();
    });

    it('When the label is clicked the checked input is returned', () => {
        const element: HTMLLabelElement | null = container.querySelector(
            `[data-testid="${testLabelId}-0"]`,
        );
        expect(element).not.toBeNull();
        element && fireEvent.click(element);

        const input: HTMLInputElement | null = container.querySelector(
            `[data-testid="${testInputId}-0"]`,
        );
        expect(testEvent).toHaveBeenCalledWith(input);
    });
});

describe('Radios - RadiosWithLongText', () => {
    const testTitle = RadiosWithLongText?.args?.title;
    const testId = RadiosWithLongText?.args?.id;
    const testItems = RadiosWithLongText?.args?.items && [
        ...RadiosWithLongText.args.items,
    ];

    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
        ReactDOM.render(
            <RadiosWithLongText
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
        const element: HTMLFieldSetElement | null = container.querySelector(
            `[data-testid="${testFieldsetId}"]`,
        );
        expect(element).not.toBeNull();
    });

    it('renders a formatted ID', () => {
        const element: HTMLFieldSetElement | null = container.querySelector(
            `[data-testid="${testFieldsetId}"]`,
        );
        const formattedID = testId && testId.replace(/\s/g, '-');
        expect(element?.id).toBe(formattedID);
    });

    it('renders the title', () => {
        const element: HTMLLegendElement | null = container.querySelector(
            `[data-testid="${testLegendId}"]`,
        );
        expect(element).not.toBeNull();
        expect(element?.textContent).toBe(testTitle);
    });

    it('renders the correct amount of radio inputs', () => {
        const elements = container.querySelectorAll('input');
        expect(elements.length).toBe(testItems?.length);
    });

    it('renders the each input correctly', () => {
        const elements = container.querySelectorAll('input');
        testItems &&
            elements.forEach((input: HTMLInputElement, i) =>
                expect(input?.value).toBe(String(i)),
            );
    });

    it('renders the correct label for each input', () => {
        const elements = container.querySelectorAll('label');
        testItems &&
            elements.forEach((label: HTMLLabelElement, i) =>
                expect(label?.textContent).toBe(testItems[i]),
            );
    });

    it('When the label is clicked the input is checked to render new styles', () => {
        const element: HTMLLabelElement | null = container.querySelector(
            `[data-testid="${testLabelId}-0"]`,
        );
        expect(element).not.toBeNull();
        element && fireEvent.click(element);

        const input: HTMLInputElement | null = container.querySelector(
            `[data-testid="${testInputId}-0"]`,
        );
        expect(input?.checked).toBeTruthy();
    });

    it('When the label is clicked the checked input is returned', () => {
        const element: HTMLLabelElement | null = container.querySelector(
            `[data-testid="${testLabelId}-0"]`,
        );
        expect(element).not.toBeNull();
        element && fireEvent.click(element);

        const input: HTMLInputElement | null = container.querySelector(
            `[data-testid="${testInputId}-0"]`,
        );
        expect(testEvent).toHaveBeenCalledWith(input);
    });
});

// TODO @bill add tests for SetDefault and SetParticular
