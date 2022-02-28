// importing boilerplate stuff
import React from 'react';
import ReactDOM from 'react-dom';
import { composeStories } from '@storybook/testing-react';
import * as stories from './NewComp.stories';

// importing fire event from RTL to mock a click event
import { fireEvent } from '@testing-library/react';

// importing color and a testing tool to convert RGB to HEX
import color from '../../styles/colors';
import rgbToHex from '../../utils/rgbToHex';

// importing testID from button and icon
import { buttonTestId } from '../Button/Button.test';
import { iconTestId } from '../Icon/Icon.test';

// importing my stories to test
const { Default, InitializeRed, UnderLinedText } = composeStories(stories);

// setting my test IDs to match my tsx
export const testCompId = 'test-new-comp';
const testTitle = 'test-title';
const testHeading = 'test-heading';
const testText = 'test-text';
// NOTE: the main test ID is exported incase
// it is needed for another components test

// /////////////////////////////////////////////////////
// examples of basic tests of props, values and styles
// /////////////////////////////////////////////////////

// Test Story 1: Default
describe('Default', () => {
    let container: HTMLDivElement;
    const testTextOn = Default?.args?.textOn;
    const testTextOff = Default?.args?.textOff;

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
        const element = container.querySelector(
            `[data-testid="${testCompId}"]`,
        );
        expect(element).not.toBeNull();
    });
    it('renders the Icon', () => {
        const element = container.querySelector(
            `[data-testid="${iconTestId}"]`,
        );
        expect(element).not.toBeNull();
    });
    it('renders the Title with correct text', () => {
        const element = container.querySelector(`[data-testid="${testTitle}"]`);
        expect(element).not.toBeNull();
        expect(element?.textContent).toBe('The Demo Component');
    });
    it('renders the Heading with textOn by default', () => {
        const element = container.querySelector(
            `[data-testid="${testHeading}"]`,
        );
        expect(element).not.toBeNull();
        expect(element?.textContent).toBe(testTextOn);
    });
    it('renders the Heading with correct styles', () => {
        const element = container.querySelector(
            `[data-testid="${testHeading}"]`,
        );
        const styles = element && getComputedStyle(element);
        const colorHex = styles && rgbToHex(styles.color).toUpperCase();
        expect(colorHex).toBe(color.green);
    });
    it('renders the correct default Text', () => {
        const element = container.querySelector(`[data-testid="${testText}"]`);
        expect(element).not.toBeNull();
        expect(element?.textContent).toBe('Clicked: -1 times');
    });
    it('renders the Text without underline', () => {
        const element = container.querySelector(`[data-testid="${testText}"]`);
        expect(element).not.toBeNull();
        const styles = element && getComputedStyle(element);
        expect(styles?.textDecoration).toBe('none');
    });
    it('changes UI onClick of the button', () => {
        const buttonEle = container.querySelector(
            `[data-testid="${buttonTestId}"]`,
        );
        buttonEle && fireEvent.click(buttonEle);

        const textEle = container.querySelector(`[data-testid="${testText}"]`);
        expect(textEle).not.toBeNull();
        expect(textEle?.textContent).toBe('Clicked: 1 times');

        const headingEle = container.querySelector(
            `[data-testid="${testHeading}"]`,
        );
        expect(headingEle).not.toBeNull();
        expect(headingEle?.textContent).toBe(testTextOff);

        const styles = headingEle && getComputedStyle(headingEle);
        const colorHex = styles && rgbToHex(styles.color).toUpperCase();
        expect(colorHex).toBe(color.red);
    });
});

