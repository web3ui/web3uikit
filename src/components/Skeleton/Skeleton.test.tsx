import * as stories from './Skeleton.stories';
import React from 'react';
import ReactDOM from 'react-dom';
import color from '../../styles/colors';
import rgbToHex from '../../utils/rgbToHex';
import { composeStories } from '@storybook/testing-react';

const { SkeletonImage } = composeStories(stories);

export const skeletonTestId = 'test-skeleton-id';

let container: HTMLDivElement;

describe('Skeleton - Image', () => {
    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
        ReactDOM.render(<SkeletonImage />, container);
    });
    afterEach(() => {
        document.body.removeChild(container);
        container.remove();
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
