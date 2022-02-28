import React from 'react';
import ReactDOM from 'react-dom';
import { composeStories } from '@storybook/testing-react';
import * as stories from './LinkTo.stories';
import 'jest-styled-components';
import color from '../../styles/colors';
import rgbToHex from '../../utils/rgbToHex';

const {
    ExternalLink,
    ExternalLinkIconAfter,
    MailToLink,
    MailToLinkIconAfter,
    LinkWithOutText,
} = composeStories(stories);

const testIcon = 'test-icon';
const testId = 'test-link-to';
const testFlexId = 'test-link-flex';
const testTextWrap = 'test-link-text';

describe('LinkTo - External', () => {
    let container: HTMLDivElement;
    const testAddress = ExternalLink?.args?.address;
    const testText = ExternalLink?.args?.text;

    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
        ReactDOM.render(<ExternalLink />, container);
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
        const element = container.querySelector(
            `[data-testid="${testTextWrap}"]`,
        );
        expect(element?.textContent).toBe(testText);
    });
    it('renders link address correctly', () => {
        const element: HTMLAnchorElement | null = container.querySelector(
            `[data-testid="${testId}"]`,
        );
        expect(element?.href).toBe(testAddress);
    });
    it('renders link target correctly', () => {
        const element: HTMLAnchorElement | null = container.querySelector(
            `[data-testid="${testId}"]`,
        );
        expect(element?.target).toBe('_blank');
    });
    it('renders the correct icon', () => {
        const iconSVG = container.querySelector(`[data-testid="${testIcon}"]`);
        expect(iconSVG).not.toBeNull();
        expect(iconSVG?.textContent).toBe('link icon');
    });

    it('renders correct color for link', () => {
        const element: HTMLAnchorElement | null = container.querySelector(
            `[data-testid="${testId}"]`,
        );
        const styles = element && getComputedStyle(element);
        const colorHex = styles && rgbToHex(styles.color).toUpperCase();
        expect(colorHex).toBe(color.blue);
    });

    it('renders inline so it can be mid text', () => {
        const element: HTMLAnchorElement | null = container.querySelector(
            `[data-testid="${testId}"]`,
        );
        const styles = element && getComputedStyle(element);
        expect(styles?.display).toBe('inline-block');
    });

    it('renders icon in leading position', () => {
        const flexSpan: HTMLSpanElement | null = container.querySelector(
            `[data-testid="${testFlexId}"]`,
        );
        const styles = flexSpan && getComputedStyle(flexSpan);
        expect(styles?.flexDirection).toBe('row');
    });
});

describe('LinkTo - External Icon After', () => {
    let container: HTMLDivElement;
    const testAddress = ExternalLinkIconAfter?.args?.address;
    const testText = ExternalLinkIconAfter?.args?.text;

    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
        ReactDOM.render(<ExternalLinkIconAfter />, container);
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
        const element = container.querySelector(
            `[data-testid="${testTextWrap}"]`,
        );
        expect(element?.textContent).toBe(testText);
    });
    it('renders link address correctly', () => {
        const element: HTMLAnchorElement | null = container.querySelector(
            `[data-testid="${testId}"]`,
        );
        expect(element?.href).toBe(testAddress);
    });
    it('renders link target correctly', () => {
        const element: HTMLAnchorElement | null = container.querySelector(
            `[data-testid="${testId}"]`,
        );
        expect(element?.target).toBe('_blank');
    });
    it('renders the correct icon', () => {
        const iconSVG = container.querySelector(`[data-testid="${testIcon}"]`);
        expect(iconSVG).not.toBeNull();
        expect(iconSVG?.textContent).toBe('link icon');
    });
    it('renders correct color for link', () => {
        const element: HTMLAnchorElement | null = container.querySelector(
            `[data-testid="${testId}"]`,
        );
        const styles = element && getComputedStyle(element);
        const colorHex = styles && rgbToHex(styles.color).toUpperCase();
        expect(colorHex).toBe(color.blue);
    });
    it('renders correct color for link', () => {
        const element: HTMLAnchorElement | null = container.querySelector(
            `[data-testid="${testId}"]`,
        );
        const styles = element && getComputedStyle(element);
        const colorHex = styles && rgbToHex(styles.color).toUpperCase();
        expect(colorHex).toBe(color.blue);
    });
    it('renders inline so it can be mid text', () => {
        const element: HTMLAnchorElement | null = container.querySelector(
            `[data-testid="${testId}"]`,
        );
        const styles = element && getComputedStyle(element);
        expect(styles?.display).toBe('inline-block');
    });
    it('renders icon in leading position', () => {
        const flexSpan: HTMLSpanElement | null = container.querySelector(
            `[data-testid="${testFlexId}"]`,
        );
        const styles = flexSpan && getComputedStyle(flexSpan);
        expect(styles?.flexDirection).toBe('row-reverse');
    });
});

