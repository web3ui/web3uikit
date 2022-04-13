import * as stories from './NFTCollection.stories';
import React from 'react';
import { cleanup, render } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';

const { Default } = composeStories(stories);

export const NFTCollectionTestId = 'test-NFTCollection-id';

let container: HTMLDivElement;

describe('NFTCollection - Default', () => {
    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
        render(<Default />, {
            container: document.body.appendChild(container),
        });
    });
    afterEach(() => {
        cleanup();
    });

    it('renders the component', () => {
        const element = container.querySelectorAll(
            `[data-testid="${NFTCollectionTestId}"]`,
        );
        expect(element).not.toBeNull();
    });
});
