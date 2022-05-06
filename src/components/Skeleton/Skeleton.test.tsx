import { composeStories } from '@storybook/testing-react';
import { cleanup, render } from '@testing-library/react';
import React from 'react';
import color from '../../styles/colors';
import rgbToHex from '../../utils/rgbToHex';
import * as stories from './Skeleton.stories';

const { SkeletonImage } = composeStories(stories);
const skeletonTestId = 'test-skeleton-id';

describe('Skeleton - Image', () => {
let container: HTMLDivElement;

    beforeEach(() => {
        container = document.createElement('div');
        render(<SkeletonImage />, {
            container: document.body.appendChild(container),
        });
    });

    afterEach(() => {
        cleanup();
    });

    it('renders the component', () => {
        const element = container.querySelector(
            `[data-testid="${skeletonTestId}"]`,
        );
        expect(element).not.toBeNull();
    });

    it('renders correct color for skeleton', () => {
        const element: HTMLDivElement | null = container.querySelector(
            `[data-testid="${skeletonTestId}"]`,
        );
        const styles = element && getComputedStyle(element);
        const backgroundColorHex =
            styles && rgbToHex(styles.backgroundColor).toUpperCase();
        expect(backgroundColorHex).toBe(color.white);
    });
});
