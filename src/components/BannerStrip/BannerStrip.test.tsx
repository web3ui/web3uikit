import React from 'react';
import ReactDOM from 'react-dom';
import { composeStories } from '@storybook/testing-react';
import * as stories from './BannerStrip.stories';
import 'jest-styled-components';
import color from '../../styles/colors';
import rgbToHex from '../../utils/rgbToHex';

const { Standard, StandardWithButton, Warning, Error, Success } =
    composeStories(stories);

describe('Banner Strip - Standard', () => {
    let container: HTMLDivElement;
    const testId = 'banner-strip';
    const testText = 'Hey this is a notification you should check out';
    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
        ReactDOM.render(<Standard />, container);
    });
    afterEach(() => {
        document.body.removeChild(container);
        container.remove();
    });
    it('renders the component', () => {
        const element = container.querySelector(`[data-testid="${testId}"]`);
        expect(element).not.toBeNull();
    });
    it('renders text correctly', () => {
        const element = container.querySelector(`[data-testid="${testId}"]`);
        expect(element?.textContent).toBe(testText);
    });
    it('renders will not render a button', () => {
        const childElement = container.querySelector(
            `[data-testid="${testId}"] > button`,
        );
        expect(childElement).toBeNull();
    });
    it('renders Standard with blue background', () => {
        const element: HTMLElement | null = container.querySelector(
            `[data-testid="${testId}"]`,
        );
        const styles = element && getComputedStyle(element);
        const bgColorHex =
            styles && rgbToHex(styles.backgroundColor).toUpperCase();
        expect(bgColorHex).toBe(color.blue);
    });
});

describe('Banner Strip - With Button', () => {
    let container: HTMLDivElement;
    const testId = 'banner-strip';
    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
        ReactDOM.render(<StandardWithButton />, container);
    });
    afterEach(() => {
        document.body.removeChild(container);
        container.remove();
    });
    it('renders the component', () => {
        const element = container.querySelector(`[data-testid="${testId}"]`);
        expect(element).not.toBeNull();
    });
    it('renders button correctly', () => {
        const childElement = container.querySelector(
            `[data-testid="${testId}"] > button`,
        );
        expect(childElement).not.toBeNull();
    });
});

describe('Banner Strip - Warning', () => {
    let container: HTMLDivElement;
    const testId = 'banner-strip';
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
        const element = container.querySelector(`[data-testid="${testId}"]`);
        expect(element).not.toBeNull();
    });
    it('renders Warning with yellow background', () => {
        const element: HTMLElement | null = container.querySelector(
            `[data-testid="${testId}"]`,
        );
        const styles = element && getComputedStyle(element);
        const bgColorHex =
            styles && rgbToHex(styles.backgroundColor).toUpperCase();
        expect(bgColorHex).toBe(color.yellow);
    });
});

describe('Banner Strip - Error', () => {
    let container: HTMLDivElement;
    const testId = 'banner-strip';
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
        const element = container.querySelector(`[data-testid="${testId}"]`);
        expect(element).not.toBeNull();
    });
    it('renders Error with blue background', () => {
        const element: HTMLElement | null = container.querySelector(
            `[data-testid="${testId}"]`,
        );
        const styles = element && getComputedStyle(element);
        const bgColorHex =
            styles && rgbToHex(styles.backgroundColor).toUpperCase();
        expect(bgColorHex).toBe(color.red);
    });
});

describe('Banner Strip - Success', () => {
    let container: HTMLDivElement;
    const testId = 'banner-strip';
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
        const element = container.querySelector(`[data-testid="${testId}"]`);
        expect(element).not.toBeNull();
    });
    it('renders Success with green background', () => {
        const element: HTMLElement | null = container.querySelector(
            `[data-testid="${testId}"]`,
        );
        const styles = element && getComputedStyle(element);
        const bgColorHex =
            styles && rgbToHex(styles.backgroundColor).toUpperCase();
        expect(bgColorHex).toBe(color.green);
    });
});
