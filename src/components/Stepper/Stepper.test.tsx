import React from 'react';
import ReactDOM from 'react-dom';
import ReactDOMServer from 'react-dom/server';
import { act } from 'react-dom/test-utils';
import { fireEvent } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import * as stories from './Stepper.stories';
import { noNavTestStepData, testStepData } from './testStepData';

const { Demo, PreLoadStep0, StepsWithFooter, StepsWithoutNav } =
    composeStories(stories);

let container: HTMLDivElement;
const stepperTestID = 'test-stepper';
const stepperTestTitle = 'test-stepper_title';
const stepperTestContent = 'test-stepper_content';
const stepperTestNav = 'test-stepper_nav';
const stepperTestNumbers = 'test-stepper_numbers';
const stepperTestHelper = 'test-stepper_helper';

describe('Demo', () => {
    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
        ReactDOM.render(<Demo />, container);
    });
    afterEach(() => {
        document.body.removeChild(container);
        container.remove();
    });

    it('renders the component', () => {
        const section: HTMLDivElement | null = container.querySelector(
            `[data-testid="${stepperTestID}"]`,
        );
        expect(section).not.toBeNull();
    });

    it('renders the correct title', () => {
        const title: HTMLHeadingElement | null = container.querySelector(
            `[data-testid="${stepperTestTitle}"]`,
        );
        expect(title).not.toBeNull();
        expect(title?.textContent).toBe(testStepData[0].title);
    });

    it('renders the correct content', () => {
        const content: HTMLDivElement | null = container.querySelector(
            `[data-testid="${stepperTestContent}"]`,
        );
        expect(content).not.toBeNull();

        const jsxToHtml = ReactDOMServer.renderToStaticMarkup(
            testStepData[0].content,
        );
        expect(content?.innerHTML).toBe(jsxToHtml);
    });

    it('next & prev nav cycles the content', () => {
        const buttons = container.querySelectorAll(
            `[data-testid="${stepperTestNav}"] > button`,
        );

        const nextButton = buttons[1];
        nextButton && fireEvent.click(nextButton);
        const step2Title: HTMLHeadingElement | null = container.querySelector(
            `[data-testid="${stepperTestTitle}"]`,
        );
        expect(step2Title).not.toBeNull();
        expect(step2Title?.textContent).toBe(testStepData[1].title);

        const preButton = buttons[0];
        preButton && fireEvent.click(preButton);
        const step1Title: HTMLHeadingElement | null = container.querySelector(
            `[data-testid="${stepperTestTitle}"]`,
        );
        expect(step1Title).not.toBeNull();
        expect(step1Title?.textContent).toBe(testStepData[0].title);
    });

    it('renders the correct amount of step number', () => {
        const numbers = container.querySelectorAll(
            `[data-testid="${stepperTestNumbers}"] > li`,
        );
        expect(numbers.length).toBe(testStepData.length);
    });

    it('renders the correct step numbers', () => {
        const numbers = container.querySelectorAll(
            `[data-testid="${stepperTestNumbers}"] > li`,
        );
        numbers.forEach((item, i) => expect(item.textContent).toBe(`${i + 1}`));
    });

    it('renders a tick when step is complete', () => {
        const numbers = container.querySelectorAll(
            `[data-testid="${stepperTestNumbers}"] > li`,
        );
        expect(numbers[0].textContent).toBe('1');

        const buttons = container.querySelectorAll(
            `[data-testid="${stepperTestNav}"] > button`,
        );
        const nextButton = buttons[1];
        nextButton && fireEvent.click(nextButton);

        const updatedNumbers = container.querySelectorAll(
            `[data-testid="${stepperTestNumbers}"] > li`,
        );
        expect(updatedNumbers[0].textContent).toBe('check icon');
    });

    it('does not render the footer helper content', () => {
        const helperContent: HTMLDivElement | null = container.querySelector(
            `[data-testid="${stepperTestHelper}"]`,
        );
        expect(helperContent).toBeNull();
    });
});

