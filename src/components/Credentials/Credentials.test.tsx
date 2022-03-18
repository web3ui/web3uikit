import React from 'react';
import ReactDOM from 'react-dom';
import { composeStories } from '@storybook/testing-react';
import * as stories from './Credentials.stories';
import { iconTestId } from '../Icon/Icon.test';

const { WithTitleAndIcon, WithTitle, OneLine } = composeStories(stories);

export const testCompId = 'test-credentials';

const testTitleIcon = 'cred-test-header-icon';
const testTitleId = 'cred-test-header-text';
const testTextId = 'cred-test-text';

describe('WithTitleAndIcon', () => {
    let container: HTMLDivElement;
    const testTitleText = WithTitleAndIcon?.args?.title;
    const testText = WithTitleAndIcon?.args?.text;

    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
        ReactDOM.render(<WithTitleAndIcon />, container);
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
        const element = container.querySelector(
            `[data-testid="${testTitleId}"]`,
        );
        expect(element).not.toBeNull();
        expect(element?.textContent).toBe(testTitleText);
    });
    it('renders the text', () => {
        const element = container.querySelector(
            `[data-testid="${testTextId}"]`,
        );
        expect(element).not.toBeNull();
        expect(element?.textContent).toBe(testText);
    });
});

describe('WithTitle', () => {
    let container: HTMLDivElement;
    const testTitleText = WithTitle?.args?.title;
    const testText = WithTitle?.args?.text;

    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
        ReactDOM.render(<WithTitle />, container);
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

    it('does not render the Icon', () => {
        const element = container.querySelector(
            `[data-testid="${testTitleIcon}"]`,
        );
        expect(element).toBeNull();
    });

    it('renders the Title with correct text', () => {
        const element = container.querySelector(
            `[data-testid="${testTitleId}"]`,
        );
        expect(element).not.toBeNull();
        expect(element?.textContent).toBe(testTitleText);
    });
    it('renders the text', () => {
        const element = container.querySelector(
            `[data-testid="${testTextId}"]`,
        );
        expect(element).not.toBeNull();
        expect(element?.textContent).toBe(testText);
    });
});

describe('OneLine', () => {
    let container: HTMLDivElement;
    const testText = OneLine?.args?.text;

    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
        ReactDOM.render(<OneLine />, container);
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

    it('does not render the Icon', () => {
        const element = container.querySelector(
            `[data-testid="${testTitleIcon}"]`,
        );
        expect(element).toBeNull();
    });

    it('does not render the Title', () => {
        const element = container.querySelector(
            `[data-testid="${testTitleId}"]`,
        );
        expect(element).toBeNull();
    });
    it('renders the text', () => {
        const element = container.querySelector(
            `[data-testid="${testTextId}"]`,
        );
        expect(element).not.toBeNull();
        expect(element?.textContent).toBe(testText);
    });
});
