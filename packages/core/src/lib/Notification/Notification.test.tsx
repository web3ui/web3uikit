import * as stories from './Notification.stories';
import { test, expect, describe } from 'vitest';
import { render, cleanup } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
const { Regular, Standard, CustomIcon } = composeStories(stories);

const closeId = 'test-notification-x';
const iconId = 'test-notification-icon-wrapper';
const messageId = 'test-notification-message';
const testId = 'test-notification';
const titleId = 'test-notification-title';

describe('Notification - Standard - Active - Regular Text - Regular Icon', () => {
    let container: HTMLDivElement;
    const message = Standard.args?.message;
    const title = 'New Message';

    beforeEach(() => {
        container = document.createElement('div');
        render(<Standard />, {
            container: document.body.appendChild(container),
        });
    });

    afterEach(() => {
        cleanup();
    });

    it('renders the component', () => {
        const element = container.querySelector(`[data-testid="${testId}"]`);
        expect(element).not.toBeNull();
    });

    it('renders title correctly', () => {
        const element = container.querySelector(`[data-testid="${titleId}"]`);
        expect(element?.textContent).toBe(title);
    });

    it('renders message correctly', () => {
        const element = container.querySelector(`[data-testid="${messageId}"]`);
        expect(element?.textContent).toBe(message);
    });

    it('should render left icon', () => {
        const iconSVG = container.querySelector(
            `[data-testid="${iconId}"]  > svg`,
        );
        expect(iconSVG).not.toBeNull();
    });

    it('should render close icon', () => {
        const closeSVGtitle = container.querySelector(
            `[data-testid="${closeId}"]  > svg > title`,
        );
        expect(closeSVGtitle?.innerHTML).toBe('cross icon');
    });

    it('should render correct', () => {
        const iconSVG = container.querySelector(
            `[data-testid="${closeId}"]  > svg`,
        );
        expect(iconSVG).not.toBeNull();
    });
});

describe('Notification - Regular - Active - Custom Text - Regular Icon', () => {
    let container: HTMLDivElement;

    const title = Regular?.args?.title;
    const message = Regular?.args?.message;

    beforeEach(() => {
        container = document.createElement('div');
        render(<Regular />, {
            container: document.body.appendChild(container),
        });
    });

    afterEach(() => {
        cleanup();
    });

    it('renders the component', () => {
        const element = container.querySelector(`[data-testid="${testId}"]`);
        expect(element).not.toBeNull();
    });

    it('renders title correctly', () => {
        const element = container.querySelector(`[data-testid="${titleId}"]`);
        expect(element?.textContent).toBe(title);
    });

    it('renders message correctly', () => {
        const element = container.querySelector(`[data-testid="${messageId}"]`);
        expect(element?.textContent).toBe(message);
    });

    it('should render left icon', () => {
        const iconSVG = container.querySelector(
            `[data-testid="${iconId}"]  > svg`,
        );
        expect(iconSVG).not.toBeNull();
    });

    it('should render close icon', () => {
        const iconSVG = container.querySelector(
            `[data-testid="${closeId}"] > svg`,
        );
        expect(iconSVG).not.toBeNull();
    });
});

describe('Notification - Active - Custom Text - Custom Icon', () => {
    let container: HTMLDivElement;
    const title = CustomIcon?.args?.title;
    const message = CustomIcon?.args?.message;

    beforeEach(() => {
        container = document.createElement('div');
        render(<CustomIcon />, {
            container: document.body.appendChild(container),
        });
    });

    afterEach(() => {
        cleanup();
    });

    it('renders the component', () => {
        const element = container.querySelector(`[data-testid="${testId}"]`);
        expect(element).not.toBeNull();
    });

    it('renders title correctly', () => {
        const element = container.querySelector(`[data-testid="${titleId}"]`);
        expect(element?.textContent).toBe(title);
    });

    it('renders message correctly', () => {
        const element = container.querySelector(`[data-testid="${messageId}"]`);
        expect(element?.textContent).toBe(message);
    });

    it('should render left icon', () => {
        const iconSVG = container.querySelector(
            `[data-testid="${iconId}"]  > svg`,
        );
        expect(iconSVG).not.toBeNull();
    });

    it('should render close icon', () => {
        const iconSVG = container.querySelector(
            `[data-testid="${closeId}"] > svg`,
        );
        expect(iconSVG).not.toBeNull();
    });
});
