import * as stories from './NFTCollection.stories';
import React from 'react';
import ReactDOM from 'react-dom';
import { composeStories } from '@storybook/testing-react';

const { Default } = composeStories(stories);

export const NFTCollectionTestId = 'test-NFTCollection-id';

let container: HTMLDivElement;

describe('NFTCollection - Default', () => {
    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
        ReactDOM.render(<Default />, container);
    });
    afterEach(() => {
        document.body.removeChild(container);
        container.remove();
    });

    it('renders the component', () => {
        const element = container.querySelectorAll(
            `[data-testid="${NFTCollectionTestId}"]`,
        );
        expect(element).not.toBeNull();
    });
});