describe('LinkTo - Email', () => {
    let container: HTMLDivElement;
    const testAddress = `mailto:${MailToLink?.args?.address}`;
    const testText = MailToLink?.args?.text;

    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
        ReactDOM.render(<MailToLink />, container);
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
        const element = container.querySelector(
            `[data-testid="${testTextWrap}"]`,
        );
        expect(element?.textContent).toBe(testText);
    });
    it('renders link address correctly', () => {
        const element: HTMLAnchorElement | null = container.querySelector(
            `[data-testid="${testId}"]`,
        );
        expect(element?.href).toBe(testAddress);
    });
    it('renders link target correctly', () => {
        const element: HTMLAnchorElement | null = container.querySelector(
            `[data-testid="${testId}"]`,
        );
        expect(element?.target).toBe('_self');
    });
    it('renders the correct icon', () => {
        const iconSVG = container.querySelector(`[data-testid="${testIcon}"]`);
        expect(iconSVG).not.toBeNull();
        expect(iconSVG?.textContent).toBe('mail icon');
    });
    it('renders correct color for link', () => {
        const element: HTMLAnchorElement | null = container.querySelector(
            `[data-testid="${testId}"]`,
        );
        const styles = element && getComputedStyle(element);
        const colorHex = styles && rgbToHex(styles.color).toUpperCase();
        expect(colorHex).toBe(color.blue);
    });
    it('renders inline so it can be mid text', () => {
        const element: HTMLAnchorElement | null = container.querySelector(
            `[data-testid="${testId}"]`,
        );
        const styles = element && getComputedStyle(element);
        expect(styles?.display).toBe('inline-block');
    });
    it('renders icon in leading position', () => {
        const flexSpan: HTMLSpanElement | null = container.querySelector(
            `[data-testid="${testFlexId}"]`,
        );
        const styles = flexSpan && getComputedStyle(flexSpan);
        expect(styles?.flexDirection).toBe('row');
    });
});

describe('LinkTo - External Icon After', () => {
    let container: HTMLDivElement;
    const testAddress = `mailto:${MailToLinkIconAfter?.args?.address}`;
    const testText = MailToLinkIconAfter?.args?.text;

    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
        ReactDOM.render(<MailToLinkIconAfter />, container);
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
        const element = container.querySelector(
            `[data-testid="${testTextWrap}"]`,
        );
        expect(element?.textContent).toBe(testText);
    });
    it('renders link address correctly', () => {
        const element: HTMLAnchorElement | null = container.querySelector(
            `[data-testid="${testId}"]`,
        );
        expect(element?.href).toBe(testAddress);
    });
    it('renders link target correctly', () => {
        const element: HTMLAnchorElement | null = container.querySelector(
            `[data-testid="${testId}"]`,
        );
        expect(element?.target).toBe('_self');
    });
    it('renders the correct icon', () => {
        const iconSVG = container.querySelector(`[data-testid="${testIcon}"]`);
        expect(iconSVG).not.toBeNull();
        expect(iconSVG?.textContent).toBe('mail icon');
    });
    it('renders correct color for link', () => {
        const element: HTMLAnchorElement | null = container.querySelector(
            `[data-testid="${testId}"]`,
        );
        const styles = element && getComputedStyle(element);
        const colorHex = styles && rgbToHex(styles.color).toUpperCase();
        expect(colorHex).toBe(color.blue);
    });
    it('renders inline so it can be mid text', () => {
        const element: HTMLAnchorElement | null = container.querySelector(
            `[data-testid="${testId}"]`,
        );
        const styles = element && getComputedStyle(element);
        expect(styles?.display).toBe('inline-block');
    });
    it('renders icon in leading position', () => {
        const flexSpan: HTMLSpanElement | null = container.querySelector(
            `[data-testid="${testFlexId}"]`,
        );
        const styles = flexSpan && getComputedStyle(flexSpan);
        expect(styles?.flexDirection).toBe('row-reverse');
    });
});

describe('LinkTo - No text set for link', () => {
    let container: HTMLDivElement;
    const testAddress = LinkWithOutText?.args?.address;

    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
        ReactDOM.render(<LinkWithOutText />, container);
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
        const element = container.querySelector(
            `[data-testid="${testTextWrap}"]`,
        );
        expect(element?.textContent).toBe(testAddress);
    });
    it('renders link address correctly', () => {
        const element: HTMLAnchorElement | null = container.querySelector(
            `[data-testid="${testId}"]`,
        );
        expect(element?.href).toBe(testAddress);
    });
    it('renders link target correctly', () => {
        const element: HTMLAnchorElement | null = container.querySelector(
            `[data-testid="${testId}"]`,
        );
        expect(element?.target).toBe('_blank');
    });
    it('renders the correct icon', () => {
        const iconSVG = container.querySelector(`[data-testid="${testIcon}"]`);
        expect(iconSVG).not.toBeNull();
        expect(iconSVG?.textContent).toBe('link icon');
    });
    it('renders correct color for link', () => {
        const element: HTMLAnchorElement | null = container.querySelector(
            `[data-testid="${testId}"]`,
        );
        const styles = element && getComputedStyle(element);
        const colorHex = styles && rgbToHex(styles.color).toUpperCase();
        expect(colorHex).toBe(color.blue);
    });
    it('renders inline so it can be mid text', () => {
        const element: HTMLAnchorElement | null = container.querySelector(
            `[data-testid="${testId}"]`,
        );
        const styles = element && getComputedStyle(element);
        expect(styles?.display).toBe('inline-block');
    });
    it('renders icon in leading position', () => {
        const flexSpan: HTMLSpanElement | null = container.querySelector(
            `[data-testid="${testFlexId}"]`,
        );
        const styles = flexSpan && getComputedStyle(flexSpan);
        expect(styles?.flexDirection).toBe('row');
    });
});
