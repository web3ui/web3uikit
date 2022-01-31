import ReactDOM from 'react-dom';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import { composeStories } from '@storybook/testing-react';
import * as stories from './Select.stories';
import color from '../../styles/colors';
import React from 'react';

const {
    Default,
    NoDefaultIndexOption,
    Error,
    Confirmed,
    Disabled,
    ErrorWithMessage,
} = composeStories(stories);

let container: HTMLDivElement;
const testLabelId = 'test-label';
const testWrapperId = 'test-wrapper';
const testSelectedId = 'test-selected';

describe('Default', () => {
    const testLabel = Default?.args?.label;

    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
        ReactDOM.render(<Default />, container);
    });
    afterEach(() => {
        document.body.removeChild(container);
        container.remove();
    });

    it('renders the component', () => {
        const select: HTMLDivElement | null = container.querySelector(
            `[data-testid="${testWrapperId}"]`,
        );
        expect(select).not.toBeNull();
    });

    it('renders select without selected option 0 index', () => {
        const selected: HTMLDivElement | null = container.querySelector(
            `[data-testid="${testSelectedId}"]`,
        );
        expect(selected).not.toBeNull();
        selected && expect(selected.textContent).toContain('triangleDown icon');
    });

    it('renders select correct colors', () => {
        const selected: HTMLDivElement | null = container.querySelector(
            `[data-testid="${testSelectedId}"]`,
        );
        const styles = selected && getComputedStyle(selected);
        expect(styles?.borderColor.toUpperCase()).toBe(color.greyLight);
    });

    it('renders label text', () => {
        const label = container.querySelector(`[data-testid="${testLabelId}"]`);
        expect(label).not.toBeNull();
        expect(label?.textContent).toBe(testLabel);
    });
});
describe('NoDefaultIndexOption', () => {
    const testLabel = NoDefaultIndexOption?.args?.label;

    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
        ReactDOM.render(<NoDefaultIndexOption />, container);
    });
    afterEach(() => {
        document.body.removeChild(container);
        container.remove();
    });

    it('renders the component', () => {
        const select: HTMLDivElement | null = container.querySelector(
            `[data-testid="${testWrapperId}"]`,
        );
        expect(select).not.toBeNull();
    });

    it('renders select without the selected option 0 index', () => {
        const selected: HTMLDivElement | null = container.querySelector(
            `[data-testid="${testSelectedId}"]`,
        );
        expect(selected).not.toBeNull();
        selected && expect(selected.textContent).toContain('triangleDown icon');
    });

    it('renders select correct colors', () => {
        const selected: HTMLDivElement | null = container.querySelector(
            `[data-testid="${testSelectedId}"]`,
        );
        const styles = selected && getComputedStyle(selected);
        expect(styles?.borderColor.toUpperCase()).toBe(color.greyLight);
    });

    it('renders label text', () => {
        const label = container.querySelector(`[data-testid="${testLabelId}"]`);
        expect(label).not.toBeNull();
        expect(label?.textContent).toBe(testLabel);
    });
});
describe('Error', () => {
    const testLabel = Error?.args?.label;
    const testOptions = Error?.args?.options;

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
        const select: HTMLDivElement | null = container.querySelector(
            `[data-testid="${testWrapperId}"]`,
        );
        expect(select).not.toBeNull();
    });

    it('renders select with the selected option 0 index', () => {
        const selected: HTMLDivElement | null = container.querySelector(
            `[data-testid="${testSelectedId}"]`,
        );
        expect(selected).not.toBeNull();
        selected &&
            expect(selected.textContent).toContain(testOptions?.[0]?.['label']);
    });

    it('renders select correct colors', () => {
        const selected: HTMLDivElement | null = container.querySelector(
            `[data-testid="${testSelectedId}"]`,
        );
        const styles = selected && getComputedStyle(selected);
        expect(styles?.borderColor.toUpperCase()).toBe(color.red);
    });

    it('renders label text', () => {
        const label = container.querySelector(`[data-testid="${testLabelId}"]`);
        expect(label).not.toBeNull();
        expect(label?.textContent).toBe(testLabel);
    });
});
describe('ErrorWithMessage', () => {
    const testLabel = ErrorWithMessage?.args?.label;
    const testOptions = ErrorWithMessage?.args?.options;

    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
        ReactDOM.render(<ErrorWithMessage />, container);
    });
    afterEach(() => {
        document.body.removeChild(container);
        container.remove();
    });

    it('renders the component', () => {
        const select: HTMLDivElement | null = container.querySelector(
            `[data-testid="${testWrapperId}"]`,
        );
        expect(select).not.toBeNull();
    });

    it('renders select with the selected option 0 index', () => {
        const selected: HTMLDivElement | null = container.querySelector(
            `[data-testid="${testSelectedId}"]`,
        );
        expect(selected).not.toBeNull();
        selected &&
            expect(selected.textContent).toContain(testOptions?.[0]?.['label']);
    });

    it('renders select correct colors', () => {
        const selected: HTMLDivElement | null = container.querySelector(
            `[data-testid="${testSelectedId}"]`,
        );
        const styles = selected && getComputedStyle(selected);
        expect(styles?.borderColor.toUpperCase()).toBe(color.red);
    });

    it('renders label text', () => {
        const label = container.querySelector(`[data-testid="${testLabelId}"]`);
        expect(label).not.toBeNull();
        expect(label?.textContent).toBe(testLabel);
    });
});
describe('Confirmed', () => {
    const testLabel = Confirmed?.args?.label;
    const testOptions = Confirmed?.args?.options;

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
        const select: HTMLDivElement | null = container.querySelector(
            `[data-testid="${testWrapperId}"]`,
        );
        expect(select).not.toBeNull();
    });

    it('renders select with the selected option 0 index', () => {
        const selected: HTMLDivElement | null = container.querySelector(
            `[data-testid="${testSelectedId}"]`,
        );
        expect(selected).not.toBeNull();
        selected &&
            expect(selected.textContent).toContain(testOptions?.[0]?.['label']);
    });

    it('renders select correct colors', () => {
        const selected: HTMLDivElement | null = container.querySelector(
            `[data-testid="${testSelectedId}"]`,
        );
        const styles = selected && getComputedStyle(selected);
        expect(styles?.borderColor.toUpperCase()).toBe(color.green);
    });

    it('renders label text', () => {
        const label = container.querySelector(`[data-testid="${testLabelId}"]`);
        expect(label).not.toBeNull();
        expect(label?.textContent).toBe(testLabel);
    });
});
describe('Disabled', () => {
    const testLabel = Disabled?.args?.label;
    const testOptions = Disabled?.args?.options;

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
        const select: HTMLDivElement | null = container.querySelector(
            `[data-testid="${testWrapperId}"]`,
        );
        expect(select).not.toBeNull();
    });

    it('renders select with the selected option 0 index', () => {
        const selected: HTMLDivElement | null = container.querySelector(
            `[data-testid="${testSelectedId}"]`,
        );
        expect(selected).not.toBeNull();
        selected &&
            expect(selected.textContent).toContain(testOptions?.[0]?.['label']);
    });

    it('renders select correct colors', () => {
        const selected: HTMLDivElement | null = container.querySelector(
            `[data-testid="${testSelectedId}"]`,
        );
        const styles = selected && getComputedStyle(selected);
        expect(styles?.borderColor.toUpperCase()).toBe(color.greyDisabled);
    });

    it('renders label text', () => {
        const label = container.querySelector(`[data-testid="${testLabelId}"]`);
        expect(label).not.toBeNull();
        expect(label?.textContent).toBe(testLabel);
    });
});
