import React from 'react';
import ReactDOM from 'react-dom';
import { composeStories } from '@storybook/testing-react';
import * as stories from './Widget.stories';
import 'jest-styled-components';

const { Demo } = composeStories(stories);

describe('Tooltip - Bottom', () => {
    let container: HTMLDivElement;
    const topicId = 'widget-topic';
    const infoId = 'widget-info';

    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
        ReactDOM.render(<Demo />, container);
    });

    afterEach(() => {
        document.body.removeChild(container);
        container.remove();
    });

    it('should render the topic', () => {
        const element = container.querySelector(`[data-testid="${topicId}"]`);
        expect(element).not.toBeNull();
    });

    it('should render informartion', () => {
        const element = container.querySelector(`[data-testid="${infoId}"]`);
        expect(element).not.toBeNull();
    });

    it('should render correct topic', async () => {
        const element = container.querySelector(`[data-testid="${topicId}"]`);
        expect(element?.innerHTML).toBe('ENVIRONMENT');
    });

    it('should render correct information', async () => {
        const element = container.querySelector(`[data-testid="${infoId}"]`);
        expect(element?.innerHTML).toBe('Mainnet');
    });
});
