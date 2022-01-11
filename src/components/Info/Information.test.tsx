import React from 'react';
import ReactDOM from 'react-dom';
import { composeStories } from '@storybook/testing-react';
import * as stories from './Information.stories';

const { Regular } = composeStories(stories);

describe('Info-Card - Regular', () => {
    let container: HTMLDivElement;
    const topic = Regular?.args?.topic;
    const info = Regular?.args?.information;
    const cardId = 'card-test-id';
    const topicId = 'topic-test-id';
    const infoId = 'info-test-id';

    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
        ReactDOM.render(<Regular />, container);
    });

    afterEach(() => {
        document.body.removeChild(container);
        container.remove();
    });

    it('renders the component', () => {
        const element = container.querySelector(`[data-testid="${cardId}"]`);
        expect(element).not.toBeNull();
    });

    it('renders topic correctly', () => {
        const element = container.querySelector(`[data-testid="${topicId}"]`);
        expect(element?.textContent).toBe(topic);
    });

    it('renders info correctly', () => {
        const element = container.querySelector(`[data-testid="${infoId}"]`);
        expect(element?.textContent).toBe(info);
    });
});
