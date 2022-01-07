import ReactDOM from 'react-dom';
import React from 'react';
import { composeStories } from '@storybook/testing-react';
import * as stories from './Modal.stories';
const { Regular } = composeStories(stories);

describe('Modal - Regular', () => {
    let container: HTMLDivElement;
    let modalTestId = 'modal-test-id';
    let headerTestId = 'modal-header-test-id';
    let contentTestId = 'modal-content-test-id';
    let footerTestId = 'modal-footer-test-id';

    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
        ReactDOM.render(<Regular />, container);
    });

    afterEach(() => {
        document.body.removeChild(container);
        container.remove();
    });

    it('renders the component', () => {
        const element = container.querySelector(
            `[data-testid="${modalTestId}"]`,
        );
        expect(element).not.toBeNull();
    });
    it('renders the header', () => {
        const element = container.querySelector(
            `[data-testid="${headerTestId}"]`,
        );
        expect(element).not.toBeNull();
    });

    it('renders the content', () => {
        const element = container.querySelector(
            `[data-testid="${contentTestId}"]`,
        );
        expect(element).not.toBeNull();
    });

    it('renders the footer', () => {
        const element = container.querySelector(
            `[data-testid="${footerTestId}"]`,
        );
        expect(element).not.toBeNull();
    });

    it('renders the title', () => {
        const element = container.querySelector(
            `[data-testid="${headerTestId}"] > h3`,
        );
        expect(element).not.toBeNull();
    });

    it('renders the close icon', () => {
        const element = container.querySelector(
            `[data-testid="${headerTestId}"] > button`,
        );
        expect(element).not.toBeNull();
    });

    it('renders the cancel button', () => {
        const element = container.querySelector(
            `[data-testid="${footerTestId}"]`,
        );
        expect(element?.firstChild).not.toBeNull();
    });

    it('renders the ok button', () => {
        const element = container.querySelector(
            `[data-testid="${footerTestId}"]`,
        );
        expect(element?.lastChild).not.toBeNull();
    });
});
