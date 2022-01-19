import React from 'react';
import ReactDOM from 'react-dom';
import { composeStories } from '@storybook/testing-react';
import { fireEvent } from '@testing-library/react';
import * as stories from './Accordion.stories';
import { getThemeColor } from './Accordion.styles';
import color from '../../styles/colors';
import { iconTestId } from '../Icon/Icon.test';
import { tagTestId } from '../Tag/Tag.test';

const { FullDemo, Default, Expanded, ThemeRed, ThemeYellow, ThemeGreen } =
    composeStories(stories);

const testId = 'test-accordion';
const testTitle = 'test-accordion-title';
const testSubtitle = 'test-accordion-subtitle';
const testHeader = 'test-accordion-header';
let container: HTMLDivElement;

describe('Accordion - Full Demo', () => {
    const titleText = FullDemo?.args?.title;
    const subtitleText = FullDemo?.args?.subTitle;
    const tagText = FullDemo?.args?.tagText;
    const isExpanded = FullDemo?.args?.isExpanded;

    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
        ReactDOM.render(<FullDemo />, container);
    });
    afterEach(() => {
        document.body.removeChild(container);
        container.remove();
    });

    it('renders the component with its ID', () => {
        const element = container.querySelector(`[data-testid="${testId}"]`);
        expect(element).not.toBeNull();
        expect(element?.id).toBe('accordion');
    });
    it('renders the title', () => {
        const element = container.querySelector(`[data-testid="${testTitle}"]`);
        expect(element).not.toBeNull();
        expect(element?.textContent).toBe(titleText);
    });
    it('renders the subtitle', () => {
        const element = container.querySelector(
            `[data-testid="${testSubtitle}"]`,
        );
        expect(element).not.toBeNull();
        expect(element?.textContent).toBe(subtitleText);
    });
    it('renders the tag with the correct text', () => {
        const element = container.querySelector(`[data-testid="${tagTestId}"]`);
        expect(element).not.toBeNull();
        expect(element?.textContent).toBe(tagText);
    });
    it('renders the lock icon, as well as the plus icon by default', () => {
        const iconArray = container.querySelectorAll(
            `[data-testid="${iconTestId}"]`,
        );
        expect(iconArray[0]).not.toBeNull();
        expect(iconArray[0].textContent).toBe('plus icon');
        expect(iconArray[1]).not.toBeNull();
        expect(iconArray[1].textContent).toBe('lock closed icon');
    });
    it('renders theme blue with blue border', () => {
        const element: HTMLElement | null = container.querySelector(
            `[data-testid="${testId}"]`,
        );
        const styles = element && getComputedStyle(element);
        expect(styles?.border).toBe(`1px solid ${color.blue}`.toLowerCase());
    });
    it('renders the component closed by default', () => {
        const headerElement = container.querySelector(
            `[data-testid="${testHeader}"]`,
        );
        expect(headerElement).not.toBeNull();
        expect(headerElement?.getAttribute('aria-expanded')).toBe(
            `${isExpanded}`,
        );
    });
    it('will open when the header is clicked', () => {
        const headerElement = container.querySelector(
            `[data-testid="${testHeader}"]`,
        );
        expect(headerElement).not.toBeNull();
        headerElement && fireEvent.click(headerElement);
        expect(headerElement?.getAttribute('aria-expanded')).toBe(
            `${!isExpanded}`,
        );
    });
});

