import ReactDOM from 'react-dom';
import { fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import { composeStories } from '@storybook/testing-react';
import * as stories from './TextArea.stories';
import React from 'react';
import color from '../../styles/colors';

const { Default, Error, Confirmed, Disabled, CustomWidth } =
    composeStories(stories);

let container: HTMLDivElement;
const testValue = 'Test Value';
const testPlaceholder = 'Type here field';
const testTextAreaId = 'test-textarea';
const testWrapperId = 'test-textarea-wrapper';
const testLabelId = 'test-label';
const testEvent = jest.fn();

describe('TextArea - Default', () => {
    const testLabel = Default?.args?.label;
    const testName = Default?.args?.name;

    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
        ReactDOM.render(
            <Default
                onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) =>
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
        const textarea: HTMLTextAreaElement | null = container.querySelector(
            `[data-testid="${testTextAreaId}"]`,
        );
        expect(textarea).not.toBeNull();
    });

    it('renders textarea with the value and placeholder passed', () => {
        const textarea: HTMLTextAreaElement | null = container.querySelector(
            `[data-testid="${testTextAreaId}"]`,
        );
        expect(textarea).not.toBeNull();
        textarea && expect(textarea.value).toBe(testValue);
        textarea && expect(textarea.placeholder).toBe(testPlaceholder);
    });

    it('renders textarea with the name passed', () => {
        const textarea: HTMLTextAreaElement | null = container.querySelector(
            `[data-testid="${testTextAreaId}"]`,
        );
        expect(textarea).not.toBeNull();
        textarea && expect(textarea.name).toBe(testName);
    });

    it('renders wrapper correct border color', () => {
        const textareaWrapper: HTMLDivElement | null = container.querySelector(
            `[data-testid="${testWrapperId}"]`,
        );
        const styles = textareaWrapper && getComputedStyle(textareaWrapper);
        expect(styles?.borderColor.toUpperCase()).toBe(color.greyLight);
    });

    it('renders label text', () => {
        const label = container.querySelector(`[data-testid="${testLabelId}"]`);
        expect(label).not.toBeNull();
        expect(label?.textContent).toBe(testLabel);
    });

    it("should conditionally render 'empty / filled' className", () => {
        const div: HTMLDivElement | null = container.querySelector(
            `[data-testid="${testWrapperId}"]`,
        );
        const textarea: HTMLTextAreaElement | null = container.querySelector(
            `[data-testid="${testTextAreaId}"]`,
        );
        expect(div?.classList.contains('filled')).toBeFalsy;
        expect(div?.classList.contains('empty')).toBeTruthy;

        expect(textarea).not.toBeNull();
        textarea?.focus();
        textarea && fireEvent.change(textarea, { target: { value: 'foo' } });
        textarea && expect(textarea.value).toBe('foo');

        expect(div?.classList.contains('filled')).toBeTruthy;
        expect(div?.classList.contains('empty')).toBeFalsy;
    });

    it('onChange event is returned, testEvent => event.target', () => {
        const textarea: HTMLTextAreaElement | null = container.querySelector(
            `[data-testid="${testTextAreaId}"]`,
        );
        textarea?.focus();
        textarea && fireEvent.change(textarea, { target: { value: 'foo' } });

        expect(textarea).not.toBeNull();
        textarea && expect(textarea.value).toBe('foo');
        expect(testEvent).toHaveBeenCalled();
    });
});

describe('TextArea - Error', () => {
    const testLabel = Error?.args?.label;
    const testName = Error?.args?.name;

    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
        ReactDOM.render(<Error />, container);
    });
    afterEach(() => {
        document.body.removeChild(container);
        container.remove();
    });

    it('renders the component', () => {
        const textarea: HTMLTextAreaElement | null = container.querySelector(
            `[data-testid="${testTextAreaId}"]`,
        );
        expect(textarea).not.toBeNull();
    });

    it('renders textarea with the value and placeholder passed', () => {
        const textarea: HTMLTextAreaElement | null = container.querySelector(
            `[data-testid="${testTextAreaId}"]`,
        );
        expect(textarea).not.toBeNull();
        textarea && expect(textarea.value).toBe(testValue);
        textarea && expect(textarea.placeholder).toBe(testPlaceholder);
    });

    it('renders textarea with the name passed', () => {
        const textarea: HTMLTextAreaElement | null = container.querySelector(
            `[data-testid="${testTextAreaId}"]`,
        );
        expect(textarea).not.toBeNull();
        textarea && expect(textarea.name).toBe(testName);
    });

    it('renders textarea correct colors', () => {
        const textareaWrapper: HTMLDivElement | null = container.querySelector(
            `[data-testid="${testWrapperId}"]`,
        );
        const styles = textareaWrapper && getComputedStyle(textareaWrapper);
        expect(styles?.borderColor.toUpperCase()).toBe(color.red);
    });

    it('renders label text', () => {
        const label = container.querySelector(`[data-testid="${testLabelId}"]`);
        expect(label).not.toBeNull();
        expect(label?.textContent).toBe(testLabel);
    });

    it("should conditionally render 'empty / filled' className", () => {
        const div: HTMLDivElement | null = container.querySelector(
            `[data-testid="${testWrapperId}"]`,
        );
        const textarea: HTMLTextAreaElement | null = container.querySelector(
            `[data-testid="${testTextAreaId}"]`,
        );
        expect(div?.classList.contains('filled')).toBeFalsy;
        expect(div?.classList.contains('empty')).toBeTruthy;

        expect(textarea).not.toBeNull();
        textarea?.focus();
        textarea && fireEvent.change(textarea, { target: { value: 'foo' } });
        textarea && expect(textarea.value).toBe('foo');

        expect(div?.classList.contains('filled')).toBeTruthy;
        expect(div?.classList.contains('empty')).toBeFalsy;
    });

    it('onChange event is returned, testEvent => event.target', () => {
        const textarea: HTMLTextAreaElement | null = container.querySelector(
            `[data-testid="${testTextAreaId}"]`,
        );
        textarea?.focus();
        textarea && fireEvent.change(textarea, { target: { value: 'foo' } });

        expect(textarea).not.toBeNull();
        textarea && expect(textarea.value).toBe('foo');
        expect(testEvent).toHaveBeenCalled();
    });
});

