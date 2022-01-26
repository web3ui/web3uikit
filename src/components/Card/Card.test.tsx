import React from 'react';
import ReactDOM from 'react-dom';
import { composeStories } from '@storybook/testing-react';
import * as stories from './Card.stories';

const { Regular, Disabled } = composeStories(stories);

describe('Card - Regular', () => {
    const cardId = 'card-test-id';
    const checkmarkId = 'check-test-id';
    let container: HTMLDivElement;
    const descriptionId = 'desc-test-id';
    const desc = Regular?.args?.description;
    const text = Regular?.args?.title;
    const titleId = 'title-test-id';

    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
        ReactDOM.render(<Regular />, container);
    });

    afterEach(() => {
        document.body.removeChild(container);
        container.remove();
    });

    it('renders the card component', () => {
        const element = container.querySelector(`[data-testid="${cardId}"]`);
        expect(element).not.toBeNull();
    });

    it('renders title correctly', () => {
        const element = container.querySelector(`[data-testid="${titleId}"]`);
        expect(element?.textContent).toBe(text);
    });

    it('renders description correctly', () => {
        const element = container.querySelector(
            `[data-testid="${descriptionId}"]`,
        );
        expect(element?.textContent).toBe(desc);
    });

    it('should not render checkmark icon', () => {
        const iconSVG = container.querySelector(
            `[data-testid="${checkmarkId}"]`,
        );
        expect(iconSVG).toBeNull();
    });
});

describe('Card - Selected', () => {
    const cardId = 'card-test-id';
    let container: HTMLDivElement;
    const descriptionId = 'desc-test-id';
    const desc = Regular?.args?.description;
    const headerId = 'header-test-id';
    const text = Regular?.args?.title;
    const titleId = 'title-test-id';

    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
        ReactDOM.render(<Regular />, container);
    });

    afterEach(() => {
        document.body.removeChild(container);
        container.remove();
    });

    it('renders the card component', () => {
        const element = container.querySelector(`[data-testid="${cardId}"]`);
        expect(element).not.toBeNull();
    });

    it('renders title correctly', () => {
        const element = container.querySelector(`[data-testid="${titleId}"]`);
        expect(element?.textContent).toBe(text);
    });

    it('renders description correctly', () => {
        const element = container.querySelector(
            `[data-testid="${descriptionId}"]`,
        );
        expect(element?.textContent).toBe(desc);
    });

    it('should render checkmark icon', () => {
        const iconSVG = container.querySelector(`[data-testid="${headerId}"]`);
        expect(iconSVG).not.toBeNull();
    });
});

describe('Card - Disabled', () => {
    const cardId = 'card-test-id';
    let container: HTMLDivElement;
    const descriptionId = 'desc-test-id';
    const desc = Disabled?.args?.description;
    const headerId = 'header-test-id';
    const text = Disabled?.args?.title;
    const titleId = 'title-test-id';

    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
        ReactDOM.render(<Disabled />, container);
    });

    afterEach(() => {
        document.body.removeChild(container);
        container.remove();
    });

    it('renders the card component', () => {
        const element = container.querySelector(`[data-testid="${cardId}"]`);
        expect(element).not.toBeNull();
    });

    it('renders title correctly', () => {
        const element = container.querySelector(`[data-testid="${titleId}"]`);
        expect(element?.textContent).toBe(text);
    });

    it('renders description correctly', () => {
        const element = container.querySelector(
            `[data-testid="${descriptionId}"]`,
        );
        expect(element?.textContent).toBe(desc);
    });

    it('should render checkmark icon', () => {
        const iconSVG = container.querySelector(`[data-testid="${headerId}"]`);
        expect(iconSVG).not.toBeNull();
    });
});
