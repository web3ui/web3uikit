import React from 'react';
import { render } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import * as stories from './Grid.stories';

const { Default } = composeStories(stories);
test('Renders - Grid component', () => {
    const { baseElement } = render(<Default />);

    expect(baseElement).toBeTruthy();
});
