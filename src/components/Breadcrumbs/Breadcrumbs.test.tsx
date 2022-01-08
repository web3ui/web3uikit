import ReactDOM from 'react-dom';
import React from 'react';
import { fireEvent, waitFor, screen } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import * as stories from './Breadcrumbs.stories';
import color from '../../styles/colors';
import 'jest-styled-components';

const { One, Two, Three, Four } = composeStories(stories);

describe('Breadcrumbs - One', () => {
    let container: HTMLDivElement;
    let olId = 'breadcrumbs-ol-test-id';
    let navId = 'breadcrumbs-nav-test-id';
    let separatorId = 'breadcrumbs-separator-test-id';
    let breadcrumbId = 'breadcrumb-test-id';

    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
        ReactDOM.render(<One />, container);
    });

    afterEach(() => {
        document.body.removeChild(container);
        container.remove();
    });

    it('nav wrapper should  be visible', () => {
        const element = container.querySelector(`[data-testid="${navId}"]`);
        expect(element).not.toBeNull();
    });

    it('separator should be not visible', () => {
        const element = container.querySelector(
            `[data-testid="${separatorId}"]`,
        );
        expect(element).toBeNull();
    });

    it('svg icon should be visible', () => {
        const element = container
            .querySelector(`[data-testid="${breadcrumbId}"]`)
            ?.querySelector('svg');
        expect(element).toBeDefined();
    });

    it('ol should be visible', () => {
        const element = container.querySelector(`[data-testid="${olId}"]`);
        expect(element).not.toBeNull();
    });

    it('breadcrumb should not change color on hover', async () => {
        fireEvent.mouseOver(screen.getByTestId(breadcrumbId));
        await waitFor(() => screen.getByTestId(breadcrumbId));

        expect(
            container.querySelector(`[data-testid="${breadcrumbId}"]`),
        ).toHaveStyleRule(`background: ${color.grey}`);
    });
});
describe('Breadcrumbs - Two', () => {
    let container: HTMLDivElement;
    let olId = 'breadcrumbs-ol-test-id';
    let navId = 'breadcrumbs-nav-test-id';
    let separatorId = 'breadcrumbs-separator-test-id';
    let breadcrumbId = 'breadcrumb-test-id';

    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
        ReactDOM.render(<Two />, container);
    });

    afterEach(() => {
        document.body.removeChild(container);
        container.remove();
    });

    it('nav wrapper should  be visible', () => {
        const element = container.querySelector(`[data-testid="${navId}"]`);
        expect(element).not.toBeNull();
    });

    it('separator should be visible', () => {
        const element = container.querySelector(
            `[data-testid="${separatorId}"]`,
        );
        expect(element).not.toBeNull();
    });

    it('svg icon should be visible', () => {
        const element = container
            .querySelector(`[data-testid="${breadcrumbId}"]`)
            ?.querySelector('svg');
        expect(element).toBeDefined();
    });

    it('ol should be visible', () => {
        const element = container.querySelector(`[data-testid="${olId}"]`);
        expect(element).not.toBeNull();
    });

    it('first breadcrumb should change color on hover', async () => {
        fireEvent.mouseOver(screen.getByTestId(breadcrumbId));
        await waitFor(() => screen.getByTestId(breadcrumbId));
        expect(
            container.querySelector(`[data-testid="${breadcrumbId}"]`),
        ).toHaveStyleRule(`background: ${color.blueDark}`);
    });

    it('second breadcrumb should not change color on hover', async () => {
        fireEvent.mouseOver(screen.getByTestId(`${breadcrumbId}-1`));
        await waitFor(() => screen.getByTestId(breadcrumbId));
        expect(
            container.querySelector(`[data-testid="${breadcrumbId}"]`),
        ).toHaveStyleRule(`background: ${color.grey}`);
    });
});