describe('TextArea - Confirmed', () => {
    const testLabel = Confirmed?.args?.label;
    const testName = Confirmed?.args?.name;

    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
        ReactDOM.render(<Confirmed />, container);
    });
    afterEach(() => {
        document.body.removeChild(container);
        container.remove();
    });

    it('renders the component', () => {
        const textarea: HTMLTextAreaElement | null = container.querySelector(
            `[data-testid="${testTextAreaId}"]`,
        );
        expect(textarea).not.toBeNull();
    });

    it('renders textarea with the value and placeholder passed', () => {
        const textarea: HTMLTextAreaElement | null = container.querySelector(
            `[data-testid="${testTextAreaId}"]`,
        );
        expect(textarea).not.toBeNull();
        textarea && expect(textarea.value).toBe(testValue);
        textarea && expect(textarea.placeholder).toBe(testPlaceholder);
    });

    it('renders textarea with the name passed', () => {
        const textarea: HTMLTextAreaElement | null = container.querySelector(
            `[data-testid="${testTextAreaId}"]`,
        );
        expect(textarea).not.toBeNull();
        textarea && expect(textarea.name).toBe(testName);
    });

    it('renders textarea correct colors', () => {
        const textareaWrapper: HTMLDivElement | null = container.querySelector(
            `[data-testid="${testWrapperId}"]`,
        );
        const styles = textareaWrapper && getComputedStyle(textareaWrapper);
        expect(styles?.borderColor.toUpperCase()).toBe(color.green);
    });

    it('renders label text', () => {
        const label = container.querySelector(`[data-testid="${testLabelId}"]`);
        expect(label).not.toBeNull();
        expect(label?.textContent).toBe(testLabel);
    });

    it("should conditionally render 'empty / filled' className", () => {
        const div: HTMLDivElement | null = container.querySelector(
            `[data-testid="${testWrapperId}"]`,
        );
        const textarea: HTMLTextAreaElement | null = container.querySelector(
            `[data-testid="${testTextAreaId}"]`,
        );
        expect(div?.classList.contains('filled')).toBeFalsy;
        expect(div?.classList.contains('empty')).toBeTruthy;

        textarea?.focus();
        textarea && fireEvent.change(textarea, { target: { value: 'foo' } });
        expect(textarea).not.toBeNull();
        textarea && expect(textarea.value).toBe('foo');

        expect(div?.classList.contains('filled')).toBeTruthy;
        expect(div?.classList.contains('empty')).toBeFalsy;
    });

    it('onChange event is returned, testEvent => event.target', () => {
        const textarea: HTMLTextAreaElement | null = container.querySelector(
            `[data-testid="${testTextAreaId}"]`,
        );
        textarea?.focus();
        textarea && fireEvent.change(textarea, { target: { value: 'foo' } });

        expect(textarea).not.toBeNull();
        textarea && expect(textarea.value).toBe('foo');
        expect(testEvent).toHaveBeenCalled();
    });
});

