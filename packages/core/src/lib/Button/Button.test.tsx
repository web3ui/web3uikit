import { cleanup, fireEvent, render } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import * as stories from './Button.stories';
import { color, rgbToHex } from '@web3uikit/styles';
import { test, expect, describe, vi } from 'vitest';

const { DefaultButton } = composeStories(stories);

let container: HTMLDivElement;
const testClickEvent = vi.fn();
export const buttonTestId = 'test-button';

describe('Button - Primary', () => {
    const testText = DefaultButton?.args?.text;

    beforeEach(() => {
        container = document.createElement('div');

        render(<DefaultButton onClick={testClickEvent} />, {
            container: document.body.appendChild(container),
        });
    });
    afterEach(() => {
        cleanup();
    });

    it('renders the component', () => {
        const element = container.querySelector(
            `[data-testid="${buttonTestId}"]`,
        );
        expect(element).not.toBeNull();
    });
    it('renders text correctly', () => {
        const element = container.querySelector(
            `[data-testid="${buttonTestId}"]`,
        );
        expect(element?.textContent).toBe(testText);
    });
});
