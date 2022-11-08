import React from 'react';
import { cleanup, render } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import * as stories from './Grid.stories';
import { describe, it } from 'vitest';

const { Basic, BasicWithRuler } = composeStories(stories);
const testGridId = 'test-Grid';
const testGridRulerId = 'test-GridRuler';
const totalGridCols = 12;
let container: HTMLDivElement;

describe('Renders Basic Grid', () => {
    beforeEach(() => {
        container = document.createElement('div');

        render(<Basic />, {
            container: document.body.appendChild(container),
        });
    });
    afterEach(() => {
        cleanup();
    });

    it('Renders grid container', () => {
        const gridContainer: HTMLDivElement | null = container.querySelector(
            `[data-testid="${testGridId}"]`,
        );
        expect(gridContainer).not.toBeNull();
    });

    it('Renders grid items', () => {
        const gridItems: NodeListOf<
            Element
        > | null = container.querySelectorAll('.grid-item');
        expect(gridItems).not.toBeNull();
        expect(gridItems?.length).toBeGreaterThan(1);
    });
});

describe('Renders Basic with Ruler Grid', () => {
    beforeEach(() => {
        container = document.createElement('div');

        render(<BasicWithRuler />, {
            container: document.body.appendChild(container),
        });
    });
    afterEach(() => {
        cleanup();
    });

    it('Renders grid container', () => {
        const gridContainer: HTMLDivElement | null = container.querySelector(
            `[data-testid="${testGridId}"]`,
        );
        expect(gridContainer).not.toBeNull();
    });

    it('Renders grid items', () => {
        const gridItems: NodeListOf<
            Element
        > | null = container.querySelectorAll('.grid-item');
        expect(gridItems).not.toBeNull();
        expect(gridItems?.length).toBeGreaterThan(1);
    });

    it('Renders grid Ruler', () => {
        const gridRuler: HTMLDivElement | null = container.querySelector(
            `[data-testId="${testGridRulerId}"]`,
        );
        expect(gridRuler).not.toBeNull();
        expect(gridRuler?.childElementCount).toBe(totalGridCols);
    });
});
