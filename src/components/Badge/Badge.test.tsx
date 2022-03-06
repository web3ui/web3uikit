import React from 'react';
import ReactDOM from 'react-dom';
import { composeStories } from '@storybook/testing-react';
import * as stories from './Badge.stories';
import rgbToHex from '../../utils/rgbToHex';
import color from '../../styles/colors';

const { Normal, Success, Warning, Danger } = composeStories(stories);

export const badgeTestId = 'test-badge-id';
export const badgeTestTextId = 'test-badge-text';

let container: HTMLDivElement;

describe('Badge - Default', () => {
    const testText = Normal.args?.text;
    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
        ReactDOM.render(<Normal />, container);
    });
    afterEach(() => {
        document.body.removeChild(container);
        container.remove();
    });

    it('renders the component', () => {
        const element = container.querySelector(
            `[data-testid="${badgeTestId}"]`,
        );
        expect(element).not.toBeNull();
    });

    it('renders text correctly', () => {
        const element = container.querySelector(
            `[data-testid="${badgeTestTextId}"]`,
        );
        expect(element?.textContent).toBe(testText);
    });

    it('renders correct color for badge', () => {
        const element: HTMLDivElement | null = container.querySelector(
            `[data-testid="${badgeTestId}"]`,
        );
        const styles = element && getComputedStyle(element);
        const backgroundColorHex =
            styles && rgbToHex(styles.backgroundColor).toUpperCase();
        expect(backgroundColorHex).toBe(color.blue);
    });
});

describe('Badge - Success', () => {
    const testText = Success.args?.text;
    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
        ReactDOM.render(<Success />, container);
    });
    afterEach(() => {
        document.body.removeChild(container);
        container.remove();
    });

    it('renders the component', () => {
        const element = container.querySelector(
            `[data-testid="${badgeTestId}"]`,
        );
        expect(element).not.toBeNull();
    });

    it('renders text correctly', () => {
        const element = container.querySelector(
            `[data-testid="${badgeTestTextId}"]`,
        );
        expect(element?.textContent).toBe(testText);
    });

    it('renders correct color for badge', () => {
        const element: HTMLDivElement | null = container.querySelector(
            `[data-testid="${badgeTestId}"]`,
        );
        const styles = element && getComputedStyle(element);
        const backgroundColorHex =
            styles && rgbToHex(styles.backgroundColor).toUpperCase();
        expect(backgroundColorHex).toBe(color.green);
    });
});

describe('Badge - Warning', () => {
    const testText = Warning.args?.text;
    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
        ReactDOM.render(<Warning />, container);
    });
    afterEach(() => {
        document.body.removeChild(container);
        container.remove();
    });

    it('renders the component', () => {
        const element = container.querySelector(
            `[data-testid="${badgeTestId}"]`,
        );
        expect(element).not.toBeNull();
    });

    it('renders text correctly', () => {
        const element = container.querySelector(
            `[data-testid="${badgeTestTextId}"]`,
        );
        expect(element?.textContent).toBe(testText);
    });

    it('renders correct color for badge', () => {
        const element: HTMLDivElement | null = container.querySelector(
            `[data-testid="${badgeTestId}"]`,
        );
        const styles = element && getComputedStyle(element);
        const backgroundColorHex =
            styles && rgbToHex(styles.backgroundColor).toUpperCase();
        expect(backgroundColorHex).toBe(color.yellow);
    });
});

describe('Badge - Danger', () => {
    const testText = Danger.args?.text;
    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
        ReactDOM.render(<Danger />, container);
    });
    afterEach(() => {
        document.body.removeChild(container);
        container.remove();
    });

    it('renders the component', () => {
        const element = container.querySelector(
            `[data-testid="${badgeTestId}"]`,
        );
        expect(element).not.toBeNull();
    });

    it('renders text correctly', () => {
        const element = container.querySelector(
            `[data-testid="${badgeTestTextId}"]`,
        );
        expect(element?.textContent).toBe(testText);
    });

    it('renders correct color for badge', () => {
        const element: HTMLDivElement | null = container.querySelector(
            `[data-testid="${badgeTestId}"]`,
        );
        const styles = element && getComputedStyle(element);
        const backgroundColorHex =
            styles && rgbToHex(styles.backgroundColor).toUpperCase();
        expect(backgroundColorHex).toBe(color.red);
    });
});
