import React from 'react';
import ReactDOM from 'react-dom';
import { composeStories } from '@storybook/testing-react';
import * as stories from './HideButton.stories';
import { iconTestId } from '../Icon/Icon.test';
import { iconTypes } from '../Icon';

const { Default, HiddenState } = composeStories(stories);

export const testCompId = 'test-hidebutton';

describe('Default', () => {
    let container: HTMLDivElement;

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
    it('renders the eye Icon', () => {
        const element = container.querySelector(
            `[data-testid="${iconTestId}"]`,
        );
        expect(element?.textContent).toBe(`${iconTypes.eye} icon`);
    });
});

describe('HiddenState', () => {
    let container: HTMLDivElement;

    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
        ReactDOM.render(<HiddenState />, container);
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
    it('renders the eyeClosed Icon', () => {
        const element = container.querySelector(
            `[data-testid="${iconTestId}"]`,
        );
        expect(element?.textContent).toBe('eye closed icon');
    });
});