describe('Accordion - Default', () => {
    const titleText = Default?.args?.title;
    const isExpanded = Default?.args?.isExpanded;

    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
        ReactDOM.render(<Default />, container);
    });
    afterEach(() => {
        document.body.removeChild(container);
        container.remove();
    });

    it('renders the component with its ID', () => {
        const element = container.querySelector(`[data-testid="${testId}"]`);
        expect(element).not.toBeNull();
        expect(element?.id).toBe('accordion');
    });
    it('renders the title', () => {
        const element = container.querySelector(`[data-testid="${testTitle}"]`);
        expect(element).not.toBeNull();
        expect(element?.textContent).toBe(titleText);
    });
    it('renders no subtitle', () => {
        const element = container.querySelector(
            `[data-testid="${testSubtitle}"]`,
        );
        expect(element).toBeNull();
    });
    it('renders no tag', () => {
        const element = container.querySelector(`[data-testid="${tagTestId}"]`);
        expect(element).toBeNull();
    });
    it('renders the plus icon only by default', () => {
        const element = container.querySelector(
            `[data-testid="${testSubtitle}"]`,
        );
        const iconArray = element?.querySelectorAll(
            `[data-testid="${iconTestId}"]`,
        );
        expect(iconArray).not.toBeNull();
        iconArray && expect(iconArray[0]).not.toBeNull();
        iconArray && expect(iconArray[0].textContent).toBe('plus icon');
        iconArray && expect(iconArray[1]).toBeNull();
    });
    it('renders default with blue border', () => {
        const element: HTMLElement | null = container.querySelector(
            `[data-testid="${testId}"]`,
        );
        const styles = element && getComputedStyle(element);
        expect(styles?.border).toBe(`1px solid ${color.blue}`.toLowerCase());
    });
    it('renders the component closed by default', () => {
        const element = container.querySelector(
            `[data-testid="${testHeader}"]`,
        );
        expect(element).not.toBeNull();
        expect(element?.getAttribute('aria-expanded')).toBe(
            `${Boolean(isExpanded)}`,
        );
    });
    it('will close when the header is clicked', () => {
        const element = container.querySelector(
            `[data-testid="${testHeader}"]`,
        );
        expect(element).not.toBeNull();
        element && fireEvent.click(element);
        expect(element?.getAttribute('aria-expanded')).toBe(
            `${!Boolean(isExpanded)}`,
        );
    });
});

describe('Accordion - Expanded', () => {
    const isExpanded = Expanded?.args?.isExpanded;

    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
        ReactDOM.render(<Expanded />, container);
    });
    afterEach(() => {
        document.body.removeChild(container);
        container.remove();
    });

    it('renders the component open by default', () => {
        const element = container.querySelector(
            `[data-testid="${testHeader}"]`,
        );
        expect(element).not.toBeNull();
        expect(element?.getAttribute('aria-expanded')).toBe(
            `${Boolean(isExpanded)}`,
        );
    });
    it('will close when the header is clicked', () => {
        const element = container.querySelector(
            `[data-testid="${testHeader}"]`,
        );
        expect(element).not.toBeNull();
        element && fireEvent.click(element);
        expect(element?.getAttribute('aria-expanded')).toBe(
            `${!Boolean(isExpanded)}`,
        );
    });
});

describe('Accordion - ThemeRed', () => {
    const theme = ThemeRed.args?.theme;
    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
        ReactDOM.render(<ThemeRed />, container);
    });
    afterEach(() => {
        document.body.removeChild(container);
        container.remove();
    });

    it('return the correct theme color from styles', () => {
        expect(theme).not.toBeNull();
        theme && expect(getThemeColor(theme)).toBe(color.red);
    });
    it('renders theme red with red border', () => {
        const element: HTMLElement | null = container.querySelector(
            `[data-testid="${testId}"]`,
        );
        const styles = element && getComputedStyle(element);
        expect(styles?.border).toBe(`1px solid ${color.red}`.toLowerCase());
    });
});

describe('Accordion - ThemeYellow', () => {
    const theme = ThemeYellow.args?.theme;
    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
        ReactDOM.render(<ThemeYellow />, container);
    });
    afterEach(() => {
        document.body.removeChild(container);
        container.remove();
    });

    it('return the correct theme color from styles', () => {
        expect(theme).not.toBeNull();
        theme && expect(getThemeColor(theme)).toBe(color.yellow);
    });
    it('renders theme yellow with yellow border', () => {
        const element: HTMLElement | null = container.querySelector(
            `[data-testid="${testId}"]`,
        );
        const styles = element && getComputedStyle(element);
        expect(styles?.border).toBe(`1px solid ${color.yellow}`.toLowerCase());
    });
});

describe('Accordion - ThemeGreen', () => {
    const theme = ThemeGreen.args?.theme;
    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
        ReactDOM.render(<ThemeGreen />, container);
    });
    afterEach(() => {
        document.body.removeChild(container);
        container.remove();
    });

    it('return the correct theme color from styles', () => {
        expect(theme).not.toBeNull();
        theme && expect(getThemeColor(theme)).toBe(color.green);
    });
    it('renders theme green with green border', () => {
        const element: HTMLElement | null = container.querySelector(
            `[data-testid="${testId}"]`,
        );
        const styles = element && getComputedStyle(element);
        expect(styles?.border).toBe(`1px solid ${color.green}`.toLowerCase());
    });
});
