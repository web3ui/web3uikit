import React from 'react';
import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import * as stories from './Widget.stories';

const { Demo } = composeStories(stories);

const container = 'widget-container';
const titleId = 'widget-title';
const infoId = 'widget-info';

test('Widget Test', async () => {
    const demoInfoText = Demo.args?.info;
    const demoTitleText = Demo.args?.title;

    render(<Demo />);

    // should render widget
    const element = screen.getByTestId(container);
    expect(element).not.toBeNull();

    // should render the title
    const titleElement = screen.getByTestId(titleId);
    expect(titleElement).toBeDefined();

    // should render information
    const infoElement = screen.getByTestId(infoId);
    expect(infoElement).toBeDefined();

    // should render correct title
    const titleText = screen.getByTestId(titleId);
    expect(titleText?.textContent).toBe(demoTitleText);

    // should render correct info
    const infoText = screen.getByTestId(infoId);
    expect(infoText?.textContent).toBe(demoInfoText);
});
