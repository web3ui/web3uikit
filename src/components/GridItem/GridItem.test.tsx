// importing boilerplate stuff
import React from 'react';
import { composeStories } from '@storybook/testing-react';
import { render } from '@testing-library/react';
import * as stories from './GridItem.stories';

// importing my stories to test
const { Sample } = composeStories(stories);

// /////////////////////////////////////////////////////
// examples of basic tests of props, values and styles
// /////////////////////////////////////////////////////

// Test Story 1: Default
test('Renders Default component', () => {
    render(<Sample />);
});
