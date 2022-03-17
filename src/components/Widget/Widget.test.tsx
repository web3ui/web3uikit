import React from 'react';
import ReactDOM from 'react-dom';
import { composeStories } from '@storybook/testing-react';
import * as stories from './Widget.stories';
import 'jest-styled-components';

const { Demo } = composeStories(stories);

describe('Widget - Demo', () => {
    let container: HTMLDivElement;
    const titleId = 'widget-title';
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

    it('should render the title', () => {
        const element = container.querySelector(`[data-testid="${titleId}"]`);
        expect(element).toBeDefined();
    });

    it('should render informartion', () => {
        const element = container.querySelector(`[data-testid="${infoId}"]`);
        expect(element).toBeDefined();
    });

    it('should render correct title', async () => {
        const element = container.querySelector(`[data-testid="${titleId}"]`);
        expect(element?.innerHTML).toBe('ENVIRONMENT');
    });

    it('should render correct information', async () => {
        const element = container.querySelector(`[data-testid="${infoId}"]`);
        expect(element?.innerHTML).toBe('Mainnet');
    });
});
