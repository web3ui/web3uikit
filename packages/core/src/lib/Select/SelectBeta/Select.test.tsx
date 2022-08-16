import React from 'react';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import * as stories from '../Select.stories';
import { vi } from 'vitest';

const { BetaSelect, BetaSelectDisabled, BetaSelectNoSearch } = composeStories(
    stories,
);
let container: HTMLDivElement;
const testClickEvent = vi.fn();

const testLabelId = 'test-select-label';
const testWrapperId = 'test-select';
const testSelectButton = 'test-select-button';
const testSelectOptions = 'test-select-options';
const testSelectDropdownIcon = 'test-select-icon';
const testUpIcon = 'triangle up icon';
const testDownIcon = 'triangle down icon';
const testSearchInput = 'test-select-search-input';

const testSelectClick = (
    disabled: boolean,
    id: string,
    element: HTMLButtonElement,
    isOpen = true,
) => {
    const startIcon = isOpen ? testDownIcon : testUpIcon;
    const endIcon = isOpen ? testUpIcon : testDownIcon;
    expect(screen.getByTestId(id).textContent).toBe(startIcon);
    fireEvent.click(element);
    expect(screen.getByTestId(id).textContent).toBe(
        disabled ? startIcon : endIcon,
    );
    const dropdownList = container.querySelector(
        `[data-testid="test-select-options"]`,
    );
    if (!disabled) {
        expect(dropdownList).not.toBeNull();
    } else {
        expect(dropdownList).toBeNull();
    }
};

describe('Renders - Select Beta', () => {
    const labelText = BetaSelect?.args?.label;

    beforeEach(() => {
        container = document.createElement('div');

        render(<BetaSelect onChange={testClickEvent} />, {
            container: document.body.appendChild(container),
        });
    });
    afterEach(() => {
        cleanup();
    });

    it('renders the component', () => {
        const element = container.querySelector(
            `[data-testid="${testWrapperId}"]`,
        );
        expect(element).not.toBeNull();
    });

    it('renders label correctly', () => {
        const element = container.querySelector(
            `[data-testid="${testLabelId}"]`,
        );
        expect(element).not.toBeNull();
        expect(element?.textContent).toBe(labelText);
    });

    it('renders dropdown list', () => {
        const element = container.querySelector(
            `[data-testid="${testSelectButton}"]`,
        );
        testSelectClick(false, testSelectButton, element as HTMLButtonElement);
    });

    it('renders search box', () => {
        const element = container.querySelector(
            `[data-testid="${testSelectButton}"]`,
        );
        testSelectClick(false, testSelectButton, element as HTMLButtonElement);
        const searchInput = container.querySelector(
            `[data-testid="${testSearchInput}"]`,
        );
        expect(searchInput).not.toBeNull();
    });
});

describe('Renders - Select Beta Disabled', () => {
    const labelText = BetaSelectDisabled?.args?.label;

    beforeEach(() => {
        container = document.createElement('div');

        render(<BetaSelectDisabled onChange={testClickEvent} />, {
            container: document.body.appendChild(container),
        });
    });
    afterEach(() => {
        cleanup();
    });

    it('renders the component', () => {
        const element = container.querySelector(
            `[data-testid="${testWrapperId}"]`,
        );
        expect(element).not.toBeNull();
    });

    it('renders label correctly', () => {
        const element = container.querySelector(
            `[data-testid="${testLabelId}"]`,
        );
        expect(element).not.toBeNull();
        expect(element?.textContent).toBe(labelText);
    });

    it('renders no dropdown list', () => {
        const element = container.querySelector(
            `[data-testid="${testSelectButton}"]`,
        );
        testSelectClick(true, testSelectButton, element as HTMLButtonElement);
    });

    it('renders search box', () => {
        const element = container.querySelector(
            `[data-testid="${testSelectButton}"]`,
        );
        testSelectClick(true, testSelectButton, element as HTMLButtonElement);
        const searchInput = container.querySelector(
            `[data-testid="${testSearchInput}"]`,
        );
        expect(searchInput).toBeNull();
    });
});

describe('Renders - Select Beta No Search', () => {
    const labelText = BetaSelectNoSearch?.args?.label;

    beforeEach(() => {
        container = document.createElement('div');

        render(<BetaSelectNoSearch onChange={testClickEvent} />, {
            container: document.body.appendChild(container),
        });
    });

    afterEach(() => {
        cleanup();
    });

    it('renders the component', () => {
        const element = container.querySelector(
            `[data-testid="${testWrapperId}"]`,
        );
        expect(element).not.toBeNull();
    });

    it('renders label correctly', () => {
        const element = container.querySelector(
            `[data-testid="${testLabelId}"]`,
        );
        expect(element).not.toBeNull();
        expect(element?.textContent).toBe(labelText);
    });

    it('renders dropdown list', () => {
        const element = container.querySelector(
            `[data-testid="${testSelectButton}"]`,
        );
        testSelectClick(false, testSelectButton, element as HTMLButtonElement);
    });

    it('renders search box', () => {
        const element = container.querySelector(
            `[data-testid="${testSelectButton}"]`,
        );
        testSelectClick(false, testSelectButton, element as HTMLButtonElement);
        const searchInput = container.querySelector(
            `[data-testid="${testSearchInput}"]`,
        );
        // search is hidden test
        expect(searchInput).toHaveAttribute('aria-hidden', 'true');
    });
});