describe('TextArea - Disabled', () => {
    const testLabel = Disabled?.args?.label;
    const testName = Disabled?.args?.name;

    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
        ReactDOM.render(<Disabled />, container);
    });
    afterEach(() => {
        document.body.removeChild(container);
        container.remove();
    });

    it('renders the component', () => {
        const textarea: HTMLTextAreaElement | null = container.querySelector(
            `[data-testid="${testTextAreaId}"]`,
        );
        expect(textarea).not.toBeNull();
    });

    it('renders textarea with the value and placeholder passed', () => {
        const textarea: HTMLTextAreaElement | null = container.querySelector(
            `[data-testid="${testTextAreaId}"]`,
        );
        expect(textarea).not.toBeNull();
        expect(textarea).toBeDisabled();
        textarea && expect(textarea.value).toBe(testValue);
        textarea && expect(textarea.placeholder).toBe(testPlaceholder);
    });

    it('renders textarea with the name passed', () => {
        const textarea: HTMLTextAreaElement | null = container.querySelector(
            `[data-testid="${testTextAreaId}"]`,
        );
        expect(textarea).not.toBeNull();
        textarea && expect(textarea.name).toBe(testName);
    });

    it('renders textarea correct colors', () => {
        const textareaWrapper: HTMLDivElement | null = container.querySelector(
            `[data-testid="${testWrapperId}"]`,
        );
        const styles = textareaWrapper && getComputedStyle(textareaWrapper);
        expect(styles?.borderColor.toUpperCase()).toBe(color.greyLight);
    });

    it('renders label text', () => {
        const label = container.querySelector(`[data-testid="${testLabelId}"]`);
        expect(label).not.toBeNull();
        expect(label?.textContent).toBe(testLabel);
    });

    it("should conditionally render 'empty / filled' className", () => {
        const div: HTMLDivElement | null = container.querySelector(
            `[data-testid="${testWrapperId}"]`,
        );
        const textarea: HTMLTextAreaElement | null = container.querySelector(
            `[data-testid="${testTextAreaId}"]`,
        );
        expect(div?.classList.contains('filled')).toBeFalsy;
        expect(div?.classList.contains('empty')).toBeTruthy;

        textarea?.focus();
        textarea && fireEvent.change(textarea, { target: { value: 'foo' } });
        expect(textarea).not.toBeNull();
        textarea && expect(textarea.value).toBe('foo');

        expect(div?.classList.contains('filled')).toBeTruthy;
        expect(div?.classList.contains('empty')).toBeFalsy;
    });

    it('onChange event is returned, testEvent => event.target', () => {
        const textarea: HTMLTextAreaElement | null = container.querySelector(
            `[data-testid="${testTextAreaId}"]`,
        );
        textarea?.focus();
        textarea && fireEvent.change(textarea, { target: { value: 'foo' } });

        expect(textarea).not.toBeNull();
        textarea && expect(textarea.value).toBe('foo');
        expect(testEvent).toHaveBeenCalled();
    });
});

describe('TextArea - CustomWidth', () => {
    const testLabel = CustomWidth?.args?.label;
    const testName = CustomWidth?.args?.name;
    const testWidth = CustomWidth?.args?.width;

    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
        ReactDOM.render(
            <CustomWidth
                onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) =>
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
        const textarea: HTMLTextAreaElement | null = container.querySelector(
            `[data-testid="${testTextAreaId}"]`,
        );
        expect(textarea).not.toBeNull();
    });

    it('renders textarea with the value and placeholder passed', () => {
        const textarea: HTMLTextAreaElement | null = container.querySelector(
            `[data-testid="${testTextAreaId}"]`,
        );
        expect(textarea).not.toBeNull();
        textarea && expect(textarea.value).toBe('');
        textarea && expect(textarea.placeholder).toBe(testPlaceholder);
    });

    it('renders textarea with the name passed', () => {
        const textarea: HTMLTextAreaElement | null = container.querySelector(
            `[data-testid="${testTextAreaId}"]`,
        );
        expect(textarea).not.toBeNull();
        textarea && expect(textarea.name).toBe(testName);
    });

    it('renders wrapper correct border color', () => {
        const textareaWrapper: HTMLDivElement | null = container.querySelector(
            `[data-testid="${testWrapperId}"]`,
        );
        const styles = textareaWrapper && getComputedStyle(textareaWrapper);
        expect(styles?.borderColor.toUpperCase()).toBe(color.greyLight);
    });

    it('renders label text', () => {
        const label = container.querySelector(`[data-testid="${testLabelId}"]`);
        expect(label).not.toBeNull();
        expect(label?.textContent).toBe(testLabel);
    });

    it("should conditionally render 'empty / filled' className", () => {
        const div: HTMLDivElement | null = container.querySelector(
            `[data-testid="${testWrapperId}"]`,
        );
        const textarea: HTMLTextAreaElement | null = container.querySelector(
            `[data-testid="${testTextAreaId}"]`,
        );
        expect(div?.classList.contains('filled')).toBeFalsy;
        expect(div?.classList.contains('empty')).toBeTruthy;

        expect(textarea).not.toBeNull();
        textarea?.focus();
        textarea && fireEvent.change(textarea, { target: { value: 'foo' } });
        textarea && expect(textarea.value).toBe('foo');

        expect(div?.classList.contains('filled')).toBeTruthy;
        expect(div?.classList.contains('empty')).toBeFalsy;
    });

    it('onChange event is returned, testEvent => event.target', () => {
        const textarea: HTMLTextAreaElement | null = container.querySelector(
            `[data-testid="${testTextAreaId}"]`,
        );
        textarea?.focus();
        textarea && fireEvent.change(textarea, { target: { value: 'foo' } });

        expect(textarea).not.toBeNull();
        textarea && expect(textarea.value).toBe('foo');
        expect(testEvent).toHaveBeenCalled();
    });

    it('renders width property', () => {
        const textareaWrapper: HTMLDivElement | null = container.querySelector(
            `[data-testid="${testWrapperId}"]`,
        );
        const styles = textareaWrapper && getComputedStyle(textareaWrapper);
        expect(styles?.width).toBe(testWidth);
    });
});