describe('PreLoadStep0', () => {
    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
        ReactDOM.render(<PreLoadStep0 />, container);
    });
    afterEach(() => {
        document.body.removeChild(container);
        container.remove();
    });

    it('renders the component', () => {
        const section: HTMLDivElement | null = container.querySelector(
            `[data-testid="${stepperTestID}"]`,
        );
        expect(section).not.toBeNull();
    });

    it('renders the correct title', () => {
        const title: HTMLHeadingElement | null = container.querySelector(
            `[data-testid="${stepperTestTitle}"]`,
        );
        expect(title).not.toBeNull();
        expect(title?.textContent).toBe('Just one sec...');
    });

    it('renders the loading spinner', () => {
        const loadingSpinner: HTMLDivElement | null = container.querySelector(
            `[data-testid="test-loading"]`,
        );
        expect(loadingSpinner).not.toBeNull();
    });
});

describe('StepsWithFooter', () => {
    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
        ReactDOM.render(<StepsWithFooter />, container);
    });
    afterEach(() => {
        document.body.removeChild(container);
        container.remove();
    });

    it('renders the component', () => {
        const section: HTMLDivElement | null = container.querySelector(
            `[data-testid="${stepperTestID}"]`,
        );
        expect(section).not.toBeNull();
    });

    it('renders the footer helper content', () => {
        const helperContent: HTMLDivElement | null = container.querySelector(
            `[data-testid="${stepperTestHelper}"]`,
        );
        expect(helperContent).not.toBeNull();
        expect(helperContent?.innerHTML).toContain(
            'Are you having any trouble?',
        );
    });
});

describe('StepsWithoutNav', () => {
    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
        ReactDOM.render(<StepsWithoutNav />, container);
    });
    afterEach(() => {
        document.body.removeChild(container);
        container.remove();
    });

    it('renders the component', () => {
        const section: HTMLDivElement | null = container.querySelector(
            `[data-testid="${stepperTestID}"]`,
        );
        expect(section).not.toBeNull();
    });

    it('any button with ID of next or prev cycles the content', () => {
        const step1Title: HTMLHeadingElement | null = container.querySelector(
            `[data-testid="${stepperTestTitle}"]`,
        );
        expect(step1Title).not.toBeNull();
        expect(step1Title?.textContent).toBe(noNavTestStepData[0].title);

        const nextButton = container.querySelector('#next');
        nextButton && fireEvent.click(nextButton);
        const step2Title: HTMLHeadingElement | null = container.querySelector(
            `[data-testid="${stepperTestTitle}"]`,
        );
        expect(step2Title).not.toBeNull();
        expect(step2Title?.textContent).toBe(noNavTestStepData[1].title);

        const prevButton = container.querySelector('#prev');
        prevButton && fireEvent.click(prevButton);
        const step1TitleAgain: HTMLHeadingElement | null =
            container.querySelector(`[data-testid="${stepperTestTitle}"]`);
        expect(step1TitleAgain).not.toBeNull();
        expect(step1TitleAgain?.textContent).toBe(noNavTestStepData[0].title);
    });

    it('next or prev events programmatically cycles the content', () => {
        act(() => {
            ReactDOM.render(<StepsWithoutNav />, container);
        });
        const step1Title: HTMLHeadingElement | null = container.querySelector(
            `[data-testid="${stepperTestTitle}"]`,
        );
        expect(step1Title).not.toBeNull();
        expect(step1Title?.textContent).toBe(noNavTestStepData[0].title);

        act(() => {
            const eventNext = new Event('next', { bubbles: true });
            document.dispatchEvent(eventNext);
        });

        const step2Title: HTMLHeadingElement | null = container.querySelector(
            `[data-testid="${stepperTestTitle}"]`,
        );
        expect(step2Title).not.toBeNull();
        expect(step2Title?.textContent).toBe(noNavTestStepData[1].title);

        act(() => {
            const eventPrev = new Event('prev', { bubbles: true });
            document.dispatchEvent(eventPrev);
        });

        const step1TitleAgain: HTMLHeadingElement | null =
            container.querySelector(`[data-testid="${stepperTestTitle}"]`);
        expect(step1TitleAgain).not.toBeNull();
        expect(step1TitleAgain?.textContent).toBe(noNavTestStepData[0].title);
    });
});
