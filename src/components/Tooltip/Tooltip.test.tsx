import { composeStories } from '@storybook/testing-react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import 'jest-styled-components';
import React from 'react';
import * as stories from './Tooltip.stories';

const { Bottom, Top, Left, Right } = composeStories(stories);

const toolTipContainer = 'tooltip-container-test-id';
const toolTipChildren = 'tooltip-children-test-id';

test('Tooltip - Bottom', async () => {
    render(<Bottom />);

    // should render widget
    const container = screen.getByTestId(toolTipContainer);
    expect(container).not.toBeNull();

    // should show text on hover
    fireEvent.mouseOver(screen.getByTestId(toolTipChildren));

    const childrenContainer = await waitFor(() =>
        screen.getByTestId(toolTipContainer),
    );
    expect(childrenContainer).toBeDefined();
});

test('Tooltip - Top', async () => {
    render(<Top />);

    // should render widget
    const container = screen.getByTestId(toolTipContainer);
    expect(container).not.toBeNull();

    // should show text on hover
    fireEvent.mouseOver(screen.getByTestId(toolTipChildren));

    const childrenContainer = await waitFor(() =>
        screen.getByTestId(toolTipContainer),
    );
    expect(childrenContainer).toBeDefined();
});

test('Tooltip - Right', async () => {
    render(<Right />);

    // should render widget
    const container = screen.getByTestId(toolTipContainer);
    expect(container).not.toBeNull();

    // should show text on hover
    fireEvent.mouseOver(screen.getByTestId(toolTipChildren));

    const childrenContainer = await waitFor(() =>
        screen.getByTestId(toolTipContainer),
    );
    expect(childrenContainer).toBeDefined();
});

test('Tooltip - Left', async () => {
    render(<Left />);

    // should render widget
    const container = screen.getByTestId(toolTipContainer);
    expect(container).not.toBeNull();

    // should show text on hover
    fireEvent.mouseOver(screen.getByTestId(toolTipChildren));

    const childrenContainer = await waitFor(() =>
        screen.getByTestId(toolTipContainer),
    );
    expect(childrenContainer).toBeDefined();
});
