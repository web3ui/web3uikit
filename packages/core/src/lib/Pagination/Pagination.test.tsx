import React from 'react';
import { render } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import * as stories from './Pagination.stories';

const { Default } = composeStories(stories);
//TODO: add more tests
test('Renders - Pagination component', () => {
    const { baseElement } = render(<Default />);

    expect(baseElement).toBeTruthy();
});
