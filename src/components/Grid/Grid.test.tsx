// importing boilerplate stuff
import React from 'react';
import { composeStories } from '@storybook/testing-react';
import { render } from '@testing-library/react';
import * as stories from './Grid.stories';

// importing my stories to test
const { ResponsiveCardGrid, GridWithinGrid, GridPlayground } =
    composeStories(stories);

// /////////////////////////////////////////////////////
// examples of basic tests of props, values and styles
// /////////////////////////////////////////////////////

// Test Story 1: Responsive card grid
test('Renders Default component', () => {
    render(<ResponsiveCardGrid />);
});

// Test Story 2: GridWithinGrid
// Uses a responsive grid inside a normal grid
test('Renders GridWithinGrid', () => {
    render(<GridWithinGrid />);
});

// Test Story 2: GridWithinGrid
// Test and view grid items using test data
test('Renders GridWithinGrid', () => {
    render(<GridPlayground />);
});