describe('Breadcrumbs - Three', () => {
    let container: HTMLDivElement;
    let olId = 'breadcrumbs-ol-test-id';
    let navId = 'breadcrumbs-nav-test-id';
    let separatorId = 'breadcrumbs-separator-test-id';
    let breadcrumbId = 'breadcrumb-test-id';

    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
        ReactDOM.render(<Three />, container);
    });

    afterEach(() => {
        document.body.removeChild(container);
        container.remove();
    });

    it('nav wrapper should  be visible', () => {
        const element = container.querySelector(`[data-testid="${navId}"]`);
        expect(element).not.toBeNull();
    });

    it('separator should be visible', () => {
        const element = container.querySelector(
            `[data-testid="${separatorId}"]`,
        );
        expect(element).not.toBeNull();
    });

    it('svg icon should be visible', () => {
        const element = container
            .querySelector(`[data-testid="${breadcrumbId}"]`)
            ?.querySelector('svg');
        expect(element).toBeDefined();
    });

    it('ol should be visible', () => {
        const element = container.querySelector(`[data-testid="${olId}"]`);
        expect(element).not.toBeNull();
    });

    it('first breadcrumb should change color on hover', async () => {
        fireEvent.mouseOver(screen.getByTestId(breadcrumbId));
        await waitFor(() => screen.getByTestId(breadcrumbId));
        expect(
            container.querySelector(`[data-testid="${breadcrumbId}"]`),
        ).toHaveStyleRule(`background: ${color.blueDark}`);
    });

    it('second breadcrumb should change color on hover', async () => {
        fireEvent.mouseOver(screen.getByTestId(`${breadcrumbId}-1`));
        await waitFor(() => screen.getByTestId(breadcrumbId));
        expect(
            container.querySelector(`[data-testid="${breadcrumbId}"]`),
        ).toHaveStyleRule(`background: ${color.blueDark}`);
    });

    it('third breadcrumb should not change color on hover', async () => {
        fireEvent.mouseOver(screen.getByTestId(`${breadcrumbId}-2`));
        await waitFor(() => screen.getByTestId(breadcrumbId));
        expect(
            container.querySelector(`[data-testid="${breadcrumbId}"]`),
        ).toHaveStyleRule(`background: ${color.grey}`);
    });
});

describe('Breadcrumbs - Four', () => {
    let container: HTMLDivElement;
    let olId = 'breadcrumbs-ol-test-id';
    let navId = 'breadcrumbs-nav-test-id';
    let separatorId = 'breadcrumbs-separator-test-id';
    let breadcrumbId = 'breadcrumb-test-id';

    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
        ReactDOM.render(<Four />, container);
    });

    afterEach(() => {
        document.body.removeChild(container);
        container.remove();
    });

    it('nav wrapper should  be visible', () => {
        const element = container.querySelector(`[data-testid="${navId}"]`);
        expect(element).not.toBeNull();
    });

    it('separator should be visible', () => {
        const element = container.querySelector(
            `[data-testid="${separatorId}"]`,
        );
        expect(element).not.toBeNull();
    });

    it('svg icon should be visible', () => {
        const element = container
            .querySelector(`[data-testid="${breadcrumbId}"]`)
            ?.querySelector('svg');
        expect(element).toBeDefined();
    });

    it('ol should be visible', () => {
        const element = container.querySelector(`[data-testid="${olId}"]`);
        expect(element).not.toBeNull();
    });

    it('first breadcrumb should change color on hover', async () => {
        fireEvent.mouseOver(screen.getByTestId(breadcrumbId));
        await waitFor(() => screen.getByTestId(breadcrumbId));
        expect(
            container.querySelector(`[data-testid="${breadcrumbId}"]`),
        ).toHaveStyleRule(`background: ${color.blueDark}`);
    });

    it('second breadcrumb should change color on hover', async () => {
        fireEvent.mouseOver(screen.getByTestId(`${breadcrumbId}-1`));
        await waitFor(() => screen.getByTestId(breadcrumbId));
        expect(
            container.querySelector(`[data-testid="${breadcrumbId}"]`),
        ).toHaveStyleRule(`background: ${color.blueDark}`);
    });

    it('third breadcrumb should not change color on hover', async () => {
        fireEvent.mouseOver(screen.getByTestId(`${breadcrumbId}-2`));
        await waitFor(() => screen.getByTestId(breadcrumbId));
        expect(
            container.querySelector(`[data-testid="${breadcrumbId}"]`),
        ).toHaveStyleRule(`background: ${color.blueDark}`);
    });

    it('fourth breadcrumb should not change color on hover', async () => {
        fireEvent.mouseOver(screen.getByTestId(`${breadcrumbId}-3`));
        await waitFor(() => screen.getByTestId(breadcrumbId));
        expect(
            container.querySelector(`[data-testid="${breadcrumbId}"]`),
        ).toHaveStyleRule(`background: ${color.grey}`);
    });
});
