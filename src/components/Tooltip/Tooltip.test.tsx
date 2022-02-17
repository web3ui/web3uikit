import React from 'react';
import ReactDOM from 'react-dom';
import { fireEvent, waitFor, screen } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import * as stories from './Tooltip.stories';
import 'jest-styled-components';

const { Bottom, Top, Left, Right } = composeStories(stories);

describe('Tooltip - Bottom', () => {
    let container: HTMLDivElement;
    const childrenId = 'tooltip-children-test-id';

    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
        ReactDOM.render(<Bottom />, container);
    });

    afterEach(() => {
        document.body.removeChild(container);
        container.remove();
    });

    it('should render the component', () => {
        const element = container.querySelector(
            `[data-testid="${childrenId}"]`,
        );
        expect(element).not.toBeNull();
    });

    it('should show text on hover', async () => {
        fireEvent.mouseOver(screen.getByTestId(childrenId));

        const r = await waitFor(() =>
            screen.getByTestId('tooltip-container-test-id'),
        );
        expect(r).toBeDefined();
    });
});

describe('Tooltip - Top', () => {
    let container: HTMLDivElement;
    const childrenId = 'tooltip-children-test-id';

    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
        ReactDOM.render(<Top />, container);
    });

    afterEach(() => {
        document.body.removeChild(container);
        container.remove();
    });

    it('should render the component', () => {
        const element = container.querySelector(
            `[data-testid="${childrenId}"]`,
        );
        expect(element).not.toBeNull();
    });

    it('should show text on hover', async () => {
        fireEvent.mouseOver(screen.getByTestId(childrenId));

        const r = await waitFor(() =>
            screen.getByTestId('tooltip-container-test-id'),
        );
        expect(r).toBeDefined();
    });
});

describe('Tooltip - Left', () => {
    let container: HTMLDivElement;
    const childrenId = 'tooltip-children-test-id';

    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
        ReactDOM.render(<Left />, container);
    });

    afterEach(() => {
        document.body.removeChild(container);
        container.remove();
    });

    it('should render the component', () => {
        const element = container.querySelector(
            `[data-testid="${childrenId}"]`,
        );
        expect(element).not.toBeNull();
    });

    it('should show text on hover', async () => {
        fireEvent.mouseOver(screen.getByTestId(childrenId));

        const r = await waitFor(() =>
            screen.getByTestId('tooltip-container-test-id'),
        );
        expect(r).toBeDefined();
    });
});

describe('Tooltip - Top', () => {
    let container: HTMLDivElement;
    const childrenId = 'tooltip-children-test-id';

    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
        ReactDOM.render(<Top />, container);
    });

    afterEach(() => {
        document.body.removeChild(container);
        container.remove();
    });

    it('should render the component', () => {
        const element = container.querySelector(
            `[data-testid="${childrenId}"]`,
        );
        expect(element).not.toBeNull();
    });

    it('should show text on hover', async () => {
        fireEvent.mouseOver(screen.getByTestId(childrenId));

        const r = await waitFor(() =>
            screen.getByTestId('tooltip-container-test-id'),
        );
        expect(r).toBeDefined();
    });
});

describe('Tooltip - Right', () => {
    let container: HTMLDivElement;
    const childrenId = 'tooltip-children-test-id';

    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
        ReactDOM.render(<Right />, container);
    });

    afterEach(() => {
        document.body.removeChild(container);
        container.remove();
    });

    it('should render the component', () => {
        const element = container.querySelector(
            `[data-testid="${childrenId}"]`,
        );
        expect(element).not.toBeNull();
    });

    it('should show text on hover', async () => {
        fireEvent.mouseOver(screen.getByTestId(childrenId));

        const r = await waitFor(() =>
            screen.getByTestId('tooltip-container-test-id'),
        );
        expect(r).toBeDefined();
    });
});