// Test Story 2: InitializeRed
describe('InitializeRed', () => {
    let container: HTMLDivElement;
    const testTextOn = InitializeRed?.args?.textOn;
    const testTextOff = InitializeRed?.args?.textOff;

    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
        ReactDOM.render(<InitializeRed />, container);
    });
    afterEach(() => {
        document.body.removeChild(container);
        container.remove();
    });

    it('renders the component', () => {
        const element = container.querySelector(
            `[data-testid="${testCompId}"]`,
        );
        expect(element).not.toBeNull();
    });
    it('renders the Icon', () => {
        const element = container.querySelector(
            `[data-testid="${iconTestId}"]`,
        );
        expect(element).not.toBeNull();
    });
    it('renders the Title with correct text', () => {
        const element = container.querySelector(`[data-testid="${testTitle}"]`);
        expect(element).not.toBeNull();
        expect(element?.textContent).toBe('The Demo Component');
    });
    it('renders the Heading with textOff by default', () => {
        const element = container.querySelector(
            `[data-testid="${testHeading}"]`,
        );
        expect(element).not.toBeNull();
        expect(element?.textContent).toBe(testTextOff);
    });
    it('renders the Heading with correct styles', () => {
        const element = container.querySelector(
            `[data-testid="${testHeading}"]`,
        );
        const styles = element && getComputedStyle(element);
        const colorHex = styles && rgbToHex(styles.color).toUpperCase();
        expect(colorHex).toBe(color.red);
    });
    it('renders the correct default Text', () => {
        const element = container.querySelector(`[data-testid="${testText}"]`);
        expect(element).not.toBeNull();
        expect(element?.textContent).toBe('Clicked: -1 times');
    });
    it('renders the Text without underline', () => {
        const element = container.querySelector(`[data-testid="${testText}"]`);
        expect(element).not.toBeNull();
        const styles = element && getComputedStyle(element);
        expect(styles?.textDecoration).toBe('none');
    });
    it('changes UI onClick of the button', () => {
        const buttonEle = container.querySelector(
            `[data-testid="${buttonTestId}"]`,
        );
        buttonEle && fireEvent.click(buttonEle);

        const textEle = container.querySelector(`[data-testid="${testText}"]`);
        expect(textEle).not.toBeNull();
        expect(textEle?.textContent).toBe('Clicked: 1 times');

        const headingEle = container.querySelector(
            `[data-testid="${testHeading}"]`,
        );
        expect(headingEle).not.toBeNull();
        expect(headingEle?.textContent).toBe(testTextOn);

        const styles = headingEle && getComputedStyle(headingEle);
        const colorHex = styles && rgbToHex(styles.color).toUpperCase();
        expect(colorHex).toBe(color.green);
    });
});

// Test Story 3: UnderLinedText
describe('UnderLinedText', () => {
    let container: HTMLDivElement;
    const testTextOn = UnderLinedText?.args?.textOn;
    const testTextOff = UnderLinedText?.args?.textOff;

    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
        ReactDOM.render(<UnderLinedText />, container);
    });
    afterEach(() => {
        document.body.removeChild(container);
        container.remove();
    });

    it('renders the component', () => {
        const element = container.querySelector(
            `[data-testid="${testCompId}"]`,
        );
        expect(element).not.toBeNull();
    });
    it('renders the Icon', () => {
        const element = container.querySelector(
            `[data-testid="${iconTestId}"]`,
        );
        expect(element).not.toBeNull();
    });
    it('renders the Title with correct text', () => {
        const element = container.querySelector(`[data-testid="${testTitle}"]`);
        expect(element).not.toBeNull();
        expect(element?.textContent).toBe('The Demo Component');
    });
    it('renders the Heading with textOn by default', () => {
        const element = container.querySelector(
            `[data-testid="${testHeading}"]`,
        );
        expect(element).not.toBeNull();
        expect(element?.textContent).toBe(testTextOn);
    });
    it('renders the Heading with correct styles', () => {
        const element = container.querySelector(
            `[data-testid="${testHeading}"]`,
        );
        const styles = element && getComputedStyle(element);
        const colorHex = styles && rgbToHex(styles.color).toUpperCase();
        expect(colorHex).toBe(color.green);
    });
    it('renders the correct default Text', () => {
        const element = container.querySelector(`[data-testid="${testText}"]`);
        expect(element).not.toBeNull();
        expect(element?.textContent).toBe('Clicked: -1 times');
    });
    it('renders the Text with underline', () => {
        const element = container.querySelector(`[data-testid="${testText}"]`);
        expect(element).not.toBeNull();
        const styles = element && getComputedStyle(element);
        expect(styles?.textDecoration).toBe('underline');
    });
    it('changes UI onClick of the button', () => {
        const buttonEle = container.querySelector(
            `[data-testid="${buttonTestId}"]`,
        );
        buttonEle && fireEvent.click(buttonEle);

        const textEle = container.querySelector(`[data-testid="${testText}"]`);
        expect(textEle).not.toBeNull();
        expect(textEle?.textContent).toBe('Clicked: 1 times');

        const headingEle = container.querySelector(
            `[data-testid="${testHeading}"]`,
        );
        expect(headingEle).not.toBeNull();
        expect(headingEle?.textContent).toBe(testTextOff);

        const styles = headingEle && getComputedStyle(headingEle);
        const colorHex = styles && rgbToHex(styles.color).toUpperCase();
        expect(colorHex).toBe(color.red);
    });
});
